"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31740"],
  {
    890280: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var o = e(192379),
        s = e(442837),
        l = e(110924),
        u = e(317381);
      function c(n) {
        let {
            applicationId: t,
            channelId: e,
            launchingComponentId: c,
            onSubmissionComplete: r,
          } = n,
          a = (0, s.e7)([u.ZP], () => u.ZP.getLaunchState(t, e)),
          i = null != a && a.isLaunching && a.componentId === c,
          d = (0, l.Z)(i);
        return (
          o.useEffect(() => {
            !i && d && (null == r || r());
          }, [i, d, r]),
          { submitting: i, wasSubmitting: d }
        );
      }
    },
    743161: function (n, t, e) {
      e.r(t);
      var o = e(200651),
        s = e(192379),
        l = e(442837),
        u = e(481060),
        c = e(541099),
        r = e(827498),
        a = e(421591),
        i = e(314734),
        d = e(388032),
        h = e(574455);
      t.default = s.memo(function (n) {
        let { channel: t, ...e } = n,
          f = (0, l.e7)([c.Z], () => c.Z.shouldShowModal());
        return (
          s.useEffect(() => {
            !f && (0, u.closeModalInAllContexts)(i.e9);
          }),
          (0, o.jsx)("span", {
            style: i.u$,
            children: (0, o.jsx)(u.ModalRoot, {
              className: h.root,
              "aria-label": d.intl.string(d.t.shUONj),
              ...e,
              children: (0, o.jsx)(a.Z, { channel: t, entrypoint: r._b.VOICE }),
            }),
          })
        );
      });
    },
    574455: function (n, t, e) {
      n.exports = { root: "root_ebf21e" };
    },
  },
]);
//# sourceMappingURL=e216125cc87c12948307.js.map
