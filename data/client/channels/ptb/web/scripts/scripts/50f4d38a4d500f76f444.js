"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37133"],
  {
    658041: function (e, n, t) {
      t.d(n, {
        M: function () {
          return r;
        },
      });
      var l = t(913527),
        i = t.n(l),
        u = t(709054),
        s = t(765305);
      function r(e, n, t, l) {
        let r = i()(),
          a = new Date(e.scheduled_start_time).getTime(),
          d = { start: a - s.VF, end: a };
        if (r.isBetween(d.start, d.end)) {
          if (null != n) {
            let e = i()(n),
              t = e.isBetween(d.start, d.end),
              u = e.isBetween(i()(a).subtract(s.zV, "days"), a);
            return t || (u && !l) ? void 0 : s.X_.EVENT_STARTING_SOON;
          }
          return s.X_.EVENT_STARTING_SOON;
        }
        let E = u.default.extractTimestamp(e.id),
          o = Math.min((null != t ? t : E) + s.Fc, a);
        if (r.isBetween(E, o) && null == n && !l) return s.X_.NEW_EVENT;
      }
    },
    835184: function (e, n, t) {
      var l,
        i = t(442837),
        u = t(570140),
        s = t(314897),
        r = t(924301),
        a = t(658041),
        d = t(765305);
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
      let o = {},
        c = {};
      function _(e) {
        let n = { ...o };
        delete n[e], (o = n);
        let t = { ...c };
        delete t[e], (c = t);
      }
      class T extends (l = i.ZP.PersistedStore) {
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
      E(T, "displayName", "UpcomingEventNoticesStore"),
        E(T, "persistKey", "UpcomingEventNotices"),
        (n.Z = new T(u.Z, {
          UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
            let { eventId: n } = e,
              t = { ...o };
            (t[n] = Date.now()), (o = t);
          },
          GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
            let { guildScheduledEvent: n } = e;
            (n.status === d.p1.CANCELED || n.status === d.p1.COMPLETED) &&
              _(n.id);
          },
          GUILD_SCHEDULED_EVENT_DELETE: function (e) {
            let { guildScheduledEvent: n } = e;
            _(n.id);
          },
          GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
            let { userId: n, guildEventId: t } = e;
            if (n !== s.default.getId()) return;
            let l = r.ZP.getGuildScheduledEvent(t);
            if (null == l || l.status !== d.p1.SCHEDULED || null != o[t])
              return;
            let i = c[t];
            if ((0, a.M)(l, void 0, i, !1) === d.X_.NEW_EVENT) {
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
          return O;
        },
        ZP: function () {
          return D;
        },
        eF: function () {
          return C;
        },
        gM: function () {
          return S;
        },
        k5: function () {
          return A;
        },
        qY: function () {
          return v;
        },
        sz: function () {
          return h;
        },
        u1: function () {
          return m;
        },
      }),
        t(47120),
        t(724458);
      var l = t(470079),
        i = t(442837),
        u = t(241155),
        s = t(592125),
        r = t(984933),
        a = t(430824),
        d = t(496675),
        E = t(70956),
        o = t(823379),
        c = t(924301),
        _ = t(658041),
        T = t(835184),
        N = t(79874),
        I = t(854698),
        Z = t(765305),
        f = t(981631);
      let g = [],
        M = 15 * E.Z.Millis.MINUTE;
      function D(e, n) {
        return (0, i.Wu)(
          [a.Z, u.Z, c.ZP, d.Z, s.Z, r.ZP],
          () => {
            let t = a.Z.getGuild(e);
            if (null == t) return g;
            if (t.hasFeature(f.oNc.HUB)) {
              var l, i;
              let e =
                null === (l = r.ZP.getDefaultChannel(t.id)) || void 0 === l
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
              return d.Z.can(f.Plq.VIEW_CHANNEL, t);
            });
          },
          [n, e],
        );
      }
      function v(e) {
        return (0, i.e7)(
          [c.ZP, s.Z, d.Z],
          () => {
            let n = s.Z.getChannel(e);
            if (
              !d.Z.can(f.Plq.VIEW_CHANNEL, n) ||
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
      function S(e) {
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
      function O(e) {
        var n, t;
        let l =
            ((n = e),
            (0, i.Wu)(
              [c.ZP, s.Z, d.Z],
              () =>
                c.ZP.getGuildScheduledEventsByIndex(
                  c.bN.GUILD_EVENT_UPCOMING(n),
                ).filter((e) => {
                  if (
                    e.entity_type === Z.WX.NONE ||
                    e.status !== Z.p1.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let n = s.Z.getChannel(e.channel_id);
                  return d.Z.can(f.Plq.VIEW_CHANNEL, n);
                }),
              [n],
            )),
          u = (0, i.cj)([T.Z], () => T.Z.getAllEventDismissals()),
          r = (0, i.cj)([T.Z], () => T.Z.getAllUpcomingNoticeSeenTimes()),
          E = (0, i.cj)(
            [c.ZP],
            () =>
              null == l
                ? {}
                : l.reduce((e, n) => {
                    let t = (0, I.DK)(n);
                    return {
                      ...e,
                      [n.id]: c.ZP.isInterestedInEventRecurrence(n.id, t),
                    };
                  }, {}),
            [l],
          ),
          o = (0, i.e7)([a.Z], () => a.Z.getGuild(e)),
          N =
            null != o &&
            !o.hasFeature(f.oNc.COMMUNITY) &&
            o.hasFeature(f.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != l && null != E && N)
          for (let e = 0; e < l.length; e++) {
            let n = l[e],
              i = u[n.id],
              s = r[n.id],
              a = null !== (t = E[n.id]) && void 0 !== t && t,
              d = (0, _.M)(n, i, s, a);
            if (null != d) return { upcomingEvent: n, noticeType: d };
          }
      }
      function A(e) {
        return (0, i.e7)(
          [c.ZP, s.Z, d.Z],
          () =>
            c.ZP.getGuildScheduledEventsByIndex(
              c.bN.GUILD_EVENT_ACTIVE(e),
            ).find((e) => {
              if (e.entity_type === Z.WX.NONE || !(0, c.xt)(e)) return !1;
              if (null == e.channel_id) return !0;
              let n = s.Z.getChannel(e.channel_id);
              return d.Z.can(f.Plq.VIEW_CHANNEL, n);
            }),
          [e],
        );
      }
      function m(e) {
        return (0, i.e7)(
          [c.ZP],
          () =>
            c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(e)),
          [e],
        );
      }
      function C(e) {
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
      function h(e) {
        let [n, t] = l.useState(() => Date.now());
        l.useEffect(() => {
          let e = setInterval(() => {
            t(Date.now());
          }, M);
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
              let { startTime: n, endTime: t } = (0, N.Kq)(e),
                { withinStartWindow: l, diffMinutes: i } = (0, I.ub)(
                  n.toISOString(),
                  null == t ? void 0 : t.toISOString(),
                );
              return e.status !== Z.p1.ACTIVE && l && i < 15;
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
            return g;
          },
        });
      var l = t(735250);
      t(470079);
      var i = t(481060),
        u = t(239091),
        s = t(410575),
        r = t(299206),
        a = t(70877),
        d = t(572427),
        E = t(231259),
        o = t(159233),
        c = t(924952),
        _ = t(99528),
        T = t(830394),
        N = t(473545),
        I = t(124422),
        Z = t(981631),
        f = t(689938);
      function g(e) {
        let {
            guildEventId: n,
            recurrenceId: t,
            channel: g,
            guild: M,
            analyticsContext: D,
            isRecurrenceItem: v = !1,
            onSelect: S,
          } = e,
          O = (0, T.Z)({
            guildEventId: n,
            recurrenceId: t,
            guild: M,
            channel: g,
          }),
          A = (0, E.Z)({
            guildEventId: n,
            recurrenceId: t,
            guild: M,
            channel: g,
          }),
          m = (0, o.Z)({
            guildEventId: n,
            guild: M,
            channel: g,
            recurrenceId: t,
            isRecurrenceItem: v,
          }),
          C = (0, c.Z)(n, M, g),
          h = (0, I.Z)(n, M, g),
          P = (0, d.Z)(n, M.id, t),
          R = (0, _.Z)(n),
          L = (0, r.Z)({ id: n, label: f.Z.Messages.COPY_ID_EVENT }),
          p = (0, r.Z)({ id: t, label: f.Z.Messages.COPY_ID_EVENT_RECURRENCE }),
          V = (0, a.Z)(n, M.id, g, t),
          U = (0, N.Z)({ guildEventId: n, guildId: M.id, recurrenceId: t });
        return (0, l.jsx)(s.Z, {
          context: D,
          object: Z.qAy.CONTEXT_MENU,
          children: (0, l.jsxs)(i.Menu, {
            navId: "user-context",
            onClose: u.Zy,
            "aria-label": f.Z.Messages.USER_ACTIONS_MENU_LABEL,
            onSelect: S,
            children: [
              (0, l.jsxs)(i.MenuGroup, {
                children: [V, !v && h, m, !v && C, A, O, P, v && U],
              }),
              !v && (0, l.jsx)(i.MenuGroup, { children: R }),
              (0, l.jsxs)(i.MenuGroup, { children: [L, p] }),
            ],
          }),
        });
      }
    },
    70877: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(360963),
        u = t.n(i),
        s = t(913527),
        r = t.n(s),
        a = t(593473),
        d = t(442837),
        E = t(481060),
        o = t(579806),
        c = t(957730),
        _ = t(430824),
        T = t(358085),
        N = t(924301),
        I = t(79874),
        Z = t(236373),
        f = t(854698),
        g = t(765305),
        M = t(981631),
        D = t(689938);
      let v = "YYYYMMDDTHHmmss",
        S = "YYYY-MM-DDTHH:mm:ss",
        O = /RRULE:.*/;
      function A(e, n, t, i) {
        var s, A, m;
        let C;
        let h = (0, d.e7)([N.ZP], () => N.ZP.isActive(e)),
          P = (0, I.zI)(null != e ? e : "", i),
          R = (0, d.e7)([N.ZP], () => N.ZP.getGuildScheduledEvent(e), [e]),
          L = (0, d.e7)([_.Z], () => _.Z.getGuild(n), [n]);
        if (h || null == P || null == R) return null;
        C =
          R.entity_type === g.WX.EXTERNAL
            ? R.entity_metadata.location
            : null != t && null != L
              ? D.Z.Messages.CALENDAR_CHANNEL_LOCATION.format({
                  channelName: t.name,
                  guildName: L.name,
                })
              : D.Z.Messages.NOTIFICATION_TITLE_DISCORD;
        let p = r()(R.scheduled_start_time),
          V = null != R.scheduled_end_time ? r()(R.scheduled_end_time) : p,
          U =
            null != R.description && "" !== R.description
              ? c.ZP.unparse(
                  R.description,
                  null !== (s = null == t ? void 0 : t.id) && void 0 !== s
                    ? s
                    : M.lds,
                  !0,
                )
              : "",
          G = (0, Z.KV)(R.recurrence_rule),
          b = null != G ? (0, f.Ho)(G) : null,
          { startTime: x, endTime: y } = P,
          w = null !== (A = r()(x)) && void 0 !== A ? A : p,
          j = null !== (m = r()(null != y ? y : x)) && void 0 !== m ? m : p,
          H = () => {
            let e = u()();
            e.createEvent({
              start: p,
              end: V,
              summary: R.name,
              description: U,
              location: C,
              repeating: b,
            }),
              T.isPlatformEmbedded
                ? o.Z.fileManager.saveWithDialog(
                    e.toString(),
                    "discord-event.ics",
                  )
                : window.open(e.toURL(), "_blank");
          };
        return (0, l.jsxs)(E.MenuItem, {
          id: D.Z.Messages.ADD_TO_CALENDAR,
          label: D.Z.Messages.ADD_TO_CALENDAR,
          action: H,
          children: [
            (0, l.jsx)(E.MenuItem, {
              id: D.Z.Messages.ADD_TO_GOOGLE_CALENDAR,
              label: D.Z.Messages.ADD_TO_GOOGLE_CALENDAR,
              action: () => {
                var e;
                let n = null == b ? void 0 : b.toString(),
                  t = {
                    text: R.name,
                    dates: "".concat(p.format(v), "/").concat(V.format(v)),
                    details: U,
                    action: "TEMPLATE",
                    location: C,
                    recur:
                      null != n
                        ? null === (e = O.exec(n)) || void 0 === e
                          ? void 0
                          : e[0]
                        : void 0,
                  },
                  l = "https://calendar.google.com/calendar/render?".concat(
                    (0, a.stringify)(t),
                  );
                window.open(l, "_blank");
              },
            }),
            (0, l.jsx)(E.MenuItem, {
              id: D.Z.Messages.DOWNLOAD_ICS,
              label: D.Z.Messages.DOWNLOAD_ICS,
              action: H,
            }),
            (0, l.jsx)(E.MenuItem, {
              id: D.Z.Messages.ADD_TO_YAHOO,
              label: D.Z.Messages.ADD_TO_YAHOO,
              action: () => {
                let e = {
                    v: 60,
                    title: R.name,
                    st: w.format(v),
                    et: j.format(v),
                    desc: U,
                    in_loc: C,
                  },
                  n = "https://calendar.yahoo.com/?".concat(
                    (0, a.stringify)(e),
                  );
                window.open(n, "_blank");
              },
            }),
            (0, l.jsx)(E.MenuItem, {
              id: D.Z.Messages.ADD_TO_OUTLOOK,
              label: D.Z.Messages.ADD_TO_OUTLOOK,
              action: () => {
                let e = {
                    path: "/calendar/action/compose",
                    rru: "addevent",
                    startdt: w.format(S),
                    enddt: j.format(S),
                    subject: R.name,
                    body: U,
                    location: C,
                    allday: !1,
                  },
                  n =
                    "https://outlook.live.com/calendar/0/deeplink/compose?".concat(
                      (0, a.stringify)(e),
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
          return d;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(481060),
        u = t(572004),
        s = t(592126),
        r = t(981631),
        a = t(689938);
      function d(e, n, t) {
        let d = null != t,
          { isMember: E } = (0, s.Z)(n, e);
        if (!E) return null;
        function o() {
          let l =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          (0, u.JG)(
            ""
              .concat(location.protocol, "//")
              .concat(location.host)
              .concat(r.Z5c.GUILD_EVENT_DETAILS(n, e, l ? null : t)),
          ),
            (0, i.showToast)(
              (0, i.createToast)(a.Z.Messages.COPIED_LINK, i.ToastType.SUCCESS),
            );
        }
        return (0, l.jsx)(i.MenuItem, {
          id: a.Z.Messages.COPY_EVENT_LINK,
          label: a.Z.Messages.COPY_EVENT_LINK,
          action: d ? void 0 : () => o(!0),
          children:
            d &&
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(i.MenuItem, {
                  id: a.Z.Messages.COPY_RECURRENCE_LINK,
                  label: a.Z.Messages.COPY_RECURRENCE_LINK,
                  action: () => o(!1),
                }),
                (0, l.jsx)(i.MenuItem, {
                  id: a.Z.Messages.COPY_SERIES_LINK,
                  label: a.Z.Messages.COPY_SERIES_LINK,
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
        r = t(924301),
        a = t(482241),
        d = t(894017),
        E = t(79874),
        o = t(689938);
      function c(e) {
        let { guildEventId: n, recurrenceId: t, guild: c, channel: _ } = e,
          T = null != t,
          { canManageGuildEvent: N } = (0, s.XJ)(null != _ ? _ : c),
          [I, Z] = (0, i.Wu)([r.ZP], () => [
            r.ZP.isActive(n),
            r.ZP.getGuildScheduledEvent(n),
          ]),
          f = (0, d.Z)(t, null == Z ? void 0 : Z.id),
          g = null != Z && N(Z),
          M = (null == Z ? void 0 : Z.recurrence_rule) != null && !T,
          D = (0, E.zI)(n, t);
        if (!g || (I && !M && !T) || (T && !T) || null == Z || null == D)
          return null;
        let { startTime: v } = D;
        if (I && T) {
          var S;
          if (null == v) return null;
          let e = new Date(
            null !== (S = null == f ? void 0 : f.scheduled_start_time) &&
            void 0 !== S
              ? S
              : v,
          );
          if (new Date() > e) return null;
        }
        let O = (e) => {
          (0, u.openModal)((i) =>
            (0, l.jsxs)(u.ConfirmModal, {
              ...i,
              header: o.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
              confirmText:
                M || e
                  ? o.Z.Messages.DELETE_ALL_EVENTS
                  : o.Z.Messages.DELETE_EVENT,
              cancelText: o.Z.Messages.NEVERMIND,
              onConfirm: () =>
                T && !e
                  ? a.Z.deleteRecurrence(c.id, n, t, f)
                  : a.Z.deleteGuildEvent(n, c.id),
              children: [
                (0, l.jsx)(u.Text, {
                  variant: "text-md/normal",
                  children: o.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY,
                }),
                (0, l.jsx)("br", {}),
                (M || e) &&
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
          action: T ? void 0 : () => O(),
          color: "danger",
          children:
            T &&
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(u.MenuItem, {
                  id: o.Z.Messages.DELETE_THIS_EVENT,
                  label: o.Z.Messages.DELETE_THIS_EVENT,
                  action: () => O(),
                  disabled: null == f ? void 0 : f.is_canceled,
                  color: "danger",
                }),
                (0, l.jsx)(u.MenuItem, {
                  id: o.Z.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                  label: o.Z.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                  action: () => O(!0),
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
        r = t(924301),
        a = t(894017),
        d = t(79874),
        E = t(576749),
        o = t(689938);
      function c(e) {
        let {
            guildEventId: n,
            guild: c,
            channel: _,
            recurrenceId: T,
            isRecurrenceItem: N,
          } = e,
          { canManageGuildEvent: I } = (0, s.XJ)(null != _ ? _ : c),
          Z = (0, i.e7)([r.ZP], () => r.ZP.getGuildScheduledEvent(n)),
          f = I(Z),
          g = (0, E.Z)(),
          M = (0, a.Z)(T, null == Z ? void 0 : Z.id),
          D = (0, d.zI)(n, T);
        if (!f || null == D || null == Z) return null;
        let v = null != Z.recurrence_rule && !N,
          S = (e) => {
            (null == T || e) && !N
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
                }, g)
              : null != T &&
                (0, u.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("27919")
                    .then(t.bind(t, 379038));
                  return (n) =>
                    (0, l.jsx)(e, { ...n, guildEvent: Z, recurrenceId: T });
                }, g);
          };
        return (0, l.jsx)(u.MenuItem, {
          id: o.Z.Messages.EDIT_EVENT,
          label: o.Z.Messages.EDIT_EVENT,
          action: v ? void 0 : () => S(!0),
          children:
            v &&
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(u.MenuItem, {
                  id: o.Z.Messages.EDIT_THIS_EVENT,
                  label: o.Z.Messages.EDIT_THIS_EVENT,
                  action: () => S(!1),
                  disabled:
                    (null == M ? void 0 : M.is_canceled) ||
                    D.startTime.getTime() < Date.now(),
                }),
                (0, l.jsx)(u.MenuItem, {
                  id: o.Z.Messages.EDIT_ALL_EVENTS,
                  label: o.Z.Messages.EDIT_ALL_EVENTS,
                  action: () => S(!0),
                  disabled:
                    new Date(Z.scheduled_start_time).getTime() < Date.now(),
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
        r = t(471253),
        a = t(924301),
        d = t(482241),
        E = t(765305),
        o = t(689938);
      function c(e, n, t) {
        let { canManageGuildEvent: c } = (0, s.XJ)(null != t ? t : n),
          _ = (0, i.e7)([a.ZP], () => a.ZP.isActive(e)),
          T = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(e), [e]),
          N = c(T);
        if (
          null == e ||
          !N ||
          !_ ||
          (null == T ? void 0 : T.entity_type) === E.WX.EXTERNAL
        )
          return null;
        let I = () => {
          if (null == t ? void 0 : t.isGuildStageVoice()) {
            (0, r.NZ)(t);
            return;
          }
          null != e && d.Z.endEvent(e, n.id), (0, u.closeAllModals)();
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
                onConfirm: I,
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
          return d;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        u = t(481060),
        s = t(726521),
        r = t(924301),
        a = t(689938);
      function d(e) {
        let n = (0, i.e7)([r.ZP], () => r.ZP.getGuildScheduledEvent(e), [e]);
        return null == e || null == n
          ? null
          : (0, l.jsx)(u.MenuItem, {
              id: "report-event",
              label: a.Z.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
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
        r = t(924301),
        a = t(495279),
        d = t(894017),
        E = t(689938);
      function o(e) {
        let { guildEventId: n, recurrenceId: t, guild: o, channel: c } = e,
          _ = null != t,
          { canManageGuildEvent: T } = (0, s.XJ)(null != c ? c : o),
          [N, I] = (0, i.Wu)([r.ZP], () => [
            r.ZP.isActive(n),
            r.ZP.getGuildScheduledEvent(n),
          ]),
          Z = (0, d.Z)(t, null == I ? void 0 : I.id),
          f = null != I && T(I);
        return _ && (null == Z ? void 0 : Z.is_canceled) && f && (!N || _)
          ? (0, l.jsx)(u.MenuItem, {
              id: E.Z.Messages.RESTORE_EVENT,
              label: E.Z.Messages.RESTORE_EVENT,
              action: () => {
                null != t && null != Z && (0, a.Z)(Z, o.id, n, t);
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
        r = t(314897),
        a = t(924301),
        d = t(482241),
        E = t(894017),
        o = t(765305),
        c = t(689938);
      function _(e) {
        let { guildEventId: n, guildId: t, recurrenceId: _ } = e,
          T = (0, i.e7)([s.Z], () => s.Z.isLurking(t), [t]),
          N = (0, i.e7)([r.default], () => r.default.getId()),
          {
            rsvped: I,
            baseRsvp: Z,
            recurrenceRsvp: f,
          } = (0, i.cj)(
            [a.ZP],
            () => ({
              rsvped: a.ZP.isInterestedInEventRecurrence(n, _),
              baseRsvp: a.ZP.getRsvp(n, null, N),
              recurrenceRsvp: a.ZP.getRsvp(n, _, N),
            }),
            [_, n, N],
          ),
          g = (0, E.Z)(_, n);
        if (T || (null == g ? void 0 : g.is_canceled)) return null;
        let M = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l =
              (null == Z ? void 0 : Z.response) === o.gv.INTERESTED
                ? o.gv.UNINTERESTED
                : o.gv.INTERESTED,
            i = e ? null : _;
          d.Z.updateRsvp(n, i, t, l);
        };
        return (0, l.jsxs)(u.MenuItem, {
          id: I
            ? c.Z.Messages.EVENT_MARK_NOT_INTERESTED
            : c.Z.Messages.EVENT_MARK_INTERESTED,
          label: I
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
              action: () => M(!1),
            }),
            (0, l.jsx)(u.MenuItem, {
              id: c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
              label:
                c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
              action: () => M(!0),
              disabled: null != f,
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
        r = t(924301),
        a = t(554747),
        d = t(981631),
        E = t(689938);
      function o(e, n, o) {
        var c;
        let { canManageGuildEvent: _ } = (0, s.XJ)(null != o ? o : n),
          T = (0, i.e7)([r.ZP], () => r.ZP.getGuildScheduledEvent(e), [e]),
          N = _(T),
          I =
            null !=
            (0, a.qY)(
              null !== (c = null == o ? void 0 : o.id) && void 0 !== c
                ? c
                : d.lds,
            ),
          Z = null != T && (0, r.xt)(T);
        return N && !Z && !I
          ? (0, l.jsx)(u.MenuItem, {
              id: E.Z.Messages.START_EVENT,
              label: E.Z.Messages.START_EVENT,
              action: function () {
                null != T &&
                  (0, u.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      t.e("84722"),
                      t.e("66586"),
                    ]).then(t.bind(t, 296864));
                    return (n) => (0, l.jsx)(e, { ...n, event: T });
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
      let r = "guild-event-modal";
      n.Z = () => {
        let e =
          (0, i.bp)() === s.IlC.POPOUT
            ? l.POPOUT_MODAL_CONTEXT
            : l.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: r,
          contextKey: e,
          onCloseRequest: () => {
            u.l.getState().canCloseModal && (0, l.closeModal)(r, e);
          },
        };
      };
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return v;
        },
        Ef: function () {
          return m;
        },
        HO: function () {
          return A;
        },
        NZ: function () {
          return C;
        },
        Pq: function () {
          return O;
        },
        Q1: function () {
          return f;
        },
        RK: function () {
          return M;
        },
        _0: function () {
          return g;
        },
        hz: function () {
          return S;
        },
        yi: function () {
          return D;
        },
      });
      var l = t(512722),
        i = t.n(l),
        u = t(149765),
        s = t(544891),
        r = t(493683);
      t(749210);
      var a = t(911969),
        d = t(367907),
        E = t(944486),
        o = t(979651),
        c = t(700785),
        _ = t(922482),
        T = t(192079),
        N = t(706058),
        I = t(590415),
        Z = t(981631);
      function f(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          n && (0, d.yw)(Z.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, T.s$)(e) }),
          s.tn.patch({
            url: Z.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function g(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          s.tn.patch({
            url: Z.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function M(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = null == e ? void 0 : e.getGuildId();
        i()(null != l, "This channel cannot be guildless.");
        let u = o.Z.getVoiceStateForChannel(e.id);
        return (
          (0, I.gf)(u) === I.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, d.yw)(Z.rMx.PROMOTED_TO_SPEAKER, { ...(0, T.s$)(e) }),
          s.tn.patch({
            url: Z.ANM.UPDATE_VOICE_STATE(l),
            body: {
              suppress: n,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function D(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          i()(null != n, "This channel cannot be guildless."),
          s.tn.patch({
            url: Z.ANM.UPDATE_VOICE_STATE(n),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function v(e, n, t) {
        let l = e.getGuildId();
        return (
          i()(null != l, "This channel cannot be guildless."),
          s.tn.patch({
            url: Z.ANM.UPDATE_VOICE_STATE(l, n),
            body: { suppress: t, channel_id: e.id },
          })
        );
      }
      function S(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          v(n, e.id, !0),
          s.tn.patch({
            url: Z.ANM.UPDATE_VOICE_STATE(t, e.id),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function O(e, n, t) {
        let l = e.getGuildId();
        i()(null != l, "Channel cannot be guildless");
        let s = e.permissionOverwrites[l],
          d = { id: l, type: a.BN.ROLE, allow: c.Hn, deny: c.Hn, ...s };
        t
          ? ((d.allow = u.IH(d.allow, n)), (d.deny = u.Od(d.deny, n)))
          : ((d.allow = u.Od(d.allow, n)), (d.deny = u.IH(d.deny, n))),
          r.Z.updatePermissionOverwrite(e.id, d);
      }
      async function A(e, n, t, l) {
        if ("" === n) return;
        E.Z.getVoiceChannelId() !== e.id && (0, _.TM)(e);
        let i = await (0, N.me)(e.id, n, t, l);
        return M(e, !1, !0), i;
      }
      async function m(e, n, t) {
        if ("" !== n) return await (0, N.Dk)(e.id, n, t);
      }
      async function C(e) {
        await (0, N.Ix)(e.id);
      }
    },
    192079: function (e, n, t) {
      t.d(n, {
        ER: function () {
          return o;
        },
        kk: function () {
          return c;
        },
        s$: function () {
          return _;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var l = t(19780),
        i = t(5192),
        u = t(700785),
        s = t(427679),
        r = t(157925),
        a = t(981631),
        d = t(71080),
        E = t(689938);
      function o(e, n, t, l) {
        let u = n[0],
          s = i.ZP.getName(e, t, u),
          r = null != l ? l : n.length;
        return 1 === r && null != u
          ? s
          : null == u
            ? E.Z.Messages.SPEAKING_COUNT.format({ count: r })
            : E.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: s,
                count: r - 1,
              });
      }
      function c(e, n) {
        switch (e) {
          case d.aC.OWNER:
            return E.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case d.aC.ADMINISTRATOR:
            return E.Z.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case d.aC.MEMBER:
          case d.aC.ROLE:
            return n
              ? E.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : E.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case d.aC.EMPTY_STATE:
        }
        return null;
      }
      function _(e) {
        let n = s.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: l.Z.getMediaSessionId(),
          request_to_speak_state: u.Uu(a.Plq.REQUEST_TO_SPEAK, e)
            ? r.BM.EVERYONE
            : r.BM.NO_ONE,
          stage_instance_id: null == n ? void 0 : n.id,
        };
      }
    },
    706058: function (e, n, t) {
      t.d(n, {
        Dk: function () {
          return s;
        },
        Ix: function () {
          return r;
        },
        me: function () {
          return u;
        },
      });
      var l = t(544891),
        i = t(981631);
      async function u(e, n, t, u, s) {
        return (
          await l.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: s,
              send_start_notification: u,
            },
          })
        ).body;
      }
      async function s(e, n, t) {
        return (
          await l.tn.patch({
            url: i.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
          })
        ).body;
      }
      function r(e) {
        return l.tn.del(i.ANM.STAGE_INSTANCE(e));
      }
    },
    613919: function () {},
    636463: function () {},
  },
]);
//# sourceMappingURL=50f4d38a4d500f76f444.js.map
