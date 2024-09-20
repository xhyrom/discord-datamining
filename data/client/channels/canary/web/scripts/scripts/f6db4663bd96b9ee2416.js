"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14089"],
  {
    262528: function (e, a, t) {
      t.r(a);
      var s = t(735250),
        n = t(470079),
        d = t(481060),
        r = t(933557),
        o = t(925329),
        i = t(296023),
        l = t(689938),
        c = t(164933);
      a.default = (e) => {
        let { channel: a, application: N, onClose: x, transitionState: h } = e,
          m = (0, i.w)(a),
          _ = n.useCallback(
            () => (
              x(),
              (0, d.openModalLazy)(async () => {
                let { default: e } = await t.e("39955").then(t.bind(t, 547653));
                return (t) =>
                  (0, s.jsx)(e, { ...t, channelId: a.id, application: N });
              })
            ),
            [N, a.id, x],
          ),
          C = (0, r.ZP)(a, !0);
        return (0, s.jsxs)(d.ModalRoot, {
          transitionState: h,
          "aria-label": l.Z.Messages.EDIT_CHANNEL_SYNCING_TITLE,
          children: [
            (0, s.jsx)(d.ModalHeader, {
              separator: !1,
              children: (0, s.jsx)(d.Heading, {
                variant: "heading-lg/semibold",
                children: l.Z.Messages.EDIT_CHANNEL_SYNCING_TITLE,
              }),
            }),
            (0, s.jsxs)(d.ModalContent, {
              className: c.content,
              children: [
                (0, s.jsx)(o.Z, { game: N, size: o.Z.Sizes.LARGE }),
                (0, s.jsxs)("div", {
                  className: c.metadata,
                  children: [
                    (0, s.jsxs)("div", {
                      className: c.metadataHeader,
                      children: [
                        (0, s.jsx)(d.Text, {
                          variant: "text-md/semibold",
                          color: "header-primary",
                          children: N.name,
                        }),
                        (0, s.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children:
                            l.Z.Messages.INTEGRATIONS_LINKED_LOBBY_SYNCING_WITH_CHANNEL.format(
                              { channelName: C },
                            ),
                        }),
                      ],
                    }),
                    null != m &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)("div", { className: c.divider }),
                          (0, s.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: m,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)(d.ModalFooter, {
              children: [
                (0, s.jsx)(d.Button, {
                  onClick: _,
                  color: d.Button.Colors.RED,
                  children: l.Z.Messages.CHANNEL_SYNCING_STOP_SYNCING,
                }),
                (0, s.jsx)(d.Button, {
                  onClick: x,
                  look: d.Button.Looks.LINK,
                  color: d.Button.Colors.PRIMARY,
                  children: l.Z.Messages.CANCEL,
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
        metadataHeader: "metadataHeader_e5416c",
        divider: "divider_e5416c",
      };
    },
  },
]);
//# sourceMappingURL=f6db4663bd96b9ee2416.js.map
