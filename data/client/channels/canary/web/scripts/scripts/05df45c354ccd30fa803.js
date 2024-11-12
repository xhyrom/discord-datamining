"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88452"],
  {
    552394: function (n, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var s = a(200651);
      a(192379);
      var i = a(481060),
        e = a(447564),
        o = a(921944),
        d = a(388032),
        l = a(30833);
      function r(n) {
        let { transitionState: t, channel: a, markAsDismissed: e } = n;
        return (0, s.jsx)(i.ModalRoot, {
          size: i.ModalSize.DYNAMIC,
          transitionState: t,
          children: (0, s.jsx)(c, { markAsDismissed: e, channel: a }),
        });
      }
      function c(n) {
        let { channel: t, markAsDismissed: r } = n;
        return (0, s.jsxs)("div", {
          className: l.modal,
          children: [
            (0, s.jsx)("img", {
              className: l.img,
              src: "https://cdn.discordapp.com/assets/content/28f991389d76cad2f134080324967f70d380d072bca7ac88595287fd7f8f45e5.png",
              alt: d.intl.string(d.t.UygxRk),
            }),
            (0, s.jsxs)("div", {
              className: l.body,
              children: [
                (0, s.jsx)(i.Heading, {
                  variant: "heading-lg/bold",
                  children: d.intl.string(d.t.DSyT5O),
                }),
                (0, s.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  children: d.intl.format(d.t["0n58Li"], {
                    channel_name: t.name,
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: l.footer,
              children: [
                (0, s.jsx)(i.Button, {
                  onClick: () => {
                    r(o.L.USER_DISMISS), (0, i.closeAllModals)();
                  },
                  color: i.ButtonColors.PRIMARY,
                  children: d.intl.string(d.t.i5lSbW),
                }),
                (0, s.jsx)(i.Button, {
                  onClick: () => {
                    r(o.L.TAKE_ACTION),
                      (0, i.openModalLazy)(
                        async () => {
                          let { default: n } = await Promise.resolve().then(
                            a.bind(a, 447564),
                          );
                          return (a) => (0, s.jsx)(n, { channel: t, ...a });
                        },
                        { modalKey: e.HD_STREAMING_POTION_MODAL_KEY },
                      );
                  },
                  children: d.intl.string(d.t.w1qPc3),
                }),
              ],
            }),
          ],
        });
      }
    },
    30833: function (n, t, a) {
      n.exports = {
        modal: "modal_ab2da1",
        img: "img_ab2da1",
        body: "body_ab2da1",
        footer: "footer_ab2da1",
      };
    },
  },
]);
//# sourceMappingURL=05df45c354ccd30fa803.js.map
