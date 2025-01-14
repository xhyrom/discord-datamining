"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53162"],
  {
    809086: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return c;
        },
        e: function () {
          return d;
        },
      });
      var a = e(200651);
      e(192379);
      var o = e(468194),
        i = e(477690),
        r = e(166081),
        l = e(841762);
      let s = (0, o.Mg)(i.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
      function c(t) {
        let { listing: n, imageSize: e, alt: o, ...i } = t,
          l = (0, r.U)(n, e);
        return (0, a.jsx)("img", { src: l, alt: o, ...i });
      }
      function d(t) {
        let { listing: n, aspectRatio: e = 16 / 9, height: o, ...i } = t,
          c = (o - 2 * s) * e,
          d = (0, r.U)(n, c),
          u = (0, r.U)(n, c, { shouldAnimate: !1 });
        return (0, a.jsx)(l.Z, {
          src: d,
          backgroundSrc: u,
          aspectRatio: e,
          ...i,
        });
      }
    },
    179838: function (t, n, e) {
      e.d(n, {
        L: function () {
          return o;
        },
      });
      var a = e(782568);
      function o(t) {
        return (0, a.Z)(t);
      }
    },
    406877: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return c;
        },
      }),
        e(47120);
      var a = e(192379),
        o = e(668781),
        i = e(881052),
        r = e(824389),
        l = e(179838),
        s = e(388032);
      function c(t, n) {
        let [e, c] = a.useState(!1);
        return {
          isLoading: e,
          downloadAttachment: a.useCallback(
            async (e) => {
              if (null != t && null != n) {
                c(!0);
                try {
                  let { url: a } = await r.gs({
                    guildId: t,
                    productId: n,
                    attachmentId: e,
                  });
                  await l.L(a);
                } catch (n) {
                  let t = n instanceof i.Hx ? n.getAnyErrorMessage() : void 0;
                  o.Z.show({
                    title: s.intl.string(s.t.R0RpRU),
                    body: null != t ? t : s.intl.string(s.t.eAn6z8),
                  });
                } finally {
                  c(!1);
                }
              }
            },
            [t, n],
          ),
        };
      }
    },
    598952: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = e(200651);
      e(192379);
      var o = e(481060),
        i = e(746163);
      function r(t) {
        var n;
        let { attachment: e } = t,
          r =
            Math.round(
              ((null !== (n = e.size) && void 0 !== n ? n : 0) / 1024 / 1024) *
                100,
            ) / 100;
        return (0, a.jsxs)("div", {
          className: i.container,
          children: [
            (0, a.jsx)(o.ImageFileIcon, {
              size: "xs",
              color: "currentColor",
              className: i.fileIcon,
            }),
            (0, a.jsx)(o.Spacer, { size: 8, horizontal: !0 }),
            (0, a.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: i.fileName,
              children: e.filename,
            }),
            (0, a.jsx)(o.Spacer, { size: 8, horizontal: !0 }),
            (0, a.jsx)("div", { className: i.dot }),
            (0, a.jsx)(o.Spacer, { size: 8, horizontal: !0 }),
            (0, a.jsxs)(o.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: [r, "MB"],
            }),
          ],
        });
      }
    },
    596211: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = e(200651);
      e(192379);
      var o = e(481060),
        i = e(406877);
      function r(t) {
        let { guildId: n, productId: e, attachmentId: r, ...l } = t,
          { isLoading: s, downloadAttachment: c } = (0, i.Z)(n, e);
        return (0, a.jsx)(o.Button, {
          ...l,
          submitting: s,
          onClick: function () {
            c(r);
          },
        });
      }
    },
    490576: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return g;
          },
        });
      var a = e(200651);
      e(192379);
      var o = e(512722),
        i = e.n(o),
        r = e(468194),
        l = e(442837),
        s = e(477690),
        c = e(481060),
        d = e(809086),
        u = e(430824),
        m = e(240864),
        f = e(598952),
        h = e(596211),
        x = e(388032),
        _ = e(954374);
      let b = (0, r.Mg)(s.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);
      function j(t) {
        let { guildProductListing: n, guildId: e, onClose: o } = t,
          i = (0, l.e7)([u.Z], () => {
            var t;
            return null === (t = u.Z.getGuild(e)) || void 0 === t
              ? void 0
              : t.name;
          });
        return (0, a.jsxs)(c.ModalHeader, {
          className: _.header,
          children: [
            (0, a.jsx)(d.Z, {
              className: _.headerImage,
              listing: n,
              imageSize: b,
              alt: "",
            }),
            (0, a.jsx)(c.Spacer, { size: 16, horizontal: !0 }),
            (0, a.jsxs)("div", {
              className: _.headerTextColumn,
              children: [
                (0, a.jsx)(c.Heading, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: n.name,
                }),
                (0, a.jsx)(c.Spacer, { size: 8 }),
                (0, a.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: _.__invalid_description,
                  children: i,
                }),
                (0, a.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: _.__invalid_description,
                  children: x.intl.format(x.t["6dOuaG"], {
                    count: n.attachments_count,
                  }),
                }),
              ],
            }),
            (0, a.jsx)(c.ModalCloseButton, {
              className: _.closeButton,
              onClick: o,
            }),
          ],
        });
      }
      function v(t) {
        let { attachment: n, guildId: e, productId: o } = t;
        return (0, a.jsxs)("li", {
          className: _.attachmentRow,
          children: [
            (0, a.jsx)(f.Z, { attachment: n }),
            (0, a.jsx)(h.Z, {
              className: _.attachmentDownloadButton,
              guildId: e,
              productId: o,
              attachmentId: n.id,
              children: (0, a.jsx)(c.DownloadIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
          ],
        });
      }
      function g(t) {
        var n;
        let { guildId: e, productId: o, onClose: r, transitionState: s } = t,
          d = (0, l.e7)([m.Z], () => m.Z.getGuildProduct(o));
        i()(null != d, "guildProductListing cannot be null");
        let u = null !== (n = d.attachments) && void 0 !== n ? n : [];
        return (0, a.jsxs)(c.ModalRoot, {
          className: _.modal,
          size: c.ModalSize.MEDIUM,
          transitionState: s,
          "aria-label": x.intl.string(x.t["3jaCaW"]),
          children: [
            (0, a.jsx)(j, { guildId: e, guildProductListing: d, onClose: r }),
            (0, a.jsx)(c.ModalContent, {
              children: (0, a.jsx)("ul", {
                className: _.__invalid_attachmentsList,
                children: u.map((t) =>
                  (0, a.jsx)(
                    v,
                    { guildId: e, productId: d.id, attachment: t },
                    t.id,
                  ),
                ),
              }),
            }),
          ],
        });
      }
    },
    746163: function (t, n, e) {
      t.exports = {
        container: "container_f8759f",
        dot: "dot_f8759f",
        fileIcon: "fileIcon_f8759f",
        fileName: "fileName_f8759f",
      };
    },
    954374: function (t, n, e) {
      t.exports = {
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
//# sourceMappingURL=0696afffca388003511b.js.map
