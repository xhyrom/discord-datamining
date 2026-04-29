"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["607"],
  {
    632738(n, e, l) {
      l.d(e, { PQ: () => j, Y0: () => h });
      var i = l(627968);
      l(64700);
      var t = l(503698),
        s = l.n(t),
        r = l(834730),
        a = l(821609),
        c = l(331322),
        o = l(534514),
        d = l(939249),
        x = l(320448),
        u = l(958823);
      function m(n) {
        let { title: e } = n;
        return (0, i.jsx)(r.E, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: e,
        });
      }
      function h(n) {
        let {
          children: e,
          title: l,
          description: t,
          accessibilityRole: s = "none",
          accessibilityLabel: a,
        } = n;
        return (0, i.jsxs)("div", {
          className: u.kZ,
          children: [
            null != l && (0, i.jsx)(m, { title: l }),
            null != t &&
              (0, i.jsx)(r.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: t,
              }),
            (0, i.jsx)("div", {
              className: u.Qs,
              role: s,
              "aria-label": a,
              children: e,
            }),
          ],
        });
      }
      function j(n) {
        let { variant: e, ...l } = n;
        return "clickable" === e
          ? (0, i.jsx)(v, { ...l })
          : (0, i.jsx)(b, { ...l });
      }
      function b(n) {
        let {
            icon: e,
            title: l,
            titleVariant: t = "text-md/semibold",
            titleColor: d = "text-strong",
            description: x,
            descriptionVariant: m = "text-xs/medium",
            descriptionColor: h = "text-subtle",
            iconClassName: j,
            color: b,
            buttonText: v,
            buttonVariant: N = "secondary",
            buttonSize: k = "sm",
            buttonDisabled: g,
            buttonIcon: p,
            buttonIconPosition: f = "start",
            buttonLoading: C,
            onButtonPress: E,
            listType: z = "icon",
            index: B,
            noInset: D = !1,
          } = n,
          Z =
            null != v
              ? (0, i.jsx)(a.$, {
                  variant: N,
                  size: k,
                  text: v,
                  icon: p,
                  iconPosition: f,
                  disabled: g,
                  loading: C,
                  onClick: E,
                  "aria-label": v,
                })
              : void 0;
        return (0, i.jsxs)("div", {
          className: s()(u.nM, { [u.NZ]: D }),
          children: [
            (0, i.jsxs)(c.B, {
              direction: "horizontal",
              gap: 16,
              align: "center",
              children: [
                "numbered" === z && null != B
                  ? (0, i.jsx)(o.D, {
                      variant: "heading-md/semibold",
                      color: "text-brand",
                      className: u.ai,
                      children: B + 1,
                    })
                  : null != e &&
                    (0, i.jsx)("div", {
                      className: u.zc,
                      children: (0, i.jsx)(e, {
                        color: b ?? "currentColor",
                        className: s()(u.Kk, j),
                      }),
                    }),
                (0, i.jsxs)("div", {
                  className: u.FS,
                  children: [
                    (0, i.jsx)(r.E, { variant: t, color: d, children: l }),
                    null != x &&
                      (0, i.jsx)(r.E, { variant: m, color: h, children: x }),
                  ],
                }),
              ],
            }),
            Z,
          ],
        });
      }
      function v(n) {
        let {
          icon: e,
          title: l,
          titleVariant: t = "text-md/semibold",
          titleColor: a = "text-strong",
          description: m,
          descriptionVariant: h = "text-md/medium",
          descriptionColor: j = "text-subtle",
          buttonDisabled: b,
          iconClassName: v,
          color: N,
          buttonIcon: k,
          onButtonPress: g,
          listType: p = "icon",
          index: f,
          noInset: C = !1,
        } = n;
        return (0, i.jsxs)(d.D, {
          onClick: g,
          className: s()(u.nM, u.vk, { [u.NZ]: C, [u.r9]: b }),
          children: [
            (0, i.jsxs)(c.B, {
              direction: "horizontal",
              gap: 16,
              align: "center",
              children: [
                "numbered" === p && null != f
                  ? (0, i.jsx)(o.D, {
                      variant: "heading-md/semibold",
                      color: "text-brand",
                      className: u.ai,
                      children: f + 1,
                    })
                  : null != e &&
                    (0, i.jsx)("div", {
                      className: u.zc,
                      children: (0, i.jsx)(e, {
                        color: N ?? "currentColor",
                        className: s()(u.Kk, v),
                      }),
                    }),
                (0, i.jsxs)(c.B, {
                  direction: "vertical",
                  gap: 4,
                  children: [
                    (0, i.jsx)(r.E, { variant: t, color: a, children: l }),
                    null != m &&
                      (0, i.jsx)(r.E, { variant: h, color: j, children: m }),
                  ],
                }),
              ],
            }),
            null != k ? (0, i.jsx)(k, {}) : (0, i.jsx)(x._, {}),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=607.f7d735891075e03f.js.map
