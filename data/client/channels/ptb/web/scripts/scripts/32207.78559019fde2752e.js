"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32207"],
  {
    853390(t, e, a) {
      a.d(e, { Ar: () => d, Ay: () => u, fU: () => A });
      var r = a(64700),
        i = a(451988),
        n = a(583846),
        l = a(927813);
      let s = (t) => {
          let e = Math.floor(t) % l.A.Seconds.MINUTE,
            a = Math.floor(t / l.A.Seconds.MINUTE) % l.A.Seconds.MINUTE;
          return {
            hours: Math.floor(t / l.A.Seconds.HOUR),
            minutes: a,
            seconds: e,
          };
        },
        o = (t) => String(t).padStart(2, "0"),
        A = (t) => {
          let { hours: e, minutes: a, seconds: r } = s(t);
          return 0 === e ? `${o(a)}:${o(r)}` : `${o(e)}:${o(a)}:${o(r)}`;
        },
        d = (t) => {
          let { hours: e, minutes: a, seconds: r } = s(t);
          return (0, n.XK)({ hours: e, minutes: a, seconds: r });
        };
      function u(t) {
        let { start: e, end: a } = t,
          [n] = (0, r.useState)(new i.IX()),
          [s, o] = (0, r.useState)(() => Date.now());
        (0, r.useEffect)(
          () => (
            n.start(l.A.Millis.HALF_SECOND, () => o(Date.now())), () => n.stop()
          ),
          [n],
        );
        let A = (a - e) / l.A.Millis.SECOND,
          d = Math.max(Math.min((s - e) / l.A.Millis.SECOND, A), 0);
        return {
          elapsed: d,
          duration: A,
          percentage: Math.max(Math.min(d / A, 1), 0),
        };
      }
    },
    575731(t, e, a) {
      a.d(e, { A: () => A });
      var r = a(17928),
        i = a(427358),
        n = a(153488),
        l = a(287809),
        s = a(607567),
        o = a(652215);
      function A(t) {
        let e = (0, r.yK)(
            [s.Ay],
            () =>
              s.Ay.getVoiceStatesForChannelAlt(t.id, t.guild_id).map((t) => {
                let { user: e } = t;
                return e.id;
              }),
            [t.id, t.guild_id],
          ),
          a = (0, r.bG)([i.A], () => i.A.getUserAffinitiesMap()),
          A = (0, r.bG)([n.A], () => n.A.hasConsented(o.YAq.PERSONALIZATION));
        return (0, r.yK)(
          [l.default],
          () =>
            (A
              ? e.sort(
                  (t, e) =>
                    (a.get(e)?.vcProbability ?? 0) -
                    (a.get(t)?.vcProbability ?? 0),
                )
              : e
            )
              .map((t) => l.default.getUser(t))
              .filter((t) => null != t),
          [A, a, e],
        );
      }
    },
  },
]);
//# sourceMappingURL=32207.78559019fde2752e.js.map
