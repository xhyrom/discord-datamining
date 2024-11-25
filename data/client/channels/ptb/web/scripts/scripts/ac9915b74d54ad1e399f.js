"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["71517"],
  {
    83173: function (e) {
      e.exports = "/assets/8252d6b4a948771dd061.png";
    },
    549505: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return h;
          },
        });
      var s = a(200651);
      a(192379);
      var n = a(481060),
        o = a(688465),
        d = a(547972),
        r = a(63063),
        i = a(981631),
        l = a(332325),
        c = a(388032),
        m = a(642695),
        x = a(83173);
      function h(e) {
        let { transitionState: t, onClose: a } = e;
        return (0, s.jsxs)(n.ModalRoot, {
          transitionState: t,
          size: n.ModalSize.DYNAMIC,
          className: m.modalRoot,
          children: [
            (0, s.jsxs)(n.ModalHeader, {
              separator: !1,
              className: m.modalHeader,
              children: [
                (0, s.jsx)("div", {
                  className: m.imageFrame,
                  children: (0, s.jsx)("img", {
                    alt: c.intl.string(c.t.AWkQTk),
                    src: x,
                    className: m.heroImage,
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: m.headerWrapper,
                  children: [
                    (0, s.jsx)(n.Heading, {
                      variant: "heading-xl/bold",
                      children: c.intl.string(c.t.gb37Ky),
                    }),
                    (0, s.jsx)(o.Z, { className: m.betaTag }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)(n.ModalContent, {
              className: m.modalContent,
              children: [
                (0, s.jsxs)("div", {
                  className: m.modalContentFrame,
                  children: [
                    (0, s.jsx)(n.Text, {
                      variant: "text-md/medium",
                      color: "header-secondary",
                      children: c.intl.string(c.t.WKxo8v),
                    }),
                    (0, s.jsx)(g, {}),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: m.modalFooter,
                  children: [
                    (0, s.jsx)(n.Button, {
                      onClick: a,
                      className: m.button,
                      children: c.intl.string(c.t["x/26d3"]),
                    }),
                    (0, s.jsx)(n.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: m.disclosureText,
                      children: c.intl.format(c.t["5Ey5Dw"], {
                        recentActivityURL: r.Z.getArticleURL(
                          i.BhN.MEMBER_LIST_ACTIVITY_FEED,
                        ),
                        handleActivityPrivacyClick: () => {
                          a(), (0, d.Z)(l.Z.ACTIVITY_PRIVACY);
                        },
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let g = () => {
        let e = [
          {
            icon: (0, s.jsx)(n.FriendsIcon, { className: m.icon }),
            text: c.intl.string(c.t.vXBrdn),
          },
          {
            icon: (0, s.jsx)(n.GameControllerIcon, { className: m.icon }),
            text: c.intl.string(c.t.aExjOz),
          },
          {
            icon: (0, s.jsx)(n.ChatIcon, { className: m.icon }),
            text: c.intl.string(c.t["i7/QHB"]),
          },
          {
            icon: (0, s.jsx)(n.UserCircleIcon, { className: m.icon }),
            text: c.intl.string(c.t.ZmBfKC),
          },
        ];
        return (0, s.jsx)("div", {
          className: m.notes,
          children: e.map((e, t) => {
            let { icon: a, text: o } = e;
            return (0, s.jsxs)(
              "div",
              {
                className: m.badgeNote,
                children: [
                  (0, s.jsx)("div", { className: m.badge, children: a }),
                  (0, s.jsx)(n.Text, {
                    variant: "text-sm/medium",
                    children: o,
                  }),
                ],
              },
              "memberlist-learn-more-note-".concat(t),
            );
          }),
        });
      };
    },
    642695: function (e, t, a) {
      e.exports = {
        modalRoot: "modalRoot_fd9982",
        modalHeader: "modalHeader_fd9982",
        headerWrapper: "headerWrapper_fd9982",
        betaTag: "betaTag_fd9982",
        imageFrame: "imageFrame_fd9982",
        heroImage: "heroImage_fd9982",
        modalContent: "modalContent_fd9982",
        modalContentFrame: "modalContentFrame_fd9982",
        notes: "notes_fd9982",
        badgeNote: "badgeNote_fd9982",
        badge: "badge_fd9982",
        icon: "icon_fd9982",
        button: "button_fd9982",
        modalFooter: "modalFooter_fd9982",
        disclosureText: "disclosureText_fd9982",
      };
    },
  },
]);
//# sourceMappingURL=ac9915b74d54ad1e399f.js.map
