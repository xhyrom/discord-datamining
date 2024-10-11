"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39473"],
  {
    447564: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return o;
          },
        });
      var n = s(735250);
      s(470079);
      var i = s(481060),
        d = s(690221),
        t = s(422034),
        c = s(938475),
        l = s(689938),
        r = s(912568);
      function o(e) {
        let { transitionState: a, channel: s } = e;
        return (0, n.jsx)(i.ModalRoot, {
          size: i.ModalSize.DYNAMIC,
          transitionState: a,
          children: (0, n.jsx)(_, { channel: s }),
        });
      }
      function _(e) {
        let { channel: a } = e,
          s = c.ZP.getVoiceStatesForChannel(a).slice(0, 6),
          o = s.map((e, a) => {
            let { user: d } = e;
            return (0, n.jsx)(
              t.O,
              {
                affinity: d,
                applyMask: a !== s.length - 1,
                size: i.AvatarSizes.SIZE_20,
              },
              d.id,
            );
          });
        return (0, n.jsxs)("div", {
          className: r.modal,
          children: [
            (0, n.jsx)("img", {
              className: r.image,
              src: "https://cdn.discordapp.com/assets/content/5e2cb8d8137c2e5caecabaa7659295c2d443086ae7141bdc9e35a4825b47bdd7.png",
              alt: l.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_IMAGE_ALT,
            }),
            (0, n.jsxs)("div", {
              className: r.body,
              children: [
                (0, n.jsx)(i.Heading, {
                  variant: "heading-lg/bold",
                  children: l.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_TITLE,
                }),
                (0, n.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  children: l.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_DESCR,
                }),
                (0, n.jsx)(d.Z, {
                  onClick: () => {},
                  children: (0, n.jsx)(i.Text, {
                    color: "text-link",
                    variant: "text-xs/medium",
                    children: l.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_LINK,
                  }),
                }),
              ],
            }),
            (0, n.jsx)("div", { className: r.divider }),
            (0, n.jsxs)("div", {
              className: r.applyingTo,
              children: [
                (0, n.jsx)(i.Text, {
                  variant: "eyebrow",
                  children: l.Z.Messages.CONSUMABLE_HD_STREAMING_APPLYING_TO,
                }),
                (0, n.jsxs)("div", {
                  className: r.channel,
                  children: [
                    (0, n.jsxs)("div", {
                      className: r.channelLeft,
                      children: [
                        (0, n.jsx)(i.VoiceNormalIcon, {}),
                        (0, n.jsx)(i.Text, {
                          variant: "text-md/normal",
                          children: a.name,
                        }),
                      ],
                    }),
                    o,
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    912568: function (e, a, s) {
      e.exports = {
        modal: "modal_beafbd",
        divider: "divider_beafbd",
        channel: "channel_beafbd",
        image: "image_beafbd",
        body: "body_beafbd",
        applyingTo: "applyingTo_beafbd",
        channelLeft: "channelLeft_beafbd",
      };
    },
  },
]);
//# sourceMappingURL=dea8b41aefc096ebb68d.js.map
