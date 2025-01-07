"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22347"],
  {
    7697: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return m;
        },
      }),
        e(47120);
      var l = e(192379),
        i = e(392711),
        o = e.n(i),
        s = e(442837),
        r = e(699682),
        u = e(70956),
        c = e(709054),
        a = e(897285),
        d = e(924301),
        h = e(854698);
      function m(t, n, e) {
        let i = (0, s.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(t)),
          m = (0, r.Z)(e),
          [C, g] = l.useState(
            null != e && null != i
              ? (0, h.PJ)(4, (0, h.Ho)(e), new Date(i.scheduled_start_time))
              : [],
          );
        l.useEffect(() => {
          if (null == m || null == e || null == i || o().isEqual(m, e)) return;
          let t = (0, h.Ho)(e);
          g((0, h.PJ)(C.length, t, new Date(i.scheduled_start_time)));
        }, [e, C.length, i, m]),
          l.useEffect(() => {
            if (null == n) return;
            let e = C.map((t) =>
              c.default.fromTimestamp(
                Math.floor(t.getTime() / u.Z.Millis.SECOND) * u.Z.Millis.SECOND,
              ),
            );
            a.Z.getGuildEventUserCounts(n, t, e);
          }, [t, n, C]);
        let x = l.useMemo(() => {
          if (
            null == e ||
            0 === C.length ||
            (null == i ? void 0 : i.scheduled_start_time) == null
          )
            return !1;
          let t = new Date();
          t.setFullYear(t.getFullYear() + h.hn);
          let n = C[C.length - 1],
            l = (0, h.Ho)(e).after(n);
          return null != l && l <= t;
        }, [e, C, null == i ? void 0 : i.scheduled_start_time]);
        return {
          recurrenceStartTimes: C,
          canViewMoreRecurrences: x,
          updateRecurrenceStartTimes: () => {
            if (null == e || null == i) return;
            let t = (0, h.Ho)(e),
              n = C[C.length - 1];
            g([...C, ...(0, h.PJ)(4, t, n, !0)]);
          },
        };
      }
    },
    274311: function (t, n, e) {
      e.d(n, {
        Q: function () {
          return c;
        },
        T: function () {
          return a;
        },
      });
      var l = e(442837),
        i = e(592125),
        o = e(700785),
        s = e(924301),
        r = e(765305),
        u = e(981631);
      function c(t, n) {
        return o.Uu(u.Plq.VIEW_CHANNEL, t) || n === r.WX.EXTERNAL;
      }
      function a(t, n) {
        return (0, l.e7)(
          [i.Z, s.ZP],
          () => {
            let e = i.Z.getChannel(t),
              l = s.ZP.getGuildScheduledEvent(n);
            return c(e, null == l ? void 0 : l.entity_type);
          },
          [t, n],
        );
      }
    },
    285784: function (t, n, e) {
      e.d(n, {
        Lh: function () {
          return C;
        },
        S0: function () {
          return m;
        },
        ZP: function () {
          return v;
        },
        ku: function () {
          return h;
        },
      }),
        e(47120);
      var l = e(200651),
        i = e(192379),
        o = e(846519),
        s = e(481060),
        r = e(493773),
        u = e(765305),
        c = e(388032),
        a = e(77257);
      function d(t) {
        let { text: n, disabled: e, onJoinClick: i } = t;
        return (0, l.jsx)(s.Button, {
          className: a.__invalid_button,
          size: s.Button.Sizes.SMALL,
          onClick: i,
          color: s.Button.Colors.GREEN,
          disabled: e,
          children: n,
        });
      }
      function h(t) {
        let { onInviteClick: n, canInvite: e, isChannelPublic: u } = t,
          d = new o.V7(),
          [h, m] = i.useState(!1);
        (0, r.Z)(() => () => {
          d.stop();
        });
        let C = (t) => {
          null != n && n(t), m(!0), d.start(1e3, () => m(!1));
        };
        return null == n
          ? null
          : (0, l.jsx)(s.Tooltip, {
              text: x(e, u),
              position: "top",
              tooltipClassName: a.tooltips,
              "aria-label": c.intl.string(c.t.Ej3B3d),
              children: (t) =>
                e && u
                  ? (0, l.jsxs)(s.Button, {
                      ...t,
                      className: a.__invalid_button,
                      innerClassName: a.innerButton,
                      color: s.Button.Colors.PRIMARY,
                      size: s.Button.Sizes.SMALL,
                      onClick: n,
                      children: [
                        (0, l.jsx)(s.ShareIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                        c.intl.string(c.t.RDE0SU),
                      ],
                    })
                  : (0, l.jsxs)(s.Button, {
                      ...t,
                      className: a.__invalid_button,
                      innerClassName: a.innerButton,
                      color: s.Button.Colors.PRIMARY,
                      size: s.Button.Sizes.SMALL,
                      disabled: h,
                      look: h ? s.Button.Looks.OUTLINED : s.Button.Looks.FILLED,
                      onClick: C,
                      children: [
                        h
                          ? (0, l.jsx)(s.CheckmarkLargeIcon, {
                              size: "xs",
                              color: "currentColor",
                            })
                          : (0, l.jsx)(s.LinkIcon, {
                              size: "xs",
                              color: "currentColor",
                            }),
                        h
                          ? c.intl.string(c.t["t5VZ8/"])
                          : c.intl.string(c.t.RDE0SU),
                      ],
                    }),
            });
      }
      function m(t) {
        let { isUserRsvped: n, isUserLurking: e, onRsvpClick: i, ...o } = t,
          r = n && !e;
        return (0, l.jsxs)(s.Button, {
          ...o,
          className: a.__invalid_button,
          innerClassName: a.innerButton,
          size: s.Button.Sizes.SMALL,
          onClick: i,
          color: s.Button.Colors.PRIMARY,
          look: r ? s.Button.Looks.OUTLINED : s.Button.Looks.FILLED,
          disabled: e,
          children: [
            r
              ? (0, l.jsx)(s.CheckmarkLargeIcon, {
                  size: "xs",
                  color: "currentColor",
                })
              : (0, l.jsx)(s.BellIcon, { size: "xs", color: "currentColor" }),
            c.intl.string(c.t.DlcqlZ),
          ],
        });
      }
      function C(t) {
        return (0, l.jsx)(s.Tooltip, {
          text: c.intl.string(c.t["26dTyc"]),
          position: "top",
          tooltipClassName: a.tooltips,
          "aria-label": c.intl.string(c.t.Ej3B3d),
          children: (n) => (0, l.jsx)(m, { ...n, ...t }),
        });
      }
      let g = (t) => null == t || t,
        x = (t, n) =>
          g(t)
            ? c.intl.string(c.t.vk5Xw8)
            : g(n)
              ? c.intl.string(c.t.FFLWGR)
              : c.intl.string(c.t.k9KGYm);
      function v(t) {
        let {
            isActive: n,
            isUserLurking: e,
            rsvped: i,
            canInvite: o,
            isChannelPublic: r = !0,
            entityType: g,
            onContextMenu: x,
            onJoinClick: v,
            onRsvpClick: k,
            onStartClick: p,
            onInviteClick: B,
            onEndClick: N,
            isJoined: j = !1,
          } = t,
          f = void 0 !== v;
        return (0, l.jsxs)("div", {
          className: a.container,
          children: [
            null != x
              ? (0, l.jsx)(s.Tooltip, {
                  text: c.intl.string(c.t.UKOtz8),
                  position: "top",
                  "aria-label": c.intl.string(c.t.bt75u7),
                  children: (t) =>
                    (0, l.jsx)(s.Clickable, {
                      ...t,
                      onClick: x,
                      className: a.iconButton,
                      children: (0, l.jsx)(s.MoreHorizontalIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: a.icon,
                      }),
                    }),
                })
              : null,
            (0, l.jsx)(h, {
              onInviteClick: B,
              canInvite: o,
              isChannelPublic: r,
            }),
            n && g !== u.WX.EXTERNAL
              ? (0, l.jsx)(d, {
                  text: (function (t) {
                    let { isJoined: n, canJoin: e, isVoiceChannel: l } = t;
                    return e
                      ? n
                        ? c.intl.string(c.t.aW2YlJ)
                        : l
                          ? c.intl.string(c.t.nxUtoa)
                          : c.intl.string(c.t.ZYO5OD)
                      : c.intl.string(c.t.TVBCKS);
                  })({
                    isJoined: j,
                    canJoin: f,
                    isVoiceChannel: g === u.WX.VOICE,
                  }),
                  disabled: !f,
                  onJoinClick: v,
                })
              : null,
            e && !n && (0, l.jsx)(C, { isUserRsvped: i, isUserLurking: e }),
            !e &&
              !n &&
              null != k &&
              (0, l.jsx)(m, {
                isUserRsvped: i,
                isUserLurking: e,
                onRsvpClick: k,
              }),
            n || null == p
              ? null
              : (0, l.jsx)(s.Button, {
                  className: a.__invalid_button,
                  innerClassName: a.innerButton,
                  size: s.Button.Sizes.SMALL,
                  onClick: p,
                  color: s.Button.Colors.GREEN,
                  children: c.intl.string(c.t.I0v0Qk),
                }),
            n && null != N
              ? (0, l.jsx)(s.Button, {
                  className: a.__invalid_button,
                  innerClassName: a.innerButton,
                  size: s.Button.Sizes.SMALL,
                  onClick: N,
                  color: s.Button.Colors.PRIMARY,
                  children: c.intl.string(c.t.qaYzPD),
                })
              : null,
          ],
        });
      }
    },
    421032: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return k;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(120356),
        o = e.n(i),
        s = e(442837),
        r = e(481060),
        u = e(239091),
        c = e(592125),
        a = e(430824),
        d = e(924301),
        h = e(894017),
        m = e(854698),
        C = e(390966),
        g = e(765305),
        x = e(388032),
        v = e(37232);
      function k(t) {
        let {
            recurrenceId: n,
            originalScheduledStartTime: i,
            guildEventId: k,
            onClick: p,
            isActive: B,
          } = t,
          N = (0, s.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(k)),
          j = (0, h.Z)(n, null == N ? void 0 : N.id),
          f = (0, s.e7)([a.Z], () =>
            a.Z.getGuild(null == N ? void 0 : N.guild_id),
          ),
          L = (0, s.e7)([c.Z], () =>
            c.Z.getChannel(null == N ? void 0 : N.channel_id),
          );
        if (null == N) return null;
        let { is_canceled: _ = !1 } = null != j ? j : {},
          S =
            (null == j ? void 0 : j.scheduled_start_time) != null
              ? new Date(null == j ? void 0 : j.scheduled_start_time)
              : i,
          E = (0, m.DK)(N),
          z = _ ? g.p1.CANCELED : g.p1.SCHEDULED;
        E === n && (z = N.status);
        let I =
            (null == N ? void 0 : N.scheduled_start_time) != null
              ? (0, m.lh)(
                  j,
                  S,
                  new Date(null == N ? void 0 : N.scheduled_start_time),
                )
              : null,
          b = (t) => {
            t.stopPropagation(),
              null != f &&
                (0, u.jW)(t, async () => {
                  let { default: t } = await Promise.all([
                    e.e("15450"),
                    e.e("37133"),
                    e.e("62318"),
                  ]).then(e.bind(e, 215269));
                  return (e) =>
                    (0, l.jsx)(t, {
                      guildEventId: N.id,
                      recurrenceId: n,
                      channel: L,
                      guild: f,
                      isRecurrenceItem: !0,
                      ...e,
                    });
                });
          };
        return (0, l.jsxs)(r.ClickableContainer, {
          className: o()(v.container, {
            [v.canceled]: _,
            [v.clickable]: null != p,
            [v.active]: B,
          }),
          onClick: (t) => {
            t.stopPropagation(), !_ && (null == p || p(n));
          },
          onContextMenu: b,
          "aria-label": "",
          children: [
            (0, l.jsx)(C.z, {
              startTime: S.toISOString(),
              status: null != I ? I : z,
              eventType: N.entity_type,
              guildEventId: N.id,
              recurrenceId: n,
              className: v.timeStatus,
            }),
            _ &&
              (0, l.jsx)(r.Text, {
                variant: "text-sm/semibold",
                color: "text-danger",
                className: v.canceledStatus,
                children: x.intl.string(x.t.fyBVRk),
              }),
            (0, l.jsx)(r.Tooltip, {
              text: x.intl.string(x.t.UKOtz8),
              position: "top",
              "aria-label": x.intl.string(x.t.bt75u7),
              children: (t) =>
                (0, l.jsx)(r.Clickable, {
                  ...t,
                  onClick: b,
                  className: v.iconButton,
                  children: (0, l.jsx)(r.MoreHorizontalIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                    className: v.icon,
                  }),
                }),
            }),
          ],
        });
      }
    },
    810561: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return h;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(120356),
        o = e.n(i),
        s = e(481060),
        r = e(709054),
        u = e(7697),
        c = e(421032),
        a = e(388032),
        d = e(671933);
      function h(t) {
        let {
            guildId: n,
            recurrenceRule: e,
            guildEventId: i,
            onRecurrenceClick: h,
            hideScroller: m = !1,
            activeRecurrenceId: C,
          } = t,
          {
            recurrenceStartTimes: g,
            canViewMoreRecurrences: x,
            updateRecurrenceStartTimes: v,
          } = (0, u.Z)(i, n, e);
        return (0, l.jsxs)("div", {
          className: d.recurrences,
          children: [
            (0, l.jsx)(s.Heading, {
              variant: "heading-sm/medium",
              className: d.heading,
              children: a.intl.string(a.t["D/jjoa"]),
            }),
            (0, l.jsxs)(s.Scroller, {
              className: o()(d.scroller, { [d.showScroller]: !m }),
              children: [
                g.map((t) => {
                  let n = r.default.fromTimestamp(t.getTime());
                  return (0, l.jsx)(
                    c.Z,
                    {
                      recurrenceId: n,
                      originalScheduledStartTime: t,
                      guildEventId: i,
                      onClick: h,
                      isActive: n === C,
                    },
                    n,
                  );
                }),
                x &&
                  (0, l.jsx)(s.Button, {
                    grow: !1,
                    onClick: (t) => {
                      t.stopPropagation(), v();
                    },
                    look: s.Button.Looks.LINK,
                    size: s.Button.Sizes.MIN,
                    color: s.Button.Colors.LINK,
                    className: d.button,
                    children: a.intl.string(a.t["8O7Hp6"]),
                  }),
              ],
            }),
          ],
        });
      }
    },
    187443: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(481060),
        o = e(285784),
        s = e(388032),
        r = e(935602);
      function u(t) {
        let {
          isActive: n,
          isUserLurking: e,
          rsvped: u,
          onContextMenu: c,
          onRsvpClick: a,
          onGoToGuildClick: d,
          isDetailsView: h = !1,
          isMember: m,
          onJoinGuildClick: C,
          guildName: g,
          onInviteClick: x,
          canInvite: v,
          isChannelPublic: k,
        } = t;
        return (0, l.jsxs)("div", {
          className: r.container,
          children: [
            null != c
              ? (0, l.jsx)(i.Tooltip, {
                  text: s.intl.string(s.t.UKOtz8),
                  position: "top",
                  "aria-label": s.intl.string(s.t.bt75u7),
                  children: (t) =>
                    (0, l.jsx)(i.Clickable, {
                      ...t,
                      onClick: c,
                      className: r.iconButton,
                      children: (0, l.jsx)(i.MoreHorizontalIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: r.icon,
                      }),
                    }),
                })
              : null,
            m &&
              (0, l.jsx)(o.ku, {
                onInviteClick: x,
                canInvite: v,
                isChannelPublic: k,
              }),
            e && !n && (0, l.jsx)(o.Lh, { isUserRsvped: u, isUserLurking: e }),
            m &&
              !e &&
              !n &&
              null != a &&
              (0, l.jsx)(o.S0, {
                isUserRsvped: u,
                isUserLurking: e,
                onRsvpClick: a,
              }),
            m && !e && (!h || n)
              ? (0, l.jsx)(i.Button, {
                  className: r.button,
                  innerClassName: r.innerButton,
                  size: i.Button.Sizes.SMALL,
                  onClick: d,
                  color: i.Button.Colors.GREEN,
                  children: s.intl.string(s.t["N+TB5u"]),
                })
              : null,
            m
              ? null
              : (0, l.jsx)(i.Button, {
                  className: r.button,
                  innerClassName: r.innerButton,
                  size: i.Button.Sizes.SMALL,
                  onClick: C,
                  color: i.Button.Colors.GREEN,
                  children: s.intl.format(s.t["4BiO8f"], { guildName: g }),
                }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=4ae98f20dc56179ca7c9.js.map
