"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37133"],
  {
    658041: function (e, n, t) {
      t.d(n, {
        M: function () {
          return a;
        },
      });
      var l = t(913527),
        i = t.n(l),
        u = t(709054),
        s = t(765305);
      function a(e, n, t, l) {
        let a = i()(),
          r = new Date(e.scheduled_start_time).getTime(),
          E = { start: r - s.VF, end: r };
        if (a.isBetween(E.start, E.end)) {
          if (null != n) {
            let e = i()(n),
              t = e.isBetween(E.start, E.end),
              u = e.isBetween(i()(r).subtract(s.zV, "days"), r);
            return t || (u && !l) ? void 0 : s.X_.EVENT_STARTING_SOON;
          }
          return s.X_.EVENT_STARTING_SOON;
        }
        let d = u.default.extractTimestamp(e.id),
          o = Math.min((null != t ? t : d) + s.Fc, r);
        if (a.isBetween(d, o) && null == n && !l) return s.X_.NEW_EVENT;
      }
    },
    835184: function (e, n, t) {
      var l,
        i = t(442837),
        u = t(570140),
        s = t(314897),
        a = t(924301),
        r = t(658041),
        E = t(765305);
      function d(e, n, t) {
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
      let o = {},
        c = {};
      function _(e) {
        let n = { ...o };
        delete n[e], (o = n);
        let t = { ...c };
        delete t[e], (c = t);
      }
      class Z extends (l = i.ZP.PersistedStore) {
        initialize(e) {
          if (null != e) {
            var n, t;
            (o =
              null !== (n = e.upcomingEventDismissals) && void 0 !== n
                ? n
                : {}),
              (c =
                null !== (t = e.upcomingEventSeenTimestamps) && void 0 !== t
                  ? t
                  : {});
          }
        }
        getGuildEventNoticeDismissalTime(e) {
          return o[e];
        }
        getAllEventDismissals() {
          return o;
        }
        getUpcomingNoticeSeenTime(e) {
          return c[e];
        }
        getAllUpcomingNoticeSeenTimes() {
          return c;
        }
        getState() {
          return { upcomingEventDismissals: o, upcomingEventSeenTimestamps: c };
        }
      }
      d(Z, "displayName", "UpcomingEventNoticesStore"),
        d(Z, "persistKey", "UpcomingEventNotices"),
        (n.Z = new Z(u.Z, {
          UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
            let { eventId: n } = e,
              t = { ...o };
            (t[n] = Date.now()), (o = t);
          },
          GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
            let { guildScheduledEvent: n } = e;
            (n.status === E.p1.CANCELED || n.status === E.p1.COMPLETED) &&
              _(n.id);
          },
          GUILD_SCHEDULED_EVENT_DELETE: function (e) {
            let { guildScheduledEvent: n } = e;
            _(n.id);
          },
          GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
            let { userId: n, guildEventId: t } = e;
            if (n !== s.default.getId()) return;
            let l = a.ZP.getGuildScheduledEvent(t);
            if (null == l || l.status !== E.p1.SCHEDULED || null != o[t])
              return;
            let i = c[t];
            if ((0, r.M)(l, void 0, i, !1) === E.X_.NEW_EVENT) {
              let e = { ...o };
              (e[t] = Date.now()), (o = e);
            }
          },
          UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
            let { guildEventId: n } = e,
              t = { ...c };
            (t[n] = Date.now()), (c = t);
          },
        }));
    },
    495279: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var l = t(482241);
      function i(e, n, t, i) {
        let { scheduled_start_time: u, scheduled_end_time: s } = e;
        return null == u && null == s
          ? l.Z.deleteGuildEventException(n, t, i)
          : l.Z.updateGuildEventException(
              {
                scheduled_start_time: u,
                scheduled_end_time: s,
                is_canceled: !1,
              },
              n,
              t,
              i,
            );
      }
    },
    554747: function (e, n, t) {
      t.d(n, {
        Vm: function () {
          return L;
        },
        ZP: function () {
          return v;
        },
        eF: function () {
          return S;
        },
        gM: function () {
          return m;
        },
        k5: function () {
          return C;
        },
        qY: function () {
          return D;
        },
        sz: function () {
          return O;
        },
        u1: function () {
          return P;
        },
      }),
        t(47120),
        t(724458);
      var l = t(470079),
        i = t(442837),
        u = t(241155),
        s = t(592125),
        a = t(984933),
        r = t(430824),
        E = t(496675),
        d = t(70956),
        o = t(823379),
        c = t(924301),
        _ = t(658041),
        Z = t(835184),
        T = t(79874),
        N = t(854698),
        I = t(765305),
        g = t(981631);
      let M = [],
        f = 15 * d.Z.Millis.MINUTE;
      function v(e, n) {
        return (0, i.Wu)(
          [r.Z, u.Z, c.ZP, E.Z, s.Z, a.ZP],
          () => {
            let t = r.Z.getGuild(e);
            if (null == t) return M;
            if (t.hasFeature(g.oNc.HUB)) {
              var l, i;
              let e =
                null === (l = a.ZP.getDefaultChannel(t.id)) || void 0 === l
                  ? void 0
                  : l.id;
              return (
                null !== (i = u.Z.getEventDirectoryEntries(e)) && void 0 !== i
                  ? i
                  : []
              )
                .map((e) => {
                  let n = e.scheduledEventId,
                    t = c.ZP.getGuildScheduledEvent(n);
                  return null != t
                    ? t
                    : u.Z.getCachedGuildScheduledEventById(n);
                })
                .filter(o.lm);
            }
            return c.ZP.getGuildScheduledEventsByIndex(
              null != n ? n : c.bN.GUILD_EVENT_UPCOMING(t.id),
            ).filter((e) => {
              let n = e.channel_id;
              if (null == n) return !0;
              let t = s.Z.getChannel(n);
              return E.Z.can(g.Plq.VIEW_CHANNEL, t);
            });
          },
          [n, e],
        );
      }
      function D(e) {
        return (0, i.e7)(
          [c.ZP, s.Z, E.Z],
          () => {
            let n = s.Z.getChannel(e);
            if (
              !E.Z.can(g.Plq.VIEW_CHANNEL, n) ||
              null == (null == n ? void 0 : n.guild_id)
            )
              return null;
            let t = c.ZP.getGuildScheduledEventsByIndex(
              c.bN.CHANNEL_EVENT_ACTIVE(e),
            );
            return t.length > 0 ? t[0] : null;
          },
          [e],
        );
      }
      function m(e) {
        let n = (0, i.Wu)(
          [c.ZP],
          () => c.ZP.getGuildScheduledEventsForGuild(e),
          [e],
        );
        return l.useMemo(() => {
          let e = new Map();
          return (
            n.forEach((n) => {
              let t = n.channel_id;
              null != t && e.set(t, n);
            }),
            e
          );
        }, [n]);
      }
      function L(e) {
        var n, t;
        let l =
            ((n = e),
            (0, i.Wu)(
              [c.ZP, s.Z, E.Z],
              () =>
                c.ZP.getGuildScheduledEventsByIndex(
                  c.bN.GUILD_EVENT_UPCOMING(n),
                ).filter((e) => {
                  if (
                    e.entity_type === I.WX.NONE ||
                    e.status !== I.p1.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let n = s.Z.getChannel(e.channel_id);
                  return E.Z.can(g.Plq.VIEW_CHANNEL, n);
                }),
              [n],
            )),
          u = (0, i.cj)([Z.Z], () => Z.Z.getAllEventDismissals()),
          a = (0, i.cj)([Z.Z], () => Z.Z.getAllUpcomingNoticeSeenTimes()),
          d = (0, i.cj)(
            [c.ZP],
            () =>
              null == l
                ? {}
                : l.reduce((e, n) => {
                    let t = (0, N.DK)(n);
                    return {
                      ...e,
                      [n.id]: c.ZP.isInterestedInEventRecurrence(n.id, t),
                    };
                  }, {}),
            [l],
          ),
          o = (0, i.e7)([r.Z], () => r.Z.getGuild(e)),
          T =
            null != o &&
            !o.hasFeature(g.oNc.COMMUNITY) &&
            o.hasFeature(g.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != l && null != d && T)
          for (let e = 0; e < l.length; e++) {
            let n = l[e],
              i = u[n.id],
              s = a[n.id],
              r = null !== (t = d[n.id]) && void 0 !== t && t,
              E = (0, _.M)(n, i, s, r);
            if (null != E) return { upcomingEvent: n, noticeType: E };
          }
      }
      function C(e) {
        return (0, i.e7)(
          [c.ZP, s.Z, E.Z],
          () =>
            c.ZP.getGuildScheduledEventsByIndex(
              c.bN.GUILD_EVENT_ACTIVE(e),
            ).find((e) => {
              if (e.entity_type === I.WX.NONE || !(0, c.xt)(e)) return !1;
              if (null == e.channel_id) return !0;
              let n = s.Z.getChannel(e.channel_id);
              return E.Z.can(g.Plq.VIEW_CHANNEL, n);
            }),
          [e],
        );
      }
      function P(e) {
        return (0, i.e7)(
          [c.ZP],
          () =>
            c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(e)),
          [e],
        );
      }
      function S(e) {
        return (0, i.e7)(
          [s.Z, c.ZP],
          () => {
            let n = c.ZP.getGuildScheduledEventsByIndex(
              c.bN.GUILD_EVENT_ACTIVE(e),
            ).find((e) => null != s.Z.getChannel(e.channel_id));
            return s.Z.getChannel(null == n ? void 0 : n.channel_id);
          },
          [e],
        );
      }
      function O(e) {
        let [n, t] = l.useState(() => Date.now());
        l.useEffect(() => {
          let e = setInterval(() => {
            t(Date.now());
          }, f);
          return () => clearInterval(e);
        }, []);
        let u = (0, i.e7)(
          [c.ZP],
          () =>
            null == e
              ? []
              : c.ZP.getGuildScheduledEventsByIndex(
                  c.bN.CHANNEL_EVENT_UPCOMING(e),
                ),
          [e, n],
        );
        return l.useMemo(
          () =>
            u.filter((e) => {
              let { startTime: n, endTime: t } = (0, T.Kq)(e),
                { withinStartWindow: l, diffMinutes: i } = (0, N.ub)(
                  n.toISOString(),
                  null == t ? void 0 : t.toISOString(),
                );
              return e.status !== I.p1.ACTIVE && l && i < 15;
            }),
          [u],
        );
      }
    },
    334877: function (e, n, t) {
      t.d(n, {
        l: function () {
          return u;
        },
      });
      var l = t(652874),
        i = t(731965);
      let u = (0, l.Z)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(n) {
          (0, i.j)(() => e({ canCloseModal: n }));
        },
      }));
    },
    215269: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return M;
          },
        });
      var l = t(735250);
      t(470079);
      var i = t(481060),
        u = t(239091),
        s = t(410575),
        a = t(299206),
        r = t(70877),
        E = t(572427),
        d = t(231259),
        o = t(159233),
        c = t(924952),
        _ = t(99528),
        Z = t(830394),
        T = t(473545),
        N = t(124422),
        I = t(981631),
        g = t(689938);
      function M(e) {
        let {
            guildEventId: n,
            recurrenceId: t,
            channel: M,
            guild: f,
            analyticsContext: v,
            isRecurrenceItem: D = !1,
            onSelect: m,
          } = e,
          L = (0, Z.Z)({
            guildEventId: n,
            recurrenceId: t,
            guild: f,
            channel: M,
          }),
          C = (0, d.Z)({
            guildEventId: n,
            recurrenceId: t,
            guild: f,
            channel: M,
          }),
          P = (0, o.Z)({
            guildEventId: n,
            guild: f,
            channel: M,
            recurrenceId: t,
            isRecurrenceItem: D,
          }),
          S = (0, c.Z)(n, f, M),
          O = (0, N.Z)(n, f, M),
          h = (0, E.Z)(n, f.id, t),
          R = (0, _.Z)(n),
          A = (0, a.Z)({ id: n, label: g.Z.Messages.COPY_ID_EVENT }),
          V = (0, a.Z)({ id: t, label: g.Z.Messages.COPY_ID_EVENT_RECURRENCE }),
          p = (0, r.Z)(n, f.id, M, t),
          x = (0, T.Z)({ guildEventId: n, guildId: f.id, recurrenceId: t });
        return (0, l.jsx)(s.Z, {
          context: v,
          object: I.qAy.CONTEXT_MENU,
          children: (0, l.jsxs)(i.Menu, {
            navId: "user-context",
            onClose: u.Zy,
            "aria-label": g.Z.Messages.USER_ACTIONS_MENU_LABEL,
            onSelect: m,
            children: [
              (0, l.jsxs)(i.MenuGroup, {
                children: [p, !D && O, P, !D && S, C, L, h, D && x],
              }),
              !D && (0, l.jsx)(i.MenuGroup, { children: R }),
              (0, l.jsxs)(i.MenuGroup, { children: [A, V] }),
            ],
          }),
        });
      }
    },
    70877: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(360963),
        u = t.n(i),
        s = t(913527),
        a = t.n(s),
        r = t(593473),
        E = t(442837),
        d = t(481060),
        o = t(579806),
        c = t(957730),
        _ = t(430824),
        Z = t(358085),
        T = t(924301),
        N = t(79874),
        I = t(236373),
        g = t(854698),
        M = t(765305),
        f = t(981631),
        v = t(689938);
      let D = "YYYYMMDDTHHmmss",
        m = "YYYY-MM-DDTHH:mm:ss",
        L = /RRULE:.*/;
      function C(e, n, t, i) {
        var s, C, P;
        let S;
        let O = (0, E.e7)([T.ZP], () => T.ZP.isActive(e)),
          h = (0, N.zI)(null != e ? e : "", i),
          R = (0, E.e7)([T.ZP], () => T.ZP.getGuildScheduledEvent(e), [e]),
          A = (0, E.e7)([_.Z], () => _.Z.getGuild(n), [n]);
        if (O || null == h || null == R) return null;
        S =
          R.entity_type === M.WX.EXTERNAL
            ? R.entity_metadata.location
            : null != t && null != A
              ? v.Z.Messages.CALENDAR_CHANNEL_LOCATION.format({
                  channelName: t.name,
                  guildName: A.name,
                })
              : v.Z.Messages.NOTIFICATION_TITLE_DISCORD;
        let V = a()(R.scheduled_start_time),
          p = null != R.scheduled_end_time ? a()(R.scheduled_end_time) : V,
          x =
            null != R.description && "" !== R.description
              ? c.ZP.unparse(
                  R.description,
                  null !== (s = null == t ? void 0 : t.id) && void 0 !== s
                    ? s
                    : f.lds,
                  !0,
                )
              : "",
          U = (0, I.KV)(R.recurrence_rule),
          G = null != U ? (0, g.Ho)(U) : null,
          { startTime: b, endTime: j } = h,
          y = null !== (C = a()(b)) && void 0 !== C ? C : V,
          w = null !== (P = a()(null != j ? j : b)) && void 0 !== P ? P : V,
          H = () => {
            let e = u()();
            e.createEvent({
              start: V,
              end: p,
              summary: R.name,
              description: x,
              location: S,
              repeating: G,
            }),
              Z.isPlatformEmbedded
                ? o.Z.fileManager.saveWithDialog(
                    e.toString(),
                    "discord-event.ics",
                  )
                : window.open(e.toURL(), "_blank");
          };
        return (0, l.jsxs)(d.MenuItem, {
          id: v.Z.Messages.ADD_TO_CALENDAR,
          label: v.Z.Messages.ADD_TO_CALENDAR,
          action: H,
          children: [
            (0, l.jsx)(d.MenuItem, {
              id: v.Z.Messages.ADD_TO_GOOGLE_CALENDAR,
              label: v.Z.Messages.ADD_TO_GOOGLE_CALENDAR,
              action: () => {
                var e;
                let n = null == G ? void 0 : G.toString(),
                  t = {
                    text: R.name,
                    dates: "".concat(V.format(D), "/").concat(p.format(D)),
                    details: x,
                    action: "TEMPLATE",
                    location: S,
                    recur:
                      null != n
                        ? null === (e = L.exec(n)) || void 0 === e
                          ? void 0
                          : e[0]
                        : void 0,
                  },
                  l = "https://calendar.google.com/calendar/render?".concat(
                    (0, r.stringify)(t),
                  );
                window.open(l, "_blank");
              },
            }),
            (0, l.jsx)(d.MenuItem, {
              id: v.Z.Messages.DOWNLOAD_ICS,
              label: v.Z.Messages.DOWNLOAD_ICS,
              action: H,
            }),
            (0, l.jsx)(d.MenuItem, {
              id: v.Z.Messages.ADD_TO_YAHOO,
              label: v.Z.Messages.ADD_TO_YAHOO,
              action: () => {
                let e = {
                    v: 60,
                    title: R.name,
                    st: y.format(D),
                    et: w.format(D),
                    desc: x,
                    in_loc: S,
                  },
                  n = "https://calendar.yahoo.com/?".concat(
                    (0, r.stringify)(e),
                  );
                window.open(n, "_blank");
              },
            }),
            (0, l.jsx)(d.MenuItem, {
              id: v.Z.Messages.ADD_TO_OUTLOOK,
              label: v.Z.Messages.ADD_TO_OUTLOOK,
              action: () => {
                let e = {
                    path: "/calendar/action/compose",
                    rru: "addevent",
                    startdt: y.format(m),
                    enddt: w.format(m),
                    subject: R.name,
                    body: x,
                    location: S,
                    allday: !1,
                  },
                  n =
                    "https://outlook.live.com/calendar/0/deeplink/compose?".concat(
                      (0, r.stringify)(e),
                    );
                window.open(n, "_blank");
              },
            }),
          ],
        });
      }
    },
    572427: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(481060),
        u = t(572004),
        s = t(592126),
        a = t(981631),
        r = t(689938);
      function E(e, n, t) {
        let E = null != t,
          { isMember: d } = (0, s.Z)(n, e);
        if (!d) return null;
        function o() {
          let l =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          (0, u.JG)(
            ""
              .concat(location.protocol, "//")
              .concat(location.host)
              .concat(a.Z5c.GUILD_EVENT_DETAILS(n, e, l ? null : t)),
          ),
            (0, i.showToast)(
              (0, i.createToast)(r.Z.Messages.COPIED_LINK, i.ToastType.SUCCESS),
            );
        }
        return (0, l.jsx)(i.MenuItem, {
          id: r.Z.Messages.COPY_EVENT_LINK,
          label: r.Z.Messages.COPY_EVENT_LINK,
          action: E ? void 0 : () => o(!0),
          children:
            E &&
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(i.MenuItem, {
                  id: r.Z.Messages.COPY_RECURRENCE_LINK,
                  label: r.Z.Messages.COPY_RECURRENCE_LINK,
                  action: () => o(!1),
                }),
                (0, l.jsx)(i.MenuItem, {
                  id: r.Z.Messages.COPY_SERIES_LINK,
                  label: r.Z.Messages.COPY_SERIES_LINK,
                  action: () => o(!0),
                }),
              ],
            }),
        });
      }
    },
    231259: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var l = t(735250);
      t(470079);
      var i = t(442837),
        u = t(481060),
        s = t(357156),
        a = t(924301),
        r = t(482241),
        E = t(894017),
        d = t(79874),
        o = t(689938);
      function c(e) {
        let { guildEventId: n, recurrenceId: t, guild: c, channel: _ } = e,
          Z = null != t,
          { canManageGuildEvent: T } = (0, s.XJ)(null != _ ? _ : c),
          [N, I] = (0, i.Wu)([a.ZP], () => [
            a.ZP.isActive(n),
            a.ZP.getGuildScheduledEvent(n),
          ]),
          g = (0, E.Z)(t, null == I ? void 0 : I.id),
          M = null != I && T(I),
          f = (null == I ? void 0 : I.recurrence_rule) != null && !Z,
          v = (0, d.zI)(n, t);
        if (!M || (N && !f && !Z) || (Z && !Z) || null == I || null == v)
          return null;
        let { startTime: D } = v;
        if (N && Z) {
          var m;
          if (null == D) return null;
          let e = new Date(
            null !== (m = null == g ? void 0 : g.scheduled_start_time) &&
            void 0 !== m
              ? m
              : D,
          );
          if (new Date() > e) return null;
        }
        let L = (e) => {
          (0, u.openModal)((i) =>
            (0, l.jsxs)(u.ConfirmModal, {
              ...i,
              header: o.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
              confirmText:
                f || e
                  ? o.Z.Messages.DELETE_ALL_EVENTS
                  : o.Z.Messages.DELETE_EVENT,
              cancelText: o.Z.Messages.NEVERMIND,
              onConfirm: () =>
                Z && !e
                  ? r.Z.deleteRecurrence(c.id, n, t, g)
                  : r.Z.deleteGuildEvent(n, c.id),
              children: [
                (0, l.jsx)(u.Text, {
                  variant: "text-md/normal",
                  children: o.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY,
                }),
                (0, l.jsx)("br", {}),
                (f || e) &&
                  (0, l.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children:
                      o.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format(),
                  }),
              ],
            }),
          );
        };
        return (0, l.jsx)(u.MenuItem, {
          id: o.Z.Messages.DELETE_EVENT,
          label: o.Z.Messages.DELETE_EVENT,
          action: Z ? void 0 : () => L(),
          color: "danger",
          children:
            Z &&
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(u.MenuItem, {
                  id: o.Z.Messages.DELETE_THIS_EVENT,
                  label: o.Z.Messages.DELETE_THIS_EVENT,
                  action: () => L(),
                  disabled: null == g ? void 0 : g.is_canceled,
                  color: "danger",
                }),
                (0, l.jsx)(u.MenuItem, {
                  id: o.Z.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                  label: o.Z.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                  action: () => L(!0),
                  color: "danger",
                }),
              ],
            }),
        });
      }
    },
    159233: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        u = t(481060),
        s = t(357156),
        a = t(924301),
        r = t(894017),
        E = t(79874),
        d = t(576749),
        o = t(689938);
      function c(e) {
        let {
            guildEventId: n,
            guild: c,
            channel: _,
            recurrenceId: Z,
            isRecurrenceItem: T,
          } = e,
          { canManageGuildEvent: N } = (0, s.XJ)(null != _ ? _ : c),
          I = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(n)),
          g = N(I),
          M = (0, d.Z)(),
          f = (0, r.Z)(Z, null == I ? void 0 : I.id),
          v = (0, E.zI)(n, Z);
        if (!g || null == v || null == I) return null;
        let D = null != I.recurrence_rule && !T,
          m = (e) => {
            (null == Z || e) && !T
              ? (0, u.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                    t.e("58023"),
                    t.e("81350"),
                  ]).then(t.bind(t, 779250));
                  return (t) =>
                    (0, l.jsx)(e, {
                      ...t,
                      guildScheduledEventId: n,
                      guildId: c.id,
                    });
                }, M)
              : null != Z &&
                (0, u.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("27919")
                    .then(t.bind(t, 379038));
                  return (n) =>
                    (0, l.jsx)(e, { ...n, guildEvent: I, recurrenceId: Z });
                }, M);
          };
        return (0, l.jsx)(u.MenuItem, {
          id: o.Z.Messages.EDIT_EVENT,
          label: o.Z.Messages.EDIT_EVENT,
          action: D ? void 0 : () => m(!0),
          children:
            D &&
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(u.MenuItem, {
                  id: o.Z.Messages.EDIT_THIS_EVENT,
                  label: o.Z.Messages.EDIT_THIS_EVENT,
                  action: () => m(!1),
                  disabled:
                    (null == f ? void 0 : f.is_canceled) ||
                    v.startTime.getTime() < Date.now(),
                }),
                (0, l.jsx)(u.MenuItem, {
                  id: o.Z.Messages.EDIT_ALL_EVENTS,
                  label: o.Z.Messages.EDIT_ALL_EVENTS,
                  action: () => m(!0),
                  disabled:
                    new Date(I.scheduled_start_time).getTime() < Date.now(),
                }),
              ],
            }),
        });
      }
    },
    924952: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        u = t(481060),
        s = t(357156),
        a = t(471253),
        r = t(924301),
        E = t(482241),
        d = t(765305),
        o = t(689938);
      function c(e, n, t) {
        let { canManageGuildEvent: c } = (0, s.XJ)(null != t ? t : n),
          _ = (0, i.e7)([r.ZP], () => r.ZP.isActive(e)),
          Z = (0, i.e7)([r.ZP], () => r.ZP.getGuildScheduledEvent(e), [e]),
          T = c(Z);
        if (
          null == e ||
          !T ||
          !_ ||
          (null == Z ? void 0 : Z.entity_type) === d.WX.EXTERNAL
        )
          return null;
        let N = () => {
          if (null == t ? void 0 : t.isGuildStageVoice()) {
            (0, a.NZ)(t);
            return;
          }
          null != e && E.Z.endEvent(e, n.id), (0, u.closeAllModals)();
        };
        return (0, l.jsx)(u.MenuItem, {
          id: o.Z.Messages.END_EVENT,
          label: o.Z.Messages.END_EVENT,
          action: function () {
            (0, u.openModal)((e) =>
              (0, l.jsx)(u.ConfirmModal, {
                ...e,
                header: o.Z.Messages.END_EVENT,
                confirmText: o.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                cancelText: o.Z.Messages.CANCEL,
                onConfirm: N,
                children: (0, l.jsx)(u.Text, {
                  variant: "text-md/normal",
                  children: o.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE,
                }),
              }),
            );
          },
          color: "danger",
        });
      }
    },
    99528: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        u = t(481060),
        s = t(726521),
        a = t(924301),
        r = t(689938);
      function E(e) {
        let n = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(e), [e]);
        return null == e || null == n
          ? null
          : (0, l.jsx)(u.MenuItem, {
              id: "report-event",
              label: r.Z.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
              action: () => (0, s.d$)(n),
              icon: u.FlagIcon,
              color: "danger",
            });
      }
    },
    830394: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      }),
        t(47120);
      var l = t(735250);
      t(470079);
      var i = t(442837),
        u = t(481060),
        s = t(357156),
        a = t(924301),
        r = t(495279),
        E = t(894017),
        d = t(689938);
      function o(e) {
        let { guildEventId: n, recurrenceId: t, guild: o, channel: c } = e,
          _ = null != t,
          { canManageGuildEvent: Z } = (0, s.XJ)(null != c ? c : o),
          [T, N] = (0, i.Wu)([a.ZP], () => [
            a.ZP.isActive(n),
            a.ZP.getGuildScheduledEvent(n),
          ]),
          I = (0, E.Z)(t, null == N ? void 0 : N.id),
          g = null != N && Z(N);
        return _ && (null == I ? void 0 : I.is_canceled) && g && (!T || _)
          ? (0, l.jsx)(u.MenuItem, {
              id: d.Z.Messages.RESTORE_EVENT,
              label: d.Z.Messages.RESTORE_EVENT,
              action: () => {
                null != t && null != I && (0, r.Z)(I, o.id, n, t);
              },
            })
          : null;
      }
    },
    473545: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        u = t(481060),
        s = t(41776),
        a = t(314897),
        r = t(924301),
        E = t(482241),
        d = t(894017),
        o = t(765305),
        c = t(689938);
      function _(e) {
        let { guildEventId: n, guildId: t, recurrenceId: _ } = e,
          Z = (0, i.e7)([s.Z], () => s.Z.isLurking(t), [t]),
          T = (0, i.e7)([a.default], () => a.default.getId()),
          {
            rsvped: N,
            baseRsvp: I,
            recurrenceRsvp: g,
          } = (0, i.cj)(
            [r.ZP],
            () => ({
              rsvped: r.ZP.isInterestedInEventRecurrence(n, _),
              baseRsvp: r.ZP.getRsvp(n, null, T),
              recurrenceRsvp: r.ZP.getRsvp(n, _, T),
            }),
            [_, n, T],
          ),
          M = (0, d.Z)(_, n);
        if (Z || (null == M ? void 0 : M.is_canceled)) return null;
        let f = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l =
              (null == I ? void 0 : I.response) === o.gv.INTERESTED
                ? o.gv.UNINTERESTED
                : o.gv.INTERESTED,
            i = e ? null : _;
          E.Z.updateRsvp(n, i, t, l);
        };
        return (0, l.jsxs)(u.MenuItem, {
          id: N
            ? c.Z.Messages.EVENT_MARK_NOT_INTERESTED
            : c.Z.Messages.EVENT_MARK_INTERESTED,
          label: N
            ? c.Z.Messages.EVENT_MARK_NOT_INTERESTED
            : c.Z.Messages.EVENT_MARK_INTERESTED,
          action: void 0,
          children: [
            (0, l.jsx)(u.MenuItem, {
              id: c.Z.Messages
                .GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
              label:
                c.Z.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
              action: () => f(!1),
            }),
            (0, l.jsx)(u.MenuItem, {
              id: c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
              label:
                c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
              action: () => f(!0),
              disabled: null != g,
            }),
          ],
        });
      }
    },
    124422: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        u = t(481060),
        s = t(357156),
        a = t(924301),
        r = t(554747),
        E = t(981631),
        d = t(689938);
      function o(e, n, o) {
        var c;
        let { canManageGuildEvent: _ } = (0, s.XJ)(null != o ? o : n),
          Z = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(e), [e]),
          T = _(Z),
          N =
            null !=
            (0, r.qY)(
              null !== (c = null == o ? void 0 : o.id) && void 0 !== c
                ? c
                : E.lds,
            ),
          I = null != Z && (0, a.xt)(Z);
        return T && !I && !N
          ? (0, l.jsx)(u.MenuItem, {
              id: d.Z.Messages.START_EVENT,
              label: d.Z.Messages.START_EVENT,
              action: function () {
                null != Z &&
                  (0, u.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      t.e("84722"),
                      t.e("66586"),
                    ]).then(t.bind(t, 296864));
                    return (n) => (0, l.jsx)(e, { ...n, event: Z });
                  });
              },
            })
          : null;
      }
    },
    576749: function (e, n, t) {
      var l = t(481060),
        i = t(40851),
        u = t(334877),
        s = t(981631);
      let a = "guild-event-modal";
      n.Z = () => {
        let e =
          (0, i.bp)() === s.IlC.POPOUT
            ? l.POPOUT_MODAL_CONTEXT
            : l.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: a,
          contextKey: e,
          onCloseRequest: () => {
            u.l.getState().canCloseModal && (0, l.closeModal)(a, e);
          },
        };
      };
    },
    613919: function () {},
    636463: function () {},
  },
]);
//# sourceMappingURL=6a949aed0d5a1268c118.js.map
