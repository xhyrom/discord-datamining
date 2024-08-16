"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["71517"],
  {
    83173: function (e) {
      e.exports = "/assets/8252d6b4a948771dd061.png";
    },
    549505: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return _;
          },
        });
      var t = s(735250);
      s(470079);
      var o = s(481060),
        d = s(547972),
        n = s(63063),
        r = s(981631),
        l = s(332325),
        i = s(689938),
        c = s(552269),
        N = s(83173);
      function _(e) {
        let { transitionState: a, onClose: s } = e;
        return (0, t.jsxs)(o.ModalRoot, {
          transitionState: a,
          size: o.ModalSize.DYNAMIC,
          className: c.modalRoot,
          children: [
            (0, t.jsxs)(o.ModalHeader, {
              separator: !1,
              className: c.modalHeader,
              children: [
                (0, t.jsx)("div", {
                  className: c.imageFrame,
                  children: (0, t.jsx)("img", {
                    alt: i.Z.Messages
                      .CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_ALT,
                    src: N,
                    className: c.heroImage,
                  }),
                }),
                (0, t.jsx)("div", {
                  className: c.headerWrapper,
                  children: (0, t.jsx)(o.Heading, {
                    variant: "heading-xl/bold",
                    children:
                      i.Z.Messages
                        .CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_HEADER,
                  }),
                }),
              ],
            }),
            (0, t.jsxs)(o.ModalContent, {
              className: c.modalContent,
              children: [
                (0, t.jsxs)("div", {
                  className: c.modalContentFrame,
                  children: [
                    (0, t.jsx)(o.Text, {
                      variant: "text-md/medium",
                      color: "header-secondary",
                      children:
                        i.Z.Messages
                          .CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DESCRIPTION,
                    }),
                    (0, t.jsx)(E, {}),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: c.modalFooter,
                  children: [
                    (0, t.jsx)(o.Button, {
                      onClick: s,
                      className: c.button,
                      children:
                        i.Z.Messages
                          .CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_GOT_IT,
                    }),
                    (0, t.jsx)(o.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: c.disclosureText,
                      children:
                        i.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DISCLOSURE.format(
                          {
                            recentActivityURL: n.Z.getArticleURL(
                              r.BhN.MEMBER_LIST_ACTIVITY_FEED,
                            ),
                            handleActivityPrivacyClick: () => {
                              s(), (0, d.Z)(l.Z.ACTIVITY_PRIVACY);
                            },
                          },
                        ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let E = () => {
        let e = [
          {
            icon: (0, t.jsx)(o.FriendsIcon, { className: c.icon }),
            text: i.Z.Messages
              .CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_FRIEND_NOTE,
          },
          {
            icon: (0, t.jsx)(o.GameControllerIcon, { className: c.icon }),
            text: i.Z.Messages
              .CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_PLAYED_NOTE,
          },
          {
            icon: (0, t.jsx)(o.ChatIcon, { className: c.icon }),
            text: i.Z.Messages
              .CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_REPLY_NOTE,
          },
        ];
        return (0, t.jsx)("div", {
          className: c.notes,
          children: e.map((e, a) => {
            let { icon: s, text: d } = e;
            return (0, t.jsxs)(
              "div",
              {
                className: c.badgeNote,
                children: [
                  (0, t.jsx)("div", { className: c.badge, children: s }),
                  (0, t.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    children: d,
                  }),
                ],
              },
              "memberlist-learn-more-note-".concat(a),
            );
          }),
        });
      };
    },
    552269: function (e, a, s) {
      e.exports = {
        modalRoot: "modalRoot_fd9982",
        modalHeader: "modalHeader_fd9982",
        headerWrapper: "headerWrapper_fd9982",
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
//# sourceMappingURL=55675fa7c74149ab614e.js.map
