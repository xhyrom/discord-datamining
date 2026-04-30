"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31145"],
  {
    175248(t, s, e) {
      e.d(s, { E: () => x, QuestRewardModalUnverified: () => p });
      var a = e(627968),
        i = e(64700),
        n = e(772707),
        r = e(17928),
        o = e(289873),
        l = e(885574),
        d = e(834730),
        u = e(192308),
        c = e(830215),
        g = e(287809),
        v = e(710969),
        m = e(985018),
        f = e(105247),
        h = e(37229);
      function p(t) {
        let { transitionState: s, onClose: e } = t,
          u = (0, r.bG)([g.default], () => g.default.getCurrentUser()?.email),
          [p, x] = i.useState({ status: "unknown" });
        i.useEffect(() => {
          x({ status: "loading" }),
            c.A.verifyResend().then(
              () => x({ status: "success" }),
              (t) => {
                x({ status: "error" }),
                  (0, v.RF)(t, {
                    tags: { location: "QuestsRewardModalUnverified" },
                  });
              },
            );
        }, []);
        let k =
          "error" === p.status
            ? m.intl.string(m.t.vjying)
            : "success" === p.status
              ? m.intl.format(m.t.qP5xYc, {
                  emailAddress: u,
                  emailAddressLink: `mailto:${u}`,
                })
              : void 0;
        return (0, a.jsxs)(n.k, {
          transitionState: s,
          onClose: e,
          graphic: "loading" === p.status ? void 0 : { type: "image", src: h },
          title: "loading" === p.status ? void 0 : m.intl.string(m.t.c8eASM),
          subtitle: k,
          actions:
            "loading" === p.status
              ? void 0
              : [
                  {
                    variant: "secondary",
                    text: m.intl.string(m.t.cpT0Cq),
                    onClick: e,
                  },
                ],
          children: [
            "loading" === p.status && (0, a.jsx)(o.y, {}),
            "success" === p.status &&
              (0, a.jsxs)("div", {
                className: f.d,
                children: [
                  (0, a.jsx)(l.m, {
                    size: "xs",
                    color: "currentColor",
                    className: f.q,
                  }),
                  (0, a.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: m.intl.string(m.t.yb7itQ),
                  }),
                ],
              }),
          ],
        });
      }
      function x() {
        (0, u.openModalLazy)(async () => {
          let { QuestRewardModalUnverified: t } = await Promise.resolve().then(
            e.bind(e, 175248),
          );
          return (s) => (0, a.jsx)(t, { ...s });
        });
      }
    },
  },
]);
//# sourceMappingURL=31145.1567860125e0e1f6.js.map
