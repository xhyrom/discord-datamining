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
      var n = s(735250),
        t = s(470079),
        E = s(120356),
        _ = s.n(E),
        r = s(481060),
        o = s(313201),
        I = s(689938),
        l = s(352784);
      function i(e) {
        let {
            errorText: a,
            title: s,
            description: E,
            transitionState: i,
            onCancel: c,
            onConfirm: u,
            children: N,
          } = e,
          d = (0, o.Dt)(),
          [R, T] = t.useState(!1),
          L = t.useCallback(async () => {
            T(!0);
            try {
              await u();
            } catch (e) {
              throw e;
            } finally {
              T(!1);
            }
          }, [u]);
        return (0, n.jsxs)(r.ModalRoot, {
          className: l.modal,
          transitionState: i,
          "aria-labelledby": d,
          size: r.ModalSize.SMALL,
          children: [
            (0, n.jsxs)(r.ModalContent, {
              className: l.modalContent,
              children: [
                (0, n.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  id: d,
                  children: s,
                }),
                null != E && "" !== E
                  ? (0, n.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: l.description,
                      children: E,
                    })
                  : null,
                (0, n.jsx)("div", { className: l.body, children: N }),
                null != a && "" !== a
                  ? (0, n.jsx)(r.Text, {
                      className: l.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: a,
                    })
                  : null,
              ],
            }),
            (0, n.jsxs)(r.ModalFooter, {
              children: [
                (0, n.jsx)(r.Button, {
                  submitting: R,
                  className: l.button,
                  size: r.Button.Sizes.SMALL,
                  color: r.Button.Colors.BRAND,
                  onClick: L,
                  children: I.Z.Messages.SAVE,
                }),
                (0, n.jsx)(r.Button, {
                  className: _()(l.cancelButton, l.button),
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
      var n = s(735250),
        t = s(470079),
        E = s(481060),
        _ = s(881052),
        r = s(434404),
        o = s(78451),
        I = s(915509),
        l = s(981631),
        i = s(689938),
        c = s(113207);
      function u(e) {
        let { guild: a, onClose: s, hideColors: u } = e,
          [N, d] = t.useState(a.verificationLevel),
          [R, T] = t.useState(null),
          L = a.hasFeature(l.oNc.COMMUNITY),
          C = (0, o.IF)(L, u).filter((e) => !e.disabled),
          f = t.useCallback(async () => {
            null != R && T(null);
            try {
              await r.Z.saveGuild(a.id, { verificationLevel: N }),
                r.Z.updateGuild({ verificationLevel: N }),
                s();
            } catch (e) {
              T(new _.Hx(e).getAnyErrorMessage());
            }
          }, [R, a.id, N, s]);
        return (0, n.jsx)(I.Z, {
          ...e,
          title: i.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL,
          errorText: R,
          onConfirm: f,
          onCancel: s,
          children: (0, n.jsxs)(E.FormSection, {
            children: [
              (0, n.jsx)(E.FormText, {
                type: E.FormText.Types.DESCRIPTION,
                className: c.marginBottom20,
                children: i.Z.Messages.FORM_HELP_VERIFICATION_LEVEL.format(),
              }),
              (0, n.jsx)(E.RadioGroup, {
                value: N,
                options: C,
                onChange: (e) => d(e.value),
              }),
            ],
          }),
        });
      }
    },
    2150: function (e, a, s) {
      var n, t;
      s.d(a, {
        q: function () {
          return n;
        },
      }),
        ((t = n || (n = {})).ACCENT = "accent"),
        (t.GREEN = "statusGreen"),
        (t.YELLOW = "statusYellow"),
        (t.ORANGE = "statusOrange"),
        (t.RED = "statusRed"),
        (t.NONE = "transparent");
    },
    78451: function (e, a, s) {
      s.d(a, {
        IF: function () {
          return l;
        },
        LJ: function () {
          return I;
        },
        MF: function () {
          return i;
        },
        X7: function () {
          return u;
        },
        c7: function () {
          return c;
        },
      });
      var n = s(524437);
      s(376345);
      var t = s(692547),
        E = s(2150),
        _ = s(981631),
        r = s(973005),
        o = s(689938);
      function I(e) {
        return e.map((e) => ({
          title: e.name,
          description: e.desc,
          highlightColor: (function (e) {
            switch (e) {
              case N("PRIMARY_400"):
                return E.q.ACCENT;
              case N("GREEN_360"):
                return E.q.GREEN;
              case N("YELLOW_360"):
                return E.q.YELLOW;
              case N("ORANGE_345"):
                return E.q.ORANGE;
              case N("RED_400"):
                return E.q.RED;
              default:
                return E.q.NONE;
            }
          })(e.color),
          value: e.value,
          disabled: e.disabled,
        }));
      }
      function l() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return [
          {
            name: o.Z.Messages.VERIFICATION_LEVEL_NONE,
            desc: o.Z.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
            value: _.sFg.NONE,
            disabled: e,
            tooltipText: e
              ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
          },
          {
            name: o.Z.Messages.VERIFICATION_LEVEL_LOW,
            desc: o.Z.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
            value: _.sFg.LOW,
            color: a ? void 0 : N("GREEN_360"),
          },
          {
            name: o.Z.Messages.VERIFICATION_LEVEL_MEDIUM,
            desc: o.Z.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({
              min: _.YeM.ACCOUNT_AGE,
            }),
            value: _.sFg.MEDIUM,
            color: a ? void 0 : N("YELLOW_360"),
          },
          {
            name: o.Z.Messages.VERIFICATION_LEVEL_HIGH,
            desc: o.Z.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({
              min: _.YeM.MEMBER_AGE,
            }),
            value: _.sFg.HIGH,
            color: a ? void 0 : N("ORANGE_345"),
          },
          {
            name: o.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH,
            desc: o.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
            value: _.sFg.VERY_HIGH,
            color: a ? void 0 : N("RED_400"),
          },
        ];
      }
      function i() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
          {
            name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
            desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
            value: _.lxg.ALL_MEMBERS,
            color: N("RED_400"),
          },
          {
            name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
            desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
            value: _.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e
              ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
            color: N("YELLOW_360"),
          },
          {
            name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
            value: _.lxg.DISABLED,
            disabled: e,
            tooltipText: e
              ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
            color: N("PRIMARY_400"),
          },
        ];
      }
      function c() {
        return [
          {
            name: o.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
            desc: o.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
            value: n.Xr.FRIENDS_AND_NON_FRIENDS,
            color: N("GREEN_360"),
          },
          {
            name: o.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
            desc: o.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
            value: n.Xr.NON_FRIENDS,
            color: N("YELLOW_360"),
          },
          {
            name: o.Z.Messages.USER_DM_SPAM_FILTER_DISABLED,
            desc: o.Z.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
            value: n.Xr.DISABLED,
            color: N("RED_400"),
          },
        ];
      }
      function u() {
        return [
          {
            name: o.Z.Messages
              .USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
            desc: o.Z.Messages
              .USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
            value: r.TI.FRIENDS_AND_NON_FRIENDS,
            color: N("GREEN_360"),
          },
          {
            name: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
            desc: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
            value: r.TI.NON_FRIENDS,
            color: N("YELLOW_360"),
          },
          {
            name: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
            value: r.TI.DISABLED,
            color: N("RED_400"),
          },
        ];
      }
      function N(e) {
        return t.Z.unsafe_rawColors[e].css;
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
//# sourceMappingURL=424752d85c257e22a5d5.js.map
