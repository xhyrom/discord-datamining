"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["80959"],
  {
    784578(t, e, i) {
      i.d(e, { default: () => g });
      var s = i(627968);
      i(64700);
      var n = i(110259),
        r = i(189213),
        a = i(976860),
        o = i(975571),
        l = i(612200),
        u = i(652215),
        c = i(985018);
      function p() {
        return (
          (0, l.IO)(),
          (0, a.pX)(u.BVt.LOGIN, { source: "existing_user_age_gate_underage" }),
          Promise.resolve()
        );
      }
      function g(t) {
        let { underageMessage: e, transitionState: i } = t;
        return (0, s.jsx)(r.Modal, {
          transitionState: i,
          onClose: p,
          title: c.intl.string(c.t["NR/zrG"]),
          subtitle: c.intl.format(c.t.ukclM1, {
            underageMessage: e ?? c.intl.string(c.t.WqEH4D),
            days: 30,
          }),
          actions: [
            {
              text: c.intl.string(c.t.hvVgAZ),
              onClick: () => {
                window.open(o.A.getArticleURL(u.MVz.AGE_GATE), "_blank");
              },
              variant: "secondary",
            },
            { text: c.intl.string(c.t.szzQ6H), onClick: p },
          ],
          trackingProps: {
            impression: {
              impressionName: n.ImpressionNames.USER_AGE_GATE_UNDERAGE,
              impressionProperties: { existing_user: !0 },
            },
          },
        });
      }
    },
  },
]);
//# sourceMappingURL=80959.7c2a878d6dccb03f.js.map
