"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83942"],
  {
    743582: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return S;
          },
        }),
        s(47120);
      var n = s(735250),
        _ = s(470079),
        l = s(512722),
        i = s.n(l),
        t = s(481060),
        E = s(935369),
        o = s(728345),
        T = s(313201),
        r = s(577275),
        c = s(829857),
        I = s(689938),
        d = s(591836);
      function S(e) {
        var a, s;
        let { transitionState: l, application: S, onClose: N } = e,
          M = (0, T.Dt)(),
          [A, L] = _.useState(
            null == S
              ? void 0
              : null === (a = S.team) || void 0 === a
                ? void 0
                : a.id,
          ),
          { teams: C } = (0, r.Z)(),
          O = _.useMemo(
            () =>
              C.filter((e) => e.payout_account_status === c.C.ACTIVE).map(
                (e) => ({ label: e.name, value: e.id }),
              ),
            [C],
          ),
          u =
            (null == S
              ? void 0
              : null === (s = S.team) || void 0 === s
                ? void 0
                : s.id) !== A,
          [g, { loading: m, error: R }] = (0, E.Z)(o.Z.transferApplication),
          x = async () => {
            i()(null != S, "no application"),
              i()(null != A, "no team selected"),
              null != (await g({ applicationId: S.id, teamId: A })) && N();
          },
          D = (null == S ? void 0 : S.team) != null;
        return (0, n.jsxs)(t.ModalRoot, {
          transitionState: l,
          "aria-labelledby": M,
          children: [
            (0, n.jsxs)(t.ModalHeader, {
              children: [
                (0, n.jsx)(t.Heading, {
                  id: M,
                  variant: "heading-md/semibold",
                  children: D
                    ? I.Z.Messages
                        .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_TITLE
                    : I.Z.Messages
                        .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_TITLE,
                }),
                (0, n.jsx)(t.ModalCloseButton, {
                  className: d.closeButton,
                  onClick: N,
                }),
              ],
            }),
            (0, n.jsxs)(t.ModalContent, {
              className: d.content,
              children: [
                D
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(t.FormText, {
                          children:
                            I.Z.Messages
                              .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_DESCRIPTION,
                        }),
                        (0, n.jsx)(t.Spacer, { size: 8 }),
                        (0, n.jsxs)(t.Heading, {
                          className: d.warningHeading,
                          variant: "text-sm/semibold",
                          color: "text-danger",
                          children: [
                            (0, n.jsx)(t.CircleWarningIcon, {
                              size: "xs",
                              color: "currentColor",
                              className: d.warningIcon,
                            }),
                            I.Z.Messages
                              .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TEAM_CHANGE_WARNING_HEADING,
                          ],
                        }),
                        (0, n.jsx)(t.Spacer, { size: 4 }),
                        (0, n.jsx)(t.FormText, {
                          type: t.FormText.Types.ERROR,
                          children:
                            I.Z.Messages
                              .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TEAM_CHANGE_WARNING,
                        }),
                      ],
                    })
                  : (0, n.jsx)(t.FormText, {
                      children:
                        I.Z.Messages
                          .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_DESCRIPTION,
                    }),
                null != R
                  ? (0, n.jsx)(t.FormErrorBlock, { children: R.message })
                  : null,
                (0, n.jsx)(t.Spacer, { size: 16 }),
                (0, n.jsx)(t.FormItem, {
                  title: D
                    ? I.Z.Messages
                        .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_TO_TRANSFER_LABEL
                    : I.Z.Messages
                        .GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_LABEL,
                  required: !0,
                  children: (0, n.jsx)(t.SingleSelect, {
                    className: d.__invalid_teamSelect,
                    options: O,
                    placeholder:
                      I.Z.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
                    value: A,
                    isDisabled: 0 === O.length,
                    onChange: (e) => L(e),
                    "aria-label":
                      I.Z.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
                  }),
                }),
              ],
            }),
            (0, n.jsx)(t.ModalFooter, {
              className: d.__invalid_footer,
              children: (0, n.jsx)(t.Button, {
                color: t.Button.Colors.RED,
                className: d.__invalid_goBackButton,
                submitting: m,
                disabled: !u,
                onClick: x,
                children: I.Z.Messages.SAVE,
              }),
            }),
          ],
        });
      }
    },
    591836: function (e, a, s) {
      e.exports = {
        closeButton: "closeButton_aa3cfb",
        content: "content_aa3cfb",
        warningHeading: "warningHeading_aa3cfb",
        warningIcon: "warningIcon_aa3cfb",
      };
    },
  },
]);
//# sourceMappingURL=1ac167d0012ec9d35760.js.map
