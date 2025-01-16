"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31740"],
  {
    890280: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = e(192379),
        s = e(442837),
        l = e(110924),
        u = e(317381);
      function a(n) {
        let {
            applicationId: t,
            channelId: e,
            launchingComponentId: a,
            onSubmissionComplete: c,
          } = n,
          i = (0, s.e7)([u.ZP], () => u.ZP.getLaunchState(t, e)),
          r = null != i && i.isLaunching && i.componentId === a,
          d = (0, l.Z)(r);
        return (
          o.useEffect(() => {
            !r && d && (null == c || c());
          }, [r, d, c]),
          { submitting: r, wasSubmitting: d }
        );
      }
    },
    743161: function (n, t, e) {
      e.r(t);
      var o = e(200651),
        s = e(192379),
        l = e(442837),
        u = e(481060),
        a = e(541099),
        c = e(827498),
        i = e(421591),
        r = e(314734),
        d = e(388032),
        h = e(380165);
      t.default = s.memo(function (n) {
        let { channel: t, ...e } = n,
          f = (0, l.e7)([a.Z], () => a.Z.shouldShowModal());
        return (
          s.useEffect(() => {
            !f && (0, u.closeModalInAllContexts)(r.e9);
          }),
          (0, o.jsx)("span", {
            style: r.u$,
            children: (0, o.jsx)(u.ModalRoot, {
              className: h.root,
              "aria-label": d.intl.string(d.t.shUONj),
              size: u.ModalSize.DYNAMIC,
              ...e,
              children: (0, o.jsx)(i.Z, { channel: t, entrypoint: c._b.VOICE }),
            }),
          })
        );
      });
    },
    380165: function (n, t, e) {
      n.exports = { root: "root_ebf21e" };
    },
  },
]);
//# sourceMappingURL=84cd0b283a9b9d617d54.js.map
