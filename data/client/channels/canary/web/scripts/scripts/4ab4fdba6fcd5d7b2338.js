"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39273"],
  {
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    597: function (e, n, t) {
      t.d(n, {
        c: function () {
          return d;
        },
      });
      var i = t(954955),
        c = t.n(i),
        l = t(544891),
        r = t(570140),
        u = t(486527),
        o = t(981631);
      let d = c()(async (e) => {
        try {
          r.Z.dispatch({ type: "EVENT_DIRECTORY_FETCH_START" });
          let n = await l.tn.get({
            url: o.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
            query: { type: u.C2.GUILD_SCHEDULED_EVENT },
          });
          r.Z.dispatch({
            type: "EVENT_DIRECTORY_FETCH_SUCCESS",
            channelId: e,
            entries: n.body,
          });
        } catch (e) {
          r.Z.dispatch({ type: "EVENT_DIRECTORY_FETCH_FAILURE" });
        }
      }, 200);
    },
    241155: function (e, n, t) {
      t(47120);
      var i,
        c,
        l,
        r,
        u = t(392711),
        o = t.n(u),
        d = t(442837),
        a = t(570140),
        s = t(924301),
        _ = t(601964),
        E = t(486527);
      let f = !1,
        N = {},
        I = {},
        C = {},
        v = (e) => (
          (C[e.guild_scheduled_event.id] = new _.ZP(
            e.guild_scheduled_event.guild,
          )),
          (I[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: E.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class T extends (i = d.ZP.Store) {
        isFetching() {
          return f;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return N[e];
        }
        getCachedGuildByEventId(e) {
          var n;
          return null !== (n = C[e]) && void 0 !== n ? n : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var n;
          return null !== (n = I[e]) && void 0 !== n ? n : void 0;
        }
      }
      (r = "EventDirectoryStore"),
        (l = "displayName") in (c = T)
          ? Object.defineProperty(c, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (c[l] = r),
        (n.Z = new T(a.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            f = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
            let { channelId: n, entries: t } = e;
            f = !1;
            let i = o().sortBy(
                [...t],
                [
                  function (e) {
                    return (0, s.CQ)(e.guild_scheduled_event);
                  },
                ],
              ),
              c = o().map(i, v);
            N[n] = c;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            f = !1;
          },
        }));
    },
    658041: function (e, n, t) {
      t.d(n, {
        M: function () {
          return u;
        },
      });
      var i = t(913527),
        c = t.n(i),
        l = t(709054),
        r = t(765305);
      function u(e, n, t, i) {
        let u = c()(),
          o = new Date(e.scheduled_start_time).getTime(),
          d = { start: o - r.VF, end: o };
        if (u.isBetween(d.start, d.end)) {
          if (null != n) {
            let e = c()(n),
              t = e.isBetween(d.start, d.end),
              l = e.isBetween(c()(o).subtract(r.zV, "days"), o);
            return t || (l && !i) ? void 0 : r.X_.EVENT_STARTING_SOON;
          }
          return r.X_.EVENT_STARTING_SOON;
        }
        let a = l.default.extractTimestamp(e.id),
          s = Math.min((null != t ? t : a) + r.Fc, o);
        if (u.isBetween(a, s) && null == n && !i) return r.X_.NEW_EVENT;
      }
    },
    835184: function (e, n, t) {
      var i,
        c = t(442837),
        l = t(570140),
        r = t(314897),
        u = t(924301),
        o = t(658041),
        d = t(765305);
      function a(e, n, t) {
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
      let s = {},
        _ = {};
      function E(e) {
        let n = { ...s };
        delete n[e], (s = n);
        let t = { ..._ };
        delete t[e], (_ = t);
      }
      class f extends (i = c.ZP.PersistedStore) {
        initialize(e) {
          if (null != e) {
            var n, t;
            (s =
              null !== (n = e.upcomingEventDismissals) && void 0 !== n
                ? n
                : {}),
              (_ =
                null !== (t = e.upcomingEventSeenTimestamps) && void 0 !== t
                  ? t
                  : {});
          }
        }
        getGuildEventNoticeDismissalTime(e) {
          return s[e];
        }
        getAllEventDismissals() {
          return s;
        }
        getUpcomingNoticeSeenTime(e) {
          return _[e];
        }
        getAllUpcomingNoticeSeenTimes() {
          return _;
        }
        getState() {
          return { upcomingEventDismissals: s, upcomingEventSeenTimestamps: _ };
        }
      }
      a(f, "displayName", "UpcomingEventNoticesStore"),
        a(f, "persistKey", "UpcomingEventNotices"),
        (n.Z = new f(l.Z, {
          UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
            let { eventId: n } = e,
              t = { ...s };
            (t[n] = Date.now()), (s = t);
          },
          GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
            let { guildScheduledEvent: n } = e;
            (n.status === d.p1.CANCELED || n.status === d.p1.COMPLETED) &&
              E(n.id);
          },
          GUILD_SCHEDULED_EVENT_DELETE: function (e) {
            let { guildScheduledEvent: n } = e;
            E(n.id);
          },
          GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
            let { userId: n, guildEventId: t } = e;
            if (n !== r.default.getId()) return;
            let i = u.ZP.getGuildScheduledEvent(t);
            if (null == i || i.status !== d.p1.SCHEDULED || null != s[t])
              return;
            let c = _[t];
            if ((0, o.M)(i, void 0, c, !1) === d.X_.NEW_EVENT) {
              let e = { ...s };
              (e[t] = Date.now()), (s = e);
            }
          },
          UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
            let { guildEventId: n } = e,
              t = { ..._ };
            (t[n] = Date.now()), (_ = t);
          },
        }));
    },
    518756: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      }),
        t(47120);
      var i = t(442837),
        c = t(357156),
        l = t(984933),
        r = t(430824),
        u = t(496675),
        o = t(981631);
      function d(e, n) {
        return (0, i.e7)(
          [r.Z, l.ZP, u.Z],
          () => {
            let t = r.Z.getGuild(e);
            if (
              u.Z.can(o.Plq.ADMINISTRATOR, t) ||
              u.Z.can(o.Plq.CREATE_EVENTS, t)
            )
              return !0;
            for (let { channel: t } of l.ZP.getChannels(e)[l.Zb])
              if (null == n || t.type === n) {
                let [e] = (0, c.Ob)(t);
                if (u.Z.can(e, t)) return !0;
              }
            return !1;
          },
          [e, n],
        );
      }
    },
    554747: function (e, n, t) {
      t.d(n, {
        Vm: function () {
          return b;
        },
        ZP: function () {
          return Z;
        },
        eF: function () {
          return P;
        },
        gM: function () {
          return p;
        },
        k5: function () {
          return D;
        },
        qY: function () {
          return h;
        },
        sz: function () {
          return m;
        },
        u1: function () {
          return S;
        },
      }),
        t(47120),
        t(724458);
      var i = t(470079),
        c = t(442837),
        l = t(241155),
        r = t(592125),
        u = t(984933),
        o = t(430824),
        d = t(496675),
        a = t(70956),
        s = t(823379),
        _ = t(924301),
        E = t(658041),
        f = t(835184),
        N = t(79874),
        I = t(854698),
        C = t(765305),
        v = t(981631);
      let T = [],
        g = 15 * a.Z.Millis.MINUTE;
      function Z(e, n) {
        return (0, c.Wu)(
          [o.Z, l.Z, _.ZP, d.Z, r.Z, u.ZP],
          () => {
            let t = o.Z.getGuild(e);
            if (null == t) return T;
            if (t.hasFeature(v.oNc.HUB)) {
              var i, c;
              let e =
                null === (i = u.ZP.getDefaultChannel(t.id)) || void 0 === i
                  ? void 0
                  : i.id;
              return (
                null !== (c = l.Z.getEventDirectoryEntries(e)) && void 0 !== c
                  ? c
                  : []
              )
                .map((e) => {
                  let n = e.scheduledEventId,
                    t = _.ZP.getGuildScheduledEvent(n);
                  return null != t
                    ? t
                    : l.Z.getCachedGuildScheduledEventById(n);
                })
                .filter(s.lm);
            }
            return _.ZP.getGuildScheduledEventsByIndex(
              null != n ? n : _.bN.GUILD_EVENT_UPCOMING(t.id),
            ).filter((e) => {
              let n = e.channel_id;
              if (null == n) return !0;
              let t = r.Z.getChannel(n);
              return d.Z.can(v.Plq.VIEW_CHANNEL, t);
            });
          },
          [n, e],
        );
      }
      function h(e) {
        return (0, c.e7)(
          [_.ZP, r.Z, d.Z],
          () => {
            let n = r.Z.getChannel(e);
            if (
              !d.Z.can(v.Plq.VIEW_CHANNEL, n) ||
              null == (null == n ? void 0 : n.guild_id)
            )
              return null;
            let t = _.ZP.getGuildScheduledEventsByIndex(
              _.bN.CHANNEL_EVENT_ACTIVE(e),
            );
            return t.length > 0 ? t[0] : null;
          },
          [e],
        );
      }
      function p(e) {
        let n = (0, c.Wu)(
          [_.ZP],
          () => _.ZP.getGuildScheduledEventsForGuild(e),
          [e],
        );
        return i.useMemo(() => {
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
      function b(e) {
        var n, t;
        let i =
            ((n = e),
            (0, c.Wu)(
              [_.ZP, r.Z, d.Z],
              () =>
                _.ZP.getGuildScheduledEventsByIndex(
                  _.bN.GUILD_EVENT_UPCOMING(n),
                ).filter((e) => {
                  if (
                    e.entity_type === C.WX.NONE ||
                    e.status !== C.p1.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let n = r.Z.getChannel(e.channel_id);
                  return d.Z.can(v.Plq.VIEW_CHANNEL, n);
                }),
              [n],
            )),
          l = (0, c.cj)([f.Z], () => f.Z.getAllEventDismissals()),
          u = (0, c.cj)([f.Z], () => f.Z.getAllUpcomingNoticeSeenTimes()),
          a = (0, c.cj)(
            [_.ZP],
            () =>
              null == i
                ? {}
                : i.reduce((e, n) => {
                    let t = (0, I.DK)(n);
                    return {
                      ...e,
                      [n.id]: _.ZP.isInterestedInEventRecurrence(n.id, t),
                    };
                  }, {}),
            [i],
          ),
          s = (0, c.e7)([o.Z], () => o.Z.getGuild(e)),
          N =
            null != s &&
            !s.hasFeature(v.oNc.COMMUNITY) &&
            s.hasFeature(v.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != i && null != a && N)
          for (let e = 0; e < i.length; e++) {
            let n = i[e],
              c = l[n.id],
              r = u[n.id],
              o = null !== (t = a[n.id]) && void 0 !== t && t,
              d = (0, E.M)(n, c, r, o);
            if (null != d) return { upcomingEvent: n, noticeType: d };
          }
      }
      function D(e) {
        return (0, c.e7)(
          [_.ZP, r.Z, d.Z],
          () =>
            _.ZP.getGuildScheduledEventsByIndex(
              _.bN.GUILD_EVENT_ACTIVE(e),
            ).find((e) => {
              if (e.entity_type === C.WX.NONE || !(0, _.xt)(e)) return !1;
              if (null == e.channel_id) return !0;
              let n = r.Z.getChannel(e.channel_id);
              return d.Z.can(v.Plq.VIEW_CHANNEL, n);
            }),
          [e],
        );
      }
      function S(e) {
        return (0, c.e7)(
          [_.ZP],
          () =>
            _.ZP.getGuildScheduledEventsByIndex(_.bN.CHANNEL_EVENT_UPCOMING(e)),
          [e],
        );
      }
      function P(e) {
        return (0, c.e7)(
          [r.Z, _.ZP],
          () => {
            let n = _.ZP.getGuildScheduledEventsByIndex(
              _.bN.GUILD_EVENT_ACTIVE(e),
            ).find((e) => null != r.Z.getChannel(e.channel_id));
            return r.Z.getChannel(null == n ? void 0 : n.channel_id);
          },
          [e],
        );
      }
      function m(e) {
        let [n, t] = i.useState(() => Date.now());
        i.useEffect(() => {
          let e = setInterval(() => {
            t(Date.now());
          }, g);
          return () => clearInterval(e);
        }, []);
        let l = (0, c.e7)(
          [_.ZP],
          () =>
            null == e
              ? []
              : _.ZP.getGuildScheduledEventsByIndex(
                  _.bN.CHANNEL_EVENT_UPCOMING(e),
                ),
          [e, n],
        );
        return i.useMemo(
          () =>
            l.filter((e) => {
              let { startTime: n, endTime: t } = (0, N.Kq)(e),
                { withinStartWindow: i, diffMinutes: c } = (0, I.ub)(
                  n.toISOString(),
                  null == t ? void 0 : t.toISOString(),
                );
              return e.status !== C.p1.ACTIVE && i && c < 15;
            }),
          [l],
        );
      }
    },
    334877: function (e, n, t) {
      t.d(n, {
        l: function () {
          return l;
        },
      });
      var i = t(652874),
        c = t(731965);
      let l = (0, i.Z)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(n) {
          (0, c.j)(() => e({ canCloseModal: n }));
        },
      }));
    },
    576749: function (e, n, t) {
      var i = t(481060),
        c = t(40851),
        l = t(334877),
        r = t(981631);
      let u = "guild-event-modal";
      n.Z = () => {
        let e =
          (0, c.bp)() === r.IlC.POPOUT
            ? i.POPOUT_MODAL_CONTEXT
            : i.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: u,
          contextKey: e,
          onCloseRequest: () => {
            l.l.getState().canCloseModal && (0, i.closeModal)(u, e);
          },
        };
      };
    },
    147754: function (e, n, t) {
      var i = t(818083);
      n.Z = (0, i.B)({
        kind: "guild",
        id: "2021-11_hub_events",
        label: "Hub Events",
        defaultConfig: { showHubEventsList: !1 },
        treatments: [
          {
            id: 1,
            label: "Show Hub Events List",
            config: { showHubEventsList: !0 },
          },
        ],
      });
    },
    724912: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(442837),
        c = t(430824),
        l = t(981631);
      function r(e) {
        return (0, i.e7)(
          [c.Z],
          () => {
            var n;
            if (null == e) return !1;
            let t = c.Z.getGuild(e);
            return (
              null !== (n = null == t ? void 0 : t.hasFeature(l.oNc.HUB)) &&
              void 0 !== n &&
              n
            );
          },
          [e],
        );
      }
    },
    939863: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(735250);
      t(470079);
      var c = t(120356),
        l = t.n(c),
        r = t(689938),
        u = t(843117),
        o = t(296507),
        d = t(866402);
      function a(e) {
        let { className: n, children: t } = e;
        return (0, i.jsxs)("div", {
          className: l()(u.container, n),
          children: [
            (0, i.jsx)("img", {
              alt: r.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: d,
              className: l()(u.sparkleIcon, u.sparkleBottom),
            }),
            t,
            (0, i.jsx)("img", {
              alt: r.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: o,
              className: l()(u.sparkleIcon, u.sparkleTop),
            }),
          ],
        });
      }
    },
    947017: function (e, n, t) {
      e.exports = {
        card: "card_cc2c09",
        lurking: "lurking_cc2c09",
        padding: "padding_cc2c09",
        isRecurring: "isRecurring_cc2c09",
        joined: "joined_cc2c09",
        inline: "inline_cc2c09",
        guildIcon: "guildIcon_cc2c09",
        channelContainer: "channelContainer_cc2c09",
        channelContainerEnabled: "channelContainerEnabled_cc2c09",
        channelContainerDisabled: "channelContainerDisabled_cc2c09",
        icon: "icon_cc2c09",
        spacing: "spacing_cc2c09",
        divider: "divider_cc2c09",
        footer: "footer_cc2c09",
        channelLocation: "channelLocation_cc2c09 label_cc2c09",
        externalLocation: "externalLocation_cc2c09 label_cc2c09",
      };
    },
    269907: function (e, n, t) {
      e.exports = {
        container: "container_e6c1bb",
        iconButton: "iconButton_e6c1bb",
        icon: "icon_e6c1bb",
        innerButton: "innerButton_e6c1bb",
        tooltips: "tooltips_e6c1bb",
      };
    },
    676646: function (e, n, t) {
      e.exports = {
        container: "container_ee9d1a",
        canceled: "canceled_ee9d1a",
        active: "active_ee9d1a",
        timeStatus: "timeStatus_ee9d1a",
        icon: "icon_ee9d1a",
        iconButton: "iconButton_ee9d1a",
        canceledStatus: "canceledStatus_ee9d1a",
        clickable: "clickable_ee9d1a",
      };
    },
    128729: function (e, n, t) {
      e.exports = {
        recurrences: "recurrences_cf6131",
        heading: "heading_cf6131",
        scroller: "scroller_cf6131",
        showScroller: "showScroller_cf6131",
        button: "button_cf6131",
      };
    },
    975455: function (e, n, t) {
      e.exports = {
        header: "header_fa4e6d",
        content: "content_fa4e6d",
        icon: "icon_fa4e6d",
        divider: "divider_fa4e6d",
        button: "button_fa4e6d",
        iconButton: "iconButton_fa4e6d",
      };
    },
    682213: function (e, n, t) {
      e.exports = {
        container: "container_c1cfd2",
        circle: "circle_c1cfd2",
        icon: "icon_c1cfd2",
        title: "title_c1cfd2",
        subtitle: "subtitle_c1cfd2",
        roleTip: "roleTip_c1cfd2",
      };
    },
    494545: function (e, n, t) {
      e.exports = {
        container: "container_d9ad97",
        iconButton: "iconButton_d9ad97",
        icon: "icon_d9ad97",
        innerButton: "innerButton_d9ad97",
        button: "button_d9ad97",
      };
    },
    571032: function (e, n, t) {
      e.exports = {
        grid: "grid_bd205c",
        speakerContainer: "speakerContainer_bd205c",
        avatar: "avatar_bd205c",
        iconMicrophone: "iconMicrophone_bd205c",
        textInGridContainer: "textInGridContainer_bd205c",
        textInGrid: "textInGrid_bd205c",
      };
    },
    843117: function (e, n, t) {
      e.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
  },
]);
//# sourceMappingURL=4ab4fdba6fcd5d7b2338.js.map
