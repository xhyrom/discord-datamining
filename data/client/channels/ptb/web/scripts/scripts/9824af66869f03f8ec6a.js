"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43889"],
  {
    279875: function (e, s, t) {
      t.r(s),
        t.d(s, {
          GuildSubscriptionSelectionModal: function () {
            return c;
          },
        }),
        t(47120),
        t(733860),
        t(653041);
      var n = t(735250),
        o = t(470079),
        a = t(481060),
        l = t(270144),
        i = t(689011),
        r = t(689938),
        d = t(389142);
      function c(e) {
        let {
            transitionState: s,
            onClose: t,
            sku: c,
            onSelect: u,
            currentGuildId: x,
          } = e,
          [S, m] = o.useState(),
          { guilds: b, isFetching: _ } = (0, l.CR)(c.applicationId, c.id, !0),
          h = o.useMemo(() => {
            if (!_ && null != x)
              return (
                b.findIndex((e) => {
                  let { id: s } = e;
                  return s === x;
                }) >= 0
              );
          }, [x, b, _]);
        o.useLayoutEffect(() => {
          h && m(x);
        }, [x, h]);
        let E = o.useMemo(() => {
          let e = [];
          for (let s of b) {
            let t = { value: s.id, label: s.name };
            h && s.id === x ? e.unshift(t) : e.push(t);
          }
          return e;
        }, [x, b, h]);
        return (0, n.jsxs)(a.ModalRoot, {
          transitionState: s,
          size: a.ModalSize.SMALL,
          className: d.modal,
          children: [
            (0, n.jsx)(i.t, { onClose: t }),
            (0, n.jsxs)(a.ModalContent, {
              className: d.content,
              children: [
                (0, n.jsx)(a.Text, {
                  variant: "text-sm/medium",
                  className: d.breadCrumb,
                  children:
                    r.Z.Messages.APPLICATION_GUILD_SELECTOR_SERVER_SELECTION,
                }),
                (0, n.jsxs)("div", {
                  className: d.selectionBody,
                  children: [
                    (0, n.jsx)(a.Text, {
                      variant: "text-md/medium",
                      children:
                        r.Z.Messages.APPLICATION_GUILD_SELECTOR_CHOOSE_A_SERVER,
                    }),
                    (0, n.jsx)(a.Text, {
                      variant: "eyebrow",
                      children: r.Z.Messages.SERVER,
                    }),
                    _
                      ? (0, n.jsx)(a.Spinner, {
                          type: a.Spinner.Type.PULSING_ELLIPSIS,
                        })
                      : E.length > 0
                        ? (0, n.jsx)(a.SearchableSelect, {
                            options: E,
                            value: S,
                            onChange: m,
                            renderOptionLabel: (e) => {
                              let { label: s, value: t } = e;
                              return (0, n.jsxs)("div", {
                                children: [
                                  (0, n.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    children: s,
                                  }),
                                  t === x &&
                                    (0, n.jsx)(a.Text, {
                                      variant: "text-xs/normal",
                                      color: "header-secondary",
                                      children:
                                        r.Z.Messages
                                          .APPLICATION_GUILD_SELECTOR_CURRENT_SEVER,
                                    }),
                                ],
                              });
                            },
                          })
                        : (0, n.jsx)(a.HelpMessage, {
                            messageType: a.HelpMessageTypes.WARNING,
                            children: (0, n.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              children:
                                r.Z.Messages
                                  .APPLICATION_GUILD_SELECTOR_NO_SERVERS,
                            }),
                          }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)(a.ModalFooter, {
              className: d.footer,
              children: [
                (0, n.jsx)(a.Button, {
                  look: a.Button.Looks.BLANK,
                  size: a.Button.Sizes.MIN,
                  className: d.closeBtn,
                  onClick: t,
                  children: r.Z.Messages.CLOSE,
                }),
                (0, n.jsx)(a.Button, {
                  size: a.Button.Sizes.SMALL,
                  disabled: null == S,
                  onClick: function () {
                    null != S && (u(S), t());
                  },
                  children: r.Z.Messages.CONFIRM,
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
//# sourceMappingURL=9824af66869f03f8ec6a.js.map
