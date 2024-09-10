"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9354"],
  {
    781208: function (e, s, n) {
      n.d(s, {
        $l: function () {
          return S;
        },
        RI: function () {
          return t;
        },
        Ud: function () {
          return a;
        },
      });
      var o,
        c,
        r = n(689938);
      let t = "https://discord.com/community/securing-your-server";
      ((o = c || (c = {})).DM_SPAM = "DM_SPAM"),
        (o.MESSAGE_SPAM = "MESSAGE_SPAM"),
        (o.MENTION_SPAM = "MENTION_SPAM"),
        (o.SUSPICIOUS_USERS = "SUSPICIOUS_USERS"),
        (o.SETTINGS_SPAM = "SETTINGS_SPAM");
      let a = [
          "MESSAGE_SPAM",
          "DM_SPAM",
          "MENTION_SPAM",
          "SUSPICIOUS_USERS",
          "SETTINGS_SPAM",
        ],
        S = (e) => {
          switch (e) {
            case "DM_SPAM":
              return r.Z.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_DM_SPAM;
            case "MENTION_SPAM":
              return r.Z.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_MENTION_SPAM;
            case "MESSAGE_SPAM":
              return r.Z.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_MESSAGE_SPAM;
            case "SETTINGS_SPAM":
              return r.Z.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_SETTINGS_SPAM;
            case "SUSPICIOUS_USERS":
              return r.Z.Messages
                .GUILD_REPORT_RAID_MODAL_CHOICE_SUSPICIOUS_USERS;
          }
          return null;
        };
    },
    461533: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return M;
          },
        }),
        n(47120);
      var o = n(735250),
        c = n(470079),
        r = n(481060),
        t = n(369994),
        a = n(781208),
        S = n(689938),
        _ = n(91221);
      function M(e) {
        let { guildId: s, transitionState: n, onClose: M } = e,
          [i, l] = c.useState([]),
          I = c.useCallback(() => {
            (0, t.KK)(s, i), (0, t.C4)(s), M();
          }, [s, M, i]),
          C = c.useCallback(
            (e) => () => {
              l((s) => (s.includes(e) ? s.filter((s) => s !== e) : [...s, e]));
            },
            [],
          ),
          A = c.useCallback(() => {
            open(a.RI);
          }, []);
        return (0, o.jsxs)(r.ModalRoot, {
          transitionState: n,
          size: r.ModalSize.SMALL,
          children: [
            (0, o.jsx)(r.ModalHeader, {
              separator: !1,
              children: (0, o.jsx)(r.Heading, {
                color: "header-primary",
                variant: "heading-md/semibold",
                children: S.Z.Messages.GUILD_REPORT_RAID_MODAL_TITLE,
              }),
            }),
            (0, o.jsxs)(r.ModalContent, {
              children: [
                (0, o.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children:
                    S.Z.Messages.GUILD_REPORT_RAID_MODAL_DESCRIPTION_CLICKABLE.format(
                      { onClick: A },
                    ),
                }),
                (0, o.jsx)("div", {
                  className: _.mainCheckboxContainer,
                  children: a.Ud.map((e) =>
                    (0, o.jsxs)(
                      r.Clickable,
                      {
                        className: _.checkboxContainer,
                        onClick: C(e),
                        children: [
                          (0, o.jsx)(r.Checkbox, {
                            type: r.Checkbox.Types.INVERTED,
                            className: _.checkbox,
                            value: i.includes(e),
                            displayOnly: !0,
                          }),
                          (0, o.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: (0, a.$l)(e),
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, o.jsxs)(r.ModalFooter, {
              children: [
                (0, o.jsx)(r.Button, {
                  onClick: I,
                  color: r.Button.Colors.BRAND,
                  look: r.Button.Looks.FILLED,
                  children: S.Z.Messages.SUBMIT,
                }),
                (0, o.jsx)(r.Button, {
                  onClick: M,
                  color: r.Button.Colors.PRIMARY,
                  look: r.Button.Looks.LINK,
                  children: S.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    91221: function (e, s, n) {
      e.exports = {
        mainCheckboxContainer: "mainCheckboxContainer_cbdcfc",
        checkboxContainer: "checkboxContainer_cbdcfc",
        checkbox: "checkbox_cbdcfc",
      };
    },
  },
]);
//# sourceMappingURL=a72d44b5b5553bd6ee9c.js.map
