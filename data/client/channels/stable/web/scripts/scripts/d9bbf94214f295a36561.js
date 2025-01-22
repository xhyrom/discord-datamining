"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23401"],
  {
    666599: function (e, r, a) {
      a.r(r);
      var s = a(200651);
      a(192379);
      var t = a(642128),
        n = a(692547),
        i = a(481060),
        l = a(118012),
        c = a(313201),
        o = a(388032),
        d = a(720664);
      let m = (e) => {
        let {
            currentNumber: r,
            thresholdNumber: a,
            currentLabel: c,
            isPercent: m = !1,
          } = e,
          h = null != a ? Math.floor((r / a) * 100) : 0,
          x = o.intl.formatToPlainString(o.t.YMor7u, { count: r }),
          u =
            null != a
              ? o.intl.formatToPlainString(o.t.YMor7u, { count: a })
              : "--",
          g = (0, i.useToken)(n.Z.unsafe_rawColors.RED_400).hex(),
          p = (0, i.useToken)(n.Z.unsafe_rawColors.YELLOW_300).hex();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: d.progressWrapper,
              children: [
                (0, s.jsx)("div", { className: d.progressBackground }),
                (0, s.jsx)(i.Spring, {
                  from: { width: 0 },
                  to: { width: h },
                  config: { tension: 200, friction: 20, mass: 50, clamp: !0 },
                  shouldAnimate: "animate-always",
                  children: (e) => {
                    let { width: r } = e;
                    return (0, s.jsx)(t.animated.div, {
                      className: d.progressBar,
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
              className: d.labelWrapper,
              children: [
                (0, s.jsxs)("div", {
                  className: d.__invalid_current,
                  children: [
                    (0, s.jsx)(l.Z, {
                      color:
                        h < 33 ? l.Z.Colors.ERROR : l.Z.Colors.STATUS_YELLOW,
                      className: d.bold,
                      children: m ? "".concat(x, "%") : x,
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
                  className: d.requirement,
                  children: [
                    (0, s.jsx)(i.Text, {
                      className: d.bold,
                      variant: "text-sm/semibold",
                      children: m ? "".concat(u, "%") : u,
                    }),
                    (0, s.jsx)(i.Text, {
                      "aria-describedby":
                        "health-score-details-requirement-explain",
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: o.intl.string(o.t["A+mTPj"]),
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
          { guildChecklist: n, transitionState: l, onClose: h } = e,
          x = (0, c.Dt)(),
          { retentionHealthy: u, engagementHealthy: g, healthScore: p } = n,
          {
            avg_nonnew_participators: b,
            avg_nonnew_communicators: j,
            perc_ret_w1_intentful: _,
          } = p;
        if (
          (!g &&
            null != b &&
            b < 40 &&
            (a = (0, s.jsxs)("div", {
              className: d.failingBlock,
              children: [
                (0, s.jsx)(i.Heading, {
                  className: d.marginAfter,
                  variant: "heading-md/semibold",
                  children: o.intl.string(o.t.sEzDIS),
                }),
                (0, s.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  children: o.intl.string(o.t.zNp3Ki),
                }),
                (0, s.jsx)(m, {
                  currentNumber: b,
                  thresholdNumber: 40,
                  currentLabel: o.intl.string(o.t.BtTX9P),
                }),
              ],
            })),
          !g &&
            null != j &&
            j < 20 &&
            (t = (0, s.jsxs)("div", {
              className: d.failingBlock,
              children: [
                (0, s.jsx)(i.Heading, {
                  className: d.marginAfter,
                  variant: "heading-md/semibold",
                  children: o.intl.string(o.t.fWQTbm),
                }),
                (0, s.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  children: o.intl.string(o.t.Tl8MR0),
                }),
                (0, s.jsx)(m, {
                  currentNumber: j,
                  thresholdNumber: 20,
                  currentLabel: o.intl.string(o.t.PFQI7u),
                }),
              ],
            })),
          !u && null != _)
        ) {
          let e = Math.floor(100 * _);
          r = (0, s.jsxs)("div", {
            className: d.failingBlock,
            children: [
              (0, s.jsx)(i.Heading, {
                className: d.marginAfter,
                variant: "heading-md/semibold",
                children: o.intl.string(o.t.YF6x29),
              }),
              (0, s.jsx)(i.Text, {
                variant: "text-sm/normal",
                children: o.intl.format(o.t.kMBzFh, {}),
              }),
              (0, s.jsx)(m, {
                currentNumber: e,
                thresholdNumber: 10,
                currentLabel: o.intl.string(o.t.WpwyIi),
                isPercent: !0,
              }),
            ],
          });
        }
        return (0, s.jsxs)(i.ModalRoot, {
          transitionState: l,
          size: i.ModalSize.MEDIUM,
          className: d.__invalid_modal,
          "aria-labelledby": x,
          children: [
            (0, s.jsxs)(i.ModalContent, {
              className: d.content,
              children: [
                (0, s.jsx)(i.Heading, {
                  variant: "heading-xl/semibold",
                  className: d.modalHeader,
                  id: x,
                  children: o.intl.string(o.t["+GHxPz"]),
                }),
                (0, s.jsx)(i.Text, {
                  className: d.marginAfter,
                  variant: "text-sm/normal",
                  children: o.intl.string(o.t.QOs3XF),
                }),
                (0, s.jsx)("div", { className: d.separator }),
                a,
                t,
                r,
                (0, s.jsx)("div", { className: d.separator }),
                (0, s.jsxs)(i.Text, {
                  className: d.marginAfter,
                  color: "header-secondary",
                  id: "health-score-details-score-explain",
                  variant: "text-sm/normal",
                  children: [
                    (0, s.jsx)("sup", { "aria-hidden": !0, children: "1 " }),
                    o.intl.string(o.t.tN5kb2),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(i.ModalCloseButton, {
              onClick: h,
              className: d.closeButton,
            }),
          ],
        });
      };
    },
    720664: function (e, r, a) {
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
//# sourceMappingURL=d9bbf94214f295a36561.js.map
