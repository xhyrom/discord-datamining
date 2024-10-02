"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91625"],
  {
    177475: function (e) {
      e.exports = "/assets/a64ea373b47e9a224206.svg";
    },
    339340: function (e, n, t) {
      t.r(n),
        t.d(n, {
          VOICE_CHANNEL_STATUS_MODAL_KEY: function () {
            return T;
          },
          default: function () {
            return h;
          },
        }),
        t(47120),
        t(757143);
      var l = t(735250),
        i = t(470079),
        u = t(399606),
        r = t(343817),
        a = t(481060),
        d = t(787014),
        o = t(12498),
        s = t(541716),
        c = t(752305),
        E = t(893718),
        _ = t(600164),
        f = t(19780),
        N = t(626135),
        Z = t(981631),
        I = t(689938),
        C = t(897232);
      let T = "VoiceChannelStatusModal";
      function h(e) {
        let { channel: n, transitionState: t, onClose: h } = e,
          g = (0, u.e7)([o.Z], () => o.Z.getChannelStatus(n)),
          A = (0, u.e7)([f.Z], () => f.Z.getMediaSessionId()),
          [S, v] = i.useState(null != g ? g : ""),
          [O, m] = i.useState(!1),
          [L, M] = i.useState(null),
          P = S.length > 500;
        i.useEffect(() => {
          N.default.track(Z.rMx.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: n.guild_id,
          });
        }, [n.guild_id]);
        let p = (e) => {
            M(new r.Hx(e, e.status).getAnyErrorMessage());
          },
          D = async (e) => {
            S === g && h(), null == e || e.preventDefault(), M(null), m(!0);
            let t = S.length,
              l = S.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
            try {
              let e = await d.ZP.updateVoiceChannelStatus(n.id, S);
              204 === e.status
                ? (N.default.track(Z.rMx.VOICE_CHANNEL_TOPIC_SET, {
                    guild_id: n.guild_id,
                    channel_id: n.id,
                    media_session_id: A,
                    raw_length: t,
                    text_length: l,
                  }),
                  h())
                : p(e);
            } catch (e) {
              p(e);
            }
            m(!1);
          },
          [V, y] = i.useState((0, c.JM)(S)),
          G = async () => (
            !P && !O && (await D()),
            Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
          );
        return (0, l.jsx)("form", {
          onSubmit: D,
          className: C.form,
          children: (0, l.jsxs)(a.ModalRoot, {
            transitionState: t,
            size: a.ModalSize.SMALL,
            children: [
              (0, l.jsxs)(a.ModalContent, {
                children: [
                  (0, l.jsxs)(a.ModalHeader, {
                    direction: _.Z.Direction.VERTICAL,
                    className: C.modalHeader,
                    separator: !1,
                    children: [
                      (0, l.jsx)(a.ModalCloseButton, {
                        className: C.closeButton,
                        onClick: h,
                      }),
                      (0, l.jsx)("div", { className: C.headerImage }),
                      (0, l.jsx)(a.FormTitle, {
                        tag: "h1",
                        className: C.title,
                        children: I.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE,
                      }),
                      (0, l.jsx)(a.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children:
                          I.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE,
                      }),
                    ],
                  }),
                  (0, l.jsxs)(a.FormSection, {
                    className: C.inputSection,
                    title: I.Z.Messages.VOICE_CHANNEL_STATUS,
                    children: [
                      (0, l.jsx)(E.Z, {
                        innerClassName: C.textArea,
                        textValue: S,
                        richValue: V,
                        placeholder:
                          I.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format(
                            { channelName: n.name },
                          ),
                        focused: !0,
                        channel: n,
                        onChange: (e, n, t) => {
                          v(n), y(t);
                        },
                        onSubmit: G,
                        type: s.I.VOICE_CHANNEL_STATUS,
                        canMentionRoles: !1,
                        canMentionChannels: !1,
                        allowNewLines: !1,
                        parentModalKey: T,
                        maxCharacterCount: 500,
                        showRemainingCharsAfterCount: 250,
                        emojiPickerCloseOnModalOuterClick: !0,
                      }),
                      null != L
                        ? (0, l.jsx)(a.FormErrorBlock, {
                            className: C.error,
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
                    onClick: h,
                    children: I.Z.Messages.CANCEL,
                  }),
                  (0, l.jsx)(a.Button, {
                    onClick: D,
                    submitting: O,
                    className: C.button,
                    disabled: P,
                    children:
                      I.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    109764: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(852229),
        u = t(399606),
        r = t(481060),
        a = t(228392),
        d = t(592125),
        o = t(934415),
        s = t(981631),
        c = t(689938);
      function E(e, n, t) {
        let E = (0, u.e7)([d.Z], () => d.Z.getChannel(e.parent_id));
        return (0, l.jsx)(r.MenuItem, {
          id: "channel-copy-link",
          label: c.Z.Messages.COPY_LINK,
          action: () => {
            e.isForumPost() &&
              (0, a.B)({
                postId: e.id,
                location: { section: s.jXE.CONTEXT_MENU },
              }),
              (0, i.J)((0, o.EO)(e, E, n, t));
          },
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
        d = t.n(a),
        o = t(442837),
        s = t(570140),
        c = t(924301),
        E = t(601964),
        _ = t(486527);
      let f = !1,
        N = {},
        Z = {},
        I = {},
        C = (e) => (
          (I[e.guild_scheduled_event.id] = new E.ZP(
            e.guild_scheduled_event.guild,
          )),
          (Z[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: _.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class T extends (l = o.ZP.Store) {
        isFetching() {
          return f;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return N[e];
        }
        getCachedGuildByEventId(e) {
          var n;
          return null !== (n = I[e]) && void 0 !== n ? n : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var n;
          return null !== (n = Z[e]) && void 0 !== n ? n : void 0;
        }
      }
      (r = "EventDirectoryStore"),
        (u = "displayName") in (i = T)
          ? Object.defineProperty(i, u, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[u] = r),
        (n.Z = new T(s.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            f = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
            let { channelId: n, entries: t } = e;
            f = !1;
            let l = d().sortBy(
                [...t],
                [
                  function (e) {
                    return (0, c.CQ)(e.guild_scheduled_event);
                  },
                ],
              ),
              i = d().map(l, C);
            N[n] = i;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            f = !1;
          },
        }));
    },
    593214: function (e, n, t) {
      t.d(n, {
        Mt: function () {
          return N;
        },
        li: function () {
          return E;
        },
        s4: function () {
          return _;
        },
        up: function () {
          return Z;
        },
        zv: function () {
          return f;
        },
      }),
        t(47120),
        t(653041);
      var l = t(470079),
        i = t(106351),
        u = t(442837);
      t(592125);
      var r = t(984933),
        a = t(914010);
      t(709054);
      var d = t(853856),
        o = t(362658),
        s = t(434065),
        c = t(981631);
      function E(e) {
        let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, o.z)(
            "useCanFavoriteChannel",
          ),
          l = (0, u.e7)([d.Z], () => d.Z.isFavorite(e.id)),
          i = e.isDM() || e.isThread();
        return n && !__OVERLAY__ && !l && (!i || t);
      }
      function _(e) {
        return (0, u.e7)([d.Z], () => d.Z.getFavorite(e));
      }
      function f() {
        return (0, u.e7)([r.ZP], () => r.ZP.getChannels(c.I_8))[
          i.d.GUILD_CATEGORY
        ].map((e) => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function N() {
        return (0, u.e7)([a.Z], () => a.Z.getGuildId()) === c.I_8;
      }
      function Z() {
        let { isFavoritesPerk: e } = (0, o.z)("useFavoriteAdded"),
          n = (0, s.r)(),
          t = l.useCallback(() => {
            e && n.notifyFavoriteAdded();
          }, [n, e]),
          i = l.useCallback(() => {
            e && n.clearFavoriteAdded();
          }, [n, e]);
        return {
          favoriteAdded: n.favoriteAdded,
          notifyFavoriteAdded: t,
          clearFavoriteAdded: i,
        };
      }
    },
    434065: function (e, n, t) {
      t.d(n, {
        r: function () {
          return u;
        },
      });
      var l = t(652874),
        i = t(731965);
      let u = (0, l.Z)((e) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, i.j)(() => e({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, i.j)(() => e({ favoriteAdded: !1 })),
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
          return s;
        },
      });
      var l = t(512722),
        i = t.n(l),
        u = t(846027),
        r = t(287734),
        a = t(131951),
        d = t(254238),
        o = t(893387);
      function s(e, n) {
        var t;
        let l = null !== (t = e.sessionId) && void 0 !== t ? t : "";
        (0, d._)(l), (0, d.s6)();
        let s = null != n ? n : e.channelId;
        i()(null != s, "attempted to transfer to unknown channel"),
          e.selfMute !== a.Z.isSelfMute() && u.Z.toggleSelfMute(),
          e.selfDeaf !== a.Z.isSelfDeaf() && u.Z.toggleSelfDeaf(),
          (0, o.Z)(s, "discord_client", l),
          r.default.selectVoiceChannel(s, !1);
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
          return Z;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(399606),
        u = t(481060),
        r = t(231757),
        a = t(397639),
        d = t(19780),
        o = t(979651),
        s = t(951206),
        c = t(446226),
        E = t(937393),
        _ = t(721351),
        f = t(981631),
        N = t(689938);
      function Z(e) {
        let n = (0, i.e7)([d.Z], () => d.Z.getChannelId() === e.id),
          Z = (0, c.Z)(),
          I = (null == Z ? void 0 : Z.channelId) === e.id,
          C = (0, a.V)(e) && !e.isPrivate(),
          T = (0, a.Z)(e),
          h = (!(0, i.e7)([o.Z], () => o.Z.isInChannel(e.id)) && T) || C,
          g = (0, E.Z)();
        if (!I && 0 === g.length) return null;
        let A = (n) => {
          if (!n.twoWayLink || n.revoked) {
            (0, r.Z)({
              platformType: n.type,
              location: "Console Transfer Item",
            });
            return;
          }
          n.type === f.ABu.XBOX
            ? (0, u.openModalLazy)(async () => {
                let { default: n } = await Promise.all([
                  t.e("17139"),
                  t.e("522"),
                ]).then(t.bind(t, 200623));
                return (t) => (0, l.jsx)(n, { ...t, channel: e });
              })
            : (n.type === f.ABu.PLAYSTATION ||
                n.type === f.ABu.PLAYSTATION_STAGING) &&
              (0, u.openModalLazy)(async () => {
                let { default: i } = await t.e("638").then(t.bind(t, 543974));
                return (t) =>
                  (0, l.jsx)(i, { ...t, platform: n.type, channel: e });
              });
        };
        return (0, l.jsx)(l.Fragment, {
          children: I
            ? (0, l.jsx)(u.MenuItem, {
                label: N.Z.Messages.TRANSFER_VOICE_TO_DEVICE,
                id: "handoff",
                action: () => {
                  (0, s.F)(Z);
                },
                icon: (0, _.Z)(void 0),
                disabled: h,
              })
            : g.map((e) =>
                (0, l.jsx)(
                  u.MenuItem,
                  {
                    id: "transfer-".concat(e.type, "-").concat(e.id),
                    label: (function (e, n) {
                      if (e === f.ABu.XBOX)
                        return n
                          ? N.Z.Messages.TRANSFER_VOICE_TO_XBOX
                          : N.Z.Messages.JOIN_ON_XBOX;
                      if (e === f.ABu.PLAYSTATION)
                        return n
                          ? N.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE
                          : N.Z.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
                      if (e === f.ABu.PLAYSTATION_STAGING)
                        return n
                          ? N.Z.Messages
                              .CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE
                          : N.Z.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE;
                    })(e.type, n),
                    action: () => A(e),
                    icon: (0, _.Z)(e.type),
                    disabled: h,
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
          d = new Date(e.scheduled_start_time).getTime(),
          o = { start: d - r.VF, end: d };
        if (a.isBetween(o.start, o.end)) {
          if (null != n) {
            let e = i()(n),
              t = e.isBetween(o.start, o.end),
              u = e.isBetween(i()(d).subtract(r.zV, "days"), d);
            return t || (u && !l) ? void 0 : r.X_.EVENT_STARTING_SOON;
          }
          return r.X_.EVENT_STARTING_SOON;
        }
        let s = u.default.extractTimestamp(e.id),
          c = Math.min((null != t ? t : s) + r.Fc, d);
        if (a.isBetween(s, c) && null == n && !l) return r.X_.NEW_EVENT;
      }
    },
    835184: function (e, n, t) {
      var l,
        i = t(442837),
        u = t(570140),
        r = t(314897),
        a = t(924301),
        d = t(658041),
        o = t(765305);
      function s(e, n, t) {
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
      class f extends (l = i.ZP.PersistedStore) {
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
      s(f, "displayName", "UpcomingEventNoticesStore"),
        s(f, "persistKey", "UpcomingEventNotices"),
        (n.Z = new f(u.Z, {
          UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
            let { eventId: n } = e,
              t = { ...c };
            (t[n] = Date.now()), (c = t);
          },
          GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
            let { guildScheduledEvent: n } = e;
            (n.status === o.p1.CANCELED || n.status === o.p1.COMPLETED) &&
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
            if (null == l || l.status !== o.p1.SCHEDULED || null != c[t])
              return;
            let i = E[t];
            if ((0, d.M)(l, void 0, i, !1) === o.X_.NEW_EVENT) {
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
          return v;
        },
        ZP: function () {
          return g;
        },
        eF: function () {
          return L;
        },
        gM: function () {
          return S;
        },
        k5: function () {
          return O;
        },
        qY: function () {
          return A;
        },
        sz: function () {
          return M;
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
        r = t(592125),
        a = t(984933),
        d = t(430824),
        o = t(496675),
        s = t(70956),
        c = t(823379),
        E = t(924301),
        _ = t(658041),
        f = t(835184),
        N = t(79874),
        Z = t(854698),
        I = t(765305),
        C = t(981631);
      let T = [],
        h = 15 * s.Z.Millis.MINUTE;
      function g(e, n) {
        return (0, i.Wu)(
          [d.Z, u.Z, E.ZP, o.Z, r.Z, a.ZP],
          () => {
            let t = d.Z.getGuild(e);
            if (null == t) return T;
            if (t.hasFeature(C.oNc.HUB)) {
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
              return o.Z.can(C.Plq.VIEW_CHANNEL, t);
            });
          },
          [n, e],
        );
      }
      function A(e) {
        return (0, i.e7)(
          [E.ZP, r.Z, o.Z],
          () => {
            let n = r.Z.getChannel(e);
            if (
              !o.Z.can(C.Plq.VIEW_CHANNEL, n) ||
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
      function S(e) {
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
      function v(e) {
        var n, t;
        let l =
            ((n = e),
            (0, i.Wu)(
              [E.ZP, r.Z, o.Z],
              () =>
                E.ZP.getGuildScheduledEventsByIndex(
                  E.bN.GUILD_EVENT_UPCOMING(n),
                ).filter((e) => {
                  if (
                    e.entity_type === I.WX.NONE ||
                    e.status !== I.p1.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let n = r.Z.getChannel(e.channel_id);
                  return o.Z.can(C.Plq.VIEW_CHANNEL, n);
                }),
              [n],
            )),
          u = (0, i.cj)([f.Z], () => f.Z.getAllEventDismissals()),
          a = (0, i.cj)([f.Z], () => f.Z.getAllUpcomingNoticeSeenTimes()),
          s = (0, i.cj)(
            [E.ZP],
            () =>
              null == l
                ? {}
                : l.reduce((e, n) => {
                    let t = (0, Z.DK)(n);
                    return {
                      ...e,
                      [n.id]: E.ZP.isInterestedInEventRecurrence(n.id, t),
                    };
                  }, {}),
            [l],
          ),
          c = (0, i.e7)([d.Z], () => d.Z.getGuild(e)),
          N =
            null != c &&
            !c.hasFeature(C.oNc.COMMUNITY) &&
            c.hasFeature(C.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != l && null != s && N)
          for (let e = 0; e < l.length; e++) {
            let n = l[e],
              i = u[n.id],
              r = a[n.id],
              d = null !== (t = s[n.id]) && void 0 !== t && t,
              o = (0, _.M)(n, i, r, d);
            if (null != o) return { upcomingEvent: n, noticeType: o };
          }
      }
      function O(e) {
        return (0, i.e7)(
          [E.ZP, r.Z, o.Z],
          () =>
            E.ZP.getGuildScheduledEventsByIndex(
              E.bN.GUILD_EVENT_ACTIVE(e),
            ).find((e) => {
              if (e.entity_type === I.WX.NONE || !(0, E.xt)(e)) return !1;
              if (null == e.channel_id) return !0;
              let n = r.Z.getChannel(e.channel_id);
              return o.Z.can(C.Plq.VIEW_CHANNEL, n);
            }),
          [e],
        );
      }
      function m(e) {
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
      function M(e) {
        let [n, t] = l.useState(() => Date.now());
        l.useEffect(() => {
          let e = setInterval(() => {
            t(Date.now());
          }, h);
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
              let { startTime: n, endTime: t } = (0, N.Kq)(e),
                { withinStartWindow: l, diffMinutes: i } = (0, Z.ub)(
                  n.toISOString(),
                  null == t ? void 0 : t.toISOString(),
                );
              return e.status !== I.p1.ACTIVE && l && i < 15;
            }),
          [u],
        );
      }
    },
    397639: function (e, n, t) {
      t.d(n, {
        V: function () {
          return o;
        },
        Z: function () {
          return s;
        },
      });
      var l = t(442837),
        i = t(430824),
        u = t(496675),
        r = t(979651),
        a = t(934415),
        d = t(231338);
      function o(e) {
        return (0, l.e7)([u.Z], () => null == e || !u.Z.can(d.Pl.CONNECT, e), [
          e,
        ]);
      }
      function s(e) {
        return (0, l.e7)([r.Z, i.Z], () => (0, a.rY)(e, r.Z, i.Z));
      }
    },
  },
]);
//# sourceMappingURL=188945b4fd7764dfb731.js.map
