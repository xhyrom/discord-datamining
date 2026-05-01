"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29413"],
  {
    52074(t, e, a) {
      a.d(e, { U: () => c });
      var l = a(228366),
        s = a(446458);
      function c(t) {
        l.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: t }),
          s.A.getSocket().requestChannelInfo(t, ["status", "voice_start_time"]);
      }
    },
    353411(t, e, a) {
      a.d(e, { Gq: () => T, J$: () => b, _B: () => I });
      var l = a(64700),
        s = a(17928),
        c = a(451988),
        u = a(475743),
        A = a(495544),
        p = a(927813),
        n = a(427262),
        C = a(655116),
        i = a(160768),
        _ = a(341335),
        o = a(286617),
        r = a(533207),
        E = a(881335),
        S = a(272984);
      let d = 30 * p.A.Millis.SECOND;
      function Y(t) {
        let {
            currentUserTrackId: e,
            syncingWithUser: a,
            syncingWithParty: s,
          } = t,
          [A, p] = l.useState(!1),
          [n] = l.useState(() => new c.Ep()),
          C = (0, u.A)(e);
        l.useEffect(() => {
          A && (e !== C || a || s) && (p(!1), n.stop());
        }, [e, C, a, s, A, n]);
        let i = l.useCallback(() => {
            p(!0), n.start(d, () => p(!1));
          }, [n]),
          _ = l.useCallback(() => {
            p(!1), n.stop();
          }, [n]);
        return (
          l.useEffect(() => () => n.stop(), [n]),
          { loading: A, startLoading: i, clearLoading: _ }
        );
      }
      function f(t, e) {
        return (0, s.cf)(
          [C.A, A.default],
          () => (0, o.A)(C.A, A.default, e, t),
          [t, e],
        );
      }
      function I(t, e, a) {
        let s = f(t, e),
          { notPlayable: c, isCurrentUser: u, playingSameTrack: A } = s,
          { loading: p, startLoading: n, clearLoading: C } = Y(s),
          o = l.useCallback(() => {
            n(), (0, E.A)(s, S.Qp.USER_ACTIVITY_PLAY, a).catch(C);
          }, [s, a, n, C]);
        return {
          label: (0, i.A)(s, S.Qp.USER_ACTIVITY_PLAY),
          tooltip: (0, _.A)(s, S.Qp.USER_ACTIVITY_PLAY),
          disabled: !p && (u || c || A),
          loading: p,
          onClick: o,
          spotifyData: s,
        };
      }
      function b(t, e, a, s) {
        let c = s ?? n.Ay.getName(e),
          u = f(t, e),
          {
            notPlayable: A,
            syncingWithUser: p,
            syncingWithParty: C,
            isCurrentUser: o,
          } = u,
          { loading: E, startLoading: d, clearLoading: I } = Y(u),
          b = l.useCallback(() => {
            d(), (0, r.A)(u, S.Qp.USER_ACTIVITY_SYNC, a).catch(I);
          }, [u, a, d, I]);
        return {
          label: (0, i.A)(u, S.Qp.USER_ACTIVITY_SYNC),
          tooltip: (0, _.A)(u, S.Qp.USER_ACTIVITY_SYNC, c),
          disabled: !E && (A || o || p || C),
          loading: E,
          onClick: b,
          spotifyData: u,
        };
      }
      function T(t, e, a) {
        let s = f(t, e),
          {
            notPlayable: c,
            syncingWithUser: u,
            syncingWithParty: A,
            isCurrentUser: p,
          } = s,
          { loading: n, startLoading: C, clearLoading: o } = Y(s),
          E = l.useCallback(() => {
            C(), (0, r.A)(s, S.Qp.EMBED_SYNC, a).catch(o);
          }, [s, a, C, o]);
        return {
          label: (0, i.A)(s, S.Qp.EMBED_SYNC),
          tooltip: (0, _.A)(s, S.Qp.EMBED_SYNC),
          disabled: !n && (p || u || A || c),
          loading: n,
          onClick: E,
          spotifyData: s,
        };
      }
    },
  },
]);
//# sourceMappingURL=29413.2ca04fe2e7848156.js.map
