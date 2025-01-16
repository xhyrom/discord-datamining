"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37133"],
  {
    658041: function (n, t, e) {
      e.d(t, {
        M: function () {
          return d;
        },
      });
      var l = e(913527),
        i = e.n(l),
        r = e(709054),
        u = e(765305);
      function d(n, t, e, l) {
        let d = i()(),
          o = new Date(n.scheduled_start_time).getTime(),
          a = { start: o - u.VF, end: o };
        if (d.isBetween(a.start, a.end)) {
          if (null != t) {
            let n = i()(t),
              e = n.isBetween(a.start, a.end),
              r = n.isBetween(i()(o).subtract(u.zV, "days"), o);
            return e || (r && !l) ? void 0 : u.X_.EVENT_STARTING_SOON;
          }
          return u.X_.EVENT_STARTING_SOON;
        }
        let c = r.default.extractTimestamp(n.id),
          s = Math.min((null != e ? e : c) + u.Fc, o);
        if (d.isBetween(c, s) && null == t && !l) return u.X_.NEW_EVENT;
      }
    },
    835184: function (n, t, e) {
      var l,
        i = e(442837),
        r = e(570140),
        u = e(314897),
        d = e(924301),
        o = e(658041),
        a = e(765305);
      function c(n, t, e) {
        return (
          t in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      let s = {},
        E = {};
      function g(n) {
        let t = { ...s };
        delete t[n], (s = t);
        let e = { ...E };
        delete e[n], (E = e);
      }
      class f extends (l = i.ZP.PersistedStore) {
        initialize(n) {
          if (null != n) {
            var t, e;
            (s =
              null !== (t = n.upcomingEventDismissals) && void 0 !== t
                ? t
                : {}),
              (E =
                null !== (e = n.upcomingEventSeenTimestamps) && void 0 !== e
                  ? e
                  : {});
          }
        }
        getGuildEventNoticeDismissalTime(n) {
          return s[n];
        }
        getAllEventDismissals() {
          return s;
        }
        getUpcomingNoticeSeenTime(n) {
          return E[n];
        }
        getAllUpcomingNoticeSeenTimes() {
          return E;
        }
        getState() {
          return { upcomingEventDismissals: s, upcomingEventSeenTimestamps: E };
        }
      }
      c(f, "displayName", "UpcomingEventNoticesStore"),
        c(f, "persistKey", "UpcomingEventNotices"),
        (t.Z = new f(r.Z, {
          UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (n) {
            let { eventId: t } = n,
              e = { ...s };
            (e[t] = Date.now()), (s = e);
          },
          GUILD_SCHEDULED_EVENT_UPDATE: function (n) {
            let { guildScheduledEvent: t } = n;
            (t.status === a.p1.CANCELED || t.status === a.p1.COMPLETED) &&
              g(t.id);
          },
          GUILD_SCHEDULED_EVENT_DELETE: function (n) {
            let { guildScheduledEvent: t } = n;
            g(t.id);
          },
          GUILD_SCHEDULED_EVENT_USER_ADD: function (n) {
            let { userId: t, guildEventId: e } = n;
            if (t !== u.default.getId()) return;
            let l = d.ZP.getGuildScheduledEvent(e);
            if (null == l || l.status !== a.p1.SCHEDULED || null != s[e])
              return;
            let i = E[e];
            if ((0, o.M)(l, void 0, i, !1) === a.X_.NEW_EVENT) {
              let n = { ...s };
              (n[e] = Date.now()), (s = n);
            }
          },
          UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (n) {
            let { guildEventId: t } = n,
              e = { ...E };
            (e[t] = Date.now()), (E = e);
          },
        }));
    },
    495279: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return i;
        },
      });
      var l = e(482241);
      function i(n, t, e, i) {
        let { scheduled_start_time: r, scheduled_end_time: u } = n;
        return null == r && null == u
          ? l.Z.deleteGuildEventException(t, e, i)
          : l.Z.updateGuildEventException(
              {
                scheduled_start_time: r,
                scheduled_end_time: u,
                is_canceled: !1,
              },
              t,
              e,
              i,
            );
      }
    },
    554747: function (n, t, e) {
      e.d(t, {
        Vm: function () {
          return P;
        },
        ZP: function () {
          return I;
        },
        eF: function () {
          return D;
        },
        gM: function () {
          return p;
        },
        k5: function () {
          return S;
        },
        qY: function () {
          return N;
        },
        sz: function () {
          return C;
        },
        u1: function () {
          return M;
        },
      }),
        e(47120),
        e(724458);
      var l = e(192379),
        i = e(442837),
        r = e(241155),
        u = e(592125),
        d = e(984933),
        o = e(430824),
        a = e(496675),
        c = e(70956),
        s = e(823379),
        E = e(924301),
        g = e(658041),
        f = e(835184),
        _ = e(79874),
        v = e(854698),
        Z = e(765305),
        h = e(981631);
      let m = [],
        T = 15 * c.Z.Millis.MINUTE;
      function I(n, t) {
        return (0, i.Wu)(
          [o.Z, r.Z, E.ZP, a.Z, u.Z, d.ZP],
          () => {
            let e = o.Z.getGuild(n);
            if (null == e) return m;
            if (e.hasFeature(h.oNc.HUB)) {
              var l, i;
              let n =
                null === (l = d.ZP.getDefaultChannel(e.id)) || void 0 === l
                  ? void 0
                  : l.id;
              return (
                null !== (i = r.Z.getEventDirectoryEntries(n)) && void 0 !== i
                  ? i
                  : []
              )
                .map((n) => {
                  let t = n.scheduledEventId,
                    e = E.ZP.getGuildScheduledEvent(t);
                  return null != e
                    ? e
                    : r.Z.getCachedGuildScheduledEventById(t);
                })
                .filter(s.lm);
            }
            return E.ZP.getGuildScheduledEventsByIndex(
              null != t ? t : E.bN.GUILD_EVENT_UPCOMING(e.id),
            ).filter((n) => {
              let t = n.channel_id;
              if (null == t) return !0;
              let e = u.Z.getChannel(t);
              return a.Z.can(h.Plq.VIEW_CHANNEL, e);
            });
          },
          [t, n],
        );
      }
      function N(n) {
        return (0, i.e7)(
          [E.ZP, u.Z, a.Z],
          () => {
            let t = u.Z.getChannel(n);
            if (
              !a.Z.can(h.Plq.VIEW_CHANNEL, t) ||
              null == (null == t ? void 0 : t.guild_id)
            )
              return null;
            let e = E.ZP.getGuildScheduledEventsByIndex(
              E.bN.CHANNEL_EVENT_ACTIVE(n),
            );
            return e.length > 0 ? e[0] : null;
          },
          [n],
        );
      }
      function p(n) {
        let t = (0, i.Wu)(
          [E.ZP],
          () => E.ZP.getGuildScheduledEventsForGuild(n),
          [n],
        );
        return l.useMemo(() => {
          let n = new Map();
          return (
            t.forEach((t) => {
              let e = t.channel_id;
              null != e && n.set(e, t);
            }),
            n
          );
        }, [t]);
      }
      function P(n) {
        var t, e;
        let l =
            ((t = n),
            (0, i.Wu)(
              [E.ZP, u.Z, a.Z],
              () =>
                E.ZP.getGuildScheduledEventsByIndex(
                  E.bN.GUILD_EVENT_UPCOMING(t),
                ).filter((n) => {
                  if (
                    n.entity_type === Z.WX.NONE ||
                    n.status !== Z.p1.SCHEDULED
                  )
                    return !1;
                  if (null == n.channel_id) return !0;
                  let t = u.Z.getChannel(n.channel_id);
                  return a.Z.can(h.Plq.VIEW_CHANNEL, t);
                }),
              [t],
            )),
          r = (0, i.cj)([f.Z], () => f.Z.getAllEventDismissals()),
          d = (0, i.cj)([f.Z], () => f.Z.getAllUpcomingNoticeSeenTimes()),
          c = (0, i.cj)(
            [E.ZP],
            () =>
              null == l
                ? {}
                : l.reduce((n, t) => {
                    let e = (0, v.DK)(t);
                    return {
                      ...n,
                      [t.id]: E.ZP.isInterestedInEventRecurrence(t.id, e),
                    };
                  }, {}),
            [l],
          ),
          s = (0, i.e7)([o.Z], () => o.Z.getGuild(n)),
          _ =
            null != s &&
            !s.hasFeature(h.oNc.COMMUNITY) &&
            s.hasFeature(h.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != l && null != c && _)
          for (let n = 0; n < l.length; n++) {
            let t = l[n],
              i = r[t.id],
              u = d[t.id],
              o = null !== (e = c[t.id]) && void 0 !== e && e,
              a = (0, g.M)(t, i, u, o);
            if (null != a) return { upcomingEvent: t, noticeType: a };
          }
      }
      function S(n) {
        return (0, i.e7)(
          [E.ZP, u.Z, a.Z],
          () =>
            E.ZP.getGuildScheduledEventsByIndex(
              E.bN.GUILD_EVENT_ACTIVE(n),
            ).find((n) => {
              if (n.entity_type === Z.WX.NONE || !(0, E.xt)(n)) return !1;
              if (null == n.channel_id) return !0;
              let t = u.Z.getChannel(n.channel_id);
              return a.Z.can(h.Plq.VIEW_CHANNEL, t);
            }),
          [n],
        );
      }
      function M(n) {
        return (0, i.e7)(
          [E.ZP],
          () =>
            E.ZP.getGuildScheduledEventsByIndex(E.bN.CHANNEL_EVENT_UPCOMING(n)),
          [n],
        );
      }
      function D(n) {
        return (0, i.e7)(
          [u.Z, E.ZP],
          () => {
            let t = E.ZP.getGuildScheduledEventsByIndex(
              E.bN.GUILD_EVENT_ACTIVE(n),
            ).find((n) => null != u.Z.getChannel(n.channel_id));
            return u.Z.getChannel(null == t ? void 0 : t.channel_id);
          },
          [n],
        );
      }
      function C(n) {
        let [t, e] = l.useState(() => Date.now());
        l.useEffect(() => {
          let n = setInterval(() => {
            e(Date.now());
          }, T);
          return () => clearInterval(n);
        }, []);
        let r = (0, i.e7)(
          [E.ZP],
          () =>
            null == n
              ? []
              : E.ZP.getGuildScheduledEventsByIndex(
                  E.bN.CHANNEL_EVENT_UPCOMING(n),
                ),
          [n, t],
        );
        return l.useMemo(
          () =>
            r.filter((n) => {
              let { startTime: t, endTime: e } = (0, _.Kq)(n),
                { withinStartWindow: l, diffMinutes: i } = (0, v.ub)(
                  t.toISOString(),
                  null == e ? void 0 : e.toISOString(),
                );
              return n.status !== Z.p1.ACTIVE && l && i < 15;
            }),
          [r],
        );
      }
    },
    334877: function (n, t, e) {
      e.d(t, {
        l: function () {
          return r;
        },
      });
      var l = e(15729),
        i = e(731965);
      let r = (0, l.U)((n) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          (0, i.j)(() => n({ canCloseModal: t }));
        },
      }));
    },
    215269: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return m;
          },
        });
      var l = e(200651);
      e(192379);
      var i = e(481060),
        r = e(239091),
        u = e(410575),
        d = e(299206),
        o = e(70877),
        a = e(572427),
        c = e(231259),
        s = e(159233),
        E = e(924952),
        g = e(99528),
        f = e(830394),
        _ = e(473545),
        v = e(124422),
        Z = e(981631),
        h = e(388032);
      function m(n) {
        let {
            guildEventId: t,
            recurrenceId: e,
            channel: m,
            guild: T,
            analyticsContext: I,
            isRecurrenceItem: N = !1,
            onSelect: p,
          } = n,
          P = (0, f.Z)({
            guildEventId: t,
            recurrenceId: e,
            guild: T,
            channel: m,
          }),
          S = (0, c.Z)({
            guildEventId: t,
            recurrenceId: e,
            guild: T,
            channel: m,
          }),
          M = (0, s.Z)({
            guildEventId: t,
            guild: T,
            channel: m,
            recurrenceId: e,
            isRecurrenceItem: N,
          }),
          D = (0, E.Z)(t, T, m),
          C = (0, v.Z)(t, T, m),
          b = (0, a.Z)(t, T.id, e),
          A = (0, g.Z)(t),
          x = (0, d.Z)({ id: t, label: h.intl.string(h.t.WZwPOz) }),
          y = (0, d.Z)({ id: e, label: h.intl.string(h.t.NZRGQk) }),
          G = (0, o.Z)(t, T.id, m, e),
          w = (0, _.Z)({ guildEventId: t, guildId: T.id, recurrenceId: e });
        return (0, l.jsx)(u.Z, {
          context: I,
          object: Z.qAy.CONTEXT_MENU,
          children: (0, l.jsxs)(i.Menu, {
            navId: "user-context",
            onClose: r.Zy,
            "aria-label": h.intl.string(h.t.liqwPD),
            onSelect: p,
            children: [
              (0, l.jsxs)(i.MenuGroup, {
                children: [G, !N && C, M, !N && D, S, P, b, N && w],
              }),
              !N && (0, l.jsx)(i.MenuGroup, { children: A }),
              (0, l.jsxs)(i.MenuGroup, { children: [x, y] }),
            ],
          }),
        });
      }
    },
    70877: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return S;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(360963),
        r = e.n(i),
        u = e(913527),
        d = e.n(u),
        o = e(593473),
        a = e(442837),
        c = e(481060),
        s = e(579806),
        E = e(957730),
        g = e(430824),
        f = e(358085),
        _ = e(924301),
        v = e(79874),
        Z = e(236373),
        h = e(854698),
        m = e(765305),
        T = e(981631),
        I = e(388032);
      let N = "YYYYMMDDTHHmmss",
        p = "YYYY-MM-DDTHH:mm:ss",
        P = /RRULE:.*/;
      function S(n, t, e, i) {
        var u, S, M;
        let D;
        let C = (0, a.e7)([_.ZP], () => _.ZP.isActive(n)),
          b = (0, v.zI)(null != n ? n : "", i),
          A = (0, a.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(n), [n]),
          x = (0, a.e7)([g.Z], () => g.Z.getGuild(t), [t]);
        if (C || null == b || null == A) return null;
        D =
          A.entity_type === m.WX.EXTERNAL
            ? A.entity_metadata.location
            : null != e && null != x
              ? I.intl.formatToPlainString(I.t["2t8L09"], {
                  channelName: e.name,
                  guildName: x.name,
                })
              : I.intl.string(I.t.VSgOVl);
        let y = d()(A.scheduled_start_time),
          G = null != A.scheduled_end_time ? d()(A.scheduled_end_time) : y,
          w =
            null != A.description && "" !== A.description
              ? E.ZP.unparse(
                  A.description,
                  null !== (u = null == e ? void 0 : e.id) && void 0 !== u
                    ? u
                    : T.lds,
                  !0,
                )
              : "",
          O = (0, Z.KV)(A.recurrence_rule),
          j = null != O ? (0, h.Ho)(O) : null,
          { startTime: L, endTime: U } = b,
          R = null !== (S = d()(L)) && void 0 !== S ? S : y,
          V = null !== (M = d()(null != U ? U : L)) && void 0 !== M ? M : y,
          W = () => {
            let n = r()();
            n.createEvent({
              start: y,
              end: G,
              summary: A.name,
              description: w,
              location: D,
              repeating: j,
            }),
              f.isPlatformEmbedded
                ? s.Z.fileManager.saveWithDialog(
                    n.toString(),
                    "discord-event.ics",
                  )
                : window.open(n.toURL(), "_blank");
          };
        return (0, l.jsxs)(c.MenuItem, {
          id: I.intl.string(I.t.k5pvjo),
          label: I.intl.string(I.t.k5pvjo),
          action: W,
          children: [
            (0, l.jsx)(c.MenuItem, {
              id: I.intl.string(I.t.JKSLRE),
              label: I.intl.string(I.t.JKSLRE),
              action: () => {
                var n;
                let t = null == j ? void 0 : j.toString(),
                  e = {
                    text: A.name,
                    dates: "".concat(y.format(N), "/").concat(G.format(N)),
                    details: w,
                    action: "TEMPLATE",
                    location: D,
                    recur:
                      null != t
                        ? null === (n = P.exec(t)) || void 0 === n
                          ? void 0
                          : n[0]
                        : void 0,
                  },
                  l = "https://calendar.google.com/calendar/render?".concat(
                    (0, o.stringify)(e),
                  );
                window.open(l, "_blank");
              },
            }),
            (0, l.jsx)(c.MenuItem, {
              id: I.intl.string(I.t.nrBYSU),
              label: I.intl.string(I.t.nrBYSU),
              action: W,
            }),
            (0, l.jsx)(c.MenuItem, {
              id: I.intl.string(I.t.odzaCQ),
              label: I.intl.string(I.t.odzaCQ),
              action: () => {
                let n = {
                    v: 60,
                    title: A.name,
                    st: R.format(N),
                    et: V.format(N),
                    desc: w,
                    in_loc: D,
                  },
                  t = "https://calendar.yahoo.com/?".concat(
                    (0, o.stringify)(n),
                  );
                window.open(t, "_blank");
              },
            }),
            (0, l.jsx)(c.MenuItem, {
              id: I.intl.string(I.t.rQe8EB),
              label: I.intl.string(I.t.rQe8EB),
              action: () => {
                let n = {
                    path: "/calendar/action/compose",
                    rru: "addevent",
                    startdt: R.format(p),
                    enddt: V.format(p),
                    subject: A.name,
                    body: w,
                    location: D,
                    allday: !1,
                  },
                  t =
                    "https://outlook.live.com/calendar/0/deeplink/compose?".concat(
                      (0, o.stringify)(n),
                    );
                window.open(t, "_blank");
              },
            }),
          ],
        });
      }
    },
    572427: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(481060),
        r = e(572004),
        u = e(592126),
        d = e(981631),
        o = e(388032);
      function a(n, t, e) {
        let a = null != e,
          { isMember: c } = (0, u.Z)(t, n);
        if (!c) return null;
        function s() {
          let l =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          (0, r.JG)(
            ""
              .concat(location.protocol, "//")
              .concat(location.host)
              .concat(d.Z5c.GUILD_EVENT_DETAILS(t, n, l ? null : e)),
          ),
            (0, i.showToast)(
              (0, i.createToast)(
                o.intl.string(o.t["L/PwZW"]),
                i.ToastType.SUCCESS,
              ),
            );
        }
        return (0, l.jsx)(i.MenuItem, {
          id: o.intl.string(o.t["9o+VKy"]),
          label: o.intl.string(o.t["9o+VKy"]),
          action: a ? void 0 : () => s(!0),
          children:
            a &&
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(i.MenuItem, {
                  id: o.intl.string(o.t.QLtDqK),
                  label: o.intl.string(o.t.QLtDqK),
                  action: () => s(!1),
                }),
                (0, l.jsx)(i.MenuItem, {
                  id: o.intl.string(o.t.AYnhBw),
                  label: o.intl.string(o.t.AYnhBw),
                  action: () => s(!0),
                }),
              ],
            }),
        });
      }
    },
    231259: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return E;
        },
      }),
        e(47120);
      var l = e(200651);
      e(192379);
      var i = e(442837),
        r = e(481060),
        u = e(357156),
        d = e(924301),
        o = e(482241),
        a = e(894017),
        c = e(79874),
        s = e(388032);
      function E(n) {
        let { guildEventId: t, recurrenceId: e, guild: E, channel: g } = n,
          f = null != e,
          { canManageGuildEvent: _ } = (0, u.XJ)(null != g ? g : E),
          [v, Z] = (0, i.Wu)([d.ZP], () => [
            d.ZP.isActive(t),
            d.ZP.getGuildScheduledEvent(t),
          ]),
          h = (0, a.Z)(e, null == Z ? void 0 : Z.id),
          m = null != Z && _(Z),
          T = (null == Z ? void 0 : Z.recurrence_rule) != null && !f,
          I = (0, c.zI)(t, e);
        if (!m || (v && !T && !f) || (f && !f) || null == Z || null == I)
          return null;
        let { startTime: N } = I;
        if (v && f) {
          var p;
          if (null == N) return null;
          let n = new Date(
            null !== (p = null == h ? void 0 : h.scheduled_start_time) &&
            void 0 !== p
              ? p
              : N,
          );
          if (new Date() > n) return null;
        }
        let P = (n) => {
          (0, r.openModal)((i) =>
            (0, l.jsxs)(r.ConfirmModal, {
              ...i,
              header: s.intl.string(s.t.R5bpio),
              confirmText:
                T || n
                  ? s.intl.string(s.t["8ZsNv7"])
                  : s.intl.string(s.t.B9sJLS),
              cancelText: s.intl.string(s.t.oEAioK),
              onConfirm: () =>
                f && !n
                  ? o.Z.deleteRecurrence(E.id, t, e, h)
                  : o.Z.deleteGuildEvent(t, E.id),
              children: [
                (0, l.jsx)(r.Text, {
                  variant: "text-md/normal",
                  children: s.intl.string(s.t.v2GWNT),
                }),
                (0, l.jsx)("br", {}),
                (T || n) &&
                  (0, l.jsx)(r.Text, {
                    variant: "text-md/normal",
                    children: s.intl.format(s.t.ZcpcyM, {}),
                  }),
              ],
            }),
          );
        };
        return (0, l.jsx)(r.MenuItem, {
          id: s.intl.string(s.t.B9sJLS),
          label: s.intl.string(s.t.B9sJLS),
          action: f ? void 0 : () => P(),
          color: "danger",
          children:
            f &&
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(r.MenuItem, {
                  id: s.intl.string(s.t.tqCll5),
                  label: s.intl.string(s.t.tqCll5),
                  action: () => P(),
                  disabled: null == h ? void 0 : h.is_canceled,
                  color: "danger",
                }),
                (0, l.jsx)(r.MenuItem, {
                  id: s.intl.string(s.t.wr33ra),
                  label: s.intl.string(s.t.wr33ra),
                  action: () => P(!0),
                  color: "danger",
                }),
              ],
            }),
        });
      }
    },
    159233: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return E;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(442837),
        r = e(481060),
        u = e(357156),
        d = e(924301),
        o = e(894017),
        a = e(79874),
        c = e(576749),
        s = e(388032);
      function E(n) {
        let {
            guildEventId: t,
            guild: E,
            channel: g,
            recurrenceId: f,
            isRecurrenceItem: _,
          } = n,
          { canManageGuildEvent: v } = (0, u.XJ)(null != g ? g : E),
          Z = (0, i.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(t)),
          h = v(Z),
          m = (0, c.Z)(),
          T = (0, o.Z)(f, null == Z ? void 0 : Z.id),
          I = (0, a.zI)(t, f);
        if (!h || null == I || null == Z) return null;
        let N = null != Z.recurrence_rule && !_,
          p = (n) => {
            (null == f || n) && !_
              ? (0, r.openModalLazy)(async () => {
                  let { default: n } = await Promise.all([
                    e.e("58023"),
                    e.e("4808"),
                  ]).then(e.bind(e, 779250));
                  return (e) =>
                    (0, l.jsx)(n, {
                      ...e,
                      guildScheduledEventId: t,
                      guildId: E.id,
                    });
                }, m)
              : null != f &&
                (0, r.openModalLazy)(async () => {
                  let { default: n } = await e
                    .e("27919")
                    .then(e.bind(e, 379038));
                  return (t) =>
                    (0, l.jsx)(n, { ...t, guildEvent: Z, recurrenceId: f });
                }, m);
          };
        return (0, l.jsx)(r.MenuItem, {
          id: s.intl.string(s.t.Rgy2dX),
          label: s.intl.string(s.t.Rgy2dX),
          action: N ? void 0 : () => p(!0),
          children:
            N &&
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(r.MenuItem, {
                  id: s.intl.string(s.t.wmVmXF),
                  label: s.intl.string(s.t.wmVmXF),
                  action: () => p(!1),
                  disabled:
                    (null == T ? void 0 : T.is_canceled) ||
                    I.startTime.getTime() < Date.now(),
                }),
                (0, l.jsx)(r.MenuItem, {
                  id: s.intl.string(s.t.BW1Qoq),
                  label: s.intl.string(s.t.BW1Qoq),
                  action: () => p(!0),
                  disabled:
                    new Date(Z.scheduled_start_time).getTime() < Date.now(),
                }),
              ],
            }),
        });
      }
    },
    924952: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return E;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(442837),
        r = e(481060),
        u = e(357156),
        d = e(471253),
        o = e(924301),
        a = e(482241),
        c = e(765305),
        s = e(388032);
      function E(n, t, e) {
        let { canManageGuildEvent: E } = (0, u.XJ)(null != e ? e : t),
          g = (0, i.e7)([o.ZP], () => o.ZP.isActive(n)),
          f = (0, i.e7)([o.ZP], () => o.ZP.getGuildScheduledEvent(n), [n]),
          _ = E(f);
        if (
          null == n ||
          !_ ||
          !g ||
          (null == f ? void 0 : f.entity_type) === c.WX.EXTERNAL
        )
          return null;
        let v = () => {
          if (null == e ? void 0 : e.isGuildStageVoice()) {
            (0, d.NZ)(e);
            return;
          }
          null != n && a.Z.endEvent(n, t.id), (0, r.closeAllModals)();
        };
        return (0, l.jsx)(r.MenuItem, {
          id: s.intl.string(s.t.qaYzPD),
          label: s.intl.string(s.t.qaYzPD),
          action: function () {
            (0, r.openModal)((n) =>
              (0, l.jsx)(r.ConfirmModal, {
                ...n,
                header: s.intl.string(s.t.qaYzPD),
                confirmText: s.intl.string(s.t.mjB9pa),
                cancelText: s.intl.string(s.t["ETE/oK"]),
                onConfirm: v,
                children: (0, l.jsx)(r.Text, {
                  variant: "text-md/normal",
                  children: s.intl.string(s.t.bnDQ7O),
                }),
              }),
            );
          },
          color: "danger",
        });
      }
    },
    99528: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(442837),
        r = e(481060),
        u = e(726521),
        d = e(924301),
        o = e(388032);
      function a(n) {
        let t = (0, i.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(n), [n]);
        return null == n || null == t
          ? null
          : (0, l.jsx)(r.MenuItem, {
              id: "report-event",
              label: o.intl.string(o.t.IBA5wc),
              action: () => (0, u.d$)(t),
              icon: r.FlagIcon,
              color: "danger",
            });
      }
    },
    830394: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      }),
        e(47120);
      var l = e(200651);
      e(192379);
      var i = e(442837),
        r = e(481060),
        u = e(357156),
        d = e(924301),
        o = e(495279),
        a = e(894017),
        c = e(388032);
      function s(n) {
        let { guildEventId: t, recurrenceId: e, guild: s, channel: E } = n,
          g = null != e,
          { canManageGuildEvent: f } = (0, u.XJ)(null != E ? E : s),
          [_, v] = (0, i.Wu)([d.ZP], () => [
            d.ZP.isActive(t),
            d.ZP.getGuildScheduledEvent(t),
          ]),
          Z = (0, a.Z)(e, null == v ? void 0 : v.id),
          h = null != v && f(v);
        return g && (null == Z ? void 0 : Z.is_canceled) && h && (!_ || g)
          ? (0, l.jsx)(r.MenuItem, {
              id: c.intl.string(c.t.b8606O),
              label: c.intl.string(c.t.b8606O),
              action: () => {
                null != e && null != Z && (0, o.Z)(Z, s.id, t, e);
              },
            })
          : null;
      }
    },
    473545: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return g;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(442837),
        r = e(481060),
        u = e(41776),
        d = e(314897),
        o = e(924301),
        a = e(482241),
        c = e(894017),
        s = e(765305),
        E = e(388032);
      function g(n) {
        let { guildEventId: t, guildId: e, recurrenceId: g } = n,
          f = (0, i.e7)([u.Z], () => u.Z.isLurking(e), [e]),
          _ = (0, i.e7)([d.default], () => d.default.getId()),
          {
            rsvped: v,
            baseRsvp: Z,
            recurrenceRsvp: h,
          } = (0, i.cj)(
            [o.ZP],
            () => ({
              rsvped: o.ZP.isInterestedInEventRecurrence(t, g),
              baseRsvp: o.ZP.getRsvp(t, null, _),
              recurrenceRsvp: o.ZP.getRsvp(t, g, _),
            }),
            [g, t, _],
          ),
          m = (0, c.Z)(g, t);
        if (f || (null == m ? void 0 : m.is_canceled)) return null;
        let T = function () {
          let n =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l =
              (null == Z ? void 0 : Z.response) === s.gv.INTERESTED
                ? s.gv.UNINTERESTED
                : s.gv.INTERESTED,
            i = n ? null : g;
          a.Z.updateRsvp(t, i, e, l);
        };
        return (0, l.jsxs)(r.MenuItem, {
          id: v ? E.intl.string(E.t["7M5gaG"]) : E.intl.string(E.t.FXixvL),
          label: v ? E.intl.string(E.t["7M5gaG"]) : E.intl.string(E.t.FXixvL),
          action: void 0,
          children: [
            (0, l.jsx)(r.MenuItem, {
              id: E.intl.string(E.t.lwZCFR),
              label: E.intl.string(E.t.lwZCFR),
              action: () => T(!1),
            }),
            (0, l.jsx)(r.MenuItem, {
              id: E.intl.string(E.t.uoorxs),
              label: E.intl.string(E.t.uoorxs),
              action: () => T(!0),
              disabled: null != h,
            }),
          ],
        });
      }
    },
    124422: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(442837),
        r = e(481060),
        u = e(357156),
        d = e(924301),
        o = e(554747),
        a = e(981631),
        c = e(388032);
      function s(n, t, s) {
        var E;
        let { canManageGuildEvent: g } = (0, u.XJ)(null != s ? s : t),
          f = (0, i.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(n), [n]),
          _ = g(f),
          v =
            null !=
            (0, o.qY)(
              null !== (E = null == s ? void 0 : s.id) && void 0 !== E
                ? E
                : a.lds,
            ),
          Z = null != f && (0, d.xt)(f);
        return _ && !Z && !v
          ? (0, l.jsx)(r.MenuItem, {
              id: c.intl.string(c.t.cK1GGR),
              label: c.intl.string(c.t.cK1GGR),
              action: function () {
                null != f &&
                  (0, r.openModalLazy)(async () => {
                    let { default: n } = await Promise.all([
                      e.e("84722"),
                      e.e("86962"),
                    ]).then(e.bind(e, 296864));
                    return (t) => (0, l.jsx)(n, { ...t, event: f });
                  });
              },
            })
          : null;
      }
    },
    576749: function (n, t, e) {
      var l = e(481060),
        i = e(40851),
        r = e(334877),
        u = e(981631);
      let d = "guild-event-modal";
      t.Z = () => {
        let n =
          (0, i.bp)() === u.IlC.POPOUT
            ? l.POPOUT_MODAL_CONTEXT
            : l.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: d,
          contextKey: n,
          onCloseRequest: () => {
            r.l.getState().canCloseModal && (0, l.closeModal)(d, n);
          },
        };
      };
    },
    471253: function (n, t, e) {
      e.d(t, {
        DT: function () {
          return N;
        },
        Ef: function () {
          return M;
        },
        HO: function () {
          return S;
        },
        NZ: function () {
          return D;
        },
        Pq: function () {
          return P;
        },
        Q1: function () {
          return h;
        },
        RK: function () {
          return T;
        },
        _0: function () {
          return m;
        },
        hz: function () {
          return p;
        },
        yi: function () {
          return I;
        },
      });
      var l = e(512722),
        i = e.n(l),
        r = e(149765),
        u = e(544891),
        d = e(493683);
      e(749210);
      var o = e(911969),
        a = e(367907),
        c = e(944486),
        s = e(979651),
        E = e(700785),
        g = e(922482),
        f = e(192079),
        _ = e(706058),
        v = e(590415),
        Z = e(981631);
      function h(n, t) {
        let e = n.getGuildId();
        return (
          i()(null != e, "This channel cannot be guildless."),
          t && (0, a.yw)(Z.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, f.s$)(n) }),
          u.tn.patch({
            url: Z.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function m(n, t) {
        let e = n.getGuildId();
        return (
          i()(null != e, "This channel cannot be guildless."),
          u.tn.patch({
            url: Z.ANM.UPDATE_VOICE_STATE(e, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function T(n, t) {
        let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = null == n ? void 0 : n.getGuildId();
        i()(null != l, "This channel cannot be guildless.");
        let r = s.Z.getVoiceStateForChannel(n.id);
        return (
          (0, v.gf)(r) === v.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, a.yw)(Z.rMx.PROMOTED_TO_SPEAKER, { ...(0, f.s$)(n) }),
          u.tn.patch({
            url: Z.ANM.UPDATE_VOICE_STATE(l),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(e ? { silent: e } : {}),
            },
            rejectWithError: !1,
          })
        );
      }
      function I(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          u.tn.patch({
            url: Z.ANM.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
            rejectWithError: !1,
          })
        );
      }
      function N(n, t, e) {
        let l = n.getGuildId();
        return (
          i()(null != l, "This channel cannot be guildless."),
          u.tn.patch({
            url: Z.ANM.UPDATE_VOICE_STATE(l, t),
            body: { suppress: e, channel_id: n.id },
            rejectWithError: !1,
          })
        );
      }
      function p(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          i()(null != e, "This channel cannot be guildless."),
          N(t, n.id, !0),
          u.tn.patch({
            url: Z.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
            rejectWithError: !1,
          })
        );
      }
      function P(n, t, e) {
        let l = n.getGuildId();
        i()(null != l, "Channel cannot be guildless");
        let u = n.permissionOverwrites[l],
          a = { id: l, type: o.BN.ROLE, allow: E.Hn, deny: E.Hn, ...u };
        e
          ? ((a.allow = r.IH(a.allow, t)), (a.deny = r.Od(a.deny, t)))
          : ((a.allow = r.Od(a.allow, t)), (a.deny = r.IH(a.deny, t))),
          d.Z.updatePermissionOverwrite(n.id, a);
      }
      async function S(n, t, e, l) {
        if ("" === t) return;
        c.Z.getVoiceChannelId() !== n.id && (0, g.TM)(n);
        let i = await (0, _.me)(n.id, t, e, l);
        return T(n, !1, !0), i;
      }
      async function M(n, t, e) {
        if ("" !== t) return await (0, _.Dk)(n.id, t, e);
      }
      async function D(n) {
        await (0, _.Ix)(n.id);
      }
    },
    192079: function (n, t, e) {
      e.d(t, {
        ER: function () {
          return s;
        },
        kk: function () {
          return E;
        },
        s$: function () {
          return g;
        },
      }),
        e(724458),
        e(47120),
        e(392711);
      var l = e(19780),
        i = e(5192),
        r = e(700785),
        u = e(427679),
        d = e(157925),
        o = e(981631),
        a = e(71080),
        c = e(388032);
      function s(n, t, e, l) {
        let r = t[0],
          u = i.ZP.getName(n, e, r),
          d = null != l ? l : t.length;
        return 1 === d && null != r
          ? u
          : null == r
            ? c.intl.formatToPlainString(c.t.chmM9P, { count: d })
            : c.intl.formatToPlainString(c.t.GhkJ29, { name: u, count: d - 1 });
      }
      function E(n, t) {
        switch (n) {
          case a.aC.OWNER:
            return c.intl.string(c.t.icuNBA);
          case a.aC.ADMINISTRATOR:
            return c.intl.string(c.t.eTmN5e);
          case a.aC.MEMBER:
          case a.aC.ROLE:
            return t ? c.intl.string(c.t.Hw3XW1) : c.intl.string(c.t.YieyPj);
          case a.aC.EMPTY_STATE:
        }
        return null;
      }
      function g(n) {
        let t = u.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: l.Z.getMediaSessionId(),
          request_to_speak_state: r.Uu(o.Plq.REQUEST_TO_SPEAK, n)
            ? d.BM.EVERYONE
            : d.BM.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    706058: function (n, t, e) {
      e.d(t, {
        Dk: function () {
          return u;
        },
        Ix: function () {
          return d;
        },
        me: function () {
          return r;
        },
      });
      var l = e(544891),
        i = e(981631);
      async function r(n, t, e, r, u) {
        return (
          await l.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: u,
              send_start_notification: r,
            },
            rejectWithError: !1,
          })
        ).body;
      }
      async function u(n, t, e) {
        return (
          await l.tn.patch({
            url: i.ANM.STAGE_INSTANCE(n),
            body: { topic: t, privacy_level: e },
            rejectWithError: !1,
          })
        ).body;
      }
      function d(n) {
        return l.tn.del({ url: i.ANM.STAGE_INSTANCE(n), rejectWithError: !1 });
      }
    },
    613919: function () {},
    636463: function () {},
  },
]);
//# sourceMappingURL=465ab707656c95fe6c2a.js.map
