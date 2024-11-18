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
          return J;
        },
        ES: function () {
          return H;
        },
        Eg: function () {
          return x;
        },
        IN: function () {
          return X;
        },
        J$: function () {
          return el;
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
          return W;
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
      var u = t(192379),
        r = t(392711),
        l = t.n(r),
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
        h = t(344185),
        v = t(723774),
        E = t(144140),
        T = t(91159),
        _ = t(592125),
        S = t(720202),
        I = t(430824),
        p = t(496675),
        M = t(306680),
        C = t(699516),
        N = t(111583),
        P = t(594174),
        O = t(823379),
        A = t(709054),
        w = t(883429),
        R = t(238349),
        b = t(368844),
        U = t(660189),
        y = t(581036),
        L = t(208970),
        k = t(882252),
        j = t(710352),
        F = t(981631),
        D = t(176505),
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
      function W(e) {
        return (function (e) {
          let n = (0, o.e7)([I.Z], () => I.Z.getGuild(e));
          return (
            Y.useExperiment(
              { guildId: e, location: "553713_1" },
              { autoTrackExposure: !1 },
            ).enabled ||
            !!(
              (null == n ? void 0 : n.hasFeature(F.oNc.COMMUNITY)) ||
              (null == n ? void 0 : n.hasFeature(F.oNc.INTERNAL_EMPLOYEE_ONLY))
            )
          );
        })(e);
      }
      function H(e, n, t) {
        let r = (0, o.e7)([h.Z], () => h.Z.hasLoaded(e.guild_id));
        u.useEffect(() => {
          if (!r) return;
          let u = R.Z.getThreadIds(e.id, n, t),
            l = y.Z.getThreadIdsMissingCounts(e.guild_id, u)
              .filter((e) => (0, k.nU)(e, [M.ZP]))
              .slice(0, 180)
              .map((e) => ({
                threadId: e,
                ackMessageId: M.ZP.getTrackedAckMessageId(e),
              }));
          l.length > 0 &&
            a.Z.dispatch({
              type: "REQUEST_FORUM_UNREADS",
              guildId: e.guild_id,
              channelId: e.id,
              threads: l,
            });
        }, [e.id, e.guild_id, r, t, n]);
      }
      function q(e) {
        return (0, o.e7)([h.Z, _.Z], () => {
          let n = l()(h.Z.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => {
              var n;
              return (
                (null === (n = _.Z.getChannel(e)) || void 0 === n
                  ? void 0
                  : n.hasFlag(D.zZ.PINNED)) === !0
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
          var t, u, r;
          return null !==
            (r =
              null == e
                ? void 0
                : null === (u = e.appliedTags) || void 0 === u
                  ? void 0
                  : null === (t = u.map((e) => n[e])) || void 0 === t
                    ? void 0
                    : t.filter(O.lm)) && void 0 !== r
            ? r
            : Q;
        }, [n, null == e ? void 0 : e.appliedTags]);
      }
      function B(e, n) {
        let t = (0, o.Wu)([P.default], () =>
          n.map((e) => P.default.getUser(e)).filter(O.lm),
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
          r = u.useMemo(() => A.default.extractTimestamp(e.id), [e.id]),
          l = (0, T.Ok)(e),
          o = u.useMemo(() => (0, k.Uw)(n, t), [n, t]);
        return u.useMemo(
          () => (n === i.z.CREATION_DATE ? (0, T.Ye)(r, o) : (0, T.Ye)(l, o)),
          [l, n, r, o],
        );
      }
      function X(e) {
        return u.useMemo(() => {
          var n;
          return l().maxBy(
            null !== (n = null == e ? void 0 : e.reactions) && void 0 !== n
              ? n
              : [],
            (e) => Math.max(e.burst_count, e.count),
          );
        }, [null == e ? void 0 : e.reactions]);
      }
      function J(e) {
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
        let n = (0, o.e7)([E.Z], () => {
            var n;
            return null !== (n = E.Z.getCount(e.id)) && void 0 !== n ? n : 0;
          }),
          t = (0, v.lE)(n, e.id),
          u = (0, o.e7)([M.ZP], () => (0, k.nU)(e.id, [M.ZP])),
          r = (0, o.e7)([y.Z], () => {
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
          unreadCount: r,
        };
      }
      function $(e) {
        var n;
        let t = (0, o.e7)([P.default], () => P.default.getUser(e.ownerId)),
          r = (0, o.e7)([U.Z], () => {
            var n;
            return null === (n = U.Z.getMessage(e.id)) || void 0 === n
              ? void 0
              : n.firstMessage;
          }),
          l = (0, m.Sw)(
            null !== (n = null == r ? void 0 : r.author) && void 0 !== n
              ? n
              : t,
            e,
          );
        return (
          u.useEffect(() => {
            null != e.ownerId && S.Z.requestMember(e.guild_id, e.ownerId);
          }, [e.guild_id, e.ownerId]),
          { user: t, author: l }
        );
      }
      function ee(e) {
        var n, t;
        let u = P.default.getUser(e.ownerId),
          r =
            null === (n = U.Z.getMessage(e.id)) || void 0 === n
              ? void 0
              : n.firstMessage,
          l = (0, m.ij)(
            null !== (t = null == r ? void 0 : r.author) && void 0 !== t
              ? t
              : u,
            e,
          );
        return { user: u, author: l };
      }
      function en(e) {
        return (0, o.Wu)([N.Z, P.default, C.Z], () => {
          let n = P.default.getCurrentUser();
          return l()(N.Z.getTypingUsers(e.id))
            .keys()
            .filter((e) => e !== (null == n ? void 0 : n.id))
            .reject((e) => C.Z.isBlockedOrIgnored(e))
            .map((e) => P.default.getUser(e))
            .filter(O.lm)
            .map((e) => e.id)
            .value();
        });
      }
      function et(e) {
        let {
            firstMessage: n,
            formatInline: t = !0,
            noStyleAndInteraction: r = !0,
          } = e,
          l = (0, f.p)(),
          { hasSpoilerEmbeds: i, content: o } = u.useMemo(
            () =>
              (null == n ? void 0 : n.content) != null && "" !== n.content
                ? (0, g.ZP)(n, {
                    formatInline: t,
                    noStyleAndInteraction: r,
                    allowHeading: !0,
                    allowList: !0,
                    shouldFilterKeywords: l,
                  })
                : { hasSpoilerEmbeds: !1, content: null },
            [n, t, r, l],
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
        return (0, o.e7)([p.Z], () => p.Z.can(F.Plq.MANAGE_CHANNELS, e));
      }
      let er = { isNew: !1, hasUnreads: !1 };
      function el(e) {
        return (0, o.cj)([I.Z, M.ZP], () => {
          var n;
          let t = I.Z.getGuild(
            null !== (n = e.getGuildId()) && void 0 !== n ? n : F.lds,
          );
          return null == t ? er : (0, k.FS)(e, t, [M.ZP]);
        });
      }
      function ei(e) {
        return u.useMemo(
          () => (null == e ? "" : null == e.template ? "" : e.template.trim()),
          [e],
        );
      }
      function eo(e) {
        let n = (0, o.e7)([p.Z], () => p.Z.can(F.Plq.MANAGE_THREADS, e));
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
        return (0, o.e7)([p.Z], () => p.Z.can(F.Plq.READ_MESSAGE_HISTORY, e));
      }
      function ec(e) {
        return (0, o.e7)([p.Z], () => p.Z.can(F.Plq.READ_MESSAGE_HISTORY, e));
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
          { isSearchLoading: r, searchQuery: l } = es({ channelId: e.id }),
          i = ed(e),
          o = u.useRef(null),
          a = u.useRef(new Set());
        u.useEffect(() => {
          if (null == l && null != o.current) {
            w.Z.clearForumSearch(e.id), (o.current = null);
            return;
          }
          if (null == l || 0 === l.length || t) return;
          if (!i) {
            w.Z.clearForumSearch(e.id);
            return;
          }
          if ((o.current === l && a.current === n) || r) return;
          let u = setTimeout(async () => {
            (o.current = l), (a.current = n);
            try {
              await w.Z.searchForumPosts(e.guild_id, e.id, l, n);
            } catch {}
          }, 350);
          return () => clearTimeout(u);
        }, [i, e.guild_id, e.id, t, r, l, n]);
      }
      function eg(e, n) {
        return (0, o.e7)([Z.Z, M.ZP, _.Z], () => {
          let t = _.Z.getChannel(n);
          if (!(null == t ? void 0 : t.isForumLikeChannel())) return 0;
          let u = Z.Z.getActiveJoinedUnreadThreadsForParent(e, n),
            r = Z.Z.getActiveUnjoinedUnreadThreadsForParent(e, n),
            l = M.ZP.ackMessageId(n),
            i = 0;
          if (null == l) return i;
          for (let e in u) {
            let n = u[e],
              t = M.ZP.lastMessageId(n.channel.id);
            null != t && t > l && i++;
          }
          for (let e in r) {
            let n = r[e],
              t = M.ZP.lastMessageId(n.id);
            null != t && t > l && i++;
          }
          return i;
        });
      }
      function em(e) {
        let {
            channel: n,
            sortOrder: t,
            tagFilter: r,
            shouldAutomaticallyAck: l,
          } = e,
          i = (0, o.Wu)([R.Z], () => R.Z.getThreadIds(n.id, t, r)),
          a = eg(n.guild_id, n.id),
          c = (0, o.e7)([R.Z], () => l && (a > 0 || R.Z.getCanAckThreads()), [
            l,
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
        r,
        l,
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
      class h extends (u = d.ZP.Store) {
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
        (l = "displayName") in (r = h)
          ? Object.defineProperty(r, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[l] = i),
        (n.Z = new h(c.Z, {
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
        r = t(124368),
        l = t(388032);
      let i = (e) => u.default.compare("992549565104128000", e) > -1,
        o = (e, n) => {
          if (null == e || e < 0) return "0";
          {
            let t = i(n);
            return (null == n || t) && e >= r.vw
              ? "50+"
              : e >= r.M3
                ? "100k+"
                : "".concat(e);
          }
        },
        a = (e, n, t) => {
          let u = o(e, t);
          return "0" === u
            ? l.intl.string(l.t.eXHkho)
            : l.intl.formatToPlainString(n, { count: u });
        },
        d = (e, n) => a(e, l.t.rfAXDQ, n);
    },
    111583: function (e, n, t) {
      let u;
      var r,
        l,
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
      let h = 10 * s.Z.Millis.SECOND,
        v = 1.5 * s.Z.Millis.SECOND,
        E = {},
        T = Object.freeze({});
      function _(e) {
        var n;
        return null !== (n = E[e]) && void 0 !== n ? n : T;
      }
      function S(e) {
        var n, t;
        let { channelId: u, userId: r } = e,
          l = { ..._(u) };
        clearTimeout(l[r]),
          (l[r] =
            ((n = u),
            (t = r),
            setTimeout(() => {
              c.Z.dispatch({ type: "TYPING_STOP", channelId: n, userId: t });
            }, h))),
          (E[u] = l);
      }
      function I(e) {
        let { channelId: n, userId: t } = e,
          u = E[n];
        if (null == u || null == u[t]) return !1;
        let r = { ...u };
        clearTimeout(r[t]), delete r[t], (E[n] = r);
      }
      function p() {
        E = {};
      }
      class M extends (o = a.ZP.Store) {
        getTypingUsers(e) {
          return _(e);
        }
        isTyping(e, n) {
          return null != _(e)[n];
        }
      }
      (i = "TypingStore"),
        (l = "displayName") in (r = M)
          ? Object.defineProperty(r, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[l] = i),
        (n.Z = new M(c.Z, {
          TYPING_START: S,
          TYPING_STOP: I,
          TYPING_START_LOCAL: function (e) {
            let { channelId: n } = e,
              t = f.default.getId();
            if (null == t || n === Z.V) return !1;
            null != u &&
              u.channelId !== n &&
              (null != u.timeout && clearTimeout(u.timeout), (u = null));
            let r = Date.now(),
              l = 0.8 * h;
            if (null != u && (null != u.timeout || u.prevSend + l > r))
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
                    .post({
                      url: m.ANM.TYPING(n),
                      oldFormErrors: !0,
                      rejectWithError: !1,
                    })
                    .then((e) => {
                      if (200 === e.status) {
                        var t, u;
                        let r =
                            null !== (t = e.body.message_send_cooldown_ms) &&
                            void 0 !== t
                              ? t
                              : 0,
                          l =
                            null !== (u = e.body.thread_create_cooldown_ms) &&
                            void 0 !== u
                              ? u
                              : 0;
                        r > 0 &&
                          c.Z.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: n,
                            slowmodeType: g.S.SendMessage,
                            cooldownMs: r,
                          }),
                          l > 0 &&
                            c.Z.dispatch({
                              type: "SLOWMODE_SET_COOLDOWN",
                              channelId: n,
                              slowmodeType: g.S.CreateThread,
                              cooldownMs: l,
                            });
                      }
                    });
              },
              null == u || u.prevSend > r - 2 * l ? v : 0,
            );
            return (
              (u = { channelId: n, timeout: i, prevSend: r }),
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
          CONNECTION_OPEN: p,
          OVERLAY_INITIALIZE: p,
          MESSAGE_CREATE: function (e) {
            let {
              channelId: n,
              message: { author: t },
              optimistic: r,
            } = e;
            return (
              r &&
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
//# sourceMappingURL=241811d925b8488a76fc.js.map
