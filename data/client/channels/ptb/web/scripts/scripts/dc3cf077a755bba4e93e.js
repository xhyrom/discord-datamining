"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37720"],
  {
    357632: function (e, o, s) {
      s.r(o);
      var t = s(735250);
      s(470079);
      var r = s(106351),
        a = s(481060),
        E = s(933557),
        n = s(689938);
      o.default = (e) => {
        let { channel: o, onClose: s, onConfirm: i, transitionState: l } = e,
          {
            title: d,
            body: c,
            confirm: _,
          } = (function (e) {
            let o = (0, E.ZP)(e, !0);
            return e.type === r.d.GUILD_CATEGORY
              ? {
                  title: n.Z.Messages.DELETE_FAVORITES_CHANNEL_TITLE,
                  body: n.Z.Messages.DELETE_FAVORITES_CATEGORY_BODY.format({
                    channelName: o,
                  }),
                  confirm: n.Z.Messages.DELETE_FAVORITES_CATEGORY_CONFIRM,
                }
              : {
                  title: n.Z.Messages.DELETE_FAVORITES_CHANNEL_TITLE,
                  body: n.Z.Messages.DELETE_FAVORITES_CHANNEL_BODY.format({
                    channelName: o,
                  }),
                  confirm: n.Z.Messages.DELETE_FAVORITES_CHANNEL_CONFIRM,
                };
          })(o);
        return (0, t.jsxs)(a.ModalRoot, {
          transitionState: l,
          "aria-label": d,
          children: [
            (0, t.jsx)(a.ModalHeader, {
              separator: !1,
              children: (0, t.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                children: d,
              }),
            }),
            (0, t.jsx)(a.ModalContent, {
              children: (0, t.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "header-primary",
                children: c,
              }),
            }),
            (0, t.jsxs)(a.ModalFooter, {
              children: [
                (0, t.jsx)(a.Button, {
                  onClick: i,
                  color: a.Button.Colors.RED,
                  children: _,
                }),
                (0, t.jsx)(a.Button, {
                  onClick: s,
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.PRIMARY,
                  children: n.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=dc3cf077a755bba4e93e.js.map
