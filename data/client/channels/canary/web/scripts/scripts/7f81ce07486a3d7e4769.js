"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44600"],
  {
    776226: function (e) {
      e.exports = "/assets/c824173d0d5f34be9341.svg";
    },
    878799: function (e) {
      e.exports = "/assets/80f2c4e73f4aba89fc3c.svg";
    },
    225433: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return u;
        },
      });
      var o = a(735250);
      a(470079);
      var n = a(120356),
        i = a.n(n),
        d = a(481060),
        c = a(689938),
        l = a(60179);
      let r = Object.freeze({ DEFAULT: l.default, FILLED: l.filled });
      function u(e) {
        let {
          className: t,
          onClick: a,
          "aria-label": n,
          look: u = r.DEFAULT,
        } = e;
        return (0, o.jsx)(d.Clickable, {
          "aria-label": null != n ? n : c.Z.Messages.REMOVE,
          className: i()(l.button, u, t),
          onClick: a,
        });
      }
      u.Looks = r;
    },
    36793: function (e, t, a) {
      function o(e, t, a, o) {
        let n = e.naturalWidth / e.width,
          i = t.width / 2,
          d = t.height / 2,
          c = (e.width / 2 - i - a.x) * n,
          l = (e.height / 2 - d - a.y) * n,
          r = t.width * n,
          u = t.height * n,
          f = Math.min(r, o.width),
          s = Math.min(u, o.height);
        return {
          x: c,
          y: l,
          scaledCropWidth: r,
          scaledCropHeight: u,
          canvasWidth: f,
          canvasHeight: s,
        };
      }
      function n(e, t, a, n) {
        let {
            x: i,
            y: d,
            scaledCropWidth: c,
            scaledCropHeight: l,
            canvasWidth: r,
            canvasHeight: u,
          } = o(e, t, a, n),
          f = document.createElement("canvas");
        (f.width = r), (f.height = u);
        let s = f.getContext("2d");
        return (
          null != s && s.drawImage(e, i, d, c, l, 0, 0, f.width, f.height),
          f.toDataURL("image/png")
        );
      }
      function i(e, t, a) {
        let o = e.naturalWidth / e.naturalHeight,
          i = t,
          d = a;
        e.naturalWidth > e.naturalHeight ? (i /= o) : (d *= o);
        let c = { height: i, width: d };
        return n(e, { width: e.width, height: e.height }, { x: 0, y: 0 }, c);
      }
      a.d(t, {
        Ae: function () {
          return i;
        },
        PT: function () {
          return n;
        },
        eu: function () {
          return o;
        },
      });
    },
    60179: function (e, t, a) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    309464: function (e, t, a) {
      e.exports = {
        section: "section_d6c3f9",
        emojiInput: "emojiInput_d6c3f9",
        emojiButton: "emojiButton_d6c3f9",
        emojiText: "emojiText_d6c3f9",
        removeButton: "removeButton_d6c3f9",
      };
    },
    914530: function (e, t, a) {
      e.exports = {
        fileUploadButton: "fileUploadButton_aef0dd",
        fileUpload: "fileUpload_aef0dd " + a("903884").container,
        fileUploadInput: "fileUploadInput_aef0dd " + a("903884").input,
      };
    },
    32857: function (e, t, a) {
      e.exports = {
        modal: "modal_ac5e75",
        modalHeader: "modalHeader_ac5e75",
        modalHeaderTitle: "modalHeaderTitle_ac5e75",
        modalClose: "modalClose_ac5e75",
        formItem: "formItem_ac5e75",
        formItemRow: "formItemRow_ac5e75",
        formItemRowChild: "formItemRowChild_ac5e75",
        preview: "preview_ac5e75",
        previewDark: "previewDark_ac5e75",
        previewLight: "previewLight_ac5e75",
        infoIcon: "infoIcon_ac5e75",
        form: "form_ac5e75",
        modalContent: "modalContent_ac5e75",
        modalFooter: "modalFooter_ac5e75",
      };
    },
    903884: function (e, t, a) {
      a.r(
        (e.exports = {
          container: "container_c67e31",
          layout: "layout_c67e31",
          base: "base_c67e31",
          hiddenMessage: "hiddenMessage_c67e31 base_c67e31",
          input: "input_c67e31 base_c67e31",
          button: "button_c67e31",
          disabled: "disabled_c67e31",
        }),
      );
    },
  },
]);
//# sourceMappingURL=7f81ce07486a3d7e4769.js.map
