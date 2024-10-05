"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["76351"],
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
          return o;
        },
      });
      var i = t(954955),
        c = t.n(i),
        r = t(544891),
        l = t(570140),
        u = t(486527),
        a = t(981631);
      let o = c()(async (e) => {
        try {
          l.Z.dispatch({ type: "EVENT_DIRECTORY_FETCH_START" });
          let n = await r.tn.get({
            url: a.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
            query: { type: u.C2.GUILD_SCHEDULED_EVENT },
          });
          l.Z.dispatch({
            type: "EVENT_DIRECTORY_FETCH_SUCCESS",
            channelId: e,
            entries: n.body,
          });
        } catch (e) {
          l.Z.dispatch({ type: "EVENT_DIRECTORY_FETCH_FAILURE" });
        }
      }, 200);
    },
    241155: function (e, n, t) {
      t(47120);
      var i,
        c,
        r,
        l,
        u = t(392711),
        a = t.n(u),
        o = t(442837),
        d = t(570140),
        s = t(924301),
        _ = t(601964),
        E = t(486527);
      let f = !1,
        v = {},
        p = {},
        N = {},
        C = (e) => (
          (N[e.guild_scheduled_event.id] = new _.ZP(
            e.guild_scheduled_event.guild,
          )),
          (p[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: E.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class T extends (i = o.ZP.Store) {
        isFetching() {
          return f;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return v[e];
        }
        getCachedGuildByEventId(e) {
          var n;
          return null !== (n = N[e]) && void 0 !== n ? n : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var n;
          return null !== (n = p[e]) && void 0 !== n ? n : void 0;
        }
      }
      (l = "EventDirectoryStore"),
        (r = "displayName") in (c = T)
          ? Object.defineProperty(c, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (c[r] = l),
        (n.Z = new T(d.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            f = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
            let { channelId: n, entries: t } = e;
            f = !1;
            let i = a().sortBy(
                [...t],
                [
                  function (e) {
                    return (0, s.CQ)(e.guild_scheduled_event);
                  },
                ],
              ),
              c = a().map(i, C);
            v[n] = c;
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
        r = t(709054),
        l = t(765305);
      function u(e, n, t, i) {
        let u = c()(),
          a = new Date(e.scheduled_start_time).getTime(),
          o = { start: a - l.VF, end: a };
        if (u.isBetween(o.start, o.end)) {
          if (null != n) {
            let e = c()(n),
              t = e.isBetween(o.start, o.end),
              r = e.isBetween(c()(a).subtract(l.zV, "days"), a);
            return t || (r && !i) ? void 0 : l.X_.EVENT_STARTING_SOON;
          }
          return l.X_.EVENT_STARTING_SOON;
        }
        let d = r.default.extractTimestamp(e.id),
          s = Math.min((null != t ? t : d) + l.Fc, a);
        if (u.isBetween(d, s) && null == n && !i) return l.X_.NEW_EVENT;
      }
    },
    835184: function (e, n, t) {
      var i,
        c = t(442837),
        r = t(570140),
        l = t(314897),
        u = t(924301),
        a = t(658041),
        o = t(765305);
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
      d(f, "displayName", "UpcomingEventNoticesStore"),
        d(f, "persistKey", "UpcomingEventNotices"),
        (n.Z = new f(r.Z, {
          UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
            let { eventId: n } = e,
              t = { ...s };
            (t[n] = Date.now()), (s = t);
          },
          GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
            let { guildScheduledEvent: n } = e;
            (n.status === o.p1.CANCELED || n.status === o.p1.COMPLETED) &&
              E(n.id);
          },
          GUILD_SCHEDULED_EVENT_DELETE: function (e) {
            let { guildScheduledEvent: n } = e;
            E(n.id);
          },
          GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
            let { userId: n, guildEventId: t } = e;
            if (n !== l.default.getId()) return;
            let i = u.ZP.getGuildScheduledEvent(t);
            if (null == i || i.status !== o.p1.SCHEDULED || null != s[t])
              return;
            let c = _[t];
            if ((0, a.M)(i, void 0, c, !1) === o.X_.NEW_EVENT) {
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
          return o;
        },
      }),
        t(47120);
      var i = t(442837),
        c = t(357156),
        r = t(984933),
        l = t(430824),
        u = t(496675),
        a = t(981631);
      function o(e, n) {
        return (0, i.e7)(
          [l.Z, r.ZP, u.Z],
          () => {
            let t = l.Z.getGuild(e);
            if (
              u.Z.can(a.Plq.ADMINISTRATOR, t) ||
              u.Z.can(a.Plq.CREATE_EVENTS, t)
            )
              return !0;
            for (let { channel: t } of r.ZP.getChannels(e)[r.Zb])
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
          return g;
        },
        eF: function () {
          return m;
        },
        gM: function () {
          return Z;
        },
        k5: function () {
          return S;
        },
        qY: function () {
          return h;
        },
        sz: function () {
          return R;
        },
        u1: function () {
          return D;
        },
      }),
        t(47120),
        t(724458);
      var i = t(470079),
        c = t(442837),
        r = t(241155),
        l = t(592125),
        u = t(984933),
        a = t(430824),
        o = t(496675),
        d = t(70956),
        s = t(823379),
        _ = t(924301),
        E = t(658041),
        f = t(835184),
        v = t(79874),
        p = t(854698),
        N = t(765305),
        C = t(981631);
      let T = [],
        I = 15 * d.Z.Millis.MINUTE;
      function g(e, n) {
        return (0, c.Wu)(
          [a.Z, r.Z, _.ZP, o.Z, l.Z, u.ZP],
          () => {
            let t = a.Z.getGuild(e);
            if (null == t) return T;
            if (t.hasFeature(C.oNc.HUB)) {
              var i, c;
              let e =
                null === (i = u.ZP.getDefaultChannel(t.id)) || void 0 === i
                  ? void 0
                  : i.id;
              return (
                null !== (c = r.Z.getEventDirectoryEntries(e)) && void 0 !== c
                  ? c
                  : []
              )
                .map((e) => {
                  let n = e.scheduledEventId,
                    t = _.ZP.getGuildScheduledEvent(n);
                  return null != t
                    ? t
                    : r.Z.getCachedGuildScheduledEventById(n);
                })
                .filter(s.lm);
            }
            return _.ZP.getGuildScheduledEventsByIndex(
              null != n ? n : _.bN.GUILD_EVENT_UPCOMING(t.id),
            ).filter((e) => {
              let n = e.channel_id;
              if (null == n) return !0;
              let t = l.Z.getChannel(n);
              return o.Z.can(C.Plq.VIEW_CHANNEL, t);
            });
          },
          [n, e],
        );
      }
      function h(e) {
        return (0, c.e7)(
          [_.ZP, l.Z, o.Z],
          () => {
            let n = l.Z.getChannel(e);
            if (
              !o.Z.can(C.Plq.VIEW_CHANNEL, n) ||
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
      function Z(e) {
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
              [_.ZP, l.Z, o.Z],
              () =>
                _.ZP.getGuildScheduledEventsByIndex(
                  _.bN.GUILD_EVENT_UPCOMING(n),
                ).filter((e) => {
                  if (
                    e.entity_type === N.WX.NONE ||
                    e.status !== N.p1.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let n = l.Z.getChannel(e.channel_id);
                  return o.Z.can(C.Plq.VIEW_CHANNEL, n);
                }),
              [n],
            )),
          r = (0, c.cj)([f.Z], () => f.Z.getAllEventDismissals()),
          u = (0, c.cj)([f.Z], () => f.Z.getAllUpcomingNoticeSeenTimes()),
          d = (0, c.cj)(
            [_.ZP],
            () =>
              null == i
                ? {}
                : i.reduce((e, n) => {
                    let t = (0, p.DK)(n);
                    return {
                      ...e,
                      [n.id]: _.ZP.isInterestedInEventRecurrence(n.id, t),
                    };
                  }, {}),
            [i],
          ),
          s = (0, c.e7)([a.Z], () => a.Z.getGuild(e)),
          v =
            null != s &&
            !s.hasFeature(C.oNc.COMMUNITY) &&
            s.hasFeature(C.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != i && null != d && v)
          for (let e = 0; e < i.length; e++) {
            let n = i[e],
              c = r[n.id],
              l = u[n.id],
              a = null !== (t = d[n.id]) && void 0 !== t && t,
              o = (0, E.M)(n, c, l, a);
            if (null != o) return { upcomingEvent: n, noticeType: o };
          }
      }
      function S(e) {
        return (0, c.e7)(
          [_.ZP, l.Z, o.Z],
          () =>
            _.ZP.getGuildScheduledEventsByIndex(
              _.bN.GUILD_EVENT_ACTIVE(e),
            ).find((e) => {
              if (e.entity_type === N.WX.NONE || !(0, _.xt)(e)) return !1;
              if (null == e.channel_id) return !0;
              let n = l.Z.getChannel(e.channel_id);
              return o.Z.can(C.Plq.VIEW_CHANNEL, n);
            }),
          [e],
        );
      }
      function D(e) {
        return (0, c.e7)(
          [_.ZP],
          () =>
            _.ZP.getGuildScheduledEventsByIndex(_.bN.CHANNEL_EVENT_UPCOMING(e)),
          [e],
        );
      }
      function m(e) {
        return (0, c.e7)(
          [l.Z, _.ZP],
          () => {
            let n = _.ZP.getGuildScheduledEventsByIndex(
              _.bN.GUILD_EVENT_ACTIVE(e),
            ).find((e) => null != l.Z.getChannel(e.channel_id));
            return l.Z.getChannel(null == n ? void 0 : n.channel_id);
          },
          [e],
        );
      }
      function R(e) {
        let [n, t] = i.useState(() => Date.now());
        i.useEffect(() => {
          let e = setInterval(() => {
            t(Date.now());
          }, I);
          return () => clearInterval(e);
        }, []);
        let r = (0, c.e7)(
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
            r.filter((e) => {
              let { startTime: n, endTime: t } = (0, v.Kq)(e),
                { withinStartWindow: i, diffMinutes: c } = (0, p.ub)(
                  n.toISOString(),
                  null == t ? void 0 : t.toISOString(),
                );
              return e.status !== N.p1.ACTIVE && i && c < 15;
            }),
          [r],
        );
      }
    },
    334877: function (e, n, t) {
      t.d(n, {
        l: function () {
          return r;
        },
      });
      var i = t(652874),
        c = t(731965);
      let r = (0, i.Z)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(n) {
          (0, c.j)(() => e({ canCloseModal: n }));
        },
      }));
    },
    139712: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(47120);
      var i = t(735250),
        c = t(470079),
        r = t(481060),
        l = t(482241),
        u = t(124165),
        a = t(765305),
        o = t(689938),
        d = t(196238);
      function s(e) {
        let { event: n, recurrenceId: t, guildId: s, onRsvp: _, ...E } = e,
          [f, v] = c.useState(u.KX.SERIES),
          p = (0, u.X2)(n.id, null),
          N =
            (null == p ? void 0 : p.response) === a.gv.INTERESTED
              ? a.gv.UNINTERESTED
              : a.gv.INTERESTED,
          C =
            N === a.gv.INTERESTED
              ? o.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED
              : o.Z.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
        return (0, i.jsx)(r.ConfirmModal, {
          ...E,
          header: C,
          confirmText: o.Z.Messages.OK,
          cancelText: o.Z.Messages.CANCEL,
          onConfirm: () => {
            f === u.KX.SERIES
              ? l.Z.updateRsvp(n.id, null, s, N)
              : l.Z.updateRsvp(n.id, t, s, N),
              null == _ || _(),
              E.onClose();
          },
          confirmButtonColor: r.Button.Colors.BRAND,
          children: (0, i.jsx)(r.RadioGroup, {
            className: d.responseOptions,
            value: f,
            options: (0, u.pF)(),
            onChange: (e) => v(e.value),
          }),
        });
      }
      function _(e, n, t, c) {
        (0, u.cg)({
          eventId: e,
          recurrenceId: n,
          guildId: t,
          updateRsvp: (n, i, c, r) => l.Z.updateRsvp(e, i, t, r),
          openRsvpPicker: (e, n) => {
            (0, r.openModalLazy)(() =>
              Promise.resolve((r) =>
                (0, i.jsx)(s, {
                  ...r,
                  event: e,
                  recurrenceId: n,
                  guildId: t,
                  onRsvp: c,
                }),
              ),
            );
          },
          onRsvp: c,
        });
      }
    },
    576749: function (e, n, t) {
      var i = t(481060),
        c = t(40851),
        r = t(334877),
        l = t(981631);
      let u = "guild-event-modal";
      n.Z = () => {
        let e =
          (0, c.bp)() === l.IlC.POPOUT
            ? i.POPOUT_MODAL_CONTEXT
            : i.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: u,
          contextKey: e,
          onCloseRequest: () => {
            r.l.getState().canCloseModal && (0, i.closeModal)(u, e);
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
          return l;
        },
      });
      var i = t(442837),
        c = t(430824),
        r = t(981631);
      function l(e) {
        return (0, i.e7)(
          [c.Z],
          () => {
            var n;
            if (null == e) return !1;
            let t = c.Z.getGuild(e);
            return (
              null !== (n = null == t ? void 0 : t.hasFeature(r.oNc.HUB)) &&
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
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var c = t(120356),
        r = t.n(c),
        l = t(689938),
        u = t(843117),
        a = t(296507),
        o = t(866402);
      function d(e) {
        let { className: n, children: t } = e;
        return (0, i.jsxs)("div", {
          className: r()(u.container, n),
          children: [
            (0, i.jsx)("img", {
              alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: o,
              className: r()(u.sparkleIcon, u.sparkleBottom),
            }),
            t,
            (0, i.jsx)("img", {
              alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: a,
              className: r()(u.sparkleIcon, u.sparkleTop),
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
    737602: function (e, n, t) {
      e.exports = {
        descriptionText: "descriptionText_f4ba67",
        truncate: "truncate_f4ba67",
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
    731006: function (e, n, t) {
      e.exports = { container: "container_f87f77" };
    },
    247912: function (e, n, t) {
      e.exports = {
        container: "container_a4ec62",
        eventName: "eventName_a4ec62",
        description: "description_a4ec62",
        descriptionWithThumbnail: "descriptionWithThumbnail_a4ec62",
        spacer: "spacer_a4ec62",
        rsvpCount: "rsvpCount_a4ec62",
        rsvpIcon: "rsvpIcon_a4ec62",
        creator: "creator_a4ec62",
        eventInfoStatusContainer: "eventInfoStatusContainer_a4ec62",
        statusContainer: "statusContainer_a4ec62",
        withThumbnail: "withThumbnail_a4ec62",
        thumbnailContainer: "thumbnailContainer_a4ec62",
        thumbnail: "thumbnail_a4ec62",
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
    205569: function (e, n, t) {
      e.exports = {
        eventStatusContainer: "eventStatusContainer_d6a475",
        isRecurring: "isRecurring_d6a475",
        eventStatusLabel: "eventStatusLabel_d6a475",
        liveEventEndTime: "liveEventEndTime_d6a475",
        newBadge: "newBadge_d6a475",
        newBadgeText: "newBadgeText_d6a475",
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
    196238: function (e, n, t) {
      e.exports = { responseOptions: "responseOptions_ff8b0a" };
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
//# sourceMappingURL=926ac5dac044e9fff667.js.map
