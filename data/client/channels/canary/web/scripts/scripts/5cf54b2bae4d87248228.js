"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21112"],
  {
    301160: function (e, o, t) {
      t.r(o),
        t.d(o, {
          EmojiAddModal: function () {
            return j;
          },
        }),
        t(47120);
      var a = t(200651),
        n = t(192379),
        i = t(481060),
        l = t(313201),
        s = t(768581),
        r = t(570533),
        d = t(388032),
        m = t(352677);
      function c(e) {
        let { emoji: o, onChange: t, value: n } = e,
          l = s.ZP.getEmojiURL({ id: o.id, animated: o.animated, size: 24 });
        return (0, a.jsx)(i.Checkbox, {
          size: 20,
          className: m.emojiRow,
          onChange: t,
          type: i.Checkbox.Types.INVERTED,
          value: n,
          reverse: !0,
          children: (0, a.jsxs)("div", {
            className: m.emojiLabel,
            children: [
              (0, a.jsx)("img", {
                className: m.emojiImage,
                src: l,
                width: 24,
                height: 24,
                alt: "",
              }),
              (0, a.jsx)(i.Text, {
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
            initialTierEmojiIds: t,
            onSubmit: s,
            transitionToManageEmoji: j,
            transitionState: u,
            onClose: h,
          } = e,
          x = (0, r.Z)(o),
          [b, f] = n.useState(new Set()),
          C = b.size > 0,
          p = (0, l.Dt)();
        return (0, a.jsx)("form", {
          onSubmit: function (e) {
            e.preventDefault(), s(b), h();
          },
          children: (0, a.jsxs)(i.ModalRoot, {
            transitionState: u,
            "aria-labelledby": p,
            children: [
              (0, a.jsxs)(i.ModalHeader, {
                children: [
                  (0, a.jsx)(i.Heading, {
                    variant: "heading-md/semibold",
                    id: p,
                    children: d.intl.string(d.t.xC6tUl),
                  }),
                  (0, a.jsx)(i.ModalCloseButton, {
                    className: m.closeButton,
                    onClick: h,
                  }),
                ],
              }),
              (0, a.jsxs)(i.ModalContent, {
                className: m.modalContent,
                children: [
                  (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: d.intl.format(d.t["OnK+Cw"], {
                      transitionToManageEmoji: j,
                    }),
                  }),
                  (0, a.jsx)(i.Spacer, { size: 16 }),
                  null != x &&
                    x.length > 0 &&
                    (0, a.jsx)("div", {
                      className: m.emojiContainer,
                      children: x.map((e) =>
                        null != t && t.has(e.id)
                          ? null
                          : (0, a.jsx)(
                              c,
                              {
                                emoji: e,
                                onChange: () => {
                                  var o;
                                  return (
                                    (o = e.id),
                                    void f((e) => {
                                      let t = new Set(e);
                                      return (
                                        b.has(o) ? t.delete(o) : t.add(o), t
                                      );
                                    })
                                  );
                                },
                                value: b.has(e.id),
                              },
                              e.id,
                            ),
                      ),
                    }),
                  (0, a.jsx)(i.Spacer, { size: 8 }),
                ],
              }),
              (0, a.jsxs)(i.ModalFooter, {
                className: m.modalFooter,
                children: [
                  (0, a.jsx)(i.Button, {
                    type: "submit",
                    disabled: !C,
                    children: d.intl.format(d.t.pX74jo, { totalEmoji: b.size }),
                  }),
                  (0, a.jsx)(i.Button, {
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.PRIMARY,
                    className: m.cancelButton,
                    onClick: h,
                    children: d.intl.string(d.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    352677: function (e, o, t) {
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
//# sourceMappingURL=5cf54b2bae4d87248228.js.map
