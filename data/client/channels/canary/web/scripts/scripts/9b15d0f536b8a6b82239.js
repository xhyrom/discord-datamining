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
          return V;
        },
        ES: function () {
          return q;
        },
        Eg: function () {
          return H;
        },
        IN: function () {
          return J;
        },
        J$: function () {
          return ei;
        },
        MC: function () {
          return ee;
        },
        O2: function () {
          return x;
        },
        Q: function () {
          return en;
        },
        Vm: function () {
          return eo;
        },
        W3: function () {
          return Y;
        },
        XZ: function () {
          return es;
        },
        eV: function () {
          return B;
        },
        eZ: function () {
          return ec;
        },
        iM: function () {
          return X;
        },
        jR: function () {
          return ed;
        },
        kF: function () {
          return Q;
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
          return el;
        },
        r_: function () {
          return eu;
        },
        vP: function () {
          return eZ;
        },
        xw: function () {
          return z;
        },
      }),
        t(47120),
        t(724458);
      var u = t(192379),
        r = t(392711),
        i = t.n(r),
        l = t(683860),
        o = t(442837),
        a = t(570140),
        d = t(45114),
        c = t(339085),
        s = t(987170),
        f = t(905405),
        g = t(937889),
        Z = t(739566),
        m = t(601070),
        v = t(344185),
        h = t(723774),
        E = t(144140),
        _ = t(91159),
        M = t(592125),
        C = t(720202),
        T = t(430824),
        I = t(496675),
        S = t(306680),
        p = t(699516),
        P = t(111583),
        A = t(594174),
        N = t(823379),
        R = t(709054),
        U = t(883429),
        k = t(238349),
        w = t(368844),
        b = t(660189),
        F = t(581036),
        O = t(208970),
        j = t(882252),
        y = t(710352),
        L = t(981631),
        D = t(176505),
        G = t(124368);
      let x = (0, s.Z)({
        id: "2023-01_forums_non_community",
        label: "Forum non-community",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function H(e) {
        return x.getCurrentConfig({ guildId: e, location: "553713_2" }).enabled;
      }
      function Y(e) {
        return (function (e) {
          let n = (0, o.e7)([T.Z], () => T.Z.getGuild(e));
          return (
            x.useExperiment(
              { guildId: e, location: "553713_1" },
              { autoTrackExposure: !1 },
            ).enabled ||
            !!(
              (null == n ? void 0 : n.hasFeature(L.oNc.COMMUNITY)) ||
              (null == n ? void 0 : n.hasFeature(L.oNc.INTERNAL_EMPLOYEE_ONLY))
            )
          );
        })(e);
      }
      function q(e, n, t) {
        let r = (0, o.e7)([v.Z], () => v.Z.hasLoaded(e.guild_id));
        u.useEffect(() => {
          if (!r) return;
          let u = k.Z.getThreadIds(e.id, n, t),
            i = F.Z.getThreadIdsMissingCounts(e.guild_id, u)
              .filter((e) => (0, j.nU)(e, [S.ZP]))
              .slice(0, 180)
              .map((e) => ({
                threadId: e,
                ackMessageId: S.ZP.getTrackedAckMessageId(e),
              }));
          i.length > 0 &&
            a.Z.dispatch({
              type: "REQUEST_FORUM_UNREADS",
              guildId: e.guild_id,
              channelId: e.id,
              threads: i,
            });
        }, [e.id, e.guild_id, r, t, n]);
      }
      function Q(e) {
        return (0, o.e7)([v.Z, M.Z], () => {
          let n = i()(v.Z.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => {
              var n;
              return (
                (null === (n = M.Z.getChannel(e)) || void 0 === n
                  ? void 0
                  : n.hasFlag(D.zZ.PINNED)) === !0
              );
            })
            .head();
          return M.Z.getChannel(n);
        });
      }
      let W = [];
      function B(e) {
        let n = (function (e) {
          let n = null == e ? void 0 : e.parent_id;
          return (0, o.cj)(
            [M.Z],
            () => {
              var e;
              let t = M.Z.getChannel(n);
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
                    : t.filter(N.lm)) && void 0 !== r
            ? r
            : W;
        }, [n, null == e ? void 0 : e.appliedTags]);
      }
      function X(e, n) {
        let t = (0, o.Wu)([A.default], () =>
          n.map((e) => A.default.getUser(e)).filter(N.lm),
        );
        return (
          u.useEffect(() => {
            t.forEach((n) => {
              C.Z.requestMember(e.guild_id, n.id);
            });
          }, []),
          t
        );
      }
      function z(e, n) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : y.R6.DURATION_AGO,
          r = u.useMemo(() => R.default.extractTimestamp(e.id), [e.id]),
          i = (0, _.Ok)(e),
          o = u.useMemo(() => (0, j.Uw)(n, t), [n, t]);
        return u.useMemo(
          () => (n === l.z.CREATION_DATE ? (0, _.Ye)(r, o) : (0, _.Ye)(i, o)),
          [i, n, r, o],
        );
      }
      function J(e) {
        return u.useMemo(() => {
          var n;
          return i().maxBy(
            null !== (n = null == e ? void 0 : e.reactions) && void 0 !== n
              ? n
              : [],
            (e) => Math.max(e.burst_count, e.count),
          );
        }, [null == e ? void 0 : e.reactions]);
      }
      function V(e) {
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
          t = (0, h.lE)(n, e.id),
          u = (0, o.e7)([S.ZP], () => (0, j.nU)(e.id, [S.ZP])),
          r = (0, o.e7)([F.Z], () => {
            if (!u) return null;
            let t = F.Z.getCount(e.id);
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
        let t = (0, o.e7)([A.default], () => A.default.getUser(e.ownerId)),
          r = (0, o.e7)([b.Z], () => {
            var n;
            return null === (n = b.Z.getMessage(e.id)) || void 0 === n
              ? void 0
              : n.firstMessage;
          }),
          i = (0, Z.Sw)(
            null !== (n = null == r ? void 0 : r.author) && void 0 !== n
              ? n
              : t,
            e,
          );
        return (
          u.useEffect(() => {
            null != e.ownerId && C.Z.requestMember(e.guild_id, e.ownerId);
          }, [e.guild_id, e.ownerId]),
          { user: t, author: i }
        );
      }
      function ee(e) {
        var n, t;
        let u = A.default.getUser(e.ownerId),
          r =
            null === (n = b.Z.getMessage(e.id)) || void 0 === n
              ? void 0
              : n.firstMessage,
          i = (0, Z.ij)(
            null !== (t = null == r ? void 0 : r.author) && void 0 !== t
              ? t
              : u,
            e,
          );
        return { user: u, author: i };
      }
      function en(e) {
        return (0, o.Wu)([P.Z, A.default, p.Z], () => {
          let n = A.default.getCurrentUser();
          return i()(P.Z.getTypingUsers(e.id))
            .keys()
            .filter((e) => e !== (null == n ? void 0 : n.id))
            .reject((e) => p.Z.isBlockedOrIgnored(e))
            .map((e) => A.default.getUser(e))
            .filter(N.lm)
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
          i = (0, f.p)(),
          { hasSpoilerEmbeds: l, content: o } = u.useMemo(
            () =>
              (null == n ? void 0 : n.content) != null && "" !== n.content
                ? (0, g.ZP)(n, {
                    formatInline: t,
                    noStyleAndInteraction: r,
                    allowHeading: !0,
                    allowList: !0,
                    shouldFilterKeywords: i,
                  })
                : { hasSpoilerEmbeds: !1, content: null },
            [n, t, r, i],
          ),
          a = (0, w.eL)(n, l),
          d = (0, w.vg)(n, l);
        return {
          hasSpoilerEmbeds: l,
          content: o,
          firstMedia: a,
          firstMediaIsEmbed: d,
        };
      }
      function eu(e) {
        return (0, o.e7)([I.Z], () => I.Z.can(L.Plq.MANAGE_CHANNELS, e));
      }
      let er = { isNew: !1, hasUnreads: !1 };
      function ei(e) {
        return (0, o.cj)([T.Z, S.ZP], () => {
          var n;
          let t = T.Z.getGuild(
            null !== (n = e.getGuildId()) && void 0 !== n ? n : L.lds,
          );
          return null == t ? er : (0, j.FS)(e, t, [S.ZP]);
        });
      }
      function el(e) {
        return u.useMemo(
          () => (null == e ? "" : null == e.template ? "" : e.template.trim()),
          [e],
        );
      }
      function eo(e) {
        let n = (0, o.e7)([I.Z], () => I.Z.can(L.Plq.MANAGE_THREADS, e));
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
            [M.Z],
            () => M.Z.getChannel(null == e ? void 0 : e.parent_id),
            [e],
          ),
        );
        return u.useMemo(() => n.filter((e) => t.includes(e)), [n, t]);
      }
      function ed(e) {
        return (0, o.e7)([I.Z], () => I.Z.can(L.Plq.READ_MESSAGE_HISTORY, e));
      }
      function ec(e) {
        return (0, o.e7)([I.Z], () => I.Z.can(L.Plq.READ_MESSAGE_HISTORY, e));
      }
      function es(e) {
        let { channelId: n } = e;
        return (0, o.cj)([O.Z], () => ({
          isSearchLoading: O.Z.getSearchLoading(n),
          searchQuery: O.Z.getSearchQuery(n),
          searchResults: O.Z.getSearchResults(n),
        }));
      }
      function ef(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          { isSearchLoading: r, searchQuery: i } = es({ channelId: e.id }),
          l = ed(e),
          o = u.useRef(null),
          a = u.useRef(new Set());
        u.useEffect(() => {
          if (null == i && null != o.current) {
            U.Z.clearForumSearch(e.id), (o.current = null);
            return;
          }
          if (null == i || 0 === i.length || t) return;
          if (!l) {
            U.Z.clearForumSearch(e.id);
            return;
          }
          if ((o.current === i && a.current === n) || r) return;
          let u = setTimeout(async () => {
            (o.current = i), (a.current = n);
            try {
              await U.Z.searchForumPosts(e.guild_id, e.id, i, n);
            } catch {}
          }, 350);
          return () => clearTimeout(u);
        }, [l, e.guild_id, e.id, t, r, i, n]);
      }
      function eg(e, n) {
        return (0, o.e7)([m.Z, S.ZP, M.Z], () => {
          let t = M.Z.getChannel(n);
          if (!(null == t ? void 0 : t.isForumLikeChannel())) return 0;
          let u = m.Z.getActiveJoinedUnreadThreadsForParent(e, n),
            r = m.Z.getActiveUnjoinedUnreadThreadsForParent(e, n),
            i = S.ZP.ackMessageId(n),
            l = 0;
          if (null == i) return l;
          for (let e in u) {
            let n = u[e],
              t = S.ZP.lastMessageId(n.channel.id);
            null != t && t > i && l++;
          }
          for (let e in r) {
            let n = r[e],
              t = S.ZP.lastMessageId(n.id);
            null != t && t > i && l++;
          }
          return l;
        });
      }
      function eZ(e) {
        let {
            channel: n,
            sortOrder: t,
            tagFilter: r,
            shouldAutomaticallyAck: i,
          } = e,
          l = (0, o.Wu)([k.Z], () => k.Z.getThreadIds(n.id, t, r)),
          a = eg(n.guild_id, n.id),
          c = (0, o.e7)([k.Z], () => i && (a > 0 || k.Z.getCanAckThreads()), [
            i,
            a,
          ]);
        return (
          u.useEffect(() => {
            c && (0, d.U6)(n);
          }, [n, c]),
          l
        );
      }
    },
    581036: function (e, n, t) {
      t(47120);
      var u,
        r,
        i,
        l,
        o = t(512722),
        a = t.n(o),
        d = t(442837),
        c = t(570140),
        s = t(344185),
        f = t(592125),
        g = t(306680);
      let Z = {},
        m = new Set();
      class v extends (u = d.ZP.Store) {
        initialize() {
          this.waitFor(s.Z, f.Z, g.ZP);
        }
        getCount(e) {
          return Z[e];
        }
        getThreadIdsMissingCounts(e, n) {
          return (
            a()(
              s.Z.hasLoaded(e),
              "must wait for THREAD_LIST_SYNC before calling this",
            ),
            n.filter((e) => !(e in Z) && !m.has(e))
          );
        }
      }
      (l = "ForumPostUnreadCountStore"),
        (i = "displayName") in (r = v)
          ? Object.defineProperty(r, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = l),
        (n.Z = new v(c.Z, {
          CONNECTION_OPEN: function () {
            (Z = {}), (m = new Set());
          },
          THREAD_CREATE: function (e) {
            let { channel: n, isNewlyCreated: t } = e;
            if (!t || !s.Z.hasLoaded(n.guild_id)) return !1;
            Z[n.id] = 0;
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: n, optimistic: t, isPushNotification: u } = e;
            if (t || u || !(n in Z)) return !1;
            Z[n]++;
          },
          FORUM_UNREADS: function (e) {
            let { threads: n } = e;
            n.forEach((e) => {
              null != e.count && (Z[e.threadId] = e.count);
            });
          },
          MESSAGE_ACK: function (e) {
            let { channelId: n } = e;
            if (!(n in Z)) {
              let e = f.Z.getChannel(n),
                t = f.Z.getChannel(null == e ? void 0 : e.parent_id);
              if (!(null == t ? void 0 : t.isForumLikeChannel())) return !1;
            }
            Z[n] = g.ZP.getUnreadCount(n);
          },
          REQUEST_FORUM_UNREADS: function (e) {
            let { threads: n } = e;
            n.forEach((e) => {
              let { threadId: n } = e;
              return m.add(n);
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
        i = t(388032);
      let l = (e) => u.default.compare("992549565104128000", e) > -1,
        o = (e, n) => {
          if (null == e || e < 0) return "0";
          {
            let t = l(n);
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
            ? i.intl.string(i.t.eXHkho)
            : i.intl.formatToPlainString(n, { count: u });
        },
        d = (e, n) => a(e, i.t.rfAXDQ, n);
    },
  },
]);
//# sourceMappingURL=9b15d0f536b8a6b82239.js.map
