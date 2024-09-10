"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85668"],
  {
    988158: function (t, e, n) {
      n.d(e, {
        X: function () {
          return l;
        },
        h: function () {
          return s;
        },
      }),
        n(757143),
        n(47120);
      var o = n(470079),
        a = n(902676);
      function s(t) {
        let { protocol: e, hostname: n } = o.useMemo(
            () => ({ protocol: (0, a.E)(t), hostname: (0, a.F)(t) }),
            [t],
          ),
          s = "".concat(e, "//").concat(n);
        return { protocol: e, hostname: n, theRestOfTheUrl: t.replace(s, "") };
      }
      function l(t) {
        let { url: e, trustUrl: n, onConfirm: a, onClose: l } = t,
          [r, i] = o.useState(!1),
          { protocol: c, hostname: d, theRestOfTheUrl: _ } = s(e),
          u = o.useCallback(() => {
            r && n(e), null == l || l(), a();
          }, [e, r, n, a, l]);
        return {
          protocol: c,
          hostname: d,
          theRestOfTheUrl: _,
          shouldTrustUrl: r,
          setShouldTrustUrl: i,
          handleConfirm: u,
        };
      }
    },
    720553: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return c;
          },
        }),
        n(757143);
      var o = n(735250);
      n(470079);
      var a = n(481060),
        s = n(313201),
        l = n(988158),
        r = n(689938),
        i = n(66015);
      function c(t) {
        let {
            url: e,
            trustUrl: n,
            isProtocol: c,
            onConfirm: d,
            onClose: _,
            transitionState: u,
          } = t,
          x = (0, s.Dt)(),
          {
            protocol: h,
            hostname: m,
            theRestOfTheUrl: M,
            shouldTrustUrl: T,
            setShouldTrustUrl: E,
            handleConfirm: C,
          } = (0, l.X)({ url: e, trustUrl: n, onConfirm: d, onClose: _ });
        return (0, o.jsxs)(a.ModalRoot, {
          size: a.ModalSize.DYNAMIC,
          transitionState: u,
          "aria-labelledby": x,
          children: [
            (0, o.jsxs)(a.ModalContent, {
              children: [
                (0, o.jsx)(a.Heading, {
                  id: x,
                  variant: "heading-xl/bold",
                  className: i.title,
                  children: r.Z.Messages.MASKED_LINK_ALERT_V2_HEADER,
                }),
                (0, o.jsx)(a.Text, {
                  className: i.warningText,
                  variant: "text-md/normal",
                  children: c
                    ? r.Z.Messages.MASKED_LINK_ALERT_V2_WARNING_PROTOCOL.format(
                        {},
                      )
                    : r.Z.Messages.MASKED_LINK_ALERT_V2_WARNING_WEBSITE,
                }),
                (0, o.jsxs)(a.Scroller, {
                  className: i.linkCalloutContainer,
                  children: [
                    (0, o.jsxs)(a.Text, {
                      tag: "span",
                      variant: c ? "text-md/semibold" : "text-md/normal",
                      color: c ? "text-normal" : "text-muted",
                      children: [h, "//"],
                    }),
                    (0, o.jsx)(a.Text, {
                      tag: "span",
                      variant: c ? "text-md/normal" : "text-md/semibold",
                      color: c ? "text-muted" : "text-normal",
                      children: m,
                    }),
                    (0, o.jsx)(a.Text, {
                      tag: "span",
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: M,
                    }),
                  ],
                }),
                (0, o.jsx)(a.Checkbox, {
                  className: i.checkbox,
                  type: a.Checkbox.Types.INVERTED,
                  value: T,
                  onChange: (t, e) => E(e),
                  children: (0, o.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: c
                      ? r.Z.Messages.MASKED_LINK_ALERT_V2_TRUST_PROTOCOL.format(
                          { protocol: h.replace(":", "") },
                        )
                      : r.Z.Messages.MASKED_LINK_ALERT_V2_TRUST_WEBSITE.format({
                          domain: m,
                        }),
                  }),
                }),
              ],
            }),
            (0, o.jsxs)(a.ModalFooter, {
              children: [
                (0, o.jsx)(a.Button, {
                  type: "button",
                  size: a.Button.Sizes.MEDIUM,
                  color: a.Button.Colors.BRAND,
                  onClick: C,
                  children: c
                    ? r.Z.Messages.MASKED_LINK_ALERT_V2_CONFIRM_PROTOCOL
                    : r.Z.Messages.MASKED_LINK_ALERT_V2_CONFIRM_WEBSITE,
                }),
                (0, o.jsx)(a.Button, {
                  type: "button",
                  size: a.Button.Sizes.MEDIUM,
                  color: a.Button.Colors.PRIMARY,
                  onClick: _,
                  look: a.ButtonLooks.LINK,
                  children: r.Z.Messages.GO_BACK,
                }),
              ],
            }),
          ],
        });
      }
    },
    66015: function (t, e, n) {
      t.exports = {
        title: "title_dd48c5",
        warningText: "warningText_dd48c5",
        linkCalloutContainer: "linkCalloutContainer_dd48c5",
        checkbox: "checkbox_dd48c5",
      };
    },
  },
]);
//# sourceMappingURL=f66546928dc40e463f28.js.map
