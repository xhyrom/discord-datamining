"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90508"],
  {
    456269: function (e, n, t) {
      t.d(n, {
        AJ: function () {
          return K;
        },
        Bs: function () {
          return J;
        },
        ES: function () {
          return Y;
        },
        Eg: function () {
          return x;
        },
        IN: function () {
          return B;
        },
        J$: function () {
          return eu;
        },
        MC: function () {
          return $;
        },
        O2: function () {
          return G;
        },
        Vm: function () {
          return ei;
        },
        W3: function () {
          return H;
        },
        XZ: function () {
          return ed;
        },
        eV: function () {
          return W;
        },
        eZ: function () {
          return ea;
        },
        iM: function () {
          return X;
        },
        jR: function () {
          return eo;
        },
        kF: function () {
          return q;
        },
        kn: function () {
          return el;
        },
        ku: function () {
          return ec;
        },
        mX: function () {
          return ee;
        },
        n2: function () {
          return es;
        },
        nP: function () {
          return V;
        },
        ql: function () {
          return er;
        },
        r_: function () {
          return en;
        },
        vP: function () {
          return ef;
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
        c = t(493773),
        s = t(339085),
        f = t(987170),
        g = t(905405),
        Z = t(937889),
        m = t(739566),
        h = t(601070),
        v = t(344185),
        E = t(723774),
        _ = t(144140),
        M = t(91159),
        C = t(592125),
        T = t(720202),
        I = t(430824),
        S = t(496675),
        P = t(306680),
        A = t(594174),
        p = t(823379),
        N = t(709054),
        R = t(883429),
        U = t(238349),
        w = t(368844),
        b = t(660189),
        k = t(581036),
        F = t(208970),
        O = t(882252),
        j = t(710352),
        L = t(981631),
        y = t(176505),
        D = t(124368);
      let G = (0, f.Z)({
        id: "2023-01_forums_non_community",
        label: "Forum non-community",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function x(e) {
        return G.getCurrentConfig({ guildId: e, location: "553713_2" }).enabled;
      }
      function H(e) {
        return (function (e) {
          let n = (0, o.e7)([I.Z], () => I.Z.getGuild(e));
          return (
            G.useExperiment(
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
      function Y(e, n, t) {
        let r = (0, o.e7)([v.Z], () => v.Z.hasLoaded(e.guild_id));
        u.useEffect(() => {
          if (!r) return;
          let u = U.Z.getThreadIds(e.id, n, t),
            i = k.Z.getThreadIdsMissingCounts(e.guild_id, u)
              .filter((e) => (0, O.nU)(e, [P.ZP]))
              .slice(0, 180)
              .map((e) => ({
                threadId: e,
                ackMessageId: P.ZP.getTrackedAckMessageId(e),
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
      function q(e) {
        return (0, o.e7)([v.Z, C.Z], () => {
          let n = i()(v.Z.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => {
              var n;
              return (
                (null === (n = C.Z.getChannel(e)) || void 0 === n
                  ? void 0
                  : n.hasFlag(y.zZ.PINNED)) === !0
              );
            })
            .head();
          return C.Z.getChannel(n);
        });
      }
      let Q = [];
      function W(e) {
        let n = (function (e) {
          let n = null == e ? void 0 : e.parent_id;
          return (0, o.cj)(
            [C.Z],
            () => {
              var e;
              let t = C.Z.getChannel(n);
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
                    : t.filter(p.lm)) && void 0 !== r
            ? r
            : Q;
        }, [n, null == e ? void 0 : e.appliedTags]);
      }
      function X(e, n) {
        let t = (0, o.Wu)([A.default], () =>
          n.map((e) => A.default.getUser(e)).filter(p.lm),
        );
        return (
          (0, c.Z)(() => {
            t.forEach((n) => {
              T.Z.requestMember(e.guild_id, n.id);
            });
          }),
          t
        );
      }
      function z(e, n) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : j.R6.DURATION_AGO,
          r = u.useMemo(() => N.default.extractTimestamp(e.id), [e.id]),
          i = (0, M.Ok)(e),
          o = u.useMemo(() => (0, O.Uw)(n, t), [n, t]);
        return u.useMemo(
          () => (n === l.z.CREATION_DATE ? (0, M.Ye)(r, o) : (0, M.Ye)(i, o)),
          [i, n, r, o],
        );
      }
      function B(e) {
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
      function J(e) {
        let n = null == e ? void 0 : e.defaultReactionEmoji,
          t = (0, o.e7)([s.ZP], () =>
            (null == n ? void 0 : n.emojiId) != null
              ? s.ZP.getUsableCustomEmojiById(n.emojiId)
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
      function V(e) {
        let n = (0, o.e7)([_.Z], () => {
            var n;
            return null !== (n = _.Z.getCount(e.id)) && void 0 !== n ? n : 0;
          }),
          t = (0, E.lE)(n, e.id),
          u = (0, o.e7)([P.ZP], () => (0, O.nU)(e.id, [P.ZP])),
          r = (0, o.e7)([k.Z], () => {
            if (!u) return null;
            let t = k.Z.getCount(e.id);
            if (null == t || !(t > 0)) return "1+";
            {
              let e = Math.min(t, n);
              return e >= D.dg ? "".concat(D.dg, "+") : e;
            }
          });
        return {
          messageCount: n,
          isMaxMessageCount: null != n && "".concat(n) !== t,
          messageCountText: t,
          unreadCount: r,
        };
      }
      function K(e) {
        var n;
        let t = (0, o.e7)([A.default], () => A.default.getUser(e.ownerId)),
          r = (0, o.e7)([b.Z], () => {
            var n;
            return null === (n = b.Z.getMessage(e.id)) || void 0 === n
              ? void 0
              : n.firstMessage;
          }),
          i = (0, m.Sw)(
            null !== (n = null == r ? void 0 : r.author) && void 0 !== n
              ? n
              : t,
            e,
          );
        return (
          u.useEffect(() => {
            null != e.ownerId && T.Z.requestMember(e.guild_id, e.ownerId);
          }, [e.guild_id, e.ownerId]),
          { user: t, author: i }
        );
      }
      function $(e) {
        var n, t;
        let u = A.default.getUser(e.ownerId),
          r =
            null === (n = b.Z.getMessage(e.id)) || void 0 === n
              ? void 0
              : n.firstMessage,
          i = (0, m.ij)(
            null !== (t = null == r ? void 0 : r.author) && void 0 !== t
              ? t
              : u,
            e,
          );
        return { user: u, author: i };
      }
      function ee(e) {
        let {
            firstMessage: n,
            formatInline: t = !0,
            noStyleAndInteraction: r = !0,
          } = e,
          i = (0, g.p)(),
          { hasSpoilerEmbeds: l, content: o } = u.useMemo(
            () =>
              (null == n ? void 0 : n.content) != null && "" !== n.content
                ? (0, Z.ZP)(n, {
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
      function en(e) {
        return (0, o.e7)([S.Z], () => S.Z.can(L.Plq.MANAGE_CHANNELS, e));
      }
      let et = { isNew: !1, hasUnreads: !1 };
      function eu(e) {
        return (0, o.cj)([I.Z, P.ZP], () => {
          var n;
          let t = I.Z.getGuild(
            null !== (n = e.getGuildId()) && void 0 !== n ? n : L.lds,
          );
          return null == t ? et : (0, O.FS)(e, t, [P.ZP]);
        });
      }
      function er(e) {
        return u.useMemo(
          () => (null == e ? "" : null == e.template ? "" : e.template.trim()),
          [e],
        );
      }
      function ei(e) {
        let n = (0, o.e7)([S.Z], () => S.Z.can(L.Plq.MANAGE_THREADS, e));
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
      function el(e, n) {
        let t = ei(
          (0, o.e7)(
            [C.Z],
            () => C.Z.getChannel(null == e ? void 0 : e.parent_id),
            [e],
          ),
        );
        return u.useMemo(() => n.filter((e) => t.includes(e)), [n, t]);
      }
      function eo(e) {
        return (0, o.e7)([S.Z], () => S.Z.can(L.Plq.READ_MESSAGE_HISTORY, e));
      }
      function ea(e) {
        return (0, o.e7)([S.Z], () => S.Z.can(L.Plq.READ_MESSAGE_HISTORY, e));
      }
      function ed(e) {
        let { channelId: n } = e;
        return (0, o.cj)([F.Z], () => ({
          isSearchLoading: F.Z.getSearchLoading(n),
          searchQuery: F.Z.getSearchQuery(n),
          searchResults: F.Z.getSearchResults(n),
        }));
      }
      function ec(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          { isSearchLoading: r, searchQuery: i } = ed({ channelId: e.id }),
          l = eo(e),
          o = u.useRef(null),
          a = u.useRef(new Set());
        u.useEffect(() => {
          if (null == i && null != o.current) {
            R.Z.clearForumSearch(e.id), (o.current = null);
            return;
          }
          if (null == i || 0 === i.length || t) return;
          if (!l) {
            R.Z.clearForumSearch(e.id);
            return;
          }
          if ((o.current === i && a.current === n) || r) return;
          let u = setTimeout(async () => {
            (o.current = i), (a.current = n);
            try {
              await R.Z.searchForumPosts(e.guild_id, e.id, i, n);
            } catch {}
          }, 350);
          return () => clearTimeout(u);
        }, [l, e.guild_id, e.id, t, r, i, n]);
      }
      function es(e, n) {
        return (0, o.e7)([h.Z, P.ZP, C.Z], () => {
          let t = C.Z.getChannel(n);
          if (!(null == t ? void 0 : t.isForumLikeChannel())) return 0;
          let u = h.Z.getActiveJoinedUnreadThreadsForParent(e, n),
            r = h.Z.getActiveUnjoinedUnreadThreadsForParent(e, n),
            i = P.ZP.ackMessageId(n),
            l = 0;
          if (null == i) return l;
          for (let e in u) {
            let n = u[e],
              t = P.ZP.lastMessageId(n.channel.id);
            null != t && t > i && l++;
          }
          for (let e in r) {
            let n = r[e],
              t = P.ZP.lastMessageId(n.id);
            null != t && t > i && l++;
          }
          return l;
        });
      }
      function ef(e) {
        let {
            channel: n,
            sortOrder: t,
            tagFilter: r,
            shouldAutomaticallyAck: i,
          } = e,
          l = (0, o.Wu)([U.Z], () => U.Z.getThreadIds(n.id, t, r)),
          a = es(n.guild_id, n.id),
          c = (0, o.e7)([U.Z], () => i && (a > 0 || U.Z.getCanAckThreads()), [
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
      class h extends (u = d.ZP.Store) {
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
        (i = "displayName") in (r = h)
          ? Object.defineProperty(r, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = l),
        (n.Z = new h(c.Z, {
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
//# sourceMappingURL=827dba4fb3e745e20d56.js.map
