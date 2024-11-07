"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85668"],
  {
    988158: function (t, n, e) {
      e.d(n, {
        X: function () {
          return r;
        },
        h: function () {
          return a;
        },
      }),
        e(757143),
        e(47120);
      var o = e(192379),
        l = e(902676);
      function a(t) {
        let { protocol: n, hostname: e } = o.useMemo(
            () => ({ protocol: (0, l.E)(t), hostname: (0, l.F)(t) }),
            [t],
          ),
          a = "".concat(n, "//").concat(e);
        return { protocol: n, hostname: e, theRestOfTheUrl: t.replace(a, "") };
      }
      function r(t) {
        let { url: n, trustUrl: e, onConfirm: l, onClose: r } = t,
          [i, s] = o.useState(!1),
          { protocol: c, hostname: d, theRestOfTheUrl: x } = a(n),
          u = o.useCallback(() => {
            i && e(n), null == r || r(), l();
          }, [n, i, e, l, r]);
        return {
          protocol: c,
          hostname: d,
          theRestOfTheUrl: x,
          shouldTrustUrl: i,
          setShouldTrustUrl: s,
          handleConfirm: u,
        };
      }
    },
    720553: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return c;
          },
        }),
        e(757143);
      var o = e(200651);
      e(192379);
      var l = e(481060),
        a = e(313201),
        r = e(988158),
        i = e(388032),
        s = e(952430);
      function c(t) {
        let {
            url: n,
            trustUrl: e,
            isProtocol: c,
            onConfirm: d,
            onClose: x,
            transitionState: u,
          } = t,
          h = (0, a.Dt)(),
          {
            protocol: m,
            hostname: C,
            theRestOfTheUrl: p,
            shouldTrustUrl: k,
            setShouldTrustUrl: g,
            handleConfirm: b,
          } = (0, r.X)({ url: n, trustUrl: e, onConfirm: d, onClose: x });
        return (0, o.jsxs)(l.ModalRoot, {
          size: l.ModalSize.DYNAMIC,
          transitionState: u,
          "aria-labelledby": h,
          children: [
            (0, o.jsxs)(l.ModalContent, {
              children: [
                (0, o.jsx)(l.Heading, {
                  id: h,
                  variant: "heading-xl/bold",
                  className: s.title,
                  children: i.intl.string(i.t["3w1QGh"]),
                }),
                (0, o.jsx)(l.Text, {
                  className: s.warningText,
                  variant: "text-md/normal",
                  children: c
                    ? i.intl.format(i.t.aCYv19, {})
                    : i.intl.string(i.t.soRxRU),
                }),
                (0, o.jsxs)(l.Scroller, {
                  className: s.linkCalloutContainer,
                  children: [
                    (0, o.jsxs)(l.Text, {
                      tag: "span",
                      variant: c ? "text-md/semibold" : "text-md/normal",
                      color: c ? "text-normal" : "text-muted",
                      children: [m, "//"],
                    }),
                    (0, o.jsx)(l.Text, {
                      tag: "span",
                      variant: c ? "text-md/normal" : "text-md/semibold",
                      color: c ? "text-muted" : "text-normal",
                      children: C,
                    }),
                    (0, o.jsx)(l.Text, {
                      tag: "span",
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: p,
                    }),
                  ],
                }),
                (0, o.jsx)(l.Checkbox, {
                  className: s.checkbox,
                  type: l.Checkbox.Types.INVERTED,
                  value: k,
                  onChange: (t, n) => g(n),
                  children: (0, o.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: c
                      ? i.intl.format(i.t["haA+X1"], {
                          protocol: m.replace(":", ""),
                        })
                      : i.intl.format(i.t.ZgXDsL, { domain: C }),
                  }),
                }),
              ],
            }),
            (0, o.jsxs)(l.ModalFooter, {
              children: [
                (0, o.jsx)(l.Button, {
                  type: "button",
                  size: l.Button.Sizes.MEDIUM,
                  color: l.Button.Colors.BRAND,
                  onClick: b,
                  children: c
                    ? i.intl.string(i.t.COq6kp)
                    : i.intl.string(i.t.NcJfJC),
                }),
                (0, o.jsx)(l.Button, {
                  type: "button",
                  size: l.Button.Sizes.MEDIUM,
                  color: l.Button.Colors.PRIMARY,
                  onClick: x,
                  look: l.ButtonLooks.LINK,
                  children: i.intl.string(i.t["/g10LC"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    952430: function (t, n, e) {
      t.exports = {
        title: "title_dd48c5",
        warningText: "warningText_dd48c5",
        linkCalloutContainer: "linkCalloutContainer_dd48c5",
        checkbox: "checkbox_dd48c5",
      };
    },
  },
]);
//# sourceMappingURL=7e6648ac40de17429dd9.js.map
