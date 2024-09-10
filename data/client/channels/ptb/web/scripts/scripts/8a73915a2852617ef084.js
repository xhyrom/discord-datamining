"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38062"],
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
      var r = a(468194),
        s = a(477690),
        i = a(166081),
        o = a(841762);
      let l = (0, r.Mg)(s.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
      function c(e) {
        let { listing: t, imageSize: a, alt: r, ...s } = e,
          o = (0, i.U)(t, a);
        return (0, n.jsx)("img", { src: o, alt: r, ...s });
      }
      function d(e) {
        let { listing: t, aspectRatio: a = 16 / 9, height: r, ...s } = e,
          c = (r - 2 * l) * a,
          d = (0, i.U)(t, c),
          u = (0, i.U)(t, c, { shouldAnimate: !1 });
        return (0, n.jsx)(o.Z, {
          src: d,
          backgroundSrc: u,
          aspectRatio: a,
          ...s,
        });
      }
    },
    598952: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = a(735250);
      a(470079);
      var r = a(481060),
        s = a(660151);
      function i(e) {
        var t;
        let { attachment: a } = e,
          i =
            Math.round(
              ((null !== (t = a.size) && void 0 !== t ? t : 0) / 1024 / 1024) *
                100,
            ) / 100;
        return (0, n.jsxs)("div", {
          className: s.container,
          children: [
            (0, n.jsx)(r.ImageFileIcon, {
              size: "xs",
              color: "currentColor",
              className: s.fileIcon,
            }),
            (0, n.jsx)(r.Spacer, { size: 8, horizontal: !0 }),
            (0, n.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: s.fileName,
              children: a.filename,
            }),
            (0, n.jsx)(r.Spacer, { size: 8, horizontal: !0 }),
            (0, n.jsx)("div", { className: s.dot }),
            (0, n.jsx)(r.Spacer, { size: 8, horizontal: !0 }),
            (0, n.jsxs)(r.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: [i, "MB"],
            }),
          ],
        });
      }
    },
    392739: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = a(735250);
      a(470079);
      var r = a(481060),
        s = a(117633);
      function i(e) {
        let { children: t, label: a } = e;
        return (0, n.jsxs)("li", {
          children: [
            (0, n.jsx)(r.Text, {
              variant: "text-xs/semibold",
              color: "header-secondary",
              className: s.benefitLabel,
              children: a,
            }),
            (0, n.jsx)(r.Spacer, { size: 12 }),
            t,
          ],
        });
      }
    },
    409110: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return j;
        },
      }),
        a(47120);
      var n = a(735250),
        r = a(470079),
        s = a(442837),
        i = a(481060),
        o = a(430824),
        l = a(259580),
        c = a(598952),
        d = a(392739),
        u = a(916001),
        m = a(981631),
        x = a(689938),
        _ = a(506885);
      let h = "expanded-area";
      function f(e) {
        let { attachments: t, role: a, roleLocked: s } = e,
          [o, m] = r.useState(!1);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(i.Clickable, {
              className: _.viewContents,
              onClick: () => {
                m((e) => !e);
              },
              "aria-expanded": o,
              "aria-controls": h,
              children: [
                (0, n.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  color: "text-normal",
                  children: o
                    ? x.Z.Messages.GUILD_PRODUCT_INFO_MODAL_COLLAPSE_CONTENTS
                    : x.Z.Messages.GUILD_PRODUCT_INFO_MODAL_VIEW_CONTENTS,
                }),
                (0, n.jsx)(l.Z, {
                  className: _.caretIcon,
                  direction: o ? l.Z.Directions.UP : l.Z.Directions.DOWN,
                }),
              ],
            }),
            (0, n.jsx)(i.Spacer, { size: 12 }),
            o &&
              (0, n.jsxs)("ul", {
                className: _.contentsContainer,
                id: h,
                children: [
                  (0, n.jsx)(d.Z, {
                    label: x.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE,
                    children: (0, n.jsx)("ul", {
                      className: _.attachmentGrid,
                      children: t.map((e) =>
                        (0, n.jsx)(c.Z, { attachment: e }, e.id),
                      ),
                    }),
                  }),
                  null != a &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", { className: _.separator }),
                        (0, n.jsx)(d.Z, {
                          label: x.Z.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE,
                          children: (0, n.jsx)(u.Z, {
                            role: a,
                            textVariant: "text-md/medium",
                            locked: s,
                          }),
                        }),
                      ],
                    }),
                ],
              }),
          ],
        });
      }
      function j(e) {
        var t;
        let { listing: a } = e,
          r = null !== (t = a.attachments) && void 0 !== t ? t : [],
          i = (0, s.e7)([o.Z], () => {
            var e;
            return o.Z.getRole(
              a.guild_id,
              null !== (e = a.role_id) && void 0 !== e ? e : m.lds,
            );
          }),
          l = !a.has_entitlement;
        return 0 === r.length && null == i
          ? null
          : 0 === r.length && null != i
            ? (0, n.jsx)(u.Z, {
                role: i,
                textVariant: "text-md/medium",
                locked: l,
              })
            : (0, n.jsx)(f, { attachments: r, role: i, roleLocked: l });
      }
    },
    546604: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return N;
          },
        });
      var n = a(735250);
      a(470079);
      var r = a(512722),
        s = a.n(r),
        i = a(990547),
        o = a(442837),
        l = a(481060),
        c = a(100527),
        d = a(213609),
        u = a(240657),
        m = a(809086),
        x = a(430824),
        _ = a(240864),
        h = a(942833),
        f = a(409110),
        j = a(226060),
        p = a(689938),
        g = a(122296);
      function N(e) {
        var t, a;
        let {
            transitionState: r,
            guildProductListingId: N,
            analyticsLocation: v,
            guildId: I,
            onClose: D,
          } = e,
          b = (0, o.e7)([_.Z], () => _.Z.getGuildProduct(N));
        s()(null != b, "guildProductListing cannot be null"),
          (0, d.Z)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
            properties: {
              guild_product_listing_id: N,
              has_entitlement: !0 === b.has_entitlement,
              location: v,
            },
          });
        let C = null !== (t = (0, h.C)(b)) && void 0 !== t ? t : "",
          O = (0, h.k)(b),
          Z = (0, o.e7)([x.Z], () => x.Z.getGuild(I));
        return (0, n.jsxs)(l.ModalRoot, {
          className: g.modal,
          size: l.ModalSize.MEDIUM,
          transitionState: r,
          "aria-label": b.name,
          children: [
            (0, n.jsxs)(l.ModalHeader, {
              separator: !1,
              children: [
                (0, n.jsx)(m.e, {
                  height: 267,
                  listing: b,
                  className: g.headerImage,
                  alt: "",
                }),
                (0, n.jsx)(l.ModalCloseButton, {
                  className: g.closeButton,
                  onClick: D,
                  withCircleBackground: !0,
                }),
              ],
            }),
            (0, n.jsx)(l.ModalContent, {
              children: (0, n.jsxs)("div", {
                className: g.body,
                children: [
                  (0, n.jsx)(l.Heading, {
                    variant: "heading-xl/medium",
                    color: "header-primary",
                    children: b.name,
                  }),
                  (0, n.jsx)(l.Spacer, { size: 4 }),
                  (0, n.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children:
                      p.Z.Messages.GUILD_PRODUCT_INFO_MODAL_PRODUCT_OFFER.format(
                        {
                          productType: C,
                          personName:
                            null !== (a = null == Z ? void 0 : Z.name) &&
                            void 0 !== a
                              ? a
                              : "",
                        },
                      ),
                  }),
                  (0, n.jsx)(l.Spacer, { size: 16 }),
                  (0, n.jsx)(f.Z, { listing: b }),
                  (0, n.jsx)(l.Spacer, { size: 16 }),
                  (0, n.jsx)("div", { className: g.seperator }),
                  (0, n.jsx)(l.Spacer, { size: 16 }),
                  (0, n.jsx)(l.Heading, {
                    variant: "heading-lg/medium",
                    color: "header-primary",
                    children:
                      p.Z.Messages.GUILD_PRODUCT_INFO_MODAL_DETAIL_HEADER,
                  }),
                  (0, n.jsx)(l.Spacer, { size: 12 }),
                  (0, n.jsx)(u.Z, {
                    className: g.description,
                    variant: "text-md/normal",
                    color: "text-muted",
                    text: b.description,
                  }),
                ],
              }),
            }),
            (0, n.jsxs)(l.ModalFooter, {
              className: g.footer,
              children: [
                (0, n.jsx)(j.Z, {
                  guildId: I,
                  guildProductListingId: N,
                  sourceAnalyticsLocations: c.Z.GUILD_PRODUCT_INFO_MODAL,
                }),
                (0, n.jsx)(l.Text, {
                  tag: "div",
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  children: O,
                }),
              ],
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
    117633: function (e, t, a) {
      e.exports = { benefitLabel: "benefitLabel_a47da1" };
    },
    506885: function (e, t, a) {
      e.exports = {
        viewContents: "viewContents_f40f85",
        caretIcon: "caretIcon_f40f85",
        contentsContainer: "contentsContainer_f40f85",
        separator: "separator_f40f85",
        attachmentGrid: "attachmentGrid_f40f85",
      };
    },
    122296: function (e, t, a) {
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
//# sourceMappingURL=8a73915a2852617ef084.js.map
