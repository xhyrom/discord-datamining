"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["76888"],
  {
    573276: function (n, e, o) {
      o.r(e), o(315314), o(610138), o(216116), o(78328), o(815648), o(47120);
      var t = o(470079),
        a = o(593473),
        c = o(981631);
      e.default = () => {
        let { redirect: n } = (0, a.parse)(window.location.search);
        return (
          t.useEffect(() => {
            if (null != n && "" !== n) {
              let e = new URL("".concat(window.location.origin).concat(n)),
                o = new URLSearchParams(e.search);
              o.set("handoff_token", "null"),
                (e.search = o.toString()),
                (window.location.href = e.toString());
            } else window.location.href = c.Z5c.LOGIN;
          }, [n]),
          null
        );
      };
    },
  },
]);
//# sourceMappingURL=2c991ab91728434ccf2d.js.map
