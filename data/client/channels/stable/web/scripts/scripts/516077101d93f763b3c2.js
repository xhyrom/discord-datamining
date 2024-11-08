"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2435"],
  {
    902623: function (t) {
      t.exports = "/assets/90dfb13ab0e22d819b53.svg";
    },
    821606: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return d;
          },
        });
      var a = e(200651);
      e(192379);
      var r = e(481060),
        o = e(600164),
        i = e(313201),
        l = e(988158),
        s = e(388032),
        c = e(437900);
      function d(t) {
        let { url: n, onClose: d, transitionState: u } = t,
          x = (0, i.Dt)(),
          { protocol: h, hostname: m, theRestOfTheUrl: b } = (0, l.h)(n);
        return (0, a.jsxs)(r.ModalRoot, {
          transitionState: u,
          "aria-labelledby": x,
          children: [
            (0, a.jsx)("img", { className: c.art, src: e(902623), alt: "" }),
            (0, a.jsx)(r.ModalContent, {
              children: (0, a.jsxs)(o.Z, {
                direction: o.Z.Direction.VERTICAL,
                justify: o.Z.Justify.CENTER,
                children: [
                  (0, a.jsx)(r.Heading, {
                    id: x,
                    variant: "heading-lg/semibold",
                    className: c.title,
                    children: s.intl.string(s.t["2B3wj4"]),
                  }),
                  (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    className: c.body,
                    children: s.intl.format(s.t.jnHyYW, {}),
                  }),
                  (0, a.jsxs)(r.Scroller, {
                    className: c.linkCalloutContainer,
                    children: [
                      (0, a.jsxs)(r.Text, {
                        tag: "span",
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: [h, "//"],
                      }),
                      (0, a.jsx)(r.Text, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: "text-normal",
                        children: m,
                      }),
                      (0, a.jsx)(r.Text, {
                        tag: "span",
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: b,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)(r.ModalFooter, {
              children: (0, a.jsx)(r.Button, {
                type: "button",
                size: r.Button.Sizes.MEDIUM,
                color: r.Button.Colors.BRAND,
                onClick: d,
                children: s.intl.string(s.t["/g10LC"]),
              }),
            }),
          ],
        });
      }
    },
    988158: function (t, n, e) {
      e.d(n, {
        X: function () {
          return i;
        },
        h: function () {
          return o;
        },
      }),
        e(757143),
        e(47120);
      var a = e(192379),
        r = e(902676);
      function o(t) {
        let { protocol: n, hostname: e } = a.useMemo(
            () => ({ protocol: (0, r.E)(t), hostname: (0, r.F)(t) }),
            [t],
          ),
          o = "".concat(n, "//").concat(e);
        return { protocol: n, hostname: e, theRestOfTheUrl: t.replace(o, "") };
      }
      function i(t) {
        let { url: n, trustUrl: e, onConfirm: r, onClose: i } = t,
          [l, s] = a.useState(!1),
          { protocol: c, hostname: d, theRestOfTheUrl: u } = o(n),
          x = a.useCallback(() => {
            l && e(n), null == i || i(), r();
          }, [n, l, e, r, i]);
        return {
          protocol: c,
          hostname: d,
          theRestOfTheUrl: u,
          shouldTrustUrl: l,
          setShouldTrustUrl: s,
          handleConfirm: x,
        };
      }
    },
    437900: function (t, n, e) {
      t.exports = {
        title: "title_b71404",
        body: "body_b71404",
        art: "art_b71404",
        linkCalloutContainer: "linkCalloutContainer_b71404",
      };
    },
  },
]);
//# sourceMappingURL=516077101d93f763b3c2.js.map
