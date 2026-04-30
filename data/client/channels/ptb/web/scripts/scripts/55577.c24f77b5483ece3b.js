"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55577"],
  {
    714206(e) {
      e.exports = "/assets/242f4d0069d97414.svg";
    },
    425713(e, a, c) {
      c.d(a, { N: () => n, I: () => b });
      var d = c(788868),
        s = c(714206);
      let t = {
          [d.Ac.PREMIUM_TENURE_1_MONTH]: {
            standard: s,
            ambient:
              "https://cdn.discordapp.com/assets/content/a0837200c383ca7b9e9b2e91358f6871ce8c7f3dd5ba98bbbb86305a205ac6ac.png",
            ambientLarge:
              "https://cdn.discordapp.com/assets/content/d8df65e0c94fd9d1f5028b4b252710fede2f4059d419d32b6f70f253f0c27999.png",
          },
          [d.Ac.PREMIUM_TENURE_3_MONTH]: {
            standard: "/assets/a28ccbd2a55e8413.svg",
            ambient:
              "https://cdn.discordapp.com/assets/content/e97f6077a973b27a4abe03c0c3b0a52cb597beb6a048e84963e66ccd7c5b3f09.png",
            ambientLarge:
              "https://cdn.discordapp.com/assets/content/d0e033cda164abbfc02c39e70afcccb410954ceb63544178608eff0323092ccd.png",
          },
          [d.Ac.PREMIUM_TENURE_6_MONTH]: {
            standard: "/assets/45bb84c5fd852085.svg",
            ambient:
              "https://cdn.discordapp.com/assets/content/1518ef16d0790bcc0d2a409db2e71a25d7b8726703150612a9b06b45219f4066.png",
            ambientLarge:
              "https://cdn.discordapp.com/assets/content/a67846bf44a97eeaf00209a31f30146f2c3685abb207ec89f1aa97404efb7883.png",
          },
          [d.Ac.PREMIUM_TENURE_12_MONTH]: {
            standard: "/assets/d343a0b3439e81d1.svg",
            ambient:
              "https://cdn.discordapp.com/assets/content/cc06a548690262c78f8389f6efec9c70bad9f9ab42062b796da90639e98a0f92.png",
            ambientLarge:
              "https://cdn.discordapp.com/assets/content/10b3c17fdd7d4f454e9c2335a94e48f05a1ed9c23e5f48101e5b9895f8055bb7.png",
          },
          [d.Ac.PREMIUM_TENURE_24_MONTH]: {
            standard: "/assets/bb018f1613e8d528.svg",
            ambient:
              "https://cdn.discordapp.com/assets/content/5c8d9feecf9b0160e9eeb1081c10be271ad7a7df3c47e1b0b8b99af02288f9bc.png",
            ambientLarge:
              "https://cdn.discordapp.com/assets/content/1468c2db0e265bed25bdcae7f6fe586a66493cd7c8cf0ca9228dc8b899e22d1b.png",
          },
          [d.Ac.PREMIUM_TENURE_36_MONTH]: {
            standard: "/assets/11a893d07ab86fe4.svg",
            ambient:
              "https://cdn.discordapp.com/assets/content/46e8d5a4a45dad7f45c494188397d3f59efc3a382f276cc5aee2eb404dbe10f1.png",
            ambientLarge:
              "https://cdn.discordapp.com/assets/content/5d4f18789f059f49d6bb2519692c96e36479ddac46af90030e6bb0473199f0ed.png",
          },
          [d.Ac.PREMIUM_TENURE_60_MONTH]: {
            standard: "/assets/2801bd9ef48c1d87.svg",
            ambient:
              "https://cdn.discordapp.com/assets/content/68f1ae1d703c96eb430767dfffe4357aeace5c503fe89fa03ea73e1c313f8cab.png",
            ambientLarge:
              "https://cdn.discordapp.com/assets/content/ecfc2da5e1ee0563dc487d35e1aad74f083dd2f18e5798028ffbc96f255d6840.png",
          },
          [d.Ac.PREMIUM_TENURE_72_MONTH]: {
            standard: "/assets/c20bd44dcc3b5ecb.svg",
            ambient:
              "https://cdn.discordapp.com/assets/content/c58e6f71e0d8336956b188961d65e7431eb3a2c2edc4709273ef9804a85343a5.png",
            ambientLarge:
              "https://cdn.discordapp.com/assets/content/7fbfa17e5011425252d9ff6c1f286f41560c8acc58cb543b3c895031ffda5289.png",
          },
        },
        n = (e) => (null != e ? t[e] : null);
      function b(e) {
        return t[e];
      }
    },
    30084(e, a, c) {
      c.d(a, { D: () => b });
      var d = c(627968),
        s = c(192308),
        t = c(954571),
        n = c(652215);
      let b = (e) => {
        let { analyticsLocations: a, displayProfile: b, location: f } = e;
        null == f && (f = a[a.length - 1]),
          t.default.track(n.HAw.OPEN_MODAL, {
            type: "Tiered Tenure Badge Details",
            location_stack: a,
            location: f,
            source: f,
          }),
          (0, s.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
              c.e("42105"),
              c.e("49092"),
              c.e("31638"),
              c.e("65065"),
              c.e("63874"),
              c.e("77641"),
            ]).then(c.bind(c, 384048));
            return (a) => (0, d.jsx)(e, { ...a, displayProfile: b });
          });
      };
    },
  },
]);
//# sourceMappingURL=55577.c24f77b5483ece3b.js.map
