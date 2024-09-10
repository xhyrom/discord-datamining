"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2538"],
  {
    92254: function (e, a, o) {
      o.r(a),
        o.d(a, {
          default: function () {
            return E;
          },
        }),
        o(47120);
      var i = o(735250),
        s = o(470079),
        t = o(120356),
        n = o.n(t),
        l = o(481060),
        d = o(313201),
        r = o(309081),
        m = o(35463),
        u = o(489887),
        c = o(689938),
        h = o(669875);
      let j = (0, d.hQ)();
      function E(e) {
        var a;
        let {
            channelId: o,
            answer: t,
            onSave: d,
            transitionState: E,
            onClose: _,
          } = e,
          {
            emoji: g,
            hasUpload: x,
            upload: C,
            mediaUrl: I,
            mediaFilename: L,
          } = (0, m.Z)({
            channelId: o,
            localCreationAnswerId: t.localCreationAnswerId,
            image: t.image,
          }),
          [p, M] = s.useState(
            null !== (a = null == C ? void 0 : C.description) && void 0 !== a
              ? a
              : "",
          );
        return (0, i.jsxs)(l.ModalRoot, {
          size: l.ModalSize.DYNAMIC,
          className: n()(h.modal, { [h.hasImage]: x, [h.hasEmoji]: null != g }),
          transitionState: E,
          "aria-label": c.Z.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
          children: [
            (0, i.jsx)(r.I, {
              hasUpload: x,
              mediaUrl: I,
              mediaFilename: L,
              imageClassName: h.imagePreview,
              emoji: g,
              emojiClassName: h.emojiPreview,
            }),
            (0, i.jsxs)(l.ModalContent, {
              className: h.content,
              children: [
                (0, i.jsx)(l.FormTitle, {
                  tag: l.FormTitleTags.LABEL,
                  htmlFor: j,
                  children: c.Z.Messages.CREATE_POLL_ALT_TEXT_LABEL,
                }),
                (0, i.jsx)(l.TextInput, {
                  id: j,
                  value: p,
                  inputClassName: h.input,
                  onChange: M,
                  maxLength: u.WA,
                  autoFocus: !0,
                }),
              ],
            }),
            (0, i.jsxs)(l.ModalFooter, {
              className: h.footer,
              children: [
                (0, i.jsx)(l.Button, {
                  look: l.ButtonLooks.FILLED,
                  size: l.Button.Sizes.MEDIUM,
                  onClick: () => {
                    null != p && d(p), _();
                  },
                  children: (0, i.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: c.Z.Messages.SAVE,
                  }),
                }),
                (0, i.jsx)(l.Button, {
                  look: l.ButtonLooks.LINK,
                  size: l.Button.Sizes.MEDIUM,
                  onClick: _,
                  children: (0, i.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: c.Z.Messages.CANCEL,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    669875: function (e, a, o) {
      e.exports = {
        modal: "modal_a254bd",
        hasEmoji: "hasEmoji_a254bd",
        hasImage: "hasImage_a254bd",
        content: "content_a254bd",
        imagePreview: "imagePreview_a254bd",
        emojiPreview: "emojiPreview_a254bd",
        input: "input_a254bd",
        footer: "footer_a254bd",
      };
    },
  },
]);
//# sourceMappingURL=d85fcc5fe20b7772694a.js.map
