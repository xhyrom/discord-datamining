"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14089"],
  {
    262528: function (e, a, t) {
      t.r(a);
      var s = t(735250),
        n = t(470079),
        o = t(481060),
        i = t(925329),
        d = t(296023),
        r = t(689938),
        l = t(164933);
      a.default = (e) => {
        let { channel: a, application: c, onClose: x, transitionState: h } = e,
          N = (0, d.w)(a),
          u = n.useCallback(
            () => (
              x(),
              (0, o.openModalLazy)(async () => {
                let { default: e } = await t.e("39955").then(t.bind(t, 547653));
                return (t) =>
                  (0, s.jsx)(e, { ...t, channelId: a.id, application: c });
              })
            ),
            [c, a.id, x],
          );
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: h,
          "aria-label": r.Z.Messages.EDIT_CHANNEL_SYNCING_TITLE,
          children: [
            (0, s.jsx)(o.ModalHeader, {
              separator: !1,
              children: (0, s.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                children: r.Z.Messages.EDIT_CHANNEL_SYNCING_TITLE,
              }),
            }),
            (0, s.jsxs)(o.ModalContent, {
              className: l.content,
              children: [
                (0, s.jsx)(i.Z, { game: c, size: i.Z.Sizes.LARGE }),
                (0, s.jsxs)("div", {
                  className: l.metadata,
                  children: [
                    (0, s.jsx)(o.Text, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      children: c.name,
                    }),
                    null != N &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)("div", { className: l.divider }),
                          (0, s.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: N,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)(o.ModalFooter, {
              children: [
                (0, s.jsx)(o.Button, {
                  onClick: u,
                  color: o.Button.Colors.RED,
                  children: r.Z.Messages.CHANNEL_SYNCING_STOP_SYNCING,
                }),
                (0, s.jsx)(o.Button, {
                  onClick: x,
                  look: o.Button.Looks.LINK,
                  color: o.Button.Colors.PRIMARY,
                  children: r.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      };
    },
    164933: function (e, a, t) {
      e.exports = {
        content: "content_e5416c",
        metadata: "metadata_e5416c",
        divider: "divider_e5416c",
      };
    },
  },
]);
//# sourceMappingURL=b22f44f71a985d04dcde.js.map
