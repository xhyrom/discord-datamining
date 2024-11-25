"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35282"],
  {
    157429: function (n, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return x;
          },
        }),
        a(47120);
      var e = a(200651);
      a(192379);
      var o = a(512722),
        i = a.n(o),
        l = a(481060),
        s = a(935369),
        r = a(313201),
        c = a(53365),
        d = a(981631),
        u = a(388032),
        g = a(129224);
      function x(n) {
        let { transitionState: t, guild: a, onClose: o } = n,
          x = (0, r.Dt)(),
          [h, { loading: m, error: _ }] = (0, s.Z)(c.oL),
          p = async () => {
            i()(null != a, "no guild"), null != (await h(a.id)) && o();
          };
        return (0, e.jsxs)(l.ModalRoot, {
          transitionState: t,
          "aria-labelledby": x,
          children: [
            (0, e.jsxs)(l.ModalHeader, {
              children: [
                (0, e.jsx)(l.Heading, {
                  id: x,
                  variant: "heading-md/semibold",
                  children: u.intl.string(u.t.rRpcEx),
                }),
                (0, e.jsx)(l.ModalCloseButton, {
                  className: g.closeButton,
                  onClick: o,
                }),
              ],
            }),
            (0, e.jsxs)(l.ModalContent, {
              className: g.content,
              children: [
                null != _
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(l.FormErrorBlock, { children: _.message }),
                        (0, e.jsx)(l.Spacer, { size: 24 }),
                      ],
                    })
                  : null,
                (0, e.jsx)(l.FormText, {
                  type: l.FormText.Types.ERROR,
                  children: u.intl.format(u.t["Oa5P6+"], {
                    guildName: a.toString(),
                    url: d.EYA.DEVELOPER_PORTAL_TEAMS,
                  }),
                }),
                (0, e.jsx)(l.Spacer, { size: 16 }),
              ],
            }),
            (0, e.jsx)(l.ModalFooter, {
              className: g.__invalid_footer,
              children: (0, e.jsx)(l.Button, {
                color: l.Button.Colors.RED,
                className: g.__invalid_goBackButton,
                submitting: m,
                onClick: p,
                children: u.intl.string(u.t.R3BPHx),
              }),
            }),
          ],
        });
      }
    },
    129224: function (n, t, a) {
      n.exports = {
        closeButton: "closeButton_aa3cfb",
        content: "content_aa3cfb",
        warningHeading: "warningHeading_aa3cfb",
        warningIcon: "warningIcon_aa3cfb",
      };
    },
  },
]);
//# sourceMappingURL=728db10e36659c9fbf6f.js.map
