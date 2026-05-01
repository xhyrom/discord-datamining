"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59848"],
  {
    698141(n, t, e) {
      e.d(t, { A: () => p });
      var i = e(64700),
        u = e(17928),
        a = e(475743),
        c = e(933958),
        h = e(429913),
        s = e(91242),
        l = e(375802);
      function p(n) {
        let {
            applicationId: t,
            context: e,
            launchingComponentId: p,
            onSubmissionComplete: d,
          } = n,
          r = (0, h.h)(t),
          o = (0, u.bG)([c.Ay], () =>
            c.Ay.getLaunchState(
              t,
              "channel" === e.type ? e.channel.id : void 0,
            ),
          ),
          A = (0, u.bG)([s.A], () => s.A.isLaunchingFrame(t)),
          b =
            null != r && (0, l.x)(r)
              ? A
              : null != o && o.isLaunching && o.componentId === p,
          g = (0, a.A)(b);
        return (
          i.useEffect(() => {
            !b && g && d?.();
          }, [b, g, d]),
          { submitting: b, wasSubmitting: g ?? null }
        );
      }
    },
  },
]);
//# sourceMappingURL=59848.6cca4bd28a983622.js.map
