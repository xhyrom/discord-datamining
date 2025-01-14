"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16806"],
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
    144991: function (e, t, n) {
      n(411104);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(149765),
        s = n(481060),
        d = n(208884),
        c = n(453628),
        u = n(996987),
        m = n(226701),
        h = n(232186);
      class p extends l.PureComponent {
        getOverwriteValue(e) {
          let { allow: t, deny: n } = this.props;
          if (null == t || null == n)
            throw Error(
              "PermissionsForm.getOverwriteValue: Invalid allow or deny props",
            );
          return o.e$(t, e)
            ? c.y.ALLOW
            : o.e$(n, e)
              ? c.y.DENY
              : c.y.PASSTHROUGH;
        }
        getPermissionValue(e, t) {
          return o.e$(t, e);
        }
        handleChange(e, t) {
          let { onChange: n } = this.props;
          n(e, t);
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
          let { title: t, description: n, helpdeskArticleId: l, flag: r } = e,
            { permissions: o, locked: c, permissionRender: h } = this.props,
            p = null == h ? void 0 : h(r),
            g = !!(c || p),
            x = "string" == typeof p ? this.renderDisabledIndicator(p) : null,
            f = a()({ [m.title]: null != x });
          return null == o
            ? (0, i.jsxs)(
                u.Z,
                {
                  disabled: g,
                  value: this.getOverwriteValue(r),
                  onChange: (e) => this.handleChange(r, e),
                  note: (0, d._u)(n),
                  helpdeskArticleId: l,
                  children: [
                    x,
                    (0, i.jsx)("span", { className: f, children: t }),
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
                  note: (0, d._u)(n),
                  children: [
                    x,
                    (0, i.jsx)("span", { className: f, children: t }),
                  ],
                },
                String(r),
              );
        }
        render() {
          let { spec: e, className: t } = this.props;
          return (0, i.jsx)(s.FormSection, {
            className: t,
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
      t.Z = p;
    },
    228643: function (e, t, n) {
      n.d(t, {
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
      var i = n(544891),
        l = n(570140),
        r = n(480608),
        a = n(981631);
      function o(e, t) {
        i.tn
          .get({
            url: a.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
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
              l.Z.dispatch({
                type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                roleId: t,
                roleConnectionConfigurations: n,
              });
          })
          .catch(() => {});
      }
      async function s(e, t, n) {
        let o = n.map((e) =>
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
              url: a.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
              body: 0 === o.length ? [] : o,
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
          d = await (0, r.H)(e, t, !1);
        null != d &&
          l.Z.dispatch({
            type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
            guildId: e,
            roleId: t,
            count: d,
          }),
          l.Z.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: t,
            roleConnectionConfigurations: s,
          });
      }
      async function d() {
        return (
          await i.tn.get({
            url: a.ANM.APPLICATION_USER_ROLE_CONNECTIONS,
            rejectWithError: !1,
          })
        ).body;
      }
    },
    325476: function (e, t, n) {
      var i,
        l,
        r = n(200651),
        a = n(192379),
        o = n(120356),
        s = n.n(o),
        d = n(481060),
        c = n(600164),
        u = n(609010);
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class h extends (i = a.PureComponent) {
        render() {
          let { scrollable: e, ...t } = this.props;
          return e
            ? (0, r.jsx)("aside", {
                className: u.sidebarScrollable,
                children: (0, r.jsx)(d.Scroller, {
                  fade: !0,
                  className: u.scroller,
                  children: (0, r.jsx)(c.Z.Child, { ...t, wrap: !0 }),
                }),
              })
            : (0, r.jsx)(c.Z.Child, { ...t, wrap: !0 });
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
          let { className: e, ...t } = this.props;
          return (0, r.jsx)(c.Z.Child, {
            className: s()(u.content, e),
            wrap: !0,
            ...t,
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
        (t.ZP = g);
    },
    603211: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(999153),
        r = n(584922);
      function a(e) {
        let {
            type: t,
            index: n,
            optionId: a,
            onDragStart: o,
            onDragComplete: s,
            onDragReset: d,
          } = e,
          [c, u] = i.useState(!1),
          [, m] = (0, l.c)({
            type: t,
            item: () => (o(a), { id: a, position: n }),
            canDrag: () => c,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: (e, t) => {
              let n = t.getDropResult();
              if (null == n) {
                d();
                return;
              }
              s(n.optionId);
            },
          }),
          [{ dragSourcePosition: h }, p] = (0, r.L)({
            accept: t,
            canDrop: () => !0,
            collect: (e) => {
              let t = e.getItem();
              return null != t && e.isOver() && e.canDrop()
                ? { dragSourcePosition: t.position }
                : { dragSourcePosition: null };
            },
            drop: () => ({ optionId: a }),
          });
        return { drag: m, dragSourcePosition: h, drop: p, setIsDraggable: u };
      }
    },
    710344: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(47120);
      var i = n(192379);
      function l(e, t) {
        let [n, l] = i.useState(null),
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
                  let { id: t } = e;
                  return n === t;
                }),
                r = e.find((e) => {
                  let { id: t } = e;
                  return i === t;
                });
              if (null == l || null == r || l === r) return;
              let o = [...e],
                s = o.indexOf(l),
                d = o.indexOf(r),
                c = d - s > 0 ? 1 : 0;
              o.splice(s, 1), (d = o.indexOf(r)), o.splice(d + c, 0, l), t(o);
            },
            [e, n, a, t],
          );
        return {
          draggingId: n,
          handleDragStart: r,
          handleDragReset: a,
          handleDragComplete: o,
        };
      }
    },
    741247: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
          useHasGuildRoleItems: function () {
            return s;
          },
        });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(239091),
        a = n(241635),
        o = n(388032);
      function s(e, t) {
        return (0, a.Z)(e, t).length > 0;
      }
      function d(e) {
        let { role: t, guild: n, onSelect: s } = e,
          d = (0, a.Z)(n, t);
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
    241635: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(653041);
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        a = n(749210),
        o = n(240872),
        s = n(605436),
        d = n(228643),
        c = n(299206),
        u = n(496675),
        m = n(867108),
        h = n(388032);
      function p(e, t) {
        var n;
        let p = (0, l.e7)([u.Z], () => {
            let n = u.Z.getHighestRole(e);
            return !u.Z.isRoleHigher(e, n, t);
          }),
          g = [],
          x = (0, m.Z)(e, t);
        null != x && g.push(x);
        let f = (0, c.Z)({ id: t.id, label: h.intl.string(h.t.sMsaLi) });
        null != f && g.push(f);
        let b =
            (null === (n = t.tags) || void 0 === n
              ? void 0
              : n.guild_connections) === null,
          v = t.managed && !b,
          C = null != t && (0, s.pM)(e.id, t.id);
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
                        body: h.intl.format(h.t["9+nrUV"], { name: t.name }),
                        cancelText: h.intl.string(h.t["ETE/oK"]),
                        onConfirm: async () => {
                          b && (await (0, d.L_)(e.id, t.id, [])),
                            a.Z.deleteRole(e.id, t.id);
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
    867108: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        a = n(434404),
        o = n(962086),
        s = n(225675),
        d = n(496675),
        c = n(981631),
        u = n(388032);
      function m(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : c.pNK.ROLES;
        return (0, l.e7)([d.Z], () => d.Z.canImpersonateRole(e, t))
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
                      roles: { [t.id]: t },
                      returnToSection: n,
                    });
                },
              },
              "view-as-role",
            )
          : null;
      }
    },
    369994: function (e, t, n) {
      n.d(t, {
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
        n(47120);
      var i = n(913527),
        l = n.n(i),
        r = n(544891),
        a = n(367907),
        o = n(434404),
        s = n(430824),
        d = n(626135),
        c = n(981631);
      function u(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== t.length)
          d.default.track(c.rMx.GUILD_RAID_REPORTED, {
            ...(0, a.hH)(e),
            guild_id: e,
            raid_types: t,
          });
      }
      async function m(e, t) {
        let n = new Set(e.features);
        n.has(c.oNc.COMMUNITY)
          ? t
            ? n.delete(c.oNc.RAID_ALERTS_DISABLED)
            : n.add(c.oNc.RAID_ALERTS_DISABLED)
          : t
            ? n.add(c.oNc.NON_COMMUNITY_RAID_ALERTS)
            : n.delete(c.oNc.NON_COMMUNITY_RAID_ALERTS),
          await o.Z.saveGuild(e.id, { features: n }, { throwErr: !0 });
      }
      async function h(e, t, n, i) {
        let a = l()().add(i, "hours").toISOString();
        return await r.tn.put({
          url: c.ANM.GUILD_INCIDENT_ACTIONS(e),
          body: {
            invites_disabled_until: t ? a : null,
            dms_disabled_until: n ? a : null,
          },
          rejectWithError: !1,
        });
      }
      async function p(e, t, n) {
        let i = s.Z.getGuild(e);
        return null == (null == i ? void 0 : i.getSafetyAlertsChannelId())
          ? null
          : await r.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: t, reason: n },
              rejectWithError: !1,
            });
      }
      async function g(e) {
        let t = s.Z.getGuild(e);
        return null == (null == t ? void 0 : t.getSafetyAlertsChannelId())
          ? null
          : await r.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_RAID(e),
              rejectWithError: !1,
            });
      }
    },
    162157: function (e, t, n) {
      n.d(t, {
        BT: function () {
          return d;
        },
        N8: function () {
          return s;
        },
      });
      var i = n(442837);
      n(467319);
      var l = n(496675),
        r = n(533244),
        a = n(487419),
        o = n(981631);
      function s(e) {
        let t = (0, i.e7)(
            [l.Z],
            () =>
              (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : l.Z;
                return (
                  t.can(o.Plq.BAN_MEMBERS, e) ||
                  t.can(o.Plq.KICK_MEMBERS, e) ||
                  t.can(o.Plq.MANAGE_GUILD, e)
                );
              })(e, l.Z),
            [e],
          ),
          n = (0, i.e7)(
            [a.Z],
            () => (null != e ? a.Z.getGuildIncident(e.id) : null),
            [e],
          );
        return !(null != n && (0, r.i9)(n)) && t;
      }
      function d(e) {
        return (0, i.e7)(
          [l.Z],
          () =>
            (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : l.Z;
              return t.can(o.Plq.MANAGE_GUILD, e);
            })(e, l.Z),
          [e],
        );
      }
    },
    821312: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(831209),
        s = n(481060),
        d = n(367907),
        c = n(177862),
        u = n(981631),
        m = n(388032),
        h = n(506452);
      function p(e) {
        let { guildId: t, transitionState: n, onClose: r } = e,
          [p, g] = l.useState([]),
          [x, f] = l.useState(),
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
            ? g((t) => t.filter((t) => t !== e))
            : g((t) => [...t, e]);
        }
        return null == t
          ? (r(), null)
          : (0, i.jsxs)(s.ModalRoot, {
              transitionState: n,
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
                      let { text: t, value: n } = e;
                      return (0, i.jsxs)(
                        "div",
                        {
                          className: a()(h.optionContainer, {
                            [h.optionContainerOther]: n === c.C2.OTHER,
                          }),
                          children: [
                            (0, i.jsxs)(s.Clickable, {
                              className: h.optionText,
                              onClick: () => v(n),
                              children: [
                                (0, i.jsx)("div", {
                                  children: (0, i.jsx)(s.Checkbox, {
                                    type: s.Checkbox.Types.INVERTED,
                                    size: 20,
                                    value: p.includes(n),
                                    onChange: () => v(n),
                                  }),
                                }),
                                (0, i.jsx)(s.Text, {
                                  variant: "text-md/medium",
                                  color: p.includes(n)
                                    ? "interactive-active"
                                    : "interactive-normal",
                                  children: t,
                                }),
                              ],
                            }),
                            n === c.C2.OTHER &&
                              p.includes(c.C2.OTHER) &&
                              (0, i.jsx)("div", {
                                className: h.textboxContainer,
                                children: (0, i.jsx)(s.TextArea, {
                                  className: h.serverLockdownReasonText,
                                  placeholder: m.intl.string(m.t["PAM+JS"]),
                                  onChange: (e) => f(e),
                                  value: x,
                                  rows: 2,
                                  autoFocus: !0,
                                  flex: !0,
                                }),
                              }),
                          ],
                        },
                        n,
                      );
                    }),
                  }),
                }),
                (0, i.jsx)(s.ModalFooter, {
                  children: (0, i.jsx)(s.Button, {
                    onClick: function () {
                      (0, d.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                        raid_lockdown_feedback_type: p,
                        raid_lockdown_feedback_other_reason: x,
                        guild_id: t,
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
    664452: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(831209),
        a = n(442837),
        o = n(481060),
        s = n(688465),
        d = n(430824),
        c = n(626135),
        u = n(369994),
        m = n(162157),
        h = n(533244),
        p = n(487419),
        g = n(821312),
        x = n(676770),
        f = n(981631),
        b = n(388032),
        v = n(343854);
      function C(e) {
        let {
            guildId: t,
            transitionState: n,
            onClose: C,
            analyticsData: N,
          } = e,
          I = (0, a.e7)([d.Z], () => d.Z.getGuild(t), [t]),
          j = !!(null == I ? void 0 : I.hasFeature(f.oNc.INVITES_DISABLED)),
          [T] = l.useState(!1),
          [_, Z] = l.useState(x.Fl),
          E = (0, a.e7)([p.Z], () => p.Z.getGuildIncident(t)),
          S = (0, m.BT)(I),
          y = (0, h.SG)(E) || j,
          A = (0, h.sN)(E),
          [R, L] = l.useState(y),
          [k, O] = l.useState(A),
          [w, M] = l.useState(!1),
          B = R !== y || k !== A || w,
          P = j && !S;
        if (null == I) return C(), null;
        function D() {
          L((e) => !e);
        }
        return (0, i.jsxs)(o.ModalRoot, {
          transitionState: n,
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
                    options: (0, x.c1)(),
                    select: (e) => {
                      Z(e), M(!0);
                    },
                    isSelected: (e) => e === _,
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
                        shouldShow: j,
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
                          O((e) => !e);
                        },
                        checked: k,
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
                    (y || A) && !R && !k
                      ? ((0, u.n)(I.id, !1, !1),
                        (0, o.openModalLazy)(() =>
                          Promise.resolve((e) =>
                            (0, i.jsx)(g.Z, { ...e, guildId: t }),
                          ),
                        ))
                      : (0, u.n)(I.id, R, k, _);
                    let { source: e, alertType: n, messageId: l } = N;
                    c.default.track(
                      f.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE,
                      {
                        guild_id: t,
                        source: e,
                        raid_alert_id: l,
                        raid_alert_type: n,
                        intervention_type_enabled: (0, h.sO)(R, k),
                        intervention_type_disabled: (0, h.lk)(R, k),
                        duration: 60 * _,
                      },
                    ),
                      C();
                  },
                  color: o.Button.Colors.BRAND,
                  look: o.Button.Looks.FILLED,
                  submitting: T,
                  disabled: !B,
                  children: b.intl.string(b.t["pwm/z8"]),
                }),
                (0, i.jsx)(o.Button, {
                  onClick: C,
                  color: o.Button.Colors.PRIMARY,
                  look: o.Button.Looks.LINK,
                  disabled: T,
                  children: b.intl.string(b.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    282923: function (e, t, n) {
      n.d(t, {
        B: function () {
          return r;
        },
      }),
        n(653041),
        n(47120);
      var i = n(658722),
        l = n.n(i);
      function r(e, t, n) {
        if ("" === n) return e;
        let i = n.toLowerCase(),
          r = [];
        for (let a of e) {
          let { id: e, names: o } = t(a);
          if (e === n) return [a];
          o.some((e) => l()(i, e.toLowerCase())) && r.push(a);
        }
        return r;
      }
    },
    905753: function (e, t, n) {
      let i, l, r;
      n(47120);
      var a,
        o,
        s,
        d,
        c = n(442837),
        u = n(570140),
        m = n(581364),
        h = n(399860);
      let p = {},
        g = {},
        x = !1;
      function f() {
        (i = void 0), (p = {}), (g = {}), (l = void 0), (r = void 0), (x = !1);
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
          return x;
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
        (t.Z = new b(u.Z, {
          LOGOUT: f,
          INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE:
            function (e) {
              let { applicationId: t } = e;
              if (t !== i) return !1;
              x = !0;
            },
          INTEGRATION_PERMISSION_SETTINGS_CLEAR: f,
          INTEGRATION_PERMISSION_SETTINGS_INIT: function (e) {
            let { applicationId: t } = e;
            f(), (i = t);
          },
          INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function (e) {
            let { applicationId: t, commandId: n, permissions: l } = e;
            if (t !== i) return !1;
            if (n === i) {
              p = (0, h.tk)(l);
              return;
            }
            let r = g[n];
            if (null == r) return !1;
            g[n] = { ...r, permissions: (0, h.tk)(l) };
          },
          INTEGRATION_PERMISSION_SETTINGS_EDIT: function (e) {
            let { applicationId: t, commandId: n, permissions: a } = e;
            if (t !== i) return !1;
            n === i ? (l = a) : (r = { commandId: n, permissions: a });
          },
          INTEGRATION_PERMISSION_SETTINGS_RESET: function (e) {
            let { commandId: t } = e;
            null == t ? (l = void 0) : (r = void 0);
          },
          INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function (e) {
            let { applicationId: t } = e;
            if (t !== i) return !1;
            x = !0;
          },
          INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function (e) {
            let { applicationId: t, commands: n, permissions: l } = e;
            if (t !== i) return !1;
            let r = Object.fromEntries(l.map((e) => [e.id, e.permissions])),
              a = {};
            for (let e of n)
              if (e.application_id === i) {
                let t = (0, m.Z8)({
                    rootCommand: e,
                    command: e,
                    applicationId: e.application_id,
                  }),
                  n = r[e.id];
                null != n && (t.permissions = (0, h.tk)(n)), (a[e.id] = t);
              }
            g = a;
          },
        }));
    },
    937427: function (e, t, n) {
      n.d(t, {
        w: function () {
          return c;
        },
      }),
        n(47120),
        n(653041),
        n(733860);
      var i = n(192379),
        l = n(581364),
        r = n(984933),
        a = n(496675),
        o = n(282923),
        s = n(981631),
        d = n(388032);
      function c(e) {
        let t = i.useMemo(() => {
            let t = r.ZP.getChannels(e),
              n = [...t[r.sH]];
            n.push(...t[r.Zb].filter((e) => e.channel.isGuildVocal()));
            let i = n.map((e) => ({
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
          [n, c] = i.useState(""),
          m = i.useMemo(() => {
            let e = (function (e) {
              return e.startsWith("#") ? e.substr(1) : e;
            })(n);
            return (0, o.B)(t, u, e);
          }, [t, n]);
        return { query: n, results: m, setQuery: c, unfilteredCount: t.length };
      }
      function u(e) {
        return { id: e.id, names: [e.name] };
      }
    },
    932776: function (e, t, n) {
      n.d(t, {
        O: function () {
          return d;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(373793),
        r = n(442837),
        a = n(911969),
        o = n(282923),
        s = n(905753);
      function d() {
        let e = (0, r.cj)([s.Z], () => {
            var e;
            return Object.values(
              null !== (e = s.Z.getCommands()) && void 0 !== e ? e : {},
            );
          }),
          [t, n] = i.useState(""),
          d = i.useMemo(
            () =>
              e.filter((e) => {
                var t;
                return (
                  (null == e.integration_types ||
                    e.integration_types.includes(l.Y.GUILD_INSTALL)) &&
                  (null == e.contexts ||
                    (null === (t = e.contexts) || void 0 === t
                      ? void 0
                      : t.includes(a.D.GUILD)))
                );
              }),
            [e],
          ),
          u = i.useMemo(
            () =>
              [...d].sort((e, t) => {
                let n = a.yU.CHAT + 1,
                  i = t.type > n ? n : t.type,
                  l = i - (e.type > n ? n : e.type);
                return 0 !== l
                  ? l
                  : e.untranslatedName.localeCompare(t.untranslatedName);
              }),
            [d],
          ),
          m = i.useMemo(
            () =>
              t.startsWith("/") ? u.filter((e) => e.type === a.yU.CHAT) : u,
            [t, u],
          ),
          h = i.useMemo(() => (t.startsWith("/") ? t.substring(1) : t), [t]);
        return {
          query: t,
          results: i.useMemo(() => (0, o.B)(m, c, h), [m, h]),
          setQuery: n,
          unfilteredCount: e.length,
        };
      }
      function c(e) {
        return { id: e.id, names: [e.displayName] };
      }
    },
    643886: function (e, t, n) {
      n.d(t, {
        U: function () {
          return g;
        },
      }),
        n(653041),
        n(47120),
        n(733860);
      var i = n(192379),
        l = n(512722),
        r = n.n(l),
        a = n(149765),
        o = n(442837),
        s = n(271383),
        d = n(430824),
        c = n(496675),
        u = n(594174),
        m = n(700785),
        h = n(282923),
        p = n(981631);
      function g(e) {
        let t = (0, o.e7)([d.Z], () => d.Z.getGuild(e));
        r()(
          null != t,
          "guild must be present to be editing its integration settings",
        );
        let n = (0, o.e7)([c.Z], () => c.Z.getHighestRole(t)),
          l = (0, o.Wu)([s.ZP], () => s.ZP.getMembers(e), [e]),
          g = (0, o.cj)([u.default], () => u.default.getUsers()),
          b = (0, o.Wu)([d.Z], () => Object.values(d.Z.getRoles(e)), [e]),
          v = i.useMemo(() => {
            let e = [];
            for (let n of l) {
              let i = g[n.userId];
              if (null == i || i.bot) continue;
              let l =
                i.id !== t.ownerId &&
                !m.BT({
                  permission: p.Plq.ADMINISTRATOR,
                  user: i,
                  context: t,
                }) &&
                c.Z.canManageUser(p.Plq.USE_APPLICATION_COMMANDS, i, t);
              e.push({
                id: i.id,
                canManage: l,
                nick: n.nick,
                username: i.username,
              });
            }
            return e;
          }, [t, l, g]),
          C = (e) => {
            var t;
            return (
              e.managed &&
              (null === (t = e.tags) || void 0 === t ? void 0 : t.bot_id) !=
                null
            );
          },
          N = i.useMemo(() => {
            let i = [];
            for (let l of b) {
              if (C(l)) continue;
              let r =
                  !a.e$(l.permissions, p.Plq.ADMINISTRATOR) &&
                  c.Z.isRoleHigher(t, n, l),
                o = { id: l.id, name: l.name, canManage: r };
              l.id === e ? i.unshift(o) : i.push(o);
            }
            return i;
          }, [b, e, t, n]),
          [I, j] = i.useState(""),
          T = i.useMemo(() => {
            let t = (function (e) {
                return e.startsWith("@") ? e.substr(1) : e;
              })(I),
              n = I.startsWith("@") ? N.filter((t) => t.id === e) : N,
              i = (0, h.B)(v, x, t);
            return { members: i, roles: (0, h.B)(n, f, t) };
          }, [e, v, I, N]);
        return {
          query: I,
          results: T,
          setQuery: j,
          unfilteredCount: T.members.length + T.roles.length,
        };
      }
      function x(e) {
        let t = [e.username];
        return (
          (null == e ? void 0 : e.nick) != null && t.push(e.nick),
          { id: e.id, names: t }
        );
      }
      function f(e) {
        return { id: e.id, names: [e.name] };
      }
    },
    995390: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(653041),
        n(47120);
      var i = n(192379),
        l = n(512722),
        r = n.n(l),
        a = n(392711),
        o = n.n(a),
        s = n(442837),
        d = n(139387),
        c = n(895924),
        u = n(581364),
        m = n(592125),
        h = n(430824),
        p = n(496675),
        g = n(594174),
        x = n(823379),
        f = n(905753),
        b = n(399860),
        v = n(981631);
      function C(e, t, n) {
        let l = (0, s.e7)([f.Z], () => f.Z.getApplicationPermissions()),
          a = i.useMemo(
            () =>
              (function (e, t) {
                let n = { ...t },
                  i = (0, u.bD)(e),
                  l = (0, b.rE)(i, c.Kw.CHANNEL),
                  r = (0, b.rE)(e, c.Kw.ROLE);
                return (
                  !(r in n) &&
                    (n[r] = { id: e, permission: !0, type: c.Kw.ROLE }),
                  !(l in n) &&
                    (n[l] = { id: i, permission: !0, type: c.Kw.CHANNEL }),
                  n
                );
              })(e, null != l ? l : {}),
            [l, e],
          ),
          C = (0, s.e7)(
            [f.Z],
            () => {
              var e;
              if (null == n) return;
              let t = f.Z.getCommand(n);
              return null !== (e = null == t ? void 0 : t.permissions) &&
                void 0 !== e
                ? e
                : {};
            },
            [n],
          ),
          N = (0, s.e7)(
            [f.Z],
            () => {
              var e;
              return null == n
                ? f.Z.getEditedApplication()
                : null === (e = f.Z.getEditedCommand()) || void 0 === e
                  ? void 0
                  : e.permissions;
            },
            [n],
          ),
          I = null != n ? n : t,
          j = null != n ? C : a,
          T = i.useMemo(
            () => (null != N ? N : { ...(null != j ? j : {}) }),
            [N, j],
          ),
          _ = i.useMemo(() => Object.keys(T).length, [T]),
          Z = i.useMemo(
            () => (null == j || null == T ? null : !o().isEqual(j, T)),
            [j, T],
          );
        return (
          i.useEffect(() => {
            if (I === t)
              Z
                ? d.Z.startEditingCommandPermissions(I)
                : d.Z.stopEditingCommandPermissions(I);
          }, [t, Z, I]),
          {
            originalApplicationPermissions: a,
            originalCommandPermissions: C,
            editedTargetPermissions: (function (e, t) {
              let n = (0, s.e7)([h.Z], () => h.Z.getGuild(e), [e]);
              r()(
                null != n,
                "guild must be present to be editing its integration settings",
              );
              let l = (0, s.e7)([p.Z], () => p.Z.getHighestRole(n), [n]),
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
              let o = a === n.ownerId,
                {
                  channelIds: d,
                  roleIds: f,
                  userIds: b,
                } = i.useMemo(() => {
                  let e = [],
                    n = [],
                    i = [];
                  for (let l of Object.values(t))
                    l.type === c.Kw.CHANNEL
                      ? e.push(l.id)
                      : l.type === c.Kw.ROLE
                        ? n.push(l.id)
                        : l.type === c.Kw.USER && i.push(l.id);
                  return { channelIds: e, roleIds: n, userIds: i };
                }, [t]),
                C = (0, s.cj)(
                  [m.Z],
                  () =>
                    Object.fromEntries(
                      d
                        .map(m.Z.getChannel)
                        .filter(x.lm)
                        .map((e) => [e.id, e]),
                    ),
                  [d],
                ),
                N = (0, s.cj)(
                  [h.Z],
                  () =>
                    Object.fromEntries(
                      f
                        .map((t) => h.Z.getRole(e, t))
                        .filter(x.lm)
                        .map((e) => [e.id, e]),
                    ),
                  [f, e],
                ),
                I = (0, s.cj)(
                  [g.default],
                  () =>
                    Object.fromEntries(
                      b
                        .map(g.default.getUser)
                        .filter(x.lm)
                        .map((e) => [e.id, e]),
                    ),
                  [b],
                );
              return i.useMemo(() => {
                let e = n.id,
                  i = (0, u.bD)(n.id),
                  r = {};
                for (let [a, s] of Object.entries(t)) {
                  let t = !1,
                    d = !1;
                  if (s.type === c.Kw.CHANNEL) {
                    let e = s.id === i,
                      n = C[s.id];
                    (t = e || p.Z.can(v.Plq.VIEW_CHANNEL, n)), (d = !0);
                  } else if (s.type === c.Kw.ROLE) {
                    let i = s.id === e,
                      r = N[s.id];
                    (t = i || null != r),
                      (d = o || i || p.Z.isRoleHigher(n, l, r));
                  } else if (s.type === c.Kw.USER) {
                    let e = I[s.id];
                    (t = null != e),
                      (d =
                        null != e &&
                        (o ||
                          p.Z.canManageUser(
                            v.Plq.USE_APPLICATION_COMMANDS,
                            e,
                            n,
                          )));
                  }
                  r[a] = { ...s, canRead: t, canWrite: d };
                }
                return r;
              }, [C, n, l, o, t, N, I]);
            })(e, T),
            hasChanges: Z,
            selectedPermissionCount: _,
          }
        );
      }
    },
    680298: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(481060),
        a = n(239091),
        o = n(911969),
        s = n(399860),
        d = n(388032),
        c = n(19751);
      function u(e) {
        let {
            applicationIcon: t,
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
          x = l.useCallback(() => {
            null != h &&
              m() &&
              (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("78786").then(n.bind(n, 50474));
                return (n) =>
                  (0, i.jsx)(e, {
                    applicationIcon: t,
                    applicationId: h.applicationId,
                    applicationName: u,
                    command: h,
                    guildId: p,
                    ...n,
                  });
              });
          }, [t, u, m, h, p]),
          f = l.useCallback(
            (e) => {
              (0, a.jW)(e, async () => {
                let { default: e } = await n.e("5396").then(n.bind(n, 731646));
                return (t) =>
                  (0, i.jsx)(e, {
                    ...t,
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
          onClick: x,
          className: c.item,
          onContextMenu: f,
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
    469880: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(481060),
        a = n(932776),
        o = n(680298),
        s = n(289465),
        d = n(388032),
        c = n(352031);
      function u(e) {
        let {
            applicationIcon: t,
            applicationName: n,
            canNavigate: u,
            guildId: m,
          } = e,
          {
            results: h,
            query: p,
            setQuery: g,
            unfilteredCount: x,
          } = (0, a.O)(),
          f = null != h && x > 0;
        return (0, i.jsx)(l.Fragment, {
          children: f
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
                          applicationIcon: t,
                          applicationName: n,
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
    335049: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(512722),
        s = n.n(o),
        d = n(866442),
        c = n(442837),
        u = n(481060),
        m = n(239091),
        h = n(895924),
        p = n(581364),
        g = n(471445),
        x = n(91218),
        f = n(518738),
        b = n(592125),
        v = n(271383),
        C = n(430824),
        N = n(246946),
        I = n(594174),
        j = n(51144),
        T = n(981631),
        _ = n(388032),
        Z = n(316983);
      function E(e) {
        let { guild: t, id: r, type: a, isLocked: o, lockTooltipText: d } = e,
          c = !o || null != d;
        s()(c, "No lockTooltipText provided while isLocked=true");
        let u = l.useCallback(
          (e) => {
            (0, m.jW)(e, async () => {
              let { default: e } = await n.e("5396").then(n.bind(n, 731646));
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  id: r,
                  label: _.intl.string(_.t.oJ1Mu7),
                });
            });
          },
          [r],
        );
        switch (a) {
          case h.Kw.CHANNEL:
            return (0, i.jsx)(S, {
              guild: t,
              id: r,
              isLocked: o,
              lockTooltipText: d,
              openEntryContextMenu: u,
            });
          case h.Kw.ROLE:
            return (0, i.jsx)(y, {
              guild: t,
              id: r,
              isLocked: o,
              lockTooltipText: d,
              openEntryContextMenu: u,
            });
          case h.Kw.USER:
            return (0, i.jsx)(A, {
              guild: t,
              id: r,
              isLocked: o,
              lockTooltipText: d,
              openEntryContextMenu: u,
            });
        }
      }
      function S(e) {
        let {
            guild: t,
            id: n,
            isLocked: r,
            lockTooltipText: o,
            openEntryContextMenu: s,
          } = e,
          d = (0, p.bD)(t.id),
          {
            icon: m,
            name: h,
            categoryName: x,
          } = (0, c.cj)(
            [b.Z],
            () => {
              if (d === n)
                return { name: _.intl.string(_.t["7YqSGx"]), icon: u.TextIcon };
              let e = b.Z.getChannel(n),
                i =
                  (null == e ? void 0 : e.parent_id) != null
                    ? b.Z.getChannel(e.parent_id)
                    : null;
              return {
                icon: null != e ? (0, g.KS)(e, t) : null,
                name: null == e ? void 0 : e.name,
                categoryName: null == i ? void 0 : i.name,
              };
            },
            [d, t, n],
          ),
          f = l.useCallback(
            (e) => {
              n !== d && s(e);
            },
            [d, n, s],
          );
        return null == m || null == h
          ? null
          : (0, i.jsxs)("div", {
              onContextMenu: f,
              className: Z.identifier,
              children: [
                (0, i.jsx)(m, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: "currentColor",
                  className: a()(Z.channelIcon, Z.image),
                }),
                (0, i.jsx)(u.Text, {
                  className: Z.roleName,
                  color: "header-primary",
                  variant: "text-md/normal",
                  children: h,
                }),
                null != x
                  ? (0, i.jsxs)(u.Text, {
                      className: Z.tag,
                      variant: "text-sm/normal",
                      children: ["(", x, ")"],
                    })
                  : null,
                r ? (0, i.jsx)(R, { tooltipText: o }) : null,
              ],
            });
      }
      function y(e) {
        var t;
        let { guild: r, id: o, isLocked: s, lockTooltipText: h } = e,
          p = (0, c.e7)([C.Z], () => C.Z.getRole(r.id, o)),
          g = (0, f.p9)({ guildId: r.id, roleId: o, size: 24 }),
          b = l.useCallback(
            (e) => {
              if (null != r && null != p)
                (0, m.jW)(e, async () => {
                  let { default: e } = await n
                    .e("14486")
                    .then(n.bind(n, 786746));
                  return (t) => (0, i.jsx)(e, { ...t, guild: r, role: p });
                });
            },
            [r, p],
          );
        return (null == p ? void 0 : p.name) == null
          ? null
          : (0, i.jsxs)("div", {
              onContextMenu: b,
              className: Z.identifier,
              children: [
                null != g
                  ? (0, i.jsx)(x.Z, {
                      className: a()(Z.__invalid_icon, Z.image),
                      ...g,
                    })
                  : (0, i.jsx)(u.ShieldUserIcon, {
                      size: "custom",
                      width: 23,
                      height: 23,
                      className: a()(Z.shield, Z.image),
                      color:
                        null !== (t = p.colorString) && void 0 !== t
                          ? t
                          : (0, d.Rf)(T.p6O),
                    }),
                (0, i.jsx)(u.Text, {
                  className: Z.roleName,
                  color: "header-primary",
                  variant: "text-md/normal",
                  children: p.name,
                }),
                s ? (0, i.jsx)(R, { tooltipText: h }) : null,
              ],
            });
      }
      function A(e) {
        let {
            guild: t,
            id: n,
            isLocked: l,
            lockTooltipText: r,
            openEntryContextMenu: a,
          } = e,
          o = (0, c.e7)([I.default], () => I.default.getUser(n)),
          s = (0, c.e7)(
            [v.ZP],
            () => {
              var e;
              return null === (e = v.ZP.getMember(t.id, n)) || void 0 === e
                ? void 0
                : e.nick;
            },
            [t.id, n],
          ),
          d = (0, c.e7)([N.Z], () => N.Z.hidePersonalInformation);
        return null == o
          ? null
          : (0, i.jsxs)("div", {
              onContextMenu: a,
              className: Z.identifier,
              children: [
                (0, i.jsx)(u.Avatar, {
                  className: Z.image,
                  src: o.getAvatarURL(t.id, 24),
                  "aria-label": o.username,
                  size: u.AvatarSizes.SIZE_24,
                }),
                (0, i.jsx)(u.Text, {
                  className: Z.roleName,
                  color: "header-primary",
                  variant: "text-md/normal",
                  children: null != s ? s : o.username,
                }),
                d
                  ? null
                  : (0, i.jsx)(u.Text, {
                      className: Z.tag,
                      variant: "text-sm/normal",
                      children: j.ZP.getUserTag(o),
                    }),
                l ? (0, i.jsx)(R, { tooltipText: r }) : null,
              ],
            });
      }
      function R(e) {
        let { tooltipText: t } = e;
        return (0, i.jsx)(u.Tooltip, {
          text: t,
          children: (e) =>
            (0, i.jsx)("div", {
              className: Z.lockIcon,
              ...e,
              children: (0, i.jsx)(u.LockIcon, {
                size: "xs",
                color: "currentColor",
              }),
            }),
        });
      }
    },
    869157: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return L;
        },
      }),
        n(724458),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(512722),
        a = n.n(r),
        o = n(392711),
        s = n.n(o),
        d = n(442837),
        c = n(481060),
        u = n(749210),
        m = n(367907),
        h = n(895924),
        p = n(581364),
        g = n(929507),
        x = n(997787),
        f = n(970731),
        b = n(314897),
        v = n(430824),
        C = n(594174),
        N = n(626135),
        I = n(5192),
        j = n(709054),
        T = n(360606),
        _ = n(905753),
        Z = n(399860),
        E = n(335049),
        S = n(617012),
        y = n(981631),
        A = n(388032),
        R = n(334575);
      function L(e) {
        let {
            commandId: t,
            editPermissions: n,
            guildId: r,
            noneSelectedText: o,
            overwrites: m,
            hasAccessToMutatePermissions: g,
          } = e,
          f = (0, d.e7)([v.Z], () => v.Z.getGuild(r));
        a()(null != f, "");
        let b = (0, d.e7)([v.Z], () => v.Z.getRoles(r)),
          [N, E] = l.useState(new Set()),
          S = l.useMemo(() => {
            var e;
            let t = (0, p.bD)(r);
            let n =
              ((e = b),
              s()(e)
                .sortBy((e) => e.position)
                .reduce((e, t, n) => ((e[t.id] = n), e), {}));
            return Object.values(m)
              .filter((e) => e.canRead)
              .sort((e, i) => {
                let l = e.type - i.type;
                if (0 !== l) return l;
                switch (e.type) {
                  case h.Kw.USER:
                    return (function (e, t, n) {
                      let i = Number(e.canWrite) - Number(t.canWrite);
                      if (0 !== i) return i;
                      let l = C.default.getUser(e.id),
                        r = C.default.getUser(t.id);
                      if (null != l && null != r) {
                        let e = I.ZP.getName(n, void 0, l),
                          t = I.ZP.getName(n, void 0, r);
                        return null == e ? void 0 : e.localeCompare(t);
                      }
                      return j.default.compare(e.id, t.id);
                    })(e, i, r);
                  case h.Kw.ROLE:
                    return (function (e, t, n, i) {
                      if (e.id === n) return -1;
                      if (t.id === n) return 1;
                      let l = i[e.id];
                      return l > i[t.id] ? -1 : 1;
                    })(e, i, r, n);
                  case h.Kw.CHANNEL:
                    return (function (e, t, n) {
                      if (e.id === n) return -1;
                      if (t.id === n) return 1;
                      let i = Number(e.canWrite) - Number(t.canWrite);
                      return 0 !== i ? i : j.default.compare(e.id, t.id);
                    })(e, i, t);
                }
              });
          }, [r, m, b]),
          y = l.useCallback(
            (e, t) => {
              n({}, [(0, Z.rE)(e, t)]);
            },
            [n],
          ),
          A = l.useCallback(
            (e, t, i) => {
              let l = (0, Z.rE)(e, t);
              null != m[l] && n({ [l]: { id: e, permission: i, type: t } }, []);
            },
            [n, m],
          );
        l.useEffect(() => {
          let e = Object.values(m)
            .filter((e) => e.type === h.Kw.USER && !e.canRead && !N.has(e.id))
            .map((e) => e.id);
          if (0 !== e.length)
            u.Z.requestMembersById(r, e, !1), E((t) => new Set([...t, ...e]));
        }, [r, m, N, E]);
        let L = (0, d.e7)([_.Z], () => _.Z.getApplicationId()),
          O = (0, d.e7)([T.default], () =>
            null == L
              ? void 0
              : T.default.integrations.find((e) => {
                  var t;
                  return (
                    (null === (t = e.application) || void 0 === t
                      ? void 0
                      : t.id) === L
                  );
                }),
          ),
          w = (0, d.e7)(
            [x.Z],
            () => void 0 !== O && x.Z.canShowToggleTooltip(O.id),
          );
        return (0, i.jsx)(l.Fragment, {
          children:
            S.length > 0
              ? S.map((e) =>
                  (0, i.jsx)(
                    k,
                    {
                      guild: f,
                      commandId: t,
                      onChange: (t) => A(e.id, e.type, t),
                      onRemove: () => y(e.id, e.type),
                      overwrite: e,
                      integration: O,
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
      function k(e) {
        var t, n, r;
        let a,
          {
            guild: o,
            commandId: s,
            onChange: d,
            onRemove: u,
            overwrite: x,
            integration: v,
            canShowMigrationTooltip: C,
            hasAccessToMutatePermissions: I,
          } = e,
          j = x.id === o.id || x.id === (0, p.bD)(o.id),
          T =
            null == v
              ? void 0
              : null === (n = v.application) || void 0 === n
                ? void 0
                : null === (t = n.bot) || void 0 === t
                  ? void 0
                  : t.username,
          _ = !x.canWrite || !I,
          Z = b.default.getId();
        I
          ? !x.canWrite &&
            (x.type === h.Kw.USER
              ? (a =
                  x.id === Z
                    ? A.intl.string(A.t["1VF/09"])
                    : A.intl.string(A.t.P1GnER))
              : x.type === h.Kw.ROLE && (a = A.intl.string(A.t.mcAijY)))
          : (a =
              null != s
                ? A.intl.string(A.t.tybdam)
                : A.intl.string(A.t.z2hjk5));
        let L =
          C && null != v && x.id === o.id && void 0 !== T && !x.permission;
        l.useEffect(() => {
          if (L) {
            var e;
            N.default.track(y.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
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
          L,
        ]);
        let k = (0, i.jsx)(c.Tooltip, {
            tooltipClassName: R.tooltip,
            text: a,
            shouldShow: _,
            position: "left",
            hideOnClick: !1,
            children: (e) =>
              (0, i.jsx)("div", {
                ...e,
                children: (0, i.jsx)(S.Z, {
                  isDisabled: _,
                  currentValue: x.permission,
                  onChange: L
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
                children: (0, i.jsx)(f.ZP, {
                  className: R.tooltip,
                  content: A.intl.format(A.t.pW4Cr6, {
                    botName: T,
                    link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
                  }),
                  onClick: () => {},
                }),
              }),
            position: "bottom",
            align: "center",
            animation: c.Popout.Animation.TRANSLATE,
            onRequestClose: () => g.Z.dismissToggleTooltip(o.id, v),
            shouldShow: L,
            closeOnScroll: !0,
            children: () => k,
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
                  id: x.id,
                  type: x.type,
                  isLocked: _,
                  lockTooltipText: a,
                }),
              }),
              (0, i.jsxs)("div", {
                className: R.entryActions,
                children: [
                  (0, i.jsx)(O, {
                    commandId: s,
                    isSentinel: j,
                    isDisabled: !I,
                    onRemove: u,
                  }),
                  w,
                ],
              }),
            ],
          },
          x.id,
        );
      }
      function O(e) {
        let { commandId: t, isSentinel: n, isDisabled: l, onRemove: r } = e;
        return l
          ? null
          : null != t || !n
            ? (0, i.jsx)("div", {
                className: R.removeActions,
                children: (0, i.jsx)(c.Clickable, {
                  className: R.removeContainer,
                  "aria-label": A.intl.string(A.t.mT0CQE),
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
    665578: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(392711),
        a = n.n(r),
        o = n(149765),
        s = n(442837),
        d = n(481060),
        c = n(895924),
        u = n(581364),
        m = n(605436),
        h = n(271383),
        p = n(430824),
        g = n(496675),
        x = n(821864),
        f = n(905753),
        b = n(937427),
        v = n(643886),
        C = n(869157),
        N = n(454092),
        I = n(289465),
        j = n(981631),
        T = n(689079),
        _ = n(388032),
        Z = n(148048);
      function E(e) {
        let {
            applicationId: t,
            commandId: r,
            guildId: b,
            inModal: v,
            editedTargetPermissions: E,
            originalApplicationPermissions: A,
            originalCommandPermissions: R,
            selectedPermissionCount: L,
          } = e,
          k = (0, s.e7)([f.Z], () => (null == r ? null : f.Z.getCommand(r)), [
            r,
          ]),
          O = (null == k ? void 0 : k.defaultMemberPermissions) != null,
          w = (0, s.e7)(
            [p.Z, h.ZP, g.Z],
            () => {
              let e = p.Z.getGuild(b),
                t = h.ZP.getSelfMember(b);
              return (
                null != e &&
                null != t &&
                (0, u.Ft)({
                  PermissionStore: g.Z,
                  guild: e,
                  selfMember: t,
                  applicationLevelPermissions: A,
                  commandLevelPermissions: R,
                  defaultMemberPermissions:
                    null == k ? void 0 : k.defaultMemberPermissions,
                })
              );
            },
            [b, k, A, R],
          ),
          M = null != r ? r : t,
          [B, P] = l.useMemo(() => {
            let e = {},
              t = {};
            for (let [n, i] of Object.entries(E))
              i.type === c.Kw.CHANNEL ? (e[n] = i) : (t[n] = i);
            return [e, t];
          }, [E]),
          D = l.useCallback(
            (e) => {
              let t = p.Z.getGuild(b),
                n = h.ZP.getSelfMember(b);
              return (
                null != t &&
                null != n &&
                (null != r
                  ? (0, u.Ft)({
                      PermissionStore: g.Z,
                      guild: t,
                      selfMember: n,
                      applicationLevelPermissions: A,
                      commandLevelPermissions: e,
                      defaultMemberPermissions:
                        null == k ? void 0 : k.defaultMemberPermissions,
                    })
                  : (0, u.Ft)({
                      PermissionStore: g.Z,
                      guild: t,
                      selfMember: n,
                      applicationLevelPermissions: e,
                    }))
              );
            },
            [b, k, r, A],
          ),
          U = l.useCallback(
            (e, t) => {
              let n;
              let i = null;
              if (0 !== t.length) {
                let e = E[t[0]];
                if (e.type === c.Kw.USER) n = N.s.REMOVE_SELF;
                else {
                  let t = e.id;
                  if (((n = N.s.REMOVE_ROLE), (0, m.pM)(b, t))) i = "@everyone";
                  else {
                    let e = p.Z.getRole(b, t);
                    i = null != e ? e.name : "role";
                  }
                }
              } else {
                let t = Object.values(e)[0].id;
                if (((n = N.s.DENY_ROLE), (0, m.pM)(b, t))) i = "@everyone";
                else {
                  let e = p.Z.getRole(b, t);
                  i = null != e ? e.name : "role";
                }
              }
              (0, N._)(n, i);
            },
            [b, E],
          ),
          F = l.useCallback(
            (e, n) => {
              let i = {};
              for (let [e, t] of Object.entries(E))
                i[e] = { id: t.id, permission: t.permission, type: t.type };
              if (
                ((i = Object.assign(i, e)),
                n.length > 0 && (i = a().omit(i, n)),
                !D(i))
              ) {
                U(e, n);
                return;
              }
              x.W4(t, M, i);
            },
            [t, E, M, D, U],
          ),
          W = l.useCallback(() => {
            let e = Object.keys(B);
            return (0, d.openModalLazy)(async () => {
              let { default: t } = await n.e("64908").then(n.bind(n, 557944));
              return (n) =>
                (0, i.jsx)(t, {
                  editPermissions: F,
                  guildId: b,
                  headerText: _.intl.string(_.t["i1c+kZ"]),
                  hasMemberSearch: !1,
                  overwrittenKeys: e,
                  search: S,
                  searchPlaceholderText: _.intl.string(_.t["TLQo/v"]),
                  selectedPermissionCount: L,
                  ...n,
                });
            });
          }, [F, B, b, L]),
          H = l.useCallback(() => {
            let e = Object.keys(P);
            return (0, d.openModalLazy)(async () => {
              let { default: t } = await n.e("64908").then(n.bind(n, 557944));
              return (n) =>
                (0, i.jsx)(t, {
                  editPermissions: F,
                  guildId: b,
                  hasMemberSearch: !0,
                  headerText: _.intl.string(_.t["56jRn5"]),
                  overwrittenKeys: e,
                  search: y,
                  searchPlaceholderText: _.intl.string(_.t.wAfO5e),
                  selectedPermissionCount: L,
                  ...n,
                });
            });
          }, [F, b, P, L]),
          G = l.useCallback(
            () =>
              (0, d.openModalLazy)(async () => {
                let { default: e } = await n.e("21897").then(n.bind(n, 303313)),
                  t = k.defaultMemberPermissions;
                return (
                  o.fS(t, u.BO) && (t = j.Plq.ADMINISTRATOR),
                  (n) => (0, i.jsx)(e, { ...n, defaultMemberPermissions: t })
                );
              }),
            [k],
          ),
          z = L - T._n,
          V = z >= 0,
          K = [
            {
              buttonClick: H,
              buttonText: _.intl.string(_.t["56jRn5"]),
              noneSelectedText: _.intl.string(_.t.C0rYfn),
              overwrites: P,
              title:
                null == r
                  ? _.intl.string(_.t["vPWe+/"])
                  : _.intl.string(_.t["1jLVGB"]),
            },
            {
              buttonClick: W,
              buttonText: _.intl.string(_.t["i1c+kZ"]),
              noneSelectedText: _.intl.string(_.t.UBJhCw),
              overwrites: B,
              title:
                null == r
                  ? _.intl.string(_.t.OGiMXF)
                  : _.intl.string(_.t.Ujbaqq),
            },
          ];
        return (0, i.jsxs)(l.Fragment, {
          children: [
            z > 0
              ? (0, i.jsx)(d.HelpMessage, {
                  messageType: d.HelpMessageTypes.WARNING,
                  children: _.intl.format(_.t["B/dFBA"], { removeCount: z }),
                })
              : null,
            O
              ? (0, i.jsxs)("div", {
                  className: Z.requiredPermissionsBanner,
                  children: [
                    (0, i.jsx)(d.CircleInformationIcon, {
                      size: "sm",
                      color: "currentColor",
                      className: Z.icon,
                    }),
                    (0, i.jsx)("span", {
                      className: Z.message,
                      children: _.intl.format(_.t["2889Gh"], {}),
                    }),
                    (0, i.jsx)(d.Button, {
                      color: d.Button.Colors.PRIMARY,
                      onClick: G,
                      size: d.Button.Sizes.SMALL,
                      className: Z.addButton,
                      children: _.intl.string(_.t["HO/oXl"]),
                    }),
                  ],
                })
              : null,
            K.map((e, t) => {
              let n = (t) =>
                  (0, i.jsx)(d.Button, {
                    ...t,
                    color: d.Button.Colors.PRIMARY,
                    disabled: V || !w,
                    onClick: e.buttonClick,
                    size: d.Button.Sizes.TINY,
                    className: Z.addButton,
                    children: e.buttonText,
                  }),
                l = null;
              return (
                w
                  ? V && (l = _.intl.string(_.t.XTwtW1))
                  : (l =
                      null != r
                        ? _.intl.string(_.t.tybdam)
                        : _.intl.string(_.t.z2hjk5)),
                (0, i.jsx)(
                  I.Z,
                  {
                    bar: (0, i.jsx)(d.Tooltip, {
                      tooltipClassName: Z.tooltip,
                      text: l,
                      shouldShow: null != l,
                      children: (e) => n(e),
                    }),
                    inModal: v,
                    title: e.title,
                    children: (0, i.jsx)("div", {
                      className: v ? void 0 : Z.listContainer,
                      children: (0, i.jsx)(C.Z, {
                        guildId: b,
                        commandId: r,
                        noneSelectedText: e.noneSelectedText,
                        overwrites: e.overwrites,
                        editPermissions: F,
                        hasAccessToMutatePermissions: w,
                      }),
                    }),
                  },
                  t,
                )
              );
            }),
          ],
        });
      }
      function S(e) {
        let t = (0, b.w)(e);
        return {
          ...t,
          results: t.results.map((e) => ({ ...e, type: c.Kw.CHANNEL })),
        };
      }
      function y(e) {
        let t = (0, v.U)(e);
        return {
          ...t,
          results: t.results.roles
            .map((e) => ({ ...e, type: c.Kw.ROLE }))
            .concat(t.results.members.map((e) => ({ ...e, type: c.Kw.USER }))),
        };
      }
    },
    617012: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(481060),
        s = n(388032),
        d = n(301882);
      let c = [!1, !0];
      function u(e) {
        let { isDisabled: t, currentValue: n, onChange: r } = e,
          s = (0, o.useRadioGroup)({
            orientation: "horizontal",
            isDisabled: t,
          }),
          u = l.useCallback(
            (e) => {
              !t && e !== n && r(e);
            },
            [t, n, r],
          );
        return (0, i.jsx)("div", {
          className: a()(d.group, { [d.disabled]: t }),
          ...s,
          children: c.map((e) =>
            (0, i.jsx)(
              m,
              { isSelected: n === e, itemValue: e, onClick: () => u(e) },
              e.toString(),
            ),
          ),
        });
      }
      function m(e) {
        let { isSelected: t, itemValue: n, onClick: l } = e,
          r = n ? d.allow : d.deny,
          c = n ? o.CheckmarkLargeIcon : o.XSmallIcon,
          u = n ? s.intl.string(s.t.RzDfSk) : s.intl.string(s.t["6639Oz"]),
          m = (0, o.useRadioItem)({ isSelected: t, label: u });
        return (0, i.jsx)(o.Clickable, {
          className: a()(d.item, r, { [d.selected]: t }),
          onClick: l,
          ...m,
          children: (0, i.jsx)(c, { size: "xs", color: "currentColor" }),
        });
      }
    },
    454092: function (e, t, n) {
      n.d(t, {
        _: function () {
          return d;
        },
        s: function () {
          return l;
        },
      });
      var i,
        l,
        r = n(668781),
        a = n(63063),
        o = n(981631),
        s = n(388032);
      function d(e, t) {
        let n;
        0 === e
          ? (n = s.intl.format(s.t["/S6f5+"], {}))
          : 1 === e
            ? (n = s.intl.format(s.t.EBhv4e, { name: t }))
            : 2 === e && (n = s.intl.format(s.t["59Dbw8"], { name: t })),
          r.Z.show({
            title: s.intl.string(s.t.vElC9f),
            body: n,
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
    289465: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(481060),
        o = n(195356);
      function s(e) {
        let { bar: t, children: n, className: l, inModal: s, title: d } = e;
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
                (0, i.jsx)("div", { children: t }),
              ],
            }),
            s ? (0, i.jsx)(a.FormDivider, {}) : null,
            n,
          ],
        });
      }
    },
    590157: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        a = n(481060),
        o = n(366598),
        s = n(821864),
        d = n(905753),
        c = n(995390),
        u = n(469880),
        m = n(665578),
        h = n(388032),
        p = n(859600);
      function g(e) {
        let { application: t, canNavigate: n, guildId: c } = e,
          m = (0, r.e7)([d.Z], () => d.Z.isUnavailable());
        return (l.useEffect(() => (s.I4(t.id), s.kZ), [t.id]),
        l.useEffect(() => {
          s.gq(t.id, c, t.id), s.Sn(c, t.id);
        }, [t.id, c]),
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
                (0, i.jsx)(x, { guildId: c, applicationId: t.id }),
                (0, i.jsx)(u.Z, {
                  applicationIcon: t.icon,
                  applicationName: t.name,
                  canNavigate: n,
                  guildId: c,
                }),
              ],
            });
      }
      function x(e) {
        let { applicationId: t, guildId: n } = e,
          {
            originalApplicationPermissions: l,
            editedTargetPermissions: r,
            selectedPermissionCount: a,
          } = (0, c.Z)(n, t);
        return (0, i.jsx)("div", {
          className: p.applicationPermissions,
          children: (0, i.jsx)(m.Z, {
            applicationId: t,
            guildId: n,
            inModal: !1,
            editedTargetPermissions: r,
            originalApplicationPermissions: l,
            selectedPermissionCount: a,
          }),
        });
      }
    },
    270394: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return B;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(512722),
        s = n.n(o),
        d = n(392711),
        c = n.n(d),
        u = n(399606),
        m = n(692547),
        h = n(481060),
        p = n(447543),
        g = n(225433),
        x = n(129861),
        f = n(493544),
        b = n(700582),
        v = n(410030),
        C = n(933557),
        N = n(346486),
        I = n(600164),
        j = n(666657),
        T = n(487419),
        _ = n(664452),
        Z = n(560114),
        E = n(699516),
        S = n(594174),
        y = n(965638),
        A = n(981631),
        R = n(388032),
        L = n(170465),
        k = n(684309),
        O = n(232186);
      let w = { INVITER: 3, INVITE_CODE: 3, USES: 1, EXPIRES: 2 };
      function M(e) {
        var t, n;
        let {
            invite: l,
            showChannel: r = !1,
            inviteDisabled: o = !1,
            hide: s = !1,
          } = e,
          d = l.uses;
        return (
          l.maxUses > 0 && (d = "".concat(l.uses, "/").concat(l.maxUses)),
          (0, i.jsxs)(I.Z, {
            className: a()(L.inviteSettingsInviteRow, k.card, {
              [L.inviteDisabledRow]: o,
            }),
            children: [
              (0, i.jsx)(I.Z, {
                grow: w.INVITER,
                basis: 0,
                align: I.Z.Align.CENTER,
                className: a()(L.text),
                children: (0, i.jsxs)(I.Z.Child, {
                  children: [
                    null == (t = l.inviter)
                      ? null
                      : (0, i.jsxs)("div", {
                          className: L.user,
                          children: [
                            (0, i.jsx)(b.Z, {
                              user: t,
                              size: h.AvatarSizes.SIZE_20,
                              className: L.avatar,
                            }),
                            (0, i.jsx)(x.Z, {
                              className: L.username,
                              discriminatorClass: L.discriminator,
                              user: t,
                            }),
                          ],
                        }),
                    ((n = l.channel),
                    r
                      ? (0, i.jsx)(h.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: (0, C.F6)(n, S.default, E.Z, !0),
                        })
                      : null),
                  ],
                }),
              }),
              (0, i.jsx)(I.Z, {
                grow: w.INVITE_CODE,
                shrink: 1,
                basis: 0,
                align: I.Z.Align.CENTER,
                className: L.text,
                children: (0, i.jsx)(h.Text, {
                  className: L.inviteCode,
                  variant: "text-sm/normal",
                  children: s ? "..." : l.code,
                }),
              }),
              (0, i.jsx)(I.Z, {
                grow: w.USES,
                basis: 0,
                justify: I.Z.Justify.END,
                align: I.Z.Align.CENTER,
                className: a()(L.text),
                children: (0, i.jsx)(h.Text, {
                  className: L.uses,
                  variant: "text-sm/normal",
                  children: d,
                }),
              }),
              (0, i.jsx)(I.Z, {
                grow: w.EXPIRES,
                basis: 0,
                align: I.Z.Align.CENTER,
                justify: I.Z.Justify.END,
                className: a()(L.text, L.countdownColumn),
                children: (0, i.jsx)(h.Text, {
                  className: L.countdown,
                  variant: "text-sm/normal",
                  children: (0, i.jsx)(N.Z, { deadline: l.getExpiresAt() }),
                }),
              }),
              (0, i.jsx)(g.Z, {
                className: L.revokeInvite,
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
          invites: t,
          guild: r,
          hide: a,
          channel: o = null,
          showChannel: d = !1,
          loading: p = !1,
          canCreateInvites: g = !1,
        } = e;
        s()(null != r, "guild is required");
        let x = (0, y.M)(r),
          b = (0, u.e7)([T.Z], () => T.Z.getGuildIncident(r.id)),
          C =
            r.hasFeature(A.oNc.INVITES_DISABLED) ||
            ((null == b ? void 0 : b.invitesDisabledUntil) != null &&
              new Date(b.invitesDisabledUntil) > new Date()),
          N = (0, v.ZP)(),
          E = l.useMemo(
            () =>
              null == t || p
                ? []
                : c()(t)
                    .sortBy((e) => {
                      var t, n;
                      return (
                        null !==
                          (n =
                            null === (t = e.inviter) || void 0 === t
                              ? void 0
                              : t.username) && void 0 !== n
                          ? n
                          : ""
                      ).toLowerCase();
                    })
                    .value(),
            [t, p],
          ),
          S = () => {
            (0, h.openModalLazy)(
              async () => (e) =>
                (0, i.jsx)(Z.default, {
                  ...e,
                  channel: o,
                  guild: r,
                  source: A.t4x.SETTINGS_INVITE,
                }),
            );
          },
          k = () => {
            let e = { source: j.Zu.GUILD_SETTINGS };
            (0, h.openModalLazy)(
              async () => (t) =>
                (0, i.jsx)(_.default, {
                  ...t,
                  guildId: r.id,
                  analyticsData: e,
                }),
            );
          };
        return (0, i.jsx)(f.Xi, {
          sections: [Math.max(1, E.length)],
          renderSection: () => {
            let e;
            return (
              (e =
                0 !== E.length || p
                  ? (0, i.jsxs)(I.Z, {
                      children: [
                        (0, i.jsx)(I.Z.Child, {
                          grow: w.INVITER,
                          basis: 0,
                          className: O.marginReset,
                          children: (0, i.jsx)(h.FormTitle, {
                            children: R.intl.string(R.t.EgHyKy),
                          }),
                        }),
                        (0, i.jsx)(I.Z.Child, {
                          basis: 0,
                          grow: w.INVITE_CODE,
                          className: O.marginReset,
                          children: (0, i.jsx)(h.FormTitle, {
                            children: R.intl.string(R.t.LBlFEB),
                          }),
                        }),
                        (0, i.jsx)(I.Z.Child, {
                          grow: w.USES,
                          basis: 0,
                          className: L.textAlignRight,
                          children: (0, i.jsx)(h.FormTitle, {
                            children: R.intl.string(R.t.erWrmJ),
                          }),
                        }),
                        (0, i.jsx)(I.Z.Child, {
                          grow: w.EXPIRES,
                          basis: 0,
                          className: L.textAlignRight,
                          children: (0, i.jsx)(h.FormTitle, {
                            children: R.intl.string(R.t["1aM27e"]),
                          }),
                        }),
                      ],
                    })
                  : (0, i.jsxs)(h.EmptyState, {
                      theme: N,
                      children: [
                        (0, i.jsx)(h.EmptyStateImage, {
                          darkSrc: n(914814),
                          lightSrc: n(370392),
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
                  className: L.headerSection,
                  children: (0, i.jsxs)(h.HeadingLevel, {
                    component: (0, i.jsx)(h.FormTitle, {
                      tag: h.FormTitleTags.H1,
                      children: R.intl.string(R.t["9F90iY"]),
                    }),
                    children: [
                      (0, i.jsx)(h.FormText, {
                        className: O.marginBottom20,
                        type: h.FormTextTypes.DESCRIPTION,
                        children: g
                          ? R.intl.format(R.t["97VdNj"], { onCreateInvite: S })
                          : R.intl.string(R.t.WDw38P),
                      }),
                      (0, i.jsxs)("div", {
                        className: L.inviteDisabledContainer,
                        children: [
                          (0, i.jsx)(h.Button, {
                            size: h.Button.Sizes.SMALL,
                            color: C
                              ? h.Button.Colors.BRAND
                              : h.Button.Colors.RED,
                            disabled: !x,
                            onClick: k,
                            children: C
                              ? R.intl.string(R.t["/dbw3N"])
                              : R.intl.string(R.t.Uwsjn5),
                          }),
                          C &&
                            (0, i.jsxs)("div", {
                              className: L.inviteDisabledTip,
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
                      (0, i.jsx)(h.FormDivider, { className: L.headerDivider }),
                      e,
                    ],
                  }),
                },
                "header",
              )
            );
          },
          renderRow: (e) => {
            let { section: t, row: n } = e;
            if (0 === E.length && 0 === n && p)
              return (0, i.jsx)(
                h.Spinner,
                {
                  className: O.marginTop20,
                  type: h.Spinner.Type.SPINNING_CIRCLE,
                },
                "spinner",
              );
            if (t > 0) return null;
            let l = E[n];
            return null == l
              ? null
              : (0, i.jsx)(
                  M,
                  { hide: a, invite: l, showChannel: d, inviteDisabled: C },
                  l.code,
                );
          },
          rowHeight: (e, t) =>
            e > 0
              ? 0
              : 0 === E.length && 0 === t && p
                ? 62
                : null != E[t]
                  ? 62
                  : 0,
          sectionHeight: () => (0 !== E.length || p ? 120 : 344),
        });
      }
    },
    208567: function (e, t, n) {
      n.d(t, {
        S: function () {
          return f;
        },
      }),
        n(47120);
      var i,
        l = n(200651),
        r = n(192379),
        a = n(120356),
        o = n.n(a),
        s = n(512722),
        d = n.n(s),
        c = n(481060),
        u = n(624138),
        m = n(813197),
        h = n(981631),
        p = n(388032),
        g = n(640041);
      function x(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function f(e) {
        let { className: t, icon: n = null } = e;
        return (0, l.jsx)(c.ThemeProvider, {
          theme: h.BRd.LIGHT,
          children: (e) =>
            (0, l.jsx)("div", {
              className: o()(g.imageUploaderIcon, t, e),
              children: n,
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
          let t, n, i, r;
          let {
            image: a,
            hint: s,
            name: d,
            makeURL: x,
            disabled: b,
            onChange: v,
            showIcon: C,
            showIconDisabled: N,
            className: I,
            imageClassName: j,
            iconClassName: T,
            iconWrapperClassName: _,
            icon: Z,
            hideSize: E,
            imageStyle: S,
            showRemoveButton: y,
            maxFileSizeBytes: A,
            onFileSizeError: R,
            onOpenImageSelectModal: L,
            "aria-label": k,
          } = this.props;
          if (
            (null != (t = null != a && /^data:/.test(a) ? a : x(a))
              ? (n = 'url("'.concat(t, '")'))
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
              className: o()(g.imageUploader, g.disabled, I),
              children: (0, l.jsxs)("div", {
                className: o()(g.imageUploaderInner, j),
                style: { ...S, backgroundImage: n },
                children: [
                  i,
                  N &&
                    (0, l.jsx)("div", {
                      className: o()(
                        g.imageUploaderIcon,
                        g.imageUploaderIconDisabled,
                        T,
                      ),
                      children: Z,
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
          let O =
            null !== (e = null != k ? k : s) && void 0 !== e
              ? e
              : p.intl.string(p.t["Ge+94+"]);
          return (0, l.jsxs)("div", {
            className: o()(g.imageUploader, I),
            children: [
              (0, l.jsx)(c.FocusRing, {
                within: !0,
                children: (0, l.jsxs)("div", {
                  className: C ? o()(g.imageUploaderIconWrapper, _) : void 0,
                  children: [
                    (0, l.jsxs)("div", {
                      className: o()(g.imageUploaderInner, j),
                      style: { ...S, backgroundImage: n },
                      children: [
                        (0, l.jsx)("span", { "aria-hidden": !0, children: i }),
                        null != L
                          ? (0, l.jsx)(c.Clickable, {
                              className: g.imageUploaderFileInput,
                              "aria-label": O,
                              onClick: L,
                            })
                          : (0, l.jsx)(m.ZP, {
                              ref: this.inputRef,
                              onChange: v,
                              className: g.imageUploaderFileInput,
                              "aria-label": O,
                              tabIndex: 0,
                              maxFileSizeBytes: A,
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
                    C && (0, l.jsx)(f, { className: T, icon: Z }),
                  ],
                }),
              }),
              y ? r : null,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            x(this, "inputRef", r.createRef()),
            x(this, "handleRemove", () => {
              this.props.onChange(null);
            });
        }
      }
      x(b, "defaultProps", {
        name: "",
        makeURL: (e) => e,
        disabled: !1,
        showIcon: !1,
        hideSize: !1,
        showRemoveButton: !0,
        maxFileSizeBytes: 1 / 0,
        icon: null,
      }),
        (t.Z = b);
    },
    486199: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(481060),
        o = n(600164),
        s = n(528144),
        d = n(388032),
        c = n(747536);
      function u(e) {
        let {
          name: t,
          description: n,
          icon: l,
          imageSrc: u,
          iconBackgroundColor: m,
          iconClassName: h,
          iconWrapperClassName: p,
          details: g,
          detailsClassName: x,
          isHeader: f,
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
                  children: (function (e, t, n, l, a) {
                    if (null != t)
                      return (0, i.jsx)("img", {
                        alt: "",
                        src: t,
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
                        style: { backgroundColor: n },
                        className: r()(c.iconWrapper, a),
                        children: s,
                      })
                    );
                  })(l, u, m, h, p),
                })
              : null,
            (function (e) {
              let {
                  name: t,
                  description: n,
                  details: l,
                  detailsClassName: u,
                  isHeader: m,
                  isPremium: h,
                } = e,
                p =
                  null == l
                    ? void 0
                    : l.map((e, t) => {
                        let { icon: n, text: l } = e;
                        return (0, i.jsxs)(
                          "div",
                          {
                            className: r()(
                              c.detailsWrapper,
                              m ? c.headerDetailsWrapper : null,
                            ),
                            children: [
                              null != n
                                ? (0, i.jsx)(n, {
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
                          t,
                        );
                      });
              return (0, i.jsxs)(o.Z, {
                direction: o.Z.Direction.VERTICAL,
                children: [
                  (0, i.jsxs)(s.Z, {
                    size: m ? s.Z.Sizes.SIZE_24 : s.Z.Sizes.SIZE_16,
                    className: m ? c.header : c.secondaryHeader,
                    children: [
                      t,
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
                  null != n
                    ? (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: n,
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
              name: t,
              description: n,
              details: g,
              detailsClassName: x,
              isHeader: f,
              isPremium: b,
            }),
          ],
        });
      }
    },
    366598: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(481060),
        s = n(172);
      function d(e) {
        let { children: t, icon: n, title: r } = e;
        return (0, i.jsxs)("header", {
          className: s.header,
          children: [
            (0, i.jsxs)("div", {
              className: s.name,
              children: [
                l.cloneElement(n, {
                  className: a()(n.props.className, s.icon),
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
            t,
          ],
        });
      }
    },
    919196: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      }),
        n(47120),
        n(653041);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        a = n(481060),
        o = n(668781),
        s = n(600164),
        d = n(434404),
        c = n(590157),
        u = n(280885),
        m = n(496675),
        h = n(768581),
        p = n(709054),
        g = n(51144),
        x = n(486199),
        f = n(366598),
        b = n(125657),
        v = n(725875),
        C = n(981631),
        N = n(388032),
        I = n(380813);
      function j(e) {
        let { application: t, guild: n, integration: l, ...r } = e;
        return (0, i.jsx)(a.ConfirmModal, {
          ...r,
          header: N.intl.formatToPlainString(N.t["rL9d//"], {
            applicationName: t.name,
          }),
          confirmText: N.intl.string(N.t.ebGf4u),
          cancelText: N.intl.string(N.t["ETE/oK"]),
          onConfirm: () => {
            d.Z.disableIntegration(n.id, l.id).catch(() => {
              o.Z.show({
                title: N.intl.string(N.t.wYqMmJ),
                body: N.intl.string(N.t.A4Mnsr),
              });
            });
          },
          children: (0, i.jsx)(a.Text, {
            variant: "text-md/normal",
            children: N.intl.format(N.t.FGE8yc, { applicationName: t.name }),
          }),
        });
      }
      function T(e) {
        var t;
        let {
            guild: n,
            applicationIntegration: o,
            selectableWebhookChannels: d,
            editedWebhook: T,
            errors: _,
            canNavigate: Z,
          } = e,
          { application: E, integration: S, webhooks: y } = o,
          [A, R] = (0, r.Wu)(
            [m.Z],
            () => [
              m.Z.can(C.Plq.MANAGE_ROLES, n),
              null == E.bot ||
                m.Z.canManageUser(C.Plq.MANAGE_GUILD, E.bot.id, n),
            ],
            [E.bot, n],
          ),
          L = (0, r.e7)([m.Z], () => m.Z.can(C.Plq.MANAGE_WEBHOOKS, n), [n]),
          k = l.useCallback(() => {
            Z() &&
              (0, a.openModal)((e) =>
                (0, i.jsx)(j, {
                  guild: n,
                  application: E,
                  integration: S,
                  ...e,
                }),
              );
          }, [E, Z, n, S]),
          O = l.useMemo(() => {
            let e = [
              {
                icon: a.ClockIcon,
                text: N.intl.formatToPlainString(N.t.gcdJ8P, {
                  timestamp: p.default.extractTimestamp(S.id),
                }),
              },
            ];
            return (
              null != S.user &&
                e.push({
                  icon: a.UserIcon,
                  text: N.intl.formatToPlainString(N.t.qE7oqq, {
                    user: g.ZP.getUserTag(S.user),
                  }),
                }),
              e
            );
          }, [S.id, S.user]),
          w = l.useMemo(
            () =>
              null != E.bot
                ? (0, i.jsx)(b.Z, { guild: n, applicationIntegration: o })
                : (0, i.jsx)(a.Card, {
                    className: I.emptyCard,
                    editable: !0,
                    children: (0, i.jsx)(a.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: N.intl.string(N.t.pfLnzc),
                    }),
                  }),
            [E.bot, o, n],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(x.Z, {
              name: E.name,
              imageSrc:
                null !== (t = E.getIconURL(32)) && void 0 !== t ? t : h.pK["0"],
              details: O,
              isHeader: !0,
            }),
            (null == E ? void 0 : E.description) != null
              ? (0, i.jsx)(u.Z, {
                  userBio: E.description,
                  className: I.headerDescription,
                })
              : null,
            A
              ? (0, i.jsx)(c.Z, {
                  application: E,
                  canNavigate: Z,
                  guildId: n.id,
                })
              : null,
            (0, i.jsx)(a.FormDivider, { className: I.headerDivider }),
            null != E.bot
              ? (0, i.jsxs)("div", {
                  className: I.section,
                  children: [
                    (0, i.jsx)(f.Z, {
                      icon: (0, i.jsx)(a.RobotIcon, {
                        size: "xs",
                        color: "currentColor",
                      }),
                      title: N.intl.string(N.t.AOdOYm),
                    }),
                    w,
                  ],
                })
              : null,
            (0, i.jsxs)("div", {
              className: I.section,
              children: [
                (0, i.jsx)(f.Z, {
                  icon: (0, i.jsx)(a.WebhookIcon, {
                    size: "md",
                    color: "currentColor",
                  }),
                  title: N.intl.string(N.t["t9ZX/P"]),
                }),
                y.length > 0
                  ? (0, i.jsx)(v.Z, {
                      webhooks: y,
                      editedWebhook: T,
                      selectableWebhookChannels: d,
                      errors: _,
                      canNavigate: Z,
                    })
                  : (0, i.jsx)(a.Card, {
                      className: I.emptyCard,
                      editable: !0,
                      children: (0, i.jsx)(a.Text, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: L
                          ? N.intl.string(N.t.ahPd2d)
                          : N.intl.string(N.t.axqYMj),
                      }),
                    }),
              ],
            }),
            (0, i.jsx)(a.FormDivider, { className: I.headerDivider }),
            (0, i.jsxs)(s.Z, {
              className: I.section,
              justify: s.Z.Justify.BETWEEN,
              align: s.Z.Align.CENTER,
              children: [
                (0, i.jsx)(a.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: R
                    ? N.intl.string(N.t.hdneLy)
                    : N.intl.string(N.t.xRCMq6),
                }),
                (0, i.jsx)(s.Z.Child, {
                  grow: 0,
                  shrink: 0,
                  children: (0, i.jsx)(a.Button, {
                    size: a.Button.Sizes.SMALL,
                    color: a.Button.Colors.RED,
                    look: a.Button.Looks.FILLED,
                    disabled: !R,
                    onClick: k,
                    children: N.intl.string(N.t.ebGf4u),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    731072: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(481060),
        a = n(139387),
        o = n(726542),
        s = n(434404),
        d = n(486199),
        c = n(13051),
        u = n(36635);
      function m(e) {
        let {
            integrations: t,
            editedIntegration: n,
            guild: m,
            platformType: h,
            labelText: p,
            descriptionText: g,
            helpText: x,
            canNavigate: f,
          } = e,
          b = o.Z.get(h),
          v = l.useCallback(
            async (e) => {
              f() &&
                (await s.Z.enableIntegration(m.id, e.type, e.id),
                a.Z.startEditingIntegration(e.id));
            },
            [f, m.id],
          ),
          C = l.useCallback(
            (e) => {
              f() &&
                (e.id === (null == n ? void 0 : n.id) &&
                  a.Z.stopEditingIntegration(),
                s.Z.disableIntegration(m.id, e.id));
            },
            [f, n, m.id],
          ),
          N = l.useCallback(
            (e) => {
              f() &&
                (e === (null == n ? void 0 : n.id)
                  ? a.Z.stopEditingIntegration()
                  : a.Z.startEditingIntegration(e));
            },
            [f, n],
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
            t.map((e) =>
              (0, i.jsx)(
                c.Z,
                {
                  integration: e,
                  editedIntegration: n,
                  guild: m,
                  isExpanded: (null == n ? void 0 : n.id) === e.id,
                  onEnable: v,
                  onDisable: C,
                  onToggleExpand: () => N(e.id),
                },
                e.id,
              ),
            ),
            (0, i.jsx)(r.Text, {
              className: u.helpText,
              color: "text-muted",
              variant: "text-sm/normal",
              children: x,
            }),
          ],
        });
      }
    },
    494118: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(780384),
        r = n(481060),
        a = n(410030),
        o = n(600164),
        s = n(63063),
        d = n(725875),
        c = n(981631),
        u = n(388032),
        m = n(471199),
        h = n(893916),
        p = n(408942);
      function g(e) {
        let {
            followedChannelWebhooks: t,
            editedWebhook: n,
            selectableWebhookChannels: g,
            errors: x,
            canNavigate: f,
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
            t.length > 0
              ? (0, i.jsx)(d.Z, {
                  webhooks: t,
                  editedWebhook: n,
                  selectableWebhookChannels: g,
                  errors: x,
                  canNavigate: f,
                })
              : (function (e, t) {
                  let n = (0, l.wj)(e) ? h : p;
                  return (0, i.jsxs)(o.Z, {
                    direction: o.Z.Direction.VERTICAL,
                    align: o.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)("img", {
                        alt: "",
                        src: n,
                        className: m.emptyStateImage,
                      }),
                      (0, i.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        children: u.intl.string(u.t.gzuVHx),
                      }),
                      (0, i.jsx)(r.Button, {
                        className: m.emptyStateButton,
                        onClick: t,
                        children: u.intl.string(u.t["ZwSt+f"]),
                      }),
                    ],
                  });
                })(b, () => open(s.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING))),
          ],
        });
      }
    },
    466070: function (e, t, n) {
      n.d(t, {
        t: function () {
          return d;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(481060),
        a = n(296023),
        o = n(768581),
        s = n(585835);
      function d(e) {
        var t;
        let { channel: d, application: c, showApplicationImage: u, ...m } = e,
          h = (0, a.w)(d),
          p = l.useCallback(
            () =>
              (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("30019").then(n.bind(n, 719498));
                return (t) =>
                  (0, i.jsx)(e, { ...t, channel: d, application: c });
              }),
            [c, d],
          ),
          g = u
            ? null !== (t = c.getIconURL(48)) && void 0 !== t
              ? t
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
    37607: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(392711),
        a = n.n(r),
        o = n(481060),
        s = n(139387),
        d = n(835473),
        c = n(471445),
        u = n(925329),
        m = n(163400),
        h = n(63063),
        p = n(466070),
        g = n(981631),
        x = n(388032),
        f = n(926870);
      function b(e) {
        let { applicationId: t, channels: n } = e,
          l = (0, d.q)(t);
        return 0 === n.length || null == l
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
                n.map((e) => {
                  var t;
                  return (0, i.jsx)(
                    p.t,
                    {
                      channel: e,
                      application: l,
                      name: e.name,
                      icon:
                        null !== (t = (0, c.KS)(e)) && void 0 !== t
                          ? t
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
      function v(e) {
        let { guild: t } = e,
          n = (0, m.F)(t.id),
          r = a().groupBy(n, (e) => {
            var t;
            return null === (t = e.linkedLobby) || void 0 === t
              ? void 0
              : t.application_id;
          }),
          d = Object.keys(r);
        return (
          l.useEffect(() => {
            0 === n.length && s.Z.setSection(g.b4C.OVERVIEW);
          }, [n]),
          (0, i.jsxs)(o.FormSection, {
            children: [
              (0, i.jsx)(o.FormText, {
                type: o.FormTextTypes.DESCRIPTION,
                children: x.intl.format(x.t["9gsSLi"], {
                  helpdeskArticle: h.Z.getArticleURL(g.BhN.LINKED_LOBBIES),
                }),
              }),
              (0, i.jsx)(o.FormDivider, { className: f.headerDivider }),
              d.map((e) =>
                (0, i.jsx)(b, { applicationId: e, channels: r[e] }, e),
              ),
            ],
          })
        );
      }
    },
    351644: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return U;
        },
      }),
        n(653041),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(658722),
        s = n.n(o),
        d = n(442837),
        c = n(780384),
        u = n(481060),
        m = n(37234),
        h = n(410030),
        p = n(726542),
        g = n(132871),
        x = n(147890),
        f = n(835473),
        b = n(231757),
        v = n(600164),
        C = n(685929),
        N = n(163400),
        I = n(553795),
        j = n(496675),
        T = n(626135),
        _ = n(768581),
        Z = n(63063),
        E = n(709054),
        S = n(51144),
        y = n(466070),
        A = n(585835),
        R = n(997787),
        L = n(981631),
        k = n(388032),
        O = n(341701),
        w = n(509399),
        M = n(790904),
        B = n(609182);
      function P(e, t) {
        return t.includes(e);
      }
      function D(e) {
        let { query: t, setQuery: n } = e,
          r = l.useCallback(
            (e) => {
              n(e);
            },
            [n],
          );
        return (0, i.jsx)("div", {
          className: O.searchContainer,
          children: (0, i.jsx)(u.SearchBar, {
            size: u.SearchBar.Sizes.MEDIUM,
            query: t,
            onChange: r,
            onClear: () => n(""),
            placeholder: k.intl.string(k.t["5prvKS"]),
            "aria-label": k.intl.string(k.t["5prvKS"]),
          }),
        });
      }
      function U(e) {
        var t, n, r, o, U, F, W, H;
        let {
            guild: G,
            channel: z,
            applicationIntegrations: V,
            builtInIntegrations: K,
            customWebhooks: q,
            followedChannelWebhooks: Y,
            isLoadingWebhooks: J,
            canCreateWebhook: X,
            onManageBuiltIn: Q,
            onManageCustomWebhooks: $,
            onManageFollowedChannels: ee,
            onManageApplication: et,
            onManageLobbiesLinked: en,
          } = e,
          ei = (0, h.ZP)(),
          [el, er] = l.useState(""),
          { isFetchingConnections: ea, accounts: eo } = (0, d.cj)(
            [I.Z],
            () => ({
              isFetchingConnections: I.Z.isFetching(),
              accounts: I.Z.getAccounts(),
            }),
            [],
          ),
          { canManageWebhooks: es, canManageGuild: ed } = (0, d.cj)(
            [j.Z],
            () => ({
              canManageWebhooks:
                (null != G && j.Z.can(L.Plq.MANAGE_WEBHOOKS, G)) ||
                (null != z && j.Z.can(L.Plq.MANAGE_WEBHOOKS, z)),
              canManageGuild:
                null != G && null == z && j.Z.can(L.Plq.MANAGE_GUILD, G),
            }),
            [G, z],
          ),
          ec = (0, C.Y)(z),
          eu = (0, f.q)(
            null == z
              ? void 0
              : null === (t = z.linkedLobby) || void 0 === t
                ? void 0
                : t.application_id,
          ),
          em = (0, N.F)(null == G ? void 0 : G.id),
          {
            availableTwitchIntegrations: eh,
            availableYoutubeIntegrations: ep,
            guildTwitchIntegrations: eg,
            guildYoutubeIntegrations: ex,
          } = l.useMemo(() => {
            var e, t, n, i, l, r, a, o;
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
                    null === (t = K.youtube) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== r
                  ? r
                  : 0,
              guildTwitchIntegrations:
                null !==
                  (a =
                    null === (n = K.twitch) || void 0 === n
                      ? void 0
                      : n.filter((e) => e.enabled).length) && void 0 !== a
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
          { showTwitchCard: ef, showYoutubeCard: eb } = l.useMemo(() => {
            if (ea || !ed) return { showTwitchCard: !1, showYoutubeCard: !1 };
            let e = null == G ? void 0 : G.hasFeature(L.oNc.COMMUNITY),
              t = eo.filter((e) => e.type === L.ABu.TWITCH).length > 0,
              n = eo.filter((e) => e.type === L.ABu.YOUTUBE).length > 0;
            return {
              showTwitchCard: eh > 0 || (!t && e),
              showYoutubeCard: ep > 0 || (!n && e),
            };
          }, [ea, ed, G, eo, eh, ep]),
          ev = Object.values(V).length,
          eC = l.useMemo(() => {
            let e = ev > 100 ? P : s();
            return Object.values(V).filter((t) => {
              var n, i, l;
              let { application: r } = t;
              return (
                (n = r),
                (i = el),
                (l = e),
                !!(
                  "" === (i = i.trim().toLowerCase()) ||
                  n.id === i ||
                  l(i, n.name.toLowerCase()) ||
                  (null != n.bot && l(i, n.bot.username.toLowerCase()))
                ) || !1
              );
            });
          }, [V, ev, el]),
          eN = (0, d.e7)(
            [R.Z],
            () => {
              if (null != G)
                return eC.find((e) =>
                  R.Z.canShowOverviewTooltip(G.id, e.integration.id),
                );
            },
            [eC, G],
          ),
          eI = l.useMemo(
            () =>
              void 0 !== eN
                ? [
                    eN,
                    ...eC.filter((e) => e.integration.id !== eN.integration.id),
                  ]
                : eC,
            [eC, eN],
          ),
          ej = (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
          [eT, e_] = l.useState(!1),
          eZ = l.useRef(0),
          eE = () => {
            e_(!0),
              clearTimeout(eZ.current),
              (eZ.current = setTimeout(() => {
                e_(!1);
              }, 200));
          };
        l.useEffect(
          () => (
            window.addEventListener("scroll", eE, !0),
            () => window.removeEventListener("scroll", eE)
          ),
        );
        let eS = eI.map((e) => {
            let t =
              !ej &&
              e.integration.id === (null == eN ? void 0 : eN.integration.id);
            return (function (e, t, n, l, r) {
              var a;
              let { application: o, integration: s } = t,
                d = [];
              return (
                null != s.user
                  ? d.push({
                      icon: u.ClockIcon,
                      text: k.intl.formatToPlainString(k.t.Nu9sam, {
                        timestamp: E.default.extractTimestamp(s.id),
                        user: S.ZP.getUserTag(s.user),
                      }),
                    })
                  : d.push({
                      icon: u.ClockIcon,
                      text: k.intl.formatToPlainString(k.t.gcdJ8P, {
                        timestamp: E.default.extractTimestamp(s.id),
                      }),
                    }),
                (0, i.jsx)(
                  A.Z,
                  {
                    name: o.name,
                    imageSrc:
                      null !== (a = o.getIconURL(48)) && void 0 !== a
                        ? a
                        : _.pK["0"],
                    integration: t,
                    buttonText: k.intl.string(k.t["Z/qRnJ"]),
                    hasNextSection: !0,
                    onButtonClick: () => {
                      n(o.id),
                        T.default.track(L.rMx.APP_MANAGE_CTA_CLICKED, {
                          application_id: o.id,
                          guild_id: null == e ? void 0 : e.id,
                          is_admin:
                            null != e
                              ? j.Z.can(L.Plq.ADMINISTRATOR, e)
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
            })(G, e, et, eT, t);
          }),
          ey = (0, i.jsx)("div", { className: O.footerImage });
        0 === eS.length &&
          ed &&
          ((eS = (function (e, t, n) {
            let l = (0, c.wj)(e) ? M : B,
              r = (0, i.jsxs)(v.Z, {
                direction: v.Z.Direction.VERTICAL,
                align: v.Z.Align.CENTER,
                className: O.emptyStateWrapper,
                children: [
                  (0, i.jsx)("img", {
                    alt: "",
                    src: l,
                    className: O.emptyStateSearchImage,
                  }),
                  (0, i.jsx)(u.Card, {
                    editable: !0,
                    className: O.emptyStateCard,
                    children: (0, i.jsx)(u.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: k.intl.string(k.t.EVWFNj),
                    }),
                  }),
                ],
              }),
              a = (0, i.jsx)(u.Card, {
                editable: !0,
                className: O.emptyStateCard,
                children: (0, i.jsxs)("div", {
                  className: O.emptyStateText,
                  children: [
                    (0, i.jsx)("img", {
                      alt: "",
                      src: w,
                      className: O.emptyStateImage,
                    }),
                    (0, i.jsx)(u.Heading, {
                      color: "header-secondary",
                      variant: "heading-xl/bold",
                      children: k.intl.string(k.t.nQQeFB),
                    }),
                    (0, i.jsx)(u.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children: k.intl.format(k.t.snvKU1, {
                        handleGoToAppDirectory: () => {
                          (0, x.goToAppDirectory)({
                            guildId: n,
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
            return t > 0 ? r : a;
          })(ei, ev, null == G ? void 0 : G.id)),
          (ey = null));
        let eA = Z.Z.getArticleURL(L.BhN.INTEGRATIONS),
          eR = null != z ? k.t.YV0vh4 : k.t.FnZEJi,
          eL = [];
        if (es) {
          let e, t;
          if (
            (eL.push(
              ((n = q.length),
              (r = X),
              (o = $),
              n > 0
                ? (t = (0, i.jsx)(u.ChevronLargeRightIcon, { size: "xs" }))
                : (e = k.intl.string(k.t.lOQqJC)),
              (0, i.jsx)(
                A.Z,
                {
                  name: k.intl.string(k.t.xOg4SE),
                  icon: u.WebhookIcon,
                  buttonText: e,
                  buttonDisabled: !r,
                  trailing: t,
                  onButtonClick: o,
                  hasNextSection: n > 0,
                  details: [
                    {
                      text: k.intl.formatToPlainString(k.t["6HqDfX"], {
                        count: n,
                      }),
                    },
                  ],
                },
                "webhooks",
              )),
            ),
            (null == z ? void 0 : z.type) !== L.d4z.GUILD_VOICE &&
              ((null == z ? void 0 : z.type) == null ||
                !L.TPd.GUILD_THREADS_ONLY.has(z.type)))
          ) {
            let e, t, n;
            eL.push(
              ((U = Y.length),
              (F = ee),
              U > 0
                ? ((n = (0, i.jsx)(u.ChevronLargeRightIcon, { size: "xs" })),
                  (t = F))
                : ((e = k.intl.string(k.t["ZwSt+f"])),
                  (t = () => open(Z.Z.getArticleURL(L.BhN.CHANNEL_FOLLOWING)))),
              (0, i.jsx)(
                A.Z,
                {
                  name: k.intl.string(k.t.OrV60t),
                  icon: u.ChannelsFollowedIcon,
                  buttonText: e,
                  onButtonClick: t,
                  trailing: n,
                  hasNextSection: U > 0,
                  details: [
                    {
                      text: k.intl.formatToPlainString(k.t.JUNGIS, {
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
          eL.push(
            ((W = em.length),
            (H = en),
            (0, i.jsx)(
              A.Z,
              {
                name: k.intl.string(k.t.tqtDXF),
                icon: u.RefreshIcon,
                trailing: (0, i.jsx)(u.ChevronLargeRightIcon, { size: "xs" }),
                onButtonClick: H,
                hasNextSection: !0,
                details: [
                  {
                    text: k.intl.formatToPlainString(k.t["puxS4+"], {
                      count: W,
                    }),
                  },
                ],
              },
              "channels-syncing",
            )),
          );
        }
        ef &&
          eL.push(
            (function (e, t, n) {
              let l, r, a, o;
              let s = p.Z.get(L.ABu.TWITCH);
              return (
                e > 0
                  ? ((o = (0, i.jsx)(u.ChevronLargeRightIcon, { size: "xs" })),
                    (r = k.intl.formatToPlainString(k.t.FFpnT0, { count: t })),
                    (a = () => n(L.ABu.TWITCH)))
                  : ((l = k.intl.string(k.t.bkvGkp)),
                    (r = k.intl.string(k.t.Qq3X2N)),
                    (a = () =>
                      (0, b.Z)({
                        platformType: L.ABu.TWITCH,
                        location: "Integration Settings",
                      }))),
                (0, i.jsx)(
                  A.Z,
                  {
                    name: k.intl.string(k.t.q4pBGx),
                    icon: s.icon.whiteSVG,
                    iconBackgroundColor: s.color,
                    iconClassName: O.platformIcon,
                    buttonText: l,
                    onButtonClick: a,
                    trailing: o,
                    hasNextSection: e > 0,
                    details: [{ text: r }],
                  },
                  "integrations-twitch",
                )
              );
            })(eh, eg, Q),
          ),
          eb &&
            eL.push(
              (function (e, t, n) {
                let l, r, a, o;
                let s = p.Z.get(L.ABu.YOUTUBE);
                return (
                  e > 0
                    ? ((o = (0, i.jsx)(u.ChevronLargeRightIcon, {
                        size: "xs",
                      })),
                      (r = k.intl.formatToPlainString(k.t.b2g5vL, {
                        count: t,
                      })),
                      (a = () => n(L.ABu.YOUTUBE)))
                    : ((l = k.intl.string(k.t.xEyQ3d)),
                      (r = k.intl.string(k.t.T0ivgY)),
                      (a = () =>
                        (0, b.Z)({
                          platformType: L.ABu.YOUTUBE,
                          location: "Integration Settings",
                        }))),
                  (0, i.jsx)(
                    A.Z,
                    {
                      name: k.intl.string(k.t.aS6cKy),
                      icon: s.icon.whiteSVG,
                      iconBackgroundColor: s.color,
                      iconClassName: O.platformIcon,
                      buttonText: l,
                      onButtonClick: a,
                      trailing: o,
                      hasNextSection: e > 0,
                      details: [{ text: r }],
                    },
                    "integrations-youtube",
                  )
                );
              })(ep, ex, Q),
            );
        let ek = null != z && ec && null != eu;
        return (0, i.jsxs)(u.FormSection, {
          className: a()(null != ey ? O.footerPlaceholder : null),
          children: [
            (0, i.jsx)(u.FormText, {
              type: u.FormTextTypes.DESCRIPTION,
              children: k.intl.format(eR, { helpdeskArticle: eA }),
            }),
            (0, i.jsx)(u.FormDivider, { className: O.divider }),
            J || ea || null == G
              ? (0, i.jsx)(u.Spinner, {
                  className: O.__invalid_spinner,
                  type: u.Spinner.Type.SPINNING_CIRCLE,
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    eL,
                    ek &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          eL.length > 0
                            ? (0, i.jsx)(u.FormDivider, {
                                className: O.divider,
                              })
                            : null,
                          (0, i.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            className: O.sectionHeader,
                            children: k.intl.string(k.t.oAvIAg),
                          }),
                          (0, i.jsx)(y.t, {
                            channel: z,
                            application: eu,
                            showApplicationImage: !0,
                            name: eu.name,
                            hasNextSection: !0,
                            iconClassName: O.linkedLobbyIcon,
                            trailing: (0, i.jsx)(u.PencilIcon, { size: "xs" }),
                          }),
                        ],
                      }),
                    ed
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            eL.length > 0 || ek
                              ? (0, i.jsx)(u.FormDivider, {
                                  className: O.divider,
                                })
                              : null,
                            (0, i.jsx)(u.Heading, {
                              variant: "heading-md/semibold",
                              className: O.sectionHeader,
                              children: k.intl.string(k.t.pUBKho),
                            }),
                            ev > 4
                              ? (0, i.jsx)(D, { query: el, setQuery: er })
                              : null,
                            eS,
                          ],
                        })
                      : null,
                    ey,
                  ],
                }),
          ],
        });
      }
    },
    108053: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(780384),
        a = n(481060),
        o = n(668781),
        s = n(308063),
        d = n(493773),
        c = n(410030),
        u = n(600164),
        m = n(63063),
        h = n(725875),
        p = n(981631),
        g = n(388032),
        x = n(112151),
        f = n(893916),
        b = n(408942);
      function v(e) {
        let t,
          {
            guild: n,
            channel: v,
            customWebhooks: C,
            editedWebhook: N,
            selectableWebhookChannels: I,
            refToScroller: j,
            errors: T,
            canNavigate: _,
          } = e,
          Z = (0, c.ZP)(),
          [E, S] = l.useState(null),
          [y, A] = l.useState(null);
        if (null != v) t = v;
        else {
          let e = Object.values(I);
          t = e.length > 0 ? e[0] : null;
        }
        let R = l.useCallback(async () => {
          if (_() && null !== t) {
            let e = await s.Z.create(n.id, t.id).catch((e) => {
              let { body: t, status: n } = e;
              return (
                t && t.code === p.evJ.TOO_MANY_WEBHOOKS
                  ? o.Z.show({
                      title: g.intl.string(g.t.cCqscX),
                      body: g.intl.string(g.t["w+QZoa"]),
                    })
                  : 429 === n
                    ? o.Z.show({
                        title: g.intl.string(g.t.cCqscX),
                        body: g.intl.string(g.t["YBM+UV"]),
                      })
                    : o.Z.show({
                        title: g.intl.string(g.t.cCqscX),
                        body: g.intl.string(g.t["/4TwKS"]),
                      }),
                null
              );
            });
            null != e && (A(e.id), S(e));
          }
        }, [_, t, n]);
        (0, d.Z)(() => {
          0 === C.length && R();
        });
        let L = null !== t;
        return (0, i.jsxs)(a.FormSection, {
          children: [
            (0, i.jsx)(a.FormText, {
              type: a.FormTextTypes.DESCRIPTION,
              children: g.intl.format(g.t.WL0d0d, {
                helpdeskArticle: m.Z.getArticleURL(p.BhN.WEBHOOKS),
                developersArticle: p.EYA.API_DOCS_WEBHOOKS,
              }),
            }),
            (0, i.jsx)(a.FormDivider, { className: x.headerDivider }),
            C.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(a.Button, {
                      className: x.createButton,
                      size: a.Button.Sizes.SMALL,
                      disabled: !L,
                      onClick: R,
                      children: g.intl.string(g.t["nrO/HB"]),
                    }),
                    (0, i.jsx)(h.Z, {
                      webhooks: C,
                      editedWebhook: N,
                      selectableWebhookChannels: I,
                      lastCreatedWebhookId: null == E ? void 0 : E.id,
                      errors: T,
                      canNavigate: _,
                    }),
                  ],
                })
              : (function (e, t, n) {
                  let l = (0, r.wj)(e) ? f : b;
                  return (0, i.jsxs)(u.Z, {
                    direction: u.Z.Direction.VERTICAL,
                    align: u.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)("img", {
                        alt: "",
                        src: l,
                        className: x.emptyStateImage,
                      }),
                      (0, i.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        children: g.intl.string(g.t.LzmsWl),
                      }),
                      (0, i.jsx)(a.Button, {
                        className: x.emptyStateButton,
                        disabled: !t,
                        onClick: n,
                        children: g.intl.string(g.t.lOQqJC),
                      }),
                    ],
                  });
                })(Z, L, R),
          ],
        });
      }
    },
    490655: function (e, t, n) {
      n(47120), n(653041);
      var i = n(200651),
        l = n(192379),
        r = n(392711),
        a = n.n(r),
        o = n(442837),
        s = n(481060),
        d = n(139387),
        c = n(503089),
        u = n(231757),
        m = n(600164),
        h = n(106976),
        p = n(488915),
        g = n(984933),
        x = n(496675),
        f = n(585483),
        b = n(63063),
        v = n(919196),
        C = n(731072),
        N = n(494118),
        I = n(37607),
        j = n(351644),
        T = n(108053),
        _ = n(981631),
        Z = n(388032),
        E = n(172168);
      function S(e, t) {
        switch (e) {
          case _.b4C.APPLICATION:
            var n;
            return null !== (n = null == t ? void 0 : t.application.name) &&
              void 0 !== n
              ? n
              : "";
          case _.b4C.OVERVIEW:
            return Z.intl.string(Z.t.s69NLC);
          case _.b4C.CHANNEL_FOLLOWING:
            return Z.intl.string(Z.t.OrV60t);
          case _.b4C.TWITCH:
            return Z.intl.string(Z.t.q4pBGx);
          case _.b4C.WEBHOOKS:
            return Z.intl.string(Z.t.xOg4SE);
          case _.b4C.YOUTUBE:
            return Z.intl.string(Z.t.aS6cKy);
          case _.b4C.LOBBIES_LINKED:
            return Z.intl.string(Z.t.tqtDXF);
          default:
            return "";
        }
      }
      t.Z = l.memo(function (e) {
        let {
            section: t,
            sectionId: n,
            guild: r,
            channel: y,
            integrations: A,
            editedIntegration: R,
            webhooks: L,
            editedWebhook: k,
            isFetchingWebhooks: O,
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
          U = (0, o.cj)([x.Z], () =>
            a().keyBy(
              D.SELECTABLE.map((e) => e.channel).filter((e) =>
                x.Z.can(_.Plq.MANAGE_WEBHOOKS, e),
              ),
              "id",
            ),
          ),
          F = (0, o.cj)([x.Z], () =>
            a().keyBy(
              D.VOCAL.map((e) => e.channel).filter(
                (e) => e.isGuildVocal() && x.Z.can(_.Plq.MANAGE_WEBHOOKS, e),
              ),
              "id",
            ),
          ),
          W = null != y ? y : P,
          H = t === _.b4C.APPLICATION ? n : null,
          [G, z] = l.useState(c.$x),
          V = l.useCallback(
            () =>
              B()
                ? (f.S.dispatch(_.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: G,
                  }),
                  z(Math.min(G + c.d7, c.w6)),
                  f.S.dispatch(_.CkL.EMPHASIZE_NOTICE),
                  !1)
                : (z(c.$x), !0),
            [B, G],
          ),
          K = l.useCallback((e) => !!V() && (d.Z.setSection(e), !0), [V]),
          {
            applicationIntegrations: q,
            applicationBotIds: Y,
            builtInIntegrations: J,
            customWebhooks: X,
            followedChannelWebhooks: Q,
          } = l.useMemo(() => {
            let e = {},
              t = {},
              n = {},
              i = [],
              l = [];
            if (null != A)
              for (let i of A)
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
                        (t[i.application.bot.id] = i.application.id);
                  }
                } else !(i.type in n) && (n[i.type] = []), n[i.type].push(i);
            for (let t of L) {
              if (t.channel_id in U || t.channel_id in F)
                null != t.application_id && t.application_id in e
                  ? e[t.application_id].webhooks.push(t)
                  : t.type === _.ylB.CHANNEL_FOLLOWER
                    ? l.push(t)
                    : i.push(t);
            }
            return {
              applicationIntegrations: e,
              applicationBotIds: t,
              builtInIntegrations: n,
              customWebhooks: i,
              followedChannelWebhooks: l,
            };
          }, [A, U, F, L]);
        l.useEffect(() => {
          if (!O)
            switch (t) {
              case _.b4C.TWITCH:
                null == J[_.ABu.TWITCH] && d.Z.setSection(_.b4C.OVERVIEW);
                break;
              case _.b4C.YOUTUBE:
                null == J[_.ABu.YOUTUBE] && d.Z.setSection(_.b4C.OVERVIEW);
                break;
              case _.b4C.APPLICATION:
                (null == H || !(H in Y || H in q)) &&
                  d.Z.setSection(_.b4C.OVERVIEW);
            }
        }, [q, Y, J, H, t, O]),
          l.useEffect(() => {
            if ((null == r ? void 0 : r.id) != null)
              p.Z.getEntitlementsForGuildFetchState(r.id) === p.M.NOT_FETCHED &&
                h.i1(r.id);
          }, [null == r ? void 0 : r.id]),
          l.useEffect(
            () => () => {
              d.Z.setSection(_.b4C.OVERVIEW, null);
            },
            [],
          );
        let $ = null;
        switch (t) {
          case _.b4C.TWITCH:
            null != J[_.ABu.TWITCH] &&
              ($ = (0, i.jsx)(C.Z, {
                guild: r,
                integrations: J[_.ABu.TWITCH],
                editedIntegration: R,
                labelText: Z.intl.string(Z.t.q4pBGx),
                platformType: _.ABu.TWITCH,
                descriptionText: Z.intl.string(Z.t.V9kNqq),
                helpText: Z.intl.format(Z.t.ro1jEB, {
                  connectAction: () =>
                    (0, u.Z)({
                      platformType: _.ABu.TWITCH,
                      location: "Integration Settings",
                    }),
                  helpdeskArticle: b.Z.getArticleURL(_.BhN.TWITCH_INTEGRATION),
                }),
                canNavigate: V,
              }));
            break;
          case _.b4C.YOUTUBE:
            null != J[_.ABu.YOUTUBE] &&
              ($ = (0, i.jsx)(C.Z, {
                guild: r,
                integrations: J[_.ABu.YOUTUBE],
                editedIntegration: R,
                labelText: Z.intl.string(Z.t.aS6cKy),
                platformType: _.ABu.YOUTUBE,
                descriptionText: Z.intl.string(Z.t["7Tv7JC"]),
                helpText: Z.intl.format(Z.t["4OSAQ0"], {
                  connectAction: () =>
                    (0, u.Z)({ platformType: _.ABu.YOUTUBE }),
                  helpdeskArticle: b.Z.getArticleURL(_.BhN.YOUTUBE_INTEGRATION),
                }),
                canNavigate: V,
              }));
            break;
          case _.b4C.APPLICATION:
            var ee;
            let et =
              null != H
                ? null !== (ee = q[Y[H]]) && void 0 !== ee
                  ? ee
                  : q[H]
                : null;
            null != et &&
              ($ = (0, i.jsx)(v.Z, {
                guild: r,
                applicationIntegration: et,
                editedWebhook: k,
                selectableWebhookChannels: U,
                errors: M,
                canNavigate: V,
              }));
            break;
          case _.b4C.CHANNEL_FOLLOWING:
            $ = (0, i.jsx)(N.Z, {
              followedChannelWebhooks: Q,
              editedWebhook: k,
              selectableWebhookChannels: U,
              canNavigate: V,
              errors: M,
            });
            break;
          case _.b4C.WEBHOOKS:
            $ = (0, i.jsx)(T.Z, {
              guild: r,
              channel: y,
              customWebhooks: X,
              editedWebhook: k,
              selectableWebhookChannels: { ...U, ...F },
              canNavigate: V,
              refToScroller: w,
              errors: M,
            });
            break;
          case _.b4C.LOBBIES_LINKED:
            $ = (0, i.jsx)(I.Z, { guild: r });
            break;
          default:
            $ = (0, i.jsx)(j.Z, {
              guild: r,
              channel: y,
              applicationIntegrations: q,
              builtInIntegrations: J,
              customWebhooks: X,
              followedChannelWebhooks: Q,
              isLoadingWebhooks: O || null == r,
              canCreateWebhook: null != W,
              onManageCustomWebhooks: () => {
                d.Z.setSection(_.b4C.WEBHOOKS);
              },
              onManageFollowedChannels: () => {
                d.Z.setSection(_.b4C.CHANNEL_FOLLOWING);
              },
              onManageApplication: (e) => {
                d.Z.setSection(_.b4C.APPLICATION, e);
              },
              onManageBuiltIn: (e) => {
                switch (e) {
                  case _.ABu.TWITCH:
                    d.Z.setSection(_.b4C.TWITCH);
                    break;
                  case _.ABu.YOUTUBE:
                    d.Z.setSection(_.b4C.YOUTUBE);
                }
              },
              onManageLobbiesLinked: () => {
                d.Z.setSection(_.b4C.LOBBIES_LINKED);
              },
            });
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(m.Z, {
              align: m.Z.Align.CENTER,
              className: E.breadcrumbs,
              children:
                t === _.b4C.OVERVIEW
                  ? (0, i.jsx)(s.FormTitle, {
                      tag: "h1",
                      children: S(_.b4C.OVERVIEW),
                    })
                  : (0, i.jsx)(s.Breadcrumbs, {
                      activeId: t.toString(),
                      breadcrumbs: [_.b4C.OVERVIEW, t].map((e) => ({
                        id: e.toString(),
                        label: S(e, q[H]),
                      })),
                      onBreadcrumbClick: (e) => {
                        if (t !== parseInt(e.id)) K(parseInt(e.id));
                      },
                      renderCustomBreadcrumb: (e, t) =>
                        (0, i.jsx)(s.FormTitle, {
                          tag: "h1",
                          className: t
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
    125657: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(653041),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(149765),
        a = n(442837),
        o = n(481060),
        s = n(749210),
        d = n(412899),
        c = n(995648),
        u = n(385499),
        m = n(600164),
        h = n(422559),
        p = n(598077),
        g = n(271383),
        x = n(430824),
        f = n(823379),
        b = n(700785),
        v = n(388032),
        C = n(449650);
      function N(e) {
        var t;
        let { guild: n, applicationIntegration: N } = e,
          I = (0, a.e7)([x.Z], () => x.Z.getRoles(n.id)),
          { application: j } = N,
          T = null != j.bot ? new p.Z(j.bot) : null,
          _ = (0, a.e7)(
            [g.ZP],
            () => (null != T ? g.ZP.getMember(n.id, T.id) : null),
            [T, n],
          ),
          Z = null == T ? void 0 : T.id;
        l.useEffect(() => {
          if (null != Z) s.Z.requestMembersById(n.id, Z);
        }, [n.id, Z]);
        let E = l.useMemo(() => {
          var e, t, i;
          let l = I[n.getEveryoneRoleId()],
            a =
              null !==
                (t =
                  null == _
                    ? void 0
                    : null === (e = _.roles) || void 0 === e
                      ? void 0
                      : e.map((e) => I[e]).filter(f.lm)) && void 0 !== t
                ? t
                : [],
            o =
              null !== (i = null == l ? void 0 : l.permissions) && void 0 !== i
                ? i
                : b.Hn;
          for (let e of a) o = r.IH(o, e.permissions);
          return o;
        }, [n, I, _]);
        return null == T
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
                        src: T.getAvatarURL(n.id, 32),
                        className: C.iconWrapper,
                      }),
                      (0, i.jsx)(o.Text, {
                        color: "header-primary",
                        variant: "text-sm/normal",
                        children: v.intl.format(v.t.GyhzGx, {
                          user: T.toString(),
                        }),
                      }),
                      (0, i.jsx)(u.Z, {
                        className: C.tag,
                        verified: T.isVerifiedBot(),
                      }),
                    ],
                  }),
                  (function (e, t, n, l) {
                    let a = [],
                      s = [];
                    for (let e of h.VY) r.e$(l, e) ? a.push(e) : s.push(e);
                    return (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(o.FormDivider, { className: C.divider }),
                        n.length > 0
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(o.FormTitle, {
                                  className: C.permissionHeader,
                                  children: v.intl.format(v.t.PCs0oq, {
                                    numRoles: n.length,
                                  }),
                                }),
                                (0, i.jsx)(d.ZP, {
                                  className: C.rolePills,
                                  user: e,
                                  guild: t,
                                  userRoles: n,
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
                    T,
                    n,
                    null !== (t = null == _ ? void 0 : _.roles) && void 0 !== t
                      ? t
                      : [],
                    E,
                  ),
                ],
              }),
            });
      }
    },
    13051: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y;
        },
      }),
        n(47120),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(913527),
        s = n.n(o),
        d = n(951284),
        c = n(442837),
        u = n(481060),
        m = n(139387),
        h = n(726542),
        p = n(600164),
        g = n(339085),
        x = n(434404),
        f = n(598077),
        b = n(430824),
        v = n(246946),
        C = n(259580),
        N = n(531087),
        I = n(768581),
        j = n(709054),
        T = n(486199),
        _ = n(981631),
        Z = n(388032),
        E = n(563949),
        S = n(232186);
      function y(e) {
        let t,
          {
            guild: n,
            integration: r,
            editedIntegration: o,
            isExpanded: y,
            onToggleExpand: A,
            onDisable: R,
            onEnable: L,
          } = e,
          k = (0, c.e7)([b.Z], () => b.Z.getRoles(n.id)),
          [O, w] = l.useState(!1),
          M = (0, c.e7)([v.Z], () => v.Z.hidePersonalInformation),
          B = l.useCallback(() => {
            w(!0), L(r);
          }, [r, L]),
          P = l.useCallback(() => {
            !r.syncing &&
              (0, u.openModal)((e) => {
                let t =
                  0 === r.expire_behavior
                    ? Z.intl.string(Z.t["6kpw4u"])
                    : Z.intl.string(Z.t.fQUQIC);
                return (0, i.jsx)(u.ConfirmModal, {
                  ...e,
                  header: Z.intl.string(Z.t.emx3lJ),
                  confirmText: t,
                  cancelText: Z.intl.string(Z.t["ETE/oK"]),
                  onConfirm: () => R(r),
                  children: (0, i.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children:
                      r.type === d.b.YOUTUBE
                        ? Z.intl.string(Z.t.anKQWV)
                        : Z.intl.string(Z.t["BW/xtr"]),
                  }),
                });
              });
          }, [r, R]),
          D = l.useCallback(() => {
            x.Z.syncIntegration(n.id, r.id);
          }, [n.id, r.id]),
          U = l.useCallback(() => {
            null != r.role_id &&
              (x.Z.setSection(_.pNK.ROLES), x.Z.selectRole(r.role_id));
          }, [r.role_id]),
          {
            serviceName: F,
            channelURL: W,
            expireBehaviorLabel: H,
            syncLabel: G,
            subscribersText: z,
          } = l.useMemo(() => {
            var e, t, n, i, l;
            let a =
              null !==
                (n =
                  null === (t = h.Z.get(r.type)) || void 0 === t
                    ? void 0
                    : null === (e = t.getPlatformUserUrl) || void 0 === e
                      ? void 0
                      : e.call(t, {
                          id: r.account.id,
                          name: r.account.name,
                        })) && void 0 !== n
                ? n
                : "";
            switch (r.type) {
              case d.b.YOUTUBE:
                return {
                  serviceName: Z.intl.string(Z.t.aS6cKy),
                  expireBehaviorLabel: Z.intl.string(Z.t.A5MiqK),
                  syncLabel: Z.intl.string(Z.t["7vHKVV"]),
                  subscribersText: Z.intl.formatToPlainString(Z.t["7lNtcX"], {
                    subscribers:
                      null !== (i = r.subscriber_count) && void 0 !== i ? i : 0,
                  }),
                  channelURL: a,
                };
              case d.b.TWITCH:
              default:
                return {
                  serviceName: Z.intl.string(Z.t.q4pBGx),
                  expireBehaviorLabel: Z.intl.string(Z.t["S/WCrK"]),
                  syncLabel: Z.intl.string(Z.t["0jbPKy"]),
                  subscribersText: Z.intl.formatToPlainString(Z.t.RdUTrq, {
                    subscribers:
                      null !== (l = r.subscriber_count) && void 0 !== l ? l : 0,
                  }),
                  channelURL: a,
                };
            }
          }, [r.account, r.subscriber_count, r.type]),
          { roleLink: V, syncDescriptionText: K } = l.useMemo(() => {
            let e, t;
            let n = null != r.role_id ? k[r.role_id] : null;
            e =
              null != n
                ? (0, i.jsx)(u.Anchor, { onClick: U, children: n.name })
                : Z.intl.string(Z.t.PoWNfX);
            let l = h.Z.get(r.type);
            return {
              roleLink: e,
              syncDescriptionText: (t =
                r.revoked && null != l
                  ? Z.intl.formatToPlainString(Z.t.G16Wjo, {
                      user: r.user,
                      platformName: l.name,
                    })
                  : Z.intl.formatToPlainString(Z.t.unl3AA, {
                      datetime: s()(r.synced_at).calendar(),
                    })),
            };
          }, [k, U, r.revoked, r.role_id, r.synced_at, r.type, r.user]),
          q = l.useMemo(() => {
            let e = g.ZP.getGuildEmoji(n.id),
              t = Object.values(k)
                .filter((e) => null != e.tags && e.tags.integration_id === r.id)
                .map((e) => e.id);
            return r.enable_emoticons
              ? e
                  .sort((e, t) => e.name.localeCompare(t.name))
                  .filter(
                    (e) =>
                      null != r.role_id &&
                      (null == e ? void 0 : e.roles.some((e) => t.includes(e))),
                  )
              : [];
          }, [n.id, k, r.enable_emoticons, r.id, r.role_id]);
        if (
          (l.useEffect(() => {
            (null == o ? void 0 : o.id) === r.id &&
              (null == o ? void 0 : o.enabled) === !0 &&
              w(!1);
          }, [o, r.id]),
          r.enabled && null != r.user)
        )
          t = [
            {
              icon: u.ClockIcon,
              text: M
                ? Z.intl.formatToPlainString(Z.t.gcdJ8P, {
                    timestamp: j.default.extractTimestamp(r.id),
                  })
                : Z.intl.formatToPlainString(Z.t.Nu9sam, {
                    user: null != r.user ? new f.Z(r.user).tag : null,
                    timestamp: j.default.extractTimestamp(r.id),
                  }),
            },
          ];
        else {
          let e = new URL(W);
          t = [
            {
              text: Z.intl.format(Z.t.BegylZ, {
                serviceName: F,
                accountUrl: W,
                accountUrlText: e.hostname + e.pathname,
              }),
            },
          ];
        }
        let Y = (0, i.jsxs)(p.Z, {
            className: E.header,
            align: p.Z.Align.CENTER,
            children: [
              (0, i.jsx)(T.Z, {
                name: "".concat(r.name),
                detailsClassName: E.description,
                details: t,
              }),
              r.enabled
                ? (0, i.jsx)(p.Z.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, i.jsx)(C.Z, {
                      className: E.expandIcon,
                      expanded: y && !O,
                      "aria-hidden": !0,
                    }),
                  })
                : (0, i.jsx)(p.Z.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, i.jsx)(u.Button, {
                      size: u.Button.Sizes.SMALL,
                      color: u.Button.Colors.PRIMARY,
                      onClick: B,
                      disabled: O,
                      children: O
                        ? (0, i.jsx)(N.Z, { width: 24, height: 24 })
                        : (0, i.jsx)(i.Fragment, {
                            children: Z.intl.string(Z.t["7sCN8v"]),
                          }),
                    }),
                  }),
            ],
          }),
          J = null;
        return (
          y &&
            !O &&
            null != o &&
            (J = (0, i.jsxs)(p.Z, {
              className: E.body,
              direction: p.Z.Direction.VERTICAL,
              children: [
                (0, i.jsx)(u.FormDivider, { className: E.topDivider }),
                (function (e) {
                  let {
                    integration: t,
                    labelText: n,
                    subscribersText: l,
                    descriptionText: r,
                    roleLink: a,
                    onSync: o,
                  } = e;
                  return (0, i.jsxs)(p.Z, {
                    children: [
                      (0, i.jsxs)(p.Z.Child, {
                        basis: "50%",
                        children: [
                          (0, i.jsx)(u.FormTitle, {
                            className: S.marginBottom8,
                            children: Z.intl.string(Z.t.eBtNBQ),
                          }),
                          (0, i.jsx)(u.Text, {
                            className: E.syncedRole,
                            color: "header-primary",
                            variant: "text-sm/normal",
                            children: a,
                          }),
                        ],
                      }),
                      (0, i.jsxs)(p.Z.Child, {
                        basis: "50%",
                        children: [
                          (0, i.jsx)(u.FormTitle, {
                            className: S.marginBottom8,
                            children: n,
                          }),
                          (0, i.jsxs)(p.Z, {
                            justify: p.Z.Justify.BETWEEN,
                            children: [
                              (0, i.jsxs)(p.Z, {
                                direction: p.Z.Direction.VERTICAL,
                                children: [
                                  (0, i.jsx)(u.Text, {
                                    color: "header-primary",
                                    variant: "text-sm/normal",
                                    children: l,
                                  }),
                                  (0, i.jsx)(u.Text, {
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    children: r,
                                  }),
                                ],
                              }),
                              (0, i.jsx)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                look: u.Button.Looks.FILLED,
                                color: u.Button.Colors.PRIMARY,
                                disabled: t.syncing || t.revoked,
                                onClick: o,
                                children: t.syncing
                                  ? (0, i.jsx)(N.Z, { width: 24, height: 24 })
                                  : (0, i.jsx)(i.Fragment, {
                                      children: Z.intl.string(Z.t.BkuOOz),
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
                  labelText: G,
                  subscribersText: z,
                  descriptionText: K,
                  roleLink: V,
                  onSync: D,
                }),
                (0, i.jsx)(u.FormDivider, { className: E.midDivider }),
                (function (e) {
                  let {
                    integration: t,
                    labelText: n,
                    onBehaviorChange: l,
                    onGracePeriodChange: r,
                  } = e;
                  return (0, i.jsxs)(p.Z, {
                    children: [
                      (0, i.jsxs)(p.Z.Child, {
                        basis: "50%",
                        children: [
                          (0, i.jsx)(u.FormTitle, {
                            className: S.marginBottom8,
                            children: n,
                          }),
                          (0, i.jsx)(u.SingleSelect, {
                            placeholder: n,
                            value: "".concat(t.expire_behavior),
                            options: [
                              {
                                value: "0",
                                label: Z.intl.string(Z.t["6kpw4u"]),
                              },
                              { value: "1", label: Z.intl.string(Z.t.fQUQIC) },
                            ],
                            isDisabled: t.syncing,
                            onChange: (e) => l(parseInt(e)),
                          }),
                        ],
                      }),
                      (0, i.jsxs)(p.Z.Child, {
                        basis: "50%",
                        children: [
                          (0, i.jsx)(u.FormTitle, {
                            className: S.marginBottom8,
                            children: Z.intl.string(Z.t.uiXMo6),
                          }),
                          (0, i.jsx)(u.SingleSelect, {
                            placeholder: Z.intl.string(Z.t.uiXMo6),
                            maxVisibleItems: 5,
                            value: "".concat(t.expire_grace_period),
                            options: [1, 3, 7, 14, 30].map((e) => ({
                              value: "".concat(e),
                              label: Z.intl.formatToPlainString(Z.t.eGjmy8, {
                                days: e,
                              }),
                            })),
                            onChange: (e) => r(parseInt(e)),
                            isDisabled: t.syncing,
                          }),
                        ],
                      }),
                    ],
                  });
                })({
                  integration: o,
                  labelText: H,
                  onBehaviorChange: function (e) {
                    m.Z.updateIntegration({ expireBehavior: e });
                  },
                  onGracePeriodChange: function (e) {
                    m.Z.updateIntegration({ expireGracePeriod: e });
                  },
                }),
                r.type === d.b.TWITCH
                  ? (function (e) {
                      let { integration: t, emojis: n, onToggle: l } = e;
                      return (0, i.jsxs)(p.Z, {
                        direction: p.Z.Direction.VERTICAL,
                        children: [
                          (0, i.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            className: a()(S.marginTop20, S.marginBottom8),
                            value: t.enable_emoticons,
                            disabled: t.syncing,
                            onChange: (e) => {
                              let { currentTarget: t } = e;
                              return l(t.checked);
                            },
                            children: (0, i.jsx)(u.FormText, {
                              children: Z.intl.string(Z.t["7r4OKi"]),
                            }),
                          }),
                          (0, i.jsx)(p.Z, {
                            wrap: p.Z.Wrap.WRAP,
                            className: E.__invalid_twitchEmojis,
                            children: n.map((e, t) =>
                              (0, i.jsx)(
                                u.Tooltip,
                                {
                                  text: e.name,
                                  children: (t) =>
                                    (0, i.jsx)(
                                      "img",
                                      {
                                        alt: Z.intl.formatToPlainString(
                                          Z.t.n6ZZn5,
                                          { name: e.name },
                                        ),
                                        draggable: !1,
                                        className: a()(
                                          E.emoji,
                                          "emoji",
                                          "jumboable",
                                        ),
                                        src: I.ZP.getEmojiURL({
                                          id: e.id,
                                          animated: e.animated,
                                          size: 28,
                                        }),
                                        ...t,
                                      },
                                      e.name,
                                    ),
                                },
                                t,
                              ),
                            ),
                          }),
                        ],
                      });
                    })({
                      integration: o,
                      emojis: q,
                      onToggle: function (e) {
                        m.Z.updateIntegration({ enableEmoticons: e });
                      },
                    })
                  : null,
                (0, i.jsx)(u.FormDivider, { className: E.bottomDivider }),
                (0, i.jsx)(p.Z, {
                  children: (0, i.jsx)(u.Button, {
                    className: E.disableButton,
                    size: u.Button.Sizes.SMALL,
                    color: u.Button.Colors.RED,
                    look: u.Button.Looks.LINK,
                    onClick: P,
                    children: Z.intl.string(Z.t.M6q6eX),
                  }),
                }),
              ],
            })),
          (0, i.jsx)(u.Card, {
            editable: !0,
            className: E.card,
            children: (0, i.jsxs)(p.Z, {
              direction: p.Z.Direction.VERTICAL,
              children: [
                r.enabled
                  ? (0, i.jsx)(u.Clickable, {
                      className: E.expandableHeader,
                      "aria-expanded": y && !O,
                      onClick: A,
                      children: Y,
                    })
                  : Y,
                J,
              ],
            }),
          })
        );
      }
    },
    491302: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(653041);
      var i = n(200651),
        l = n(192379),
        r = n(481060),
        a = n(668781),
        o = n(139387),
        s = n(308063),
        d = n(600164),
        c = n(259580),
        u = n(768581),
        m = n(486199),
        h = n(981631),
        p = n(388032),
        g = n(88817);
      function x(e) {
        let {
            webhook: t,
            editedWebhook: n,
            channelOptions: x,
            isExpanded: f,
            errors: b,
            onToggleExpand: v,
          } = e,
          C = l.useMemo(() => {
            var e, n;
            return (
              (e = t),
              null != (n = t.avatar) && /^data:/.test(n)
                ? n
                : (0, u.ov)({ id: e.id, avatar: n, discriminator: h.fo$ })
            );
          }, [t]),
          N = l.useCallback(() => {
            (0, r.openModal)((e) =>
              (0, i.jsx)(r.ConfirmModal, {
                ...e,
                header: p.intl.formatToPlainString(p.t.gBKqZ2, {
                  name: t.name,
                }),
                confirmText: p.intl.string(p.t.CMy0Cg),
                cancelText: p.intl.string(p.t["ETE/oK"]),
                onConfirm: () => {
                  s.Z.delete(t.guild_id, t.id).catch(() => {
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
          }, [t.guild_id, t.id, t.name]),
          I = [];
        null != t.source_channel &&
          null != t.source_guild &&
          (I.push({ icon: r.AnnouncementsIcon, text: t.source_channel.name }),
          I.push({
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
                        children: t.source_guild.name,
                      },
                      t.id,
                    ),
                }),
              },
              "guild-source",
            ),
          }));
        let j = null;
        return (
          f &&
            null != n &&
            (j = (0, i.jsxs)("div", {
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
                                value: n.name,
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
                                value: n.channel_id,
                                options: x,
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
                          onClick: N,
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
                  "aria-expanded": f,
                  onClick: v,
                  children: (0, i.jsxs)(d.Z, {
                    align: d.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)(m.Z, {
                        name: t.name,
                        imageSrc: C,
                        detailsClassName: g.__invalid_description,
                        details: I,
                      }),
                      (0, i.jsx)(c.Z, {
                        className: g.expandIcon,
                        expanded: f,
                        "aria-hidden": !0,
                      }),
                    ],
                  }),
                }),
                j,
              ],
            }),
          })
        );
      }
    },
    585835: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      }),
        n(653041),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(243814),
        s = n(442837),
        d = n(481060),
        c = n(367907),
        u = n(213459),
        m = n(600164),
        h = n(488915),
        p = n(970731),
        g = n(598077),
        x = n(626135),
        f = n(486199),
        b = n(929507),
        v = n(981631),
        C = n(388032),
        N = n(713594);
      function I(e) {
        var t, n, r, I, j, T, _;
        let {
            name: Z,
            icon: E,
            imageSrc: S,
            iconBackgroundColor: y,
            iconClassName: A,
            iconWrapperClassName: R,
            details: L,
            integration: k,
            buttonText: O,
            buttonDisabled: w,
            hasNextSection: M,
            onButtonClick: B,
            guildId: P,
            isScrolling: D,
            canShowMigrationTooltip: U,
            trailing: F,
          } = e,
          [W, H] = l.useState(!1),
          [G, z] = l.useState(!1);
        let V =
            ((I = O),
            (j = w),
            (T = M),
            (_ = B),
            null == I || null == _
              ? null
              : T
                ? (0, i.jsxs)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children: I,
                      }),
                      T
                        ? (0, i.jsx)(d.ChevronSmallRightIcon, {
                            size: "custom",
                            color: "currentColor",
                            width: 10,
                            height: 10,
                            className: N.caret,
                          })
                        : null,
                    ],
                  })
                : (0, i.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    look: T ? d.Button.Looks.LINK : d.Button.Looks.FILLED,
                    color: T ? d.Button.Colors.PRIMARY : d.Button.Colors.BRAND,
                    disabled: j,
                    onClick: _,
                    children: I,
                  })),
          K = U && !D && !G && void 0 !== P && null != k;
        l.useEffect(() => {
          K &&
            x.default.track(v.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
              ...(0, c.hH)(P),
              application_id: null == k ? void 0 : k.application.id,
              location: "overview",
            });
        }, [P, null == k ? void 0 : k.application.id, K]);
        let q = K
            ? (0, i.jsx)(d.Popout, {
                renderPopout: () =>
                  (0, i.jsx)(d.Clickable, {
                    onClick: (e) => {
                      e.stopPropagation(),
                        z(!0),
                        b.Z.dismissOverviewTooltip(P, k.integration);
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
            return null != k &&
              null != P &&
              null !==
                (e = h.Z.getApplicationEntitlementsForGuild(
                  k.application.id,
                  P,
                )) &&
              void 0 !== e
              ? e
              : [];
          }),
          J = (0, u.LD)(P, !0),
          X =
            (null == k ? void 0 : k.application) != null &&
            Object.keys(
              null !==
                (r =
                  null === (n = J.result) || void 0 === n
                    ? void 0
                    : null === (t = n.sections[k.application.id]) ||
                        void 0 === t
                      ? void 0
                      : t.commands) && void 0 !== r
                ? r
                : {},
            ).length > 0,
          Q = (0, i.jsxs)(m.Z, {
            children: [
              (0, i.jsx)(f.Z, {
                name: Z,
                icon: E,
                imageSrc: S,
                iconBackgroundColor: y,
                iconClassName: A,
                iconWrapperClassName: R,
                details: L,
                isPremium: Y.length > 0,
              }),
              (0, i.jsx)(m.Z.Child, {
                shrink: 0,
                grow: 0,
                children: (0, i.jsxs)(m.Z, {
                  align: m.Z.Align.CENTER,
                  justify: m.Z.Justify.END,
                  children: [
                    (function (e, t, n) {
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
                                forceOpen: t,
                                text: new g.Z(a.bot).isVerifiedBot()
                                  ? C.intl.string(C.t.xxcTGx)
                                  : C.intl.string(C.t.AOdOYm),
                                className: N.feature,
                                children: (0, i.jsx)(d.RobotIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: N.featureIcon,
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
                                forceOpen: t,
                                text: C.intl.formatToPlainString(
                                  C.t["6HqDfX"],
                                  { count: c.length },
                                ),
                                className: N.feature,
                                children: (0, i.jsx)(d.WebhookIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: N.featureIcon,
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
                          n &&
                          r.push(
                            (0, i.jsx)(
                              "div",
                              {
                                className: N.feature,
                                children: (0, i.jsx)(d.SlashBoxIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: N.featureIcon,
                                }),
                              },
                              "commands",
                            ),
                          ),
                        r
                      );
                    })(k, W, X),
                    q,
                    F,
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
                  null != k &&
                  b.Z.dismissOverviewTooltip(P, k.integration),
                  null == B || B();
              },
              onFocus: () => H(!0),
              onBlur: () => H(!1),
              children: (0, i.jsx)(d.Card, {
                editable: !0,
                className: a()(N.card, N.clickable),
                children: Q,
              }),
            })
          : (0, i.jsx)(d.Card, {
              editable: !0,
              className: N.card,
              children: Q,
            });
      }
    },
    936726: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(47120),
        n(653041);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(544891),
        s = n(846519),
        d = n(481060),
        c = n(668781),
        u = n(139387),
        m = n(308063),
        h = n(600164),
        p = n(208567),
        g = n(598077),
        x = n(259580),
        f = n(768581),
        b = n(572004),
        v = n(709054),
        C = n(51144),
        N = n(486199),
        I = n(981631),
        j = n(388032),
        T = n(475872);
      let _ = (e) => {
        if (null == e) return null;
        let t = new g.Z(e);
        return C.ZP.getUserTag(t);
      };
      function Z(e, t) {
        return null != t && /^data:/.test(t)
          ? t
          : (0, f.ov)({ id: e.id, avatar: t, discriminator: I.fo$ });
      }
      function E(e) {
        let {
            id: t,
            webhook: n,
            editedWebhook: r,
            channelOptions: g,
            isExpanded: f,
            isNew: C,
            errors: E,
            onToggleExpand: S,
          } = e,
          [y, A] = l.useState(!1),
          [R] = l.useState(new s.V7());
        l.useEffect(() => () => R.stop(), [R]);
        let L = l.useMemo(() => Z(n, n.avatar), [n]),
          k = l.useCallback(() => {
            let e = ""
              .concat((0, o.K0)(!1))
              .concat(I.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
            (0, b.JG)(e);
          }, [n]),
          O = l.useCallback(() => {
            (0, d.openModal)((e) =>
              (0, i.jsx)(d.ConfirmModal, {
                ...e,
                header: j.intl.formatToPlainString(j.t.QVFjHh, {
                  name: n.name,
                }),
                confirmText: j.intl.string(j.t["W+K1Fh"]),
                cancelText: j.intl.string(j.t.xNhj0N),
                onConfirm: () => {
                  m.Z.delete(n.guild_id, n.id).catch((e) => {
                    let { status: t } = e;
                    429 === t
                      ? c.Z.show({
                          title: j.intl.string(j.t.N5riYm),
                          body: j.intl.string(j.t.eAxcCQ),
                        })
                      : c.Z.show({
                          title: j.intl.string(j.t.N5riYm),
                          body: j.intl.string(j.t["/4TwKS"]),
                        });
                  });
                },
                children: (0, i.jsx)(d.Text, {
                  variant: "text-md/normal",
                  children: j.intl.format(j.t["rIWe+/"], { name: n.name }),
                }),
              }),
            );
          }, [n.guild_id, n.id, n.name]),
          w = [];
        null != n.user
          ? w.push({
              icon: d.ClockIcon,
              text: j.intl.formatToPlainString(j.t["7EcUbm"], {
                user: _(n.user),
                timestamp: v.default.extractTimestamp(n.id),
              }),
            })
          : w.push({
              icon: d.ClockIcon,
              text: j.intl.formatToPlainString(j.t["7mv59P"], {
                timestamp: v.default.extractTimestamp(n.id),
              }),
            });
        let M = null;
        return (
          f &&
            null != r &&
            (M = (0, i.jsxs)("div", {
              className: T.body,
              children: [
                (0, i.jsx)(d.FormDivider, { className: T.topDivider }),
                (0, i.jsxs)(h.Z, {
                  children: [
                    (0, i.jsx)(h.Z.Child, {
                      shrink: 1,
                      grow: 0,
                      children: (0, i.jsxs)(h.Z, {
                        className: T.avatarWrapper,
                        direction: h.Z.Direction.VERTICAL,
                        children: [
                          (0, i.jsx)(p.Z, {
                            image: r.avatar,
                            onChange: (e) => {
                              u.Z.updateWebhook({ avatar: e });
                            },
                            makeURL: (e) => Z(n, e),
                            imageClassName: T.avatarUploaderInner,
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
                                title: j.intl.string(j.t.ukdxur),
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
                                title: j.intl.string(j.t.GK18KC),
                                children: (0, i.jsx)(d.SearchableSelect, {
                                  value: r.channel_id,
                                  options: g,
                                  onChange: (e) => {
                                    u.Z.updateWebhook({ channelId: e });
                                  },
                                  placeholder: j.intl.string(j.t.r2pts7),
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(d.FormDivider, {
                          className: T.bottomDivider,
                        }),
                        (0, i.jsxs)(h.Z, {
                          children: [
                            (0, i.jsx)(d.Tooltip, {
                              text: j.intl.string(j.t.wwdb3t),
                              forceOpen: y,
                              color: d.TooltipColors.GREEN,
                              disableTooltipPointerEvents: !0,
                              children: (e) => {
                                let {
                                  onClick: t,
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
                                    null == t || t(),
                                      A(!0),
                                      d.AccessibilityAnnouncer.announce(
                                        j.intl.string(j.t.wwdb3t),
                                      ),
                                      R.start(1e3, () => A(!1)),
                                      k();
                                  },
                                  size: d.Button.Sizes.SMALL,
                                  color: d.Button.Colors.PRIMARY,
                                  look: d.Button.Looks.FILLED,
                                  className: T.copyButton,
                                  disabled: null == n.token || "" === n.token,
                                  children: j.intl.string(j.t.Ae9rUV),
                                });
                              },
                            }),
                            (0, i.jsx)(d.Button, {
                              onClick: O,
                              size: d.Button.Sizes.SMALL,
                              color: d.Button.Colors.RED,
                              look: d.Button.Looks.LINK,
                              children: j.intl.string(j.t.jVrUnJ),
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
            id: t,
            className: a()(T.card, C ? T.pulse : null),
            children: (0, i.jsxs)(h.Z, {
              direction: h.Z.Direction.VERTICAL,
              children: [
                (0, i.jsx)(d.Clickable, {
                  className: T.header,
                  "aria-expanded": f,
                  onClick: S,
                  children: (0, i.jsxs)(h.Z, {
                    align: h.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)(N.Z, {
                        name: n.name,
                        imageSrc: L,
                        details: w,
                      }),
                      (0, i.jsx)(x.Z, {
                        className: T.expandIcon,
                        expanded: f,
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
    725875: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      }),
        n(653041),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(481060),
        a = n(139387),
        o = n(933557),
        s = n(699516),
        d = n(594174),
        c = n(491302),
        u = n(936726),
        m = n(981631),
        h = n(388032),
        p = n(669379);
      function g(e) {
        let {
            webhooks: t,
            selectableWebhookChannels: n,
            lastCreatedWebhookId: g,
            editedWebhook: x,
            errors: f,
            canNavigate: b,
          } = e,
          v = l.useMemo(
            () =>
              Object.values(n).map((e) => ({
                value: e.id,
                label: (0, o.F6)(e, d.default, s.Z, !0),
              })),
            [n],
          ),
          C = l.useMemo(() => {
            let e = {};
            for (let i of t)
              if (i.channel_id in e) e[i.channel_id].webhooks.push(i);
              else {
                let t = n[i.channel_id];
                null != t && (e[i.channel_id] = { channel: t, webhooks: [i] });
              }
            return Object.values(e).sort((e, t) =>
              e.channel.name.localeCompare(t.channel.name),
            );
          }, [n, t]),
          N = l.useCallback(
            (e) => {
              b() &&
                (e === (null == x ? void 0 : x.id)
                  ? a.Z.stopEditingWebhook()
                  : a.Z.startEditingWebhook(e));
            },
            [b, x],
          );
        return (0, i.jsx)("div", {
          className: p.__invalid_list,
          children: C.map((e) => {
            let { channel: t, webhooks: n } = e;
            return (function (e) {
              let {
                channel: t,
                webhooks: n,
                channelOptions: l,
                lastCreatedWebhookId: a,
                editedWebhook: g,
                errors: x,
                toggleWebhookExpand: f,
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
                              children: (0, o.F6)(t, d.default, s.Z, !0),
                            },
                            t.id,
                          ),
                      }),
                    }),
                    n.map((e) => {
                      var t;
                      if (e.type === m.ylB.CHANNEL_FOLLOWER)
                        return (0, i.jsx)(
                          c.Z,
                          {
                            webhook: e,
                            editedWebhook: g,
                            channelOptions: l,
                            isExpanded: (null == g ? void 0 : g.id) === e.id,
                            onToggleExpand: () => f(e.id),
                            errors: x,
                          },
                          e.id,
                        );
                      return (0, i.jsx)(
                        u.Z,
                        {
                          id:
                            ((t = e.id),
                            "settings-integrations-webhook-".concat(t)),
                          webhook: e,
                          editedWebhook: g,
                          channelOptions: l,
                          isExpanded: (null == g ? void 0 : g.id) === e.id,
                          isNew: a === e.id,
                          onToggleExpand: () => f(e.id),
                          errors: x,
                        },
                        e.id,
                      );
                    }),
                  ],
                },
                t.id,
              );
            })({
              channel: t,
              webhooks: n,
              channelOptions: v,
              lastCreatedWebhookId: g,
              editedWebhook: x,
              errors: f,
              toggleWebhookExpand: N,
            });
          }),
        });
      }
    },
    685929: function (e, t, n) {
      n.d(t, {
        C: function () {
          return a;
        },
        Y: function () {
          return o;
        },
      });
      var i = n(442837),
        l = n(496675),
        r = n(981631);
      function a(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z;
        return (
          null != e &&
          null != e.linkedLobby &&
          t.can(r.Plq.MANAGE_CHANNELS, e) &&
          t.can(r.Plq.VIEW_CHANNEL, e) &&
          t.can(r.Plq.SEND_MESSAGES, e)
        );
      }
      function o(e) {
        return (0, i.e7)([l.Z], () => a(e, l.Z));
      }
    },
    163400: function (e, t, n) {
      n.d(t, {
        F: function () {
          return s;
        },
        p: function () {
          return o;
        },
      });
      var i = n(442837),
        l = n(984933),
        r = n(496675),
        a = n(685929);
      function o(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : l.ZP,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : r.Z;
        return null == e
          ? []
          : t
              .getChannels(e)
              [l.sH].filter((e) => (0, a.C)(e.channel, n))
              .map((e) => e.channel);
      }
      function s(e) {
        return (0, i.Wu)([r.Z, l.ZP], () => o(e, l.ZP, r.Z));
      }
    },
    296023: function (e, t, n) {
      n.d(t, {
        w: function () {
          return o;
        },
      });
      var i = n(192379),
        l = n(442837),
        r = n(594174),
        a = n(388032);
      function o(e) {
        var t;
        let n =
            null === (t = e.linkedLobby) || void 0 === t ? void 0 : t.linked_at,
          o = (0, l.e7)([r.default], () => {
            var t;
            return r.default.getUser(
              null === (t = e.linkedLobby) || void 0 === t
                ? void 0
                : t.linked_by,
            );
          });
        return i.useMemo(() => {
          if (null == n) return;
          let e = new Date(n);
          return null != o
            ? a.intl.format(a.t["xPrJ+v"], {
                username: o.username,
                linkedAtDate: e,
              })
            : a.intl.formatToPlainString(a.t.EyygeH, { linkedAtDate: e });
        }, [n, o]);
      }
    },
    453628: function (e, t, n) {
      n.d(t, {
        y: function () {
          return l;
        },
      });
      var i,
        l,
        r = n(200651);
      n(192379);
      var a = n(120356),
        o = n.n(a),
        s = n(481060),
        d = n(388032),
        c = n(222569);
      ((i = l || (l = {})).DENY = "DENY"),
        (i.PASSTHROUGH = "PASSTHROUGH"),
        (i.ALLOW = "ALLOW");
      let u = Object.keys(l);
      function m(e) {
        let {
            value: t = "PASSTHROUGH",
            onChange: n,
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
                isSelected: t === e,
                onSelect: (e) => {
                  t !== e && !l && n(e);
                },
              },
              e,
            ),
          ),
        });
      }
      function h(e) {
        let t,
          n,
          i,
          { type: l, onSelect: a, isSelected: u } = e;
        switch (l) {
          case "DENY":
            (i = d.intl.string(d.t["6639Oz"])),
              (t = s.XSmallIcon),
              (n = c.deny);
            break;
          case "ALLOW":
            (i = d.intl.string(d.t.RzDfSk)),
              (t = s.CheckmarkLargeIcon),
              (n = c.allow);
            break;
          default:
            (i = d.intl.string(d.t.ujC3ZW)),
              (t = s.SlashIcon),
              (n = c.passthrough);
        }
        let m = (0, s.useRadioItem)({ isSelected: u, label: i });
        return (0, r.jsx)(s.Clickable, {
          className: o()(c.item, n, { [c.selected]: u }),
          onClick: () => a(l),
          ...m,
          children: (0, r.jsx)(t, { color: "currentColor", size: "xs" }),
        });
      }
      (m.Types = l), (t.Z = m);
    },
    996987: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(600164),
        a = n(313201),
        o = n(63063),
        s = n(453628),
        d = n(388032),
        c = n(232186);
      function u(e) {
        let {
            value: t,
            onChange: n,
            children: u,
            note: m,
            helpdeskArticleId: h,
            style: p,
            disabled: g = !1,
            hideBorder: x = !1,
            className: f = c.marginBottom20,
          } = e,
          b = (0, a.Dt)();
        return (0, i.jsxs)(r.Z, {
          style: p,
          className: f,
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
                    value: t,
                    onChange: n,
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
            !x &&
              (0, i.jsx)(r.Z.Child, {
                className: c.marginTop20,
                children: (0, i.jsx)(l.FormDivider, {}),
              }),
          ],
        });
      }
      s.Z.Types, (u.Types = s.Z.Types);
    },
    531087: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(331595),
        o = n(554869);
      function s(e) {
        let {
          width: t = 16,
          height: n = 16,
          color: l = "currentColor",
          foreground: s,
          className: d,
          ...c
        } = e;
        return (0, i.jsx)("svg", {
          className: r()(o.updateAvailable, d),
          ...(0, a.Z)(c),
          width: t,
          height: n,
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
    951284: function (e, t, n) {
      var i, l;
      n.d(t, {
        b: function () {
          return i;
        },
      }),
        n(47120),
        ((l = i || (i = {})).DISCORD = "discord"),
        (l.TWITCH = "twitch"),
        (l.YOUTUBE = "youtube"),
        (l.GUILD_SUBSCRIPTION = "guild_subscription");
    },
    226701: function (e, t, n) {
      e.exports = { title: "title_cf92b5", icon: "icon_cf92b5" };
    },
    609010: function (e, t, n) {
      e.exports = {
        layout: "layout_ff90b2",
        sidebar: "sidebar_ff90b2",
        content: "content_ff90b2",
        sidebarScrollable: "sidebarScrollable_ff90b2",
        scroller: "scroller_ff90b2",
      };
    },
    506452: function (e, t, n) {
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
    343854: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_ae0ed5",
        mainContainer: "mainContainer_ae0ed5",
        pauseContainer: "pauseContainer_ae0ed5",
        pauseText: "pauseText_ae0ed5",
        toggle: "toggle_ae0ed5",
      };
    },
    19751: function (e, t, n) {
      e.exports = {
        icon: "icon_b119de",
        identifier: "identifier_b119de",
        item: "item_b119de",
        statusContainer: "statusContainer_b119de",
        statusLine: "statusLine_b119de",
        statusIcon: "statusIcon_b119de",
      };
    },
    352031: function (e, t, n) {
      e.exports = { emptyCard: "emptyCard_e74f7d" };
    },
    316983: function (e, t, n) {
      e.exports = {
        channelIcon: "channelIcon_a93d5d",
        lockIcon: "lockIcon_a93d5d",
        identifier: "identifier_a93d5d",
        image: "image_a93d5d " + n("864435").desaturateUserColors,
        shield: "shield_a93d5d " + n("864435").desaturateUserColors,
        roleName: "roleName_a93d5d",
        tag: "tag_a93d5d",
      };
    },
    334575: function (e, t, n) {
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
    148048: function (e, t, n) {
      e.exports = {
        addButton: "addButton_f575ef",
        listContainer: "listContainer_f575ef",
        tooltip: "tooltip_f575ef",
        requiredPermissionsBanner: "requiredPermissionsBanner_f575ef",
        message: "message_f575ef",
        icon: "icon_f575ef",
      };
    },
    301882: function (e, t, n) {
      e.exports = {
        group: "group_b05c08",
        disabled: "disabled_b05c08",
        item: "item_b05c08",
        allow: "allow_b05c08",
        selected: "selected_b05c08",
        deny: "deny_b05c08",
      };
    },
    195356: function (e, t, n) {
      e.exports = {
        card: "card_dedfd1",
        inModal: "inModal_dedfd1",
        cardHeader: "cardHeader_dedfd1",
        title: "title_dedfd1",
      };
    },
    859600: function (e, t, n) {
      e.exports = { applicationPermissions: "applicationPermissions_c50086" };
    },
    170465: function (e, t, n) {
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
    640041: function (e, t, n) {
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
    755527: function (e, t, n) {
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
        noPadding: "noPadding_cedfaf",
        content: "content_cedfaf",
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
    24182: function (e, t, n) {
      e.exports = {
        settingsContent: "settingsContent_eaf7c3 noScroll_eaf7c3",
        switch: "switch_eaf7c3",
      };
    },
    747536: function (e, t, n) {
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
    172: function (e, t, n) {
      e.exports = {
        header: "header_bfc5ea",
        icon: "icon_bfc5ea",
        name: "name_bfc5ea",
        title: "title_bfc5ea",
      };
    },
    380813: function (e, t, n) {
      e.exports = {
        headerDivider: "headerDivider_d32069",
        headerDescription: "headerDescription_d32069",
        section: "section_d32069",
        emptyCard: "emptyCard_d32069",
      };
    },
    36635: function (e, t, n) {
      e.exports = {
        headerDivider: "headerDivider_ab06eb",
        platformIcon: "platformIcon_ab06eb",
        helpText: "helpText_ab06eb",
      };
    },
    471199: function (e, t, n) {
      e.exports = {
        headerDivider: "headerDivider_cb4c8f",
        emptyStateImage: "emptyStateImage_cb4c8f",
        emptyStateButton: "emptyStateButton_cb4c8f",
      };
    },
    926870: function (e, t, n) {
      e.exports = {
        headerDivider: "headerDivider_bc1f95",
        header: "header_bc1f95",
        applicationGroup: "applicationGroup_bc1f95",
        iconwrapper: "iconwrapper_bc1f95",
      };
    },
    341701: function (e, t, n) {
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
    112151: function (e, t, n) {
      e.exports = {
        headerDivider: "headerDivider_b363b0",
        createButton: "createButton_b363b0",
        emptyStateImage: "emptyStateImage_b363b0",
        emptyStateButton: "emptyStateButton_b363b0",
      };
    },
    172168: function (e, t, n) {
      e.exports = {
        breadcrumbs: "breadcrumbs_f9e5d0",
        breadcrumbActive: "breadcrumbActive_f9e5d0",
        breadcrumbInactive: "breadcrumbInactive_f9e5d0",
      };
    },
    449650: function (e, t, n) {
      e.exports = {
        card: "card_f925ba",
        iconWrapper: "iconWrapper_f925ba",
        tag: "tag_f925ba",
        divider: "divider_f925ba",
        permissionHeader: "permissionHeader_f925ba",
        rolePills: "rolePills_f925ba",
      };
    },
    563949: function (e, t, n) {
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
    88817: function (e, t, n) {
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
    713594: function (e, t, n) {
      e.exports = {
        card: "card_ea2a21",
        caret: "caret_ea2a21",
        feature: "feature_ea2a21",
        featureIcon: "featureIcon_ea2a21",
        clickable: "clickable_ea2a21",
      };
    },
    475872: function (e, t, n) {
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
    669379: function (e, t, n) {
      e.exports = {
        groupHeader: "groupHeader_fef602",
        channelName: "channelName_fef602",
      };
    },
    222569: function (e, t, n) {
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
    554869: function (e, t, n) {
      e.exports = { updateAvailable: "updateAvailable_e3584a" };
    },
  },
]);
//# sourceMappingURL=88b661a2378484282696.js.map
