"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34191"],
  {
    303647: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n(47120);
      var l = n(200651),
        a = n(192379),
        i = n(481060),
        r = n(479531),
        s = n(600164),
        o = n(99325),
        c = n(486527),
        d = n(388032),
        u = n(886658);
      function m(e) {
        var t, n;
        let { transitionState: m, onClose: h, entry: b } = e,
          [p, g] = a.useState(
            null !== (t = b.description) && void 0 !== t ? t : "",
          ),
          [x, I] = a.useState(
            null !== (n = b.primaryCategoryId) && void 0 !== n
              ? n
              : c.AR.UNCATEGORIZED,
          ),
          [j, C] = a.useState(!1),
          [f, B] = a.useState(null),
          N = async () => {
            if ((B(null), p !== b.description || x !== b.primaryCategoryId)) {
              C(!0);
              try {
                await (0, o.Dr)(b.channelId, b.guildId, p, x), C(!1), h();
              } catch (e) {
                C(!1), B(new r.Z(e));
              }
            }
          };
        return (0, l.jsxs)(i.ModalRoot, {
          transitionState: m,
          "aria-label": d.intl.string(d.t.eQ2bLi),
          children: [
            (0, l.jsxs)(i.ModalHeader, {
              direction: s.Z.Direction.VERTICAL,
              className: u.header,
              separator: !1,
              children: [
                (0, l.jsx)(i.Heading, {
                  className: u.title,
                  variant: "heading-xl/semibold",
                  children: d.intl.format(d.t.w9tsNj, { guildName: b.name }),
                }),
                (0, l.jsx)(i.Text, {
                  className: u.subtitle,
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children: d.intl.string(d.t["vEkX//"]),
                }),
                null != h &&
                  (0, l.jsx)(i.ModalCloseButton, {
                    className: u.closeButton,
                    onClick: h,
                  }),
              ],
            }),
            (0, l.jsxs)(i.ModalContent, {
              className: u.createGuild,
              paddingFix: !1,
              children: [
                (0, l.jsx)(i.FormItem, {
                  title: d.intl.string(d.t.FFFAGh),
                  children: (0, l.jsx)(i.TextArea, {
                    value: p,
                    maxLength: 200,
                    placeholder: d.intl.string(d.t.VzuITE),
                    onChange: g,
                    error: null == f ? void 0 : f.getAnyErrorMessage(),
                  }),
                }),
                (0, l.jsx)(i.FormItem, {
                  className: u.formItemSpaced,
                  title: d.intl.string(d.t.Olo8FB),
                  children: (0, l.jsx)(i.SingleSelect, {
                    placeholder: d.intl.string(d.t.XqMe3N),
                    options: (0, c.b7)(b.channelId),
                    clearable: !1,
                    value: x,
                    onChange: I,
                    maxVisibleItems: 4,
                  }),
                }),
              ],
            }),
            (0, l.jsx)(i.ModalFooter, {
              justify: s.Z.Justify.BETWEEN,
              children: (0, l.jsx)(i.Button, {
                color: i.Button.Colors.BRAND,
                onClick: N,
                submitting: j,
                children: d.intl.string(d.t.R3BPHx),
              }),
            }),
          ],
        });
      }
    },
    886658: function (e, t, n) {
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
//# sourceMappingURL=737fdd2e5ef6d3f769c2.js.map
