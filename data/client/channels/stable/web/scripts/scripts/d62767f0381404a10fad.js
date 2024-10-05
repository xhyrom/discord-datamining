"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90029"],
  {
    177475: function (e) {
      e.exports = "/assets/a64ea373b47e9a224206.svg";
    },
    339340: function (e, n, t) {
      t.r(n),
        t.d(n, {
          VOICE_CHANNEL_STATUS_MODAL_KEY: function () {
            return I;
          },
          default: function () {
            return g;
          },
        }),
        t(47120),
        t(757143);
      var l = t(735250),
        i = t(470079),
        u = t(399606),
        r = t(343817),
        a = t(481060),
        o = t(787014),
        s = t(12498),
        d = t(541716),
        c = t(752305),
        E = t(893718),
        _ = t(600164),
        N = t(19780),
        f = t(626135),
        S = t(981631),
        T = t(689938),
        Z = t(897232);
      let I = "VoiceChannelStatusModal";
      function g(e) {
        let { channel: n, transitionState: t, onClose: g } = e,
          A = (0, u.e7)([s.Z], () => s.Z.getChannelStatus(n)),
          C = (0, u.e7)([N.Z], () => N.Z.getMediaSessionId()),
          [O, h] = i.useState(null != A ? A : ""),
          [v, M] = i.useState(!1),
          [L, m] = i.useState(null),
          U = O.length > 500;
        i.useEffect(() => {
          f.default.track(S.rMx.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: n.guild_id,
          });
        }, [n.guild_id]);
        let D = (e) => {
            m(new r.Hx(e, e.status).getAnyErrorMessage());
          },
          P = async (e) => {
            O === A && g(), null == e || e.preventDefault(), m(null), M(!0);
            let t = O.length,
              l = O.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
            try {
              let e = await o.ZP.updateVoiceChannelStatus(n.id, O);
              204 === e.status
                ? (f.default.track(S.rMx.VOICE_CHANNEL_TOPIC_SET, {
                    guild_id: n.guild_id,
                    channel_id: n.id,
                    media_session_id: C,
                    raw_length: t,
                    text_length: l,
                  }),
                  g())
                : D(e);
            } catch (e) {
              D(e);
            }
            M(!1);
          },
          [p, V] = i.useState((0, c.JM)(O)),
          y = async () => (
            !U && !v && (await P()),
            Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
          );
        return (0, l.jsx)("form", {
          onSubmit: P,
          className: Z.form,
          children: (0, l.jsxs)(a.ModalRoot, {
            transitionState: t,
            size: a.ModalSize.SMALL,
            children: [
              (0, l.jsxs)(a.ModalContent, {
                children: [
                  (0, l.jsxs)(a.ModalHeader, {
                    direction: _.Z.Direction.VERTICAL,
                    className: Z.modalHeader,
                    separator: !1,
                    children: [
                      (0, l.jsx)(a.ModalCloseButton, {
                        className: Z.closeButton,
                        onClick: g,
                      }),
                      (0, l.jsx)("div", { className: Z.headerImage }),
                      (0, l.jsx)(a.FormTitle, {
                        tag: "h1",
                        className: Z.title,
                        children: T.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE,
                      }),
                      (0, l.jsx)(a.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children:
                          T.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE,
                      }),
                    ],
                  }),
                  (0, l.jsxs)(a.FormSection, {
                    className: Z.inputSection,
                    title: T.Z.Messages.VOICE_CHANNEL_STATUS,
                    children: [
                      (0, l.jsx)(E.Z, {
                        innerClassName: Z.textArea,
                        textValue: O,
                        richValue: p,
                        placeholder:
                          T.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format(
                            { channelName: n.name },
                          ),
                        focused: !0,
                        channel: n,
                        onChange: (e, n, t) => {
                          h(n), V(t);
                        },
                        onSubmit: y,
                        type: d.I.VOICE_CHANNEL_STATUS,
                        canMentionRoles: !1,
                        canMentionChannels: !1,
                        allowNewLines: !1,
                        parentModalKey: I,
                        maxCharacterCount: 500,
                        showRemainingCharsAfterCount: 250,
                        emojiPickerCloseOnModalOuterClick: !0,
                      }),
                      null != L
                        ? (0, l.jsx)(a.FormErrorBlock, {
                            className: Z.error,
                            children: L,
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)(a.ModalFooter, {
                justify: _.Z.Justify.BETWEEN,
                direction: _.Z.Direction.HORIZONTAL,
                children: [
                  (0, l.jsx)(a.Button, {
                    color: a.Button.Colors.PRIMARY,
                    onClick: g,
                    children: T.Z.Messages.CANCEL,
                  }),
                  (0, l.jsx)(a.Button, {
                    onClick: P,
                    submitting: v,
                    className: Z.button,
                    disabled: U,
                    children:
                      T.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    241155: function (e, n, t) {
      t(47120);
      var l,
        i,
        u,
        r,
        a = t(392711),
        o = t.n(a),
        s = t(442837),
        d = t(570140),
        c = t(924301),
        E = t(601964),
        _ = t(486527);
      let N = !1,
        f = {},
        S = {},
        T = {},
        Z = (e) => (
          (T[e.guild_scheduled_event.id] = new E.ZP(
            e.guild_scheduled_event.guild,
          )),
          (S[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: _.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class I extends (l = s.ZP.Store) {
        isFetching() {
          return N;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return f[e];
        }
        getCachedGuildByEventId(e) {
          var n;
          return null !== (n = T[e]) && void 0 !== n ? n : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var n;
          return null !== (n = S[e]) && void 0 !== n ? n : void 0;
        }
      }
      (r = "EventDirectoryStore"),
        (u = "displayName") in (i = I)
          ? Object.defineProperty(i, u, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[u] = r),
        (n.Z = new I(d.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            N = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
            let { channelId: n, entries: t } = e;
            N = !1;
            let l = o().sortBy(
                [...t],
                [
                  function (e) {
                    return (0, c.CQ)(e.guild_scheduled_event);
                  },
                ],
              ),
              i = o().map(l, Z);
            f[n] = i;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            N = !1;
          },
        }));
    },
    916069: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var l = t(442837),
        i = t(914010),
        u = t(981631);
      function r() {
        return (0, l.e7)([i.Z], () => i.Z.getGuildId()) === u.I_8;
      }
    },
    951206: function (e, n, t) {
      t.d(n, {
        F: function () {
          return d;
        },
      });
      var l = t(512722),
        i = t.n(l),
        u = t(846027),
        r = t(287734),
        a = t(131951),
        o = t(254238),
        s = t(893387);
      function d(e, n) {
        var t;
        let l = null !== (t = e.sessionId) && void 0 !== t ? t : "";
        (0, o._)(l), (0, o.s6)();
        let d = null != n ? n : e.channelId;
        i()(null != d, "attempted to transfer to unknown channel"),
          e.selfMute !== a.Z.isSelfMute() && u.Z.toggleSelfMute(),
          e.selfDeaf !== a.Z.isSelfDeaf() && u.Z.toggleSelfDeaf(),
          (0, s.Z)(d, "discord_client", l),
          r.default.selectVoiceChannel(d, !1);
      }
    },
    446226: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(442837),
        i = t(314897),
        u = t(979651),
        r = t(258609);
      function a() {
        return (0, l.e7)(
          [i.default, u.Z, r.Z],
          () => {
            var e;
            let n = i.default.getId(),
              t = r.Z.getRemoteSessionId();
            return null !== (e = u.Z.getVoiceStateForSession(n, t)) &&
              void 0 !== e
              ? e
              : void 0;
          },
          [],
        );
      }
    },
    937393: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(442837),
        i = t(553795),
        u = t(823379),
        r = t(981631);
      function a() {
        return (0, l.Wu)([i.Z], () =>
          [
            i.Z.getAccount(null, r.ABu.XBOX),
            i.Z.getAccount(null, r.ABu.PLAYSTATION),
            i.Z.getAccount(null, r.ABu.PLAYSTATION_STAGING),
          ].filter(u.lm),
        );
      }
    },
    721351: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(481060),
        i = t(374129),
        u = t(639351),
        r = t(927923);
      function a(e) {
        return null != e
          ? (0, l.makeIconCompat)(e === r.YE.XBOX ? u.Z : i.Z)
          : l.MobilePhoneControllerIcon;
      }
    },
    420529: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return S;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(399606),
        u = t(481060),
        r = t(231757),
        a = t(397639),
        o = t(19780),
        s = t(979651),
        d = t(951206),
        c = t(446226),
        E = t(937393),
        _ = t(721351),
        N = t(981631),
        f = t(689938);
      function S(e) {
        let n = (0, i.e7)([o.Z], () => o.Z.getChannelId() === e.id),
          S = (0, c.Z)(),
          T = (null == S ? void 0 : S.channelId) === e.id,
          Z = (0, a.V)(e) && !e.isPrivate(),
          I = (0, a.Z)(e),
          g = (!(0, i.e7)([s.Z], () => s.Z.isInChannel(e.id)) && I) || Z,
          A = (0, E.Z)();
        if (!T && 0 === A.length) return null;
        let C = (n) => {
          if (!n.twoWayLink || n.revoked) {
            (0, r.Z)({
              platformType: n.type,
              location: "Console Transfer Item",
            });
            return;
          }
          n.type === N.ABu.XBOX
            ? (0, u.openModalLazy)(async () => {
                let { default: n } = await Promise.all([
                  t.e("17139"),
                  t.e("522"),
                ]).then(t.bind(t, 200623));
                return (t) => (0, l.jsx)(n, { ...t, channel: e });
              })
            : (n.type === N.ABu.PLAYSTATION ||
                n.type === N.ABu.PLAYSTATION_STAGING) &&
              (0, u.openModalLazy)(async () => {
                let { default: i } = await t.e("638").then(t.bind(t, 543974));
                return (t) =>
                  (0, l.jsx)(i, { ...t, platform: n.type, channel: e });
              });
        };
        return (0, l.jsx)(l.Fragment, {
          children: T
            ? (0, l.jsx)(u.MenuItem, {
                label: f.Z.Messages.TRANSFER_VOICE_TO_DEVICE,
                id: "handoff",
                action: () => {
                  (0, d.F)(S);
                },
                icon: (0, _.Z)(void 0),
                disabled: g,
              })
            : A.map((e) =>
                (0, l.jsx)(
                  u.MenuItem,
                  {
                    id: "transfer-".concat(e.type, "-").concat(e.id),
                    label: (function (e, n) {
                      if (e === N.ABu.XBOX)
                        return n
                          ? f.Z.Messages.TRANSFER_VOICE_TO_XBOX
                          : f.Z.Messages.JOIN_ON_XBOX;
                      if (e === N.ABu.PLAYSTATION)
                        return n
                          ? f.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE
                          : f.Z.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
                      if (e === N.ABu.PLAYSTATION_STAGING)
                        return n
                          ? f.Z.Messages
                              .CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE
                          : f.Z.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE;
                    })(e.type, n),
                    action: () => C(e),
                    icon: (0, _.Z)(e.type),
                    disabled: g,
                  },
                  e.id,
                ),
              ),
        });
      }
    },
    658041: function (e, n, t) {
      t.d(n, {
        M: function () {
          return a;
        },
      });
      var l = t(913527),
        i = t.n(l),
        u = t(709054),
        r = t(765305);
      function a(e, n, t, l) {
        let a = i()(),
          o = new Date(e.scheduled_start_time).getTime(),
          s = { start: o - r.VF, end: o };
        if (a.isBetween(s.start, s.end)) {
          if (null != n) {
            let e = i()(n),
              t = e.isBetween(s.start, s.end),
              u = e.isBetween(i()(o).subtract(r.zV, "days"), o);
            return t || (u && !l) ? void 0 : r.X_.EVENT_STARTING_SOON;
          }
          return r.X_.EVENT_STARTING_SOON;
        }
        let d = u.default.extractTimestamp(e.id),
          c = Math.min((null != t ? t : d) + r.Fc, o);
        if (a.isBetween(d, c) && null == n && !l) return r.X_.NEW_EVENT;
      }
    },
    835184: function (e, n, t) {
      var l,
        i = t(442837),
        u = t(570140),
        r = t(314897),
        a = t(924301),
        o = t(658041),
        s = t(765305);
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
      let c = {},
        E = {};
      function _(e) {
        let n = { ...c };
        delete n[e], (c = n);
        let t = { ...E };
        delete t[e], (E = t);
      }
      class N extends (l = i.ZP.PersistedStore) {
        initialize(e) {
          if (null != e) {
            var n, t;
            (c =
              null !== (n = e.upcomingEventDismissals) && void 0 !== n
                ? n
                : {}),
              (E =
                null !== (t = e.upcomingEventSeenTimestamps) && void 0 !== t
                  ? t
                  : {});
          }
        }
        getGuildEventNoticeDismissalTime(e) {
          return c[e];
        }
        getAllEventDismissals() {
          return c;
        }
        getUpcomingNoticeSeenTime(e) {
          return E[e];
        }
        getAllUpcomingNoticeSeenTimes() {
          return E;
        }
        getState() {
          return { upcomingEventDismissals: c, upcomingEventSeenTimestamps: E };
        }
      }
      d(N, "displayName", "UpcomingEventNoticesStore"),
        d(N, "persistKey", "UpcomingEventNotices"),
        (n.Z = new N(u.Z, {
          UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
            let { eventId: n } = e,
              t = { ...c };
            (t[n] = Date.now()), (c = t);
          },
          GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
            let { guildScheduledEvent: n } = e;
            (n.status === s.p1.CANCELED || n.status === s.p1.COMPLETED) &&
              _(n.id);
          },
          GUILD_SCHEDULED_EVENT_DELETE: function (e) {
            let { guildScheduledEvent: n } = e;
            _(n.id);
          },
          GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
            let { userId: n, guildEventId: t } = e;
            if (n !== r.default.getId()) return;
            let l = a.ZP.getGuildScheduledEvent(t);
            if (null == l || l.status !== s.p1.SCHEDULED || null != c[t])
              return;
            let i = E[t];
            if ((0, o.M)(l, void 0, i, !1) === s.X_.NEW_EVENT) {
              let e = { ...c };
              (e[t] = Date.now()), (c = e);
            }
          },
          UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
            let { guildEventId: n } = e,
              t = { ...E };
            (t[n] = Date.now()), (E = t);
          },
        }));
    },
    554747: function (e, n, t) {
      t.d(n, {
        Vm: function () {
          return h;
        },
        ZP: function () {
          return A;
        },
        eF: function () {
          return L;
        },
        gM: function () {
          return O;
        },
        k5: function () {
          return v;
        },
        qY: function () {
          return C;
        },
        sz: function () {
          return m;
        },
        u1: function () {
          return M;
        },
      }),
        t(47120),
        t(724458);
      var l = t(470079),
        i = t(442837),
        u = t(241155),
        r = t(592125),
        a = t(984933),
        o = t(430824),
        s = t(496675),
        d = t(70956),
        c = t(823379),
        E = t(924301),
        _ = t(658041),
        N = t(835184),
        f = t(79874),
        S = t(854698),
        T = t(765305),
        Z = t(981631);
      let I = [],
        g = 15 * d.Z.Millis.MINUTE;
      function A(e, n) {
        return (0, i.Wu)(
          [o.Z, u.Z, E.ZP, s.Z, r.Z, a.ZP],
          () => {
            let t = o.Z.getGuild(e);
            if (null == t) return I;
            if (t.hasFeature(Z.oNc.HUB)) {
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
                    t = E.ZP.getGuildScheduledEvent(n);
                  return null != t
                    ? t
                    : u.Z.getCachedGuildScheduledEventById(n);
                })
                .filter(c.lm);
            }
            return E.ZP.getGuildScheduledEventsByIndex(
              null != n ? n : E.bN.GUILD_EVENT_UPCOMING(t.id),
            ).filter((e) => {
              let n = e.channel_id;
              if (null == n) return !0;
              let t = r.Z.getChannel(n);
              return s.Z.can(Z.Plq.VIEW_CHANNEL, t);
            });
          },
          [n, e],
        );
      }
      function C(e) {
        return (0, i.e7)(
          [E.ZP, r.Z, s.Z],
          () => {
            let n = r.Z.getChannel(e);
            if (
              !s.Z.can(Z.Plq.VIEW_CHANNEL, n) ||
              null == (null == n ? void 0 : n.guild_id)
            )
              return null;
            let t = E.ZP.getGuildScheduledEventsByIndex(
              E.bN.CHANNEL_EVENT_ACTIVE(e),
            );
            return t.length > 0 ? t[0] : null;
          },
          [e],
        );
      }
      function O(e) {
        let n = (0, i.Wu)(
          [E.ZP],
          () => E.ZP.getGuildScheduledEventsForGuild(e),
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
      function h(e) {
        var n, t;
        let l =
            ((n = e),
            (0, i.Wu)(
              [E.ZP, r.Z, s.Z],
              () =>
                E.ZP.getGuildScheduledEventsByIndex(
                  E.bN.GUILD_EVENT_UPCOMING(n),
                ).filter((e) => {
                  if (
                    e.entity_type === T.WX.NONE ||
                    e.status !== T.p1.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let n = r.Z.getChannel(e.channel_id);
                  return s.Z.can(Z.Plq.VIEW_CHANNEL, n);
                }),
              [n],
            )),
          u = (0, i.cj)([N.Z], () => N.Z.getAllEventDismissals()),
          a = (0, i.cj)([N.Z], () => N.Z.getAllUpcomingNoticeSeenTimes()),
          d = (0, i.cj)(
            [E.ZP],
            () =>
              null == l
                ? {}
                : l.reduce((e, n) => {
                    let t = (0, S.DK)(n);
                    return {
                      ...e,
                      [n.id]: E.ZP.isInterestedInEventRecurrence(n.id, t),
                    };
                  }, {}),
            [l],
          ),
          c = (0, i.e7)([o.Z], () => o.Z.getGuild(e)),
          f =
            null != c &&
            !c.hasFeature(Z.oNc.COMMUNITY) &&
            c.hasFeature(Z.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != l && null != d && f)
          for (let e = 0; e < l.length; e++) {
            let n = l[e],
              i = u[n.id],
              r = a[n.id],
              o = null !== (t = d[n.id]) && void 0 !== t && t,
              s = (0, _.M)(n, i, r, o);
            if (null != s) return { upcomingEvent: n, noticeType: s };
          }
      }
      function v(e) {
        return (0, i.e7)(
          [E.ZP, r.Z, s.Z],
          () =>
            E.ZP.getGuildScheduledEventsByIndex(
              E.bN.GUILD_EVENT_ACTIVE(e),
            ).find((e) => {
              if (e.entity_type === T.WX.NONE || !(0, E.xt)(e)) return !1;
              if (null == e.channel_id) return !0;
              let n = r.Z.getChannel(e.channel_id);
              return s.Z.can(Z.Plq.VIEW_CHANNEL, n);
            }),
          [e],
        );
      }
      function M(e) {
        return (0, i.e7)(
          [E.ZP],
          () =>
            E.ZP.getGuildScheduledEventsByIndex(E.bN.CHANNEL_EVENT_UPCOMING(e)),
          [e],
        );
      }
      function L(e) {
        return (0, i.e7)(
          [r.Z, E.ZP],
          () => {
            let n = E.ZP.getGuildScheduledEventsByIndex(
              E.bN.GUILD_EVENT_ACTIVE(e),
            ).find((e) => null != r.Z.getChannel(e.channel_id));
            return r.Z.getChannel(null == n ? void 0 : n.channel_id);
          },
          [e],
        );
      }
      function m(e) {
        let [n, t] = l.useState(() => Date.now());
        l.useEffect(() => {
          let e = setInterval(() => {
            t(Date.now());
          }, g);
          return () => clearInterval(e);
        }, []);
        let u = (0, i.e7)(
          [E.ZP],
          () =>
            null == e
              ? []
              : E.ZP.getGuildScheduledEventsByIndex(
                  E.bN.CHANNEL_EVENT_UPCOMING(e),
                ),
          [e, n],
        );
        return l.useMemo(
          () =>
            u.filter((e) => {
              let { startTime: n, endTime: t } = (0, f.Kq)(e),
                { withinStartWindow: l, diffMinutes: i } = (0, S.ub)(
                  n.toISOString(),
                  null == t ? void 0 : t.toISOString(),
                );
              return e.status !== T.p1.ACTIVE && l && i < 15;
            }),
          [u],
        );
      }
    },
    423589: function (e, n, t) {
      t.d(n, {
        Mn: function () {
          return S;
        },
        OD: function () {
          return f;
        },
        W9: function () {
          return _;
        },
      }),
        t(47120),
        t(789020);
      var l = t(442837),
        i = t(798140),
        u = t(9156),
        r = t(630388),
        a = t(709054),
        o = t(312400),
        s = t(981631),
        d = t(969943),
        c = t(526761),
        E = t(689938);
      function _() {
        return [
          {
            label: E.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: d.Oe.MINUTES_15,
          },
          { label: E.Z.Messages.MUTE_DURATION_1_HOUR, value: d.Oe.HOURS_1 },
          { label: E.Z.Messages.MUTE_DURATION_3_HOURS, value: d.Oe.HOURS_3 },
          { label: E.Z.Messages.MUTE_DURATION_8_HOURS, value: d.Oe.HOURS_8 },
          { label: E.Z.Messages.MUTE_DURATION_24_HOURS, value: d.Oe.HOURS_24 },
          { label: E.Z.Messages.MUTE_DURATION_ALWAYS, value: d.Oe.ALWAYS },
        ];
      }
      let N = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function f(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
        return a.default.keys(e).filter((t) => {
          var l, u;
          let a = e[t].message_notifications !== s.bL.NULL,
            o =
              r.yE(
                null !== (l = e[t].flags) && void 0 !== l ? l : 0,
                c.ic.UNREADS_ALL_MESSAGES,
              ) ||
              r.yE(
                null !== (u = e[t].flags) && void 0 !== u ? u : 0,
                c.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!n.ignoreUnreadSetting && o) ||
            (!n.ignoreNotificationSetting && a) ||
            (!n.ignoreMute && (0, i.m$)(e[t]))
          );
        });
      }
      function S(e) {
        let n = (0, l.e7)([u.ZP], () => u.ZP.useNewNotifications);
        return (
          o.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .enabled && n
        );
      }
    },
    113449: function (e, n, t) {
      t.d(n, {
        Q4: function () {
          return u;
        },
        YF: function () {
          return r;
        },
        pq: function () {
          return a;
        },
      });
      var l = t(630388),
        i = t(526761);
      function u(e, n) {
        var t;
        return l.pj(
          ((t = e),
          l.M1(t, i.vc.UNREADS_ALL_MESSAGES, i.vc.UNREADS_ONLY_MENTIONS)),
          n,
        );
      }
      let r = (e) =>
        l.M1(e, i.ic.UNREADS_ALL_MESSAGES, i.ic.UNREADS_ONLY_MENTIONS);
      function a(e, n) {
        return l.pj(r(e), n);
      }
    },
    397639: function (e, n, t) {
      t.d(n, {
        V: function () {
          return s;
        },
        Z: function () {
          return d;
        },
      });
      var l = t(442837),
        i = t(430824),
        u = t(496675),
        r = t(979651),
        a = t(934415),
        o = t(231338);
      function s(e) {
        return (0, l.e7)([u.Z], () => null == e || !u.Z.can(o.Pl.CONNECT, e), [
          e,
        ]);
      }
      function d(e) {
        return (0, l.e7)([r.Z, i.Z], () => (0, a.rY)(e, r.Z, i.Z));
      }
    },
  },
]);
//# sourceMappingURL=d62767f0381404a10fad.js.map
