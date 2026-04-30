"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29413"],
  {
    52074(t, e, l) {
      l.d(e, { U: () => i });
      var a = l(228366),
        u = l(446458),
        s = l(309698);
      function i(t) {
        s.A.hasRequestedStatuses(t) ||
          (a.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: t }),
          u.A.getSocket().requestChannelInfo(t, [
            "status",
            "voice_start_time",
          ]));
      }
    },
    309698(t, e, l) {
      l.d(e, { A: () => E });
      var a = l(478437),
        u = l(17928),
        s = l(228366),
        i = l(446458);
      let n = new Set(),
        d = {};
      function c() {
        n.clear();
      }
      function A(t) {
        n.delete(t.guild.id);
      }
      class C extends u.Ay.Store {
        initialize() {
          this.waitFor(i.A);
        }
        static displayName = "ChannelStatusStore";
        getChannelStatus(t) {
          if (null != t && null != t.guild_id && t.type === a.r.GUILD_VOICE)
            return d[t.guild_id]?.[t.id];
        }
        hasRequestedStatuses(t) {
          return n.has(t);
        }
      }
      let E = new C(s.h, {
        GUILD_CREATE: A,
        GUILD_DELETE: A,
        CONNECTION_RESUMED: c,
        CONNECTION_OPEN: c,
        VOICE_CHANNEL_STATUS_UPDATE: function (t) {
          null == d[t.guildId] && (d[t.guildId] = {}),
            (d[t.guildId][t.id] = t.status);
        },
        CHANNEL_INFO: function (t) {
          let { guildId: e, channels: l } = t;
          for (let { id: t, status: a } of ((d[e] = {}), l)) d[e][t] = a;
        },
        FETCH_CHANNEL_INFO: function (t) {
          let { guildId: e } = t;
          n.add(e);
        },
      });
    },
    353411(t, e, l) {
      l.d(e, { Gq: () => h, J$: () => T, _B: () => f });
      var a = l(64700),
        u = l(17928),
        s = l(451988),
        i = l(475743),
        n = l(495544),
        d = l(927813),
        c = l(427262),
        A = l(655116),
        C = l(160768),
        E = l(341335),
        _ = l(286617),
        o = l(533207),
        r = l(881335),
        p = l(272984);
      let N = 30 * d.A.Millis.SECOND;
      function I(t) {
        let {
            currentUserTrackId: e,
            syncingWithUser: l,
            syncingWithParty: u,
          } = t,
          [n, d] = a.useState(!1),
          [c] = a.useState(() => new s.Ep()),
          A = (0, i.A)(e);
        a.useEffect(() => {
          n && (e !== A || l || u) && (d(!1), c.stop());
        }, [e, A, l, u, n, c]);
        let C = a.useCallback(() => {
            d(!0), c.start(N, () => d(!1));
          }, [c]),
          E = a.useCallback(() => {
            d(!1), c.stop();
          }, [c]);
        return (
          a.useEffect(() => () => c.stop(), [c]),
          { loading: n, startLoading: C, clearLoading: E }
        );
      }
      function S(t, e) {
        return (0, u.cf)(
          [A.A, n.default],
          () => (0, _.A)(A.A, n.default, e, t),
          [t, e],
        );
      }
      function f(t, e, l) {
        let u = S(t, e),
          { notPlayable: s, isCurrentUser: i, playingSameTrack: n } = u,
          { loading: d, startLoading: c, clearLoading: A } = I(u),
          _ = a.useCallback(() => {
            c(), (0, r.A)(u, p.Qp.USER_ACTIVITY_PLAY, l).catch(A);
          }, [u, l, c, A]);
        return {
          label: (0, C.A)(u, p.Qp.USER_ACTIVITY_PLAY),
          tooltip: (0, E.A)(u, p.Qp.USER_ACTIVITY_PLAY),
          disabled: !d && (i || s || n),
          loading: d,
          onClick: _,
          spotifyData: u,
        };
      }
      function T(t, e, l, u) {
        let s = u ?? c.Ay.getName(e),
          i = S(t, e),
          {
            notPlayable: n,
            syncingWithUser: d,
            syncingWithParty: A,
            isCurrentUser: _,
          } = i,
          { loading: r, startLoading: N, clearLoading: f } = I(i),
          T = a.useCallback(() => {
            N(), (0, o.A)(i, p.Qp.USER_ACTIVITY_SYNC, l).catch(f);
          }, [i, l, N, f]);
        return {
          label: (0, C.A)(i, p.Qp.USER_ACTIVITY_SYNC),
          tooltip: (0, E.A)(i, p.Qp.USER_ACTIVITY_SYNC, s),
          disabled: !r && (n || _ || d || A),
          loading: r,
          onClick: T,
          spotifyData: i,
        };
      }
      function h(t, e, l) {
        let u = S(t, e),
          {
            notPlayable: s,
            syncingWithUser: i,
            syncingWithParty: n,
            isCurrentUser: d,
          } = u,
          { loading: c, startLoading: A, clearLoading: _ } = I(u),
          r = a.useCallback(() => {
            A(), (0, o.A)(u, p.Qp.EMBED_SYNC, l).catch(_);
          }, [u, l, A, _]);
        return {
          label: (0, C.A)(u, p.Qp.EMBED_SYNC),
          tooltip: (0, E.A)(u, p.Qp.EMBED_SYNC),
          disabled: !c && (d || i || n || s),
          loading: c,
          onClick: r,
          spotifyData: u,
        };
      }
    },
  },
]);
//# sourceMappingURL=29413.b29a422bed9c2c29.js.map
