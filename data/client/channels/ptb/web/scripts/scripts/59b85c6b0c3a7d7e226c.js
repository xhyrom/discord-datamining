"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43889"],
  {
    279875: function (e, s, t) {
      t.r(s),
        t.d(s, {
          GuildSubscriptionSelectionModal: function () {
            return d;
          },
        }),
        t(47120);
      var n = t(735250),
        o = t(470079),
        a = t(481060),
        l = t(270144),
        i = t(689011),
        c = t(689938),
        r = t(389142);
      function d(e) {
        let { transitionState: s, onClose: t, sku: d, onSelect: u } = e,
          [S, b] = o.useState(),
          { guilds: m, isFetching: x } = (0, l.CR)(d.applicationId, d.id, !0),
          _ = m.map((e) => ({ value: e.id, label: e.name }));
        return (0, n.jsxs)(a.ModalRoot, {
          transitionState: s,
          size: a.ModalSize.SMALL,
          className: r.modal,
          children: [
            (0, n.jsx)(i.t, { onClose: t }),
            (0, n.jsxs)(a.ModalContent, {
              className: r.content,
              children: [
                (0, n.jsx)(a.Text, {
                  variant: "text-sm/medium",
                  className: r.breadCrumb,
                  children:
                    c.Z.Messages.APPLICATION_GUILD_SELECTOR_SERVER_SELECTION,
                }),
                (0, n.jsxs)("div", {
                  className: r.selectionBody,
                  children: [
                    (0, n.jsx)(a.Text, {
                      variant: "text-md/medium",
                      children:
                        c.Z.Messages.APPLICATION_GUILD_SELECTOR_CHOOSE_A_SERVER,
                    }),
                    (0, n.jsx)(a.Text, {
                      variant: "eyebrow",
                      children: c.Z.Messages.SERVER,
                    }),
                    x
                      ? (0, n.jsx)(a.Spinner, {
                          type: a.Spinner.Type.PULSING_ELLIPSIS,
                        })
                      : _.length > 0
                        ? (0, n.jsx)(a.SearchableSelect, {
                            options: _,
                            value: S,
                            onChange: b,
                          })
                        : (0, n.jsx)(a.HelpMessage, {
                            messageType: a.HelpMessageTypes.WARNING,
                            children: (0, n.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              children:
                                c.Z.Messages
                                  .APPLICATION_GUILD_SELECTOR_NO_SERVERS,
                            }),
                          }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)(a.ModalFooter, {
              className: r.footer,
              children: [
                (0, n.jsx)(a.Button, {
                  look: a.Button.Looks.BLANK,
                  size: a.Button.Sizes.MIN,
                  className: r.closeBtn,
                  onClick: t,
                  children: c.Z.Messages.CLOSE,
                }),
                (0, n.jsx)(a.Button, {
                  size: a.Button.Sizes.SMALL,
                  disabled: null == S,
                  onClick: function () {
                    null != S && (u(S), t());
                  },
                  children: c.Z.Messages.CONFIRM,
                }),
              ],
            }),
          ],
        });
      }
    },
    389142: function (e, s, t) {
      e.exports = {
        modal: "modal_b4f08b",
        content: "content_b4f08b",
        breadCrumb: "breadCrumb_b4f08b",
        selectionBody: "selectionBody_b4f08b",
        footer: "footer_b4f08b",
        closeBtn: "closeBtn_b4f08b",
      };
    },
  },
]);
//# sourceMappingURL=59b85c6b0c3a7d7e226c.js.map
