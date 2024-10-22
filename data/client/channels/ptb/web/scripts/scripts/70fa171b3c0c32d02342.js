"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72458"],
  {
    915509: function (e, a, s) {
      s.d(a, {
        Z: function () {
          return N;
        },
      }),
        s(47120);
      var _ = s(200651),
        E = s(192379),
        t = s(120356),
        n = s.n(t),
        r = s(481060),
        I = s(313201),
        o = s(689938),
        l = s(352784);
      function N(e) {
        let {
            errorText: a,
            title: s,
            description: t,
            transitionState: N,
            onCancel: i,
            onConfirm: c,
            children: R,
          } = e,
          u = (0, I.Dt)(),
          [T, L] = E.useState(!1),
          d = E.useCallback(async () => {
            L(!0);
            try {
              await c();
            } catch (e) {
              throw e;
            } finally {
              L(!1);
            }
          }, [c]);
        return (0, _.jsxs)(r.ModalRoot, {
          className: l.modal,
          transitionState: N,
          "aria-labelledby": u,
          size: r.ModalSize.SMALL,
          children: [
            (0, _.jsxs)(r.ModalContent, {
              className: l.modalContent,
              children: [
                (0, _.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  id: u,
                  children: s,
                }),
                null != t && "" !== t
                  ? (0, _.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: l.description,
                      children: t,
                    })
                  : null,
                (0, _.jsx)("div", { className: l.body, children: R }),
                null != a && "" !== a
                  ? (0, _.jsx)(r.Text, {
                      className: l.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: a,
                    })
                  : null,
              ],
            }),
            (0, _.jsxs)(r.ModalFooter, {
              children: [
                (0, _.jsx)(r.Button, {
                  submitting: T,
                  className: l.button,
                  size: r.Button.Sizes.SMALL,
                  color: r.Button.Colors.BRAND,
                  onClick: d,
                  children: o.Z.Messages.SAVE,
                }),
                (0, _.jsx)(r.Button, {
                  className: n()(l.cancelButton, l.button),
                  size: r.Button.Sizes.SMALL,
                  color: r.Button.Colors.PRIMARY,
                  onClick: i,
                  children: o.Z.Messages.CANCEL,
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
            return c;
          },
        }),
        s(47120);
      var _ = s(200651),
        E = s(192379),
        t = s(481060),
        n = s(881052),
        r = s(434404),
        I = s(78451),
        o = s(915509),
        l = s(981631),
        N = s(689938),
        i = s(113207);
      function c(e) {
        let { guild: a, onClose: s, hideColors: c } = e,
          [R, u] = E.useState(a.verificationLevel),
          [T, L] = E.useState(null),
          d = a.hasFeature(l.oNc.COMMUNITY),
          M = (0, I.IF)(d, c).filter((e) => !e.disabled),
          C = E.useCallback(async () => {
            null != T && L(null);
            try {
              await r.Z.saveGuild(a.id, { verificationLevel: R }),
                r.Z.updateGuild({ verificationLevel: R }),
                s();
            } catch (e) {
              L(new n.Hx(e).getAnyErrorMessage());
            }
          }, [T, a.id, R, s]);
        return (0, _.jsx)(o.Z, {
          ...e,
          title: N.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL,
          errorText: T,
          onConfirm: C,
          onCancel: s,
          children: (0, _.jsxs)(t.FormSection, {
            children: [
              (0, _.jsx)(t.FormText, {
                type: t.FormText.Types.DESCRIPTION,
                className: i.marginBottom20,
                children: N.Z.Messages.FORM_HELP_VERIFICATION_LEVEL.format(),
              }),
              (0, _.jsx)(t.RadioGroup, {
                value: R,
                options: M,
                onChange: (e) => u(e.value),
              }),
            ],
          }),
        });
      }
    },
    2150: function (e, a, s) {
      var _, E;
      s.d(a, {
        q: function () {
          return _;
        },
      }),
        ((E = _ || (_ = {})).ACCENT = "accent"),
        (E.GREEN = "statusGreen"),
        (E.YELLOW = "statusYellow"),
        (E.ORANGE = "statusOrange"),
        (E.RED = "statusRed"),
        (E.NONE = "transparent");
    },
    78451: function (e, a, s) {
      s.d(a, {
        IF: function () {
          return N;
        },
        LJ: function () {
          return l;
        },
        MF: function () {
          return i;
        },
        X7: function () {
          return R;
        },
        c7: function () {
          return c;
        },
      });
      var _ = s(524437);
      s(376345);
      var E = s(692547),
        t = s(2150),
        n = s(187819),
        r = s(981631),
        I = s(973005),
        o = s(689938);
      function l(e) {
        return e.map((e) => ({
          title: e.name,
          description: e.desc,
          highlightColor: (function (e) {
            switch (e) {
              case u("PRIMARY_400"):
                return t.q.ACCENT;
              case u("GREEN_360"):
                return t.q.GREEN;
              case u("YELLOW_360"):
                return t.q.YELLOW;
              case u("ORANGE_345"):
                return t.q.ORANGE;
              case u("RED_400"):
                return t.q.RED;
              default:
                return t.q.NONE;
            }
          })(e.color),
          value: e.value,
          disabled: e.disabled,
        }));
      }
      function N() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return [
          {
            name: o.Z.Messages.VERIFICATION_LEVEL_NONE,
            desc: o.Z.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
            value: r.sFg.NONE,
            disabled: e,
            tooltipText: e
              ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
          },
          {
            name: o.Z.Messages.VERIFICATION_LEVEL_LOW,
            desc: o.Z.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
            value: r.sFg.LOW,
            color: a ? void 0 : u("GREEN_360"),
          },
          {
            name: o.Z.Messages.VERIFICATION_LEVEL_MEDIUM,
            desc: o.Z.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({
              min: r.YeM.ACCOUNT_AGE,
            }),
            value: r.sFg.MEDIUM,
            color: a ? void 0 : u("YELLOW_360"),
          },
          {
            name: o.Z.Messages.VERIFICATION_LEVEL_HIGH,
            desc: o.Z.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({
              min: r.YeM.MEMBER_AGE,
            }),
            value: r.sFg.HIGH,
            color: a ? void 0 : u("ORANGE_345"),
          },
          {
            name: o.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH,
            desc: o.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
            value: r.sFg.VERY_HIGH,
            color: a ? void 0 : u("RED_400"),
          },
        ];
      }
      function i() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
          {
            name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
            desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
            value: r.lxg.ALL_MEMBERS,
            color: u("RED_400"),
          },
          {
            name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
            desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
            value: r.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e
              ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
            color: u("YELLOW_360"),
          },
          {
            name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
            value: r.lxg.DISABLED,
            disabled: e,
            tooltipText: e
              ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
            color: u("PRIMARY_400"),
          },
        ];
      }
      function c() {
        let e = (0, n.sp)({ location: "generate-dm-spam-options" });
        return [
          {
            name: e
              ? o.Z.Messages.USER_SETTING_DM_SPAM_FILTER_ALL_TITLE
              : o.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
            desc: e
              ? o.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2
              : o.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
            value: _.Xr.FRIENDS_AND_NON_FRIENDS,
            color: u("GREEN_360"),
          },
          {
            name: e
              ? o.Z.Messages.USER_SETTING_DM_SPAM_FILTER_NON_FRIENDS_TITLE
              : o.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
            desc: e
              ? o.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP_V2
              : o.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
            value: _.Xr.NON_FRIENDS,
            color: u("YELLOW_360"),
          },
          {
            name: e
              ? o.Z.Messages.USER_SETTING_DM_SPAM_FILTER_DISABLED_TITLE
              : o.Z.Messages.USER_DM_SPAM_FILTER_DISABLED,
            desc: e
              ? o.Z.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP_V2
              : o.Z.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
            value: _.Xr.DISABLED,
            color: u("RED_400"),
          },
        ];
      }
      function R() {
        return [
          {
            name: o.Z.Messages
              .USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
            desc: o.Z.Messages
              .USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
            value: I.TI.FRIENDS_AND_NON_FRIENDS,
            color: u("GREEN_360"),
          },
          {
            name: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
            desc: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
            value: I.TI.NON_FRIENDS,
            color: u("YELLOW_360"),
          },
          {
            name: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
            value: I.TI.DISABLED,
            color: u("RED_400"),
          },
        ];
      }
      function u(e) {
        return E.Z.unsafe_rawColors[e].css;
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
//# sourceMappingURL=70fa171b3c0c32d02342.js.map
