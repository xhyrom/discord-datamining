"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37720"],
  {
    357632: function (t, n, o) {
      o.r(n);
      var r = o(200651);
      o(192379);
      var i = o(106351),
        l = o(481060),
        e = o(933557),
        a = o(388032);
      n.default = (t) => {
        let { channel: n, onClose: o, onConfirm: s, transitionState: d } = t,
          {
            title: c,
            body: h,
            confirm: u,
          } = (function (t) {
            let n = (0, e.ZP)(t, !0);
            return t.type === i.d.GUILD_CATEGORY
              ? {
                  title: a.intl.string(a.t["4VpUw8"]),
                  body: a.intl.format(a.t.GuhMa2, { channelName: n }),
                  confirm: a.intl.string(a.t.xOscRk),
                }
              : {
                  title: a.intl.string(a.t["4VpUw8"]),
                  body: a.intl.format(a.t["2z/hBg"], { channelName: n }),
                  confirm: a.intl.string(a.t.gGs6TU),
                };
          })(n);
        return (0, r.jsxs)(l.ModalRoot, {
          transitionState: d,
          "aria-label": c,
          children: [
            (0, r.jsx)(l.ModalHeader, {
              separator: !1,
              children: (0, r.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                children: c,
              }),
            }),
            (0, r.jsx)(l.ModalContent, {
              children: (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "header-primary",
                children: h,
              }),
            }),
            (0, r.jsxs)(l.ModalFooter, {
              children: [
                (0, r.jsx)(l.Button, {
                  onClick: s,
                  color: l.Button.Colors.RED,
                  children: u,
                }),
                (0, r.jsx)(l.Button, {
                  onClick: o,
                  look: l.Button.Looks.LINK,
                  color: l.Button.Colors.PRIMARY,
                  children: a.intl.string(a.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=f87ca4052cebdc8cc8b2.js.map
