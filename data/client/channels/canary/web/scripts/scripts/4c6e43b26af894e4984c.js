"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23401"],
  {
    666599: function (e, a, s) {
      s.r(a);
      var r = s(735250);
      s(470079);
      var n = s(526629),
        l = s(692547),
        t = s(481060),
        i = s(112831),
        c = s(313201),
        o = s(731455),
        d = s(689938),
        _ = s(267021);
      let I = (e) => {
        let {
            currentNumber: a,
            thresholdNumber: s,
            currentLabel: c,
            isPercent: o = !1,
          } = e,
          I = null != s ? Math.floor((a / s) * 100) : 0,
          T = d.Z.Messages.NUMBERS_ONLY.format({ count: a }),
          m = null != s ? d.Z.Messages.NUMBERS_ONLY.format({ count: s }) : "--",
          S = (0, t.useToken)(l.Z.unsafe_rawColors.RED_400).hex(),
          E = (0, t.useToken)(l.Z.unsafe_rawColors.YELLOW_300).hex();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: _.progressWrapper,
              children: [
                (0, r.jsx)("div", { className: _.progressBackground }),
                (0, r.jsx)(t.Spring, {
                  from: { width: 0 },
                  to: { width: I },
                  config: { tension: 200, friction: 20, mass: 50, clamp: !0 },
                  shouldAnimate: "animate-always",
                  children: (e) => {
                    let { width: a } = e;
                    return (0, r.jsx)(n.animated.div, {
                      className: _.progressBar,
                      style: {
                        width: a.interpolate((e) => "".concat(e, "%")),
                        backgroundColor: a.interpolate((e) => (e < 33 ? S : E)),
                      },
                    });
                  },
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: _.labelWrapper,
              children: [
                (0, r.jsxs)("div", {
                  className: _.__invalid_current,
                  children: [
                    (0, r.jsx)(i.Z, {
                      color:
                        I < 33 ? i.Z.Colors.ERROR : i.Z.Colors.STATUS_YELLOW,
                      className: _.bold,
                      children: o ? "".concat(T, "%") : T,
                    }),
                    (0, r.jsxs)(t.Text, {
                      "aria-describedby": "health-score-details-score-explain",
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: [
                        c,
                        (0, r.jsx)("sup", { "aria-hidden": !0, children: "1" }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: _.requirement,
                  children: [
                    (0, r.jsx)(t.Text, {
                      className: _.bold,
                      variant: "text-sm/semibold",
                      children: o ? "".concat(m, "%") : m,
                    }),
                    (0, r.jsx)(t.Text, {
                      "aria-describedby":
                        "health-score-details-requirement-explain",
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children:
                        d.Z.Messages
                          .GUILD_SETTINGS_DISCOVERY_CHECKLIST_PROGRESS_REQUIREMENT_LABEL,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      a.default = (e) => {
        let a,
          s,
          n,
          { guildChecklist: l, transitionState: i, onClose: T } = e,
          m = (0, c.Dt)(),
          { retentionHealthy: S, engagementHealthy: E, healthScore: N } = l,
          {
            avg_nonnew_participators: C,
            avg_nonnew_communicators: h,
            perc_ret_w1_intentful: x,
          } = N;
        if (
          (!E &&
            null != C &&
            C < o.b0 &&
            (s = (0, r.jsxs)("div", {
              className: _.failingBlock,
              children: [
                (0, r.jsx)(t.Heading, {
                  className: _.marginAfter,
                  variant: "heading-md/semibold",
                  children:
                    d.Z.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_VISITOR_FAILING_ACTION,
                }),
                (0, r.jsx)(t.Text, {
                  variant: "text-sm/normal",
                  children:
                    d.Z.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_VISITOR_FAILING_ACTION_DETAILS,
                }),
                (0, r.jsx)(I, {
                  currentNumber: C,
                  thresholdNumber: 40,
                  currentLabel:
                    d.Z.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_VISITOR_PROGRESS_LABEL,
                }),
              ],
            })),
          !E &&
            null != h &&
            h < o.md &&
            (n = (0, r.jsxs)("div", {
              className: _.failingBlock,
              children: [
                (0, r.jsx)(t.Heading, {
                  className: _.marginAfter,
                  variant: "heading-md/semibold",
                  children:
                    d.Z.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_COMMUNICATOR_FAILING_ACTION,
                }),
                (0, r.jsx)(t.Text, {
                  variant: "text-sm/normal",
                  children:
                    d.Z.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_COMMUNICATOR_FAILING_ACTION_DETAILS,
                }),
                (0, r.jsx)(I, {
                  currentNumber: h,
                  thresholdNumber: 20,
                  currentLabel:
                    d.Z.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_COMMUNICATOR_PROGRESS_LABEL,
                }),
              ],
            })),
          !S && null != x)
        ) {
          let e = Math.floor(100 * x);
          a = (0, r.jsxs)("div", {
            className: _.failingBlock,
            children: [
              (0, r.jsx)(t.Heading, {
                className: _.marginAfter,
                variant: "heading-md/semibold",
                children:
                  d.Z.Messages
                    .GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_FAILING_ACTION,
              }),
              (0, r.jsx)(t.Text, {
                variant: "text-sm/normal",
                children:
                  d.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_FAILING_ACTION_DETAILS_UPDATED.format(),
              }),
              (0, r.jsx)(I, {
                currentNumber: e,
                thresholdNumber: 10,
                currentLabel:
                  d.Z.Messages
                    .GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_PROGRESS_LABEL,
                isPercent: !0,
              }),
            ],
          });
        }
        return (0, r.jsxs)(t.ModalRoot, {
          transitionState: i,
          size: t.ModalSize.MEDIUM,
          className: _.__invalid_modal,
          "aria-labelledby": m,
          children: [
            (0, r.jsxs)(t.ModalContent, {
              className: _.content,
              children: [
                (0, r.jsx)(t.Heading, {
                  variant: "heading-xl/semibold",
                  className: _.modalHeader,
                  id: m,
                  children:
                    d.Z.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_FAILING,
                }),
                (0, r.jsx)(t.Text, {
                  className: _.marginAfter,
                  variant: "text-sm/normal",
                  children:
                    d.Z.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTH_DEFINITIONS_INTRO,
                }),
                (0, r.jsx)("div", { className: _.separator }),
                s,
                n,
                a,
                (0, r.jsx)("div", { className: _.separator }),
                (0, r.jsxs)(t.Text, {
                  className: _.marginAfter,
                  color: "header-secondary",
                  id: "health-score-details-score-explain",
                  variant: "text-sm/normal",
                  children: [
                    (0, r.jsx)("sup", { "aria-hidden": !0, children: "1 " }),
                    d.Z.Messages
                      .GUILD_SETTINGS_DISCOVERY_CHECKLIST_SCORE_EXPLAIN,
                  ],
                }),
              ],
            }),
            (0, r.jsx)(t.ModalCloseButton, {
              onClick: T,
              className: _.closeButton,
            }),
          ],
        });
      };
    },
    267021: function (e, a, s) {
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
//# sourceMappingURL=4c6e43b26af894e4984c.js.map
