"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12670"],
  {
    369994: function (e, n, t) {
      t.d(n, {
        C4: function () {
          return j;
        },
        Fi: function () {
          return h;
        },
        KK: function () {
          return u;
        },
        f6: function () {
          return m;
        },
        n: function () {
          return x;
        },
      }),
        t(47120);
      var l = t(913527),
        i = t.n(l),
        r = t(544891),
        a = t(367907),
        s = t(434404),
        o = t(430824),
        c = t(626135),
        d = t(981631);
      function u(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== n.length)
          c.default.track(d.rMx.GUILD_RAID_REPORTED, {
            ...(0, a.hH)(e),
            guild_id: e,
            raid_types: n,
          });
      }
      async function m(e, n) {
        let t = new Set(e.features);
        t.has(d.oNc.COMMUNITY)
          ? n
            ? t.delete(d.oNc.RAID_ALERTS_DISABLED)
            : t.add(d.oNc.RAID_ALERTS_DISABLED)
          : n
            ? t.add(d.oNc.NON_COMMUNITY_RAID_ALERTS)
            : t.delete(d.oNc.NON_COMMUNITY_RAID_ALERTS),
          await s.Z.saveGuild(e.id, { features: t }, { throwErr: !0 });
      }
      async function x(e, n, t, l) {
        let a = i()().add(l, "hours").toISOString();
        return await r.tn.put({
          url: d.ANM.GUILD_INCIDENT_ACTIONS(e),
          body: {
            invites_disabled_until: n ? a : null,
            dms_disabled_until: t ? a : null,
          },
          rejectWithError: !1,
        });
      }
      async function h(e, n, t) {
        let l = o.Z.getGuild(e);
        return null == (null == l ? void 0 : l.getSafetyAlertsChannelId())
          ? null
          : await r.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: n, reason: t },
              rejectWithError: !1,
            });
      }
      async function j(e) {
        let n = o.Z.getGuild(e);
        return null == (null == n ? void 0 : n.getSafetyAlertsChannelId())
          ? null
          : await r.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_RAID(e),
              rejectWithError: !1,
            });
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
      var l = t(442837);
      t(467319);
      var i = t(496675),
        r = t(533244),
        a = t(487419),
        s = t(981631);
      function o(e) {
        let n = (0, l.e7)(
            [i.Z],
            () =>
              (function (e) {
                let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : i.Z;
                return (
                  n.can(s.Plq.BAN_MEMBERS, e) ||
                  n.can(s.Plq.KICK_MEMBERS, e) ||
                  n.can(s.Plq.MANAGE_GUILD, e)
                );
              })(e, i.Z),
            [e],
          ),
          t = (0, l.e7)(
            [a.Z],
            () => (null != e ? a.Z.getGuildIncident(e.id) : null),
            [e],
          );
        return !(null != t && (0, r.i9)(t)) && n;
      }
      function c(e) {
        return (0, l.e7)(
          [i.Z],
          () =>
            (function (e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : i.Z;
              return n.can(s.Plq.MANAGE_GUILD, e);
            })(e, i.Z),
          [e],
        );
      }
    },
    821312: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(831209),
        o = t(481060),
        c = t(367907),
        d = t(177862),
        u = t(981631),
        m = t(388032),
        x = t(581850);
      function h(e) {
        let { guildId: n, transitionState: t, onClose: r } = e,
          [h, j] = i.useState([]),
          [C, b] = i.useState(),
          f = [
            { text: m.intl.string(m.t["//3pvr"]), value: d.C2.DM_SPAM },
            { text: m.intl.string(m.t.SdVsio), value: d.C2.MENTION_SPAM },
            { text: m.intl.string(m.t.uTiSVF), value: d.C2.CHANNEL_SPAM },
            { text: m.intl.string(m.t.GQczU1), value: d.C2.SUS_NEW_MEMBERS },
            { text: m.intl.string(m.t.AAgqy8), value: d.C2.CHANGING_SETTINGS },
            { text: m.intl.string(m.t.ryPKb2), value: d.C2.OTHER },
          ];
        function v(e) {
          h.includes(e)
            ? j((n) => n.filter((n) => n !== e))
            : j((n) => [...n, e]);
        }
        return null == n
          ? (r(), null)
          : (0, l.jsxs)(o.ModalRoot, {
              transitionState: t,
              size: o.ModalSize.MEDIUM,
              children: [
                (0, l.jsx)(o.ModalHeader, {
                  separator: !0,
                  children: (0, l.jsxs)("div", {
                    className: x.headerContainer,
                    children: [
                      (0, l.jsxs)("div", {
                        className: x.headerText,
                        children: [
                          (0, l.jsx)(o.LockIcon, {
                            size: "xs",
                            color: s.Z.INTERACTIVE_NORMAL,
                          }),
                          (0, l.jsx)(o.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children: m.intl.string(m.t.f5hd9P),
                          }),
                        ],
                      }),
                      (0, l.jsx)(o.Clickable, {
                        onClick: r,
                        children: (0, l.jsx)(o.XSmallIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: x.closeIcon,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(o.ModalContent, {
                  children: (0, l.jsx)("div", {
                    className: x.options,
                    children: f.map((e) => {
                      let { text: n, value: t } = e;
                      return (0, l.jsxs)(
                        "div",
                        {
                          className: a()(x.optionContainer, {
                            [x.optionContainerOther]: t === d.C2.OTHER,
                          }),
                          children: [
                            (0, l.jsxs)(o.Clickable, {
                              className: x.optionText,
                              onClick: () => v(t),
                              children: [
                                (0, l.jsx)("div", {
                                  children: (0, l.jsx)(o.Checkbox, {
                                    type: o.Checkbox.Types.INVERTED,
                                    size: 20,
                                    value: h.includes(t),
                                    onChange: () => v(t),
                                  }),
                                }),
                                (0, l.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  color: h.includes(t)
                                    ? "interactive-active"
                                    : "interactive-normal",
                                  children: n,
                                }),
                              ],
                            }),
                            t === d.C2.OTHER &&
                              h.includes(d.C2.OTHER) &&
                              (0, l.jsx)("div", {
                                className: x.textboxContainer,
                                children: (0, l.jsx)(o.TextArea, {
                                  className: x.serverLockdownReasonText,
                                  placeholder: m.intl.string(m.t["PAM+JS"]),
                                  onChange: (e) => b(e),
                                  value: C,
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
                (0, l.jsx)(o.ModalFooter, {
                  children: (0, l.jsx)(o.Button, {
                    onClick: function () {
                      (0, c.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                        raid_lockdown_feedback_type: h,
                        raid_lockdown_feedback_other_reason: C,
                        guild_id: n,
                      }),
                        r();
                    },
                    color: o.Button.Colors.BRAND,
                    look: o.Button.Looks.FILLED,
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
            return N;
          },
        }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(831209),
        a = t(442837),
        s = t(481060),
        o = t(688465),
        c = t(430824),
        d = t(626135),
        u = t(369994),
        m = t(162157),
        x = t(533244),
        h = t(487419),
        j = t(821312),
        C = t(676770),
        b = t(981631),
        f = t(388032),
        v = t(890993);
      function N(e) {
        let {
            guildId: n,
            transitionState: t,
            onClose: N,
            analyticsData: g,
          } = e,
          I = (0, a.e7)([c.Z], () => c.Z.getGuild(n), [n]),
          _ = !!(null == I ? void 0 : I.hasFeature(b.oNc.INVITES_DISABLED)),
          [E] = i.useState(!1),
          [T, S] = i.useState(C.Fl),
          p = (0, a.e7)([h.Z], () => h.Z.getGuildIncident(n)),
          M = (0, m.BT)(I),
          R = (0, x.SG)(p) || _,
          A = (0, x.sN)(p),
          [Z, k] = i.useState(R),
          [L, P] = i.useState(A),
          [B, w] = i.useState(!1),
          D = Z !== R || L !== A || B,
          y = _ && !M;
        if (null == I) return N(), null;
        function G() {
          k((e) => !e);
        }
        return (0, l.jsxs)(s.ModalRoot, {
          transitionState: t,
          size: s.ModalSize.MEDIUM,
          children: [
            (0, l.jsx)(s.ModalHeader, {
              separator: !0,
              children: (0, l.jsxs)("div", {
                className: v.headerContainer,
                children: [
                  (0, l.jsx)(s.LockIcon, {
                    size: "xs",
                    color: r.Z.INTERACTIVE_NORMAL,
                  }),
                  (0, l.jsx)(s.Heading, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: f.intl.string(f.t.oCYAc3),
                  }),
                  (0, l.jsx)(o.Z, {}),
                ],
              }),
            }),
            (0, l.jsx)(s.ModalContent, {
              children: (0, l.jsxs)("div", {
                className: v.mainContainer,
                children: [
                  (0, l.jsx)(s.Select, {
                    placeholder: f.intl.string(f.t.vKYZzc),
                    options: (0, C.c1)(),
                    select: (e) => {
                      S(e), w(!0);
                    },
                    isSelected: (e) => e === T,
                    serialize: (e) => String(e),
                  }),
                  (0, l.jsxs)("div", {
                    className: v.pauseContainer,
                    children: [
                      (0, l.jsxs)("div", {
                        className: v.pauseText,
                        children: [
                          (0, l.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: f.intl.string(f.t.Uwsjn5),
                          }),
                          (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: f.intl.string(f.t.qPJkZm),
                          }),
                        ],
                      }),
                      (0, l.jsx)(s.Tooltip, {
                        text: f.intl.string(f.t["9GPbsb"]),
                        shouldShow: _,
                        children: (e) =>
                          (0, l.jsx)("div", {
                            ...e,
                            children: (0, l.jsx)(s.Switch, {
                              className: v.toggle,
                              onChange: G,
                              checked: Z,
                              disabled: y,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: v.pauseContainer,
                    children: [
                      (0, l.jsxs)("div", {
                        className: v.pauseText,
                        children: [
                          (0, l.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: f.intl.string(f.t.wrDmAw),
                          }),
                          (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: f.intl.string(f.t.UQbJW1),
                          }),
                        ],
                      }),
                      (0, l.jsx)(s.Switch, {
                        className: v.toggle,
                        onChange: function () {
                          P((e) => !e);
                        },
                        checked: L,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, l.jsxs)(s.ModalFooter, {
              children: [
                (0, l.jsx)(s.Button, {
                  onClick: () => {
                    (R || A) && !Z && !L
                      ? ((0, u.n)(I.id, !1, !1),
                        (0, s.openModalLazy)(() =>
                          Promise.resolve((e) =>
                            (0, l.jsx)(j.Z, { ...e, guildId: n }),
                          ),
                        ))
                      : (0, u.n)(I.id, Z, L, T);
                    let { source: e, alertType: t, messageId: i } = g;
                    d.default.track(
                      b.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE,
                      {
                        guild_id: n,
                        source: e,
                        raid_alert_id: i,
                        raid_alert_type: t,
                        intervention_type_enabled: (0, x.sO)(Z, L),
                        intervention_type_disabled: (0, x.lk)(Z, L),
                        duration: 60 * T,
                      },
                    ),
                      N();
                  },
                  color: s.Button.Colors.BRAND,
                  look: s.Button.Looks.FILLED,
                  submitting: E,
                  disabled: !D,
                  children: f.intl.string(f.t["pwm/z8"]),
                }),
                (0, l.jsx)(s.Button, {
                  onClick: N,
                  color: s.Button.Colors.PRIMARY,
                  look: s.Button.Looks.LINK,
                  disabled: E,
                  children: f.intl.string(f.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    328977: function (e, n, t) {
      t.d(n, {
        L: function () {
          return r;
        },
      });
      var l = t(442837),
        i = t(826581);
      function r(e) {
        let { guildId: n } = e;
        return (0, l.e7)([i.Z], () => i.Z.getSelectedGuildJoinRequest(n), [n]);
      }
    },
    412222: function (e, n, t) {
      t.d(n, {
        C: function () {
          return r;
        },
      });
      var l = t(442837),
        i = t(826581);
      function r(e) {
        let { guildId: n } = e;
        return (0, l.e7)([i.Z], () => i.Z.getSelectedSortOrder(n), [n]);
      }
    },
    223312: function (e, n, t) {
      t.d(n, {
        j: function () {
          return s;
        },
      }),
        t(47120);
      var l = t(192379),
        i = t(442837),
        r = t(826581),
        a = t(246364);
      function s(e) {
        let { guildId: n, applicationStatus: t, sortOrder: s } = e,
          o = (0, i.e7)([r.Z], () => r.Z.getRequests(n, t), [t, n]);
        return {
          guildJoinRequests: l.useMemo(
            () => (s === a.Nw.TIMESTAMP_DESC ? [...o].reverse() : o),
            [s, o],
          ),
        };
      }
    },
    666233: function (e, n, t) {
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        a = t(594174),
        s = t(63568),
        o = t(246364),
        c = t(489813),
        d = t(186078),
        u = t(73880),
        m = t(196345),
        x = t(707592),
        h = t(476770),
        j = t(483760),
        C = t(465588),
        b = t(644929),
        f = t(814960),
        v = t(388032);
      n.Z = function (e) {
        let {
            guildId: n,
            formFields: t,
            user: N,
            showRequirements: g = !0,
          } = e,
          I = (0, i.e7)([a.default], () =>
            null != N ? N : a.default.getCurrentUser(),
          ),
          _ = (0, s.jS)(n, "DisabledFormRenderer");
        if (null == I) return null;
        let E = _ ? h.Ih : c.Ih;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            g &&
              (0, l.jsx)(E, {
                icon: r.ShieldIcon,
                text: v.intl.string(v.t.v2z4c3),
                meetsRequirement: !0,
              }),
            t.map((e, n) =>
              _
                ? (function (e, n) {
                    switch (e.field_type) {
                      case o.QJ.TERMS:
                        return (0, l.jsx)(b.QC, { formField: e }, n);
                      case o.QJ.TEXT_INPUT:
                        return (0, l.jsx)(f.YJ, { formField: e }, n);
                      case o.QJ.PARAGRAPH:
                        return (0, l.jsx)(C.jn, { formField: e }, n);
                      case o.QJ.MULTIPLE_CHOICE:
                        return (0, l.jsx)(j.QH, { formField: e }, n);
                    }
                  })(e, n)
                : (function (e, n) {
                    switch (e.field_type) {
                      case o.QJ.TERMS:
                        return (0, l.jsx)(m.QC, { formField: e }, n);
                      case o.QJ.TEXT_INPUT:
                        return (0, l.jsx)(x.YJ, { formField: e }, n);
                      case o.QJ.PARAGRAPH:
                        return (0, l.jsx)(u.jn, { formField: e }, n);
                      case o.QJ.MULTIPLE_CHOICE:
                        return (0, l.jsx)(d.QH, { formField: e }, n);
                    }
                  })(e, n),
            ),
          ],
        });
      };
    },
    384433: function (e, n, t) {
      t.d(n, {
        e: function () {
          return i;
        },
      });
      var l,
        i,
        r = t(246364);
      ((l = i || (i = {})).ALL_MEMBERS = "ALL_MEMBERS"),
        (l[(l.PENDING = r.wB.SUBMITTED)] = "PENDING"),
        (l[(l.REJECTED = r.wB.REJECTED)] = "REJECTED");
    },
    575766: function (e, n, t) {
      t.d(n, {
        n: function () {
          return r;
        },
      });
      var l = t(192379),
        i = t(941028);
      function r(e) {
        l.useEffect(
          () => (
            i.k$(e),
            () => {
              i.kr(e);
            }
          ),
          [e],
        );
      }
    },
    901066: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return R;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(442837),
        o = t(481060),
        c = t(906732),
        d = t(979264),
        u = t(252618),
        m = t(693546),
        x = t(246364),
        h = t(328977),
        j = t(666233),
        C = t(360328),
        b = t(171368),
        f = t(598077),
        v = t(430824),
        N = t(51144),
        g = t(981631),
        I = t(308083),
        _ = t(388032),
        E = t(711),
        T = t(758982);
      function S(e) {
        let { icon: n, label: t, onClick: i, disabled: r } = e;
        return (0, l.jsxs)(o.Clickable, {
          className: a()(E.actionButton, { [E.disabled]: r }),
          onClick: r ? g.dG4 : i,
          "aria-label": t,
          children: [
            (0, l.jsx)(n, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20,
            }),
            (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "none",
              children: t,
            }),
          ],
        });
      }
      function p(e) {
        let { user: n, guildId: t, joinRequest: i } = e,
          { analyticsLocations: r } = (0, c.ZP)(),
          s = () => {
            (0, b.openUserProfileModal)({
              userId: n.id,
              joinRequestId: i.joinRequestId,
              sourceAnalyticsLocations: r,
              analyticsLocation: {
                section: g.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                object: g.qAy.JOIN_REQUEST,
              },
            });
          };
        return (0, l.jsxs)("div", {
          className: E.infoContainer,
          children: [
            (0, l.jsxs)("div", {
              className: T.memberNameContainer,
              children: [
                (0, l.jsx)(o.Clickable, {
                  onClick: s,
                  className: a()(E.clickable, T.memberAvatar),
                  children: (0, l.jsx)(o.Avatar, {
                    src: n.getAvatarURL(t, 48),
                    "aria-label": n.username,
                    size: o.AvatarSizes.SIZE_48,
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: T.memberNameAndTagContainer,
                  children: [
                    (0, l.jsxs)("div", {
                      className: T.memberNameTextContainer,
                      children: [
                        (0, l.jsx)(o.Clickable, {
                          onClick: s,
                          className: E.clickable,
                          children: (0, l.jsx)(o.Text, {
                            variant: "text-lg/medium",
                            children: null == n ? void 0 : n.globalName,
                          }),
                        }),
                        (0, l.jsx)(d.ZP, {
                          primaryGuild: null == n ? void 0 : n.primaryGuild,
                          userId: null == n ? void 0 : n.id,
                          contextGuildId: t,
                          badgeSize: I.NC.SIZE_16,
                          textVariant: "heading-md/semibold",
                          className: T.memberClanTag,
                          containerClassName: T.memberClanTagContainer,
                        }),
                      ],
                    }),
                    (0, l.jsx)(o.Clickable, {
                      onClick: s,
                      className: E.clickable,
                      children: (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-normal",
                        children: N.ZP.getUserTag(n),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)(o.Clickable, {
              className: T.closeAction,
              onClick: () => m.Z.setSelectedGuildJoinRequest(t, null),
              children: (0, l.jsx)(o.XSmallIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
          ],
        });
      }
      function M(e) {
        let { user: n, guildId: t, joinRequest: i } = e,
          {
            approveRequest: r,
            rejectRequest: a,
            handleOpenInterview: s,
            submitting: c,
          } = (0, C.s)(t, n.id, i.joinRequestId, i.interviewChannelId);
        return (0, l.jsxs)("div", {
          className: E.actionRow,
          children: [
            (0, l.jsx)(S, {
              icon: o.CircleCheckIcon,
              label: _.intl.string(_.t.BzjDQE),
              onClick: r,
              disabled: c,
            }),
            (0, l.jsx)(S, {
              icon: o.CircleXIcon,
              label: _.intl.string(_.t.hDtbs7),
              onClick: a,
              disabled: c,
            }),
            (0, l.jsx)(S, {
              icon: o.ChatIcon,
              label: _.intl.string(_.t.KQeYoK),
              onClick: s,
              disabled: c,
            }),
          ],
        });
      }
      function R(e) {
        let { guildId: n } = e,
          t = (0, h.L)({ guildId: n }),
          { user: r } = null != t ? t : {},
          c = i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.formResponses) &&
              void 0 !== e
              ? e
              : [];
          }, [null == t ? void 0 : t.formResponses]),
          d = i.useMemo(() => (null != r ? new f.Z(r) : null), [r]),
          m = (0, s.e7)([v.Z], () => v.Z.getGuild(n), [n]);
        return ((0, u.Tt)({
          subsection: _.intl.string(_.t.nqrK8f),
          location: null == m ? void 0 : m.name,
        }),
        null != t && null != m && null != d && null != r)
          ? (0, l.jsx)("section", {
              className: E.sidebar,
              children: (0, l.jsx)(o.Scroller, {
                children: (0, l.jsxs)("div", {
                  className: E.innerContainer,
                  children: [
                    (0, l.jsxs)("div", {
                      className: E.cardContainer,
                      children: [
                        (0, l.jsx)(p, { user: d, guildId: n, joinRequest: t }),
                        t.applicationStatus === x.wB.SUBMITTED &&
                          (0, l.jsx)(M, {
                            user: d,
                            guildId: n,
                            joinRequest: t,
                          }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: a()(E.cardContainer, E.responsesContainer),
                      children: (0, l.jsx)(j.Z, {
                        guildId: m.id,
                        formFields: c,
                        user: d,
                        showRequirements: !1,
                      }),
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
    },
    987491: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return w;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(913527),
        o = t.n(s),
        c = t(442837),
        d = t(481060),
        u = t(239091),
        m = t(700582),
        x = t(979264),
        h = t(693546),
        j = t(826581),
        C = t(246364),
        b = t(98493),
        f = t(328977),
        v = t(412222),
        N = t(223312),
        g = t(768762),
        I = t(171368),
        _ = t(598077),
        E = t(430824),
        T = t(51144),
        S = t(388032),
        p = t(313532),
        M = t(319522),
        R = t(589777),
        A = t(431976);
      function Z(e) {
        let { status: n } = e;
        return (0, l.jsxs)("div", {
          className: p.emptyContainer,
          children: [
            (0, l.jsx)(d.CheckmarkLargeIcon, {
              size: "md",
              color: "currentColor",
              className: p.checkmark,
            }),
            (0, l.jsx)(d.Heading, {
              variant: "heading-md/medium",
              children:
                n === C.wB.REJECTED
                  ? S.intl.string(S.t["7YSJ6e"])
                  : S.intl.string(S.t["/wqiSk"]),
            }),
            (0, l.jsx)(d.Text, {
              color: "text-muted",
              variant: "text-sm/medium",
              children:
                n === C.wB.REJECTED
                  ? S.intl.string(S.t.i05OUV)
                  : S.intl.string(S.t.o47YZm),
            }),
          ],
        });
      }
      function k(e) {
        let { sortOrder: n, onSortChange: t } = e;
        return (0, l.jsx)("thead", {
          children: (0, l.jsxs)("tr", {
            className: R.tableHeaderRow,
            children: [
              (0, l.jsx)("th", {
                className: p.headerCell,
                children: (0, l.jsx)(d.Text, {
                  variant: "eyebrow",
                  color: "interactive-normal",
                  children: S.intl.string(S.t.Es7n9f),
                }),
              }),
              (0, l.jsx)("th", {
                className: a()(p.headerCell, A.mediumCol),
                children: (0, l.jsxs)(d.Clickable, {
                  className: p.sortItem,
                  onClick: t,
                  children: [
                    (0, l.jsx)(d.Text, {
                      variant: "eyebrow",
                      color: "interactive-normal",
                      children: S.intl.string(S.t.EZ5QWF),
                    }),
                    n === C.Nw.TIMESTAMP_ASC
                      ? (0, l.jsx)(g.Z, {
                          className: p.sortIcon,
                          direction: g.Z.Directions.UP,
                        })
                      : (0, l.jsx)(g.Z, {
                          className: p.sortIcon,
                          direction: g.Z.Directions.DOWN,
                        }),
                  ],
                }),
              }),
              (0, l.jsx)("th", {
                className: a()(p.headerCell, p.moreOptionsCol),
                children: (0, l.jsx)(d.Text, {
                  variant: "eyebrow",
                  color: "interactive-normal",
                  children: S.intl.string(S.t["5Q9xGh"]),
                }),
              }),
            ],
          }),
        });
      }
      let L = i.memo(function (e) {
          let { joinRequest: n, user: t } = e,
            { joinRequestId: r, guildId: a } = n,
            s = i.useCallback(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  (0, I.openUserProfileModal)({
                    userId: t.id,
                    joinRequestId: r,
                  });
              },
              [t, r],
            );
          return (0, l.jsxs)("div", {
            className: A.memberNameContainer,
            children: [
              (0, l.jsx)(d.Clickable, {
                className: A.memberAvatar,
                onClick: s,
                children: (0, l.jsx)(m.Z, { user: t }),
              }),
              (0, l.jsx)("div", {
                className: A.memberName,
                children: (0, l.jsx)(d.Text, {
                  variant: "text-sm/medium",
                  children: (0, l.jsxs)(d.Clickable, {
                    onClick: s,
                    className: A.nameContainer,
                    children: [
                      t.globalName,
                      (0, l.jsx)(x.ZP, {
                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                        userId: null == t ? void 0 : t.id,
                        contextGuildId: a,
                        containerClassName: A.memberClanTag,
                      }),
                    ],
                  }),
                }),
              }),
              (0, l.jsx)("div", {
                className: A.memberGlobalName,
                children: (0, l.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  tag: "span",
                  children: (0, l.jsx)(d.Clickable, {
                    onClick: s,
                    tag: "span",
                    children: T.ZP.getUserTag(t),
                  }),
                }),
              }),
            ],
          });
        }),
        P = i.memo(function (e) {
          let { joinRequest: n, onSelect: r } = e,
            { guildId: s, createdAt: m, applicationStatus: x } = n,
            h = i.useMemo(() => new _.Z(n.user), [n.user]),
            j = (0, f.L)({ guildId: s }),
            b = (0, c.e7)([E.Z], () => E.Z.getGuild(s)),
            v = x === C.wB.SUBMITTED,
            N = (e) => {
              (0, u.jW)(
                e,
                async () => {
                  let { default: e } = await t
                    .e("11451")
                    .then(t.bind(t, 597409));
                  return (n) => (0, l.jsx)(e, { ...n, guild: b, user: h });
                },
                { position: "bottom", align: "right" },
              );
            };
          return null == h
            ? null
            : (0, l.jsxs)("tr", {
                onClick: r,
                className: a()(A.roundedRow, A.memberRowContainer, {
                  [A.selected]:
                    (null == j ? void 0 : j.joinRequestId) === n.joinRequestId,
                }),
                children: [
                  (0, l.jsx)("td", {
                    children: (0, l.jsx)(L, { joinRequest: n, user: h }),
                  }),
                  (0, l.jsx)("td", {
                    className: A.mediumCol,
                    children: (0, l.jsx)(d.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: o()(m).format("lll"),
                    }),
                  }),
                  (0, l.jsx)("td", {
                    className: p.moreOptionsCol,
                    children:
                      v &&
                      (0, l.jsx)(d.Tooltip, {
                        text: S.intl.string(S.t.x8Nn4O),
                        children: (e) => {
                          let { onMouseEnter: n, onMouseLeave: t } = e;
                          return (0, l.jsx)(d.Clickable, {
                            onMouseEnter: n,
                            onMouseLeave: t,
                            onClick: N,
                            className: a()(A.button),
                            children: (0, l.jsx)(d.MoreVerticalIcon, {
                              size: "custom",
                              color: "currentColor",
                              width: 18,
                              height: 18,
                            }),
                          });
                        },
                      }),
                  }),
                ],
              });
        }),
        B = () => {
          let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
            n = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
            t = "".concat(Math.floor(25 * Math.random()) + 50, "px");
          return (0, l.jsxs)("tr", {
            className: a()(A.roundedRow, A.memberRowContainer),
            children: [
              (0, l.jsx)("td", {
                children: (0, l.jsxs)("div", {
                  className: A.memberNameContainer,
                  children: [
                    (0, l.jsx)("div", {
                      className: a()(p.placeholderAvatar, A.memberAvatar),
                    }),
                    (0, l.jsx)("div", {
                      className: A.memberName,
                      children: (0, l.jsx)("div", {
                        className: p.placeholderText,
                        style: { width: e },
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: A.memberGlobalName,
                      children: (0, l.jsx)("div", {
                        className: p.placeholderTextSmall,
                        style: { width: n },
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsx)("td", {
                className: A.mediumCol,
                children: (0, l.jsx)("div", {
                  className: p.placeholderText,
                  style: { width: t },
                }),
              }),
              (0, l.jsx)("td", { className: p.moreOptionsCol }),
            ],
          });
        };
      function w(e) {
        let { guildId: n, currentTab: t } = e,
          r = i.useRef(null),
          s = (0, c.e7)([E.Z], () => E.Z.getGuild(n)),
          o = (0, v.C)({ guildId: n }),
          u = (0, c.e7)([j.Z], () => j.Z.isFetching()),
          { guildJoinRequests: m } = (0, N.j)({
            guildId: n,
            applicationStatus: t,
            sortOrder: o,
          }),
          { fetchNextPage: x } = (0, b.m)({ guildId: n, guildJoinRequests: m }),
          f = i.useCallback(async () => {
            let e =
              o === C.Nw.TIMESTAMP_ASC
                ? C.Nw.TIMESTAMP_DESC
                : C.Nw.TIMESTAMP_ASC;
            h.Z.setSelectedSortOrder(n, e), await x(e, t);
          }, [o, n, x, t]);
        return null == s
          ? null
          : (0, l.jsx)("div", {
              className: M.mainTableContainer,
              children: (0, l.jsx)(d.AdvancedScroller, {
                className: M.horizatonalScroller,
                ref: r,
                orientation: "horizontal",
                children: (0, l.jsxs)("table", {
                  className: a()(p.table),
                  children: [
                    (0, l.jsx)(k, { sortOrder: o, onSortChange: f }),
                    (0, l.jsx)("tbody", {
                      children: u
                        ? [, , , , ,]
                            .fill(0)
                            .map((e, n) =>
                              (0, l.jsx)(B, {}, "placeholder-".concat(n)),
                            )
                        : 0 === m.length
                          ? (0, l.jsx)("td", {
                              colSpan: 3,
                              children: (0, l.jsx)(Z, { status: t }),
                            })
                          : m.map((e) =>
                              (0, l.jsx)(
                                P,
                                {
                                  joinRequest: e,
                                  onSelect: () =>
                                    h.Z.setSelectedGuildJoinRequest(n, e),
                                },
                                e.joinRequestId,
                              ),
                            ),
                    }),
                  ],
                }),
              }),
            });
      }
    },
    995596: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(442837),
        o = t(21260),
        c = t(780384),
        d = t(481060),
        u = t(410030),
        m = t(328977),
        x = t(571728),
        h = t(984370),
        j = t(433355),
        C = t(889711),
        b = t(384433),
        f = t(388032),
        v = t(51107);
      let N = (e) => [
          { id: b.e.ALL_MEMBERS, label: f.intl.string(f.t.NOOm1d) },
          {
            id: b.e.PENDING,
            label:
              e > 0
                ? f.intl.formatToPlainString(f.t["Wo+zLy"], { count: e })
                : f.intl.string(f.t["4eQVBA"]),
          },
          { id: b.e.REJECTED, label: f.intl.string(f.t.bSZklZ) },
        ],
        g = (e) => {
          let { tabs: n, selectedTab: t, onTabSelect: i, onClose: r } = e;
          return (0, l.jsx)(d.Menu, {
            navId: "members-tabs-overflow-menu",
            "aria-label": f.intl.string(f.t.riPnr6),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, l.jsx)(
              d.MenuGroup,
              {
                children: n.map((e) => {
                  let { id: n, label: r } = e;
                  return (0, l.jsx)(
                    d.MenuItem,
                    {
                      id: n,
                      label: r,
                      icon: n === t ? d.CircleCheckIcon : void 0,
                      action: () => i(n),
                    },
                    n,
                  );
                }),
              },
              "applications-overflow-tabs",
            ),
          });
        };
      function I(e) {
        let { onTabSelect: n, tabs: t, selectedTab: r } = e,
          s = (0, u.ZP)(),
          o = (0, c.wj)(s),
          m = i.useMemo(
            () =>
              null !=
              t.find((e) => {
                let { id: n } = e;
                return n === r;
              }),
            [r, t],
          ),
          x = m ? "header-primary" : o ? "text-muted" : "header-primary",
          h = m
            ? d.tokens.colors.HEADER_PRIMARY
            : o
              ? d.tokens.colors.TEXT_MUTED
              : d.tokens.colors.HEADER_PRIMARY;
        return (0, l.jsx)(d.Popout, {
          renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(g, {
              selectedTab: r,
              onClose: i,
              tabs: t,
              onTabSelect: n,
            });
          },
          position: "bottom",
          align: "left",
          children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsxs)(d.TabBar.Item, {
              ...e,
              id: "more",
              color: "text-muted",
              className: a()(v.more, { [v.selected]: m }),
              "aria-label": f.intl.string(f.t.UKOtz8),
              children: [
                (0, l.jsx)(d.Text, {
                  variant: "text-md/medium",
                  color: x,
                  children: f.intl.string(f.t.UKOtz8),
                }),
                t
                  ? (0, l.jsx)(d.ChevronSmallUpIcon, { size: "sm", color: h })
                  : (0, l.jsx)(d.ChevronSmallDownIcon, {
                      size: "sm",
                      color: h,
                    }),
              ],
            });
          },
        });
      }
      function _(e) {
        let { guildId: n, currentTab: t, onTabSelect: r } = e,
          [a, c] = i.useState(0),
          u = i.useRef(null),
          g = i.useRef(a),
          _ = (0, x.A)({ guildId: n }),
          E = N(null != _ ? _ : 0),
          {
            lastVisibleIndex: T,
            onItemLayout: S,
            overflowItemsRef: p,
          } = (0, o.zP)({
            items: E,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: a - 200,
          }),
          M = (0, s.e7)([j.ZP], () => null != j.ZP.getGuildSidebarState(n), [
            n,
          ]),
          R = (0, m.L)({ guildId: n }),
          A = i.useMemo(
            () => (t === b.e.ALL_MEMBERS ? M : null != R && null != R.user),
            [t, M, R],
          ),
          Z = i.useMemo(() => E.slice(0, T + 1), [T, E]),
          k = i.useMemo(() => E.slice(T + 1), [T, E]),
          L = i.useCallback(() => {
            var e;
            let n =
              null === (e = u.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
            null != n &&
              g.current !== n.width &&
              (c(n.width), (g.current = n.width));
          }, []);
        return (
          i.useEffect(() => {
            let e = (0, C.pP)(L);
            return (
              (0, C.YP)(e, document.body), () => (0, C.UC)(e, document.body)
            );
          }, [L]),
          i.useEffect(() => {
            L();
          }, [L, A]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(h.Z.Divider, { className: v.divider }),
              (0, l.jsxs)("div", {
                className: v.tabsContainer,
                ref: u,
                children: [
                  (0, l.jsxs)("div", {
                    className: v.measurements,
                    children: [
                      E.map((e, n) =>
                        (0, l.jsx)(
                          o.AJ,
                          {
                            index: n,
                            onItemLayout: S,
                            children: (0, l.jsx)(d.TabBar.Item, {
                              id: e.id,
                              "aria-label": e.label,
                              children: e.label,
                            }),
                          },
                          e.id,
                        ),
                      ),
                      (0, l.jsx)("div", {
                        ref: p,
                        children: (0, l.jsx)(I, {
                          tabs: k,
                          onTabSelect: r,
                          selectedTab: t,
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)(d.TabBar, {
                    "aria-label": f.intl.string(f.t.tcvVXF),
                    selectedItem: t,
                    type: "top-pill",
                    onItemSelect: r,
                    children: [
                      Z.map((e) =>
                        (0, l.jsx)(
                          d.TabBar.Item,
                          {
                            id: e.id,
                            "aria-label": e.label,
                            children: e.label,
                          },
                          e.id,
                        ),
                      ),
                      0 !== k.length
                        ? (0, l.jsx)(I, {
                            tabs: k,
                            onTabSelect: r,
                            selectedTab: t,
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    937283: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        a = t(100527),
        s = t(906732),
        o = t(613464),
        c = t(6025),
        d = t(433355),
        u = t(430824),
        m = t(981631),
        x = t(51107);
      function h(e) {
        let { guildId: n } = e,
          t = (0, r.e7)([u.Z], () => u.Z.getGuild(n)),
          { analyticsLocations: h } = (0, s.ZP)(a.Z.MEMBER_SAFETY_PAGE),
          j = (0, r.e7)([d.ZP], () => d.ZP.getGuildSidebarState(n), [n]),
          C = i.useCallback(() => {
            c.Z.closeGuildSidebar(n);
          }, [n]),
          b = null != j;
        return null != t && b && null != j
          ? (0, l.jsx)(s.Gt, {
              value: h,
              children: (0, l.jsx)("div", {
                className: x.__invalid_sidebarContainer,
                style: { width: m.$Y6 },
                children: (0, l.jsx)(o.Z, {
                  userId: j.details.userId,
                  guildId: j.details.guildId,
                  onClose: C,
                }),
              }),
            })
          : null;
      }
    },
    545918: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return V;
          },
        }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(442837),
        o = t(481060),
        c = t(100527),
        d = t(906732),
        u = t(111028),
        m = t(252618),
        x = t(189432),
        h = t(189357),
        j = t(693546),
        C = t(863249),
        b = t(63568),
        f = t(246364),
        v = t(697379),
        N = t(98493),
        g = t(412222),
        I = t(223312),
        _ = t(571728),
        E = t(473403),
        T = t(984370),
        S = t(703656),
        p = t(171368),
        M = t(433355),
        R = t(592125),
        A = t(984933),
        Z = t(430824),
        k = t(944486),
        L = t(384433),
        P = t(241559),
        B = t(575766),
        w = t(901066),
        D = t(987491),
        y = t(305473),
        G = t(995596),
        O = t(937283),
        U = t(440857),
        z = t(707113),
        F = t(981631),
        q = t(176505),
        J = t(50493),
        H = t(388032),
        Y = t(51107),
        Q = t(302133);
      function K(e) {
        let { guild: n, previousChannel: t, currentTab: r, onTabSelect: a } = e,
          s = (0, b.jS)(n.id, "Member Safety Page"),
          c = (0, v.W)(n.id),
          d = H.intl.string(H.t.oclz3d),
          x = H.intl.string(H.t.oclz3d);
        return (
          (0, m.Tt)({ location: n.name, subsection: d }),
          (0, l.jsxs)(T.Z, {
            className: Y.header,
            innerClassname: Y.__invalid_innerHeader,
            channelId: q.oC.MEMBER_SAFETY,
            guildId: n.id,
            hideSearch: !0,
            toolbar:
              null != t
                ? (0, l.jsx)(o.Button, {
                    className: Y.returnButton,
                    size: o.Button.Sizes.SMALL,
                    look: o.Button.Looks.OUTLINED,
                    color: o.Button.Colors.PRIMARY,
                    onClick: () => {
                      null != t && (0, S.XU)(n.id, t.id);
                    },
                    children: (0, l.jsx)(o.Text, {
                      className: Y.returnButtonText,
                      variant: "text-xs/medium",
                      color: "none",
                      children: H.intl.format(H.t.IX7oWl, {
                        channelNameHook: () =>
                          null == t
                            ? null
                            : (0, l.jsxs)(
                                i.Fragment,
                                {
                                  children: [
                                    (0, l.jsx)(E._, {
                                      className: Y.returnIcon,
                                      guild: n,
                                      channel: t,
                                    }),
                                    (0, l.jsx)(u.Z, {
                                      children: (0, l.jsx)(o.Text, {
                                        variant: "text-xs/medium",
                                        color: "none",
                                        children: t.name,
                                      }),
                                    }),
                                  ],
                                },
                                t.id,
                              ),
                      }),
                    }),
                  })
                : (0, l.jsx)("div", {}),
            children: [
              (0, l.jsx)(T.Z.Icon, { icon: o.GroupIcon, "aria-hidden": !0 }),
              (0, l.jsx)(T.Z.Title, { children: x }),
              s &&
                c &&
                (0, l.jsx)(G.Z, {
                  guildId: n.id,
                  currentTab: r,
                  onTabSelect: a,
                }),
            ],
          })
        );
      }
      function V(e) {
        var n;
        let { guildId: t } = e,
          r = null !== (n = (0, _.A)({ guildId: t })) && void 0 !== n ? n : 0,
          u = (0, b.jS)(t, "Member Safety Page"),
          [m, v] = i.useState(u && r > 0 ? L.e.PENDING : L.e.ALL_MEMBERS),
          E = (0, s.e7)([Z.Z], () => Z.Z.getGuild(t)),
          { analyticsLocations: T } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
          G = (0, g.C)({ guildId: t }),
          { guildJoinRequests: H } = (0, I.j)({
            guildId: t,
            applicationStatus: "ALL_MEMBERS" === m ? f.wB.SUBMITTED : m,
            sortOrder: G,
          }),
          V = (0, P.n2)(t),
          W = (0, h.ms)(t, V),
          X = (0, s.e7)([k.Z], () => k.Z.getLastSelectedChannelId(t)),
          $ = (0, s.e7)([R.Z], () => R.Z.getChannel(X)),
          ee = i.useRef(null);
        (0, B.n)(t);
        let { fetchNextPage: en } = (0, N.m)({
            guildId: t,
            guildJoinRequests: H,
          }),
          et = i.useCallback(async () => {
            var e;
            if (m === L.e.ALL_MEMBERS) return;
            let n =
              null === (e = ee.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            if (null != n)
              n.scrollHeight - n.scrollTop - n.offsetHeight < 200 &&
                (await en(G, m));
          }, [m, m, G, en]),
          el = i.useCallback(
            async (e) => {
              if (m !== e) {
                if (u) {
                  if (
                    (v(e),
                    j.Z.setSelectedGuildJoinRequest(t, null),
                    "ALL_MEMBERS" === e)
                  )
                    return;
                  await en(G, e);
                }
              }
            },
            [m, u, t, en, G],
          );
        i.useEffect(() => {
          if (!V && null != E) {
            var e;
            let n =
              null === (e = A.ZP.getDefaultChannel(E.id)) || void 0 === e
                ? void 0
                : e.id;
            (0, S.XU)(E.id, n);
          }
        }, [E, V]),
          i.useEffect(() => {
            u && C.ZP.fetchVerificationForm(t);
          }, [t, u]);
        let ei = (0, s.e7)([M.ZP], () => null != M.ZP.getGuildSidebarState(t), [
            t,
          ]),
          er = i.useCallback(
            (e) => {
              (0, h.By)(e.guildId, !0)
                ? (0, x.r)(e.guildId, e.userId, q.oC.MEMBER_SAFETY, {
                    modViewPanel: J.k.INFO,
                  })
                : (0, p.openUserProfileModal)({
                    userId: e.userId,
                    guildId: e.guildId,
                    sourceAnalyticsLocations: T,
                    analyticsLocation: { section: F.jXE.MEMBER_SAFETY_PAGE },
                  });
            },
            [T],
          );
        if (null == E || !V) return null;
        let ea =
            m === L.e.ALL_MEMBERS
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(y.Z, { guild: E }),
                    (0, l.jsx)(z.Z, { guild: E, onMemberSelect: er }),
                  ],
                })
              : (0, l.jsx)(D.Z, { guildId: E.id, currentTab: m }),
          es =
            m === L.e.ALL_MEMBERS
              ? (0, l.jsx)(O.Z, { guildId: E.id })
              : (0, l.jsx)(w.Z, { guildId: E.id });
        return (0, l.jsxs)(d.Gt, {
          value: T,
          children: [
            (0, l.jsxs)("div", {
              className: a()(Q.chat, Y.page, { [Q.threadSidebarOpen]: ei }),
              children: [
                (0, l.jsx)(K, {
                  guild: E,
                  previousChannel: $,
                  currentTab: m,
                  onTabSelect: el,
                }),
                (0, l.jsx)(o.AdvancedScroller, {
                  onScroll: et,
                  className: a()(Y.scroller),
                  ref: ee,
                  orientation: "vertical",
                  children: (0, l.jsx)("div", {
                    className: a()(Q.content, Y.container),
                    children: ea,
                  }),
                }),
                (0, l.jsx)(U.Z, { guildId: E.id }),
              ],
            }),
            W && es,
          ],
        });
      }
    },
    707113: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(476183),
        o = t(399606),
        c = t(481060),
        d = t(201070),
        u = t(893966),
        m = t(472596),
        x = t(598948),
        h = t(428936),
        j = t(41586),
        C = t(319522);
      function b(e) {
        let { guild: n } = e,
          t = (0, d.$j)(n.id),
          i = (0, c.useSpring)({ height: t ? 3 : 0, config: s.config.stiff });
        return (0, l.jsx)("div", {
          className: C.loaderContainer,
          children: (0, l.jsx)(s.animated.div, {
            className: C.loaderBar,
            style: i,
          }),
        });
      }
      function f(e) {
        let { guild: n, className: t, onPageChange: r, onMemberSelect: s } = e,
          f = n.id,
          v = (0, o.e7)(
            [u.Z],
            () => u.Z.getEstimatedMemberSearchCountByGuildId(f),
            [f],
          ),
          N = (0, d.$j)(f),
          g = (0, d.M3)(f),
          I = i.useCallback(
            (e) => {
              if (null != e) null == s || s(e);
            },
            [s],
          ),
          _ = (0, m.xb)(g, N, v),
          E = i.useRef(null),
          T = i.useRef(null),
          S = i.useCallback(() => {
            var e;
            null === (e = E.current) || void 0 === e || e.resetSearchText();
          }, []);
        return (0, l.jsx)("div", {
          className: a()(C.mainTableContainer, t),
          children: (0, l.jsxs)(c.AdvancedScroller, {
            className: a()(C.horizatonalScroller),
            ref: T,
            orientation: "horizontal",
            children: [
              (0, l.jsx)(j.Z, { guild: n, ref: E }),
              (0, l.jsx)(b, { guild: n }),
              (0, l.jsx)(x.Z, {
                guild: n,
                onSelectRow: I,
                searchState: _,
                onResetForNewMembers: S,
              }),
              _ !== m.po.SUCCESS_STILL_INDEXING &&
                (0, l.jsx)(h.Z, { guildId: n.id, onPageChange: r }),
            ],
          }),
        });
      }
    },
    581850: function (e, n, t) {
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
    890993: function (e, n, t) {
      e.exports = {
        headerContainer: "headerContainer_ae0ed5",
        mainContainer: "mainContainer_ae0ed5",
        pauseContainer: "pauseContainer_ae0ed5",
        pauseText: "pauseText_ae0ed5",
        toggle: "toggle_ae0ed5",
      };
    },
    711: function (e, n, t) {
      e.exports = {
        sidebar: "sidebar_bb5774",
        innerContainer: "innerContainer_bb5774",
        cardContainer: "cardContainer_bb5774",
        clickable: "clickable_bb5774",
        infoContainer: "infoContainer_bb5774",
        responsesContainer: "responsesContainer_bb5774",
        actionRow: "actionRow_bb5774",
        actionButton: "actionButton_bb5774",
        disabled: "disabled_bb5774",
      };
    },
    313532: function (e, n, t) {
      e.exports = {
        table: "table_b03ab6",
        headerCell: "headerCell_b03ab6",
        moreOptionsCol: "moreOptionsCol_b03ab6",
        sortItem: "sortItem_b03ab6",
        sortIcon: "sortIcon_b03ab6",
        placeholderText: "placeholderText_b03ab6",
        placeholderTextSmall: "placeholderTextSmall_b03ab6",
        placeholderAvatar: "placeholderAvatar_b03ab6",
        emptyContainer: "emptyContainer_b03ab6",
        checkmark: "checkmark_b03ab6",
      };
    },
    51107: function (e, n, t) {
      e.exports = {
        returnButton: "returnButton_d20375",
        returnButtonText: "returnButtonText_d20375",
        returnIcon: "returnIcon_d20375",
        container: "container_d20375",
        scroller: "scroller_d20375",
        page: "page_d20375",
        header: "header_d20375",
        measurements: "measurements_d20375",
        more: "more_d20375",
        selected: "selected_d20375",
        divider: "divider_d20375",
        tabsContainer: "tabsContainer_d20375",
      };
    },
    319522: function (e, n, t) {
      e.exports = {
        mainTableContainer: "mainTableContainer_e23072",
        horizatonalScroller: "horizatonalScroller_e23072",
        loaderContainer: "loaderContainer_e23072",
        loaderBar: "loaderBar_e23072",
      };
    },
  },
]);
//# sourceMappingURL=ebe1b79dfe4f1c86046b.js.map
