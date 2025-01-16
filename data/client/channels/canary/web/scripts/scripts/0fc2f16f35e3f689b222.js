"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38062"],
  {
    809086: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
        e: function () {
          return d;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(468194),
        i = n(477690),
        s = n(166081),
        o = n(841762);
      let l = (0, r.Mg)(i.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
      function c(e) {
        let { listing: t, imageSize: n, alt: r, ...i } = e,
          o = (0, s.U)(t, n);
        return (0, a.jsx)("img", { src: o, alt: r, ...i });
      }
      function d(e) {
        let { listing: t, aspectRatio: n = 16 / 9, height: r, ...i } = e,
          c = (r - 2 * l) * n,
          d = (0, s.U)(t, c),
          u = (0, s.U)(t, c, { shouldAnimate: !1 });
        return (0, a.jsx)(o.Z, {
          src: d,
          backgroundSrc: u,
          aspectRatio: n,
          ...i,
        });
      }
    },
    598952: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        i = n(746163);
      function s(e) {
        var t;
        let { attachment: n } = e,
          s =
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
              children: [s, "MB"],
            }),
          ],
        });
      }
    },
    392739: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        i = n(925467);
      function s(e) {
        let { children: t, label: n } = e;
        return (0, a.jsxs)("li", {
          children: [
            (0, a.jsx)(r.Text, {
              variant: "text-xs/semibold",
              color: "header-secondary",
              className: i.benefitLabel,
              children: n,
            }),
            (0, a.jsx)(r.Spacer, { size: 12 }),
            t,
          ],
        });
      }
    },
    409110: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var a = n(200651),
        r = n(192379),
        i = n(442837),
        s = n(481060),
        o = n(430824),
        l = n(259580),
        c = n(598952),
        d = n(392739),
        u = n(916001),
        m = n(981631),
        x = n(388032),
        h = n(954265);
      let f = "expanded-area";
      function j(e) {
        let { attachments: t, role: n, roleLocked: i } = e,
          [o, m] = r.useState(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(s.Clickable, {
              className: h.viewContents,
              onClick: () => {
                m((e) => !e);
              },
              "aria-expanded": o,
              "aria-controls": f,
              children: [
                (0, a.jsx)(s.Text, {
                  variant: "text-sm/medium",
                  color: "text-normal",
                  children: o
                    ? x.intl.string(x.t.DKNxgI)
                    : x.intl.string(x.t.ESEKub),
                }),
                (0, a.jsx)(l.Z, {
                  className: h.caretIcon,
                  direction: o ? l.Z.Directions.UP : l.Z.Directions.DOWN,
                }),
              ],
            }),
            (0, a.jsx)(s.Spacer, { size: 12 }),
            o &&
              (0, a.jsxs)("ul", {
                className: h.contentsContainer,
                id: f,
                children: [
                  (0, a.jsx)(d.Z, {
                    label: x.intl.string(x.t.DWYJub),
                    children: (0, a.jsx)("ul", {
                      className: h.attachmentGrid,
                      children: t.map((e) =>
                        (0, a.jsx)(c.Z, { attachment: e }, e.id),
                      ),
                    }),
                  }),
                  null != n &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("div", { className: h.separator }),
                        (0, a.jsx)(d.Z, {
                          label: x.intl.string(x.t.o9xphY),
                          children: (0, a.jsx)(u.Z, {
                            role: n,
                            textVariant: "text-md/medium",
                            locked: i,
                          }),
                        }),
                      ],
                    }),
                ],
              }),
          ],
        });
      }
      function p(e) {
        var t;
        let { listing: n } = e,
          r = null !== (t = n.attachments) && void 0 !== t ? t : [],
          s = (0, i.e7)([o.Z], () => {
            var e;
            return o.Z.getRole(
              n.guild_id,
              null !== (e = n.role_id) && void 0 !== e ? e : m.lds,
            );
          }),
          l = !n.has_entitlement;
        return 0 === r.length && null == s
          ? null
          : 0 === r.length && null != s
            ? (0, a.jsx)(u.Z, {
                role: s,
                textVariant: "text-md/medium",
                locked: l,
              })
            : (0, a.jsx)(j, { attachments: r, role: s, roleLocked: l });
      }
    },
    546604: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var a = n(200651);
      n(192379);
      var r = n(512722),
        i = n.n(r),
        s = n(990547),
        o = n(442837),
        l = n(481060),
        c = n(100527),
        d = n(213609),
        u = n(240657),
        m = n(809086),
        x = n(430824),
        h = n(240864),
        f = n(942833),
        j = n(409110),
        p = n(226060),
        g = n(388032),
        _ = n(294877);
      function v(e) {
        var t, n;
        let {
            transitionState: r,
            guildProductListingId: v,
            analyticsLocation: b,
            guildId: N,
            onClose: I,
          } = e,
          Z = (0, o.e7)([h.Z], () => h.Z.getGuildProduct(v));
        i()(null != Z, "guildProductListing cannot be null"),
          (0, d.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
            properties: {
              guild_product_listing_id: v,
              has_entitlement: !0 === Z.has_entitlement,
              location: b,
            },
          });
        let C = null !== (t = (0, f.C)(Z)) && void 0 !== t ? t : "",
          S = (0, f.k)(Z),
          z = (0, o.e7)([x.Z], () => x.Z.getGuild(N));
        return (0, a.jsxs)(l.ModalRoot, {
          className: _.modal,
          size: l.ModalSize.MEDIUM,
          transitionState: r,
          "aria-label": Z.name,
          children: [
            (0, a.jsxs)(l.ModalHeader, {
              separator: !1,
              children: [
                (0, a.jsx)(m.e, {
                  height: 267,
                  listing: Z,
                  className: _.headerImage,
                  alt: "",
                }),
                (0, a.jsx)(l.ModalCloseButton, {
                  className: _.closeButton,
                  onClick: I,
                  withCircleBackground: !0,
                }),
              ],
            }),
            (0, a.jsx)(l.ModalContent, {
              children: (0, a.jsxs)("div", {
                className: _.body,
                children: [
                  (0, a.jsx)(l.Heading, {
                    variant: "heading-xl/medium",
                    color: "header-primary",
                    children: Z.name,
                  }),
                  (0, a.jsx)(l.Spacer, { size: 4 }),
                  (0, a.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: g.intl.format(g.t.xImSen, {
                      productType: C,
                      personName:
                        null !== (n = null == z ? void 0 : z.name) &&
                        void 0 !== n
                          ? n
                          : "",
                    }),
                  }),
                  (0, a.jsx)(l.Spacer, { size: 16 }),
                  (0, a.jsx)(j.Z, { listing: Z }),
                  (0, a.jsx)(l.Spacer, { size: 16 }),
                  (0, a.jsx)("div", { className: _.seperator }),
                  (0, a.jsx)(l.Spacer, { size: 16 }),
                  (0, a.jsx)(l.Heading, {
                    variant: "heading-lg/medium",
                    color: "header-primary",
                    children: g.intl.string(g.t.TNnDJi),
                  }),
                  (0, a.jsx)(l.Spacer, { size: 12 }),
                  (0, a.jsx)(u.Z, {
                    className: _.description,
                    variant: "text-md/normal",
                    color: "text-muted",
                    text: Z.description,
                  }),
                ],
              }),
            }),
            (0, a.jsxs)(l.ModalFooter, {
              className: _.footer,
              children: [
                (0, a.jsx)(p.Z, {
                  guildId: N,
                  guildProductListingId: v,
                  sourceAnalyticsLocations: c.Z.GUILD_PRODUCT_INFO_MODAL,
                }),
                (0, a.jsx)(l.Text, {
                  tag: "div",
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  children: S,
                }),
              ],
            }),
          ],
        });
      }
    },
    746163: function (e, t, n) {
      e.exports = {
        container: "container_f8759f",
        dot: "dot_f8759f",
        fileIcon: "fileIcon_f8759f",
        fileName: "fileName_f8759f",
      };
    },
    925467: function (e, t, n) {
      e.exports = { benefitLabel: "benefitLabel_a47da1" };
    },
    954265: function (e, t, n) {
      e.exports = {
        viewContents: "viewContents_f40f85",
        caretIcon: "caretIcon_f40f85",
        contentsContainer: "contentsContainer_f40f85",
        separator: "separator_f40f85",
        attachmentGrid: "attachmentGrid_f40f85",
      };
    },
    294877: function (e, t, n) {
      e.exports = {
        modal: "modal_b3373b",
        body: "body_b3373b",
        seperator: "seperator_b3373b",
        description: "description_b3373b",
        footer: "footer_b3373b",
        headerImage: "headerImage_b3373b",
        closeButton: "closeButton_b3373b",
      };
    },
  },
]);
//# sourceMappingURL=0fc2f16f35e3f689b222.js.map
