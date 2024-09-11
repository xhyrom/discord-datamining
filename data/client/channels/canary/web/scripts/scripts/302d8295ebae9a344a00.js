"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72458"],
  {
    915509: function (e, a, s) {
      s.d(a, {
        Z: function () {
          return i;
        },
      }),
        s(47120);
      var t = s(735250),
        n = s(470079),
        _ = s(120356),
        E = s.n(_),
        r = s(481060),
        o = s(313201),
        I = s(689938),
        l = s(352784);
      function i(e) {
        let {
            errorText: a,
            title: s,
            description: _,
            transitionState: i,
            onCancel: c,
            onConfirm: u,
            children: N,
          } = e,
          R = (0, o.Dt)(),
          [T, d] = n.useState(!1),
          L = n.useCallback(async () => {
            d(!0);
            try {
              await u();
            } catch (e) {
              throw e;
            } finally {
              d(!1);
            }
          }, [u]);
        return (0, t.jsxs)(r.ModalRoot, {
          className: l.modal,
          transitionState: i,
          "aria-labelledby": R,
          size: r.ModalSize.SMALL,
          children: [
            (0, t.jsxs)(r.ModalContent, {
              className: l.modalContent,
              children: [
                (0, t.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  id: R,
                  children: s,
                }),
                null != _ && "" !== _
                  ? (0, t.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: l.description,
                      children: _,
                    })
                  : null,
                (0, t.jsx)("div", { className: l.body, children: N }),
                null != a && "" !== a
                  ? (0, t.jsx)(r.Text, {
                      className: l.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: a,
                    })
                  : null,
              ],
            }),
            (0, t.jsxs)(r.ModalFooter, {
              children: [
                (0, t.jsx)(r.Button, {
                  submitting: T,
                  className: l.button,
                  size: r.Button.Sizes.SMALL,
                  color: r.Button.Colors.BRAND,
                  onClick: L,
                  children: I.Z.Messages.SAVE,
                }),
                (0, t.jsx)(r.Button, {
                  className: E()(l.cancelButton, l.button),
                  size: r.Button.Sizes.SMALL,
                  color: r.Button.Colors.PRIMARY,
                  onClick: c,
                  children: I.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    694278: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return u;
          },
        }),
        s(47120);
      var t = s(735250),
        n = s(470079),
        _ = s(481060),
        E = s(881052),
        r = s(434404),
        o = s(78451),
        I = s(915509),
        l = s(981631),
        i = s(689938),
        c = s(113207);
      function u(e) {
        let { guild: a, onClose: s, hideColors: u } = e,
          [N, R] = n.useState(a.verificationLevel),
          [T, d] = n.useState(null),
          L = a.hasFeature(l.oNc.COMMUNITY),
          M = (0, o.IF)(L, u).filter((e) => !e.disabled),
          C = n.useCallback(async () => {
            null != T && d(null);
            try {
              await r.Z.saveGuild(a.id, { verificationLevel: N }),
                r.Z.updateGuild({ verificationLevel: N }),
                s();
            } catch (e) {
              d(new E.Hx(e).getAnyErrorMessage());
            }
          }, [T, a.id, N, s]);
        return (0, t.jsx)(I.Z, {
          ...e,
          title: i.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL,
          errorText: T,
          onConfirm: C,
          onCancel: s,
          children: (0, t.jsxs)(_.FormSection, {
            children: [
              (0, t.jsx)(_.FormText, {
                type: _.FormText.Types.DESCRIPTION,
                className: c.marginBottom20,
                children: i.Z.Messages.FORM_HELP_VERIFICATION_LEVEL.format(),
              }),
              (0, t.jsx)(_.RadioGroup, {
                value: N,
                options: M,
                onChange: (e) => R(e.value),
              }),
            ],
          }),
        });
      }
    },
    2150: function (e, a, s) {
      var t, n;
      s.d(a, {
        q: function () {
          return t;
        },
      }),
        ((n = t || (t = {})).ACCENT = "accent"),
        (n.GREEN = "statusGreen"),
        (n.YELLOW = "statusYellow"),
        (n.ORANGE = "statusOrange"),
        (n.RED = "statusRed"),
        (n.NONE = "transparent");
    },
    78451: function (e, a, s) {
      s.d(a, {
        IF: function () {
          return i;
        },
        LJ: function () {
          return l;
        },
        MF: function () {
          return c;
        },
        X7: function () {
          return N;
        },
        c7: function () {
          return u;
        },
      });
      var t = s(524437);
      s(376345);
      var n = s(692547),
        _ = s(2150),
        E = s(187819),
        r = s(981631),
        o = s(973005),
        I = s(689938);
      function l(e) {
        return e.map((e) => ({
          title: e.name,
          description: e.desc,
          highlightColor: (function (e) {
            switch (e) {
              case R("PRIMARY_400"):
                return _.q.ACCENT;
              case R("GREEN_360"):
                return _.q.GREEN;
              case R("YELLOW_360"):
                return _.q.YELLOW;
              case R("ORANGE_345"):
                return _.q.ORANGE;
              case R("RED_400"):
                return _.q.RED;
              default:
                return _.q.NONE;
            }
          })(e.color),
          value: e.value,
          disabled: e.disabled,
        }));
      }
      function i() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return [
          {
            name: I.Z.Messages.VERIFICATION_LEVEL_NONE,
            desc: I.Z.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
            value: r.sFg.NONE,
            disabled: e,
            tooltipText: e
              ? I.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
          },
          {
            name: I.Z.Messages.VERIFICATION_LEVEL_LOW,
            desc: I.Z.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
            value: r.sFg.LOW,
            color: a ? void 0 : R("GREEN_360"),
          },
          {
            name: I.Z.Messages.VERIFICATION_LEVEL_MEDIUM,
            desc: I.Z.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({
              min: r.YeM.ACCOUNT_AGE,
            }),
            value: r.sFg.MEDIUM,
            color: a ? void 0 : R("YELLOW_360"),
          },
          {
            name: I.Z.Messages.VERIFICATION_LEVEL_HIGH,
            desc: I.Z.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({
              min: r.YeM.MEMBER_AGE,
            }),
            value: r.sFg.HIGH,
            color: a ? void 0 : R("ORANGE_345"),
          },
          {
            name: I.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH,
            desc: I.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
            value: r.sFg.VERY_HIGH,
            color: a ? void 0 : R("RED_400"),
          },
        ];
      }
      function c() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
          {
            name: I.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
            desc: I.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
            value: r.lxg.ALL_MEMBERS,
            color: R("RED_400"),
          },
          {
            name: I.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
            desc: I.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
            value: r.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e
              ? I.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
            color: R("YELLOW_360"),
          },
          {
            name: I.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: I.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
            value: r.lxg.DISABLED,
            disabled: e,
            tooltipText: e
              ? I.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
            color: R("PRIMARY_400"),
          },
        ];
      }
      function u() {
        let e = (0, E.sp)({
          location: "generate-dm-spam-options",
          autoTrackExposure: !1,
        });
        return [
          {
            name: e
              ? I.Z.Messages.USER_SETTING_DM_SPAM_FILTER_ALL_TITLE
              : I.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
            desc: I.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
            value: t.Xr.FRIENDS_AND_NON_FRIENDS,
            color: R("GREEN_360"),
          },
          {
            name: e
              ? I.Z.Messages.USER_SETTING_DM_SPAM_FILTER_NON_FRIENDS_TITLE
              : I.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
            desc: I.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
            value: t.Xr.NON_FRIENDS,
            color: R("YELLOW_360"),
          },
          {
            name: e
              ? I.Z.Messages.USER_SETTING_DM_SPAM_FILTER_DISABLED_TITLE
              : I.Z.Messages.USER_DM_SPAM_FILTER_DISABLED,
            desc: I.Z.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
            value: t.Xr.DISABLED,
            color: R("RED_400"),
          },
        ];
      }
      function N() {
        return [
          {
            name: I.Z.Messages
              .USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
            desc: I.Z.Messages
              .USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
            value: o.TI.FRIENDS_AND_NON_FRIENDS,
            color: R("GREEN_360"),
          },
          {
            name: I.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
            desc: I.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
            value: o.TI.NON_FRIENDS,
            color: R("YELLOW_360"),
          },
          {
            name: I.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: I.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
            value: o.TI.DISABLED,
            color: R("RED_400"),
          },
        ];
      }
      function R(e) {
        return n.Z.unsafe_rawColors[e].css;
      }
    },
    352784: function (e, a, s) {
      e.exports = {
        modal: "modal_f152fa",
        description: "description_f152fa",
        body: "body_f152fa",
        modalContent: "modalContent_f152fa",
        addItemContainer: "addItemContainer_f152fa",
        addItemButton: "addItemButton_f152fa",
        dragging: "dragging_f152fa",
        draggableInputContainer: "draggableInputContainer_f152fa",
        inputWrapper: "inputWrapper_f152fa",
        clearButton: "clearButton_f152fa",
        rulesInputNumber: "rulesInputNumber_f152fa",
        rulesTextAreaInput: "rulesTextAreaInput_f152fa",
        clearIcon: "clearIcon_f152fa",
        dragContainer: "dragContainer_f152fa",
        dragIcon: "dragIcon_f152fa",
        divider: "divider_f152fa",
        termsExampleRulesContainer: "termsExampleRulesContainer_f152fa",
        termsExampleRulePairContainer: "termsExampleRulePairContainer_f152fa",
        exampleRule: "exampleRule_f152fa",
        disabled: "disabled_f152fa",
        errorText: "errorText_f152fa",
        spacedItem: "spacedItem_f152fa",
        button: "button_f152fa",
        cancelButton: "cancelButton_f152fa",
        characterCount: "characterCount_f152fa",
        radioIconEmptyContainer: "radioIconEmptyContainer_f152fa",
        radioIconEmpty: "radioIconEmpty_f152fa",
      };
    },
  },
]);
//# sourceMappingURL=302d8295ebae9a344a00.js.map
