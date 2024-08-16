"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40629"],
  {
    36793: function (t, e, a) {
      function n(t, e, a, n) {
        let i = t.naturalWidth / t.width,
          r = e.width / 2,
          b = e.height / 2,
          o = (t.width / 2 - r - a.x) * i,
          h = (t.height / 2 - b - a.y) * i,
          l = e.width * i,
          d = e.height * i,
          u = Math.min(l, n.width),
          g = Math.min(d, n.height);
        return {
          x: o,
          y: h,
          scaledCropWidth: l,
          scaledCropHeight: d,
          canvasWidth: u,
          canvasHeight: g,
        };
      }
      function i(t, e, a, i) {
        let {
            x: r,
            y: b,
            scaledCropWidth: o,
            scaledCropHeight: h,
            canvasWidth: l,
            canvasHeight: d,
          } = n(t, e, a, i),
          u = document.createElement("canvas");
        (u.width = l), (u.height = d);
        let g = u.getContext("2d");
        return (
          null != g && g.drawImage(t, r, b, o, h, 0, 0, u.width, u.height),
          u.toDataURL("image/png")
        );
      }
      function r(t, e, a) {
        let n = t.naturalWidth / t.naturalHeight,
          r = e,
          b = a;
        t.naturalWidth > t.naturalHeight ? (r /= n) : (b *= n);
        let o = { height: r, width: b };
        return i(t, { width: t.width, height: t.height }, { x: 0, y: 0 }, o);
      }
      a.d(e, {
        Ae: function () {
          return r;
        },
        PT: function () {
          return i;
        },
        eu: function () {
          return n;
        },
      });
    },
    323125: function (t, e, a) {
      t.exports = {
        modalContent: "modalContent_ba5b9e",
        editingContainer: "editingContainer_ba5b9e",
        imageEnabled: "imageEnabled_ba5b9e image_ba5b9e",
        imageDisabled: "imageDisabled_ba5b9e image_ba5b9e",
        icon: "icon_ba5b9e",
        overlayAvatar: "overlayAvatar_ba5b9e overlay_ba5b9e",
        overlayBanner: "overlayBanner_ba5b9e overlay_ba5b9e",
        sliderContainer: "sliderContainer_ba5b9e",
        cancelButton: "cancelButton_ba5b9e",
        modalFooter: "modalFooter_ba5b9e",
        buttonsRight: "buttonsRight_ba5b9e",
        titleCase: "titleCase_ba5b9e",
      };
    },
  },
]);
//# sourceMappingURL=2d16b117edb3e2995166.js.map
