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
      var i = a(200651);
      a(192379);
      var s = a(481060),
        o = a(447564),
        d = a(921944),
        e = a(388032),
        l = a(392846);
      function r(n) {
        let { transitionState: t, channel: a, markAsDismissed: o } = n;
        return (0, i.jsx)(s.ModalRoot, {
          size: s.ModalSize.DYNAMIC,
          transitionState: t,
          children: (0, i.jsx)(c, { markAsDismissed: o, channel: a }),
        });
      }
      function c(n) {
        let { channel: t, markAsDismissed: a } = n;
        return (0, i.jsxs)("div", {
          className: l.modal,
          children: [
            (0, i.jsx)("img", {
              className: l.img,
              src: "https://cdn.discordapp.com/assets/content/28f991389d76cad2f134080324967f70d380d072bca7ac88595287fd7f8f45e5.png",
              alt: e.intl.string(e.t.UygxRk),
            }),
            (0, i.jsxs)("div", {
              className: l.body,
              children: [
                (0, i.jsx)(s.Heading, {
                  variant: "heading-lg/bold",
                  children: e.intl.string(e.t.DSyT5O),
                }),
                (0, i.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  children: e.intl.format(e.t["0n58Li"], {
                    channel_name: t.name,
                  }),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: l.footer,
              children: [
                (0, i.jsx)(s.Button, {
                  onClick: () => {
                    a(d.L.USER_DISMISS), (0, s.closeAllModals)();
                  },
                  color: s.ButtonColors.PRIMARY,
                  children: e.intl.string(e.t.i5lSbW),
                }),
                (0, i.jsx)(s.Button, {
                  onClick: () => {
                    a(d.L.TAKE_ACTION),
                      (0, o.openHDPotionModal)(
                        t,
                        "HDStreamingPotionUpsellModal",
                      );
                  },
                  children: e.intl.string(e.t.w1qPc3),
                }),
              ],
            }),
          ],
        });
      }
    },
    392846: function (n, t, a) {
      n.exports = {
        modal: "modal_ab2da1",
        img: "img_ab2da1",
        body: "body_ab2da1",
        footer: "footer_ab2da1",
      };
    },
  },
]);
//# sourceMappingURL=3d2005f9cb26607e5217.js.map
