"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67376"],
  {
    112847: function (e) {
      e.exports = "/assets/e7681bff22fc3aa4a4bd.svg";
    },
    516954: function (e) {
      e.exports = "/assets/3e87b61a306227219abc.svg";
    },
    450269: function (e, t, n) {
      n.d(t, {
        V: function () {
          return o;
        },
      }),
        n(47120);
      var i = n(192379),
        a = n(259674),
        l = n(981631),
        s = n(388032);
      function o(e) {
        let [t, n] = i.useState(!1),
          [o, c] = i.useState(!1),
          [r, d] = i.useState(!1);
        return {
          rules: i.useMemo(() => {
            let i = s.intl.format(s.t.S2lVJS, {
              onCommunityGuidelinesClick: () =>
                (0, a.lW)({
                  articleId: l.BhN.PUBLIC_GUILD_GUILDLINES,
                  guildId: e,
                  modalStep: a.tK.AGREE_TO_RULES,
                }),
              onDiscoveryGuidelinesClick: () =>
                (0, a.lW)({
                  articleId: l.BhN.SERVER_DISCOVERY_GUIDELINES,
                  guildId: e,
                  modalStep: a.tK.AGREE_TO_RULES,
                }),
            });
            return [
              {
                key: "healthy",
                title: s.intl.string(s.t.jIi9go),
                body: s.intl.string(s.t["4uUAXl"]),
                onCheck: () => n(!t),
                checked: t,
              },
              {
                key: "nonNSFW",
                title: s.intl.string(s.t.iwnCh4),
                body: s.intl.string(s.t.UKFzER),
                onCheck: () => c(!o),
                checked: o,
              },
              {
                key: "guidelines",
                title: i,
                body: s.intl.string(s.t.u0Go2t),
                onCheck: () => d(!r),
                checked: r,
              },
            ];
          }, [r, e, t, o]),
          rulesAccepted: t && o && r,
        };
      }
    },
    207252: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        });
      var i = n(200651),
        a = n(192379),
        l = n(442837),
        s = n(780384),
        o = n(481060),
        c = n(313201),
        r = n(210887),
        d = n(450269),
        h = n(388032),
        u = n(855339),
        x = n(112847),
        m = n(516954);
      function k(e) {
        let { guildId: t, transitionState: n, onClose: k, onConfirm: C } = e,
          b = (0, c.Dt)(),
          g = (0, l.e7)([r.Z], () => r.Z.theme),
          p = (0, s.wj)(g) ? x : m,
          { rules: y, rulesAccepted: j } = (0, d.V)(t),
          E = a.useCallback(() => {
            k(), C();
          }, [k, C]);
        return (0, i.jsxs)(o.ModalRoot, {
          transitionState: n,
          "aria-labelledby": b,
          className: u.modal,
          children: [
            (0, i.jsx)(o.ModalCloseButton, { onClick: k, className: u.close }),
            (0, i.jsxs)(o.ModalContent, {
              className: u.content,
              children: [
                (0, i.jsxs)("div", {
                  className: u.header,
                  children: [
                    (0, i.jsx)("img", { alt: "", src: p, width: 80 }),
                    (0, i.jsx)(o.Heading, {
                      variant: "heading-xxl/semibold",
                      color: "header-primary",
                      id: b,
                      children: h.intl.string(h.t.Q8OFNz),
                    }),
                  ],
                }),
                (0, i.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  className: u.centeredText,
                  children: h.intl.string(h.t["WT+829"]),
                }),
                (0, i.jsx)("div", {
                  className: u.checkboxContainer,
                  children: y.map((e) =>
                    (0, i.jsxs)(
                      o.Checkbox,
                      {
                        reverse: !0,
                        type: o.Checkbox.Types.ROW,
                        value: e.checked,
                        align: o.Checkbox.Aligns.CENTER,
                        onChange: e.onCheck,
                        children: [
                          (0, i.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: e.title,
                          }),
                          (0, i.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: e.body,
                          }),
                        ],
                      },
                      e.key,
                    ),
                  ),
                }),
              ],
            }),
            (0, i.jsx)(o.ModalFooter, {
              children: (0, i.jsx)(o.Button, {
                fullWidth: !0,
                disabled: !j,
                color: o.Button.Colors.BRAND,
                onClick: E,
                size: o.Button.Sizes.LARGE,
                children: (0, i.jsx)(o.Text, {
                  variant: "text-sm/semibold",
                  children: h.intl.string(h.t["qjtt/v"]),
                }),
              }),
            }),
          ],
        });
      }
    },
    855339: function (e, t, n) {
      e.exports = {
        modal: "modal_e3a98a",
        close: "close_e3a98a",
        header: "header_e3a98a",
        content: "content_e3a98a",
        centeredText: "centeredText_e3a98a",
        checkboxContainer: "checkboxContainer_e3a98a",
      };
    },
  },
]);
//# sourceMappingURL=181033bad394214ab8ae.js.map
