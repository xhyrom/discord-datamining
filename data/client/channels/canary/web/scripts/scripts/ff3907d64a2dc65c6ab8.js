"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23401"],
  {
    666599: function (e, r, a) {
      a.r(r);
      var s = a(200651);
      a(192379);
      var t = a(100621),
        n = a(692547),
        i = a(481060),
        l = a(112831),
        c = a(313201),
        o = a(731455),
        d = a(388032),
        m = a(267021);
      let h = (e) => {
        let {
            currentNumber: r,
            thresholdNumber: a,
            currentLabel: c,
            isPercent: o = !1,
          } = e,
          h = null != a ? Math.floor((r / a) * 100) : 0,
          x = d.intl.formatToPlainString(d.t.YMor7u, { count: r }),
          u =
            null != a
              ? d.intl.formatToPlainString(d.t.YMor7u, { count: a })
              : "--",
          g = (0, i.useToken)(n.Z.unsafe_rawColors.RED_400).hex(),
          p = (0, i.useToken)(n.Z.unsafe_rawColors.YELLOW_300).hex();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: m.progressWrapper,
              children: [
                (0, s.jsx)("div", { className: m.progressBackground }),
                (0, s.jsx)(i.Spring, {
                  from: { width: 0 },
                  to: { width: h },
                  config: { tension: 200, friction: 20, mass: 50, clamp: !0 },
                  shouldAnimate: "animate-always",
                  children: (e) => {
                    let { width: r } = e;
                    return (0, s.jsx)(t.animated.div, {
                      className: m.progressBar,
                      style: {
                        width: r.interpolate((e) => "".concat(e, "%")),
                        backgroundColor: r.interpolate((e) => (e < 33 ? g : p)),
                      },
                    });
                  },
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: m.labelWrapper,
              children: [
                (0, s.jsxs)("div", {
                  className: m.__invalid_current,
                  children: [
                    (0, s.jsx)(l.Z, {
                      color:
                        h < 33 ? l.Z.Colors.ERROR : l.Z.Colors.STATUS_YELLOW,
                      className: m.bold,
                      children: o ? "".concat(x, "%") : x,
                    }),
                    (0, s.jsxs)(i.Text, {
                      "aria-describedby": "health-score-details-score-explain",
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: [
                        c,
                        (0, s.jsx)("sup", { "aria-hidden": !0, children: "1" }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: m.requirement,
                  children: [
                    (0, s.jsx)(i.Text, {
                      className: m.bold,
                      variant: "text-sm/semibold",
                      children: o ? "".concat(u, "%") : u,
                    }),
                    (0, s.jsx)(i.Text, {
                      "aria-describedby":
                        "health-score-details-requirement-explain",
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: d.intl.string(d.t["A+mTPj"]),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      r.default = (e) => {
        let r,
          a,
          t,
          { guildChecklist: n, transitionState: l, onClose: x } = e,
          u = (0, c.Dt)(),
          { retentionHealthy: g, engagementHealthy: p, healthScore: b } = n,
          {
            avg_nonnew_participators: j,
            avg_nonnew_communicators: _,
            perc_ret_w1_intentful: N,
          } = b;
        if (
          (!p &&
            null != j &&
            j < o.b0 &&
            (a = (0, s.jsxs)("div", {
              className: m.failingBlock,
              children: [
                (0, s.jsx)(i.Heading, {
                  className: m.marginAfter,
                  variant: "heading-md/semibold",
                  children: d.intl.string(d.t.sEzDIS),
                }),
                (0, s.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  children: d.intl.string(d.t.zNp3Ki),
                }),
                (0, s.jsx)(h, {
                  currentNumber: j,
                  thresholdNumber: 40,
                  currentLabel: d.intl.string(d.t.BtTX9P),
                }),
              ],
            })),
          !p &&
            null != _ &&
            _ < o.md &&
            (t = (0, s.jsxs)("div", {
              className: m.failingBlock,
              children: [
                (0, s.jsx)(i.Heading, {
                  className: m.marginAfter,
                  variant: "heading-md/semibold",
                  children: d.intl.string(d.t.fWQTbm),
                }),
                (0, s.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  children: d.intl.string(d.t.Tl8MR0),
                }),
                (0, s.jsx)(h, {
                  currentNumber: _,
                  thresholdNumber: 20,
                  currentLabel: d.intl.string(d.t.PFQI7u),
                }),
              ],
            })),
          !g && null != N)
        ) {
          let e = Math.floor(100 * N);
          r = (0, s.jsxs)("div", {
            className: m.failingBlock,
            children: [
              (0, s.jsx)(i.Heading, {
                className: m.marginAfter,
                variant: "heading-md/semibold",
                children: d.intl.string(d.t.YF6x29),
              }),
              (0, s.jsx)(i.Text, {
                variant: "text-sm/normal",
                children: d.intl.format(d.t.kMBzFh, {}),
              }),
              (0, s.jsx)(h, {
                currentNumber: e,
                thresholdNumber: 10,
                currentLabel: d.intl.string(d.t.WpwyIi),
                isPercent: !0,
              }),
            ],
          });
        }
        return (0, s.jsxs)(i.ModalRoot, {
          transitionState: l,
          size: i.ModalSize.MEDIUM,
          className: m.__invalid_modal,
          "aria-labelledby": u,
          children: [
            (0, s.jsxs)(i.ModalContent, {
              className: m.content,
              children: [
                (0, s.jsx)(i.Heading, {
                  variant: "heading-xl/semibold",
                  className: m.modalHeader,
                  id: u,
                  children: d.intl.string(d.t["+GHxPz"]),
                }),
                (0, s.jsx)(i.Text, {
                  className: m.marginAfter,
                  variant: "text-sm/normal",
                  children: d.intl.string(d.t.QOs3XF),
                }),
                (0, s.jsx)("div", { className: m.separator }),
                a,
                t,
                r,
                (0, s.jsx)("div", { className: m.separator }),
                (0, s.jsxs)(i.Text, {
                  className: m.marginAfter,
                  color: "header-secondary",
                  id: "health-score-details-score-explain",
                  variant: "text-sm/normal",
                  children: [
                    (0, s.jsx)("sup", { "aria-hidden": !0, children: "1 " }),
                    d.intl.string(d.t.tN5kb2),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(i.ModalCloseButton, {
              onClick: x,
              className: m.closeButton,
            }),
          ],
        });
      };
    },
    267021: function (e, r, a) {
      e.exports = {
        content: "content_ccb9ad",
        modalHeader: "modalHeader_ccb9ad",
        marginAfter: "marginAfter_ccb9ad",
        separator: "separator_ccb9ad",
        failingBlock: "failingBlock_ccb9ad",
        closeButton: "closeButton_ccb9ad",
        progressWrapper: "progressWrapper_ccb9ad",
        progressBackground: "progressBackground_ccb9ad",
        progressBar: "progressBar_ccb9ad",
        labelWrapper: "labelWrapper_ccb9ad",
        requirement: "requirement_ccb9ad",
        bold: "bold_ccb9ad",
      };
    },
  },
]);
//# sourceMappingURL=ff3907d64a2dc65c6ab8.js.map
