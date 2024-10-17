"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43889"],
  {
    279875: function (e, s, t) {
      t.r(s),
        t.d(s, {
          GuildSubscriptionSelectionModal: function () {
            return x;
          },
        }),
        t(47120),
        t(733860),
        t(653041);
      var n = t(735250),
        l = t(470079),
        o = t(481060),
        a = t(565138),
        i = t(430824),
        r = t(270144),
        d = t(689011),
        u = t(689938),
        c = t(389142);
      function x(e) {
        let {
            transitionState: s,
            onClose: t,
            sku: x,
            onSelect: S,
            currentGuildId: m,
          } = e,
          [b, _] = l.useState(),
          { guilds: h, isFetching: E } = (0, r.CR)(x.applicationId, x.id, !0),
          L = l.useMemo(() => {
            if (!E && null != m)
              return (
                h.findIndex((e) => {
                  let { id: s } = e;
                  return s === m;
                }) >= 0
              );
          }, [m, h, E]);
        l.useLayoutEffect(() => {
          L && _(m);
        }, [m, L]);
        let C = l.useMemo(() => {
          let e = [];
          for (let s of h) {
            let t = { value: s.id, label: s.name };
            L && s.id === m ? e.unshift(t) : e.push(t);
          }
          return e;
        }, [m, h, L]);
        return (0, n.jsxs)(o.ModalRoot, {
          transitionState: s,
          size: o.ModalSize.SMALL,
          className: c.modal,
          children: [
            (0, n.jsx)(d.t, { onClose: t }),
            (0, n.jsxs)(o.ModalContent, {
              className: c.content,
              children: [
                (0, n.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  className: c.breadCrumb,
                  children:
                    u.Z.Messages.APPLICATION_GUILD_SELECTOR_SERVER_SELECTION,
                }),
                (0, n.jsxs)("div", {
                  className: c.selectionBody,
                  children: [
                    (0, n.jsx)(o.Text, {
                      variant: "text-md/medium",
                      children:
                        u.Z.Messages.APPLICATION_GUILD_SELECTOR_CHOOSE_A_SERVER,
                    }),
                    (0, n.jsx)(o.Text, {
                      variant: "eyebrow",
                      children: u.Z.Messages.SERVER,
                    }),
                    E
                      ? (0, n.jsx)(o.Spinner, {
                          type: o.Spinner.Type.PULSING_ELLIPSIS,
                        })
                      : C.length > 0
                        ? (0, n.jsx)(o.SearchableSelect, {
                            options: C,
                            value: b,
                            onChange: _,
                            renderOptionPrefix: (e) => {
                              let s = null == e ? void 0 : e.value,
                                t = null != s ? i.Z.getGuild(s) : null;
                              return null == t
                                ? null
                                : (0, n.jsx)(a.Z, {
                                    guild: t,
                                    size: a.Z.Sizes.MINI,
                                  });
                            },
                            renderOptionLabel: (e) => {
                              let { label: s, value: t } = e;
                              return (0, n.jsxs)("div", {
                                children: [
                                  (0, n.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: s,
                                  }),
                                  t === m &&
                                    (0, n.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      color: "header-secondary",
                                      children:
                                        u.Z.Messages
                                          .APPLICATION_GUILD_SELECTOR_CURRENT_SEVER,
                                    }),
                                ],
                              });
                            },
                          })
                        : (0, n.jsx)(o.HelpMessage, {
                            messageType: o.HelpMessageTypes.WARNING,
                            children: (0, n.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              children:
                                u.Z.Messages
                                  .APPLICATION_GUILD_SELECTOR_NO_SERVERS,
                            }),
                          }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)(o.ModalFooter, {
              className: c.footer,
              children: [
                (0, n.jsx)(o.Button, {
                  look: o.Button.Looks.BLANK,
                  size: o.Button.Sizes.MIN,
                  className: c.closeBtn,
                  onClick: t,
                  children: u.Z.Messages.CLOSE,
                }),
                (0, n.jsx)(o.Button, {
                  size: o.Button.Sizes.SMALL,
                  disabled: null == b,
                  onClick: function () {
                    null != b && (S(b), t());
                  },
                  children: u.Z.Messages.CONFIRM,
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
//# sourceMappingURL=7f95f4fedb2a9f403d35.js.map
