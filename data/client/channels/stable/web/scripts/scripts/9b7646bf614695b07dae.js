"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53162"],
  {
    834431: function (t, n, e) {
      e.d(n, {
        n: function () {
          return i;
        },
      });
      var a = e(506071);
      function i() {
        return (0, a.n)();
      }
    },
    166081: function (t, n, e) {
      e.d(n, {
        U: function () {
          return l;
        },
      });
      var a = e(192379),
        i = e(695346),
        r = e(73346),
        o = e(834431);
      function l(t, n) {
        let { shouldAnimate: e = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          l = i.QK.useSetting(),
          c = (0, o.n)(),
          s = e && c && l;
        return a.useMemo(() => {
          if ((null == t ? void 0 : t.image_asset) != null)
            return (0, r._W)(
              t.application_id,
              t.image_asset,
              n,
              s ? void 0 : "webp",
            );
        }, [n, t, s]);
      }
    },
    841762: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return d;
        },
      }),
        e(47120);
      var a = e(200651),
        i = e(192379),
        r = e(120356),
        o = e.n(r),
        l = e(481060),
        c = e(456692);
      function s(t) {
        let { alt: n, ...e } = t,
          [r, o] = i.useState(!0);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            r &&
              (0, a.jsx)(l.Spinner, {
                type: l.Spinner.Type.LOW_MOTION,
                className: c.loader,
              }),
            (0, a.jsx)("img", { ...e, alt: n, onLoad: () => o(!1) }),
          ],
        });
      }
      function d(t) {
        let {
          src: n,
          backgroundSrc: e,
          alt: i,
          aspectRatio: r,
          className: l,
          imageChildClassName: d,
          ...u
        } = t;
        return (0, a.jsxs)("div", {
          className: o()(c.container, l),
          children: [
            (0, a.jsx)("img", { src: e, alt: i, className: c.backgroundImage }),
            (0, a.jsx)("div", { className: c.backgroundImageFilter }),
            (0, a.jsx)("div", {
              style: { aspectRatio: r },
              className: c.imageContainer,
              children: (0, a.jsx)(s, {
                src: n,
                alt: i,
                className: o()(c.image, d),
                ...u,
              }),
            }),
          ],
        });
      }
    },
    809086: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return s;
        },
        e: function () {
          return d;
        },
      });
      var a = e(200651);
      e(192379);
      var i = e(468194),
        r = e(477690),
        o = e(166081),
        l = e(841762);
      let c = (0, i.Mg)(r.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
      function s(t) {
        let { listing: n, imageSize: e, alt: i, ...r } = t,
          l = (0, o.U)(n, e);
        return (0, a.jsx)("img", { src: l, alt: i, ...r });
      }
      function d(t) {
        let { listing: n, aspectRatio: e = 16 / 9, height: i, ...r } = t,
          s = (i - 2 * c) * e,
          d = (0, o.U)(n, s),
          u = (0, o.U)(n, s, { shouldAnimate: !1 });
        return (0, a.jsx)(l.Z, {
          src: d,
          backgroundSrc: u,
          aspectRatio: e,
          ...r,
        });
      }
    },
    179838: function (t, n, e) {
      e.d(n, {
        L: function () {
          return i;
        },
      });
      var a = e(782568);
      function i(t) {
        return (0, a.Z)(t);
      }
    },
    406877: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return s;
        },
      }),
        e(47120);
      var a = e(192379),
        i = e(668781),
        r = e(881052),
        o = e(824389),
        l = e(179838),
        c = e(388032);
      function s(t, n) {
        let [e, s] = a.useState(!1);
        return {
          isLoading: e,
          downloadAttachment: a.useCallback(
            async (e) => {
              if (null != t && null != n) {
                s(!0);
                try {
                  let { url: a } = await o.gs({
                    guildId: t,
                    productId: n,
                    attachmentId: e,
                  });
                  await l.L(a);
                } catch (n) {
                  let t = n instanceof r.Hx ? n.getAnyErrorMessage() : void 0;
                  i.Z.show({
                    title: c.intl.string(c.t.R0RpRU),
                    body: null != t ? t : c.intl.string(c.t.eAn6z8),
                  });
                } finally {
                  s(!1);
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
          return o;
        },
      });
      var a = e(200651);
      e(192379);
      var i = e(481060),
        r = e(660151);
      function o(t) {
        var n;
        let { attachment: e } = t,
          o =
            Math.round(
              ((null !== (n = e.size) && void 0 !== n ? n : 0) / 1024 / 1024) *
                100,
            ) / 100;
        return (0, a.jsxs)("div", {
          className: r.container,
          children: [
            (0, a.jsx)(i.ImageFileIcon, {
              size: "xs",
              color: "currentColor",
              className: r.fileIcon,
            }),
            (0, a.jsx)(i.Spacer, { size: 8, horizontal: !0 }),
            (0, a.jsx)(i.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: r.fileName,
              children: e.filename,
            }),
            (0, a.jsx)(i.Spacer, { size: 8, horizontal: !0 }),
            (0, a.jsx)("div", { className: r.dot }),
            (0, a.jsx)(i.Spacer, { size: 8, horizontal: !0 }),
            (0, a.jsxs)(i.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: [o, "MB"],
            }),
          ],
        });
      }
    },
    596211: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = e(200651);
      e(192379);
      var i = e(481060),
        r = e(406877);
      function o(t) {
        let { guildId: n, productId: e, attachmentId: o, ...l } = t,
          { isLoading: c, downloadAttachment: s } = (0, r.Z)(n, e);
        return (0, a.jsx)(i.Button, {
          ...l,
          submitting: c,
          onClick: function () {
            s(o);
          },
        });
      }
    },
    490576: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return b;
          },
        });
      var a = e(200651);
      e(192379);
      var i = e(512722),
        r = e.n(i),
        o = e(468194),
        l = e(442837),
        c = e(477690),
        s = e(481060),
        d = e(809086),
        u = e(430824),
        m = e(240864),
        f = e(598952),
        x = e(596211),
        h = e(388032),
        g = e(687319);
      let _ = (0, o.Mg)(c.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);
      function j(t) {
        let { guildProductListing: n, guildId: e, onClose: i } = t,
          r = (0, l.e7)([u.Z], () => {
            var t;
            return null === (t = u.Z.getGuild(e)) || void 0 === t
              ? void 0
              : t.name;
          });
        return (0, a.jsxs)(s.ModalHeader, {
          className: g.header,
          children: [
            (0, a.jsx)(d.Z, {
              className: g.headerImage,
              listing: n,
              imageSize: _,
              alt: "",
            }),
            (0, a.jsx)(s.Spacer, { size: 16, horizontal: !0 }),
            (0, a.jsxs)("div", {
              className: g.headerTextColumn,
              children: [
                (0, a.jsx)(s.Heading, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: n.name,
                }),
                (0, a.jsx)(s.Spacer, { size: 8 }),
                (0, a.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: g.__invalid_description,
                  children: r,
                }),
                (0, a.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: g.__invalid_description,
                  children: h.intl.format(h.t["6dOuaG"], {
                    count: n.attachments_count,
                  }),
                }),
              ],
            }),
            (0, a.jsx)(s.ModalCloseButton, {
              className: g.closeButton,
              onClick: i,
            }),
          ],
        });
      }
      function v(t) {
        let { attachment: n, guildId: e, productId: i } = t;
        return (0, a.jsxs)("li", {
          className: g.attachmentRow,
          children: [
            (0, a.jsx)(f.Z, { attachment: n }),
            (0, a.jsx)(x.Z, {
              className: g.attachmentDownloadButton,
              guildId: e,
              productId: i,
              attachmentId: n.id,
              children: (0, a.jsx)(s.DownloadIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
          ],
        });
      }
      function b(t) {
        var n;
        let { guildId: e, productId: i, onClose: o, transitionState: c } = t,
          d = (0, l.e7)([m.Z], () => m.Z.getGuildProduct(i));
        r()(null != d, "guildProductListing cannot be null");
        let u = null !== (n = d.attachments) && void 0 !== n ? n : [];
        return (0, a.jsxs)(s.ModalRoot, {
          className: g.modal,
          size: s.ModalSize.MEDIUM,
          transitionState: c,
          "aria-label": h.intl.string(h.t["3jaCaW"]),
          children: [
            (0, a.jsx)(j, { guildId: e, guildProductListing: d, onClose: o }),
            (0, a.jsx)(s.ModalContent, {
              children: (0, a.jsx)("ul", {
                className: g.__invalid_attachmentsList,
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
    456692: function (t, n, e) {
      t.exports = {
        container: "container_dc71f0",
        imageContainer: "imageContainer_dc71f0",
        image: "image_dc71f0",
        backgroundImage: "backgroundImage_dc71f0",
        backgroundImageFilter: "backgroundImageFilter_dc71f0",
        loader: "loader_dc71f0",
      };
    },
    660151: function (t, n, e) {
      t.exports = {
        container: "container_f8759f",
        dot: "dot_f8759f",
        fileIcon: "fileIcon_f8759f",
        fileName: "fileName_f8759f",
      };
    },
    687319: function (t, n, e) {
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
//# sourceMappingURL=9b7646bf614695b07dae.js.map
