"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53162"],
  {
    834431: function (e, t, n) {
      n.d(t, {
        n: function () {
          return r;
        },
      });
      var a = n(506071);
      function r() {
        return (0, a.n)();
      }
    },
    166081: function (e, t, n) {
      n.d(t, {
        U: function () {
          return s;
        },
      });
      var a = n(470079),
        r = n(695346),
        i = n(73346),
        o = n(834431);
      function s(e, t) {
        let { shouldAnimate: n = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          s = r.QK.useSetting(),
          l = (0, o.n)(),
          c = n && l && s;
        return a.useMemo(() => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, i._W)(
              e.application_id,
              e.image_asset,
              t,
              c ? void 0 : "webp",
            );
        }, [t, e, c]);
      }
    },
    841762: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var a = n(735250),
        r = n(470079),
        i = n(120356),
        o = n.n(i),
        s = n(481060),
        l = n(456692);
      function c(e) {
        let { alt: t, ...n } = e,
          [i, o] = r.useState(!0);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            i &&
              (0, a.jsx)(s.Spinner, {
                type: s.Spinner.Type.LOW_MOTION,
                className: l.loader,
              }),
            (0, a.jsx)("img", { ...n, alt: t, onLoad: () => o(!1) }),
          ],
        });
      }
      function d(e) {
        let {
          src: t,
          backgroundSrc: n,
          alt: r,
          aspectRatio: i,
          className: s,
          imageChildClassName: d,
          ...u
        } = e;
        return (0, a.jsxs)("div", {
          className: o()(l.container, s),
          children: [
            (0, a.jsx)("img", { src: n, alt: r, className: l.backgroundImage }),
            (0, a.jsx)("div", { className: l.backgroundImageFilter }),
            (0, a.jsx)("div", {
              style: { aspectRatio: i },
              className: l.imageContainer,
              children: (0, a.jsx)(c, {
                src: t,
                alt: r,
                className: o()(l.image, d),
                ...u,
              }),
            }),
          ],
        });
      }
    },
    809086: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
        e: function () {
          return d;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(468194),
        i = n(477690),
        o = n(166081),
        s = n(841762);
      let l = (0, r.Mg)(i.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
      function c(e) {
        let { listing: t, imageSize: n, alt: r, ...i } = e,
          s = (0, o.U)(t, n);
        return (0, a.jsx)("img", { src: s, alt: r, ...i });
      }
      function d(e) {
        let { listing: t, aspectRatio: n = 16 / 9, height: r, ...i } = e,
          c = (r - 2 * l) * n,
          d = (0, o.U)(t, c),
          u = (0, o.U)(t, c, { shouldAnimate: !1 });
        return (0, a.jsx)(s.Z, {
          src: d,
          backgroundSrc: u,
          aspectRatio: n,
          ...i,
        });
      }
    },
    179838: function (e, t, n) {
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var a = n(782568);
      function r(e) {
        return (0, a.Z)(e);
      }
    },
    406877: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var a = n(470079),
        r = n(668781),
        i = n(881052),
        o = n(824389),
        s = n(179838),
        l = n(689938);
      function c(e, t) {
        let [n, c] = a.useState(!1);
        return {
          isLoading: n,
          downloadAttachment: a.useCallback(
            async (n) => {
              if (null != e && null != t) {
                c(!0);
                try {
                  let { url: a } = await o.gs({
                    guildId: e,
                    productId: t,
                    attachmentId: n,
                  });
                  await s.L(a);
                } catch (t) {
                  let e = t instanceof i.Hx ? t.getAnyErrorMessage() : void 0;
                  r.Z.show({
                    title: l.Z.Messages.ERROR_GENERIC_TITLE,
                    body: null != e ? e : l.Z.Messages.GENERIC_ERROR_BODY,
                  });
                } finally {
                  c(!1);
                }
              }
            },
            [e, t],
          ),
        };
      }
    },
    598952: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(481060),
        i = n(660151);
      function o(e) {
        var t;
        let { attachment: n } = e,
          o =
            Math.round(
              ((null !== (t = n.size) && void 0 !== t ? t : 0) / 1024 / 1024) *
                100,
            ) / 100;
        return (0, a.jsxs)("div", {
          className: i.container,
          children: [
            (0, a.jsx)(r.ImageFileIcon, {
              size: "xs",
              color: "currentColor",
              className: i.fileIcon,
            }),
            (0, a.jsx)(r.Spacer, { size: 8, horizontal: !0 }),
            (0, a.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: i.fileName,
              children: n.filename,
            }),
            (0, a.jsx)(r.Spacer, { size: 8, horizontal: !0 }),
            (0, a.jsx)("div", { className: i.dot }),
            (0, a.jsx)(r.Spacer, { size: 8, horizontal: !0 }),
            (0, a.jsxs)(r.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: [o, "MB"],
            }),
          ],
        });
      }
    },
    596211: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(481060),
        i = n(406877);
      function o(e) {
        let { guildId: t, productId: n, attachmentId: o, ...s } = e,
          { isLoading: l, downloadAttachment: c } = (0, i.Z)(t, n);
        return (0, a.jsx)(r.Button, {
          ...s,
          submitting: l,
          onClick: function () {
            c(o);
          },
        });
      }
    },
    490576: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        });
      var a = n(735250);
      n(470079);
      var r = n(512722),
        i = n.n(r),
        o = n(468194),
        s = n(442837),
        l = n(477690),
        c = n(481060),
        d = n(809086),
        u = n(430824),
        m = n(240864),
        f = n(598952),
        x = n(596211),
        _ = n(689938),
        g = n(687319);
      let h = (0, o.Mg)(l.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);
      function v(e) {
        let { guildProductListing: t, guildId: n, onClose: r } = e,
          i = (0, s.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getGuild(n)) || void 0 === e
              ? void 0
              : e.name;
          });
        return (0, a.jsxs)(c.ModalHeader, {
          className: g.header,
          children: [
            (0, a.jsx)(d.Z, {
              className: g.headerImage,
              listing: t,
              imageSize: h,
              alt: "",
            }),
            (0, a.jsx)(c.Spacer, { size: 16, horizontal: !0 }),
            (0, a.jsxs)("div", {
              className: g.headerTextColumn,
              children: [
                (0, a.jsx)(c.Heading, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: t.name,
                }),
                (0, a.jsx)(c.Spacer, { size: 8 }),
                (0, a.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: g.__invalid_description,
                  children: i,
                }),
                (0, a.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: g.__invalid_description,
                  children: _.Z.Messages.GUILD_PRODUCT_DOWNLOADS_COUNT.format({
                    count: t.attachments_count,
                  }),
                }),
              ],
            }),
            (0, a.jsx)(c.ModalCloseButton, {
              className: g.closeButton,
              onClick: r,
            }),
          ],
        });
      }
      function b(e) {
        let { attachment: t, guildId: n, productId: r } = e;
        return (0, a.jsxs)("li", {
          className: g.attachmentRow,
          children: [
            (0, a.jsx)(f.Z, { attachment: t }),
            (0, a.jsx)(x.Z, {
              className: g.attachmentDownloadButton,
              guildId: n,
              productId: r,
              attachmentId: t.id,
              children: (0, a.jsx)(c.DownloadIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
          ],
        });
      }
      function j(e) {
        var t;
        let { guildId: n, productId: r, onClose: o, transitionState: l } = e,
          d = (0, s.e7)([m.Z], () => m.Z.getGuildProduct(r));
        i()(null != d, "guildProductListing cannot be null");
        let u = null !== (t = d.attachments) && void 0 !== t ? t : [];
        return (0, a.jsxs)(c.ModalRoot, {
          className: g.modal,
          size: c.ModalSize.MEDIUM,
          transitionState: l,
          "aria-label": _.Z.Messages.GUILD_PRODUCT_DOWNLOAD_MODAL_ARIA_LABEL,
          children: [
            (0, a.jsx)(v, { guildId: n, guildProductListing: d, onClose: o }),
            (0, a.jsx)(c.ModalContent, {
              children: (0, a.jsx)("ul", {
                className: g.__invalid_attachmentsList,
                children: u.map((e) =>
                  (0, a.jsx)(
                    b,
                    { guildId: n, productId: d.id, attachment: e },
                    e.id,
                  ),
                ),
              }),
            }),
          ],
        });
      }
    },
    456692: function (e, t, n) {
      e.exports = {
        container: "container_dc71f0",
        imageContainer: "imageContainer_dc71f0",
        image: "image_dc71f0",
        backgroundImage: "backgroundImage_dc71f0",
        backgroundImageFilter: "backgroundImageFilter_dc71f0",
        loader: "loader_dc71f0",
      };
    },
    660151: function (e, t, n) {
      e.exports = {
        container: "container_f8759f",
        dot: "dot_f8759f",
        fileIcon: "fileIcon_f8759f",
        fileName: "fileName_f8759f",
      };
    },
    687319: function (e, t, n) {
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
//# sourceMappingURL=428dfb22a7c48d16b1b8.js.map
