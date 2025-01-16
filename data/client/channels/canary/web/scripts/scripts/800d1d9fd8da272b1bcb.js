"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9354"],
  {
    781208: function (n, t, e) {
      e.d(t, {
        $l: function () {
          return l;
        },
        RI: function () {
          return i;
        },
        Ud: function () {
          return s;
        },
      });
      var o,
        r,
        c = e(388032);
      let i = "https://discord.com/community/securing-your-server";
      ((o = r || (r = {})).DM_SPAM = "DM_SPAM"),
        (o.MESSAGE_SPAM = "MESSAGE_SPAM"),
        (o.MENTION_SPAM = "MENTION_SPAM"),
        (o.SUSPICIOUS_USERS = "SUSPICIOUS_USERS"),
        (o.SETTINGS_SPAM = "SETTINGS_SPAM");
      let s = [
          "MESSAGE_SPAM",
          "DM_SPAM",
          "MENTION_SPAM",
          "SUSPICIOUS_USERS",
          "SETTINGS_SPAM",
        ],
        l = (n) => {
          switch (n) {
            case "DM_SPAM":
              return c.intl.string(c.t["9CYNmZ"]);
            case "MENTION_SPAM":
              return c.intl.string(c.t["hR/IdH"]);
            case "MESSAGE_SPAM":
              return c.intl.string(c.t.fwloj4);
            case "SETTINGS_SPAM":
              return c.intl.string(c.t.ETFVFx);
            case "SUSPICIOUS_USERS":
              return c.intl.string(c.t["lKXu+v"]);
          }
          return null;
        };
    },
    461533: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return S;
          },
        }),
        e(47120);
      var o = e(200651),
        r = e(192379),
        c = e(481060),
        i = e(369994),
        s = e(781208),
        l = e(388032),
        a = e(912969);
      function S(n) {
        let { guildId: t, transitionState: e, onClose: S } = n,
          [u, d] = r.useState([]),
          M = r.useCallback(() => {
            (0, i.KK)(t, u), (0, i.C4)(t), S();
          }, [t, S, u]),
          h = r.useCallback(
            (n) => () => {
              d((t) => (t.includes(n) ? t.filter((t) => t !== n) : [...t, n]));
            },
            [],
          ),
          C = r.useCallback(() => {
            open(s.RI);
          }, []);
        return (0, o.jsxs)(c.ModalRoot, {
          transitionState: e,
          size: c.ModalSize.SMALL,
          children: [
            (0, o.jsx)(c.ModalHeader, {
              separator: !1,
              children: (0, o.jsx)(c.Heading, {
                color: "header-primary",
                variant: "heading-md/semibold",
                children: l.intl.string(l.t.uYPGsb),
              }),
            }),
            (0, o.jsxs)(c.ModalContent, {
              children: [
                (0, o.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: l.intl.format(l.t.Hg8Ee3, { onClick: C }),
                }),
                (0, o.jsx)("div", {
                  className: a.mainCheckboxContainer,
                  children: s.Ud.map((n) =>
                    (0, o.jsxs)(
                      c.Clickable,
                      {
                        className: a.checkboxContainer,
                        onClick: h(n),
                        children: [
                          (0, o.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            className: a.checkbox,
                            value: u.includes(n),
                            displayOnly: !0,
                          }),
                          (0, o.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            children: (0, s.$l)(n),
                          }),
                        ],
                      },
                      n,
                    ),
                  ),
                }),
              ],
            }),
            (0, o.jsxs)(c.ModalFooter, {
              children: [
                (0, o.jsx)(c.Button, {
                  onClick: M,
                  color: c.Button.Colors.BRAND,
                  look: c.Button.Looks.FILLED,
                  children: l.intl.string(l.t.geKm7u),
                }),
                (0, o.jsx)(c.Button, {
                  onClick: S,
                  color: c.Button.Colors.PRIMARY,
                  look: c.Button.Looks.LINK,
                  children: l.intl.string(l.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    912969: function (n, t, e) {
      n.exports = {
        mainCheckboxContainer: "mainCheckboxContainer_cbdcfc",
        checkboxContainer: "checkboxContainer_cbdcfc",
        checkbox: "checkbox_cbdcfc",
      };
    },
  },
]);
//# sourceMappingURL=800d1d9fd8da272b1bcb.js.map
