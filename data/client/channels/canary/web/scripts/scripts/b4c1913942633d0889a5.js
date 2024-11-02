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
    144991: function (e, n, t) {
      t(411104);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(149765),
        s = t(481060),
        d = t(208884),
        c = t(453628),
        u = t(996987),
        m = t(332014),
        h = t(113207);
      class p extends l.PureComponent {
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
          return (0, i.jsx)(s.Tooltip, {
            text: e,
            position: "top",
            color: s.Tooltip.Colors.RED,
            children: (e) =>
              (0, i.jsx)("span", {
                ...e,
                children: (0, i.jsx)(s.DenyIcon, {
                  size: "sm",
                  color: "currentColor",
                  className: m.icon,
                }),
              }),
          });
        }
        renderComponent(e) {
          let { title: n, description: t, helpdeskArticleId: l, flag: r } = e,
            { permissions: o, locked: c, permissionRender: h } = this.props,
            p = null == h ? void 0 : h(r),
            g = !!(c || p),
            f = "string" == typeof p ? this.renderDisabledIndicator(p) : null,
            x = a()({ [m.title]: null != f });
          return null == o
            ? (0, i.jsxs)(
                u.Z,
                {
                  disabled: g,
                  value: this.getOverwriteValue(r),
                  onChange: (e) => this.handleChange(r, e),
                  note: (0, d._u)(t),
                  helpdeskArticleId: l,
                  children: [
                    f,
                    (0, i.jsx)("span", { className: x, children: n }),
                  ],
                },
                String(r),
              )
            : (0, i.jsxs)(
                s.FormSwitch,
                {
                  disabled: g,
                  value: this.getPermissionValue(r, o),
                  onChange: (e) => this.handleChange(r, e),
                  note: (0, d._u)(t),
                  children: [
                    f,
                    (0, i.jsx)("span", { className: x, children: n }),
                  ],
                },
                String(r),
              );
        }
        render() {
          let { spec: e, className: n } = this.props;
          return (0, i.jsx)(s.FormSection, {
            className: n,
            children: (0, i.jsxs)(s.HeadingLevel, {
              component: (0, i.jsx)(s.FormTitle, {
                tag: s.FormTitleTags.H5,
                className:
                  null != e.description ? h.marginBottom8 : h.marginBottom20,
                children: e.title,
              }),
              children: [
                null != e.description &&
                  (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    className: h.marginBottom20,
                    children: e.description,
                  }),
                e.permissions.map(this.renderComponent, this),
              ],
            }),
          });
        }
      }
      n.Z = p;
    },
    228643: function (e, n, t) {
      t.d(n, {
        L_: function () {
          return s;
        },
        nj: function () {
          return d;
        },
        sE: function () {
          return o;
        },
      });
      var i = t(544891),
        l = t(570140),
        r = t(480608),
        a = t(981631);
      function o(e, n) {
        i.tn
          .get({ url: a.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n) })
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
              l.Z.dispatch({
                type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                roleId: n,
                roleConnectionConfigurations: t,
              });
          })
          .catch(() => {});
      }
      async function s(e, n, t) {
        let o = t.map((e) =>
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
              url: a.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
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
          d = await (0, r.H)(e, n, !1);
        null != d &&
          l.Z.dispatch({
            type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
            guildId: e,
            roleId: n,
            count: d,
          }),
          l.Z.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: n,
            roleConnectionConfigurations: s,
          });
      }
      async function d() {
        return (
          await i.tn.get({ url: a.ANM.APPLICATION_USER_ROLE_CONNECTIONS })
        ).body;
      }
    },
    325476: function (e, n, t) {
      var i,
        l,
        r = t(200651),
        a = t(192379),
        o = t(120356),
        s = t.n(o),
        d = t(481060),
        c = t(600164),
        u = t(121173);
      function m(e, n, t) {
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
      class h extends (i = a.PureComponent) {
        render() {
          let { scrollable: e, ...n } = this.props;
          return e
            ? (0, r.jsx)("aside", {
                className: u.sidebarScrollable,
                children: (0, r.jsx)(d.Scroller, {
                  fade: !0,
                  className: u.scroller,
                  children: (0, r.jsx)(c.Z.Child, { ...n, wrap: !0 }),
                }),
              })
            : (0, r.jsx)(c.Z.Child, { ...n, wrap: !0 });
        }
      }
      m(h, "defaultProps", {
        basis: 232,
        grow: 0,
        shrink: 0,
        className: u.sidebar,
      });
      class p extends a.PureComponent {
        render() {
          let { className: e, ...n } = this.props;
          return (0, r.jsx)(c.Z.Child, {
            className: s()(u.content, e),
            wrap: !0,
            ...n,
          });
        }
      }
      class g extends (l = a.PureComponent) {
        render() {
          return (0, r.jsx)(c.Z, { ...this.props });
        }
      }
      m(g, "defaultProps", {
        className: u.layout,
        direction: c.Z.Direction.HORIZONTAL,
        justify: c.Z.Justify.START,
        align: c.Z.Align.START,
        wrap: c.Z.Wrap.NO_WRAP,
        shrink: 1,
        grow: 1,
        basis: "auto",
      }),
        m(g, "Direction", c.Z.Direction),
        m(g, "Justify", c.Z.Justify),
        m(g, "Align", c.Z.Align),
        m(g, "Wrap", c.Z.Wrap),
        m(g, "Sidebar", h),
        m(g, "Content", p),
        (n.ZP = g);
    },
    659388: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      }),
        t(47120);
      var i = t(192379),
        l = t(999153),
        r = t(584922);
      function a(e) {
        let {
            type: n,
            index: t,
            optionId: a,
            onDragStart: o,
            onDragComplete: s,
            onDragReset: d,
          } = e,
          [c, u] = i.useState(!1),
          [, m] = (0, l.c)({
            type: n,
            item: () => (o(a), { id: a, position: t }),
            canDrag: () => c,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: (e, n) => {
              let t = n.getDropResult();
              if (null == t) {
                d();
                return;
              }
              s(t.optionId);
            },
          }),
          [{ dragSourcePosition: h }, p] = (0, r.L)({
            accept: n,
            canDrop: () => !0,
            collect: (e) => {
              let n = e.getItem();
              return null != n && e.isOver() && e.canDrop()
                ? { dragSourcePosition: n.position }
                : { dragSourcePosition: null };
            },
            drop: () => ({ optionId: a }),
          });
        return { drag: m, dragSourcePosition: h, drop: p, setIsDraggable: u };
      }
    },
    710344: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(47120);
      var i = t(192379);
      function l(e, n) {
        let [t, l] = i.useState(null),
          r = i.useCallback((e) => {
            l(e);
          }, []),
          a = i.useCallback(() => {
            l(null);
          }, []),
          o = i.useCallback(
            (i) => {
              a();
              let l = e.find((e) => {
                  let { id: n } = e;
                  return t === n;
                }),
                r = e.find((e) => {
                  let { id: n } = e;
                  return i === n;
                });
              if (null == l || null == r || l === r) return;
              let o = [...e],
                s = o.indexOf(l),
                d = o.indexOf(r),
                c = d - s > 0 ? 1 : 0;
              o.splice(s, 1), (d = o.indexOf(r)), o.splice(d + c, 0, l), n(o);
            },
            [e, t, a, n],
          );
        return {
          draggingId: t,
          handleDragStart: r,
          handleDragReset: a,
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
            return s;
          },
        });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(239091),
        a = t(241635),
        o = t(388032);
      function s(e, n) {
        return (0, a.Z)(e, n).length > 0;
      }
      function d(e) {
        let { role: n, guild: t, onSelect: s } = e,
          d = (0, a.Z)(t, n);
        return 0 === d.length
          ? null
          : (0, i.jsx)(l.Menu, {
              navId: "guild-settings-role-context",
              "aria-label": o.intl.string(o.t["337Ja2"]),
              onClose: r.Zy,
              onSelect: s,
              children: d,
            });
      }
    },
    241635: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(653041);
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        a = t(749210),
        o = t(240872),
        s = t(605436),
        d = t(228643),
        c = t(299206),
        u = t(496675),
        m = t(867108),
        h = t(388032);
      function p(e, n) {
        var t;
        let p = (0, l.e7)([u.Z], () => {
            let t = u.Z.getHighestRole(e);
            return !u.Z.isRoleHigher(e, t, n);
          }),
          g = [],
          f = (0, m.Z)(e, n);
        null != f && g.push(f);
        let x = (0, c.Z)({ id: n.id, label: h.intl.string(h.t.sMsaLi) });
        null != x && g.push(x);
        let b =
            (null === (t = n.tags) || void 0 === t
              ? void 0
              : t.guild_connections) === null,
          v = n.managed && !b,
          C = null != n && (0, s.pM)(e.id, n.id);
        return (
          !p &&
            !v &&
            !C &&
            g.push(
              (0, i.jsx)(
                r.MenuGroup,
                {
                  children: (0, i.jsx)(r.MenuItem, {
                    id: "delete-role",
                    label: h.intl.string(h.t.oyYWHB),
                    color: "danger",
                    icon: r.TrashIcon,
                    action: () => {
                      o.Z.show({
                        title: h.intl.string(h.t.YWISbW),
                        body: h.intl.format(h.t["9+nrUV"], { name: n.name }),
                        cancelText: h.intl.string(h.t["ETE/oK"]),
                        onConfirm: async () => {
                          b && (await (0, d.L_)(e.id, n.id, [])),
                            a.Z.deleteRole(e.id, n.id);
                        },
                      });
                    },
                  }),
                },
                "delete-role",
              ),
            ),
          g
        );
      }
    },
    867108: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        a = t(434404),
        o = t(962086),
        s = t(225675),
        d = t(496675),
        c = t(981631),
        u = t(388032);
      function m(e, n) {
        let t =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : c.pNK.ROLES;
        return (0, l.e7)([d.Z], () => d.Z.canImpersonateRole(e, n))
          ? (0, i.jsx)(
              r.MenuItem,
              {
                id: "view-as-role",
                label: u.intl.string(u.t.arFPfH),
                icon: r.ArrowSmallRightIcon,
                action: () => {
                  a.Z.close(),
                    (0, o.iD)(e.id, {
                      type: s.z.ROLES,
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
          return g;
        },
        Fi: function () {
          return p;
        },
        KK: function () {
          return u;
        },
        f6: function () {
          return m;
        },
        n: function () {
          return h;
        },
      }),
        t(47120);
      var i = t(913527),
        l = t.n(i),
        r = t(544891),
        a = t(367907),
        o = t(434404),
        s = t(430824),
        d = t(626135),
        c = t(981631);
      function u(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== n.length)
          d.default.track(c.rMx.GUILD_RAID_REPORTED, {
            ...(0, a.hH)(e),
            guild_id: e,
            raid_types: n,
          });
      }
      async function m(e, n) {
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
      async function h(e, n, t, i) {
        let a = l()().add(i, "hours").toISOString();
        return await r.tn.put({
          url: c.ANM.GUILD_INCIDENT_ACTIONS(e),
          body: {
            invites_disabled_until: n ? a : null,
            dms_disabled_until: t ? a : null,
          },
        });
      }
      async function p(e, n, t) {
        let i = s.Z.getGuild(e);
        return null == (null == i ? void 0 : i.getSafetyAlertsChannelId())
          ? null
          : await r.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: n, reason: t },
            });
      }
      async function g(e) {
        let n = s.Z.getGuild(e);
        return null == (null == n ? void 0 : n.getSafetyAlertsChannelId())
          ? null
          : await r.tn.post({ url: c.ANM.GUILD_INCIDENT_REPORT_RAID(e) });
      }
    },
    162157: function (e, n, t) {
      t.d(n, {
        BT: function () {
          return d;
        },
        N8: function () {
          return s;
        },
      });
      var i = t(442837);
      t(467319);
      var l = t(496675),
        r = t(533244),
        a = t(487419),
        o = t(981631);
      function s(e) {
        let n = (0, i.e7)(
            [l.Z],
            () =>
              (function (e) {
                let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : l.Z;
                return (
                  n.can(o.Plq.BAN_MEMBERS, e) ||
                  n.can(o.Plq.KICK_MEMBERS, e) ||
                  n.can(o.Plq.MANAGE_GUILD, e)
                );
              })(e, l.Z),
            [e],
          ),
          t = (0, i.e7)(
            [a.Z],
            () => (null != e ? a.Z.getGuildIncident(e.id) : null),
            [e],
          );
        return !(null != t && (0, r.i9)(t)) && n;
      }
      function d(e) {
        return (0, i.e7)(
          [l.Z],
          () =>
            (function (e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : l.Z;
              return n.can(o.Plq.MANAGE_GUILD, e);
            })(e, l.Z),
          [e],
        );
      }
    },
    821312: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(831209),
        s = t(481060),
        d = t(367907),
        c = t(177862),
        u = t(981631),
        m = t(388032),
        h = t(217329);
      function p(e) {
        let { guildId: n, transitionState: t, onClose: r } = e,
          [p, g] = l.useState([]),
          [f, x] = l.useState(),
          b = [
            { text: m.intl.string(m.t["//3pvr"]), value: c.C2.DM_SPAM },
            { text: m.intl.string(m.t.SdVsio), value: c.C2.MENTION_SPAM },
            { text: m.intl.string(m.t.uTiSVF), value: c.C2.CHANNEL_SPAM },
            { text: m.intl.string(m.t.GQczU1), value: c.C2.SUS_NEW_MEMBERS },
            { text: m.intl.string(m.t.AAgqy8), value: c.C2.CHANGING_SETTINGS },
            { text: m.intl.string(m.t.ryPKb2), value: c.C2.OTHER },
          ];
        function v(e) {
          p.includes(e)
            ? g((n) => n.filter((n) => n !== e))
            : g((n) => [...n, e]);
        }
        return null == n
          ? (r(), null)
          : (0, i.jsxs)(s.ModalRoot, {
              transitionState: t,
              size: s.ModalSize.MEDIUM,
              children: [
                (0, i.jsx)(s.ModalHeader, {
                  separator: !0,
                  children: (0, i.jsxs)("div", {
                    className: h.headerContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: h.headerText,
                        children: [
                          (0, i.jsx)(s.LockIcon, {
                            size: "xs",
                            color: o.Z.INTERACTIVE_NORMAL,
                          }),
                          (0, i.jsx)(s.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children: m.intl.string(m.t.f5hd9P),
                          }),
                        ],
                      }),
                      (0, i.jsx)(s.Clickable, {
                        onClick: r,
                        children: (0, i.jsx)(s.XSmallIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: h.closeIcon,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(s.ModalContent, {
                  children: (0, i.jsx)("div", {
                    className: h.options,
                    children: b.map((e) => {
                      let { text: n, value: t } = e;
                      return (0, i.jsxs)(
                        "div",
                        {
                          className: a()(h.optionContainer, {
                            [h.optionContainerOther]: t === c.C2.OTHER,
                          }),
                          children: [
                            (0, i.jsxs)(s.Clickable, {
                              className: h.optionText,
                              onClick: () => v(t),
                              children: [
                                (0, i.jsx)("div", {
                                  children: (0, i.jsx)(s.Checkbox, {
                                    type: s.Checkbox.Types.INVERTED,
                                    size: 20,
                                    value: p.includes(t),
                                    onChange: () => v(t),
                                  }),
                                }),
                                (0, i.jsx)(s.Text, {
                                  variant: "text-md/medium",
                                  color: p.includes(t)
                                    ? "interactive-active"
                                    : "interactive-normal",
                                  children: n,
                                }),
                              ],
                            }),
                            t === c.C2.OTHER &&
                              p.includes(c.C2.OTHER) &&
                              (0, i.jsx)("div", {
                                className: h.textboxContainer,
                                children: (0, i.jsx)(s.TextArea, {
                                  className: h.serverLockdownReasonText,
                                  placeholder: m.intl.string(m.t["PAM+JS"]),
                                  onChange: (e) => x(e),
                                  value: f,
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
                (0, i.jsx)(s.ModalFooter, {
                  children: (0, i.jsx)(s.Button, {
                    onClick: function () {
                      (0, d.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                        raid_lockdown_feedback_type: p,
                        raid_lockdown_feedback_other_reason: f,
                        guild_id: n,
                      }),
                        r();
                    },
                    color: s.Button.Colors.BRAND,
                    look: s.Button.Looks.FILLED,
                    submitting: !1,
                    children: m.intl.string(m.t.nAt0rK),
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
            return C;
          },
        }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(831209),
        a = t(442837),
        o = t(481060),
        s = t(688465),
        d = t(430824),
        c = t(626135),
        u = t(369994),
        m = t(162157),
        h = t(533244),
        p = t(487419),
        g = t(821312),
        f = t(676770),
        x = t(981631),
        b = t(388032),
        v = t(547193);
      function C(e) {
        let {
            guildId: n,
            transitionState: t,
            onClose: C,
            analyticsData: I,
          } = e,
          N = (0, a.e7)([d.Z], () => d.Z.getGuild(n), [n]),
          T = !!(null == N ? void 0 : N.hasFeature(x.oNc.INVITES_DISABLED)),
          [_] = l.useState(!1),
          [j, S] = l.useState(f.Fl),
          E = (0, a.e7)([p.Z], () => p.Z.getGuildIncident(n)),
          Z = (0, m.BT)(N),
          A = (0, h.SG)(E) || T,
          y = (0, h.sN)(E),
          [R, O] = l.useState(A),
          [L, k] = l.useState(y),
          [w, M] = l.useState(!1),
          B = R !== A || L !== y || w,
          P = T && !Z;
        if (null == N) return C(), null;
        function D() {
          O((e) => !e);
        }
        return (0, i.jsxs)(o.ModalRoot, {
          transitionState: t,
          size: o.ModalSize.MEDIUM,
          children: [
            (0, i.jsx)(o.ModalHeader, {
              separator: !0,
              children: (0, i.jsxs)("div", {
                className: v.headerContainer,
                children: [
                  (0, i.jsx)(o.LockIcon, {
                    size: "xs",
                    color: r.Z.INTERACTIVE_NORMAL,
                  }),
                  (0, i.jsx)(o.Heading, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: b.intl.string(b.t.oCYAc3),
                  }),
                  (0, i.jsx)(s.Z, {}),
                ],
              }),
            }),
            (0, i.jsx)(o.ModalContent, {
              children: (0, i.jsxs)("div", {
                className: v.mainContainer,
                children: [
                  (0, i.jsx)(o.Select, {
                    placeholder: b.intl.string(b.t.vKYZzc),
                    options: (0, f.c1)(),
                    select: (e) => {
                      S(e), M(!0);
                    },
                    isSelected: (e) => e === j,
                    serialize: (e) => String(e),
                  }),
                  (0, i.jsxs)("div", {
                    className: v.pauseContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: v.pauseText,
                        children: [
                          (0, i.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: b.intl.string(b.t.Uwsjn5),
                          }),
                          (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: b.intl.string(b.t.qPJkZm),
                          }),
                        ],
                      }),
                      (0, i.jsx)(o.Tooltip, {
                        text: b.intl.string(b.t["9GPbsb"]),
                        shouldShow: T,
                        children: (e) =>
                          (0, i.jsx)("div", {
                            ...e,
                            children: (0, i.jsx)(o.Switch, {
                              className: v.toggle,
                              onChange: D,
                              checked: R,
                              disabled: P,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: v.pauseContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: v.pauseText,
                        children: [
                          (0, i.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: b.intl.string(b.t.wrDmAw),
                          }),
                          (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: b.intl.string(b.t.UQbJW1),
                          }),
                        ],
                      }),
                      (0, i.jsx)(o.Switch, {
                        className: v.toggle,
                        onChange: function () {
                          k((e) => !e);
                        },
                        checked: L,
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
                    (A || y) && !R && !L
                      ? ((0, u.n)(N.id, !1, !1),
                        (0, o.openModalLazy)(() =>
                          Promise.resolve((e) =>
                            (0, i.jsx)(g.Z, { ...e, guildId: n }),
                          ),
                        ))
                      : (0, u.n)(N.id, R, L, j);
                    let { source: e, alertType: t, messageId: l } = I;
                    c.default.track(
                      x.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE,
                      {
                        guild_id: n,
                        source: e,
                        raid_alert_id: l,
                        raid_alert_type: t,
                        intervention_type_enabled: (0, h.sO)(R, L),
                        intervention_type_disabled: (0, h.lk)(R, L),
                        duration: 60 * j,
                      },
                    ),
                      C();
                  },
                  color: o.Button.Colors.BRAND,
                  look: o.Button.Looks.FILLED,
                  submitting: _,
                  disabled: !B,
                  children: b.intl.string(b.t["pwm/z8"]),
                }),
                (0, i.jsx)(o.Button, {
                  onClick: C,
                  color: o.Button.Colors.PRIMARY,
                  look: o.Button.Looks.LINK,
                  disabled: _,
                  children: b.intl.string(b.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    360606: function (e, n, t) {
      let i, l;
      t(653041), t(47120);
      var r,
        a,
        o,
        s,
        d = t(392711),
        c = t.n(d),
        u = t(442837),
        m = t(570140),
        h = t(308063),
        p = t(496675),
        g = t(855674),
        f = t(999382),
        x = t(981631);
      let b = [],
        v = [],
        C = null,
        I = null,
        N = null,
        T = !1,
        _ = !1,
        j = x.QZA.CLOSED,
        S = {},
        E = !1,
        Z = null;
      function A(e) {
        let { section: n } = e;
        if (n !== x.pNK.INTEGRATIONS) return !1;
        if (((l = x.b4C.OVERVIEW), null == i)) {
          let e = f.Z.getGuildId();
          null != e && h.Z.fetchForGuild(e), y(!1);
        }
      }
      function y(e) {
        if (
          null != (i = f.Z.getProps().guild) &&
          p.Z.can(x.Plq.MANAGE_GUILD, i)
        ) {
          let e = f.Z.getProps().integrations;
          null == e && (_ = !0), (b = null != e ? e : []);
        } else b = [];
        if (
          ((v =
            null != i && p.Z.can(x.Plq.MANAGE_WEBHOOKS, i)
              ? g.Z.getWebhooksForGuild(i.id)
              : []),
          !e && null != I)
        ) {
          let e = O(I.id);
          null != e && (I = e);
        }
        if (null != N) {
          let e = L(N.id);
          null != e && (N = e);
        }
        (C = null), (j = x.QZA.OPEN), (S = {}), (E = !1);
      }
      let R = c().debounce(() => {
        E &&
          (null != I
            ? c().isEqual(I, O(I.id)) && (E = !1)
            : null != N && c().isEqual(N, L(N.id)) && (E = !1),
          !E && w.emitChange());
      }, 500);
      function O(e) {
        return b.find((n) => {
          let { id: t } = n;
          return t === e;
        });
      }
      function L(e) {
        return v.find((n) => {
          let { id: t } = n;
          return t === e;
        });
      }
      class k extends (r = u.ZP.Store) {
        initialize() {
          this.waitFor(f.Z, g.Z, p.Z);
        }
        hasChanges() {
          return E;
        }
        get guild() {
          return i;
        }
        get integrations() {
          return b;
        }
        get webhooks() {
          return v;
        }
        get editedCommandId() {
          return C;
        }
        get editedIntegration() {
          return I;
        }
        get editedWebhook() {
          return N;
        }
        get formState() {
          return j;
        }
        getErrors() {
          return S;
        }
        getSection() {
          return l;
        }
        getSectionId() {
          return Z;
        }
        getIntegration(e) {
          return O(e);
        }
        getWebhook(e) {
          return L(e);
        }
        isFetching() {
          return _ || T;
        }
        showNotice() {
          return this.hasChanges();
        }
        getApplication(e) {
          var n;
          return null ===
            (n = b.find((n) => {
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
      (s = "GuildSettingsIntegrationsStore"),
        (o = "displayName") in (a = k)
          ? Object.defineProperty(a, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[o] = s);
      let w = new k(
        m.Z,
        __OVERLAY__
          ? {}
          : {
              INTEGRATION_SETTINGS_INIT: function () {
                return y(!1);
              },
              INTEGRATION_SETTINGS_SAVE_SUCCESS: function () {
                return y(!0);
              },
              GUILD_SETTINGS_INIT: A,
              GUILD_SETTINGS_SET_SECTION: A,
              INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                let { section: n, sectionId: t } = e;
                (l = n), (Z = t);
              },
              INTEGRATION_SETTINGS_START_EDITING_COMMAND: function (e) {
                let { commandId: n } = e;
                (C = n), (I = null), (N = null), (S = {}), (E = !0);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function (e) {
                let { commandId: n } = e;
                if (null == C || C !== n) return !1;
                (C = null), (S = {}), (E = !1);
              },
              INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function (e) {
                let { integrationId: n } = e,
                  t = O(n);
                if (null == t) return !1;
                (I = t), (C = null), (N = null), (S = {}), (E = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function () {
                (I = null), (S = {}), (E = !1);
              },
              INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function (e) {
                let { settings: n } = e;
                if (null == I) return !1;
                (I = { ...I }),
                  null != n.enableEmoticons &&
                    I.enable_emoticons !== n.enableEmoticons &&
                    ((I.enable_emoticons = n.enableEmoticons), (E = !0)),
                  null != n.expireBehavior &&
                    I.expire_behavior !== n.expireBehavior &&
                    ((I.expire_behavior = n.expireBehavior), (E = !0)),
                  null != n.expireGracePeriod &&
                    I.expire_grace_period !== n.expireGracePeriod &&
                    ((I.expire_grace_period = n.expireGracePeriod), (E = !0)),
                  E && R();
              },
              INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                let { settings: n } = e;
                if (null == N) return !1;
                (N = { ...N }),
                  null != n.name &&
                    N.name !== n.name &&
                    ((N.name = n.name), (E = !0)),
                  void 0 !== n.avatar &&
                    N.avatar !== n.avatar &&
                    ((N.avatar = n.avatar), (E = !0)),
                  null != n.channelId &&
                    N.channel_id !== n.channelId &&
                    ((N.channel_id = n.channelId), (E = !0)),
                  E && R();
              },
              INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                let { webhookId: n } = e,
                  t = L(n);
                if (null == t) return !1;
                (N = t), (C = null), (I = null), (S = {}), (E = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                (N = null), (S = {}), (E = !1);
              },
              GUILD_SETTINGS_CLOSE: function () {
                (i = null),
                  (b = []),
                  (v = []),
                  (C = null),
                  (I = null),
                  (N = null),
                  (j = x.QZA.CLOSED),
                  (E = !1);
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                let { guildId: n, integrations: t } = e;
                if (null == i || n !== i.id || j === x.QZA.SUBMITTING)
                  return !1;
                for (let e of ((_ = !1), t))
                  if (
                    null ==
                    b.find((n) => {
                      let { id: t } = n;
                      if (t === e.id) return !0;
                    })
                  ) {
                    var l, r;
                    b.push(e),
                      e.type === (null == I ? void 0 : I.type) &&
                        (null === (l = e.account) || void 0 === l
                          ? void 0
                          : l.id) ===
                          (null === (r = I.account) || void 0 === r
                            ? void 0
                            : r.id) &&
                        (I = e);
                  }
                for (let e = b.length - 1; e >= 0; e--) {
                  let n = b[e],
                    i = t.find((e) => {
                      let { id: t } = e;
                      if (t === n.id) return !0;
                    });
                  if (null != i) {
                    let t = { ...n, ...i };
                    (null == I ? void 0 : I.id) === t.id &&
                      (!1 === t.enabled ? (I = null) : !E && (I = t)),
                      (b[e] = t);
                  } else
                    (null == I ? void 0 : I.id) === n.id && (I = null),
                      b.splice(e, 1);
                }
                (b = [...b]), R();
              },
              WEBHOOKS_UPDATE: function (e) {
                let { guildId: n, channelId: t, webhooks: l } = e;
                if (
                  null == i ||
                  n !== i.id ||
                  null == l ||
                  j === x.QZA.SUBMITTING
                )
                  return !1;
                T = !1;
                for (let e = v.length - 1; e >= 0; e--) {
                  let n = v[e];
                  if (null != t && (null == n ? void 0 : n.channel_id) !== t)
                    continue;
                  let i = l.find((e) => {
                    let { id: t } = e;
                    if (t === n.id) return !0;
                  });
                  if (null != i) {
                    let t = { ...n, ...i };
                    (v[e] = t),
                      !E && (null == N ? void 0 : N.id) === t.id && (N = t);
                  } else
                    (null == N ? void 0 : N.id) === n.id && (N = null),
                      v.splice(e, 1);
                }
                for (let e of l)
                  null ==
                    v.find((n) => {
                      let { id: t } = n;
                      if (t === e.id) return !0;
                    }) && v.push(e);
                (v = [...v]), R();
              },
              INTEGRATION_SETTINGS_SUBMITTING: function () {
                (j = x.QZA.SUBMITTING), (S = {});
              },
              INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                var n;
                if (j !== x.QZA.SUBMITTING) return !1;
                (j = x.QZA.OPEN),
                  (S = null !== (n = e.errors) && void 0 !== n ? n : {});
              },
            },
      );
      n.Z = w;
    },
    282923: function (e, n, t) {
      t.d(n, {
        B: function () {
          return r;
        },
      }),
        t(653041),
        t(47120);
      var i = t(658722),
        l = t.n(i);
      function r(e, n, t) {
        if ("" === t) return e;
        let i = t.toLowerCase(),
          r = [];
        for (let a of e) {
          let { id: e, names: o } = n(a);
          if (e === t) return [a];
          o.some((e) => l()(i, e.toLowerCase())) && r.push(a);
        }
        return r;
      }
    },
    905753: function (e, n, t) {
      let i, l, r;
      t(47120);
      var a,
        o,
        s,
        d,
        c = t(442837),
        u = t(570140),
        m = t(581364),
        h = t(399860);
      let p = {},
        g = {},
        f = !1;
      function x() {
        (i = void 0), (p = {}), (g = {}), (l = void 0), (r = void 0), (f = !1);
      }
      class b extends (a = c.ZP.Store) {
        getApplicationPermissions() {
          return p;
        }
        getCommands() {
          return g;
        }
        getCommand(e) {
          return null == g ? void 0 : g[e];
        }
        getEditedApplication() {
          return l;
        }
        getEditedCommand() {
          return r;
        }
        isUnavailable() {
          return f;
        }
        getApplicationId() {
          return i;
        }
      }
      (d = "IntegrationPermissionStore"),
        (s = "displayName") in (o = b)
          ? Object.defineProperty(o, s, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[s] = d),
        (n.Z = new b(u.Z, {
          LOGOUT: x,
          INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE:
            function (e) {
              let { applicationId: n } = e;
              if (n !== i) return !1;
              f = !0;
            },
          INTEGRATION_PERMISSION_SETTINGS_CLEAR: x,
          INTEGRATION_PERMISSION_SETTINGS_INIT: function (e) {
            let { applicationId: n } = e;
            x(), (i = n);
          },
          INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function (e) {
            let { applicationId: n, commandId: t, permissions: l } = e;
            if (n !== i) return !1;
            if (t === i) {
              p = (0, h.tk)(l);
              return;
            }
            let r = g[t];
            if (null == r) return !1;
            g[t] = { ...r, permissions: (0, h.tk)(l) };
          },
          INTEGRATION_PERMISSION_SETTINGS_EDIT: function (e) {
            let { applicationId: n, commandId: t, permissions: a } = e;
            if (n !== i) return !1;
            t === i ? (l = a) : (r = { commandId: t, permissions: a });
          },
          INTEGRATION_PERMISSION_SETTINGS_RESET: function (e) {
            let { commandId: n } = e;
            null == n ? (l = void 0) : (r = void 0);
          },
          INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function (e) {
            let { applicationId: n } = e;
            if (n !== i) return !1;
            f = !0;
          },
          INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function (e) {
            let { applicationId: n, commands: t, permissions: l } = e;
            if (n !== i) return !1;
            let r = Object.fromEntries(l.map((e) => [e.id, e.permissions])),
              a = {};
            for (let e of t)
              if (e.application_id === i) {
                let n = (0, m.Z8)({
                    rootCommand: e,
                    command: e,
                    applicationId: e.application_id,
                  }),
                  t = r[e.id];
                null != t && (n.permissions = (0, h.tk)(t)), (a[e.id] = n);
              }
            g = a;
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
      var i = t(192379),
        l = t(581364),
        r = t(984933),
        a = t(496675),
        o = t(282923),
        s = t(981631),
        d = t(388032);
      function c(e) {
        let n = i.useMemo(() => {
            let n = r.ZP.getChannels(e),
              t = [...n[r.sH]];
            t.push(...n[r.Zb].filter((e) => e.channel.isGuildVocal()));
            let i = t.map((e) => ({
              id: e.channel.id,
              name: e.channel.name,
              canManage: a.Z.can(s.Plq.MANAGE_ROLES, e.channel),
            }));
            return (
              i.unshift({
                id: (0, l.bD)(e),
                name: d.intl.string(d.t["7YqSGx"]),
                canManage: !0,
              }),
              i
            );
          }, [e]),
          [t, c] = i.useState(""),
          m = i.useMemo(() => {
            let e = (function (e) {
              return e.startsWith("#") ? e.substr(1) : e;
            })(t);
            return (0, o.B)(n, u, e);
          }, [n, t]);
        return { query: t, results: m, setQuery: c, unfilteredCount: n.length };
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
      var i = t(192379),
        l = t(373793),
        r = t(442837),
        a = t(911969),
        o = t(282923),
        s = t(905753);
      function d() {
        let e = (0, r.cj)([s.Z], () => {
            var e;
            return Object.values(
              null !== (e = s.Z.getCommands()) && void 0 !== e ? e : {},
            );
          }),
          [n, t] = i.useState(""),
          d = i.useMemo(
            () =>
              e.filter((e) => {
                var n;
                return (
                  (null == e.integration_types ||
                    e.integration_types.includes(l.Y.GUILD_INSTALL)) &&
                  (null == e.contexts ||
                    (null === (n = e.contexts) || void 0 === n
                      ? void 0
                      : n.includes(a.D.GUILD)))
                );
              }),
            [e],
          ),
          u = i.useMemo(
            () =>
              [...d].sort((e, n) => {
                let t = a.yU.CHAT + 1,
                  i = n.type > t ? t : n.type,
                  l = i - (e.type > t ? t : e.type);
                return 0 !== l
                  ? l
                  : e.untranslatedName.localeCompare(n.untranslatedName);
              }),
            [d],
          ),
          m = i.useMemo(
            () =>
              n.startsWith("/") ? u.filter((e) => e.type === a.yU.CHAT) : u,
            [n, u],
          ),
          h = i.useMemo(() => (n.startsWith("/") ? n.substring(1) : n), [n]);
        return {
          query: n,
          results: i.useMemo(() => (0, o.B)(m, c, h), [m, h]),
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
          return g;
        },
      }),
        t(653041),
        t(47120),
        t(733860);
      var i = t(192379),
        l = t(512722),
        r = t.n(l),
        a = t(149765),
        o = t(442837),
        s = t(271383),
        d = t(430824),
        c = t(496675),
        u = t(594174),
        m = t(700785),
        h = t(282923),
        p = t(981631);
      function g(e) {
        let n = (0, o.e7)([d.Z], () => d.Z.getGuild(e));
        r()(
          null != n,
          "guild must be present to be editing its integration settings",
        );
        let t = (0, o.e7)([c.Z], () => c.Z.getHighestRole(n)),
          l = (0, o.Wu)([s.ZP], () => s.ZP.getMembers(e), [e]),
          g = (0, o.cj)([u.default], () => u.default.getUsers()),
          b = (0, o.Wu)([d.Z], () => Object.values(d.Z.getRoles(e)), [e]),
          v = i.useMemo(() => {
            let e = [];
            for (let t of l) {
              let i = g[t.userId];
              if (null == i || i.bot) continue;
              let l =
                i.id !== n.ownerId &&
                !m.BT({
                  permission: p.Plq.ADMINISTRATOR,
                  user: i,
                  context: n,
                }) &&
                c.Z.canManageUser(p.Plq.USE_APPLICATION_COMMANDS, i, n);
              e.push({
                id: i.id,
                canManage: l,
                nick: t.nick,
                username: i.username,
              });
            }
            return e;
          }, [n, l, g]),
          C = (e) => {
            var n;
            return (
              e.managed &&
              (null === (n = e.tags) || void 0 === n ? void 0 : n.bot_id) !=
                null
            );
          },
          I = i.useMemo(() => {
            let i = [];
            for (let l of b) {
              if (C(l)) continue;
              let r =
                  !a.e$(l.permissions, p.Plq.ADMINISTRATOR) &&
                  c.Z.isRoleHigher(n, t, l),
                o = { id: l.id, name: l.name, canManage: r };
              l.id === e ? i.unshift(o) : i.push(o);
            }
            return i;
          }, [b, e, n, t]),
          [N, T] = i.useState(""),
          _ = i.useMemo(() => {
            let n = (function (e) {
                return e.startsWith("@") ? e.substr(1) : e;
              })(N),
              t = N.startsWith("@") ? I.filter((n) => n.id === e) : I,
              i = (0, h.B)(v, f, n);
            return { members: i, roles: (0, h.B)(t, x, n) };
          }, [e, v, N, I]);
        return {
          query: N,
          results: _,
          setQuery: T,
          unfilteredCount: _.members.length + _.roles.length,
        };
      }
      function f(e) {
        let n = [e.username];
        return (
          (null == e ? void 0 : e.nick) != null && n.push(e.nick),
          { id: e.id, names: n }
        );
      }
      function x(e) {
        return { id: e.id, names: [e.name] };
      }
    },
    995390: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      }),
        t(653041),
        t(47120);
      var i = t(192379),
        l = t(512722),
        r = t.n(l),
        a = t(392711),
        o = t.n(a),
        s = t(442837),
        d = t(139387),
        c = t(895924),
        u = t(581364),
        m = t(592125),
        h = t(430824),
        p = t(496675),
        g = t(594174),
        f = t(823379),
        x = t(905753),
        b = t(399860),
        v = t(981631);
      function C(e, n, t) {
        let l = (0, s.e7)([x.Z], () => x.Z.getApplicationPermissions()),
          a = i.useMemo(
            () =>
              (function (e, n) {
                let t = { ...n },
                  i = (0, u.bD)(e),
                  l = (0, b.rE)(i, c.Kw.CHANNEL),
                  r = (0, b.rE)(e, c.Kw.ROLE);
                return (
                  !(r in t) &&
                    (t[r] = { id: e, permission: !0, type: c.Kw.ROLE }),
                  !(l in t) &&
                    (t[l] = { id: i, permission: !0, type: c.Kw.CHANNEL }),
                  t
                );
              })(e, null != l ? l : {}),
            [l, e],
          ),
          C = (0, s.e7)(
            [x.Z],
            () => {
              var e;
              if (null == t) return;
              let n = x.Z.getCommand(t);
              return null !== (e = null == n ? void 0 : n.permissions) &&
                void 0 !== e
                ? e
                : {};
            },
            [t],
          ),
          I = (0, s.e7)(
            [x.Z],
            () => {
              var e;
              return null == t
                ? x.Z.getEditedApplication()
                : null === (e = x.Z.getEditedCommand()) || void 0 === e
                  ? void 0
                  : e.permissions;
            },
            [t],
          ),
          N = null != t ? t : n,
          T = null != t ? C : a,
          _ = i.useMemo(
            () => (null != I ? I : { ...(null != T ? T : {}) }),
            [I, T],
          ),
          j = i.useMemo(() => Object.keys(_).length, [_]),
          S = i.useMemo(
            () => (null == T || null == _ ? null : !o().isEqual(T, _)),
            [T, _],
          );
        return (
          i.useEffect(() => {
            if (N === n)
              S
                ? d.Z.startEditingCommandPermissions(N)
                : d.Z.stopEditingCommandPermissions(N);
          }, [n, S, N]),
          {
            originalApplicationPermissions: a,
            originalCommandPermissions: C,
            editedTargetPermissions: (function (e, n) {
              let t = (0, s.e7)([h.Z], () => h.Z.getGuild(e), [e]);
              r()(
                null != t,
                "guild must be present to be editing its integration settings",
              );
              let l = (0, s.e7)([p.Z], () => p.Z.getHighestRole(t), [t]),
                a = (0, s.e7)([g.default], () => {
                  var e;
                  return null === (e = g.default.getCurrentUser()) ||
                    void 0 === e
                    ? void 0
                    : e.id;
                });
              r()(
                null != a,
                "useComputePermissions: currentUserId must not be null",
              );
              let o = a === t.ownerId,
                {
                  channelIds: d,
                  roleIds: x,
                  userIds: b,
                } = i.useMemo(() => {
                  let e = [],
                    t = [],
                    i = [];
                  for (let l of Object.values(n))
                    l.type === c.Kw.CHANNEL
                      ? e.push(l.id)
                      : l.type === c.Kw.ROLE
                        ? t.push(l.id)
                        : l.type === c.Kw.USER && i.push(l.id);
                  return { channelIds: e, roleIds: t, userIds: i };
                }, [n]),
                C = (0, s.cj)(
                  [m.Z],
                  () =>
                    Object.fromEntries(
                      d
                        .map(m.Z.getChannel)
                        .filter(f.lm)
                        .map((e) => [e.id, e]),
                    ),
                  [d],
                ),
                I = (0, s.cj)(
                  [h.Z],
                  () =>
                    Object.fromEntries(
                      x
                        .map((n) => h.Z.getRole(e, n))
                        .filter(f.lm)
                        .map((e) => [e.id, e]),
                    ),
                  [x, e],
                ),
                N = (0, s.cj)(
                  [g.default],
                  () =>
                    Object.fromEntries(
                      b
                        .map(g.default.getUser)
                        .filter(f.lm)
                        .map((e) => [e.id, e]),
                    ),
                  [b],
                );
              return i.useMemo(() => {
                let e = t.id,
                  i = (0, u.bD)(t.id),
                  r = {};
                for (let [a, s] of Object.entries(n)) {
                  let n = !1,
                    d = !1;
                  if (s.type === c.Kw.CHANNEL) {
                    let e = s.id === i,
                      t = C[s.id];
                    (n = e || p.Z.can(v.Plq.VIEW_CHANNEL, t)), (d = !0);
                  } else if (s.type === c.Kw.ROLE) {
                    let i = s.id === e,
                      r = I[s.id];
                    (n = i || null != r),
                      (d = o || i || p.Z.isRoleHigher(t, l, r));
                  } else if (s.type === c.Kw.USER) {
                    let e = N[s.id];
                    (n = null != e),
                      (d =
                        null != e &&
                        (o ||
                          p.Z.canManageUser(
                            v.Plq.USE_APPLICATION_COMMANDS,
                            e,
                            t,
                          )));
                  }
                  r[a] = { ...s, canRead: n, canWrite: d };
                }
                return r;
              }, [C, t, l, o, n, I, N]);
            })(e, _),
            hasChanges: S,
            selectedPermissionCount: j,
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
      var i = t(200651),
        l = t(192379),
        r = t(481060),
        a = t(239091),
        o = t(911969),
        s = t(399860),
        d = t(388032),
        c = t(83956);
      function u(e) {
        let {
            applicationIcon: n,
            applicationName: u,
            canNavigate: m,
            command: h,
            guildId: p,
          } = e,
          g = l.useMemo(() => {
            var e;
            return (
              0 !==
              Object.keys(null !== (e = h.permissions) && void 0 !== e ? e : {})
                .length
            );
          }, [h.permissions]),
          f = l.useCallback(() => {
            null != h &&
              m() &&
              (0, r.openModalLazy)(async () => {
                let { default: e } = await t.e("78786").then(t.bind(t, 50474));
                return (t) =>
                  (0, i.jsx)(e, {
                    applicationIcon: n,
                    applicationId: h.applicationId,
                    applicationName: u,
                    command: h,
                    guildId: p,
                    ...t,
                  });
              });
          }, [n, u, m, h, p]),
          x = l.useCallback(
            (e) => {
              (0, a.jW)(e, async () => {
                let { default: e } = await t.e("5396").then(t.bind(t, 731646));
                return (n) =>
                  (0, i.jsx)(e, {
                    ...n,
                    id: h.id,
                    label: d.intl.string(d.t.oJ1Mu7),
                  });
              });
            },
            [h],
          ),
          b = h.type === o.yU.CHAT ? r.SlashBoxIcon : r.PaperIcon,
          v = (0, s.gw)(h.type, h.displayName);
        return (0, i.jsxs)(r.Clickable, {
          onClick: f,
          className: c.item,
          onContextMenu: x,
          children: [
            (0, i.jsxs)("div", {
              className: c.identifier,
              children: [
                (0, i.jsx)(b, {
                  className: c.icon,
                  size: "md",
                  color: "currentColor",
                }),
                (0, i.jsx)(r.Text, { variant: "text-md/normal", children: v }),
              ],
            }),
            (0, i.jsx)("div", {
              className: c.statusContainer,
              children: g
                ? (0, i.jsxs)("div", {
                    className: c.statusLine,
                    children: [
                      (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: d.intl.string(d.t.jH4B9P),
                      }),
                      (0, i.jsx)(r.CircleInformationIcon, {
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
      var i = t(200651),
        l = t(192379),
        r = t(481060),
        a = t(932776),
        o = t(680298),
        s = t(289465),
        d = t(388032),
        c = t(701468);
      function u(e) {
        let {
            applicationIcon: n,
            applicationName: t,
            canNavigate: u,
            guildId: m,
          } = e,
          {
            results: h,
            query: p,
            setQuery: g,
            unfilteredCount: f,
          } = (0, a.O)(),
          x = null != h && f > 0;
        return (0, i.jsx)(l.Fragment, {
          children: x
            ? (0, i.jsx)(s.Z, {
                bar: (0, i.jsx)(r.SearchBar, {
                  query: p,
                  onChange: g,
                  onClear: () => g(""),
                }),
                inModal: !1,
                title: d.intl.string(d.t["0hKkS0"]),
                children: h.map((e, a) =>
                  (0, i.jsxs)(
                    l.Fragment,
                    {
                      children: [
                        (0, i.jsx)(o.Z, {
                          applicationIcon: n,
                          applicationName: t,
                          canNavigate: u,
                          command: e,
                          guildId: m,
                        }),
                        a < h.length - 1 ? (0, i.jsx)(r.FormDivider, {}) : null,
                      ],
                    },
                    e.id,
                  ),
                ),
              })
            : (0, i.jsx)(r.Card, {
                className: c.emptyCard,
                editable: !0,
                children: (0, i.jsx)(r.Text, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: d.intl.string(d.t["x78c+P"]),
                }),
              }),
        });
      }
    },
    335049: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(512722),
        s = t.n(o),
        d = t(866442),
        c = t(442837),
        u = t(481060),
        m = t(239091),
        h = t(895924),
        p = t(581364),
        g = t(471445),
        f = t(91218),
        x = t(518738),
        b = t(592125),
        v = t(271383),
        C = t(430824),
        I = t(246946),
        N = t(594174),
        T = t(51144),
        _ = t(981631),
        j = t(388032),
        S = t(142208);
      function E(e) {
        let { guild: n, id: r, type: a, isLocked: o, lockTooltipText: d } = e,
          c = !o || null != d;
        s()(c, "No lockTooltipText provided while isLocked=true");
        let u = l.useCallback(
          (e) => {
            (0, m.jW)(e, async () => {
              let { default: e } = await t.e("5396").then(t.bind(t, 731646));
              return (n) =>
                (0, i.jsx)(e, {
                  ...n,
                  id: r,
                  label: j.intl.string(j.t.oJ1Mu7),
                });
            });
          },
          [r],
        );
        switch (a) {
          case h.Kw.CHANNEL:
            return (0, i.jsx)(Z, {
              guild: n,
              id: r,
              isLocked: o,
              lockTooltipText: d,
              openEntryContextMenu: u,
            });
          case h.Kw.ROLE:
            return (0, i.jsx)(A, {
              guild: n,
              id: r,
              isLocked: o,
              lockTooltipText: d,
              openEntryContextMenu: u,
            });
          case h.Kw.USER:
            return (0, i.jsx)(y, {
              guild: n,
              id: r,
              isLocked: o,
              lockTooltipText: d,
              openEntryContextMenu: u,
            });
        }
      }
      function Z(e) {
        let {
            guild: n,
            id: t,
            isLocked: r,
            lockTooltipText: o,
            openEntryContextMenu: s,
          } = e,
          d = (0, p.bD)(n.id),
          {
            icon: m,
            name: h,
            categoryName: f,
          } = (0, c.cj)(
            [b.Z],
            () => {
              if (d === t)
                return { name: j.intl.string(j.t["7YqSGx"]), icon: u.TextIcon };
              let e = b.Z.getChannel(t),
                i =
                  (null == e ? void 0 : e.parent_id) != null
                    ? b.Z.getChannel(e.parent_id)
                    : null;
              return {
                icon: null != e ? (0, g.KS)(e, n) : null,
                name: null == e ? void 0 : e.name,
                categoryName: null == i ? void 0 : i.name,
              };
            },
            [d, n, t],
          ),
          x = l.useCallback(
            (e) => {
              t !== d && s(e);
            },
            [d, t, s],
          );
        return null == m || null == h
          ? null
          : (0, i.jsxs)("div", {
              onContextMenu: x,
              className: S.identifier,
              children: [
                (0, i.jsx)(m, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: "currentColor",
                  className: a()(S.channelIcon, S.image),
                }),
                (0, i.jsx)(u.Text, {
                  className: S.roleName,
                  color: "header-primary",
                  variant: "text-md/normal",
                  children: h,
                }),
                null != f
                  ? (0, i.jsxs)(u.Text, {
                      className: S.tag,
                      variant: "text-sm/normal",
                      children: ["(", f, ")"],
                    })
                  : null,
                r ? (0, i.jsx)(R, { tooltipText: o }) : null,
              ],
            });
      }
      function A(e) {
        var n;
        let { guild: r, id: o, isLocked: s, lockTooltipText: h } = e,
          p = (0, c.e7)([C.Z], () => C.Z.getRole(r.id, o)),
          g = (0, x.p9)({ guildId: r.id, roleId: o, size: 24 }),
          b = l.useCallback(
            (e) => {
              if (null != r && null != p)
                (0, m.jW)(e, async () => {
                  let { default: e } = await t
                    .e("14486")
                    .then(t.bind(t, 786746));
                  return (n) => (0, i.jsx)(e, { ...n, guild: r, role: p });
                });
            },
            [r, p],
          );
        return (null == p ? void 0 : p.name) == null
          ? null
          : (0, i.jsxs)("div", {
              onContextMenu: b,
              className: S.identifier,
              children: [
                null != g
                  ? (0, i.jsx)(f.Z, {
                      className: a()(S.__invalid_icon, S.image),
                      ...g,
                    })
                  : (0, i.jsx)(u.ShieldUserIcon, {
                      size: "custom",
                      width: 23,
                      height: 23,
                      className: a()(S.shield, S.image),
                      color:
                        null !== (n = p.colorString) && void 0 !== n
                          ? n
                          : (0, d.Rf)(_.p6O),
                    }),
                (0, i.jsx)(u.Text, {
                  className: S.roleName,
                  color: "header-primary",
                  variant: "text-md/normal",
                  children: p.name,
                }),
                s ? (0, i.jsx)(R, { tooltipText: h }) : null,
              ],
            });
      }
      function y(e) {
        let {
            guild: n,
            id: t,
            isLocked: l,
            lockTooltipText: r,
            openEntryContextMenu: a,
          } = e,
          o = (0, c.e7)([N.default], () => N.default.getUser(t)),
          s = (0, c.e7)(
            [v.ZP],
            () => {
              var e;
              return null === (e = v.ZP.getMember(n.id, t)) || void 0 === e
                ? void 0
                : e.nick;
            },
            [n.id, t],
          ),
          d = (0, c.e7)([I.Z], () => I.Z.hidePersonalInformation);
        return null == o
          ? null
          : (0, i.jsxs)("div", {
              onContextMenu: a,
              className: S.identifier,
              children: [
                (0, i.jsx)(u.Avatar, {
                  className: S.image,
                  src: o.getAvatarURL(n.id, 24),
                  "aria-label": o.username,
                  size: u.AvatarSizes.SIZE_24,
                }),
                (0, i.jsx)(u.Text, {
                  className: S.roleName,
                  color: "header-primary",
                  variant: "text-md/normal",
                  children: null != s ? s : o.username,
                }),
                d
                  ? null
                  : (0, i.jsx)(u.Text, {
                      className: S.tag,
                      variant: "text-sm/normal",
                      children: T.ZP.getUserTag(o),
                    }),
                l ? (0, i.jsx)(R, { tooltipText: r }) : null,
              ],
            });
      }
      function R(e) {
        let { tooltipText: n } = e;
        return (0, i.jsx)(u.Tooltip, {
          text: n,
          children: (e) =>
            (0, i.jsx)("div", {
              className: S.lockIcon,
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
          return O;
        },
      }),
        t(724458),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(512722),
        a = t.n(r),
        o = t(392711),
        s = t.n(o),
        d = t(442837),
        c = t(481060),
        u = t(749210),
        m = t(367907),
        h = t(895924),
        p = t(581364),
        g = t(929507),
        f = t(997787),
        x = t(970731),
        b = t(314897),
        v = t(430824),
        C = t(594174),
        I = t(626135),
        N = t(5192),
        T = t(709054),
        _ = t(360606),
        j = t(905753),
        S = t(399860),
        E = t(335049),
        Z = t(617012),
        A = t(981631),
        y = t(388032),
        R = t(408795);
      function O(e) {
        let {
            commandId: n,
            editPermissions: t,
            guildId: r,
            noneSelectedText: o,
            overwrites: m,
            hasAccessToMutatePermissions: g,
          } = e,
          x = (0, d.e7)([v.Z], () => v.Z.getGuild(r));
        a()(null != x, "");
        let b = (0, d.e7)([v.Z], () => v.Z.getRoles(r)),
          [I, E] = l.useState(new Set()),
          Z = l.useMemo(() => {
            var e;
            let n = (0, p.bD)(r);
            let t =
              ((e = b),
              s()(e)
                .sortBy((e) => e.position)
                .reduce((e, n, t) => ((e[n.id] = t), e), {}));
            return Object.values(m)
              .filter((e) => e.canRead)
              .sort((e, i) => {
                let l = e.type - i.type;
                if (0 !== l) return l;
                switch (e.type) {
                  case h.Kw.USER:
                    return (function (e, n, t) {
                      let i = Number(e.canWrite) - Number(n.canWrite);
                      if (0 !== i) return i;
                      let l = C.default.getUser(e.id),
                        r = C.default.getUser(n.id);
                      if (null != l && null != r) {
                        let e = N.ZP.getName(t, void 0, l),
                          n = N.ZP.getName(t, void 0, r);
                        return null == e ? void 0 : e.localeCompare(n);
                      }
                      return T.default.compare(e.id, n.id);
                    })(e, i, r);
                  case h.Kw.ROLE:
                    return (function (e, n, t, i) {
                      if (e.id === t) return -1;
                      if (n.id === t) return 1;
                      let l = i[e.id];
                      return l > i[n.id] ? -1 : 1;
                    })(e, i, r, t);
                  case h.Kw.CHANNEL:
                    return (function (e, n, t) {
                      if (e.id === t) return -1;
                      if (n.id === t) return 1;
                      let i = Number(e.canWrite) - Number(n.canWrite);
                      return 0 !== i ? i : T.default.compare(e.id, n.id);
                    })(e, i, n);
                }
              });
          }, [r, m, b]),
          A = l.useCallback(
            (e, n) => {
              t({}, [(0, S.rE)(e, n)]);
            },
            [t],
          ),
          y = l.useCallback(
            (e, n, i) => {
              let l = (0, S.rE)(e, n);
              null != m[l] && t({ [l]: { id: e, permission: i, type: n } }, []);
            },
            [t, m],
          );
        l.useEffect(() => {
          let e = Object.values(m)
            .filter((e) => e.type === h.Kw.USER && !e.canRead && !I.has(e.id))
            .map((e) => e.id);
          if (0 !== e.length)
            u.Z.requestMembersById(r, e, !1), E((n) => new Set([...n, ...e]));
        }, [r, m, I, E]);
        let O = (0, d.e7)([j.Z], () => j.Z.getApplicationId()),
          k = (0, d.e7)([_.Z], () =>
            null == O
              ? void 0
              : _.Z.integrations.find((e) => {
                  var n;
                  return (
                    (null === (n = e.application) || void 0 === n
                      ? void 0
                      : n.id) === O
                  );
                }),
          ),
          w = (0, d.e7)(
            [f.Z],
            () => void 0 !== k && f.Z.canShowToggleTooltip(k.id),
          );
        return (0, i.jsx)(l.Fragment, {
          children:
            Z.length > 0
              ? Z.map((e) =>
                  (0, i.jsx)(
                    L,
                    {
                      guild: x,
                      commandId: n,
                      onChange: (n) => y(e.id, e.type, n),
                      onRemove: () => A(e.id, e.type),
                      overwrite: e,
                      integration: k,
                      canShowMigrationTooltip: w,
                      hasAccessToMutatePermissions: g,
                    },
                    e.id,
                  ),
                )
              : (0, i.jsx)("div", {
                  className: R.noItemsSelected,
                  children: (0, i.jsx)(c.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: o,
                  }),
                }),
        });
      }
      function L(e) {
        var n, t, r;
        let a,
          {
            guild: o,
            commandId: s,
            onChange: d,
            onRemove: u,
            overwrite: f,
            integration: v,
            canShowMigrationTooltip: C,
            hasAccessToMutatePermissions: N,
          } = e,
          T = f.id === o.id || f.id === (0, p.bD)(o.id),
          _ =
            null == v
              ? void 0
              : null === (t = v.application) || void 0 === t
                ? void 0
                : null === (n = t.bot) || void 0 === n
                  ? void 0
                  : n.username,
          j = !f.canWrite || !N,
          S = b.default.getId();
        N
          ? !f.canWrite &&
            (f.type === h.Kw.USER
              ? (a =
                  f.id === S
                    ? y.intl.string(y.t["1VF/09"])
                    : y.intl.string(y.t.P1GnER))
              : f.type === h.Kw.ROLE && (a = y.intl.string(y.t.mcAijY)))
          : (a =
              null != s
                ? y.intl.string(y.t.tybdam)
                : y.intl.string(y.t.z2hjk5));
        let O =
          C && null != v && f.id === o.id && void 0 !== _ && !f.permission;
        l.useEffect(() => {
          if (O) {
            var e;
            I.default.track(A.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
              ...(0, m.hH)(o.id),
              application_id:
                null == v
                  ? void 0
                  : null === (e = v.application) || void 0 === e
                    ? void 0
                    : e.id,
              location: "toggle",
            });
          }
        }, [
          o.id,
          null == v
            ? void 0
            : null === (r = v.application) || void 0 === r
              ? void 0
              : r.id,
          O,
        ]);
        let L = (0, i.jsx)(c.Tooltip, {
            tooltipClassName: R.tooltip,
            text: a,
            shouldShow: j,
            position: "left",
            hideOnClick: !1,
            children: (e) =>
              (0, i.jsx)("div", {
                ...e,
                children: (0, i.jsx)(Z.Z, {
                  isDisabled: j,
                  currentValue: f.permission,
                  onChange: O
                    ? (e) => {
                        g.Z.dismissToggleTooltip(o.id, v), d(e);
                      }
                    : d,
                }),
              }),
          }),
          w = (0, i.jsx)(c.Popout, {
            renderPopout: () =>
              (0, i.jsx)(c.Clickable, {
                onClick: (e) => {
                  e.stopPropagation(), g.Z.dismissToggleTooltip(o.id, v);
                },
                children: (0, i.jsx)(x.ZP, {
                  className: R.tooltip,
                  content: y.intl.format(y.t.pW4Cr6, {
                    botName: _,
                    link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
                  }),
                  onClick: () => {},
                }),
              }),
            position: "bottom",
            align: "center",
            animation: c.Popout.Animation.TRANSLATE,
            onRequestClose: () => g.Z.dismissToggleTooltip(o.id, v),
            shouldShow: O,
            closeOnScroll: !0,
            children: () => L,
          });
        return (0, i.jsxs)(
          "div",
          {
            className: R.entryItem,
            children: [
              (0, i.jsx)("div", {
                className: R.entryName,
                children: (0, i.jsx)(E.Z, {
                  guild: o,
                  id: f.id,
                  type: f.type,
                  isLocked: j,
                  lockTooltipText: a,
                }),
              }),
              (0, i.jsxs)("div", {
                className: R.entryActions,
                children: [
                  (0, i.jsx)(k, {
                    commandId: s,
                    isSentinel: T,
                    isDisabled: !N,
                    onRemove: u,
                  }),
                  w,
                ],
              }),
            ],
          },
          f.id,
        );
      }
      function k(e) {
        let { commandId: n, isSentinel: t, isDisabled: l, onRemove: r } = e;
        return l
          ? null
          : null != n || !t
            ? (0, i.jsx)("div", {
                className: R.removeActions,
                children: (0, i.jsx)(c.Clickable, {
                  className: R.removeContainer,
                  "aria-label": y.intl.string(y.t.mT0CQE),
                  onClick: r,
                  children: (0, i.jsx)(c.TrashIcon, {
                    size: "md",
                    color: "currentColor",
                    className: R.removeIcon,
                  }),
                }),
              })
            : null;
      }
    },
    665578: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(392711),
        a = t.n(r),
        o = t(149765),
        s = t(442837),
        d = t(481060),
        c = t(895924),
        u = t(581364),
        m = t(605436),
        h = t(271383),
        p = t(430824),
        g = t(496675),
        f = t(821864),
        x = t(905753),
        b = t(937427),
        v = t(643886),
        C = t(869157),
        I = t(454092),
        N = t(289465),
        T = t(981631),
        _ = t(689079),
        j = t(388032),
        S = t(457237);
      function E(e) {
        let {
            applicationId: n,
            commandId: r,
            guildId: b,
            inModal: v,
            editedTargetPermissions: E,
            originalApplicationPermissions: y,
            originalCommandPermissions: R,
            selectedPermissionCount: O,
          } = e,
          L = (0, s.e7)([x.Z], () => (null == r ? null : x.Z.getCommand(r)), [
            r,
          ]),
          k = (null == L ? void 0 : L.defaultMemberPermissions) != null,
          w = (0, s.e7)(
            [p.Z, h.ZP, g.Z],
            () => {
              let e = p.Z.getGuild(b),
                n = h.ZP.getSelfMember(b);
              return (
                null != e &&
                null != n &&
                (0, u.Ft)({
                  PermissionStore: g.Z,
                  guild: e,
                  selfMember: n,
                  applicationLevelPermissions: y,
                  commandLevelPermissions: R,
                  defaultMemberPermissions:
                    null == L ? void 0 : L.defaultMemberPermissions,
                })
              );
            },
            [b, L, y, R],
          ),
          M = null != r ? r : n,
          [B, P] = l.useMemo(() => {
            let e = {},
              n = {};
            for (let [t, i] of Object.entries(E))
              i.type === c.Kw.CHANNEL ? (e[t] = i) : (n[t] = i);
            return [e, n];
          }, [E]),
          D = l.useCallback(
            (e) => {
              let n = p.Z.getGuild(b),
                t = h.ZP.getSelfMember(b);
              return (
                null != n &&
                null != t &&
                (null != r
                  ? (0, u.Ft)({
                      PermissionStore: g.Z,
                      guild: n,
                      selfMember: t,
                      applicationLevelPermissions: y,
                      commandLevelPermissions: e,
                      defaultMemberPermissions:
                        null == L ? void 0 : L.defaultMemberPermissions,
                    })
                  : (0, u.Ft)({
                      PermissionStore: g.Z,
                      guild: n,
                      selfMember: t,
                      applicationLevelPermissions: e,
                    }))
              );
            },
            [b, L, r, y],
          ),
          U = l.useCallback(
            (e, n) => {
              let t;
              let i = null;
              if (0 !== n.length) {
                let e = E[n[0]];
                if (e.type === c.Kw.USER) t = I.s.REMOVE_SELF;
                else {
                  let n = e.id;
                  if (((t = I.s.REMOVE_ROLE), (0, m.pM)(b, n))) i = "@everyone";
                  else {
                    let e = p.Z.getRole(b, n);
                    i = null != e ? e.name : "role";
                  }
                }
              } else {
                let n = Object.values(e)[0].id;
                if (((t = I.s.DENY_ROLE), (0, m.pM)(b, n))) i = "@everyone";
                else {
                  let e = p.Z.getRole(b, n);
                  i = null != e ? e.name : "role";
                }
              }
              (0, I._)(t, i);
            },
            [b, E],
          ),
          G = l.useCallback(
            (e, t) => {
              let i = {};
              for (let [e, n] of Object.entries(E))
                i[e] = { id: n.id, permission: n.permission, type: n.type };
              if (
                ((i = Object.assign(i, e)),
                t.length > 0 && (i = a().omit(i, t)),
                !D(i))
              ) {
                U(e, t);
                return;
              }
              f.W4(n, M, i);
            },
            [n, E, M, D, U],
          ),
          F = l.useCallback(() => {
            let e = Object.keys(B);
            return (0, d.openModalLazy)(async () => {
              let { default: n } = await t.e("64908").then(t.bind(t, 557944));
              return (t) =>
                (0, i.jsx)(n, {
                  editPermissions: G,
                  guildId: b,
                  headerText: j.intl.string(j.t["i1c+kZ"]),
                  hasMemberSearch: !1,
                  overwrittenKeys: e,
                  search: Z,
                  searchPlaceholderText: j.intl.string(j.t["TLQo/v"]),
                  selectedPermissionCount: O,
                  ...t,
                });
            });
          }, [G, B, b, O]),
          H = l.useCallback(() => {
            let e = Object.keys(P);
            return (0, d.openModalLazy)(async () => {
              let { default: n } = await t.e("64908").then(t.bind(t, 557944));
              return (t) =>
                (0, i.jsx)(n, {
                  editPermissions: G,
                  guildId: b,
                  hasMemberSearch: !0,
                  headerText: j.intl.string(j.t["56jRn5"]),
                  overwrittenKeys: e,
                  search: A,
                  searchPlaceholderText: j.intl.string(j.t.wAfO5e),
                  selectedPermissionCount: O,
                  ...t,
                });
            });
          }, [G, b, P, O]),
          W = l.useCallback(
            () =>
              (0, d.openModalLazy)(async () => {
                let { default: e } = await t.e("21897").then(t.bind(t, 303313)),
                  n = L.defaultMemberPermissions;
                return (
                  o.fS(n, u.BO) && (n = T.Plq.ADMINISTRATOR),
                  (t) => (0, i.jsx)(e, { ...t, defaultMemberPermissions: n })
                );
              }),
            [L],
          ),
          z = O - _._n,
          V = z >= 0,
          K = [
            {
              buttonClick: H,
              buttonText: j.intl.string(j.t["56jRn5"]),
              noneSelectedText: j.intl.string(j.t.C0rYfn),
              overwrites: P,
              title:
                null == r
                  ? j.intl.string(j.t["vPWe+/"])
                  : j.intl.string(j.t["1jLVGB"]),
            },
            {
              buttonClick: F,
              buttonText: j.intl.string(j.t["i1c+kZ"]),
              noneSelectedText: j.intl.string(j.t.UBJhCw),
              overwrites: B,
              title:
                null == r
                  ? j.intl.string(j.t.OGiMXF)
                  : j.intl.string(j.t.Ujbaqq),
            },
          ];
        return (0, i.jsxs)(l.Fragment, {
          children: [
            z > 0
              ? (0, i.jsx)(d.HelpMessage, {
                  messageType: d.HelpMessageTypes.WARNING,
                  children: j.intl.format(j.t["B/dFBA"], { removeCount: z }),
                })
              : null,
            k
              ? (0, i.jsxs)("div", {
                  className: S.requiredPermissionsBanner,
                  children: [
                    (0, i.jsx)(d.CircleInformationIcon, {
                      size: "sm",
                      color: "currentColor",
                      className: S.icon,
                    }),
                    (0, i.jsx)("span", {
                      className: S.message,
                      children: j.intl.format(j.t["2889Gh"], {}),
                    }),
                    (0, i.jsx)(d.Button, {
                      color: d.Button.Colors.PRIMARY,
                      onClick: W,
                      size: d.Button.Sizes.SMALL,
                      className: S.addButton,
                      children: j.intl.string(j.t["HO/oXl"]),
                    }),
                  ],
                })
              : null,
            K.map((e, n) => {
              let t = (n) =>
                  (0, i.jsx)(d.Button, {
                    ...n,
                    color: d.Button.Colors.PRIMARY,
                    disabled: V || !w,
                    onClick: e.buttonClick,
                    size: d.Button.Sizes.TINY,
                    className: S.addButton,
                    children: e.buttonText,
                  }),
                l = null;
              return (
                w
                  ? V && (l = j.intl.string(j.t.XTwtW1))
                  : (l =
                      null != r
                        ? j.intl.string(j.t.tybdam)
                        : j.intl.string(j.t.z2hjk5)),
                (0, i.jsx)(
                  N.Z,
                  {
                    bar: (0, i.jsx)(d.Tooltip, {
                      tooltipClassName: S.tooltip,
                      text: l,
                      shouldShow: null != l,
                      children: (e) => t(e),
                    }),
                    inModal: v,
                    title: e.title,
                    children: (0, i.jsx)("div", {
                      className: v ? void 0 : S.listContainer,
                      children: (0, i.jsx)(C.Z, {
                        guildId: b,
                        commandId: r,
                        noneSelectedText: e.noneSelectedText,
                        overwrites: e.overwrites,
                        editPermissions: G,
                        hasAccessToMutatePermissions: w,
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
      function Z(e) {
        let n = (0, b.w)(e);
        return {
          ...n,
          results: n.results.map((e) => ({ ...e, type: c.Kw.CHANNEL })),
        };
      }
      function A(e) {
        let n = (0, v.U)(e);
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
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(481060),
        s = t(388032),
        d = t(471951);
      let c = [!1, !0];
      function u(e) {
        let { isDisabled: n, currentValue: t, onChange: r } = e,
          s = (0, o.useRadioGroup)({
            orientation: "horizontal",
            isDisabled: n,
          }),
          u = l.useCallback(
            (e) => {
              !n && e !== t && r(e);
            },
            [n, t, r],
          );
        return (0, i.jsx)("div", {
          className: a()(d.group, { [d.disabled]: n }),
          ...s,
          children: c.map((e) =>
            (0, i.jsx)(
              m,
              { isSelected: t === e, itemValue: e, onClick: () => u(e) },
              e.toString(),
            ),
          ),
        });
      }
      function m(e) {
        let { isSelected: n, itemValue: t, onClick: l } = e,
          r = t ? d.allow : d.deny,
          c = t ? o.CheckmarkLargeIcon : o.XSmallIcon,
          u = t ? s.intl.string(s.t.RzDfSk) : s.intl.string(s.t["6639Oz"]),
          m = (0, o.useRadioItem)({ isSelected: n, label: u });
        return (0, i.jsx)(o.Clickable, {
          className: a()(d.item, r, { [d.selected]: n }),
          onClick: l,
          ...m,
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
          return l;
        },
      });
      var i,
        l,
        r = t(668781),
        a = t(63063),
        o = t(981631),
        s = t(388032);
      function d(e, n) {
        let t;
        0 === e
          ? (t = s.intl.format(s.t["/S6f5+"], {}))
          : 1 === e
            ? (t = s.intl.format(s.t.EBhv4e, { name: n }))
            : 2 === e && (t = s.intl.format(s.t["59Dbw8"], { name: n })),
          r.Z.show({
            title: s.intl.string(s.t.vElC9f),
            body: t,
            cancelText: s.intl.string(s.t.psXQHB),
            onCancel() {
              window.open(
                a.Z.getArticleURL(
                  o.BhN.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT,
                ),
              );
            },
          });
      }
      ((i = l || (l = {}))[(i.REMOVE_SELF = 0)] = "REMOVE_SELF"),
        (i[(i.REMOVE_ROLE = 1)] = "REMOVE_ROLE"),
        (i[(i.DENY_ROLE = 2)] = "DENY_ROLE");
    },
    289465: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        a = t(481060),
        o = t(483337);
      function s(e) {
        let { bar: n, children: t, className: l, inModal: s, title: d } = e;
        return (0, i.jsxs)(a.Card, {
          editable: !0,
          className: r()(o.card, l, { [o.inModal]: s }),
          children: [
            (0, i.jsxs)("div", {
              className: r()(o.cardHeader, { [o.inModal]: s }),
              children: [
                (0, i.jsx)(a.Text, {
                  variant: "text-xs/semibold",
                  className: o.title,
                  children: d,
                }),
                (0, i.jsx)("div", { children: n }),
              ],
            }),
            s ? (0, i.jsx)(a.FormDivider, {}) : null,
            t,
          ],
        });
      }
    },
    590157: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        a = t(481060),
        o = t(366598),
        s = t(821864),
        d = t(905753),
        c = t(995390),
        u = t(469880),
        m = t(665578),
        h = t(388032),
        p = t(121080);
      function g(e) {
        let { application: n, canNavigate: t, guildId: c } = e,
          m = (0, r.e7)([d.Z], () => d.Z.isUnavailable());
        return (l.useEffect(() => (s.I4(n.id), s.kZ), [n.id]),
        l.useEffect(() => {
          s.gq(n.id, c, n.id), s.Sn(c, n.id);
        }, [n.id, c]),
        m)
          ? null
          : (0, i.jsxs)(l.Fragment, {
              children: [
                (0, i.jsx)(o.Z, {
                  icon: (0, i.jsx)(a.SlashBoxIcon, {
                    size: "md",
                    color: "currentColor",
                  }),
                  title: h.intl.string(h.t.RGoJND),
                }),
                (0, i.jsx)(a.Text, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: h.intl.string(h.t.sCkD3d),
                }),
                (0, i.jsx)(f, { guildId: c, applicationId: n.id }),
                (0, i.jsx)(u.Z, {
                  applicationIcon: n.icon,
                  applicationName: n.name,
                  canNavigate: t,
                  guildId: c,
                }),
              ],
            });
      }
      function f(e) {
        let { applicationId: n, guildId: t } = e,
          {
            originalApplicationPermissions: l,
            editedTargetPermissions: r,
            selectedPermissionCount: a,
          } = (0, c.Z)(t, n);
        return (0, i.jsx)("div", {
          className: p.applicationPermissions,
          children: (0, i.jsx)(m.Z, {
            applicationId: n,
            guildId: t,
            inModal: !1,
            editedTargetPermissions: r,
            originalApplicationPermissions: l,
            selectedPermissionCount: a,
          }),
        });
      }
    },
    270394: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return B;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(512722),
        s = t.n(o),
        d = t(392711),
        c = t.n(d),
        u = t(399606),
        m = t(692547),
        h = t(481060),
        p = t(447543),
        g = t(225433),
        f = t(129861),
        x = t(493544),
        b = t(700582),
        v = t(410030),
        C = t(933557),
        I = t(346486),
        N = t(600164),
        T = t(666657),
        _ = t(487419),
        j = t(664452),
        S = t(560114),
        E = t(699516),
        Z = t(594174),
        A = t(965638),
        y = t(981631),
        R = t(388032),
        O = t(690873),
        L = t(869042),
        k = t(113207);
      let w = { INVITER: 3, INVITE_CODE: 3, USES: 1, EXPIRES: 2 };
      function M(e) {
        var n, t;
        let {
            invite: l,
            showChannel: r = !1,
            inviteDisabled: o = !1,
            hide: s = !1,
          } = e,
          d = l.uses;
        return (
          l.maxUses > 0 && (d = "".concat(l.uses, "/").concat(l.maxUses)),
          (0, i.jsxs)(N.Z, {
            className: a()(O.inviteSettingsInviteRow, L.card, {
              [O.inviteDisabledRow]: o,
            }),
            children: [
              (0, i.jsx)(N.Z, {
                grow: w.INVITER,
                basis: 0,
                align: N.Z.Align.CENTER,
                className: a()(O.text),
                children: (0, i.jsxs)(N.Z.Child, {
                  children: [
                    null == (n = l.inviter)
                      ? null
                      : (0, i.jsxs)("div", {
                          className: O.user,
                          children: [
                            (0, i.jsx)(b.Z, {
                              user: n,
                              size: h.AvatarSizes.SIZE_20,
                              className: O.avatar,
                            }),
                            (0, i.jsx)(f.Z, {
                              className: O.username,
                              discriminatorClass: O.discriminator,
                              user: n,
                            }),
                          ],
                        }),
                    ((t = l.channel),
                    r
                      ? (0, i.jsx)(h.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: (0, C.F6)(t, Z.default, E.Z, !0),
                        })
                      : null),
                  ],
                }),
              }),
              (0, i.jsx)(N.Z, {
                grow: w.INVITE_CODE,
                shrink: 1,
                basis: 0,
                align: N.Z.Align.CENTER,
                className: O.text,
                children: (0, i.jsx)(h.Text, {
                  className: O.inviteCode,
                  variant: "text-sm/normal",
                  children: s ? "..." : l.code,
                }),
              }),
              (0, i.jsx)(N.Z, {
                grow: w.USES,
                basis: 0,
                justify: N.Z.Justify.END,
                align: N.Z.Align.CENTER,
                className: a()(O.text),
                children: (0, i.jsx)(h.Text, {
                  className: O.uses,
                  variant: "text-sm/normal",
                  children: d,
                }),
              }),
              (0, i.jsx)(N.Z, {
                grow: w.EXPIRES,
                basis: 0,
                align: N.Z.Align.CENTER,
                justify: N.Z.Justify.END,
                className: a()(O.text, O.countdownColumn),
                children: (0, i.jsx)(h.Text, {
                  className: O.countdown,
                  variant: "text-sm/normal",
                  children: (0, i.jsx)(I.Z, { deadline: l.getExpiresAt() }),
                }),
              }),
              (0, i.jsx)(g.Z, {
                className: O.revokeInvite,
                onClick: () => {
                  p.Z.revokeInvite(l);
                },
              }),
            ],
          })
        );
      }
      function B(e) {
        let {
          invites: n,
          guild: r,
          hide: a,
          channel: o = null,
          showChannel: d = !1,
          loading: p = !1,
          canCreateInvites: g = !1,
        } = e;
        s()(null != r, "guild is required");
        let f = (0, A.M)(r),
          b = (0, u.e7)([_.Z], () => _.Z.getGuildIncident(r.id)),
          C =
            r.hasFeature(y.oNc.INVITES_DISABLED) ||
            ((null == b ? void 0 : b.invitesDisabledUntil) != null &&
              new Date(b.invitesDisabledUntil) > new Date()),
          I = (0, v.ZP)(),
          E = l.useMemo(
            () =>
              null == n || p
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
            [n, p],
          ),
          Z = () => {
            (0, h.openModalLazy)(
              async () => (e) =>
                (0, i.jsx)(S.default, {
                  ...e,
                  channel: o,
                  guild: r,
                  source: y.t4x.SETTINGS_INVITE,
                }),
            );
          },
          L = () => {
            let e = { source: T.Zu.GUILD_SETTINGS };
            (0, h.openModalLazy)(
              async () => (n) =>
                (0, i.jsx)(j.default, {
                  ...n,
                  guildId: r.id,
                  analyticsData: e,
                }),
            );
          };
        return (0, i.jsx)(x.Xi, {
          sections: [Math.max(1, E.length)],
          renderSection: () => {
            let e;
            return (
              (e =
                0 !== E.length || p
                  ? (0, i.jsxs)(N.Z, {
                      children: [
                        (0, i.jsx)(N.Z.Child, {
                          grow: w.INVITER,
                          basis: 0,
                          className: k.marginReset,
                          children: (0, i.jsx)(h.FormTitle, {
                            children: R.intl.string(R.t.EgHyKy),
                          }),
                        }),
                        (0, i.jsx)(N.Z.Child, {
                          basis: 0,
                          grow: w.INVITE_CODE,
                          className: k.marginReset,
                          children: (0, i.jsx)(h.FormTitle, {
                            children: R.intl.string(R.t.LBlFEB),
                          }),
                        }),
                        (0, i.jsx)(N.Z.Child, {
                          grow: w.USES,
                          basis: 0,
                          className: O.textAlignRight,
                          children: (0, i.jsx)(h.FormTitle, {
                            children: R.intl.string(R.t.erWrmJ),
                          }),
                        }),
                        (0, i.jsx)(N.Z.Child, {
                          grow: w.EXPIRES,
                          basis: 0,
                          className: O.textAlignRight,
                          children: (0, i.jsx)(h.FormTitle, {
                            children: R.intl.string(R.t["1aM27e"]),
                          }),
                        }),
                      ],
                    })
                  : (0, i.jsxs)(h.EmptyState, {
                      theme: I,
                      children: [
                        (0, i.jsx)(h.EmptyStateImage, {
                          darkSrc: t(914814),
                          lightSrc: t(370392),
                          width: 256,
                          height: 130,
                        }),
                        (0, i.jsx)(h.EmptyStateText, {
                          note: R.intl.string(R.t.F53CAQ),
                          children: R.intl.string(R.t["+nLJkZ"]),
                        }),
                      ],
                    })),
              (0, i.jsx)(
                h.FormSection,
                {
                  className: O.headerSection,
                  children: (0, i.jsxs)(h.HeadingLevel, {
                    component: (0, i.jsx)(h.FormTitle, {
                      tag: h.FormTitleTags.H1,
                      children: R.intl.string(R.t["9F90iY"]),
                    }),
                    children: [
                      (0, i.jsx)(h.FormText, {
                        className: k.marginBottom20,
                        type: h.FormTextTypes.DESCRIPTION,
                        children: g
                          ? R.intl.format(R.t["97VdNj"], { onCreateInvite: Z })
                          : R.intl.string(R.t.WDw38P),
                      }),
                      (0, i.jsxs)("div", {
                        className: O.inviteDisabledContainer,
                        children: [
                          (0, i.jsx)(h.Button, {
                            size: h.Button.Sizes.SMALL,
                            color: C
                              ? h.Button.Colors.BRAND
                              : h.Button.Colors.RED,
                            disabled: !f,
                            onClick: L,
                            children: C
                              ? R.intl.string(R.t["/dbw3N"])
                              : R.intl.string(R.t.Uwsjn5),
                          }),
                          C &&
                            (0, i.jsxs)("div", {
                              className: O.inviteDisabledTip,
                              children: [
                                (0, i.jsx)(h.CircleWarningIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: m.Z.unsafe_rawColors.YELLOW_300.css,
                                }),
                                (0, i.jsx)(h.Text, {
                                  variant: "text-sm/normal",
                                  children: R.intl.string(R.t["2LLbj4"]),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, i.jsx)(h.FormDivider, { className: O.headerDivider }),
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
            if (0 === E.length && 0 === t && p)
              return (0, i.jsx)(
                h.Spinner,
                {
                  className: k.marginTop20,
                  type: h.Spinner.Type.SPINNING_CIRCLE,
                },
                "spinner",
              );
            if (n > 0) return null;
            let l = E[t];
            return null == l
              ? null
              : (0, i.jsx)(
                  M,
                  { hide: a, invite: l, showChannel: d, inviteDisabled: C },
                  l.code,
                );
          },
          rowHeight: (e, n) =>
            e > 0
              ? 0
              : 0 === E.length && 0 === n && p
                ? 62
                : null != E[n]
                  ? 62
                  : 0,
          sectionHeight: () => (0 !== E.length || p ? 120 : 344),
        });
      }
    },
    208567: function (e, n, t) {
      t.d(n, {
        S: function () {
          return x;
        },
      }),
        t(47120);
      var i,
        l = t(200651),
        r = t(192379),
        a = t(120356),
        o = t.n(a),
        s = t(512722),
        d = t.n(s),
        c = t(481060),
        u = t(624138),
        m = t(813197),
        h = t(981631),
        p = t(388032),
        g = t(315822);
      function f(e, n, t) {
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
      function x(e) {
        let { className: n, icon: t = null } = e;
        return (0, l.jsx)(c.ThemeProvider, {
          theme: h.BRd.LIGHT,
          children: (e) =>
            (0, l.jsx)("div", {
              className: o()(g.imageUploaderIcon, n, e),
              children: t,
            }),
        });
      }
      class b extends (i = r.PureComponent) {
        handleExternalFileChange(e) {
          d()(
            null != this.inputRef.current,
            "ImageInputRef asked to handleExternalFileChange when not mounted",
          ),
            this.inputRef.current.handleFileChange(e);
        }
        render() {
          var e;
          let n, t, i, r;
          let {
            image: a,
            hint: s,
            name: d,
            makeURL: f,
            disabled: b,
            onChange: v,
            showIcon: C,
            showIconDisabled: I,
            className: N,
            imageClassName: T,
            iconClassName: _,
            iconWrapperClassName: j,
            icon: S,
            hideSize: E,
            imageStyle: Z,
            showRemoveButton: A,
            maxFileSizeBytes: y,
            onFileSizeError: R,
            onOpenImageSelectModal: O,
            "aria-label": L,
          } = this.props;
          if (
            (null != (n = null != a && /^data:/.test(a) ? a : f(a))
              ? (t = 'url("'.concat(n, '")'))
              : null != d &&
                (i = (0, l.jsx)(c.Heading, {
                  variant: "heading-xxl/normal",
                  color: "always-white",
                  className: g.imageUploaderAcronym,
                  children: (0, u.Zg)(d),
                })),
            b)
          )
            return (0, l.jsx)("div", {
              className: o()(g.imageUploader, g.disabled, N),
              children: (0, l.jsxs)("div", {
                className: o()(g.imageUploaderInner, T),
                style: { ...Z, backgroundImage: t },
                children: [
                  i,
                  I &&
                    (0, l.jsx)("div", {
                      className: o()(
                        g.imageUploaderIcon,
                        g.imageUploaderIconDisabled,
                        _,
                      ),
                      children: S,
                    }),
                ],
              }),
            });
          null != a
            ? (r = (0, l.jsx)(c.Anchor, {
                className: g.removeButton,
                onClick: this.handleRemove,
                children: p.intl.string(p.t.N86XcH),
              }))
            : !E &&
              (r = (0, l.jsx)("small", {
                className: g.sizeInfo,
                children: p.intl.format(p.t.AH4c7e, { size: h.IXf }),
              }));
          let k =
            null !== (e = null != L ? L : s) && void 0 !== e
              ? e
              : p.intl.string(p.t["Ge+94+"]);
          return (0, l.jsxs)("div", {
            className: o()(g.imageUploader, N),
            children: [
              (0, l.jsx)(c.FocusRing, {
                within: !0,
                children: (0, l.jsxs)("div", {
                  className: C ? o()(g.imageUploaderIconWrapper, j) : void 0,
                  children: [
                    (0, l.jsxs)("div", {
                      className: o()(g.imageUploaderInner, T),
                      style: { ...Z, backgroundImage: t },
                      children: [
                        (0, l.jsx)("span", { "aria-hidden": !0, children: i }),
                        null != O
                          ? (0, l.jsx)(c.Clickable, {
                              className: g.imageUploaderFileInput,
                              "aria-label": k,
                              onClick: O,
                            })
                          : (0, l.jsx)(m.ZP, {
                              ref: this.inputRef,
                              onChange: v,
                              className: g.imageUploaderFileInput,
                              "aria-label": k,
                              tabIndex: 0,
                              maxFileSizeBytes: y,
                              onFileSizeError: R,
                            }),
                      ],
                    }),
                    null != s &&
                      (0, l.jsx)("div", {
                        className: g.imageUploaderHint,
                        "aria-hidden": "true",
                        children: s,
                      }),
                    C && (0, l.jsx)(x, { className: _, icon: S }),
                  ],
                }),
              }),
              A ? r : null,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            f(this, "inputRef", r.createRef()),
            f(this, "handleRemove", () => {
              this.props.onChange(null);
            });
        }
      }
      f(b, "defaultProps", {
        name: "",
        makeURL: (e) => e,
        disabled: !1,
        showIcon: !1,
        hideSize: !1,
        showRemoveButton: !0,
        maxFileSizeBytes: 1 / 0,
        icon: null,
      }),
        (n.Z = b);
    },
    486199: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        a = t(481060),
        o = t(600164),
        s = t(528144),
        d = t(388032),
        c = t(365515);
      function u(e) {
        let {
          name: n,
          description: t,
          icon: l,
          imageSrc: u,
          iconBackgroundColor: m,
          iconClassName: h,
          iconWrapperClassName: p,
          details: g,
          detailsClassName: f,
          isHeader: x,
          isPremium: b,
        } = e;
        return (0, i.jsxs)(o.Z, {
          justify: o.Z.Justify.CENTER,
          className: c.wrapper,
          children: [
            null != l || null != u
              ? (0, i.jsx)(o.Z.Child, {
                  shrink: 0,
                  grow: 0,
                  children: (function (e, n, t, l, a) {
                    if (null != n)
                      return (0, i.jsx)("img", {
                        alt: "",
                        src: n,
                        className: r()(c.iconWrapper, l),
                      });
                    let s = null;
                    return (
                      null != e &&
                        (s =
                          "string" == typeof e
                            ? (0, i.jsx)("img", {
                                alt: "",
                                src: e,
                                className: r()(c.icon, l),
                              })
                            : (0, i.jsx)(e, {
                                className: r()(c.icon, l),
                                color: "currentColor",
                              })),
                      (0, i.jsx)(o.Z, {
                        align: o.Z.Align.CENTER,
                        justify: o.Z.Justify.CENTER,
                        style: { backgroundColor: t },
                        className: r()(c.iconWrapper, a),
                        children: s,
                      })
                    );
                  })(l, u, m, h, p),
                })
              : null,
            (function (e) {
              let {
                  name: n,
                  description: t,
                  details: l,
                  detailsClassName: u,
                  isHeader: m,
                  isPremium: h,
                } = e,
                p =
                  null == l
                    ? void 0
                    : l.map((e, n) => {
                        let { icon: t, text: l } = e;
                        return (0, i.jsxs)(
                          "div",
                          {
                            className: r()(
                              c.detailsWrapper,
                              m ? c.headerDetailsWrapper : null,
                            ),
                            children: [
                              null != t
                                ? (0, i.jsx)(t, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: c.detailsIcon,
                                  })
                                : null,
                              (0, i.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: u,
                                children: l,
                              }),
                            ],
                          },
                          n,
                        );
                      });
              return (0, i.jsxs)(o.Z, {
                direction: o.Z.Direction.VERTICAL,
                children: [
                  (0, i.jsxs)(s.Z, {
                    size: m ? s.Z.Sizes.SIZE_24 : s.Z.Sizes.SIZE_16,
                    className: m ? c.header : c.secondaryHeader,
                    children: [
                      n,
                      h &&
                        (0, i.jsx)(a.Tooltip, {
                          text: d.intl.string(d.t.VFuFur),
                          children: (e) =>
                            (0, i.jsx)(a.TicketIcon, {
                              size: "xs",
                              color: "currentColor",
                              ...e,
                              className: c.premiumIcon,
                            }),
                        }),
                    ],
                  }),
                  null != t
                    ? (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: t,
                      })
                    : null,
                  (0, i.jsx)(o.Z, {
                    direction: o.Z.Direction.HORIZONTAL,
                    align: o.Z.Align.CENTER,
                    wrap: o.Z.Wrap.WRAP,
                    children: p,
                  }),
                ],
              });
            })({
              name: n,
              description: t,
              details: g,
              detailsClassName: f,
              isHeader: x,
              isPremium: b,
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
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(481060),
        s = t(926152);
      function d(e) {
        let { children: n, icon: t, title: r } = e;
        return (0, i.jsxs)("header", {
          className: s.header,
          children: [
            (0, i.jsxs)("div", {
              className: s.name,
              children: [
                l.cloneElement(t, {
                  className: a()(t.props.className, s.icon),
                  height: 24,
                  width: 24,
                }),
                (0, i.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  className: s.title,
                  children: r,
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
          return _;
        },
      }),
        t(47120),
        t(653041);
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        a = t(481060),
        o = t(668781),
        s = t(600164),
        d = t(434404),
        c = t(590157),
        u = t(280885),
        m = t(496675),
        h = t(768581),
        p = t(709054),
        g = t(51144),
        f = t(486199),
        x = t(366598),
        b = t(125657),
        v = t(725875),
        C = t(981631),
        I = t(388032),
        N = t(695768);
      function T(e) {
        let { application: n, guild: t, integration: l, ...r } = e;
        return (0, i.jsx)(a.ConfirmModal, {
          ...r,
          header: I.intl.formatToPlainString(I.t["rL9d//"], {
            applicationName: n.name,
          }),
          confirmText: I.intl.string(I.t.ebGf4u),
          cancelText: I.intl.string(I.t["ETE/oK"]),
          onConfirm: () => {
            d.Z.disableIntegration(t.id, l.id).catch(() => {
              o.Z.show({
                title: I.intl.string(I.t.wYqMmJ),
                body: I.intl.string(I.t.A4Mnsr),
              });
            });
          },
          children: (0, i.jsx)(a.Text, {
            variant: "text-md/normal",
            children: I.intl.format(I.t.FGE8yc, { applicationName: n.name }),
          }),
        });
      }
      function _(e) {
        var n;
        let {
            guild: t,
            applicationIntegration: o,
            selectableWebhookChannels: d,
            editedWebhook: _,
            errors: j,
            canNavigate: S,
          } = e,
          { application: E, integration: Z, webhooks: A } = o,
          [y, R] = (0, r.Wu)(
            [m.Z],
            () => [
              m.Z.can(C.Plq.MANAGE_ROLES, t),
              null == E.bot ||
                m.Z.canManageUser(C.Plq.MANAGE_GUILD, E.bot.id, t),
            ],
            [E.bot, t],
          ),
          O = (0, r.e7)([m.Z], () => m.Z.can(C.Plq.MANAGE_WEBHOOKS, t), [t]),
          L = l.useCallback(() => {
            S() &&
              (0, a.openModal)((e) =>
                (0, i.jsx)(T, {
                  guild: t,
                  application: E,
                  integration: Z,
                  ...e,
                }),
              );
          }, [E, S, t, Z]),
          k = l.useMemo(() => {
            let e = [
              {
                icon: a.ClockIcon,
                text: I.intl.formatToPlainString(I.t.gcdJ8P, {
                  timestamp: p.default.extractTimestamp(Z.id),
                }),
              },
            ];
            return (
              null != Z.user &&
                e.push({
                  icon: a.UserIcon,
                  text: I.intl.formatToPlainString(I.t.qE7oqq, {
                    user: g.ZP.getUserTag(Z.user),
                  }),
                }),
              e
            );
          }, [Z.id, Z.user]),
          w = l.useMemo(
            () =>
              null != E.bot
                ? (0, i.jsx)(b.Z, { guild: t, applicationIntegration: o })
                : (0, i.jsx)(a.Card, {
                    className: N.emptyCard,
                    editable: !0,
                    children: (0, i.jsx)(a.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: I.intl.string(I.t.pfLnzc),
                    }),
                  }),
            [E.bot, o, t],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(f.Z, {
              name: E.name,
              imageSrc:
                null !== (n = E.getIconURL(32)) && void 0 !== n ? n : h.pK["0"],
              details: k,
              isHeader: !0,
            }),
            (null == E ? void 0 : E.description) != null
              ? (0, i.jsx)(u.Z, {
                  userBio: E.description,
                  className: N.headerDescription,
                })
              : null,
            y
              ? (0, i.jsx)(c.Z, {
                  application: E,
                  canNavigate: S,
                  guildId: t.id,
                })
              : null,
            (0, i.jsx)(a.FormDivider, { className: N.headerDivider }),
            null != E.bot
              ? (0, i.jsxs)("div", {
                  className: N.section,
                  children: [
                    (0, i.jsx)(x.Z, {
                      icon: (0, i.jsx)(a.RobotIcon, {
                        size: "xs",
                        color: "currentColor",
                      }),
                      title: I.intl.string(I.t.AOdOYm),
                    }),
                    w,
                  ],
                })
              : null,
            (0, i.jsxs)("div", {
              className: N.section,
              children: [
                (0, i.jsx)(x.Z, {
                  icon: (0, i.jsx)(a.WebhookIcon, {
                    size: "md",
                    color: "currentColor",
                  }),
                  title: I.intl.string(I.t["t9ZX/P"]),
                }),
                A.length > 0
                  ? (0, i.jsx)(v.Z, {
                      webhooks: A,
                      editedWebhook: _,
                      selectableWebhookChannels: d,
                      errors: j,
                      canNavigate: S,
                    })
                  : (0, i.jsx)(a.Card, {
                      className: N.emptyCard,
                      editable: !0,
                      children: (0, i.jsx)(a.Text, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: O
                          ? I.intl.string(I.t.ahPd2d)
                          : I.intl.string(I.t.axqYMj),
                      }),
                    }),
              ],
            }),
            (0, i.jsx)(a.FormDivider, { className: N.headerDivider }),
            (0, i.jsxs)(s.Z, {
              className: N.section,
              justify: s.Z.Justify.BETWEEN,
              align: s.Z.Align.CENTER,
              children: [
                (0, i.jsx)(a.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: R
                    ? I.intl.string(I.t.hdneLy)
                    : I.intl.string(I.t.xRCMq6),
                }),
                (0, i.jsx)(s.Z.Child, {
                  grow: 0,
                  shrink: 0,
                  children: (0, i.jsx)(a.Button, {
                    size: a.Button.Sizes.SMALL,
                    color: a.Button.Colors.RED,
                    look: a.Button.Looks.FILLED,
                    disabled: !R,
                    onClick: L,
                    children: I.intl.string(I.t.ebGf4u),
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
          return m;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(481060),
        a = t(139387),
        o = t(726542),
        s = t(434404),
        d = t(486199),
        c = t(13051),
        u = t(734761);
      function m(e) {
        let {
            integrations: n,
            editedIntegration: t,
            guild: m,
            platformType: h,
            labelText: p,
            descriptionText: g,
            helpText: f,
            canNavigate: x,
          } = e,
          b = o.Z.get(h),
          v = l.useCallback(
            async (e) => {
              x() &&
                (await s.Z.enableIntegration(m.id, e.type, e.id),
                a.Z.startEditingIntegration(e.id));
            },
            [x, m.id],
          ),
          C = l.useCallback(
            (e) => {
              x() &&
                (e.id === (null == t ? void 0 : t.id) &&
                  a.Z.stopEditingIntegration(),
                s.Z.disableIntegration(m.id, e.id));
            },
            [x, t, m.id],
          ),
          I = l.useCallback(
            (e) => {
              x() &&
                (e === (null == t ? void 0 : t.id)
                  ? a.Z.stopEditingIntegration()
                  : a.Z.startEditingIntegration(e));
            },
            [x, t],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(d.Z, {
              name: p,
              icon: null == b ? void 0 : b.icon.whiteSVG,
              iconBackgroundColor: null == b ? void 0 : b.color,
              iconClassName: u.platformIcon,
              description: g,
              isHeader: !0,
            }),
            (0, i.jsx)(r.FormDivider, { className: u.headerDivider }),
            n.map((e) =>
              (0, i.jsx)(
                c.Z,
                {
                  integration: e,
                  editedIntegration: t,
                  guild: m,
                  isExpanded: (null == t ? void 0 : t.id) === e.id,
                  onEnable: v,
                  onDisable: C,
                  onToggleExpand: () => I(e.id),
                },
                e.id,
              ),
            ),
            (0, i.jsx)(r.Text, {
              className: u.helpText,
              color: "text-muted",
              variant: "text-sm/normal",
              children: f,
            }),
          ],
        });
      }
    },
    494118: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(780384),
        r = t(481060),
        a = t(410030),
        o = t(600164),
        s = t(63063),
        d = t(725875),
        c = t(981631),
        u = t(388032),
        m = t(904426),
        h = t(893916),
        p = t(408942);
      function g(e) {
        let {
            followedChannelWebhooks: n,
            editedWebhook: t,
            selectableWebhookChannels: g,
            errors: f,
            canNavigate: x,
          } = e,
          b = (0, a.ZP)();
        return (0, i.jsxs)(r.FormSection, {
          children: [
            (0, i.jsx)(r.FormText, {
              type: r.FormTextTypes.DESCRIPTION,
              children: u.intl.format(u.t["5u+aV1"], {
                helpdeskArticle: s.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING),
              }),
            }),
            (0, i.jsx)(r.FormDivider, { className: m.headerDivider }),
            n.length > 0
              ? (0, i.jsx)(d.Z, {
                  webhooks: n,
                  editedWebhook: t,
                  selectableWebhookChannels: g,
                  errors: f,
                  canNavigate: x,
                })
              : (function (e, n) {
                  let t = (0, l.wj)(e) ? h : p;
                  return (0, i.jsxs)(o.Z, {
                    direction: o.Z.Direction.VERTICAL,
                    align: o.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)("img", {
                        alt: "",
                        src: t,
                        className: m.emptyStateImage,
                      }),
                      (0, i.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        children: u.intl.string(u.t.gzuVHx),
                      }),
                      (0, i.jsx)(r.Button, {
                        className: m.emptyStateButton,
                        onClick: n,
                        children: u.intl.string(u.t["ZwSt+f"]),
                      }),
                    ],
                  });
                })(b, () => open(s.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING))),
          ],
        });
      }
    },
    327934: function (e, n, t) {
      t.d(n, {
        I: function () {
          return d;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(481060),
        a = t(296023),
        o = t(768581),
        s = t(585835);
      function d(e) {
        var n;
        let { channel: d, application: c, showApplicationImage: u, ...m } = e,
          h = (0, a.w)(d),
          p = l.useCallback(
            () =>
              (0, r.openModalLazy)(async () => {
                let { default: e } = await t.e("14089").then(t.bind(t, 262528));
                return (n) =>
                  (0, i.jsx)(e, { ...n, channel: d, application: c });
              }),
            [c, d],
          ),
          g = u
            ? null !== (n = c.getIconURL(48)) && void 0 !== n
              ? n
              : o.pK["0"]
            : void 0;
        return (0, i.jsx)(s.Z, {
          imageSrc: g,
          onButtonClick: p,
          details: null != h ? [{ text: h }] : void 0,
          ...m,
        });
      }
    },
    491500: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(392711),
        a = t.n(r),
        o = t(481060),
        s = t(139387),
        d = t(835473),
        c = t(471445),
        u = t(925329),
        m = t(163400),
        h = t(327934),
        p = t(981631),
        g = t(388032),
        f = t(778429);
      function x(e) {
        let { applicationId: n, channels: t } = e,
          l = (0, d.q)(n);
        return 0 === t.length || null == l
          ? null
          : (0, i.jsxs)("div", {
              className: f.applicationGroup,
              children: [
                (0, i.jsxs)("div", {
                  className: f.header,
                  children: [
                    (0, i.jsx)(u.Z, { game: l, size: u.Z.Sizes.XSMALL }),
                    (0, i.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      children: null == l ? void 0 : l.name,
                    }),
                  ],
                }),
                t.map((e) => {
                  var n;
                  return (0, i.jsx)(
                    h.I,
                    {
                      channel: e,
                      application: l,
                      name: e.name,
                      icon:
                        null !== (n = (0, c.KS)(e)) && void 0 !== n
                          ? n
                          : void 0,
                      iconWrapperClassName: f.iconwrapper,
                      hasNextSection: !0,
                      trailing: (0, i.jsx)(o.PencilIcon, { size: "xs" }),
                    },
                    e.id,
                  );
                }),
              ],
            });
      }
      function b(e) {
        let { guild: n } = e,
          t = (0, m.F)(n.id),
          r = a().groupBy(t, (e) => {
            var n;
            return null === (n = e.linkedLobby) || void 0 === n
              ? void 0
              : n.application_id;
          }),
          d = Object.keys(r);
        return (
          l.useEffect(() => {
            0 === t.length && s.Z.setSection(p.b4C.OVERVIEW);
          }, [t]),
          (0, i.jsxs)(o.FormSection, {
            children: [
              (0, i.jsx)(o.FormText, {
                type: o.FormTextTypes.DESCRIPTION,
                children: g.intl.format(g.t["9gsSLi"], {
                  helpdeskArticle: "#",
                }),
              }),
              (0, i.jsx)(o.FormDivider, { className: f.headerDivider }),
              d.map((e) =>
                (0, i.jsx)(x, { applicationId: e, channels: r[e] }, e),
              ),
            ],
          })
        );
      }
    },
    351644: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return U;
        },
      }),
        t(653041),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(658722),
        s = t.n(o),
        d = t(442837),
        c = t(780384),
        u = t(481060),
        m = t(37234),
        h = t(410030),
        p = t(726542),
        g = t(132871),
        f = t(147890),
        x = t(835473),
        b = t(231757),
        v = t(600164),
        C = t(685929),
        I = t(163400),
        N = t(553795),
        T = t(496675),
        _ = t(626135),
        j = t(768581),
        S = t(63063),
        E = t(709054),
        Z = t(51144),
        A = t(327934),
        y = t(585835),
        R = t(997787),
        O = t(981631),
        L = t(388032),
        k = t(560551),
        w = t(509399),
        M = t(790904),
        B = t(609182);
      function P(e, n) {
        return n.includes(e);
      }
      function D(e) {
        let { query: n, setQuery: t } = e,
          r = l.useCallback(
            (e) => {
              t(e);
            },
            [t],
          );
        return (0, i.jsx)("div", {
          className: k.searchContainer,
          children: (0, i.jsx)(u.SearchBar, {
            size: u.SearchBar.Sizes.MEDIUM,
            query: n,
            onChange: r,
            onClear: () => t(""),
            placeholder: L.intl.string(L.t["5prvKS"]),
            "aria-label": L.intl.string(L.t["5prvKS"]),
          }),
        });
      }
      function U(e) {
        var n, t, r, o, U, G, F, H;
        let {
            guild: W,
            channel: z,
            applicationIntegrations: V,
            builtInIntegrations: K,
            customWebhooks: q,
            followedChannelWebhooks: Y,
            isLoading: J,
            canCreateWebhook: Q,
            onManageBuiltIn: X,
            onManageCustomWebhooks: $,
            onManageFollowedChannels: ee,
            onManageApplication: en,
            onManageChannelsSyncing: et,
          } = e,
          ei = (0, h.ZP)(),
          [el, er] = l.useState(""),
          { isFetchingConnections: ea, accounts: eo } = (0, d.cj)(
            [N.Z],
            () => ({
              isFetchingConnections: N.Z.isFetching(),
              accounts: N.Z.getAccounts(),
            }),
            [],
          ),
          { canManageWebhooks: es, canManageGuild: ed } = (0, d.cj)(
            [T.Z],
            () => ({
              canManageWebhooks:
                (null != W && T.Z.can(O.Plq.MANAGE_WEBHOOKS, W)) ||
                (null != z && T.Z.can(O.Plq.MANAGE_WEBHOOKS, z)),
              canManageGuild:
                null != W && null == z && T.Z.can(O.Plq.MANAGE_GUILD, W),
            }),
            [W, z],
          ),
          ec = (0, C.Y)(z),
          eu = (0, x.q)(
            null == z
              ? void 0
              : null === (n = z.linkedLobby) || void 0 === n
                ? void 0
                : n.application_id,
          ),
          em = (0, I.F)(null == W ? void 0 : W.id),
          {
            availableTwitchIntegrations: eh,
            availableYoutubeIntegrations: ep,
            guildTwitchIntegrations: eg,
            guildYoutubeIntegrations: ef,
          } = l.useMemo(() => {
            var e, n, t, i, l, r, a, o;
            return {
              availableTwitchIntegrations:
                null !==
                  (l =
                    null === (e = K.twitch) || void 0 === e
                      ? void 0
                      : e.length) && void 0 !== l
                  ? l
                  : 0,
              availableYoutubeIntegrations:
                null !==
                  (r =
                    null === (n = K.youtube) || void 0 === n
                      ? void 0
                      : n.length) && void 0 !== r
                  ? r
                  : 0,
              guildTwitchIntegrations:
                null !==
                  (a =
                    null === (t = K.twitch) || void 0 === t
                      ? void 0
                      : t.filter((e) => e.enabled).length) && void 0 !== a
                  ? a
                  : 0,
              guildYoutubeIntegrations:
                null !==
                  (o =
                    null === (i = K.youtube) || void 0 === i
                      ? void 0
                      : i.filter((e) => e.enabled).length) && void 0 !== o
                  ? o
                  : 0,
            };
          }, [K.twitch, K.youtube]),
          { showTwitchCard: ex, showYoutubeCard: eb } = l.useMemo(() => {
            if (ea || !ed) return { showTwitchCard: !1, showYoutubeCard: !1 };
            let e = null == W ? void 0 : W.hasFeature(O.oNc.COMMUNITY),
              n = eo.filter((e) => e.type === O.ABu.TWITCH).length > 0,
              t = eo.filter((e) => e.type === O.ABu.YOUTUBE).length > 0;
            return {
              showTwitchCard: eh > 0 || (!n && e),
              showYoutubeCard: ep > 0 || (!t && e),
            };
          }, [ea, ed, W, eo, eh, ep]),
          ev = Object.values(V).length,
          eC = l.useMemo(() => {
            let e = ev > 100 ? P : s();
            return Object.values(V).filter((n) => {
              var t, i, l;
              let { application: r } = n;
              return (
                (t = r),
                (i = el),
                (l = e),
                !!(
                  "" === (i = i.trim().toLowerCase()) ||
                  t.id === i ||
                  l(i, t.name.toLowerCase()) ||
                  (null != t.bot && l(i, t.bot.username.toLowerCase()))
                ) || !1
              );
            });
          }, [V, ev, el]),
          eI = (0, d.e7)(
            [R.Z],
            () => {
              if (null != W)
                return eC.find((e) =>
                  R.Z.canShowOverviewTooltip(W.id, e.integration.id),
                );
            },
            [eC, W],
          ),
          eN = l.useMemo(
            () =>
              void 0 !== eI
                ? [
                    eI,
                    ...eC.filter((e) => e.integration.id !== eI.integration.id),
                  ]
                : eC,
            [eC, eI],
          ),
          eT = (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
          [e_, ej] = l.useState(!1),
          eS = l.useRef(0),
          eE = () => {
            ej(!0),
              clearTimeout(eS.current),
              (eS.current = setTimeout(() => {
                ej(!1);
              }, 200));
          };
        l.useEffect(
          () => (
            window.addEventListener("scroll", eE, !0),
            () => window.removeEventListener("scroll", eE)
          ),
        );
        let eZ = eN.map((e) => {
            let n =
              !eT &&
              e.integration.id === (null == eI ? void 0 : eI.integration.id);
            return (function (e, n, t, l, r) {
              var a;
              let { application: o, integration: s } = n,
                d = [];
              return (
                null != s.user
                  ? d.push({
                      icon: u.ClockIcon,
                      text: L.intl.formatToPlainString(L.t.Nu9sam, {
                        timestamp: E.default.extractTimestamp(s.id),
                        user: Z.ZP.getUserTag(s.user),
                      }),
                    })
                  : d.push({
                      icon: u.ClockIcon,
                      text: L.intl.formatToPlainString(L.t.gcdJ8P, {
                        timestamp: E.default.extractTimestamp(s.id),
                      }),
                    }),
                (0, i.jsx)(
                  y.Z,
                  {
                    name: o.name,
                    imageSrc:
                      null !== (a = o.getIconURL(48)) && void 0 !== a
                        ? a
                        : j.pK["0"],
                    integration: n,
                    buttonText: L.intl.string(L.t["Z/qRnJ"]),
                    hasNextSection: !0,
                    onButtonClick: () => {
                      t(o.id),
                        _.default.track(O.rMx.APP_MANAGE_CTA_CLICKED, {
                          application_id: o.id,
                          guild_id: null == e ? void 0 : e.id,
                          is_admin:
                            null != e
                              ? T.Z.can(O.Plq.ADMINISTRATOR, e)
                              : void 0,
                        });
                    },
                    details: d,
                    guildId: null == e ? void 0 : e.id,
                    isScrolling: l,
                    canShowMigrationTooltip: r,
                  },
                  "integration-".concat(s.id),
                )
              );
            })(W, e, en, e_, n);
          }),
          eA = (0, i.jsx)("div", { className: k.footerImage });
        0 === eZ.length &&
          ed &&
          ((eZ = (function (e, n, t) {
            let l = (0, c.wj)(e) ? M : B,
              r = (0, i.jsxs)(v.Z, {
                direction: v.Z.Direction.VERTICAL,
                align: v.Z.Align.CENTER,
                className: k.emptyStateWrapper,
                children: [
                  (0, i.jsx)("img", {
                    alt: "",
                    src: l,
                    className: k.emptyStateSearchImage,
                  }),
                  (0, i.jsx)(u.Card, {
                    editable: !0,
                    className: k.emptyStateCard,
                    children: (0, i.jsx)(u.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: L.intl.string(L.t.EVWFNj),
                    }),
                  }),
                ],
              }),
              a = (0, i.jsx)(u.Card, {
                editable: !0,
                className: k.emptyStateCard,
                children: (0, i.jsxs)("div", {
                  className: k.emptyStateText,
                  children: [
                    (0, i.jsx)("img", {
                      alt: "",
                      src: w,
                      className: k.emptyStateImage,
                    }),
                    (0, i.jsx)(u.Heading, {
                      color: "header-secondary",
                      variant: "heading-xl/bold",
                      children: L.intl.string(L.t.nQQeFB),
                    }),
                    (0, i.jsx)(u.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children: L.intl.format(L.t.snvKU1, {
                        handleGoToAppDirectory: () => {
                          (0, f.goToAppDirectory)({
                            guildId: t,
                            entrypoint: {
                              name: g.ApplicationDirectoryEntrypointNames
                                .GUILD_INTEGRATION_SETTINGS,
                            },
                          }),
                            (0, m.xf)();
                        },
                      }),
                    }),
                  ],
                }),
              });
            return n > 0 ? r : a;
          })(ei, ev, null == W ? void 0 : W.id)),
          (eA = null));
        let ey = S.Z.getArticleURL(O.BhN.INTEGRATIONS),
          eR = null != z ? L.t.YV0vh4 : L.t.FnZEJi,
          eO = [];
        if (es) {
          let e, n;
          if (
            (eO.push(
              ((t = q.length),
              (r = Q),
              (o = $),
              t > 0
                ? (n = (0, i.jsx)(u.ChevronLargeRightIcon, { size: "xs" }))
                : (e = L.intl.string(L.t.lOQqJC)),
              (0, i.jsx)(
                y.Z,
                {
                  name: L.intl.string(L.t.xOg4SE),
                  icon: u.WebhookIcon,
                  buttonText: e,
                  buttonDisabled: !r,
                  trailing: n,
                  onButtonClick: o,
                  hasNextSection: t > 0,
                  details: [
                    {
                      text: L.intl.formatToPlainString(L.t["6HqDfX"], {
                        count: t,
                      }),
                    },
                  ],
                },
                "webhooks",
              )),
            ),
            (null == z ? void 0 : z.type) !== O.d4z.GUILD_VOICE &&
              ((null == z ? void 0 : z.type) == null ||
                !O.TPd.GUILD_THREADS_ONLY.has(z.type)))
          ) {
            let e, n, t;
            eO.push(
              ((U = Y.length),
              (G = ee),
              U > 0
                ? ((t = (0, i.jsx)(u.ChevronLargeRightIcon, { size: "xs" })),
                  (n = G))
                : ((e = L.intl.string(L.t["ZwSt+f"])),
                  (n = () => open(S.Z.getArticleURL(O.BhN.CHANNEL_FOLLOWING)))),
              (0, i.jsx)(
                y.Z,
                {
                  name: L.intl.string(L.t.OrV60t),
                  icon: u.ChannelsFollowedIcon,
                  buttonText: e,
                  onButtonClick: n,
                  trailing: t,
                  hasNextSection: U > 0,
                  details: [
                    {
                      text: L.intl.formatToPlainString(L.t.JUNGIS, {
                        count: U,
                      }),
                    },
                  ],
                },
                "channels-followed",
              )),
            );
          }
        }
        if (null == z && em.length > 0) {
          eO.push(
            ((F = em.length),
            (H = et),
            (0, i.jsx)(
              y.Z,
              {
                name: L.intl.string(L.t.tqtDXF),
                icon: u.RefreshIcon,
                trailing: (0, i.jsx)(u.ChevronLargeRightIcon, { size: "xs" }),
                onButtonClick: H,
                hasNextSection: !0,
                details: [
                  {
                    text: L.intl.formatToPlainString(L.t["puxS4+"], {
                      count: F,
                    }),
                  },
                ],
              },
              "channels-syncing",
            )),
          );
        }
        ex &&
          eO.push(
            (function (e, n, t) {
              let l, r, a, o;
              let s = p.Z.get(O.ABu.TWITCH);
              return (
                e > 0
                  ? ((o = (0, i.jsx)(u.ChevronLargeRightIcon, { size: "xs" })),
                    (r = L.intl.formatToPlainString(L.t.FFpnT0, { count: n })),
                    (a = () => t(O.ABu.TWITCH)))
                  : ((l = L.intl.string(L.t.bkvGkp)),
                    (r = L.intl.string(L.t.Qq3X2N)),
                    (a = () =>
                      (0, b.Z)({
                        platformType: O.ABu.TWITCH,
                        location: "Integration Settings",
                      }))),
                (0, i.jsx)(
                  y.Z,
                  {
                    name: L.intl.string(L.t.q4pBGx),
                    icon: s.icon.whiteSVG,
                    iconBackgroundColor: s.color,
                    iconClassName: k.platformIcon,
                    buttonText: l,
                    onButtonClick: a,
                    trailing: o,
                    hasNextSection: e > 0,
                    details: [{ text: r }],
                  },
                  "integrations-twitch",
                )
              );
            })(eh, eg, X),
          ),
          eb &&
            eO.push(
              (function (e, n, t) {
                let l, r, a, o;
                let s = p.Z.get(O.ABu.YOUTUBE);
                return (
                  e > 0
                    ? ((o = (0, i.jsx)(u.ChevronLargeRightIcon, {
                        size: "xs",
                      })),
                      (r = L.intl.formatToPlainString(L.t.b2g5vL, {
                        count: n,
                      })),
                      (a = () => t(O.ABu.YOUTUBE)))
                    : ((l = L.intl.string(L.t.xEyQ3d)),
                      (r = L.intl.string(L.t.T0ivgY)),
                      (a = () =>
                        (0, b.Z)({
                          platformType: O.ABu.YOUTUBE,
                          location: "Integration Settings",
                        }))),
                  (0, i.jsx)(
                    y.Z,
                    {
                      name: L.intl.string(L.t.aS6cKy),
                      icon: s.icon.whiteSVG,
                      iconBackgroundColor: s.color,
                      iconClassName: k.platformIcon,
                      buttonText: l,
                      onButtonClick: a,
                      trailing: o,
                      hasNextSection: e > 0,
                      details: [{ text: r }],
                    },
                    "integrations-youtube",
                  )
                );
              })(ep, ef, X),
            );
        let eL = null != z && ec && null != eu;
        return (0, i.jsxs)(u.FormSection, {
          className: a()(null != eA ? k.footerPlaceholder : null),
          children: [
            (0, i.jsx)(u.FormText, {
              type: u.FormTextTypes.DESCRIPTION,
              children: L.intl.format(eR, { helpdeskArticle: ey }),
            }),
            (0, i.jsx)(u.FormDivider, { className: k.divider }),
            J || ea || null == W
              ? (0, i.jsx)(u.Spinner, {
                  className: k.__invalid_spinner,
                  type: u.Spinner.Type.SPINNING_CIRCLE,
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    eO,
                    eL &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          eO.length > 0
                            ? (0, i.jsx)(u.FormDivider, {
                                className: k.divider,
                              })
                            : null,
                          (0, i.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            className: k.sectionHeader,
                            children: L.intl.string(L.t.oAvIAg),
                          }),
                          (0, i.jsx)(A.I, {
                            channel: z,
                            application: eu,
                            showApplicationImage: !0,
                            name: eu.name,
                            hasNextSection: !0,
                            iconClassName: k.linkedLobbyIcon,
                            trailing: (0, i.jsx)(u.PencilIcon, { size: "xs" }),
                          }),
                        ],
                      }),
                    ed
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            eO.length > 0 || eL
                              ? (0, i.jsx)(u.FormDivider, {
                                  className: k.divider,
                                })
                              : null,
                            (0, i.jsx)(u.Heading, {
                              variant: "heading-md/semibold",
                              className: k.sectionHeader,
                              children: L.intl.string(L.t.pUBKho),
                            }),
                            ev > 4
                              ? (0, i.jsx)(D, { query: el, setQuery: er })
                              : null,
                            eZ,
                          ],
                        })
                      : null,
                    eA,
                  ],
                }),
          ],
        });
      }
    },
    108053: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(780384),
        a = t(481060),
        o = t(668781),
        s = t(308063),
        d = t(410030),
        c = t(600164),
        u = t(63063),
        m = t(725875),
        h = t(981631),
        p = t(388032),
        g = t(290883),
        f = t(893916),
        x = t(408942);
      function b(e) {
        let n,
          {
            guild: t,
            channel: b,
            customWebhooks: v,
            editedWebhook: C,
            selectableWebhookChannels: I,
            refToScroller: N,
            errors: T,
            canNavigate: _,
          } = e,
          j = (0, d.ZP)(),
          [S, E] = l.useState(null),
          [Z, A] = l.useState(null);
        if (null != b) n = b;
        else {
          let e = Object.values(I);
          n = e.length > 0 ? e[0] : null;
        }
        let y = l.useCallback(async () => {
          if (_() && null !== n) {
            let e = await s.Z.create(t.id, n.id).catch((e) => {
              let { body: n, status: t } = e;
              return (
                n && n.code === h.evJ.TOO_MANY_WEBHOOKS
                  ? o.Z.show({
                      title: p.intl.string(p.t.cCqscX),
                      body: p.intl.string(p.t["w+QZoa"]),
                    })
                  : 429 === t
                    ? o.Z.show({
                        title: p.intl.string(p.t.cCqscX),
                        body: p.intl.string(p.t["YBM+UV"]),
                      })
                    : o.Z.show({
                        title: p.intl.string(p.t.cCqscX),
                        body: p.intl.string(p.t["/4TwKS"]),
                      }),
                null
              );
            });
            null != e && (A(e.id), E(e));
          }
        }, [_, n, t]);
        l.useEffect(() => {
          0 === v.length && y();
        }, []);
        let R = null !== n;
        return (0, i.jsxs)(a.FormSection, {
          children: [
            (0, i.jsx)(a.FormText, {
              type: a.FormTextTypes.DESCRIPTION,
              children: p.intl.format(p.t.WL0d0d, {
                helpdeskArticle: u.Z.getArticleURL(h.BhN.WEBHOOKS),
                developersArticle: h.EYA.API_DOCS_WEBHOOKS,
              }),
            }),
            (0, i.jsx)(a.FormDivider, { className: g.headerDivider }),
            v.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(a.Button, {
                      className: g.createButton,
                      size: a.Button.Sizes.SMALL,
                      disabled: !R,
                      onClick: y,
                      children: p.intl.string(p.t["nrO/HB"]),
                    }),
                    (0, i.jsx)(m.Z, {
                      webhooks: v,
                      editedWebhook: C,
                      selectableWebhookChannels: I,
                      lastCreatedWebhookId: null == S ? void 0 : S.id,
                      errors: T,
                      canNavigate: _,
                    }),
                  ],
                })
              : (function (e, n, t) {
                  let l = (0, r.wj)(e) ? f : x;
                  return (0, i.jsxs)(c.Z, {
                    direction: c.Z.Direction.VERTICAL,
                    align: c.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)("img", {
                        alt: "",
                        src: l,
                        className: g.emptyStateImage,
                      }),
                      (0, i.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        children: p.intl.string(p.t.LzmsWl),
                      }),
                      (0, i.jsx)(a.Button, {
                        className: g.emptyStateButton,
                        disabled: !n,
                        onClick: t,
                        children: p.intl.string(p.t.lOQqJC),
                      }),
                    ],
                  });
                })(j, R, y),
          ],
        });
      }
    },
    490655: function (e, n, t) {
      t(47120), t(653041);
      var i = t(200651),
        l = t(192379),
        r = t(392711),
        a = t.n(r),
        o = t(442837),
        s = t(481060),
        d = t(139387),
        c = t(503089),
        u = t(231757),
        m = t(600164),
        h = t(106976),
        p = t(488915),
        g = t(984933),
        f = t(496675),
        x = t(585483),
        b = t(63063),
        v = t(919196),
        C = t(731072),
        I = t(494118),
        N = t(491500),
        T = t(351644),
        _ = t(108053),
        j = t(981631),
        S = t(388032),
        E = t(194639);
      function Z(e, n) {
        switch (e) {
          case j.b4C.APPLICATION:
            var t;
            return null !== (t = null == n ? void 0 : n.application.name) &&
              void 0 !== t
              ? t
              : "";
          case j.b4C.OVERVIEW:
            return S.intl.string(S.t.s69NLC);
          case j.b4C.CHANNEL_FOLLOWING:
            return S.intl.string(S.t.OrV60t);
          case j.b4C.TWITCH:
            return S.intl.string(S.t.q4pBGx);
          case j.b4C.WEBHOOKS:
            return S.intl.string(S.t.xOg4SE);
          case j.b4C.YOUTUBE:
            return S.intl.string(S.t.aS6cKy);
          case j.b4C.CHANNELS_SYNCING:
            return S.intl.string(S.t.tqtDXF);
          default:
            return "";
        }
      }
      n.Z = l.memo(function (e) {
        let {
            section: n,
            sectionId: t,
            guild: r,
            channel: A,
            integrations: y,
            editedIntegration: R,
            webhooks: O,
            editedWebhook: L,
            isFetching: k,
            refToScroller: w,
            errors: M,
            hasChanges: B,
          } = e,
          P = (0, o.e7)([g.ZP], () =>
            null != r ? g.ZP.getDefaultChannel(r.id) : null,
          ),
          D = (0, o.cj)([g.ZP], () =>
            g.ZP.getChannels(null == r ? void 0 : r.id),
          ),
          U = (0, o.cj)([f.Z], () =>
            a().keyBy(
              D.SELECTABLE.map((e) => e.channel).filter((e) =>
                f.Z.can(j.Plq.MANAGE_WEBHOOKS, e),
              ),
              "id",
            ),
          ),
          G = (0, o.cj)([f.Z], () =>
            a().keyBy(
              D.VOCAL.map((e) => e.channel).filter(
                (e) => e.isGuildVocal() && f.Z.can(j.Plq.MANAGE_WEBHOOKS, e),
              ),
              "id",
            ),
          ),
          F = null != A ? A : P,
          H = n === j.b4C.APPLICATION ? t : null,
          [W, z] = l.useState(c.$x),
          V = l.useCallback(
            () =>
              B()
                ? (x.S.dispatch(j.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: W,
                  }),
                  z(Math.min(W + c.d7, c.w6)),
                  x.S.dispatch(j.CkL.EMPHASIZE_NOTICE),
                  !1)
                : (z(c.$x), !0),
            [B, W],
          ),
          K = l.useCallback((e) => !!V() && (d.Z.setSection(e), !0), [V]),
          {
            applicationIntegrations: q,
            applicationBotIds: Y,
            builtInIntegrations: J,
            customWebhooks: Q,
            followedChannelWebhooks: X,
          } = l.useMemo(() => {
            let e = {},
              n = {},
              t = {},
              i = [],
              l = [];
            if (null != y)
              for (let i of y)
                if ("discord" === i.type) {
                  if (null != i.application) {
                    var r;
                    (e[i.application.id] = {
                      application: i.application,
                      integration: i,
                      webhooks: [],
                    }),
                      (null === (r = i.application.bot) || void 0 === r
                        ? void 0
                        : r.id) !== void 0 &&
                        (n[i.application.bot.id] = i.application.id);
                  }
                } else !(i.type in t) && (t[i.type] = []), t[i.type].push(i);
            for (let n of O) {
              if (n.channel_id in U || n.channel_id in G)
                null != n.application_id && n.application_id in e
                  ? e[n.application_id].webhooks.push(n)
                  : n.type === j.ylB.CHANNEL_FOLLOWER
                    ? l.push(n)
                    : i.push(n);
            }
            return {
              applicationIntegrations: e,
              applicationBotIds: n,
              builtInIntegrations: t,
              customWebhooks: i,
              followedChannelWebhooks: l,
            };
          }, [y, U, G, O]);
        l.useEffect(() => {
          if (!k)
            switch (n) {
              case j.b4C.TWITCH:
                null == J[j.ABu.TWITCH] && d.Z.setSection(j.b4C.OVERVIEW);
                break;
              case j.b4C.YOUTUBE:
                null == J[j.ABu.YOUTUBE] && d.Z.setSection(j.b4C.OVERVIEW);
                break;
              case j.b4C.APPLICATION:
                (null == H || !(H in Y || H in q)) &&
                  d.Z.setSection(j.b4C.OVERVIEW);
            }
        }, [q, Y, J, H, n, k]),
          l.useEffect(() => {
            if ((null == r ? void 0 : r.id) != null)
              p.Z.getEntitlementsForGuildFetchState(r.id) === p.M.NOT_FETCHED &&
                h.i1(r.id);
          }, [null == r ? void 0 : r.id]);
        let $ = null;
        switch (n) {
          case j.b4C.TWITCH:
            null != J[j.ABu.TWITCH] &&
              ($ = (0, i.jsx)(C.Z, {
                guild: r,
                integrations: J[j.ABu.TWITCH],
                editedIntegration: R,
                labelText: S.intl.string(S.t.q4pBGx),
                platformType: j.ABu.TWITCH,
                descriptionText: S.intl.string(S.t.V9kNqq),
                helpText: S.intl.format(S.t.ro1jEB, {
                  connectAction: () =>
                    (0, u.Z)({
                      platformType: j.ABu.TWITCH,
                      location: "Integration Settings",
                    }),
                  helpdeskArticle: b.Z.getArticleURL(j.BhN.TWITCH_INTEGRATION),
                }),
                canNavigate: V,
              }));
            break;
          case j.b4C.YOUTUBE:
            null != J[j.ABu.YOUTUBE] &&
              ($ = (0, i.jsx)(C.Z, {
                guild: r,
                integrations: J[j.ABu.YOUTUBE],
                editedIntegration: R,
                labelText: S.intl.string(S.t.aS6cKy),
                platformType: j.ABu.YOUTUBE,
                descriptionText: S.intl.string(S.t["7Tv7JC"]),
                helpText: S.intl.format(S.t["4OSAQ0"], {
                  connectAction: () =>
                    (0, u.Z)({ platformType: j.ABu.YOUTUBE }),
                  helpdeskArticle: b.Z.getArticleURL(j.BhN.YOUTUBE_INTEGRATION),
                }),
                canNavigate: V,
              }));
            break;
          case j.b4C.APPLICATION:
            var ee;
            let en =
              null != H
                ? null !== (ee = q[Y[H]]) && void 0 !== ee
                  ? ee
                  : q[H]
                : null;
            null != en &&
              ($ = (0, i.jsx)(v.Z, {
                guild: r,
                applicationIntegration: en,
                editedWebhook: L,
                selectableWebhookChannels: U,
                errors: M,
                canNavigate: V,
              }));
            break;
          case j.b4C.CHANNEL_FOLLOWING:
            $ = (0, i.jsx)(I.Z, {
              followedChannelWebhooks: X,
              editedWebhook: L,
              selectableWebhookChannels: U,
              canNavigate: V,
              errors: M,
            });
            break;
          case j.b4C.WEBHOOKS:
            $ = (0, i.jsx)(_.Z, {
              guild: r,
              channel: A,
              customWebhooks: Q,
              editedWebhook: L,
              selectableWebhookChannels: { ...U, ...G },
              canNavigate: V,
              refToScroller: w,
              errors: M,
            });
            break;
          case j.b4C.CHANNELS_SYNCING:
            $ = (0, i.jsx)(N.Z, { guild: r });
            break;
          default:
            $ = (0, i.jsx)(T.Z, {
              guild: r,
              channel: A,
              applicationIntegrations: q,
              builtInIntegrations: J,
              customWebhooks: Q,
              followedChannelWebhooks: X,
              isLoading: k || null == r,
              canCreateWebhook: null != F,
              onManageCustomWebhooks: () => {
                d.Z.setSection(j.b4C.WEBHOOKS);
              },
              onManageFollowedChannels: () => {
                d.Z.setSection(j.b4C.CHANNEL_FOLLOWING);
              },
              onManageApplication: (e) => {
                d.Z.setSection(j.b4C.APPLICATION, e);
              },
              onManageBuiltIn: (e) => {
                switch (e) {
                  case j.ABu.TWITCH:
                    d.Z.setSection(j.b4C.TWITCH);
                    break;
                  case j.ABu.YOUTUBE:
                    d.Z.setSection(j.b4C.YOUTUBE);
                }
              },
              onManageChannelsSyncing: () => {
                d.Z.setSection(j.b4C.CHANNELS_SYNCING);
              },
            });
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(m.Z, {
              align: m.Z.Align.CENTER,
              className: E.breadcrumbs,
              children:
                n === j.b4C.OVERVIEW
                  ? (0, i.jsx)(s.FormTitle, {
                      tag: "h1",
                      children: Z(j.b4C.OVERVIEW),
                    })
                  : (0, i.jsx)(s.Breadcrumbs, {
                      activeId: n.toString(),
                      breadcrumbs: [j.b4C.OVERVIEW, n].map((e) => ({
                        id: e.toString(),
                        label: Z(e, q[H]),
                      })),
                      onBreadcrumbClick: (e) => {
                        if (n !== parseInt(e.id)) K(parseInt(e.id));
                      },
                      renderCustomBreadcrumb: (e, n) =>
                        (0, i.jsx)(s.FormTitle, {
                          tag: "h1",
                          className: n
                            ? E.breadcrumbActive
                            : E.breadcrumbInactive,
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
          return I;
        },
      }),
        t(653041),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(149765),
        a = t(442837),
        o = t(481060),
        s = t(749210),
        d = t(412899),
        c = t(995648),
        u = t(385499),
        m = t(600164),
        h = t(422559),
        p = t(598077),
        g = t(271383),
        f = t(430824),
        x = t(823379),
        b = t(700785),
        v = t(388032),
        C = t(452199);
      function I(e) {
        var n;
        let { guild: t, applicationIntegration: I } = e,
          N = (0, a.e7)([f.Z], () => f.Z.getRoles(t.id)),
          { application: T } = I,
          _ = null != T.bot ? new p.Z(T.bot) : null,
          j = (0, a.e7)(
            [g.ZP],
            () => (null != _ ? g.ZP.getMember(t.id, _.id) : null),
            [_, t],
          ),
          S = null == _ ? void 0 : _.id;
        l.useEffect(() => {
          if (null != S) s.Z.requestMembersById(t.id, S);
        }, [t.id, S]);
        let E = l.useMemo(() => {
          var e, n, i;
          let l = N[t.getEveryoneRoleId()],
            a =
              null !==
                (n =
                  null == j
                    ? void 0
                    : null === (e = j.roles) || void 0 === e
                      ? void 0
                      : e.map((e) => N[e]).filter(x.lm)) && void 0 !== n
                ? n
                : [],
            o =
              null !== (i = null == l ? void 0 : l.permissions) && void 0 !== i
                ? i
                : b.Hn;
          for (let e of a) o = r.IH(o, e.permissions);
          return o;
        }, [t, N, j]);
        return null == _
          ? null
          : (0, i.jsx)(o.Card, {
              editable: !0,
              className: C.card,
              children: (0, i.jsxs)(m.Z, {
                direction: m.Z.Direction.VERTICAL,
                children: [
                  (0, i.jsxs)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)("img", {
                        alt: "",
                        src: _.getAvatarURL(t.id, 32),
                        className: C.iconWrapper,
                      }),
                      (0, i.jsx)(o.Text, {
                        color: "header-primary",
                        variant: "text-sm/normal",
                        children: v.intl.format(v.t.GyhzGx, { user: _ }),
                      }),
                      (0, i.jsx)(u.Z, {
                        className: C.tag,
                        verified: _.isVerifiedBot(),
                      }),
                    ],
                  }),
                  (function (e, n, t, l) {
                    let a = [],
                      s = [];
                    for (let e of h.VY) r.e$(l, e) ? a.push(e) : s.push(e);
                    return (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(o.FormDivider, { className: C.divider }),
                        t.length > 0
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(o.FormTitle, {
                                  className: C.permissionHeader,
                                  children: v.intl.format(v.t.PCs0oq, {
                                    numRoles: t.length,
                                  }),
                                }),
                                (0, i.jsx)(d.ZP, {
                                  className: C.rolePills,
                                  user: e,
                                  guild: n,
                                  userRoles: t,
                                  wrap: !1,
                                  readOnly: !0,
                                }),
                              ],
                            })
                          : null,
                        a.length > 0 || s.length > 0
                          ? (0, i.jsx)(c.Z, {
                              grantedPermissions: a,
                              grantedPermissionsHeader: v.intl.string(
                                v.t["hA4+sr"],
                              ),
                              disabledPermissions: s,
                              disabledPermissionsHeader: v.intl.string(
                                v.t["/rEZ2t"],
                              ),
                            })
                          : null,
                      ],
                    });
                  })(
                    _,
                    t,
                    null !== (n = null == j ? void 0 : j.roles) && void 0 !== n
                      ? n
                      : [],
                    E,
                  ),
                ],
              }),
            });
      }
    },
    13051: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      }),
        t(47120),
        t(315314),
        t(610138),
        t(216116),
        t(78328),
        t(815648);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(913527),
        s = t.n(o),
        d = t(442837),
        c = t(481060),
        u = t(139387),
        m = t(726542),
        h = t(600164),
        p = t(339085),
        g = t(434404),
        f = t(598077),
        x = t(430824),
        b = t(246946),
        v = t(259580),
        C = t(531087),
        I = t(768581),
        N = t(709054),
        T = t(486199),
        _ = t(981631),
        j = t(388032),
        S = t(101494),
        E = t(113207);
      function Z(e) {
        let n,
          {
            guild: t,
            integration: r,
            editedIntegration: o,
            isExpanded: Z,
            onToggleExpand: A,
            onDisable: y,
            onEnable: R,
          } = e,
          O = (0, d.e7)([x.Z], () => x.Z.getRoles(t.id)),
          [L, k] = l.useState(!1),
          w = (0, d.e7)([b.Z], () => b.Z.hidePersonalInformation),
          M = l.useCallback(() => {
            k(!0), R(r);
          }, [r, R]),
          B = l.useCallback(() => {
            !r.syncing &&
              (0, c.openModal)((e) => {
                let n =
                  0 === r.expire_behavior
                    ? j.intl.string(j.t["6kpw4u"])
                    : j.intl.string(j.t.fQUQIC);
                return (0, i.jsx)(c.ConfirmModal, {
                  ...e,
                  header: j.intl.string(j.t.emx3lJ),
                  confirmText: n,
                  cancelText: j.intl.string(j.t["ETE/oK"]),
                  onConfirm: () => y(r),
                  children: (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children:
                      r.type === _.ABu.YOUTUBE
                        ? j.intl.string(j.t.anKQWV)
                        : j.intl.string(j.t["BW/xtr"]),
                  }),
                });
              });
          }, [r, y]),
          P = l.useCallback(() => {
            g.Z.syncIntegration(t.id, r.id);
          }, [t.id, r.id]),
          D = l.useCallback(() => {
            null != r.role_id &&
              (g.Z.setSection(_.pNK.ROLES), g.Z.selectRole(r.role_id));
          }, [r.role_id]),
          {
            serviceName: U,
            channelURL: G,
            expireBehaviorLabel: F,
            syncLabel: H,
            subscribersText: W,
          } = l.useMemo(() => {
            var e, n, t, i, l;
            let a =
              null !==
                (t =
                  null === (n = m.Z.get(r.type)) || void 0 === n
                    ? void 0
                    : null === (e = n.getPlatformUserUrl) || void 0 === e
                      ? void 0
                      : e.call(n, r.account)) && void 0 !== t
                ? t
                : "";
            switch (r.type) {
              case _.ABu.YOUTUBE:
                return {
                  serviceName: j.intl.string(j.t.aS6cKy),
                  expireBehaviorLabel: j.intl.string(j.t.A5MiqK),
                  syncLabel: j.intl.string(j.t["7vHKVV"]),
                  subscribersText: j.intl.formatToPlainString(j.t["7lNtcX"], {
                    subscribers:
                      null !== (i = r.subscriber_count) && void 0 !== i ? i : 0,
                  }),
                  channelURL: a,
                };
              case _.ABu.TWITCH:
              default:
                return {
                  serviceName: j.intl.string(j.t.q4pBGx),
                  expireBehaviorLabel: j.intl.string(j.t["S/WCrK"]),
                  syncLabel: j.intl.string(j.t["0jbPKy"]),
                  subscribersText: j.intl.formatToPlainString(j.t.RdUTrq, {
                    subscribers:
                      null !== (l = r.subscriber_count) && void 0 !== l ? l : 0,
                  }),
                  channelURL: a,
                };
            }
          }, [r.account, r.subscriber_count, r.type]),
          { roleLink: z, syncDescriptionText: V } = l.useMemo(() => {
            let e, n;
            let t = null != r.role_id ? O[r.role_id] : null;
            e =
              null != t
                ? (0, i.jsx)(c.Anchor, { onClick: D, children: t.name })
                : j.intl.string(j.t.PoWNfX);
            let l = m.Z.get(r.type);
            return {
              roleLink: e,
              syncDescriptionText: (n =
                r.revoked && null != l
                  ? j.intl.formatToPlainString(j.t.G16Wjo, {
                      user: r.user,
                      platformName: l.name,
                    })
                  : j.intl.formatToPlainString(j.t.unl3AA, {
                      datetime: s()(r.synced_at).calendar(),
                    })),
            };
          }, [O, D, r.revoked, r.role_id, r.synced_at, r.type, r.user]),
          K = l.useMemo(() => {
            let e = p.ZP.getGuildEmoji(t.id),
              n = Object.values(O)
                .filter((e) => null != e.tags && e.tags.integration_id === r.id)
                .map((e) => e.id);
            return r.enable_emoticons
              ? e
                  .sort((e, n) => e.name.localeCompare(n.name))
                  .filter(
                    (e) =>
                      null != r.role_id &&
                      (null == e ? void 0 : e.roles.some((e) => n.includes(e))),
                  )
              : [];
          }, [t.id, O, r.enable_emoticons, r.id, r.role_id]);
        if (
          (l.useEffect(() => {
            (null == o ? void 0 : o.id) === r.id &&
              (null == o ? void 0 : o.enabled) === !0 &&
              k(!1);
          }, [o, r.id]),
          r.enabled && null != r.user)
        )
          n = [
            {
              icon: c.ClockIcon,
              text: w
                ? j.intl.formatToPlainString(j.t.gcdJ8P, {
                    timestamp: N.default.extractTimestamp(r.id),
                  })
                : j.intl.formatToPlainString(j.t.Nu9sam, {
                    user: null != r.user ? new f.Z(r.user).tag : null,
                    timestamp: N.default.extractTimestamp(r.id),
                  }),
            },
          ];
        else {
          let e = new URL(G);
          n = [
            {
              text: j.intl.format(j.t.BegylZ, {
                serviceName: U,
                accountUrl: G,
                accountUrlText: e.hostname + e.pathname,
              }),
            },
          ];
        }
        let q = (0, i.jsxs)(h.Z, {
            className: S.header,
            align: h.Z.Align.CENTER,
            children: [
              (0, i.jsx)(T.Z, {
                name: "".concat(r.name),
                detailsClassName: S.description,
                details: n,
              }),
              r.enabled
                ? (0, i.jsx)(h.Z.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, i.jsx)(v.Z, {
                      className: S.expandIcon,
                      expanded: Z && !L,
                      "aria-hidden": !0,
                    }),
                  })
                : (0, i.jsx)(h.Z.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, i.jsx)(c.Button, {
                      size: c.Button.Sizes.SMALL,
                      color: c.Button.Colors.PRIMARY,
                      onClick: M,
                      disabled: L,
                      children: L
                        ? (0, i.jsx)(C.Z, { width: 24, height: 24 })
                        : (0, i.jsx)(i.Fragment, {
                            children: j.intl.string(j.t["7sCN8v"]),
                          }),
                    }),
                  }),
            ],
          }),
          Y = null;
        return (
          Z &&
            !L &&
            null != o &&
            (Y = (0, i.jsxs)(h.Z, {
              className: S.body,
              direction: h.Z.Direction.VERTICAL,
              children: [
                (0, i.jsx)(c.FormDivider, { className: S.topDivider }),
                (function (e) {
                  let {
                    integration: n,
                    labelText: t,
                    subscribersText: l,
                    descriptionText: r,
                    roleLink: a,
                    onSync: o,
                  } = e;
                  return (0, i.jsxs)(h.Z, {
                    children: [
                      (0, i.jsxs)(h.Z.Child, {
                        basis: "50%",
                        children: [
                          (0, i.jsx)(c.FormTitle, {
                            className: E.marginBottom8,
                            children: j.intl.string(j.t.eBtNBQ),
                          }),
                          (0, i.jsx)(c.Text, {
                            className: S.syncedRole,
                            color: "header-primary",
                            variant: "text-sm/normal",
                            children: a,
                          }),
                        ],
                      }),
                      (0, i.jsxs)(h.Z.Child, {
                        basis: "50%",
                        children: [
                          (0, i.jsx)(c.FormTitle, {
                            className: E.marginBottom8,
                            children: t,
                          }),
                          (0, i.jsxs)(h.Z, {
                            justify: h.Z.Justify.BETWEEN,
                            children: [
                              (0, i.jsxs)(h.Z, {
                                direction: h.Z.Direction.VERTICAL,
                                children: [
                                  (0, i.jsx)(c.Text, {
                                    color: "header-primary",
                                    variant: "text-sm/normal",
                                    children: l,
                                  }),
                                  (0, i.jsx)(c.Text, {
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    children: r,
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
                                  ? (0, i.jsx)(C.Z, { width: 24, height: 24 })
                                  : (0, i.jsx)(i.Fragment, {
                                      children: j.intl.string(j.t.BkuOOz),
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
                  labelText: H,
                  subscribersText: W,
                  descriptionText: V,
                  roleLink: z,
                  onSync: P,
                }),
                (0, i.jsx)(c.FormDivider, { className: S.midDivider }),
                (function (e) {
                  let {
                    integration: n,
                    labelText: t,
                    onBehaviorChange: l,
                    onGracePeriodChange: r,
                  } = e;
                  return (0, i.jsxs)(h.Z, {
                    children: [
                      (0, i.jsxs)(h.Z.Child, {
                        basis: "50%",
                        children: [
                          (0, i.jsx)(c.FormTitle, {
                            className: E.marginBottom8,
                            children: t,
                          }),
                          (0, i.jsx)(c.SingleSelect, {
                            placeholder: t,
                            value: "".concat(n.expire_behavior),
                            options: [
                              {
                                value: "0",
                                label: j.intl.string(j.t["6kpw4u"]),
                              },
                              { value: "1", label: j.intl.string(j.t.fQUQIC) },
                            ],
                            isDisabled: n.syncing,
                            onChange: (e) => l(parseInt(e)),
                          }),
                        ],
                      }),
                      (0, i.jsxs)(h.Z.Child, {
                        basis: "50%",
                        children: [
                          (0, i.jsx)(c.FormTitle, {
                            className: E.marginBottom8,
                            children: j.intl.string(j.t.uiXMo6),
                          }),
                          (0, i.jsx)(c.SingleSelect, {
                            placeholder: j.intl.string(j.t.uiXMo6),
                            maxVisibleItems: 5,
                            value: "".concat(n.expire_grace_period),
                            options: [1, 3, 7, 14, 30].map((e) => ({
                              value: "".concat(e),
                              label: j.intl.formatToPlainString(j.t.eGjmy8, {
                                days: e,
                              }),
                            })),
                            onChange: (e) => r(parseInt(e)),
                            isDisabled: n.syncing,
                          }),
                        ],
                      }),
                    ],
                  });
                })({
                  integration: o,
                  labelText: F,
                  onBehaviorChange: function (e) {
                    u.Z.updateIntegration({ expireBehavior: e });
                  },
                  onGracePeriodChange: function (e) {
                    u.Z.updateIntegration({ expireGracePeriod: e });
                  },
                }),
                r.type === _.ABu.TWITCH
                  ? (function (e) {
                      let { integration: n, emojis: t, onToggle: l } = e;
                      return (0, i.jsxs)(h.Z, {
                        direction: h.Z.Direction.VERTICAL,
                        children: [
                          (0, i.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            className: a()(E.marginTop20, E.marginBottom8),
                            value: n.enable_emoticons,
                            disabled: n.syncing,
                            onChange: (e) => {
                              let { currentTarget: n } = e;
                              return l(n.checked);
                            },
                            children: (0, i.jsx)(c.FormText, {
                              children: j.intl.string(j.t["7r4OKi"]),
                            }),
                          }),
                          (0, i.jsx)(h.Z, {
                            wrap: h.Z.Wrap.WRAP,
                            className: S.__invalid_twitchEmojis,
                            children: t.map((e, n) =>
                              (0, i.jsx)(
                                c.Tooltip,
                                {
                                  text: e.name,
                                  children: (n) =>
                                    (0, i.jsx)(
                                      "img",
                                      {
                                        alt: j.intl.formatToPlainString(
                                          j.t.n6ZZn5,
                                          { name: e.name },
                                        ),
                                        draggable: !1,
                                        className: a()(
                                          S.emoji,
                                          "emoji",
                                          "jumboable",
                                        ),
                                        src: I.ZP.getEmojiURL({
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
                      emojis: K,
                      onToggle: function (e) {
                        u.Z.updateIntegration({ enableEmoticons: e });
                      },
                    })
                  : null,
                (0, i.jsx)(c.FormDivider, { className: S.bottomDivider }),
                (0, i.jsx)(h.Z, {
                  children: (0, i.jsx)(c.Button, {
                    className: S.disableButton,
                    size: c.Button.Sizes.SMALL,
                    color: c.Button.Colors.RED,
                    look: c.Button.Looks.LINK,
                    onClick: B,
                    children: j.intl.string(j.t.M6q6eX),
                  }),
                }),
              ],
            })),
          (0, i.jsx)(c.Card, {
            editable: !0,
            className: S.card,
            children: (0, i.jsxs)(h.Z, {
              direction: h.Z.Direction.VERTICAL,
              children: [
                r.enabled
                  ? (0, i.jsx)(c.Clickable, {
                      className: S.expandableHeader,
                      "aria-expanded": Z && !L,
                      onClick: A,
                      children: q,
                    })
                  : q,
                Y,
              ],
            }),
          })
        );
      }
    },
    491302: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      }),
        t(653041);
      var i = t(200651),
        l = t(192379),
        r = t(481060),
        a = t(668781),
        o = t(139387),
        s = t(308063),
        d = t(600164),
        c = t(259580),
        u = t(768581),
        m = t(486199),
        h = t(981631),
        p = t(388032),
        g = t(176662);
      function f(e) {
        let {
            webhook: n,
            editedWebhook: t,
            channelOptions: f,
            isExpanded: x,
            errors: b,
            onToggleExpand: v,
          } = e,
          C = l.useMemo(() => {
            var e, t;
            return (
              (e = n),
              null != (t = n.avatar) && /^data:/.test(t)
                ? t
                : (0, u.ov)({ id: e.id, avatar: t, discriminator: h.fo$ })
            );
          }, [n]),
          I = l.useCallback(() => {
            (0, r.openModal)((e) =>
              (0, i.jsx)(r.ConfirmModal, {
                ...e,
                header: p.intl.formatToPlainString(p.t.gBKqZ2, {
                  name: n.name,
                }),
                confirmText: p.intl.string(p.t.CMy0Cg),
                cancelText: p.intl.string(p.t["ETE/oK"]),
                onConfirm: () => {
                  s.Z.delete(n.guild_id, n.id).catch(() => {
                    a.Z.show({
                      title: p.intl.string(p.t.LpbaFR),
                      body: p.intl.string(p.t["/4TwKS"]),
                    });
                  });
                },
                children: (0, i.jsx)(r.Text, {
                  variant: "text-md/normal",
                  children: p.intl.string(p.t.zO9jrK),
                }),
              }),
            );
          }, [n.guild_id, n.id, n.name]),
          N = [];
        null != n.source_channel &&
          null != n.source_guild &&
          (N.push({ icon: r.AnnouncementsIcon, text: n.source_channel.name }),
          N.push({
            text: (0, i.jsx)(
              "span",
              {
                className: g.guildSource,
                children: p.intl.format(p.t["H/jJ6e"], {
                  guildHook: () =>
                    (0, i.jsx)(
                      "span",
                      {
                        className: g.sourceName,
                        children: n.source_guild.name,
                      },
                      n.id,
                    ),
                }),
              },
              "guild-source",
            ),
          }));
        let T = null;
        return (
          x &&
            null != t &&
            (T = (0, i.jsxs)("div", {
              className: g.body,
              children: [
                (0, i.jsx)(r.FormDivider, { className: g.topDivider }),
                (0, i.jsx)(d.Z, {
                  children: (0, i.jsxs)(d.Z, {
                    direction: d.Z.Direction.VERTICAL,
                    children: [
                      (0, i.jsxs)(d.Z, {
                        children: [
                          (0, i.jsx)(d.Z.Child, {
                            basis: "50%",
                            children: (0, i.jsx)(r.FormItem, {
                              title: p.intl.string(p.t.I1o5gY),
                              children: (0, i.jsx)(r.TextInput, {
                                value: t.name,
                                onChange: (e) => {
                                  o.Z.updateWebhook({ name: e });
                                },
                                maxLength: 80,
                                error: b.name,
                              }),
                            }),
                          }),
                          (0, i.jsx)(d.Z.Child, {
                            basis: "50%",
                            children: (0, i.jsx)(r.FormItem, {
                              title: p.intl.string(p.t["4TuWfX"]),
                              children: (0, i.jsx)(r.SingleSelect, {
                                value: t.channel_id,
                                options: f,
                                onChange: (e) => {
                                  o.Z.updateWebhook({ channelId: e });
                                },
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)(r.FormDivider, { className: g.bottomDivider }),
                      (0, i.jsx)(d.Z, {
                        children: (0, i.jsx)(r.Button, {
                          onClick: I,
                          size: r.Button.Sizes.SMALL,
                          color: r.Button.Colors.RED,
                          look: r.Button.Looks.LINK,
                          className: g.removeButton,
                          children: p.intl.string(p.t.CMy0Cg),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })),
          (0, i.jsx)(r.Card, {
            editable: !0,
            className: g.card,
            children: (0, i.jsxs)(d.Z, {
              direction: d.Z.Direction.VERTICAL,
              children: [
                (0, i.jsx)(r.Clickable, {
                  className: g.header,
                  "aria-expanded": x,
                  onClick: v,
                  children: (0, i.jsxs)(d.Z, {
                    align: d.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)(m.Z, {
                        name: n.name,
                        imageSrc: C,
                        detailsClassName: g.__invalid_description,
                        details: N,
                      }),
                      (0, i.jsx)(c.Z, {
                        className: g.expandIcon,
                        expanded: x,
                        "aria-hidden": !0,
                      }),
                    ],
                  }),
                }),
                T,
              ],
            }),
          })
        );
      }
    },
    585835: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      }),
        t(653041),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(243814),
        s = t(442837),
        d = t(481060),
        c = t(367907),
        u = t(213459),
        m = t(600164),
        h = t(488915),
        p = t(970731),
        g = t(598077),
        f = t(626135),
        x = t(486199),
        b = t(929507),
        v = t(981631),
        C = t(388032),
        I = t(556208);
      function N(e) {
        var n, t, r, N, T, _, j;
        let {
            name: S,
            icon: E,
            imageSrc: Z,
            iconBackgroundColor: A,
            iconClassName: y,
            iconWrapperClassName: R,
            details: O,
            integration: L,
            buttonText: k,
            buttonDisabled: w,
            hasNextSection: M,
            onButtonClick: B,
            guildId: P,
            isScrolling: D,
            canShowMigrationTooltip: U,
            trailing: G,
          } = e,
          [F, H] = l.useState(!1),
          [W, z] = l.useState(!1);
        let V =
            ((N = k),
            (T = w),
            (_ = M),
            (j = B),
            null == N || null == j
              ? null
              : _
                ? (0, i.jsxs)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children: N,
                      }),
                      _
                        ? (0, i.jsx)(d.ChevronSmallRightIcon, {
                            size: "custom",
                            color: "currentColor",
                            width: 10,
                            height: 10,
                            className: I.caret,
                          })
                        : null,
                    ],
                  })
                : (0, i.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    look: _ ? d.Button.Looks.LINK : d.Button.Looks.FILLED,
                    color: _ ? d.Button.Colors.PRIMARY : d.Button.Colors.BRAND,
                    disabled: T,
                    onClick: j,
                    children: N,
                  })),
          K = U && !D && !W && void 0 !== P && null != L;
        l.useEffect(() => {
          K &&
            f.default.track(v.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
              ...(0, c.hH)(P),
              application_id: null == L ? void 0 : L.application.id,
              location: "overview",
            });
        }, [P, null == L ? void 0 : L.application.id, K]);
        let q = K
            ? (0, i.jsx)(d.Popout, {
                renderPopout: () =>
                  (0, i.jsx)(d.Clickable, {
                    onClick: (e) => {
                      e.stopPropagation(),
                        z(!0),
                        b.Z.dismissOverviewTooltip(P, L.integration);
                    },
                    children: (0, i.jsx)(p.ZP, {
                      content: C.intl.string(C.t.TyMJwM),
                      onClick: () => {},
                    }),
                  }),
                position: "bottom",
                align: "center",
                animation: d.Popout.Animation.TRANSLATE,
                shouldShow: !0,
                children: () => V,
              })
            : V,
          Y = (0, s.Wu)([h.Z], () => {
            var e;
            return null != L &&
              null != P &&
              null !==
                (e = h.Z.getApplicationEntitlementsForGuild(
                  L.application.id,
                  P,
                )) &&
              void 0 !== e
              ? e
              : [];
          }),
          J = (0, u.LD)(P, !0),
          Q =
            (null == L ? void 0 : L.application) != null &&
            Object.keys(
              null !==
                (r =
                  null === (t = J.result) || void 0 === t
                    ? void 0
                    : null === (n = t.sections[L.application.id]) ||
                        void 0 === n
                      ? void 0
                      : n.commands) && void 0 !== r
                ? r
                : {},
            ).length > 0,
          X = (0, i.jsxs)(m.Z, {
            children: [
              (0, i.jsx)(x.Z, {
                name: S,
                icon: E,
                imageSrc: Z,
                iconBackgroundColor: A,
                iconClassName: y,
                iconWrapperClassName: R,
                details: O,
                isPremium: Y.length > 0,
              }),
              (0, i.jsx)(m.Z.Child, {
                shrink: 0,
                grow: 0,
                children: (0, i.jsxs)(m.Z, {
                  align: m.Z.Align.CENTER,
                  justify: m.Z.Justify.END,
                  children: [
                    (function (e, n, t) {
                      var l;
                      if (null == e) return null;
                      let r = [],
                        { application: a, integration: s, webhooks: c } = e;
                      return (
                        null != a.bot &&
                          r.push(
                            (0, i.jsx)(
                              d.TooltipContainer,
                              {
                                forceOpen: n,
                                text: new g.Z(a.bot).isVerifiedBot()
                                  ? C.intl.string(C.t.xxcTGx)
                                  : C.intl.string(C.t.AOdOYm),
                                className: I.feature,
                                children: (0, i.jsx)(d.RobotIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: I.featureIcon,
                                }),
                              },
                              "bot",
                            ),
                          ),
                        c.length > 0 &&
                          r.push(
                            (0, i.jsx)(
                              d.TooltipContainer,
                              {
                                forceOpen: n,
                                text: C.intl.formatToPlainString(
                                  C.t["6HqDfX"],
                                  { count: c.length },
                                ),
                                className: I.feature,
                                children: (0, i.jsx)(d.WebhookIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: I.featureIcon,
                                }),
                              },
                              "webhooks",
                            ),
                          ),
                        (null == s
                          ? void 0
                          : null === (l = s.scopes) || void 0 === l
                            ? void 0
                            : l.includes(o.x.APPLICATIONS_COMMANDS)) === !0 &&
                          t &&
                          r.push(
                            (0, i.jsx)(
                              "div",
                              {
                                className: I.feature,
                                children: (0, i.jsx)(d.SlashBoxIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: I.featureIcon,
                                }),
                              },
                              "commands",
                            ),
                          ),
                        r
                      );
                    })(L, F, Q),
                    q,
                    G,
                  ],
                }),
              }),
            ],
          });
        return M
          ? (0, i.jsx)(d.Clickable, {
              onClick: () => {
                U &&
                  null != P &&
                  null != L &&
                  b.Z.dismissOverviewTooltip(P, L.integration),
                  null == B || B();
              },
              onFocus: () => H(!0),
              onBlur: () => H(!1),
              children: (0, i.jsx)(d.Card, {
                editable: !0,
                className: a()(I.card, I.clickable),
                children: X,
              }),
            })
          : (0, i.jsx)(d.Card, {
              editable: !0,
              className: I.card,
              children: X,
            });
      }
    },
    936726: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      }),
        t(47120),
        t(653041);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(544891),
        s = t(846519),
        d = t(481060),
        c = t(668781),
        u = t(139387),
        m = t(308063),
        h = t(600164),
        p = t(208567),
        g = t(598077),
        f = t(259580),
        x = t(768581),
        b = t(572004),
        v = t(709054),
        C = t(51144),
        I = t(486199),
        N = t(981631),
        T = t(388032),
        _ = t(230685);
      let j = (e) => {
        if (null == e) return null;
        let n = new g.Z(e);
        return C.ZP.getUserTag(n);
      };
      function S(e, n) {
        return null != n && /^data:/.test(n)
          ? n
          : (0, x.ov)({ id: e.id, avatar: n, discriminator: N.fo$ });
      }
      function E(e) {
        let {
            id: n,
            webhook: t,
            editedWebhook: r,
            channelOptions: g,
            isExpanded: x,
            isNew: C,
            errors: E,
            onToggleExpand: Z,
          } = e,
          [A, y] = l.useState(!1),
          [R] = l.useState(new s.V7());
        l.useEffect(() => () => R.stop(), [R]);
        let O = l.useMemo(() => S(t, t.avatar), [t]),
          L = l.useCallback(() => {
            let e = ""
              .concat((0, o.K0)(!1))
              .concat(N.ANM.WEBHOOK_INTEGRATION(t.id, t.token));
            (0, b.JG)(e);
          }, [t]),
          k = l.useCallback(() => {
            (0, d.openModal)((e) =>
              (0, i.jsx)(d.ConfirmModal, {
                ...e,
                header: T.intl.formatToPlainString(T.t.QVFjHh, {
                  name: t.name,
                }),
                confirmText: T.intl.string(T.t["W+K1Fh"]),
                cancelText: T.intl.string(T.t.xNhj0N),
                onConfirm: () => {
                  m.Z.delete(t.guild_id, t.id).catch((e) => {
                    let { status: n } = e;
                    429 === n
                      ? c.Z.show({
                          title: T.intl.string(T.t.N5riYm),
                          body: T.intl.string(T.t.eAxcCQ),
                        })
                      : c.Z.show({
                          title: T.intl.string(T.t.N5riYm),
                          body: T.intl.string(T.t["/4TwKS"]),
                        });
                  });
                },
                children: (0, i.jsx)(d.Text, {
                  variant: "text-md/normal",
                  children: T.intl.format(T.t["rIWe+/"], { name: t.name }),
                }),
              }),
            );
          }, [t.guild_id, t.id, t.name]),
          w = [];
        null != t.user
          ? w.push({
              icon: d.ClockIcon,
              text: T.intl.formatToPlainString(T.t["7EcUbm"], {
                user: j(t.user),
                timestamp: v.default.extractTimestamp(t.id),
              }),
            })
          : w.push({
              icon: d.ClockIcon,
              text: T.intl.formatToPlainString(T.t["7mv59P"], {
                timestamp: v.default.extractTimestamp(t.id),
              }),
            });
        let M = null;
        return (
          x &&
            null != r &&
            (M = (0, i.jsxs)("div", {
              className: _.body,
              children: [
                (0, i.jsx)(d.FormDivider, { className: _.topDivider }),
                (0, i.jsxs)(h.Z, {
                  children: [
                    (0, i.jsx)(h.Z.Child, {
                      shrink: 1,
                      grow: 0,
                      children: (0, i.jsxs)(h.Z, {
                        className: _.avatarWrapper,
                        direction: h.Z.Direction.VERTICAL,
                        children: [
                          (0, i.jsx)(p.Z, {
                            image: r.avatar,
                            onChange: (e) => {
                              u.Z.updateWebhook({ avatar: e });
                            },
                            makeURL: (e) => S(t, e),
                            imageClassName: _.avatarUploaderInner,
                            showIcon: !0,
                          }),
                          null != E.avatar && "" !== E.avatar
                            ? (0, i.jsx)(d.Text, {
                                color: "text-danger",
                                variant: "text-sm/normal",
                                children: E.avatar,
                              })
                            : null,
                        ],
                      }),
                    }),
                    (0, i.jsxs)(h.Z, {
                      direction: h.Z.Direction.VERTICAL,
                      children: [
                        (0, i.jsxs)(h.Z, {
                          children: [
                            (0, i.jsx)(h.Z.Child, {
                              basis: "50%",
                              children: (0, i.jsx)(d.FormItem, {
                                title: T.intl.string(T.t.ukdxur),
                                children: (0, i.jsx)(d.TextInput, {
                                  value: r.name,
                                  onChange: (e) => {
                                    u.Z.updateWebhook({ name: e });
                                  },
                                  maxLength: 80,
                                  error: E.name,
                                }),
                              }),
                            }),
                            (0, i.jsx)(h.Z.Child, {
                              basis: "50%",
                              children: (0, i.jsx)(d.FormItem, {
                                title: T.intl.string(T.t.GK18KC),
                                children: (0, i.jsx)(d.SearchableSelect, {
                                  value: r.channel_id,
                                  options: g,
                                  onChange: (e) => {
                                    u.Z.updateWebhook({ channelId: e });
                                  },
                                  placeholder: T.intl.string(T.t.r2pts7),
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(d.FormDivider, {
                          className: _.bottomDivider,
                        }),
                        (0, i.jsxs)(h.Z, {
                          children: [
                            (0, i.jsx)(d.Tooltip, {
                              text: T.intl.string(T.t.wwdb3t),
                              forceOpen: A,
                              color: d.TooltipColors.GREEN,
                              disableTooltipPointerEvents: !0,
                              children: (e) => {
                                let {
                                  onClick: n,
                                  onMouseEnter: l,
                                  onMouseLeave: r,
                                  onBlur: a,
                                  onFocus: o,
                                  ...s
                                } = e;
                                return (0, i.jsx)(d.Button, {
                                  ...s,
                                  "aria-label": "",
                                  onClick: () => {
                                    null == n || n(),
                                      y(!0),
                                      d.AccessibilityAnnouncer.announce(
                                        T.intl.string(T.t.wwdb3t),
                                      ),
                                      R.start(1e3, () => y(!1)),
                                      L();
                                  },
                                  size: d.Button.Sizes.SMALL,
                                  color: d.Button.Colors.PRIMARY,
                                  look: d.Button.Looks.FILLED,
                                  className: _.copyButton,
                                  disabled: null == t.token || "" === t.token,
                                  children: T.intl.string(T.t.Ae9rUV),
                                });
                              },
                            }),
                            (0, i.jsx)(d.Button, {
                              onClick: k,
                              size: d.Button.Sizes.SMALL,
                              color: d.Button.Colors.RED,
                              look: d.Button.Looks.LINK,
                              children: T.intl.string(T.t.jVrUnJ),
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
            className: a()(_.card, C ? _.pulse : null),
            children: (0, i.jsxs)(h.Z, {
              direction: h.Z.Direction.VERTICAL,
              children: [
                (0, i.jsx)(d.Clickable, {
                  className: _.header,
                  "aria-expanded": x,
                  onClick: Z,
                  children: (0, i.jsxs)(h.Z, {
                    align: h.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)(I.Z, {
                        name: t.name,
                        imageSrc: O,
                        details: w,
                      }),
                      (0, i.jsx)(f.Z, {
                        className: _.expandIcon,
                        expanded: x,
                        "aria-hidden": !0,
                      }),
                    ],
                  }),
                }),
                M,
              ],
            }),
          })
        );
      }
    },
    725875: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      }),
        t(653041),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(481060),
        a = t(139387),
        o = t(933557),
        s = t(699516),
        d = t(594174),
        c = t(491302),
        u = t(936726),
        m = t(981631),
        h = t(388032),
        p = t(672994);
      function g(e) {
        let {
            webhooks: n,
            selectableWebhookChannels: t,
            lastCreatedWebhookId: g,
            editedWebhook: f,
            errors: x,
            canNavigate: b,
          } = e,
          v = l.useMemo(
            () =>
              Object.values(t).map((e) => ({
                value: e.id,
                label: (0, o.F6)(e, d.default, s.Z, !0),
              })),
            [t],
          ),
          C = l.useMemo(() => {
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
          I = l.useCallback(
            (e) => {
              b() &&
                (e === (null == f ? void 0 : f.id)
                  ? a.Z.stopEditingWebhook()
                  : a.Z.startEditingWebhook(e));
            },
            [b, f],
          );
        return (0, i.jsx)("div", {
          className: p.__invalid_list,
          children: C.map((e) => {
            let { channel: n, webhooks: t } = e;
            return (function (e) {
              let {
                channel: n,
                webhooks: t,
                channelOptions: l,
                lastCreatedWebhookId: a,
                editedWebhook: g,
                errors: f,
                toggleWebhookExpand: x,
              } = e;
              return (0, i.jsxs)(
                "div",
                {
                  children: [
                    (0, i.jsx)(r.FormTitle, {
                      className: p.groupHeader,
                      children: h.intl.format(h.t.TKDIZm, {
                        channelHook: () =>
                          (0, i.jsx)(
                            "span",
                            {
                              className: p.channelName,
                              children: (0, o.F6)(n, d.default, s.Z, !0),
                            },
                            n.id,
                          ),
                      }),
                    }),
                    t.map((e) => {
                      var n;
                      if (e.type === m.ylB.CHANNEL_FOLLOWER)
                        return (0, i.jsx)(
                          c.Z,
                          {
                            webhook: e,
                            editedWebhook: g,
                            channelOptions: l,
                            isExpanded: (null == g ? void 0 : g.id) === e.id,
                            onToggleExpand: () => x(e.id),
                            errors: f,
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
                          editedWebhook: g,
                          channelOptions: l,
                          isExpanded: (null == g ? void 0 : g.id) === e.id,
                          isNew: a === e.id,
                          onToggleExpand: () => x(e.id),
                          errors: f,
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
              channelOptions: v,
              lastCreatedWebhookId: g,
              editedWebhook: f,
              errors: x,
              toggleWebhookExpand: I,
            });
          }),
        });
      }
    },
    685929: function (e, n, t) {
      t.d(n, {
        C: function () {
          return a;
        },
        Y: function () {
          return o;
        },
      });
      var i = t(442837),
        l = t(496675),
        r = t(981631);
      function a(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z;
        return (
          null != e &&
          null != e.linkedLobby &&
          n.can(r.Plq.MANAGE_CHANNELS, e) &&
          n.can(r.Plq.VIEW_CHANNEL, e) &&
          n.can(r.Plq.SEND_MESSAGES, e)
        );
      }
      function o(e) {
        return (0, i.e7)([l.Z], () => a(e, l.Z));
      }
    },
    163400: function (e, n, t) {
      t.d(n, {
        F: function () {
          return s;
        },
        p: function () {
          return o;
        },
      });
      var i = t(442837),
        l = t(984933),
        r = t(496675),
        a = t(685929);
      function o(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : l.ZP,
          t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : r.Z;
        return null == e
          ? []
          : n
              .getChannels(e)
              [l.sH].filter((e) => (0, a.C)(e.channel, t))
              .map((e) => e.channel);
      }
      function s(e) {
        return (0, i.Wu)([r.Z, l.ZP], () => o(e, l.ZP, r.Z));
      }
    },
    296023: function (e, n, t) {
      t.d(n, {
        w: function () {
          return o;
        },
      });
      var i = t(192379),
        l = t(442837),
        r = t(594174),
        a = t(388032);
      function o(e) {
        var n;
        let t =
            null === (n = e.linkedLobby) || void 0 === n ? void 0 : n.linked_at,
          o = (0, l.e7)([r.default], () => {
            var n;
            return r.default.getUser(
              null === (n = e.linkedLobby) || void 0 === n
                ? void 0
                : n.linked_by,
            );
          });
        return i.useMemo(() => {
          if (null == t) return;
          let e = new Date(t);
          return null != o
            ? a.intl.format(a.t["/ZBO3d"], {
                username: o.username,
                linkedAtDate: e,
              })
            : a.intl.formatToPlainString(a.t.v6plRE, { linkedAtDate: e });
        }, [t, o]);
      }
    },
    453628: function (e, n, t) {
      t.d(n, {
        y: function () {
          return l;
        },
      });
      var i,
        l,
        r = t(200651);
      t(192379);
      var a = t(120356),
        o = t.n(a),
        s = t(481060),
        d = t(388032),
        c = t(228020);
      ((i = l || (l = {})).DENY = "DENY"),
        (i.PASSTHROUGH = "PASSTHROUGH"),
        (i.ALLOW = "ALLOW");
      let u = Object.keys(l);
      function m(e) {
        let {
            value: n = "PASSTHROUGH",
            onChange: t,
            labelledBy: i,
            disabled: l = !1,
          } = e,
          a = (0, s.useRadioGroup)({
            orientation: "horizontal",
            isDisabled: l,
            labelledBy: i,
          });
        return (0, r.jsx)("div", {
          className: o()(c.group, { [c.disabled]: l }),
          ...a,
          children: u.map((e) =>
            (0, r.jsx)(
              h,
              {
                type: e,
                isSelected: n === e,
                onSelect: (e) => {
                  n !== e && !l && t(e);
                },
              },
              e,
            ),
          ),
        });
      }
      function h(e) {
        let n,
          t,
          i,
          { type: l, onSelect: a, isSelected: u } = e;
        switch (l) {
          case "DENY":
            (i = d.intl.string(d.t["6639Oz"])),
              (n = s.XSmallIcon),
              (t = c.deny);
            break;
          case "ALLOW":
            (i = d.intl.string(d.t.RzDfSk)),
              (n = s.CheckmarkLargeIcon),
              (t = c.allow);
            break;
          default:
            (i = d.intl.string(d.t.ujC3ZW)),
              (n = s.SlashIcon),
              (t = c.passthrough);
        }
        let m = (0, s.useRadioItem)({ isSelected: u, label: i });
        return (0, r.jsx)(s.Clickable, {
          className: o()(c.item, t, { [c.selected]: u }),
          onClick: () => a(l),
          ...m,
          children: (0, r.jsx)(n, { color: "currentColor", size: "xs" }),
        });
      }
      (m.Types = l), (n.Z = m);
    },
    996987: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(600164),
        a = t(313201),
        o = t(63063),
        s = t(453628),
        d = t(388032),
        c = t(113207);
      function u(e) {
        let {
            value: n,
            onChange: t,
            children: u,
            note: m,
            helpdeskArticleId: h,
            style: p,
            disabled: g = !1,
            hideBorder: f = !1,
            className: x = c.marginBottom20,
          } = e,
          b = (0, a.Dt)();
        return (0, i.jsxs)(r.Z, {
          style: p,
          className: x,
          direction: r.Z.Direction.VERTICAL,
          children: [
            (0, i.jsxs)(r.Z, {
              children: [
                (0, i.jsx)(r.Z.Child, {
                  children: (0, i.jsx)(l.FormTitle, {
                    id: b,
                    className: c.marginReset,
                    tag: l.FormTitleTags.H3,
                    disabled: g,
                    children: u,
                  }),
                }),
                (0, i.jsx)(r.Z.Child, {
                  grow: 0,
                  shrink: 0,
                  children: (0, i.jsx)(s.Z, {
                    value: n,
                    onChange: t,
                    disabled: g,
                    labelledBy: b,
                  }),
                }),
              ],
            }),
            null != m &&
              (0, i.jsx)(r.Z.Child, {
                className: c.marginTop4,
                children: (0, i.jsx)(l.FormText, {
                  type: l.FormTextTypes.DESCRIPTION,
                  children: m,
                }),
              }),
            null != h &&
              (0, i.jsx)(r.Z.Child, {
                className: c.marginTop4,
                children: (0, i.jsx)(l.FormText, {
                  disabled: g,
                  type: l.FormTextTypes.DESCRIPTION,
                  children: (0, i.jsx)(l.Anchor, {
                    href: o.Z.getArticleURL(h),
                    children: d.intl.string(d.t.hvVgAQ),
                  }),
                }),
              }),
            !f &&
              (0, i.jsx)(r.Z.Child, {
                className: c.marginTop20,
                children: (0, i.jsx)(l.FormDivider, {}),
              }),
          ],
        });
      }
      s.Z.Types, (u.Types = s.Z.Types);
    },
    531087: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        a = t(325767),
        o = t(373963);
      function s(e) {
        let {
          width: n = 16,
          height: t = 16,
          color: l = "currentColor",
          foreground: s,
          className: d,
          ...c
        } = e;
        return (0, i.jsx)("svg", {
          className: r()(o.updateAvailable, d),
          ...(0, a.Z)(c),
          width: n,
          height: t,
          viewBox: "0 0 24 24",
          children: (0, i.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [
              (0, i.jsx)("path", {
                fill: l,
                className: s,
                fillRule: "nonzero",
                d: "M5,8 L9,12 L6,12 C6,15.31 8.69,18 12,18 C13.01,18 13.97,17.75 14.8,17.3 L16.26,18.76 C15.03,19.54 13.57,20 12,20 C7.58,20 4,16.42 4,12 L1,12 L5,8 Z M18,12 C18,8.69 15.31,6 12,6 C10.99,6 10.03,6.25 9.2,6.7 L7.74,5.24 C8.97,4.46 10.43,4 12,4 C16.42,4 20,7.58 20,12 L23,12 L19,16 L15,12 L18,12 Z",
              }),
              (0, i.jsx)("polygon", { points: "24 0 0 0 0 24 24 24" }),
            ],
          }),
        });
      }
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
//# sourceMappingURL=b4c1913942633d0889a5.js.map
