"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21395"],
  {
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    241155: function (e, t, n) {
      n(47120);
      var l,
        i,
        r,
        u,
        d = n(392711),
        c = n.n(d),
        a = n(442837),
        s = n(570140),
        o = n(924301),
        E = n(601964),
        _ = n(486527);
      let N = !1,
        f = {},
        I = {},
        g = {},
        h = (e) => (
          (g[e.guild_scheduled_event.id] = new E.ZP(
            e.guild_scheduled_event.guild,
          )),
          (I[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: _.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class v extends (l = a.ZP.Store) {
        isFetching() {
          return N;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return f[e];
        }
        getCachedGuildByEventId(e) {
          var t;
          return null !== (t = g[e]) && void 0 !== t ? t : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var t;
          return null !== (t = I[e]) && void 0 !== t ? t : void 0;
        }
      }
      (u = "EventDirectoryStore"),
        (r = "displayName") in (i = v)
          ? Object.defineProperty(i, r, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = u),
        (t.Z = new v(s.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            N = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
            let { channelId: t, entries: n } = e;
            N = !1;
            let l = c().sortBy(
                [...n],
                [
                  function (e) {
                    return (0, o.CQ)(e.guild_scheduled_event);
                  },
                ],
              ),
              i = c().map(l, h);
            f[t] = i;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            N = !1;
          },
        }));
    },
    658041: function (e, t, n) {
      n.d(t, {
        M: function () {
          return d;
        },
      });
      var l = n(913527),
        i = n.n(l),
        r = n(709054),
        u = n(765305);
      function d(e, t, n, l) {
        let d = i()(),
          c = new Date(e.scheduled_start_time).getTime(),
          a = { start: c - u.VF, end: c };
        if (d.isBetween(a.start, a.end)) {
          if (null != t) {
            let e = i()(t),
              n = e.isBetween(a.start, a.end),
              r = e.isBetween(i()(c).subtract(u.zV, "days"), c);
            return n || (r && !l) ? void 0 : u.X_.EVENT_STARTING_SOON;
          }
          return u.X_.EVENT_STARTING_SOON;
        }
        let s = r.default.extractTimestamp(e.id),
          o = Math.min((null != n ? n : s) + u.Fc, c);
        if (d.isBetween(s, o) && null == t && !l) return u.X_.NEW_EVENT;
      }
    },
    835184: function (e, t, n) {
      var l,
        i = n(442837),
        r = n(570140),
        u = n(314897),
        d = n(924301),
        c = n(658041),
        a = n(765305);
      function s(e, t, n) {
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
      let o = {},
        E = {};
      function _(e) {
        let t = { ...o };
        delete t[e], (o = t);
        let n = { ...E };
        delete n[e], (E = n);
      }
      class N extends (l = i.ZP.PersistedStore) {
        initialize(e) {
          if (null != e) {
            var t, n;
            (o =
              null !== (t = e.upcomingEventDismissals) && void 0 !== t
                ? t
                : {}),
              (E =
                null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n
                  ? n
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
          return E[e];
        }
        getAllUpcomingNoticeSeenTimes() {
          return E;
        }
        getState() {
          return { upcomingEventDismissals: o, upcomingEventSeenTimestamps: E };
        }
      }
      s(N, "displayName", "UpcomingEventNoticesStore"),
        s(N, "persistKey", "UpcomingEventNotices"),
        (t.Z = new N(r.Z, {
          UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
            let { eventId: t } = e,
              n = { ...o };
            (n[t] = Date.now()), (o = n);
          },
          GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
            let { guildScheduledEvent: t } = e;
            (t.status === a.p1.CANCELED || t.status === a.p1.COMPLETED) &&
              _(t.id);
          },
          GUILD_SCHEDULED_EVENT_DELETE: function (e) {
            let { guildScheduledEvent: t } = e;
            _(t.id);
          },
          GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
            let { userId: t, guildEventId: n } = e;
            if (t !== u.default.getId()) return;
            let l = d.ZP.getGuildScheduledEvent(n);
            if (null == l || l.status !== a.p1.SCHEDULED || null != o[n])
              return;
            let i = E[n];
            if ((0, c.M)(l, void 0, i, !1) === a.X_.NEW_EVENT) {
              let e = { ...o };
              (e[n] = Date.now()), (o = e);
            }
          },
          UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
            let { guildEventId: t } = e,
              n = { ...E };
            (n[t] = Date.now()), (E = n);
          },
        }));
    },
    554747: function (e, t, n) {
      n.d(t, {
        Vm: function () {
          return m;
        },
        ZP: function () {
          return T;
        },
        eF: function () {
          return S;
        },
        gM: function () {
          return D;
        },
        k5: function () {
          return P;
        },
        qY: function () {
          return C;
        },
        sz: function () {
          return M;
        },
        u1: function () {
          return p;
        },
      }),
        n(47120),
        n(724458);
      var l = n(470079),
        i = n(442837),
        r = n(241155),
        u = n(592125),
        d = n(984933),
        c = n(430824),
        a = n(496675),
        s = n(70956),
        o = n(823379),
        E = n(924301),
        _ = n(658041),
        N = n(835184),
        f = n(79874),
        I = n(854698),
        g = n(765305),
        h = n(981631);
      let v = [],
        Z = 15 * s.Z.Millis.MINUTE;
      function T(e, t) {
        return (0, i.Wu)(
          [c.Z, r.Z, E.ZP, a.Z, u.Z, d.ZP],
          () => {
            let n = c.Z.getGuild(e);
            if (null == n) return v;
            if (n.hasFeature(h.oNc.HUB)) {
              var l, i;
              let e =
                null === (l = d.ZP.getDefaultChannel(n.id)) || void 0 === l
                  ? void 0
                  : l.id;
              return (
                null !== (i = r.Z.getEventDirectoryEntries(e)) && void 0 !== i
                  ? i
                  : []
              )
                .map((e) => {
                  let t = e.scheduledEventId,
                    n = E.ZP.getGuildScheduledEvent(t);
                  return null != n
                    ? n
                    : r.Z.getCachedGuildScheduledEventById(t);
                })
                .filter(o.lm);
            }
            return E.ZP.getGuildScheduledEventsByIndex(
              null != t ? t : E.bN.GUILD_EVENT_UPCOMING(n.id),
            ).filter((e) => {
              let t = e.channel_id;
              if (null == t) return !0;
              let n = u.Z.getChannel(t);
              return a.Z.can(h.Plq.VIEW_CHANNEL, n);
            });
          },
          [t, e],
        );
      }
      function C(e) {
        return (0, i.e7)(
          [E.ZP, u.Z, a.Z],
          () => {
            let t = u.Z.getChannel(e);
            if (
              !a.Z.can(h.Plq.VIEW_CHANNEL, t) ||
              null == (null == t ? void 0 : t.guild_id)
            )
              return null;
            let n = E.ZP.getGuildScheduledEventsByIndex(
              E.bN.CHANNEL_EVENT_ACTIVE(e),
            );
            return n.length > 0 ? n[0] : null;
          },
          [e],
        );
      }
      function D(e) {
        let t = (0, i.Wu)(
          [E.ZP],
          () => E.ZP.getGuildScheduledEventsForGuild(e),
          [e],
        );
        return l.useMemo(() => {
          let e = new Map();
          return (
            t.forEach((t) => {
              let n = t.channel_id;
              null != n && e.set(n, t);
            }),
            e
          );
        }, [t]);
      }
      function m(e) {
        var t, n;
        let l =
            ((t = e),
            (0, i.Wu)(
              [E.ZP, u.Z, a.Z],
              () =>
                E.ZP.getGuildScheduledEventsByIndex(
                  E.bN.GUILD_EVENT_UPCOMING(t),
                ).filter((e) => {
                  if (
                    e.entity_type === g.WX.NONE ||
                    e.status !== g.p1.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let t = u.Z.getChannel(e.channel_id);
                  return a.Z.can(h.Plq.VIEW_CHANNEL, t);
                }),
              [t],
            )),
          r = (0, i.cj)([N.Z], () => N.Z.getAllEventDismissals()),
          d = (0, i.cj)([N.Z], () => N.Z.getAllUpcomingNoticeSeenTimes()),
          s = (0, i.cj)(
            [E.ZP],
            () =>
              null == l
                ? {}
                : l.reduce((e, t) => {
                    let n = (0, I.DK)(t);
                    return {
                      ...e,
                      [t.id]: E.ZP.isInterestedInEventRecurrence(t.id, n),
                    };
                  }, {}),
            [l],
          ),
          o = (0, i.e7)([c.Z], () => c.Z.getGuild(e)),
          f =
            null != o &&
            !o.hasFeature(h.oNc.COMMUNITY) &&
            o.hasFeature(h.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != l && null != s && f)
          for (let e = 0; e < l.length; e++) {
            let t = l[e],
              i = r[t.id],
              u = d[t.id],
              c = null !== (n = s[t.id]) && void 0 !== n && n,
              a = (0, _.M)(t, i, u, c);
            if (null != a) return { upcomingEvent: t, noticeType: a };
          }
      }
      function P(e) {
        return (0, i.e7)(
          [E.ZP, u.Z, a.Z],
          () =>
            E.ZP.getGuildScheduledEventsByIndex(
              E.bN.GUILD_EVENT_ACTIVE(e),
            ).find((e) => {
              if (e.entity_type === g.WX.NONE || !(0, E.xt)(e)) return !1;
              if (null == e.channel_id) return !0;
              let t = u.Z.getChannel(e.channel_id);
              return a.Z.can(h.Plq.VIEW_CHANNEL, t);
            }),
          [e],
        );
      }
      function p(e) {
        return (0, i.e7)(
          [E.ZP],
          () =>
            E.ZP.getGuildScheduledEventsByIndex(E.bN.CHANNEL_EVENT_UPCOMING(e)),
          [e],
        );
      }
      function S(e) {
        return (0, i.e7)(
          [u.Z, E.ZP],
          () => {
            let t = E.ZP.getGuildScheduledEventsByIndex(
              E.bN.GUILD_EVENT_ACTIVE(e),
            ).find((e) => null != u.Z.getChannel(e.channel_id));
            return u.Z.getChannel(null == t ? void 0 : t.channel_id);
          },
          [e],
        );
      }
      function M(e) {
        let [t, n] = l.useState(() => Date.now());
        l.useEffect(() => {
          let e = setInterval(() => {
            n(Date.now());
          }, Z);
          return () => clearInterval(e);
        }, []);
        let r = (0, i.e7)(
          [E.ZP],
          () =>
            null == e
              ? []
              : E.ZP.getGuildScheduledEventsByIndex(
                  E.bN.CHANNEL_EVENT_UPCOMING(e),
                ),
          [e, t],
        );
        return l.useMemo(
          () =>
            r.filter((e) => {
              let { startTime: t, endTime: n } = (0, f.Kq)(e),
                { withinStartWindow: l, diffMinutes: i } = (0, I.ub)(
                  t.toISOString(),
                  null == n ? void 0 : n.toISOString(),
                );
              return e.status !== g.p1.ACTIVE && l && i < 15;
            }),
          [r],
        );
      }
    },
    312757: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var l = n(735250);
      n(470079);
      var i = n(481060),
        r = n(287734),
        u = n(313201),
        d = n(939863),
        c = n(482241),
        a = n(554747),
        s = n(689938),
        o = n(131462);
      function E(e) {
        let { channel: t, transitionState: n, onClose: E } = e,
          _ = (0, u.Dt)(),
          N = (0, a.qY)(t.id);
        if (null == N) return null;
        let f = () => {
          r.default.selectVoiceChannel(null), E();
        };
        return (0, l.jsxs)(i.ModalRoot, {
          transitionState: n,
          "aria-labelledby": _,
          size: i.ModalSize.SMALL,
          children: [
            (0, l.jsxs)(i.ModalContent, {
              className: o.content,
              children: [
                (0, l.jsx)(d.Z, {
                  children: (0, l.jsx)("div", {
                    className: o.iconBackground,
                    children: (0, l.jsx)(i.CalendarIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 40,
                      width: 40,
                      className: o.icon,
                    }),
                  }),
                }),
                (0, l.jsx)(i.Heading, {
                  id: _,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: o.title,
                  children: s.Z.Messages.GUILD_EVENT_END_PROMPT_TITLE,
                }),
                (0, l.jsx)(i.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: o.subtitle,
                  children: s.Z.Messages.GUILD_EVENT_END_PROMPT_BODY,
                }),
              ],
            }),
            (0, l.jsxs)(i.ModalFooter, {
              children: [
                (0, l.jsx)(i.Button, {
                  color: i.Button.Colors.RED,
                  onClick: () => {
                    c.Z.endEvent(N.id, N.guild_id), f();
                  },
                  children: s.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                }),
                (0, l.jsx)(i.Button, {
                  color: i.Button.Colors.PRIMARY,
                  className: o.cancelButton,
                  onClick: f,
                  children: s.Z.Messages.GUILD_EVENT_END_PROMPT_CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    939863: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var l = n(735250);
      n(470079);
      var i = n(120356),
        r = n.n(i),
        u = n(689938),
        d = n(843117),
        c = n(296507),
        a = n(866402);
      function s(e) {
        let { className: t, children: n } = e;
        return (0, l.jsxs)("div", {
          className: r()(d.container, t),
          children: [
            (0, l.jsx)("img", {
              alt: u.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: a,
              className: r()(d.sparkleIcon, d.sparkleBottom),
            }),
            n,
            (0, l.jsx)("img", {
              alt: u.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: c,
              className: r()(d.sparkleIcon, d.sparkleTop),
            }),
          ],
        });
      }
    },
    131462: function (e, t, n) {
      e.exports = {
        content: "content_f142a5",
        title: "title_f142a5",
        subtitle: "subtitle_f142a5",
        icon: "icon_f142a5",
        iconBackground: "iconBackground_f142a5",
        cancelButton: "cancelButton_f142a5",
      };
    },
    843117: function (e, t, n) {
      e.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
  },
]);
//# sourceMappingURL=8a716e01ba856af13140.js.map
