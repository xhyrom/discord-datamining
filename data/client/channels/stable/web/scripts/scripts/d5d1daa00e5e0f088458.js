"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79521"],
  {
    207540: function (e, t, n) {
      n.r(t), n(47120);
      var l = n(735250),
        r = n(470079),
        i = n(442837),
        u = n(481060),
        d = n(933557),
        s = n(156699),
        a = n(734893),
        E = n(693196),
        o = n(66999),
        c = n(575830),
        _ = n(554747),
        N = n(434404),
        T = n(144140),
        f = n(314897),
        C = n(430824),
        g = n(496675),
        Z = n(981631),
        D = n(689938),
        h = n(276799);
      t.default = (e) => {
        let { channel: t, onClose: n, onConfirm: I, transitionState: v } = e,
          L = (0, d.ZP)(t, !0),
          O = t.id,
          m = t.isForumPost(),
          M = (0, i.e7)([C.Z], () => C.Z.getGuild(t.getGuildId())),
          A = (0, _.u1)(O),
          { isSubscriptionGated: S } = (0, o.Z)(t.id),
          P = (0, c.Z)(M, t),
          [G, x] = r.useState(),
          U = (0, i.e7)([f.default], () => t.isOwner(f.default.getId()), [t]),
          p = (0, i.e7)(
            [g.Z],
            () =>
              g.Z.can(
                t.isThread() ? Z.Plq.MANAGE_THREADS : Z.Plq.MANAGE_CHANNELS,
                t,
              ),
            [t],
          ),
          H = (0, i.e7)(
            [T.Z],
            () => {
              var e;
              return null !== (e = T.Z.getCount(t.id)) && void 0 !== e ? e : 0;
            },
            [t.id],
          ),
          R = m && (p || (U && H < 1)),
          B =
            A.length > 0 &&
            (t.type === Z.d4z.GUILD_VOICE ||
              t.type === Z.d4z.GUILD_STAGE_VOICE);
        if (
          (r.useEffect(() => {
            (async () => {
              if (!(await (0, s.C)(t.getGuildId(), O))) {
                x(a.j.DEFAULT);
                return;
              }
              let e = await (0, E.T)(t.getGuildId(), O);
              if (null != e) {
                x(e);
                return;
              }
            })();
          }, [t, O]),
          null != G)
        ) {
          let e;
          let t = D.Z.Messages.DELETE_DEFAULT_CHANNEL_BODY;
          return (
            (e =
              G === a.j.TODO
                ? D.Z.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO
                : G === a.j.RESOURCE
                  ? D.Z.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE
                  : D.Z.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING),
            (0, l.jsxs)(u.ModalRoot, {
              transitionState: v,
              "aria-label": D.Z.Messages.CANNOT_DELETE_CHANNEL,
              children: [
                (0, l.jsx)(u.ModalHeader, {
                  separator: !1,
                  children: (0, l.jsx)(u.Heading, {
                    variant: "heading-lg/semibold",
                    children: D.Z.Messages.CANNOT_DELETE_CHANNEL,
                  }),
                }),
                (0, l.jsxs)(u.ModalContent, {
                  className: h.modalContent,
                  children: [
                    (0, l.jsx)(u.Text, {
                      variant: "text-md/normal",
                      children: t,
                    }),
                    (0, l.jsx)(u.Text, {
                      variant: "text-md/normal",
                      children: e.format({
                        onClick: () => {
                          null != M &&
                            (N.Z.open(M.id, Z.pNK.ONBOARDING),
                            null == n || n());
                        },
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)(u.ModalFooter, {
                  children: (0, l.jsx)(u.Button, {
                    onClick: n,
                    children: D.Z.Messages.OKAY,
                  }),
                }),
              ],
            })
          );
        }
        if (null == M) return null;
        if (
          M.hasFeature(Z.oNc.COMMUNITY) &&
          (M.rulesChannelId === O || M.publicUpdatesChannelId === O)
        ) {
          let e = M.rulesChannelId === O,
            t = e
              ? D.Z.Messages.DELETE_RULES_CHANNEL_BODY
              : D.Z.Messages.DELETE_UPDATES_CHANNEL_BODY;
          return (0, l.jsxs)(u.ModalRoot, {
            transitionState: v,
            "aria-label": D.Z.Messages.CANNOT_DELETE_CHANNEL,
            children: [
              (0, l.jsx)(u.ModalHeader, {
                separator: !1,
                children: (0, l.jsx)(u.Heading, {
                  variant: "heading-lg/semibold",
                  children: D.Z.Messages.CANNOT_DELETE_CHANNEL,
                }),
              }),
              (0, l.jsxs)(u.ModalContent, {
                children: [
                  (0, l.jsx)(u.Text, {
                    variant: "text-md/normal",
                    className: h.__invalid_modalText,
                    children: t,
                  }),
                  (0, l.jsx)(u.Text, {
                    variant: "text-md/normal",
                    className: h.__invalid_modalText,
                    children: D.Z.Messages.DESIGNATE_OTHER_CHANNEL.format({
                      onClick: () => {
                        N.Z.open(M.id, Z.pNK.COMMUNITY), null == n || n();
                      },
                    }),
                  }),
                ],
              }),
              (0, l.jsx)(u.ModalFooter, {
                children: (0, l.jsx)(u.Button, {
                  onClick: n,
                  children: D.Z.Messages.OKAY,
                }),
              }),
            ],
          });
        }
        {
          let { deleteText: e, deleteBody: r } = (() => {
            if (t.type === Z.d4z.GUILD_CATEGORY)
              return {
                deleteText: D.Z.Messages.DELETE_CATEGORY,
                deleteBody: D.Z.Messages.DELETE_CHANNEL_BODY.format({
                  channelName: L,
                }),
              };
            if (t.isForumPost())
              return {
                deleteText: R
                  ? D.Z.Messages.DELETE_FORUM_POST
                  : D.Z.Messages.DELETE_MESSAGE,
                deleteBody:
                  R && U && !p
                    ? D.Z.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
                        postName: L,
                      })
                    : R
                      ? D.Z.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
                          postName: L,
                        })
                      : D.Z.Messages
                          .DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY,
              };
            if (t.isThread())
              return {
                deleteText: D.Z.Messages.DELETE_THREAD,
                deleteBody: D.Z.Messages.DELETE_CHANNEL_BODY.format({
                  channelName: L,
                }),
              };
            else if (S && P > 0)
              return {
                deleteText: D.Z.Messages.DELETE_CHANNEL,
                deleteBody:
                  D.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format(
                    { channelName: L, numGuildRoleSubscriptionMembers: P },
                  ),
              };
            return {
              deleteText: D.Z.Messages.DELETE_CHANNEL,
              deleteBody: D.Z.Messages.DELETE_CHANNEL_BODY.format({
                channelName: L,
              }),
            };
          })();
          return (0, l.jsxs)(u.ModalRoot, {
            transitionState: v,
            "aria-label": e,
            children: [
              (0, l.jsx)(u.ModalHeader, {
                separator: !1,
                children: (0, l.jsx)(u.Heading, {
                  variant: "heading-lg/semibold",
                  children: e,
                }),
              }),
              (0, l.jsxs)(u.ModalContent, {
                className: h.modalContent,
                children: [
                  (0, l.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "header-primary",
                    children: r,
                  }),
                  B
                    ? (0, l.jsx)(u.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: h.warningText,
                        children:
                          D.Z.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format(
                            { count: A.length },
                          ),
                      })
                    : null,
                ],
              }),
              (0, l.jsxs)(u.ModalFooter, {
                children: [
                  (0, l.jsx)(u.Button, {
                    onClick: I,
                    color: u.Button.Colors.RED,
                    children: e,
                  }),
                  (0, l.jsx)(u.Button, {
                    onClick: n,
                    look: u.Button.Looks.LINK,
                    color: u.Button.Colors.PRIMARY,
                    children: D.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          });
        }
      };
    },
    241155: function (e, t, n) {
      n(47120);
      var l,
        r,
        i,
        u,
        d = n(392711),
        s = n.n(d),
        a = n(442837),
        E = n(570140),
        o = n(924301),
        c = n(601964),
        _ = n(486527);
      let N = !1,
        T = {},
        f = {},
        C = {},
        g = (e) => (
          (C[e.guild_scheduled_event.id] = new c.ZP(
            e.guild_scheduled_event.guild,
          )),
          (f[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: _.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class Z extends (l = a.ZP.Store) {
        isFetching() {
          return N;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return T[e];
        }
        getCachedGuildByEventId(e) {
          var t;
          return null !== (t = C[e]) && void 0 !== t ? t : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var t;
          return null !== (t = f[e]) && void 0 !== t ? t : void 0;
        }
      }
      (u = "EventDirectoryStore"),
        (i = "displayName") in (r = Z)
          ? Object.defineProperty(r, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = u),
        (t.Z = new Z(E.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            N = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
            let { channelId: t, entries: n } = e;
            N = !1;
            let l = s().sortBy(
                [...n],
                [
                  function (e) {
                    return (0, o.CQ)(e.guild_scheduled_event);
                  },
                ],
              ),
              r = s().map(l, g);
            T[t] = r;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            N = !1;
          },
        }));
    },
    693196: function (e, t, n) {
      n.d(t, {
        T: function () {
          return d;
        },
      });
      var l = n(526120),
        r = n(563534),
        i = n(734893),
        u = n(931261);
      async function d(e, t) {
        if (null == e || !(0, u.s)(e)) return;
        let n = r.Z.getSettings(e);
        return (n === r.P && (await (0, l.cP)(e), (n = r.Z.getSettings(e))),
        n === r.P || null == n)
          ? void 0
          : null != n.newMemberActions &&
              null != n.newMemberActions.find((e) => e.channelId === t)
            ? i.j.TODO
            : null != n.resourceChannels &&
                null != n.resourceChannels.find((e) => e.channelId === t)
              ? i.j.RESOURCE
              : void 0;
      }
    },
    637565: function (e, t, n) {
      n.d(t, {
        T: function () {
          return d;
        },
      }),
        n(47120);
      var l = n(149765),
        r = n(973542),
        i = n(790285),
        u = n(981631);
      function d(e, t, n) {
        let d = new Set();
        for (let e of Object.keys(n.permissionOverwrites)) {
          let l = t[e],
            u = n.permissionOverwrites[e];
          (0, r.Z)(l) && (0, i.TG)(n, u) && d.add(l);
        }
        let s = t[e.getEveryoneRoleId()],
          a = null != s && !l.e$(s.permissions, u.Plq.VIEW_CHANNEL),
          E = (0, i.wB)(n, n.permissionOverwrites[e.id]);
        if (a && !E)
          for (let e of Object.values(t))
            (0, r.Z)(e) && (0, i.MT)(e) && d.add(e);
        return [...d];
      }
    },
    14263: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var l = n(470079),
        r = n(442837),
        i = n(480608),
        u = n(243730);
      let d = {};
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, r.e7)([u.Z], () => u.Z.getRoleMemberCount(e));
        return (
          l.useEffect(() => {
            if (null == e) return;
            let n = d[e];
            !(null != n && t > 0 && Date.now() - n < t) &&
              ((d[e] = Date.now()), i.E(e));
          }, [e, t]),
          n
        );
      }
    },
    575830: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var l = n(470079),
        r = n(442837),
        i = n(430824),
        u = n(637565),
        d = n(14263);
      function s(e, t) {
        let n = (0, r.e7)([i.Z], () =>
            null != e ? i.Z.getRoles(e.id) : void 0,
          ),
          s = (0, d.Z)(null == e ? void 0 : e.id);
        return l.useMemo(() => {
          let l = null != e && null != n ? (0, u.T)(e, n, t) : [],
            r = 0;
          for (let e of l) {
            let t = e.id;
            if (null != t) {
              let e = null == s ? void 0 : s[t];
              null != e && (r += e);
            }
          }
          return r;
        }, [s, e, t, n]);
      }
    },
    658041: function (e, t, n) {
      n.d(t, {
        M: function () {
          return d;
        },
      });
      var l = n(913527),
        r = n.n(l),
        i = n(709054),
        u = n(765305);
      function d(e, t, n, l) {
        let d = r()(),
          s = new Date(e.scheduled_start_time).getTime(),
          a = { start: s - u.VF, end: s };
        if (d.isBetween(a.start, a.end)) {
          if (null != t) {
            let e = r()(t),
              n = e.isBetween(a.start, a.end),
              i = e.isBetween(r()(s).subtract(u.zV, "days"), s);
            return n || (i && !l) ? void 0 : u.X_.EVENT_STARTING_SOON;
          }
          return u.X_.EVENT_STARTING_SOON;
        }
        let E = i.default.extractTimestamp(e.id),
          o = Math.min((null != n ? n : E) + u.Fc, s);
        if (d.isBetween(E, o) && null == t && !l) return u.X_.NEW_EVENT;
      }
    },
    835184: function (e, t, n) {
      var l,
        r = n(442837),
        i = n(570140),
        u = n(314897),
        d = n(924301),
        s = n(658041),
        a = n(765305);
      function E(e, t, n) {
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
        c = {};
      function _(e) {
        let t = { ...o };
        delete t[e], (o = t);
        let n = { ...c };
        delete n[e], (c = n);
      }
      class N extends (l = r.ZP.PersistedStore) {
        initialize(e) {
          if (null != e) {
            var t, n;
            (o =
              null !== (t = e.upcomingEventDismissals) && void 0 !== t
                ? t
                : {}),
              (c =
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
          return c[e];
        }
        getAllUpcomingNoticeSeenTimes() {
          return c;
        }
        getState() {
          return { upcomingEventDismissals: o, upcomingEventSeenTimestamps: c };
        }
      }
      E(N, "displayName", "UpcomingEventNoticesStore"),
        E(N, "persistKey", "UpcomingEventNotices"),
        (t.Z = new N(i.Z, {
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
            let r = c[n];
            if ((0, s.M)(l, void 0, r, !1) === a.X_.NEW_EVENT) {
              let e = { ...o };
              (e[n] = Date.now()), (o = e);
            }
          },
          UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
            let { guildEventId: t } = e,
              n = { ...c };
            (n[t] = Date.now()), (c = n);
          },
        }));
    },
    554747: function (e, t, n) {
      n.d(t, {
        Vm: function () {
          return L;
        },
        ZP: function () {
          return h;
        },
        eF: function () {
          return M;
        },
        gM: function () {
          return v;
        },
        k5: function () {
          return O;
        },
        qY: function () {
          return I;
        },
        sz: function () {
          return A;
        },
        u1: function () {
          return m;
        },
      }),
        n(47120),
        n(724458);
      var l = n(470079),
        r = n(442837),
        i = n(241155),
        u = n(592125),
        d = n(984933),
        s = n(430824),
        a = n(496675),
        E = n(70956),
        o = n(823379),
        c = n(924301),
        _ = n(658041),
        N = n(835184),
        T = n(79874),
        f = n(854698),
        C = n(765305),
        g = n(981631);
      let Z = [],
        D = 15 * E.Z.Millis.MINUTE;
      function h(e, t) {
        return (0, r.Wu)(
          [s.Z, i.Z, c.ZP, a.Z, u.Z, d.ZP],
          () => {
            let n = s.Z.getGuild(e);
            if (null == n) return Z;
            if (n.hasFeature(g.oNc.HUB)) {
              var l, r;
              let e =
                null === (l = d.ZP.getDefaultChannel(n.id)) || void 0 === l
                  ? void 0
                  : l.id;
              return (
                null !== (r = i.Z.getEventDirectoryEntries(e)) && void 0 !== r
                  ? r
                  : []
              )
                .map((e) => {
                  let t = e.scheduledEventId,
                    n = c.ZP.getGuildScheduledEvent(t);
                  return null != n
                    ? n
                    : i.Z.getCachedGuildScheduledEventById(t);
                })
                .filter(o.lm);
            }
            return c.ZP.getGuildScheduledEventsByIndex(
              null != t ? t : c.bN.GUILD_EVENT_UPCOMING(n.id),
            ).filter((e) => {
              let t = e.channel_id;
              if (null == t) return !0;
              let n = u.Z.getChannel(t);
              return a.Z.can(g.Plq.VIEW_CHANNEL, n);
            });
          },
          [t, e],
        );
      }
      function I(e) {
        return (0, r.e7)(
          [c.ZP, u.Z, a.Z],
          () => {
            let t = u.Z.getChannel(e);
            if (
              !a.Z.can(g.Plq.VIEW_CHANNEL, t) ||
              null == (null == t ? void 0 : t.guild_id)
            )
              return null;
            let n = c.ZP.getGuildScheduledEventsByIndex(
              c.bN.CHANNEL_EVENT_ACTIVE(e),
            );
            return n.length > 0 ? n[0] : null;
          },
          [e],
        );
      }
      function v(e) {
        let t = (0, r.Wu)(
          [c.ZP],
          () => c.ZP.getGuildScheduledEventsForGuild(e),
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
      function L(e) {
        var t, n;
        let l =
            ((t = e),
            (0, r.Wu)(
              [c.ZP, u.Z, a.Z],
              () =>
                c.ZP.getGuildScheduledEventsByIndex(
                  c.bN.GUILD_EVENT_UPCOMING(t),
                ).filter((e) => {
                  if (
                    e.entity_type === C.WX.NONE ||
                    e.status !== C.p1.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let t = u.Z.getChannel(e.channel_id);
                  return a.Z.can(g.Plq.VIEW_CHANNEL, t);
                }),
              [t],
            )),
          i = (0, r.cj)([N.Z], () => N.Z.getAllEventDismissals()),
          d = (0, r.cj)([N.Z], () => N.Z.getAllUpcomingNoticeSeenTimes()),
          E = (0, r.cj)(
            [c.ZP],
            () =>
              null == l
                ? {}
                : l.reduce((e, t) => {
                    let n = (0, f.DK)(t);
                    return {
                      ...e,
                      [t.id]: c.ZP.isInterestedInEventRecurrence(t.id, n),
                    };
                  }, {}),
            [l],
          ),
          o = (0, r.e7)([s.Z], () => s.Z.getGuild(e)),
          T =
            null != o &&
            !o.hasFeature(g.oNc.COMMUNITY) &&
            o.hasFeature(g.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != l && null != E && T)
          for (let e = 0; e < l.length; e++) {
            let t = l[e],
              r = i[t.id],
              u = d[t.id],
              s = null !== (n = E[t.id]) && void 0 !== n && n,
              a = (0, _.M)(t, r, u, s);
            if (null != a) return { upcomingEvent: t, noticeType: a };
          }
      }
      function O(e) {
        return (0, r.e7)(
          [c.ZP, u.Z, a.Z],
          () =>
            c.ZP.getGuildScheduledEventsByIndex(
              c.bN.GUILD_EVENT_ACTIVE(e),
            ).find((e) => {
              if (e.entity_type === C.WX.NONE || !(0, c.xt)(e)) return !1;
              if (null == e.channel_id) return !0;
              let t = u.Z.getChannel(e.channel_id);
              return a.Z.can(g.Plq.VIEW_CHANNEL, t);
            }),
          [e],
        );
      }
      function m(e) {
        return (0, r.e7)(
          [c.ZP],
          () =>
            c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(e)),
          [e],
        );
      }
      function M(e) {
        return (0, r.e7)(
          [u.Z, c.ZP],
          () => {
            let t = c.ZP.getGuildScheduledEventsByIndex(
              c.bN.GUILD_EVENT_ACTIVE(e),
            ).find((e) => null != u.Z.getChannel(e.channel_id));
            return u.Z.getChannel(null == t ? void 0 : t.channel_id);
          },
          [e],
        );
      }
      function A(e) {
        let [t, n] = l.useState(() => Date.now());
        l.useEffect(() => {
          let e = setInterval(() => {
            n(Date.now());
          }, D);
          return () => clearInterval(e);
        }, []);
        let i = (0, r.e7)(
          [c.ZP],
          () =>
            null == e
              ? []
              : c.ZP.getGuildScheduledEventsByIndex(
                  c.bN.CHANNEL_EVENT_UPCOMING(e),
                ),
          [e, t],
        );
        return l.useMemo(
          () =>
            i.filter((e) => {
              let { startTime: t, endTime: n } = (0, T.Kq)(e),
                { withinStartWindow: l, diffMinutes: r } = (0, f.ub)(
                  t.toISOString(),
                  null == n ? void 0 : n.toISOString(),
                );
              return e.status !== C.p1.ACTIVE && l && r < 15;
            }),
          [i],
        );
      }
    },
    276799: function (e, t, n) {
      e.exports = {
        modalContent: "modalContent_d7625c",
        warningText: "warningText_d7625c",
      };
    },
  },
]);
//# sourceMappingURL=d5d1daa00e5e0f088458.js.map
