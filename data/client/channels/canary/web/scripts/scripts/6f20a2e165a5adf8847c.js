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
        let { url: n, trustUrl: e, onConfirm: l, onCancel: r, onClose: i } = t,
          [c, s] = o.useState(!1),
          { protocol: d, hostname: u, theRestOfTheUrl: x } = a(n),
          h = o.useCallback(() => {
            c && e(n), null == i || i(), l();
          }, [n, c, e, l, i]);
        return {
          protocol: d,
          hostname: u,
          theRestOfTheUrl: x,
          shouldTrustUrl: c,
          setShouldTrustUrl: s,
          handleConfirm: h,
          handleCancel: o.useCallback(() => {
            null == i || i(), r();
          }, [r, i]),
        };
      }
    },
    720553: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return s;
          },
        }),
        e(757143);
      var o = e(200651);
      e(192379);
      var l = e(481060),
        a = e(313201),
        r = e(988158),
        i = e(388032),
        c = e(34154);
      function s(t) {
        let {
            url: n,
            trustUrl: e,
            isProtocol: s,
            onConfirm: d,
            onCancel: u,
            onClose: x,
            transitionState: h,
          } = t,
          m = (0, a.Dt)(),
          {
            protocol: C,
            hostname: p,
            theRestOfTheUrl: k,
            shouldTrustUrl: b,
            setShouldTrustUrl: g,
            handleConfirm: f,
            handleCancel: j,
          } = (0, r.X)({
            url: n,
            trustUrl: e,
            onConfirm: d,
            onCancel: u,
            onClose: x,
          });
        return (0, o.jsxs)(l.ModalRoot, {
          size: l.ModalSize.DYNAMIC,
          transitionState: h,
          "aria-labelledby": m,
          children: [
            (0, o.jsxs)(l.ModalContent, {
              children: [
                (0, o.jsx)(l.Heading, {
                  id: m,
                  variant: "heading-xl/bold",
                  className: c.title,
                  children: i.intl.string(i.t["3w1QGh"]),
                }),
                (0, o.jsx)(l.Text, {
                  className: c.warningText,
                  variant: "text-md/normal",
                  children: s
                    ? i.intl.format(i.t.aCYv19, {})
                    : i.intl.string(i.t.soRxRU),
                }),
                (0, o.jsxs)(l.Scroller, {
                  className: c.linkCalloutContainer,
                  children: [
                    (0, o.jsxs)(l.Text, {
                      tag: "span",
                      variant: s ? "text-md/semibold" : "text-md/normal",
                      color: s ? "text-normal" : "text-muted",
                      children: [C, "//"],
                    }),
                    (0, o.jsx)(l.Text, {
                      tag: "span",
                      variant: s ? "text-md/normal" : "text-md/semibold",
                      color: s ? "text-muted" : "text-normal",
                      children: p,
                    }),
                    (0, o.jsx)(l.Text, {
                      tag: "span",
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: k,
                    }),
                  ],
                }),
                (0, o.jsx)(l.Checkbox, {
                  className: c.checkbox,
                  type: l.Checkbox.Types.INVERTED,
                  value: b,
                  onChange: (t, n) => g(n),
                  children: (0, o.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: s
                      ? i.intl.format(i.t["haA+X1"], {
                          protocol: C.replace(":", ""),
                        })
                      : i.intl.format(i.t.ZgXDsL, { domain: p }),
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
                  onClick: f,
                  children: s
                    ? i.intl.string(i.t.COq6kp)
                    : i.intl.string(i.t.NcJfJC),
                }),
                (0, o.jsx)(l.Button, {
                  type: "button",
                  size: l.Button.Sizes.MEDIUM,
                  color: l.Button.Colors.PRIMARY,
                  onClick: j,
                  look: l.ButtonLooks.LINK,
                  children: i.intl.string(i.t["/g10LC"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    34154: function (t, n, e) {
      t.exports = {
        title: "title_dd48c5",
        warningText: "warningText_dd48c5",
        linkCalloutContainer: "linkCalloutContainer_dd48c5",
        checkbox: "checkbox_dd48c5",
      };
    },
  },
]);
//# sourceMappingURL=6f20a2e165a5adf8847c.js.map
