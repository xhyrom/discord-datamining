"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90508"],
  {
    456269: function (e, n, t) {
      t.d(n, {
        AJ: function () {
          return $;
        },
        Bs: function () {
          return X;
        },
        ES: function () {
          return W;
        },
        Eg: function () {
          return x;
        },
        IN: function () {
          return J;
        },
        J$: function () {
          return er;
        },
        MC: function () {
          return ee;
        },
        O2: function () {
          return Y;
        },
        Q: function () {
          return en;
        },
        Vm: function () {
          return eo;
        },
        W3: function () {
          return H;
        },
        XZ: function () {
          return es;
        },
        eV: function () {
          return z;
        },
        eZ: function () {
          return ec;
        },
        iM: function () {
          return B;
        },
        jR: function () {
          return ed;
        },
        kF: function () {
          return q;
        },
        kn: function () {
          return ea;
        },
        ku: function () {
          return ef;
        },
        mX: function () {
          return et;
        },
        n2: function () {
          return eg;
        },
        nP: function () {
          return K;
        },
        ql: function () {
          return ei;
        },
        r_: function () {
          return eu;
        },
        vP: function () {
          return em;
        },
        xw: function () {
          return V;
        },
      }),
        t(47120),
        t(724458);
      var u = t(470079),
        l = t(392711),
        r = t.n(l),
        i = t(683860),
        o = t(442837),
        a = t(570140),
        d = t(45114),
        c = t(339085),
        s = t(987170),
        f = t(905405),
        g = t(937889),
        m = t(739566),
        Z = t(601070),
        E = t(344185),
        v = t(723774),
        h = t(144140),
        T = t(91159),
        _ = t(592125),
        S = t(720202),
        I = t(430824),
        M = t(496675),
        p = t(306680),
        C = t(699516),
        N = t(111583),
        O = t(594174),
        P = t(823379),
        A = t(709054),
        R = t(883429),
        w = t(238349),
        b = t(368844),
        U = t(660189),
        y = t(581036),
        L = t(208970),
        k = t(882252),
        j = t(710352),
        D = t(981631),
        F = t(176505),
        G = t(124368);
      let Y = (0, s.Z)({
        id: "2023-01_forums_non_community",
        label: "Forum non-community",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function x(e) {
        return Y.getCurrentConfig({ guildId: e, location: "553713_2" }).enabled;
      }
      function H(e) {
        return (function (e) {
          let n = (0, o.e7)([I.Z], () => I.Z.getGuild(e));
          return (
            Y.useExperiment(
              { guildId: e, location: "553713_1" },
              { autoTrackExposure: !1 },
            ).enabled ||
            !!(
              (null == n ? void 0 : n.hasFeature(D.oNc.COMMUNITY)) ||
              (null == n ? void 0 : n.hasFeature(D.oNc.INTERNAL_EMPLOYEE_ONLY))
            )
          );
        })(e);
      }
      function W(e, n, t) {
        let l = (0, o.e7)([E.Z], () => E.Z.hasLoaded(e.guild_id));
        u.useEffect(() => {
          if (!l) return;
          let u = w.Z.getThreadIds(e.id, n, t),
            r = y.Z.getThreadIdsMissingCounts(e.guild_id, u)
              .filter((e) => (0, k.nU)(e, [p.ZP]))
              .slice(0, 180)
              .map((e) => ({
                threadId: e,
                ackMessageId: p.ZP.getTrackedAckMessageId(e),
              }));
          r.length > 0 &&
            a.Z.dispatch({
              type: "REQUEST_FORUM_UNREADS",
              guildId: e.guild_id,
              channelId: e.id,
              threads: r,
            });
        }, [e.id, e.guild_id, l, t, n]);
      }
      function q(e) {
        return (0, o.e7)([E.Z, _.Z], () => {
          let n = r()(E.Z.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => {
              var n;
              return (
                (null === (n = _.Z.getChannel(e)) || void 0 === n
                  ? void 0
                  : n.hasFlag(F.zZ.PINNED)) === !0
              );
            })
            .head();
          return _.Z.getChannel(n);
        });
      }
      let Q = [];
      function z(e) {
        let n = (function (e) {
          let n = null == e ? void 0 : e.parent_id;
          return (0, o.cj)(
            [_.Z],
            () => {
              var e;
              let t = _.Z.getChannel(n);
              return (
                null !== (e = null == t ? void 0 : t.availableTags) &&
                void 0 !== e
                  ? e
                  : []
              ).reduce((e, n) => ({ ...e, [n.id]: n }), {});
            },
            [n],
          );
        })(e);
        return u.useMemo(() => {
          var t, u, l;
          return null !==
            (l =
              null == e
                ? void 0
                : null === (u = e.appliedTags) || void 0 === u
                  ? void 0
                  : null === (t = u.map((e) => n[e])) || void 0 === t
                    ? void 0
                    : t.filter(P.lm)) && void 0 !== l
            ? l
            : Q;
        }, [n, null == e ? void 0 : e.appliedTags]);
      }
      function B(e, n) {
        let t = (0, o.Wu)([O.default], () =>
          n.map((e) => O.default.getUser(e)).filter(P.lm),
        );
        return (
          u.useEffect(() => {
            t.forEach((n) => {
              S.Z.requestMember(e.guild_id, n.id);
            });
          }, []),
          t
        );
      }
      function V(e, n) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : j.R6.DURATION_AGO,
          l = u.useMemo(() => A.default.extractTimestamp(e.id), [e.id]),
          r = (0, T.Ok)(e),
          o = u.useMemo(() => (0, k.Uw)(n, t), [n, t]);
        return u.useMemo(
          () => (n === i.z.CREATION_DATE ? (0, T.Ye)(l, o) : (0, T.Ye)(r, o)),
          [r, n, l, o],
        );
      }
      function J(e) {
        return u.useMemo(() => {
          var n;
          return r().maxBy(
            null !== (n = null == e ? void 0 : e.reactions) && void 0 !== n
              ? n
              : [],
            (e) => Math.max(e.burst_count, e.count),
          );
        }, [null == e ? void 0 : e.reactions]);
      }
      function X(e) {
        let n = null == e ? void 0 : e.defaultReactionEmoji,
          t = (0, o.e7)([c.ZP], () =>
            (null == n ? void 0 : n.emojiId) != null
              ? c.ZP.getUsableCustomEmojiById(n.emojiId)
              : null,
          );
        return null == n
          ? null
          : null != n.emojiId && null != t
            ? { id: n.emojiId, name: t.name, animated: t.animated }
            : null != n.emojiName
              ? { id: n.emojiId, name: n.emojiName, animated: !1 }
              : null;
      }
      function K(e) {
        let n = (0, o.e7)([h.Z], () => {
            var n;
            return null !== (n = h.Z.getCount(e.id)) && void 0 !== n ? n : 0;
          }),
          t = (0, v.lE)(n, e.id),
          u = (0, o.e7)([p.ZP], () => (0, k.nU)(e.id, [p.ZP])),
          l = (0, o.e7)([y.Z], () => {
            if (!u) return null;
            let t = y.Z.getCount(e.id);
            if (null == t || !(t > 0)) return "1+";
            {
              let e = Math.min(t, n);
              return e >= G.dg ? "".concat(G.dg, "+") : e;
            }
          });
        return {
          messageCount: n,
          isMaxMessageCount: null != n && "".concat(n) !== t,
          messageCountText: t,
          unreadCount: l,
        };
      }
      function $(e) {
        var n;
        let t = (0, o.e7)([O.default], () => O.default.getUser(e.ownerId)),
          l = (0, o.e7)([U.Z], () => {
            var n;
            return null === (n = U.Z.getMessage(e.id)) || void 0 === n
              ? void 0
              : n.firstMessage;
          }),
          r = (0, m.Sw)(
            null !== (n = null == l ? void 0 : l.author) && void 0 !== n
              ? n
              : t,
            e,
          );
        return (
          u.useEffect(() => {
            null != e.ownerId && S.Z.requestMember(e.guild_id, e.ownerId);
          }, [e.guild_id, e.ownerId]),
          { user: t, author: r }
        );
      }
      function ee(e) {
        var n, t;
        let u = O.default.getUser(e.ownerId),
          l =
            null === (n = U.Z.getMessage(e.id)) || void 0 === n
              ? void 0
              : n.firstMessage,
          r = (0, m.ij)(
            null !== (t = null == l ? void 0 : l.author) && void 0 !== t
              ? t
              : u,
            e,
          );
        return { user: u, author: r };
      }
      function en(e) {
        return (0, o.Wu)([N.Z, O.default, C.Z], () => {
          let n = O.default.getCurrentUser();
          return r()(N.Z.getTypingUsers(e.id))
            .keys()
            .filter((e) => e !== (null == n ? void 0 : n.id))
            .reject((e) => C.Z.isBlocked(e))
            .map((e) => O.default.getUser(e))
            .filter(P.lm)
            .map((e) => e.id)
            .value();
        });
      }
      function et(e) {
        let {
            firstMessage: n,
            formatInline: t = !0,
            noStyleAndInteraction: l = !0,
          } = e,
          r = (0, f.p)(),
          { hasSpoilerEmbeds: i, content: o } = u.useMemo(
            () =>
              (null == n ? void 0 : n.content) != null && "" !== n.content
                ? (0, g.ZP)(n, {
                    formatInline: t,
                    noStyleAndInteraction: l,
                    allowHeading: !0,
                    allowList: !0,
                    shouldFilterKeywords: r,
                  })
                : { hasSpoilerEmbeds: !1, content: null },
            [n, t, l, r],
          ),
          a = (0, b.eL)(n, i),
          d = (0, b.vg)(n, i);
        return {
          hasSpoilerEmbeds: i,
          content: o,
          firstMedia: a,
          firstMediaIsEmbed: d,
        };
      }
      function eu(e) {
        return (0, o.e7)([M.Z], () => M.Z.can(D.Plq.MANAGE_CHANNELS, e));
      }
      let el = { isNew: !1, hasUnreads: !1 };
      function er(e) {
        return (0, o.cj)([I.Z, p.ZP], () => {
          var n;
          let t = I.Z.getGuild(
            null !== (n = e.getGuildId()) && void 0 !== n ? n : D.lds,
          );
          return null == t ? el : (0, k.FS)(e, t, [p.ZP]);
        });
      }
      function ei(e) {
        return u.useMemo(
          () => (null == e ? "" : null == e.template ? "" : e.template.trim()),
          [e],
        );
      }
      function eo(e) {
        let n = (0, o.e7)([M.Z], () => M.Z.can(D.Plq.MANAGE_THREADS, e));
        return u.useMemo(() => {
          var t;
          let u = [
            ...(null !== (t = null == e ? void 0 : e.availableTags) &&
            void 0 !== t
              ? t
              : []),
          ];
          return !n && (u = u.filter((e) => !e.moderated)), u;
        }, [n, null == e ? void 0 : e.availableTags]);
      }
      function ea(e, n) {
        let t = eo(
          (0, o.e7)(
            [_.Z],
            () => _.Z.getChannel(null == e ? void 0 : e.parent_id),
            [e],
          ),
        );
        return u.useMemo(() => n.filter((e) => t.includes(e)), [n, t]);
      }
      function ed(e) {
        return (0, o.e7)([M.Z], () => M.Z.can(D.Plq.READ_MESSAGE_HISTORY, e));
      }
      function ec(e) {
        return (0, o.e7)([M.Z], () => M.Z.can(D.Plq.READ_MESSAGE_HISTORY, e));
      }
      function es(e) {
        let { channelId: n } = e;
        return (0, o.cj)([L.Z], () => ({
          isSearchLoading: L.Z.getSearchLoading(n),
          searchQuery: L.Z.getSearchQuery(n),
          searchResults: L.Z.getSearchResults(n),
        }));
      }
      function ef(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          { isSearchLoading: l, searchQuery: r } = es({ channelId: e.id }),
          i = ed(e),
          o = u.useRef(null),
          a = u.useRef(new Set());
        u.useEffect(() => {
          if (null == r && null != o.current) {
            R.Z.clearForumSearch(e.id), (o.current = null);
            return;
          }
          if (null == r || 0 === r.length || t) return;
          if (!i) {
            R.Z.clearForumSearch(e.id);
            return;
          }
          if ((o.current === r && a.current === n) || l) return;
          let u = setTimeout(async () => {
            (o.current = r), (a.current = n);
            try {
              await R.Z.searchForumPosts(e.guild_id, e.id, r, n);
            } catch {}
          }, 350);
          return () => clearTimeout(u);
        }, [i, e.guild_id, e.id, t, l, r, n]);
      }
      function eg(e, n) {
        return (0, o.e7)([Z.Z, p.ZP, _.Z], () => {
          let t = _.Z.getChannel(n);
          if (!(null == t ? void 0 : t.isForumLikeChannel())) return 0;
          let u = Z.Z.getActiveJoinedUnreadThreadsForParent(e, n),
            l = Z.Z.getActiveUnjoinedUnreadThreadsForParent(e, n),
            r = p.ZP.ackMessageId(n),
            i = 0;
          if (null == r) return i;
          for (let e in u) {
            let n = u[e],
              t = p.ZP.lastMessageId(n.channel.id);
            null != t && t > r && i++;
          }
          for (let e in l) {
            let n = l[e],
              t = p.ZP.lastMessageId(n.id);
            null != t && t > r && i++;
          }
          return i;
        });
      }
      function em(e) {
        let {
            channel: n,
            sortOrder: t,
            tagFilter: l,
            shouldAutomaticallyAck: r,
          } = e,
          i = (0, o.Wu)([w.Z], () => w.Z.getThreadIds(n.id, t, l)),
          a = eg(n.guild_id, n.id),
          c = (0, o.e7)([w.Z], () => r && (a > 0 || w.Z.getCanAckThreads()), [
            r,
            a,
          ]);
        return (
          u.useEffect(() => {
            c && (0, d.U6)(n);
          }, [n, c]),
          i
        );
      }
    },
    581036: function (e, n, t) {
      t(47120);
      var u,
        l,
        r,
        i,
        o = t(512722),
        a = t.n(o),
        d = t(442837),
        c = t(570140),
        s = t(344185),
        f = t(592125),
        g = t(306680);
      let m = {},
        Z = new Set();
      class E extends (u = d.ZP.Store) {
        initialize() {
          this.waitFor(s.Z, f.Z, g.ZP);
        }
        getCount(e) {
          return m[e];
        }
        getThreadIdsMissingCounts(e, n) {
          return (
            a()(
              s.Z.hasLoaded(e),
              "must wait for THREAD_LIST_SYNC before calling this",
            ),
            n.filter((e) => !(e in m) && !Z.has(e))
          );
        }
      }
      (i = "ForumPostUnreadCountStore"),
        (r = "displayName") in (l = E)
          ? Object.defineProperty(l, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = i),
        (n.Z = new E(c.Z, {
          CONNECTION_OPEN: function () {
            (m = {}), (Z = new Set());
          },
          THREAD_CREATE: function (e) {
            let { channel: n, isNewlyCreated: t } = e;
            if (!t || !s.Z.hasLoaded(n.guild_id)) return !1;
            m[n.id] = 0;
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: n, optimistic: t, isPushNotification: u } = e;
            if (t || u || !(n in m)) return !1;
            m[n]++;
          },
          FORUM_UNREADS: function (e) {
            let { threads: n } = e;
            n.forEach((e) => {
              null != e.count && (m[e.threadId] = e.count);
            });
          },
          MESSAGE_ACK: function (e) {
            let { channelId: n } = e;
            if (!(n in m)) {
              let e = f.Z.getChannel(n),
                t = f.Z.getChannel(null == e ? void 0 : e.parent_id);
              if (!(null == t ? void 0 : t.isForumLikeChannel())) return !1;
            }
            m[n] = g.ZP.getUnreadCount(n);
          },
          REQUEST_FORUM_UNREADS: function (e) {
            let { threads: n } = e;
            n.forEach((e) => {
              let { threadId: n } = e;
              return Z.add(n);
            });
          },
        }));
    },
    723774: function (e, n, t) {
      t.d(n, {
        WE: function () {
          return d;
        },
        lE: function () {
          return o;
        },
      });
      var u = t(709054),
        l = t(124368),
        r = t(689938);
      let i = (e) => u.default.compare("992549565104128000", e) > -1,
        o = (e, n) => {
          if (null == e || e < 0) return "0";
          {
            let t = i(n);
            return (null == n || t) && e >= l.vw
              ? "50+"
              : e >= l.M3
                ? "100k+"
                : "".concat(e);
          }
        },
        a = (e, n, t) => {
          let u = o(e, t);
          return "0" === u ? r.Z.Messages.SEE_THREAD : n.format({ count: u });
        },
        d = (e, n) => a(e, r.Z.Messages.THREAD_MESSAGE_COUNT, n);
    },
    111583: function (e, n, t) {
      let u;
      var l,
        r,
        i,
        o,
        a = t(442837),
        d = t(544891),
        c = t(570140),
        s = t(70956),
        f = t(314897),
        g = t(300429),
        m = t(981631),
        Z = t(176505);
      let E = 10 * s.Z.Millis.SECOND,
        v = 1.5 * s.Z.Millis.SECOND,
        h = {},
        T = Object.freeze({});
      function _(e) {
        var n;
        return null !== (n = h[e]) && void 0 !== n ? n : T;
      }
      function S(e) {
        var n, t;
        let { channelId: u, userId: l } = e,
          r = { ..._(u) };
        clearTimeout(r[l]),
          (r[l] =
            ((n = u),
            (t = l),
            setTimeout(() => {
              c.Z.dispatch({ type: "TYPING_STOP", channelId: n, userId: t });
            }, E))),
          (h[u] = r);
      }
      function I(e) {
        let { channelId: n, userId: t } = e,
          u = h[n];
        if (null == u || null == u[t]) return !1;
        let l = { ...u };
        clearTimeout(l[t]), delete l[t], (h[n] = l);
      }
      function M() {
        h = {};
      }
      class p extends (o = a.ZP.Store) {
        getTypingUsers(e) {
          return _(e);
        }
        isTyping(e, n) {
          return null != _(e)[n];
        }
      }
      (i = "TypingStore"),
        (r = "displayName") in (l = p)
          ? Object.defineProperty(l, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = i),
        (n.Z = new p(c.Z, {
          TYPING_START: S,
          TYPING_STOP: I,
          TYPING_START_LOCAL: function (e) {
            let { channelId: n } = e,
              t = f.default.getId();
            if (null == t || n === Z.V) return !1;
            null != u &&
              u.channelId !== n &&
              (null != u.timeout && clearTimeout(u.timeout), (u = null));
            let l = Date.now(),
              r = 0.8 * E;
            if (null != u && (null != u.timeout || u.prevSend + r > l))
              return !1;
            let i = setTimeout(
              () => {
                if (
                  null == u ||
                  u.channelId !== n ||
                  t !== f.default.getId() ||
                  null == u.timeout
                )
                  return;
                if (
                  ((u.timeout = null),
                  !(
                    (function (e) {
                      let n = _(e);
                      return n === T ? 0 : Object.keys(n).length;
                    })(n) > 5
                  ))
                )
                  d.tn
                    .post({ url: m.ANM.TYPING(n), oldFormErrors: !0 })
                    .then((e) => {
                      if (200 === e.status) {
                        var t, u;
                        let l =
                            null !== (t = e.body.message_send_cooldown_ms) &&
                            void 0 !== t
                              ? t
                              : 0,
                          r =
                            null !== (u = e.body.thread_create_cooldown_ms) &&
                            void 0 !== u
                              ? u
                              : 0;
                        l > 0 &&
                          c.Z.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: n,
                            slowmodeType: g.S.SendMessage,
                            cooldownMs: l,
                          }),
                          r > 0 &&
                            c.Z.dispatch({
                              type: "SLOWMODE_SET_COOLDOWN",
                              channelId: n,
                              slowmodeType: g.S.CreateThread,
                              cooldownMs: r,
                            });
                      }
                    });
              },
              null == u || u.prevSend > l - 2 * r ? v : 0,
            );
            return (
              (u = { channelId: n, timeout: i, prevSend: l }),
              S({ channelId: n, userId: t })
            );
          },
          TYPING_STOP_LOCAL: function (e) {
            let { channelId: n } = e,
              t = f.default.getId();
            return (
              null != t &&
              null != u &&
              u.channelId === n &&
              null != u.timeout &&
              (clearTimeout(u.timeout),
              (u = null),
              I({ channelId: n, userId: t }))
            );
          },
          CONNECTION_OPEN: M,
          OVERLAY_INITIALIZE: M,
          MESSAGE_CREATE: function (e) {
            let {
              channelId: n,
              message: { author: t },
              optimistic: l,
            } = e;
            return (
              l &&
                !(function (e) {
                  if (null == u || u.channelId !== e) return;
                  null != u.timeout && clearTimeout(u.timeout), (u = null);
                })(n),
              null != t && I({ channelId: n, userId: t.id })
            );
          },
        }));
    },
  },
]);
//# sourceMappingURL=4a95d892d234c7119cc8.js.map
