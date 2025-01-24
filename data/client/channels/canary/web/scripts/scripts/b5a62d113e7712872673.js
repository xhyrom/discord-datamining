"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31740"],
  {
    890280: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return i;
        },
      });
      var o = e(192379),
        l = e(442837),
        s = e(110924),
        c = e(317381);
      function i(n) {
        let {
            applicationId: t,
            context: e,
            launchingComponentId: i,
            onSubmissionComplete: a,
          } = n,
          u = "channel" === e.type ? e.channel.id : void 0,
          r = (0, l.e7)([c.ZP], () => c.ZP.getLaunchState(t, u)),
          d = null != r && r.isLaunching && r.componentId === i,
          h = (0, s.Z)(d);
        return (
          o.useEffect(() => {
            !d && h && (null == a || a());
          }, [d, h, a]),
          { submitting: d, wasSubmitting: h }
        );
      }
    },
    743161: function (n, t, e) {
      e.r(t);
      var o = e(200651),
        l = e(192379),
        s = e(442837),
        c = e(481060),
        i = e(541099),
        a = e(827498),
        u = e(421591),
        r = e(314734),
        d = e(388032),
        h = e(380165);
      t.default = l.memo(function (n) {
        let { context: t, ...e } = n,
          f = (0, s.e7)([i.Z], () => i.Z.shouldShowModal());
        return (
          l.useEffect(() => {
            !f && (0, c.closeModalInAllContexts)(r.e9);
          }),
          (0, o.jsx)("span", {
            style: r.u$,
            children: (0, o.jsx)(c.ModalRoot, {
              className: h.root,
              "aria-label": d.intl.string(d.t.shUONj),
              size: c.ModalSize.DYNAMIC,
              ...e,
              children: (0, o.jsx)(u.Z, { context: t, entrypoint: a._b.VOICE }),
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
//# sourceMappingURL=b5a62d113e7712872673.js.map
