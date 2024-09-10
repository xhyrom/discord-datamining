"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22347"],
  {
    7697: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(47120);
      var l = t(470079),
        s = t(392711),
        o = t.n(s),
        i = t(442837),
        r = t(699682),
        u = t(70956),
        a = t(709054),
        c = t(897285),
        d = t(924301),
        E = t(854698);
      function _(e, n, t) {
        let s = (0, i.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(e)),
          _ = (0, r.Z)(t),
          [C, N] = l.useState(
            null != t && null != s
              ? (0, E.PJ)(4, (0, E.Ho)(t), new Date(s.scheduled_start_time))
              : [],
          );
        l.useEffect(() => {
          if (null == _ || null == t || null == s || o().isEqual(_, t)) return;
          let e = (0, E.Ho)(t);
          N((0, E.PJ)(C.length, e, new Date(s.scheduled_start_time)));
        }, [t, C.length, s, _]),
          l.useEffect(() => {
            if (null == n) return;
            let t = C.map((e) =>
              a.default.fromTimestamp(
                Math.floor(e.getTime() / u.Z.Millis.SECOND) * u.Z.Millis.SECOND,
              ),
            );
            c.Z.getGuildEventUserCounts(n, e, t);
          }, [e, n, C]);
        let h = l.useMemo(() => {
          if (
            null == t ||
            0 === C.length ||
            (null == s ? void 0 : s.scheduled_start_time) == null
          )
            return !1;
          let e = new Date();
          e.setFullYear(e.getFullYear() + E.hn);
          let n = C[C.length - 1],
            l = (0, E.Ho)(t).after(n);
          return null != l && l <= e;
        }, [t, C, null == s ? void 0 : s.scheduled_start_time]);
        return {
          recurrenceStartTimes: C,
          canViewMoreRecurrences: h,
          updateRecurrenceStartTimes: () => {
            if (null == t || null == s) return;
            let e = (0, E.Ho)(t),
              n = C[C.length - 1];
            N([...C, ...(0, E.PJ)(4, e, n, !0)]);
          },
        };
      }
    },
    274311: function (e, n, t) {
      t.d(n, {
        Q: function () {
          return a;
        },
        T: function () {
          return c;
        },
      });
      var l = t(442837),
        s = t(592125),
        o = t(700785),
        i = t(924301),
        r = t(765305),
        u = t(981631);
      function a(e, n) {
        return o.Uu(u.Plq.VIEW_CHANNEL, e) || n === r.WX.EXTERNAL;
      }
      function c(e, n) {
        return (0, l.e7)(
          [s.Z, i.ZP],
          () => {
            let t = s.Z.getChannel(e),
              l = i.ZP.getGuildScheduledEvent(n);
            return a(t, null == l ? void 0 : l.entity_type);
          },
          [e, n],
        );
      }
    },
    285784: function (e, n, t) {
      t.d(n, {
        Lh: function () {
          return _;
        },
        S0: function () {
          return E;
        },
        ZP: function () {
          return h;
        },
        ku: function () {
          return d;
        },
      }),
        t(47120);
      var l = t(735250),
        s = t(470079),
        o = t(846519),
        i = t(481060),
        r = t(765305),
        u = t(689938),
        a = t(269907);
      function c(e) {
        let { text: n, disabled: t, onJoinClick: s } = e;
        return (0, l.jsx)(i.Button, {
          className: a.__invalid_button,
          size: i.Button.Sizes.SMALL,
          onClick: s,
          color: i.Button.Colors.GREEN,
          disabled: t,
          children: n,
        });
      }
      function d(e) {
        let { onInviteClick: n, canInvite: t, isChannelPublic: r } = e,
          c = new o.V7(),
          [d, E] = s.useState(!1);
        s.useEffect(
          () => () => {
            c.stop();
          },
          [],
        );
        let _ = (e) => {
          null != n && n(e), E(!0), c.start(1e3, () => E(!1));
        };
        return null == n
          ? null
          : (0, l.jsx)(i.Tooltip, {
              text: N(t, r),
              position: "top",
              tooltipClassName: a.tooltips,
              "aria-label": u.Z.Messages.SHARE_LINK,
              children: (e) =>
                t && r
                  ? (0, l.jsxs)(i.Button, {
                      ...e,
                      className: a.__invalid_button,
                      innerClassName: a.innerButton,
                      color: i.Button.Colors.PRIMARY,
                      size: i.Button.Sizes.SMALL,
                      onClick: n,
                      children: [
                        (0, l.jsx)(i.ShareIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                        u.Z.Messages.SHARE,
                      ],
                    })
                  : (0, l.jsxs)(i.Button, {
                      ...e,
                      className: a.__invalid_button,
                      innerClassName: a.innerButton,
                      color: i.Button.Colors.PRIMARY,
                      size: i.Button.Sizes.SMALL,
                      disabled: d,
                      look: d ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
                      onClick: _,
                      children: [
                        d
                          ? (0, l.jsx)(i.CheckmarkLargeIcon, {
                              size: "xs",
                              color: "currentColor",
                            })
                          : (0, l.jsx)(i.LinkIcon, {
                              size: "xs",
                              color: "currentColor",
                            }),
                        d ? u.Z.Messages.COPIED : u.Z.Messages.SHARE,
                      ],
                    }),
            });
      }
      function E(e) {
        let { isUserRsvped: n, isUserLurking: t, onRsvpClick: s, ...o } = e,
          r = n && !t;
        return (0, l.jsxs)(i.Button, {
          ...o,
          className: a.__invalid_button,
          innerClassName: a.innerButton,
          size: i.Button.Sizes.SMALL,
          onClick: s,
          color: i.Button.Colors.PRIMARY,
          look: r ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
          disabled: t,
          children: [
            r
              ? (0, l.jsx)(i.CheckmarkLargeIcon, {
                  size: "xs",
                  color: "currentColor",
                })
              : (0, l.jsx)(i.BellIcon, { size: "xs", color: "currentColor" }),
            u.Z.Messages.INDICATE_RSVP,
          ],
        });
      }
      function _(e) {
        return (0, l.jsx)(i.Tooltip, {
          text: u.Z.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
          position: "top",
          tooltipClassName: a.tooltips,
          "aria-label": u.Z.Messages.SHARE_LINK,
          children: (n) => (0, l.jsx)(E, { ...n, ...e }),
        });
      }
      let C = (e) => null == e || e,
        N = (e, n) =>
          C(e)
            ? u.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE
            : C(n)
              ? u.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION
              : u.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;
      function h(e) {
        let {
            isActive: n,
            isUserLurking: t,
            rsvped: s,
            canInvite: o,
            isChannelPublic: C = !0,
            entityType: N,
            onContextMenu: h,
            onJoinClick: m,
            onRsvpClick: I,
            onStartClick: g,
            onInviteClick: L,
            onEndClick: x,
            isJoined: M = !1,
          } = e,
          T = void 0 !== m;
        return (0, l.jsxs)("div", {
          className: a.container,
          children: [
            null != h
              ? (0, l.jsx)(i.Tooltip, {
                  text: u.Z.Messages.MORE,
                  position: "top",
                  "aria-label": u.Z.Messages.EDIT,
                  children: (e) =>
                    (0, l.jsx)(i.Clickable, {
                      ...e,
                      onClick: h,
                      className: a.iconButton,
                      children: (0, l.jsx)(i.MoreHorizontalIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: a.icon,
                      }),
                    }),
                })
              : null,
            (0, l.jsx)(d, {
              onInviteClick: L,
              canInvite: o,
              isChannelPublic: C,
            }),
            n && N !== r.WX.EXTERNAL
              ? (0, l.jsx)(c, {
                  text: (function (e) {
                    let { isJoined: n, canJoin: t, isVoiceChannel: l } = e;
                    return t
                      ? n
                        ? u.Z.Messages.GO_TO_CHANNEL
                        : l
                          ? u.Z.Messages.GUILD_EVENT_JOIN
                          : u.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON
                      : u.Z.Messages.CHANNEL_LOCKED_SHORT;
                  })({
                    isJoined: M,
                    canJoin: T,
                    isVoiceChannel: N === r.WX.VOICE,
                  }),
                  disabled: !T,
                  onJoinClick: m,
                })
              : null,
            t && !n && (0, l.jsx)(_, { isUserRsvped: s, isUserLurking: t }),
            !t &&
              !n &&
              null != I &&
              (0, l.jsx)(E, {
                isUserRsvped: s,
                isUserLurking: t,
                onRsvpClick: I,
              }),
            n || null == g
              ? null
              : (0, l.jsx)(i.Button, {
                  className: a.__invalid_button,
                  innerClassName: a.innerButton,
                  size: i.Button.Sizes.SMALL,
                  onClick: g,
                  color: i.Button.Colors.GREEN,
                  children: u.Z.Messages.START,
                }),
            n && null != x
              ? (0, l.jsx)(i.Button, {
                  className: a.__invalid_button,
                  innerClassName: a.innerButton,
                  size: i.Button.Sizes.SMALL,
                  onClick: x,
                  color: i.Button.Colors.PRIMARY,
                  children: u.Z.Messages.END_EVENT,
                })
              : null,
          ],
        });
      }
    },
    421032: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(120356),
        o = t.n(s),
        i = t(442837),
        r = t(481060),
        u = t(239091),
        a = t(592125),
        c = t(430824),
        d = t(924301),
        E = t(894017),
        _ = t(854698),
        C = t(390966),
        N = t(765305),
        h = t(689938),
        m = t(676646);
      function I(e) {
        let {
            recurrenceId: n,
            originalScheduledStartTime: s,
            guildEventId: I,
            onClick: g,
            isActive: L,
          } = e,
          x = (0, i.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(I)),
          M = (0, E.Z)(n, null == x ? void 0 : x.id),
          T = (0, i.e7)([c.Z], () =>
            c.Z.getGuild(null == x ? void 0 : x.guild_id),
          ),
          S = (0, i.e7)([a.Z], () =>
            a.Z.getChannel(null == x ? void 0 : x.channel_id),
          );
        if (null == x) return null;
        let { is_canceled: v = !1 } = null != M ? M : {},
          Z =
            (null == M ? void 0 : M.scheduled_start_time) != null
              ? new Date(null == M ? void 0 : M.scheduled_start_time)
              : s,
          p = (0, _.DK)(x),
          f = v ? N.p1.CANCELED : N.p1.SCHEDULED;
        p === n && (f = x.status);
        let k =
            (null == x ? void 0 : x.scheduled_start_time) != null
              ? (0, _.lh)(
                  M,
                  Z,
                  new Date(null == x ? void 0 : x.scheduled_start_time),
                )
              : null,
          B = (e) => {
            e.stopPropagation(),
              null != T &&
                (0, u.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    t.e("15450"),
                    t.e("37133"),
                    t.e("62318"),
                  ]).then(t.bind(t, 215269));
                  return (t) =>
                    (0, l.jsx)(e, {
                      guildEventId: x.id,
                      recurrenceId: n,
                      channel: S,
                      guild: T,
                      isRecurrenceItem: !0,
                      ...t,
                    });
                });
          };
        return (0, l.jsxs)(r.ClickableContainer, {
          className: o()(m.container, {
            [m.canceled]: v,
            [m.clickable]: null != g,
            [m.active]: L,
          }),
          onClick: (e) => {
            e.stopPropagation(), !v && (null == g || g(n));
          },
          onContextMenu: B,
          "aria-label": "",
          children: [
            (0, l.jsx)(C.z, {
              startTime: Z.toISOString(),
              status: null != k ? k : f,
              eventType: x.entity_type,
              guildEventId: x.id,
              recurrenceId: n,
              className: m.timeStatus,
            }),
            v &&
              (0, l.jsx)(r.Text, {
                variant: "text-sm/semibold",
                color: "text-danger",
                className: m.canceledStatus,
                children: h.Z.Messages.EVENT_CANCELED,
              }),
            (0, l.jsx)(r.Tooltip, {
              text: h.Z.Messages.MORE,
              position: "top",
              "aria-label": h.Z.Messages.EDIT,
              children: (e) =>
                (0, l.jsx)(r.Clickable, {
                  ...e,
                  onClick: B,
                  className: m.iconButton,
                  children: (0, l.jsx)(r.MoreHorizontalIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                    className: m.icon,
                  }),
                }),
            }),
          ],
        });
      }
    },
    810561: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(120356),
        o = t.n(s),
        i = t(481060),
        r = t(709054),
        u = t(7697),
        a = t(421032),
        c = t(689938),
        d = t(128729);
      function E(e) {
        let {
            guildId: n,
            recurrenceRule: t,
            guildEventId: s,
            onRecurrenceClick: E,
            hideScroller: _ = !1,
            activeRecurrenceId: C,
          } = e,
          {
            recurrenceStartTimes: N,
            canViewMoreRecurrences: h,
            updateRecurrenceStartTimes: m,
          } = (0, u.Z)(s, n, t);
        return (0, l.jsxs)("div", {
          className: d.recurrences,
          children: [
            (0, l.jsx)(i.Heading, {
              variant: "heading-sm/medium",
              className: d.heading,
              children: c.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS,
            }),
            (0, l.jsxs)(i.Scroller, {
              className: o()(d.scroller, { [d.showScroller]: !_ }),
              children: [
                N.map((e) => {
                  let n = r.default.fromTimestamp(e.getTime());
                  return (0, l.jsx)(
                    a.Z,
                    {
                      recurrenceId: n,
                      originalScheduledStartTime: e,
                      guildEventId: s,
                      onClick: E,
                      isActive: n === C,
                    },
                    n,
                  );
                }),
                h &&
                  (0, l.jsx)(i.Button, {
                    grow: !1,
                    onClick: (e) => {
                      e.stopPropagation(), m();
                    },
                    look: i.Button.Looks.LINK,
                    size: i.Button.Sizes.MIN,
                    color: i.Button.Colors.LINK,
                    className: d.button,
                    children:
                      c.Z.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES,
                  }),
              ],
            }),
          ],
        });
      }
    },
    187443: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(481060),
        o = t(285784),
        i = t(689938),
        r = t(494545);
      function u(e) {
        let {
          isActive: n,
          isUserLurking: t,
          rsvped: u,
          onContextMenu: a,
          onRsvpClick: c,
          onGoToGuildClick: d,
          isDetailsView: E = !1,
          isMember: _,
          onJoinGuildClick: C,
          guildName: N,
          onInviteClick: h,
          canInvite: m,
          isChannelPublic: I,
        } = e;
        return (0, l.jsxs)("div", {
          className: r.container,
          children: [
            null != a
              ? (0, l.jsx)(s.Tooltip, {
                  text: i.Z.Messages.MORE,
                  position: "top",
                  "aria-label": i.Z.Messages.EDIT,
                  children: (e) =>
                    (0, l.jsx)(s.Clickable, {
                      ...e,
                      onClick: a,
                      className: r.iconButton,
                      children: (0, l.jsx)(s.MoreHorizontalIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: r.icon,
                      }),
                    }),
                })
              : null,
            _ &&
              (0, l.jsx)(o.ku, {
                onInviteClick: h,
                canInvite: m,
                isChannelPublic: I,
              }),
            t && !n && (0, l.jsx)(o.Lh, { isUserRsvped: u, isUserLurking: t }),
            _ &&
              !t &&
              !n &&
              null != c &&
              (0, l.jsx)(o.S0, {
                isUserRsvped: u,
                isUserLurking: t,
                onRsvpClick: c,
              }),
            _ && !t && (!E || n)
              ? (0, l.jsx)(s.Button, {
                  className: r.button,
                  innerClassName: r.innerButton,
                  size: s.Button.Sizes.SMALL,
                  onClick: d,
                  color: s.Button.Colors.GREEN,
                  children: i.Z.Messages.HUB_EVENTS_GO_TO_GUILD,
                })
              : null,
            _
              ? null
              : (0, l.jsx)(s.Button, {
                  className: r.button,
                  innerClassName: r.innerButton,
                  size: s.Button.Sizes.SMALL,
                  onClick: C,
                  color: s.Button.Colors.GREEN,
                  children: i.Z.Messages.HUB_EVENTS_JOIN_GUILD.format({
                    guildName: N,
                  }),
                }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=5ad06ff7e09fa6d9c468.js.map
