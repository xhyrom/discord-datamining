"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21112"],
  {
    301160: function (e, o, a) {
      a.r(o),
        a.d(o, {
          EmojiAddModal: function () {
            return j;
          },
        }),
        a(47120);
      var t = a(735250),
        s = a(470079),
        i = a(481060),
        n = a(313201),
        l = a(768581),
        r = a(570533),
        d = a(689938),
        m = a(276612);
      function c(e) {
        let { emoji: o, onChange: a, value: s } = e,
          n = l.ZP.getEmojiURL({ id: o.id, animated: o.animated, size: 24 });
        return (0, t.jsx)(i.Checkbox, {
          size: 20,
          className: m.emojiRow,
          onChange: a,
          type: i.Checkbox.Types.INVERTED,
          value: s,
          reverse: !0,
          children: (0, t.jsxs)("div", {
            className: m.emojiLabel,
            children: [
              (0, t.jsx)("img", {
                className: m.emojiImage,
                src: n,
                width: 24,
                height: 24,
                alt: "",
              }),
              (0, t.jsx)(i.Text, {
                color: "header-primary",
                variant: "text-md/medium",
                className: m.emojiAlias,
                children: o.name,
              }),
            ],
          }),
        });
      }
      function j(e) {
        let {
            guildId: o,
            initialTierEmojiIds: a,
            onSubmit: l,
            transitionToManageEmoji: j,
            transitionState: u,
            onClose: h,
          } = e,
          _ = (0, r.Z)(o),
          [x, C] = s.useState(new Set()),
          b = x.size > 0,
          I = (0, n.Dt)();
        return (0, t.jsx)("form", {
          onSubmit: function (e) {
            e.preventDefault(), l(x), h();
          },
          children: (0, t.jsxs)(i.ModalRoot, {
            transitionState: u,
            "aria-labelledby": I,
            children: [
              (0, t.jsxs)(i.ModalHeader, {
                children: [
                  (0, t.jsx)(i.Heading, {
                    variant: "heading-md/semibold",
                    id: I,
                    children:
                      d.Z.Messages
                        .GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_HEADER,
                  }),
                  (0, t.jsx)(i.ModalCloseButton, {
                    className: m.closeButton,
                    onClick: h,
                  }),
                ],
              }),
              (0, t.jsxs)(i.ModalContent, {
                className: m.modalContent,
                children: [
                  (0, t.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children:
                      d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_DESCRIPTION.format(
                        { transitionToManageEmoji: j },
                      ),
                  }),
                  (0, t.jsx)(i.Spacer, { size: 16 }),
                  null != _ &&
                    _.length > 0 &&
                    (0, t.jsx)("div", {
                      className: m.emojiContainer,
                      children: _.map((e) =>
                        null != a && a.has(e.id)
                          ? null
                          : (0, t.jsx)(
                              c,
                              {
                                emoji: e,
                                onChange: () => {
                                  var o;
                                  return (
                                    (o = e.id),
                                    void C((e) => {
                                      let a = new Set(e);
                                      return (
                                        x.has(o) ? a.delete(o) : a.add(o), a
                                      );
                                    })
                                  );
                                },
                                value: x.has(e.id),
                              },
                              e.id,
                            ),
                      ),
                    }),
                  (0, t.jsx)(i.Spacer, { size: 8 }),
                ],
              }),
              (0, t.jsxs)(i.ModalFooter, {
                className: m.modalFooter,
                children: [
                  (0, t.jsx)(i.Button, {
                    type: "submit",
                    disabled: !b,
                    children:
                      d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_SAVE_BUTTON.format(
                        { totalEmoji: x.size },
                      ),
                  }),
                  (0, t.jsx)(i.Button, {
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.PRIMARY,
                    className: m.cancelButton,
                    onClick: h,
                    children: d.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    276612: function (e, o, a) {
      e.exports = {
        closeButton: "closeButton_fb1675",
        modalContent: "modalContent_fb1675",
        emojiContainer: "emojiContainer_fb1675",
        emojiRow: "emojiRow_fb1675",
        emojiLabel: "emojiLabel_fb1675",
        emojiImage: "emojiImage_fb1675",
        emojiAlias: "emojiAlias_fb1675",
        modalFooter: "modalFooter_fb1675",
        cancelButton: "cancelButton_fb1675",
      };
    },
  },
]);
//# sourceMappingURL=43d635a160a2084a1182.js.map
