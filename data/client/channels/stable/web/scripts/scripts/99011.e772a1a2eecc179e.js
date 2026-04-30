"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99011"],
  {
    435470(e, t, n) {
      n.d(t, {
        $I: () => q,
        An: () => eu,
        Ck: () => z,
        Eh: () => K,
        Hv: () => ee,
        Mw: () => P,
        O3: () => er,
        OT: () => et,
        S4: () => X,
        V3: () => ed,
        X5: () => W,
        cA: () => el,
        ed: () => ea,
        gk: () => $,
        k6: () => Q,
        kn: () => V,
        kt: () => B,
        lQ: () => Y,
        o7: () => ei,
        tY: () => J,
        yz: () => H,
        zt: () => en,
      });
      var r = n(64700),
        u = n(735438),
        l = n.n(u),
        i = n(602137),
        a = n(17928),
        d = n(228366),
        s = n(334738),
        o = n(964486),
        c = n(159273),
        A = n(465364),
        f = n(763754),
        g = n(376708),
        h = n(695633),
        m = n(970278),
        M = n(321045),
        _ = n(456874),
        T = n(707539),
        y = n(734057),
        I = n(860071),
        b = n(71393),
        E = n(576705),
        C = n(222823),
        p = n(287809),
        G = n(403362),
        S = n(935208),
        R = n(919577),
        k = n(207777),
        U = n(256265),
        j = n(969043),
        w = n(474399),
        N = n(768953),
        O = n(767581),
        F = n(253913),
        v = n(652215),
        x = n(746080),
        D = n(37411);
      function H(e, t, n, u) {
        let l = (0, a.bG)([m.A], () => m.A.hasLoaded(e.guild_id));
        r.useEffect(() => {
          if (!l) return;
          let r = k.A.getThreadIds(e.id, t, n, u),
            i = w.A.getThreadIdsMissingCounts(e.guild_id, r)
              .filter((e) => (0, O.yz)(e, [C.Ay]))
              .slice(0, 180)
              .map((e) => ({
                threadId: e,
                ackMessageId: C.Ay.getTrackedAckMessageId(e),
              }));
          i.length > 0 &&
            d.h.dispatch({
              type: "REQUEST_FORUM_UNREADS",
              guildId: e.guild_id,
              channelId: e.id,
              threads: i,
            });
        }, [e.id, e.guild_id, l, n, t, u]);
      }
      function K(e) {
        return (0, a.bG)([m.A, y.A], () => {
          let t = l()(m.A.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => y.A.getChannel(e)?.hasFlag(x.lx.PINNED) === !0)
            .head();
          return y.A.getChannel(t);
        });
      }
      let L = [];
      function B(e) {
        let t,
          n =
            ((t = e?.parent_id),
            (0, a.cf)(
              [y.A],
              () => {
                let e = y.A.getChannel(t);
                return (e?.availableTags ?? []).reduce(
                  (e, t) => ({ ...e, [t.id]: t }),
                  {},
                );
              },
              [t],
            ));
        return r.useMemo(() => {
          let t = e?.appliedTags?.map((e) => n[e])?.filter(G.Vq) ?? L;
          return e?.isModeratorReportChannel() ? (0, g.Yj)(t) : t;
        }, [n, e]);
      }
      function q(e, t) {
        let n = (0, a.yK)([p.default], () =>
          t.map((e) => p.default.getUser(e)).filter(G.Vq),
        );
        return (
          (0, o.Ay)(() => {
            n.forEach((t) => {
              I.A.requestMember(e.guild_id, t.id);
            });
          }),
          n
        );
      }
      function P(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : F.EG.DURATION_AGO,
          u = r.useMemo(() => S.default.extractTimestamp(e.id), [e.id]),
          l = (0, T.JO)(e),
          a = r.useMemo(() => (0, O.mf)(t, n), [t, n]);
        return r.useMemo(
          () => (t === i.T.CREATION_DATE ? (0, T.aK)(u, a) : (0, T.aK)(l, a)),
          [l, t, u, a],
        );
      }
      function Y(e) {
        return r.useMemo(() => {
          let t = e?.reactions ?? [];
          if (0 !== t.length)
            return l().orderBy(
              t,
              [(e) => e.count + e.burst_count, (e) => e.burst_count],
              ["desc", "desc"],
            )[0];
        }, [e?.reactions]);
      }
      function z(e) {
        let t = e?.defaultReactionEmoji,
          n = (0, a.bG)([c.Ay], () =>
            t?.emojiId != null
              ? c.Ay.getUsableCustomEmojiById(t.emojiId)
              : null,
          );
        return null == t
          ? null
          : null != t.emojiId && null != n
            ? { id: t.emojiId, name: n.name, animated: n.animated }
            : null != t.emojiName
              ? { id: t.emojiId, name: t.emojiName, animated: !1 }
              : null;
      }
      function Q(e) {
        let t = (0, a.bG)([_.A], () => _.A.getCount(e.id) ?? 0),
          n = (0, M.Mw)(t, e.id),
          r = (0, a.bG)([C.Ay], () => (0, O.yz)(e.id, [C.Ay])),
          u = (0, a.bG)([w.A], () => {
            if (!r) return null;
            let n = w.A.getCount(e.id);
            if (null == n || !(n > 0)) return "1+";
            {
              let e = Math.min(n, t);
              return e >= D.oR ? `${D.oR}+` : e;
            }
          });
        return {
          messageCount: t,
          isMaxMessageCount: null != t && `${t}` !== n,
          messageCountText: n,
          unreadCount: u,
        };
      }
      function V(e) {
        let t = (0, a.bG)([p.default], () => p.default.getUser(e.ownerId)),
          n = (0, a.bG)([j.A], () => j.A.getMessage(e.id)?.firstMessage),
          u = (0, f.d8)(n?.author ?? t, e);
        return (
          r.useEffect(() => {
            null != e.ownerId && I.A.requestMember(e.guild_id, e.ownerId);
          }, [e.guild_id, e.ownerId]),
          { user: t, author: u }
        );
      }
      function J(e) {
        let t = p.default.getUser(e.ownerId),
          n = j.A.getMessage(e.id)?.firstMessage,
          r = (0, f.FT)(n?.author ?? t, e);
        return { user: t, author: r };
      }
      function $(e) {
        let {
            firstMessage: t,
            formatInline: n = !0,
            noStyleAndInteraction: u = !0,
            hasUnreads: l = !0,
          } = e,
          i = l ? "text-default" : "text-muted",
          { hasSpoilerEmbeds: a, content: d } = r.useMemo(
            () =>
              t?.content != null && "" !== t.content
                ? (0, A.Ay)(t, {
                    formatInline: n,
                    noStyleAndInteraction: u,
                    allowHeading: !0,
                    allowList: !0,
                    textColor: i,
                  })
                : { hasSpoilerEmbeds: !1, content: null },
            [t, n, u, i],
          ),
          s = (0, U.Ky)(t, a),
          o = (0, U.L_)(t, a);
        return {
          hasSpoilerEmbeds: a,
          content: d,
          firstMedia: s,
          firstMediaIsEmbed: o,
        };
      }
      function X(e) {
        return (0, a.bG)([E.A], () => E.A.can(v.xBc.MANAGE_CHANNELS, e));
      }
      let Z = { isNew: !1, hasUnreads: !1 };
      function W(e) {
        return (0, a.cf)([b.A, C.Ay], () => {
          let t = b.A.getGuild(e.getGuildId() ?? v.dJq);
          return null == t ? Z : (0, O.U1)(e, t, [C.Ay]);
        });
      }
      function ee(e) {
        return r.useMemo(
          () => (null == e || null == e.template ? "" : e.template.trim()),
          [e],
        );
      }
      function et(e) {
        let t = (0, a.bG)([E.A], () => E.A.can(v.xBc.MANAGE_THREADS, e));
        return r.useMemo(() => {
          let n = [...(e?.availableTags ?? [])];
          return t || (n = n.filter((e) => !e.moderated)), n;
        }, [t, e?.availableTags]);
      }
      function en(e, t) {
        let n = et((0, a.bG)([y.A], () => y.A.getChannel(e?.parent_id), [e]));
        return r.useMemo(() => {
          let r = t.filter((e) => n.includes(e));
          return e?.isModeratorReportChannel() ? (0, g.Yj)(r) : r;
        }, [t, n, e]);
      }
      function er(e) {
        return (0, a.bG)([E.A], () => E.A.can(v.xBc.READ_MESSAGE_HISTORY, e));
      }
      function eu(e) {
        return (0, a.bG)([E.A], () => E.A.can(v.xBc.READ_MESSAGE_HISTORY, e));
      }
      function el(e) {
        let { channelId: t } = e;
        return (0, a.cf)([N.A], () => ({
          isSearchLoading: N.A.getSearchLoading(t),
          searchQuery: N.A.getSearchQuery(t),
          searchResults: N.A.getSearchResults(t),
        }));
      }
      function ei(e, t, n) {
        let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          { isSearchLoading: l, searchQuery: i } = el({ channelId: e.id }),
          a = er(e),
          d = r.useRef(null),
          s = r.useRef(new Set());
        r.useEffect(() => {
          if (null == i && null != d.current) {
            R.A.clearForumSearch(e.id), (d.current = null);
            return;
          }
          if (null == i || 0 === i.length || u) return;
          if (!a) return void R.A.clearForumSearch(e.id);
          if ((d.current === i && s.current === t) || l) return;
          let r = setTimeout(async () => {
            (d.current = i), (s.current = t);
            try {
              await R.A.searchForumPosts(e.guild_id, e.id, i, t, n);
            } catch {}
          }, 350);
          return () => clearTimeout(r);
        }, [a, e.guild_id, e.id, u, l, i, t, n]);
      }
      function ea(e, t) {
        return (0, a.bG)([h.A, C.Ay, y.A], () => {
          let n = y.A.getChannel(t);
          if (!n?.isForumLikeChannel()) return 0;
          let r = h.A.getActiveJoinedUnreadThreadsForParent(e, t),
            u = h.A.getActiveUnjoinedUnreadThreadsForParent(e, t),
            l = C.Ay.ackMessageId(t),
            i = 0;
          if (null == l) return i;
          for (let e in r) {
            let t = r[e],
              n = C.Ay.lastMessageId(t.channel.id);
            null != n && n > l && i++;
          }
          for (let e in u) {
            let t = u[e],
              n = C.Ay.lastMessageId(t.id);
            null != n && n > l && i++;
          }
          return i;
        });
      }
      function ed(e) {
        let {
            channel: t,
            sortOrder: n,
            tagFilter: u,
            tagSetting: l,
            shouldAutomaticallyAck: i,
          } = e,
          d = (0, a.yK)([k.A], () => k.A.getThreadIds(t.id, n, u, l)),
          o = ea(t.guild_id, t.id),
          c = (0, a.bG)([k.A], () => i && (o > 0 || k.A.getCanAckThreads()), [
            i,
            o,
          ]);
        return (
          r.useEffect(() => {
            c &&
              (0, s.hS)(t, {
                object: v.ZSU.ACK_FORUM_ACTIVE_THREADS,
                objectType: v.AnalyticsObjectTypes.ACK_AUTOMATIC,
              });
          }, [t, c]),
          d
        );
      }
    },
  },
]);
//# sourceMappingURL=99011.e772a1a2eecc179e.js.map
