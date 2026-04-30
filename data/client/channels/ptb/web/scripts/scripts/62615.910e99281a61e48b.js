"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62615"],
  {
    752079(e, s, c) {
      c.d(s, { A: () => u });
      var a = c(627968),
        r = c(64700),
        t = c(17928),
        o = c(775602),
        n = c(607470);
      let d =
          "https://cdn.discordapp.com/assets/content/615334270467aa3d5adc86cc67efee89f8380a87b945a96e89ec2eb37c27993d.png",
        u = (e) => {
          let { className: s, animationState: c = "on" } = e,
            u = (0, t.bG)([o.A], () => o.A.useReducedMotion),
            [p, i] = (0, r.useState)(!1),
            l = (0, r.useRef)(null),
            h = "on" === c || ("on_hover" === c && p);
          return (
            (0, r.useEffect)(() => {
              null !== l.current &&
                (h
                  ? l.current.play()
                  : ((l.current.currentTime = 0), l.current.pause()));
            }, [h]),
            (0, a.jsx)("div", {
              onMouseEnter: "on_hover" === c ? () => i(!0) : void 0,
              onMouseLeave: "on_hover" === c ? () => i(!1) : void 0,
              children: u
                ? (0, a.jsx)("img", { src: d, className: s, alt: "Orb" })
                : (0, a.jsxs)(n.A, {
                    className: s,
                    autoPlay: !0,
                    loop: !0,
                    ref: l,
                    children: [
                      (0, a.jsx)("source", {
                        src: "https://cdn.discordapp.com/assets/content/ccaa60fae2114887bfa2e413be11d62c6d194139ee0f33671825ff06a1050692.webm",
                        type: "video/webm",
                      }),
                      (0, a.jsx)("img", { src: d, className: s, alt: "Orb" }),
                    ],
                  }),
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=62615.910e99281a61e48b.js.map
