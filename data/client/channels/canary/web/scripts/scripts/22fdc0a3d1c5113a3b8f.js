"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16359"],
  {
    599456: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(952265);
      function i(e) {
        (0, r.ZD)(async () => {
          let { default: t } = await n.e("59281").then(n.bind(n, 555523));
          return (n) => (0, a.jsx)(t, { ...e, ...n });
        });
      }
    },
    598952: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        i = n(420522);
      function l(e) {
        var t;
        let { attachment: n } = e,
          l =
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
              children: [l, "MB"],
            }),
          ],
        });
      }
    },
    392739: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        i = n(310619);
      function l(e) {
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
    588091: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n(47120);
      var a = n(200651),
        r = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(512722),
        c = n.n(s),
        o = n(442837),
        d = n(693789),
        m = n(481060),
        u = n(809086),
        x = n(599456),
        h = n(430824),
        j = n(937615),
        p = n(495437),
        f = n(240864),
        v = n(942833),
        b = n(598952),
        g = n(392739),
        S = n(400916),
        C = n(916001),
        N = n(388032),
        _ = n(20202);
      function y(e) {
        let { guildProductListing: t, guildId: n, skuPricePreview: r } = e,
          i = (0, v.C)(t),
          l = (0, j.T4)(r.amount, r.currency),
          s = (0, o.e7)([h.Z], () => h.Z.getGuild(n));
        return (
          c()(null != s, "guild cannot be null"),
          (0, a.jsxs)("div", {
            className: _.purchaseSummaryContainer,
            children: [
              (0, a.jsx)(u.Z, {
                alt: "",
                className: _.purchaseSummaryImage,
                listing: t,
                imageSize: 100,
              }),
              (0, a.jsxs)("div", {
                className: _.purchaseSummarInfo,
                children: [
                  (0, a.jsx)(m.Text, {
                    variant: "text-md/medium",
                    color: "header-primary",
                    children: t.name,
                  }),
                  (0, a.jsx)(m.Spacer, { size: 4 }),
                  (0, a.jsxs)("div", {
                    className: _.productTypeContainer,
                    children: [
                      (0, a.jsx)(m.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: i,
                      }),
                      (0, a.jsx)("div", { className: _.dotSeparator }),
                      (0, a.jsx)(m.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: s.name,
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: _.purchaseSummaryPrice,
                children: [
                  (0, a.jsx)(m.Text, {
                    variant: "text-md/medium",
                    color: "header-primary",
                    children: l,
                  }),
                  (0, a.jsx)(m.Spacer, { size: 4 }),
                  (0, a.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: N.intl.string(N.t["5dWOZW"]),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function z(e) {
        var t;
        let { guildProductListing: n, guildId: r } = e,
          i = null !== (t = n.attachments) && void 0 !== t ? t : [],
          s = i.length > 1;
        return 0 === i.length
          ? null
          : (0, a.jsx)(g.Z, {
              label: N.intl.string(N.t.HOkHPD),
              children: (0, a.jsxs)("div", {
                className: l()(_.attachmentsContainer, {
                  [_.attachmentsContainerMultiple]: s,
                }),
                children: [
                  (0, a.jsx)("div", {
                    className: _.attachmentGrid,
                    children: i.map((e) =>
                      (0, a.jsx)(b.Z, { attachment: e }, e.id),
                    ),
                  }),
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)(S.Z, { guildId: r, productId: n.id }),
                  }),
                ],
              }),
            });
      }
      function I(e) {
        let { role: t } = e;
        return null == t
          ? null
          : (0, a.jsx)(g.Z, {
              label: N.intl.string(N.t.gWBNen),
              children: (0, a.jsx)(C.Z, { role: t }),
            });
      }
      function Z(e) {
        return (0, a.jsx)(m.Text, {
          tag: "span",
          variant: "text-md/semibold",
          color: "text-normal",
          children: e,
        });
      }
      function T(e) {
        var t;
        let {
            onClose: n,
            transitionState: i,
            guildProductListingId: l,
            guildId: s,
            skuPricePreview: u,
          } = e,
          j = (0, o.e7)([f.Z], () => f.Z.getGuildProduct(l));
        c()(null != j, "guildProductListing cannot be null");
        let [v, b] = r.useState(!1);
        r.useEffect(() => {
          (async function e() {
            try {
              b(!0), await (0, p.cf)(s, l), b(!1);
            } catch (e) {
              n(),
                (0, x.Z)({
                  body: N.intl.string(N.t.VQ0lXV),
                  confirmText: N.intl.string(N.t["NX+WJC"]),
                  header: N.intl.string(N.t.OCwKlp),
                  confirmButtonColor: d.zx.Colors.BRAND,
                });
            }
          })();
        }, [s, l, n]);
        let g =
            (null !== (t = j.attachments) && void 0 !== t ? t : []).length > 0,
          S = j.role_id,
          C = (0, o.e7)([h.Z], () => (null != S ? h.Z.getRole(s, S) : void 0));
        return (0, a.jsx)(m.ModalRoot, {
          className: _.modal,
          size: m.ModalSize.DYNAMIC,
          transitionState: i,
          "aria-label": j.name,
          children: (0, a.jsx)(m.ModalContent, {
            children: (0, a.jsx)("div", {
              className: _.container,
              children: v
                ? (0, a.jsx)(m.Spinner, {})
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsxs)("div", {
                        className: _.header,
                        children: [
                          (0, a.jsx)(m.Heading, {
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: N.intl.string(N.t.dhAgv7),
                          }),
                          (0, a.jsx)(m.Clickable, {
                            onClick: n,
                            children: (0, a.jsx)(m.XSmallIcon, {
                              size: "md",
                              color: "currentColor",
                              className: _.close,
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)(m.Spacer, { size: 16 }),
                      (0, a.jsx)(m.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        children: N.intl.format(N.t.X6yvvr, {
                          productName: j.name,
                          emphasisHook: Z,
                        }),
                      }),
                      (0, a.jsx)(m.Spacer, { size: 12 }),
                      (0, a.jsxs)(m.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        children: [
                          g ? N.intl.string(N.t["A/RnkJ"]) + " " : "",
                          null != C
                            ? N.intl.format(N.t.IeJDKi, {
                                roleName: C.name,
                                emphasisHook: Z,
                              })
                            : "",
                        ],
                      }),
                      (0, a.jsx)(m.Spacer, { size: 12 }),
                      (0, a.jsx)(m.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        children: N.intl.string(N.t["9S3QHB"]),
                      }),
                      (0, a.jsx)(m.Spacer, { size: 24 }),
                      (0, a.jsx)(y, {
                        guildProductListing: j,
                        guildId: s,
                        skuPricePreview: u,
                      }),
                      (0, a.jsx)(m.Spacer, { size: 32 }),
                      (0, a.jsx)("div", { className: _.divider }),
                      (0, a.jsx)(m.Spacer, { size: 32 }),
                      (0, a.jsxs)("ul", {
                        className: _.benefitsContainer,
                        children: [
                          (0, a.jsx)(z, { guildProductListing: j, guildId: s }),
                          (0, a.jsx)(I, { role: C }),
                        ],
                      }),
                    ],
                  }),
            }),
          }),
        });
      }
    },
    420522: function (e, t, n) {
      e.exports = {
        container: "container_f8759f",
        dot: "dot_f8759f",
        fileIcon: "fileIcon_f8759f",
        fileName: "fileName_f8759f",
      };
    },
    310619: function (e, t, n) {
      e.exports = { benefitLabel: "benefitLabel_a47da1" };
    },
    20202: function (e, t, n) {
      e.exports = {
        container: "container_dbc9e1",
        modal: "modal_dbc9e1",
        header: "header_dbc9e1",
        close: "close_dbc9e1",
        purchaseSummaryContainer: "purchaseSummaryContainer_dbc9e1",
        purchaseSummarInfo: "purchaseSummarInfo_dbc9e1",
        purchaseSummaryImage: "purchaseSummaryImage_dbc9e1",
        productTypeContainer: "productTypeContainer_dbc9e1",
        dotSeparator: "dotSeparator_dbc9e1",
        purchaseSummaryPrice: "purchaseSummaryPrice_dbc9e1",
        divider: "divider_dbc9e1",
        benefitsContainer: "benefitsContainer_dbc9e1",
        attachmentsContainer: "attachmentsContainer_dbc9e1",
        attachmentsContainerMultiple: "attachmentsContainerMultiple_dbc9e1",
        attachmentGrid: "attachmentGrid_dbc9e1",
      };
    },
  },
]);
//# sourceMappingURL=22fdc0a3d1c5113a3b8f.js.map
