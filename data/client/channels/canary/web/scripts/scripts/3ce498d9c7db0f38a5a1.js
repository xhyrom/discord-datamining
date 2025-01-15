"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2538"],
  {
    92254: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return x;
          },
        }),
        i(47120);
      var a = i(200651),
        o = i(192379),
        n = i(120356),
        s = i.n(n),
        l = i(481060),
        r = i(313201),
        d = i(309081),
        m = i(35463),
        u = i(489887),
        c = i(388032),
        h = i(566190);
      let j = (0, r.hQ)();
      function x(e) {
        var t;
        let {
            channelId: i,
            answer: n,
            onSave: r,
            transitionState: x,
            onClose: g,
          } = e,
          {
            emoji: p,
            hasUpload: b,
            upload: v,
            mediaUrl: C,
            mediaFilename: I,
          } = (0, m.Z)({
            channelId: i,
            localCreationAnswerId: n.localCreationAnswerId,
            image: n.image,
          }),
          [k, w] = o.useState(
            null !== (t = null == v ? void 0 : v.description) && void 0 !== t
              ? t
              : "",
          );
        return (0, a.jsxs)(l.ModalRoot, {
          size: l.ModalSize.DYNAMIC,
          className: s()(h.modal, { [h.hasImage]: b, [h.hasEmoji]: null != p }),
          transitionState: x,
          "aria-label": c.intl.string(c.t.QbhHBQ),
          children: [
            (0, a.jsx)(d.I, {
              hasUpload: b,
              mediaUrl: C,
              mediaFilename: I,
              imageClassName: h.imagePreview,
              emoji: p,
              emojiClassName: h.emojiPreview,
            }),
            (0, a.jsxs)(l.ModalContent, {
              className: h.content,
              children: [
                (0, a.jsx)(l.FormTitle, {
                  tag: l.FormTitleTags.LABEL,
                  htmlFor: j,
                  children: c.intl.string(c.t["/2Gnoa"]),
                }),
                (0, a.jsx)(l.TextInput, {
                  id: j,
                  value: k,
                  inputClassName: h.input,
                  onChange: w,
                  maxLength: u.WA,
                  autoFocus: !0,
                }),
              ],
            }),
            (0, a.jsxs)(l.ModalFooter, {
              className: h.footer,
              children: [
                (0, a.jsx)(l.Button, {
                  look: l.ButtonLooks.FILLED,
                  size: l.Button.Sizes.MEDIUM,
                  onClick: () => {
                    null != k && r(k), g();
                  },
                  children: (0, a.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: c.intl.string(c.t.R3BPHx),
                  }),
                }),
                (0, a.jsx)(l.Button, {
                  look: l.ButtonLooks.LINK,
                  size: l.Button.Sizes.MEDIUM,
                  onClick: g,
                  children: (0, a.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: c.intl.string(c.t["ETE/oK"]),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    566190: function (e, t, i) {
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
//# sourceMappingURL=3ce498d9c7db0f38a5a1.js.map
