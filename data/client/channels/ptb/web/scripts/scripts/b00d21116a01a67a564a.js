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
      var l = e(481060),
        r = e(600164),
        o = e(313201),
        i = e(988158),
        s = e(388032),
        c = e(614460);
      function d(t) {
        let { url: n, onClose: d, transitionState: u } = t,
          x = (0, o.Dt)(),
          { protocol: h, hostname: m, theRestOfTheUrl: b } = (0, i.h)(n);
        return (0, a.jsxs)(l.ModalRoot, {
          transitionState: u,
          "aria-labelledby": x,
          children: [
            (0, a.jsx)("img", { className: c.art, src: e(902623), alt: "" }),
            (0, a.jsx)(l.ModalContent, {
              children: (0, a.jsxs)(r.Z, {
                direction: r.Z.Direction.VERTICAL,
                justify: r.Z.Justify.CENTER,
                children: [
                  (0, a.jsx)(l.Heading, {
                    id: x,
                    variant: "heading-lg/semibold",
                    className: c.title,
                    children: s.intl.string(s.t["2B3wj4"]),
                  }),
                  (0, a.jsx)(l.Text, {
                    variant: "text-md/normal",
                    className: c.body,
                    children: s.intl.format(s.t.jnHyYW, {}),
                  }),
                  (0, a.jsxs)(l.Scroller, {
                    className: c.linkCalloutContainer,
                    children: [
                      (0, a.jsxs)(l.Text, {
                        tag: "span",
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: [h, "//"],
                      }),
                      (0, a.jsx)(l.Text, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: "text-normal",
                        children: m,
                      }),
                      (0, a.jsx)(l.Text, {
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
            (0, a.jsx)(l.ModalFooter, {
              children: (0, a.jsx)(l.Button, {
                type: "button",
                size: l.Button.Sizes.MEDIUM,
                color: l.Button.Colors.BRAND,
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
          return o;
        },
        h: function () {
          return r;
        },
      }),
        e(757143),
        e(47120);
      var a = e(192379),
        l = e(902676);
      function r(t) {
        let { protocol: n, hostname: e } = a.useMemo(
            () => ({ protocol: (0, l.E)(t), hostname: (0, l.F)(t) }),
            [t],
          ),
          r = "".concat(n, "//").concat(e);
        return { protocol: n, hostname: e, theRestOfTheUrl: t.replace(r, "") };
      }
      function o(t) {
        let { url: n, trustUrl: e, onConfirm: l, onCancel: o, onClose: i } = t,
          [s, c] = a.useState(!1),
          { protocol: d, hostname: u, theRestOfTheUrl: x } = r(n),
          h = a.useCallback(() => {
            s && e(n), null == i || i(), l();
          }, [n, s, e, l, i]);
        return {
          protocol: d,
          hostname: u,
          theRestOfTheUrl: x,
          shouldTrustUrl: s,
          setShouldTrustUrl: c,
          handleConfirm: h,
          handleCancel: a.useCallback(() => {
            null == i || i(), o();
          }, [o, i]),
        };
      }
    },
    614460: function (t, n, e) {
      t.exports = {
        title: "title_b71404",
        body: "body_b71404",
        art: "art_b71404",
        linkCalloutContainer: "linkCalloutContainer_b71404",
      };
    },
  },
]);
//# sourceMappingURL=b00d21116a01a67a564a.js.map
