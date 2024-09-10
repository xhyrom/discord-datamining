"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34191"],
  {
    303647: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return _;
          },
        }),
        a(47120);
      var s = a(735250),
        l = a(470079),
        n = a(481060),
        i = a(479531),
        o = a(600164),
        r = a(99325),
        c = a(486527),
        d = a(689938),
        u = a(294550);
      function _(e) {
        var t, a;
        let { transitionState: _, onClose: I, entry: m } = e,
          [h, E] = l.useState(
            null !== (t = m.description) && void 0 !== t ? t : "",
          ),
          [g, p] = l.useState(
            null !== (a = m.primaryCategoryId) && void 0 !== a
              ? a
              : c.AR.UNCATEGORIZED,
          ),
          [D, b] = l.useState(!1),
          [C, x] = l.useState(null),
          T = async () => {
            if ((x(null), h !== m.description || g !== m.primaryCategoryId)) {
              b(!0);
              try {
                await (0, r.Dr)(m.channelId, m.guildId, h, g), b(!1), I();
              } catch (e) {
                b(!1), x(new i.Z(e));
              }
            }
          };
        return (0, s.jsxs)(n.ModalRoot, {
          transitionState: _,
          "aria-label": d.Z.Messages.PAYMENT_SOURCES_ADD,
          children: [
            (0, s.jsxs)(n.ModalHeader, {
              direction: o.Z.Direction.VERTICAL,
              className: u.header,
              separator: !1,
              children: [
                (0, s.jsx)(n.Heading, {
                  className: u.title,
                  variant: "heading-xl/semibold",
                  children:
                    d.Z.Messages.HUB_ENTRY_UPDATE_DESCRIPTION_TITLE.format({
                      guildName: m.name,
                    }),
                }),
                (0, s.jsx)(n.Text, {
                  className: u.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children: d.Z.Messages.HUB_ADD_GUILD_DESCRIPTION_HELP,
                }),
                null != I &&
                  (0, s.jsx)(n.ModalCloseButton, {
                    className: u.closeButton,
                    onClick: I,
                  }),
              ],
            }),
            (0, s.jsxs)(n.ModalContent, {
              className: u.createGuild,
              paddingFix: !1,
              children: [
                (0, s.jsx)(n.FormItem, {
                  title: d.Z.Messages.HUB_ADD_GUILD_DESCRIPTION_TITLE,
                  children: (0, s.jsx)(n.TextArea, {
                    value: h,
                    maxLength: 200,
                    placeholder:
                      d.Z.Messages.HUB_ADD_GUILD_DESCRIPTION_PLACEHOLDER,
                    onChange: E,
                    error: null == C ? void 0 : C.getAnyErrorMessage(),
                  }),
                }),
                (0, s.jsx)(n.FormItem, {
                  className: u.formItemSpaced,
                  title: d.Z.Messages.HUB_ADD_GUILD_CATEGORY_TITLE,
                  children: (0, s.jsx)(n.SingleSelect, {
                    placeholder: d.Z.Messages.SELECT,
                    options: (0, c.b7)(m.channelId),
                    clearable: !1,
                    value: g,
                    onChange: p,
                    maxVisibleItems: 4,
                  }),
                }),
              ],
            }),
            (0, s.jsx)(n.ModalFooter, {
              justify: o.Z.Justify.BETWEEN,
              children: (0, s.jsx)(n.Button, {
                color: n.Button.Colors.BRAND,
                onClick: T,
                submitting: D,
                children: d.Z.Messages.SAVE,
              }),
            }),
          ],
        });
      }
    },
    294550: function (e, t, a) {
      e.exports = {
        header: "header_c1ee6b",
        closeButton: "closeButton_c1ee6b",
        title: "title_c1ee6b",
        backButton: "backButton_c1ee6b",
        subtitle: "subtitle_c1ee6b",
        createGuild: "createGuild_c1ee6b",
        uploadIcon: "uploadIcon_c1ee6b",
        nameInput: "nameInput_c1ee6b",
        guidelines: "guidelines_c1ee6b",
        formItemSpaced: "formItemSpaced_c1ee6b",
      };
    },
  },
]);
//# sourceMappingURL=53bfa6acc58c9907a782.js.map
