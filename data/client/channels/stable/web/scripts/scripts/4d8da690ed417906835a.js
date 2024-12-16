"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90508"],
  {
    456269: function (e, n, t) {
      t.d(n, {
        AJ: function () {
          return V;
        },
        Bs: function () {
          return B;
        },
        ES: function () {
          return H;
        },
        Eg: function () {
          return G;
        },
        IN: function () {
          return z;
        },
        J$: function () {
          return et;
        },
        MC: function () {
          return K;
        },
        O2: function () {
          return D;
        },
        Vm: function () {
          return er;
        },
        W3: function () {
          return x;
        },
        XZ: function () {
          return ea;
        },
        eV: function () {
          return Q;
        },
        eZ: function () {
          return eo;
        },
        iM: function () {
          return W;
        },
        jR: function () {
          return el;
        },
        kF: function () {
          return Y;
        },
        kn: function () {
          return ei;
        },
        ku: function () {
          return ed;
        },
        mX: function () {
          return $;
        },
        n2: function () {
          return ec;
        },
        nP: function () {
          return J;
        },
        ql: function () {
          return eu;
        },
        r_: function () {
          return ee;
        },
        vP: function () {
          return es;
        },
        xw: function () {
          return X;
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
        h = t(344185),
        v = t(723774),
        E = t(144140),
        _ = t(91159),
        M = t(592125),
        C = t(720202),
        T = t(430824),
        I = t(496675),
        S = t(306680),
        P = t(594174),
        A = t(823379),
        p = t(709054),
        N = t(883429),
        R = t(238349),
        U = t(368844),
        w = t(660189),
        b = t(581036),
        k = t(208970),
        F = t(882252),
        O = t(710352),
        j = t(981631),
        L = t(176505),
        y = t(124368);
      let D = (0, s.Z)({
        id: "2023-01_forums_non_community",
        label: "Forum non-community",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function G(e) {
        return D.getCurrentConfig({ guildId: e, location: "553713_2" }).enabled;
      }
      function x(e) {
        return (function (e) {
          let n = (0, o.e7)([T.Z], () => T.Z.getGuild(e));
          return (
            D.useExperiment(
              { guildId: e, location: "553713_1" },
              { autoTrackExposure: !1 },
            ).enabled ||
            !!(
              (null == n ? void 0 : n.hasFeature(j.oNc.COMMUNITY)) ||
              (null == n ? void 0 : n.hasFeature(j.oNc.INTERNAL_EMPLOYEE_ONLY))
            )
          );
        })(e);
      }
      function H(e, n, t) {
        let r = (0, o.e7)([h.Z], () => h.Z.hasLoaded(e.guild_id));
        u.useEffect(() => {
          if (!r) return;
          let u = R.Z.getThreadIds(e.id, n, t),
            i = b.Z.getThreadIdsMissingCounts(e.guild_id, u)
              .filter((e) => (0, F.nU)(e, [S.ZP]))
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
      function Y(e) {
        return (0, o.e7)([h.Z, M.Z], () => {
          let n = i()(h.Z.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => {
              var n;
              return (
                (null === (n = M.Z.getChannel(e)) || void 0 === n
                  ? void 0
                  : n.hasFlag(L.zZ.PINNED)) === !0
              );
            })
            .head();
          return M.Z.getChannel(n);
        });
      }
      let q = [];
      function Q(e) {
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
                    : t.filter(A.lm)) && void 0 !== r
            ? r
            : q;
        }, [n, null == e ? void 0 : e.appliedTags]);
      }
      function W(e, n) {
        let t = (0, o.Wu)([P.default], () =>
          n.map((e) => P.default.getUser(e)).filter(A.lm),
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
      function X(e, n) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : O.R6.DURATION_AGO,
          r = u.useMemo(() => p.default.extractTimestamp(e.id), [e.id]),
          i = (0, _.Ok)(e),
          o = u.useMemo(() => (0, F.Uw)(n, t), [n, t]);
        return u.useMemo(
          () => (n === l.z.CREATION_DATE ? (0, _.Ye)(r, o) : (0, _.Ye)(i, o)),
          [i, n, r, o],
        );
      }
      function z(e) {
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
      function B(e) {
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
      function J(e) {
        let n = (0, o.e7)([E.Z], () => {
            var n;
            return null !== (n = E.Z.getCount(e.id)) && void 0 !== n ? n : 0;
          }),
          t = (0, v.lE)(n, e.id),
          u = (0, o.e7)([S.ZP], () => (0, F.nU)(e.id, [S.ZP])),
          r = (0, o.e7)([b.Z], () => {
            if (!u) return null;
            let t = b.Z.getCount(e.id);
            if (null == t || !(t > 0)) return "1+";
            {
              let e = Math.min(t, n);
              return e >= y.dg ? "".concat(y.dg, "+") : e;
            }
          });
        return {
          messageCount: n,
          isMaxMessageCount: null != n && "".concat(n) !== t,
          messageCountText: t,
          unreadCount: r,
        };
      }
      function V(e) {
        var n;
        let t = (0, o.e7)([P.default], () => P.default.getUser(e.ownerId)),
          r = (0, o.e7)([w.Z], () => {
            var n;
            return null === (n = w.Z.getMessage(e.id)) || void 0 === n
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
      function K(e) {
        var n, t;
        let u = P.default.getUser(e.ownerId),
          r =
            null === (n = w.Z.getMessage(e.id)) || void 0 === n
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
      function $(e) {
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
          a = (0, U.eL)(n, l),
          d = (0, U.vg)(n, l);
        return {
          hasSpoilerEmbeds: l,
          content: o,
          firstMedia: a,
          firstMediaIsEmbed: d,
        };
      }
      function ee(e) {
        return (0, o.e7)([I.Z], () => I.Z.can(j.Plq.MANAGE_CHANNELS, e));
      }
      let en = { isNew: !1, hasUnreads: !1 };
      function et(e) {
        return (0, o.cj)([T.Z, S.ZP], () => {
          var n;
          let t = T.Z.getGuild(
            null !== (n = e.getGuildId()) && void 0 !== n ? n : j.lds,
          );
          return null == t ? en : (0, F.FS)(e, t, [S.ZP]);
        });
      }
      function eu(e) {
        return u.useMemo(
          () => (null == e ? "" : null == e.template ? "" : e.template.trim()),
          [e],
        );
      }
      function er(e) {
        let n = (0, o.e7)([I.Z], () => I.Z.can(j.Plq.MANAGE_THREADS, e));
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
      function ei(e, n) {
        let t = er(
          (0, o.e7)(
            [M.Z],
            () => M.Z.getChannel(null == e ? void 0 : e.parent_id),
            [e],
          ),
        );
        return u.useMemo(() => n.filter((e) => t.includes(e)), [n, t]);
      }
      function el(e) {
        return (0, o.e7)([I.Z], () => I.Z.can(j.Plq.READ_MESSAGE_HISTORY, e));
      }
      function eo(e) {
        return (0, o.e7)([I.Z], () => I.Z.can(j.Plq.READ_MESSAGE_HISTORY, e));
      }
      function ea(e) {
        let { channelId: n } = e;
        return (0, o.cj)([k.Z], () => ({
          isSearchLoading: k.Z.getSearchLoading(n),
          searchQuery: k.Z.getSearchQuery(n),
          searchResults: k.Z.getSearchResults(n),
        }));
      }
      function ed(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          { isSearchLoading: r, searchQuery: i } = ea({ channelId: e.id }),
          l = el(e),
          o = u.useRef(null),
          a = u.useRef(new Set());
        u.useEffect(() => {
          if (null == i && null != o.current) {
            N.Z.clearForumSearch(e.id), (o.current = null);
            return;
          }
          if (null == i || 0 === i.length || t) return;
          if (!l) {
            N.Z.clearForumSearch(e.id);
            return;
          }
          if ((o.current === i && a.current === n) || r) return;
          let u = setTimeout(async () => {
            (o.current = i), (a.current = n);
            try {
              await N.Z.searchForumPosts(e.guild_id, e.id, i, n);
            } catch {}
          }, 350);
          return () => clearTimeout(u);
        }, [l, e.guild_id, e.id, t, r, i, n]);
      }
      function ec(e, n) {
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
      function es(e) {
        let {
            channel: n,
            sortOrder: t,
            tagFilter: r,
            shouldAutomaticallyAck: i,
          } = e,
          l = (0, o.Wu)([R.Z], () => R.Z.getThreadIds(n.id, t, r)),
          a = ec(n.guild_id, n.id),
          c = (0, o.e7)([R.Z], () => i && (a > 0 || R.Z.getCanAckThreads()), [
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
//# sourceMappingURL=4d8da690ed417906835a.js.map
