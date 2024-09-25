"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53162"],
  {
    809086: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return c;
        },
        e: function () {
          return d;
        },
      });
      var n = a(735250);
      a(470079);
      var o = a(468194),
        l = a(477690),
        r = a(166081),
        s = a(841762);
      let i = (0, o.Mg)(l.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
      function c(e) {
        let { listing: t, imageSize: a, alt: o, ...l } = e,
          s = (0, r.U)(t, a);
        return (0, n.jsx)("img", { src: s, alt: o, ...l });
      }
      function d(e) {
        let { listing: t, aspectRatio: a = 16 / 9, height: o, ...l } = e,
          c = (o - 2 * i) * a,
          d = (0, r.U)(t, c),
          u = (0, r.U)(t, c, { shouldAnimate: !1 });
        return (0, n.jsx)(s.Z, {
          src: d,
          backgroundSrc: u,
          aspectRatio: a,
          ...l,
        });
      }
    },
    598952: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = a(735250);
      a(470079);
      var o = a(481060),
        l = a(660151);
      function r(e) {
        var t;
        let { attachment: a } = e,
          r =
            Math.round(
              ((null !== (t = a.size) && void 0 !== t ? t : 0) / 1024 / 1024) *
                100,
            ) / 100;
        return (0, n.jsxs)("div", {
          className: l.container,
          children: [
            (0, n.jsx)(o.ImageFileIcon, {
              size: "xs",
              color: "currentColor",
              className: l.fileIcon,
            }),
            (0, n.jsx)(o.Spacer, { size: 8, horizontal: !0 }),
            (0, n.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: l.fileName,
              children: a.filename,
            }),
            (0, n.jsx)(o.Spacer, { size: 8, horizontal: !0 }),
            (0, n.jsx)("div", { className: l.dot }),
            (0, n.jsx)(o.Spacer, { size: 8, horizontal: !0 }),
            (0, n.jsxs)(o.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: [r, "MB"],
            }),
          ],
        });
      }
    },
    490576: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return v;
          },
        });
      var n = a(735250);
      a(470079);
      var o = a(512722),
        l = a.n(o),
        r = a(468194),
        s = a(442837),
        i = a(477690),
        c = a(481060),
        d = a(809086),
        u = a(430824),
        m = a(240864),
        x = a(598952),
        h = a(596211),
        _ = a(689938),
        f = a(687319);
      let j = (0, r.Mg)(i.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);
      function b(e) {
        let { guildProductListing: t, guildId: a, onClose: o } = e,
          l = (0, s.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getGuild(a)) || void 0 === e
              ? void 0
              : e.name;
          });
        return (0, n.jsxs)(c.ModalHeader, {
          className: f.header,
          children: [
            (0, n.jsx)(d.Z, {
              className: f.headerImage,
              listing: t,
              imageSize: j,
              alt: "",
            }),
            (0, n.jsx)(c.Spacer, { size: 16, horizontal: !0 }),
            (0, n.jsxs)("div", {
              className: f.headerTextColumn,
              children: [
                (0, n.jsx)(c.Heading, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: t.name,
                }),
                (0, n.jsx)(c.Spacer, { size: 8 }),
                (0, n.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: f.__invalid_description,
                  children: l,
                }),
                (0, n.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: f.__invalid_description,
                  children: _.Z.Messages.GUILD_PRODUCT_DOWNLOADS_COUNT.format({
                    count: t.attachments_count,
                  }),
                }),
              ],
            }),
            (0, n.jsx)(c.ModalCloseButton, {
              className: f.closeButton,
              onClick: o,
            }),
          ],
        });
      }
      function I(e) {
        let { attachment: t, guildId: a, productId: o } = e;
        return (0, n.jsxs)("li", {
          className: f.attachmentRow,
          children: [
            (0, n.jsx)(x.Z, { attachment: t }),
            (0, n.jsx)(h.Z, {
              className: f.attachmentDownloadButton,
              guildId: a,
              productId: o,
              attachmentId: t.id,
              children: (0, n.jsx)(c.DownloadIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
          ],
        });
      }
      function v(e) {
        var t;
        let { guildId: a, productId: o, onClose: r, transitionState: i } = e,
          d = (0, s.e7)([m.Z], () => m.Z.getGuildProduct(o));
        l()(null != d, "guildProductListing cannot be null");
        let u = null !== (t = d.attachments) && void 0 !== t ? t : [];
        return (0, n.jsxs)(c.ModalRoot, {
          className: f.modal,
          size: c.ModalSize.MEDIUM,
          transitionState: i,
          "aria-label": _.Z.Messages.GUILD_PRODUCT_DOWNLOAD_MODAL_ARIA_LABEL,
          children: [
            (0, n.jsx)(b, { guildId: a, guildProductListing: d, onClose: r }),
            (0, n.jsx)(c.ModalContent, {
              children: (0, n.jsx)("ul", {
                className: f.__invalid_attachmentsList,
                children: u.map((e) =>
                  (0, n.jsx)(
                    I,
                    { guildId: a, productId: d.id, attachment: e },
                    e.id,
                  ),
                ),
              }),
            }),
          ],
        });
      }
    },
    660151: function (e, t, a) {
      e.exports = {
        container: "container_f8759f",
        dot: "dot_f8759f",
        fileIcon: "fileIcon_f8759f",
        fileName: "fileName_f8759f",
      };
    },
    687319: function (e, t, a) {
      e.exports = {
        modal: "modal_bf1bdb",
        header: "header_bf1bdb",
        headerImage: "headerImage_bf1bdb",
        headerTextColumn: "headerTextColumn_bf1bdb",
        closeButton: "closeButton_bf1bdb",
        attachmentRow: "attachmentRow_bf1bdb",
        attachmentDownloadButton: "attachmentDownloadButton_bf1bdb",
      };
    },
  },
]);
//# sourceMappingURL=38e0b37baa295d14fc44.js.map
