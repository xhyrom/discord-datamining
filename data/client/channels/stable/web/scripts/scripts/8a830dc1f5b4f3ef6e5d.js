"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90220"],
  {
    490962: function (e) {
      e.exports = "/assets/231b607eac35bb1ce411.svg";
    },
    221870: function (e) {
      e.exports = "/assets/2695194fe7a3a1263bb7.svg";
    },
    418225: function (e, s, a) {
      a.r(s),
        a.d(s, {
          default: function () {
            return E;
          },
        }),
        a(47120);
      var t = a(735250);
      a(470079);
      var r = a(481060),
        n = a(935369),
        i = a(53365),
        l = a(689938),
        o = a(694116),
        _ = a(490962),
        c = a(221870);
      function T(e) {
        let { header: s, body: a } = e;
        return (0, t.jsxs)("div", {
          className: o.bulletItem,
          children: [
            (0, t.jsx)("img", { alt: "", className: o.bulletImage, src: _ }),
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(r.Text, {
                  variant: "text-sm/semibold",
                  color: "text-normal",
                  children: s,
                }),
                (0, t.jsx)(r.Spacer, { size: 4 }),
                (0, t.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: a,
                }),
              ],
            }),
          ],
        });
      }
      function E(e) {
        let { guildId: s, demonetized: a, transitionState: _, onClose: E } = e,
          [d, { loading: m, error: x }] = (0, n.Z)(a ? i.$J : i.hY),
          C = async () => {
            try {
              let e = await d(s);
              null != e && (null == E || E());
            } catch (e) {}
          };
        return (0, t.jsxs)(r.ModalRoot, {
          className: o.__invalid_container,
          size: r.ModalSize.SMALL,
          transitionState: _,
          "aria-label":
            l.Z.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_TITLE,
          children: [
            (0, t.jsx)(r.ModalHeader, {
              separator: !1,
              className: o.header,
              children: (0, t.jsx)("div", {
                className: o.imageContainer,
                children: (0, t.jsx)("img", {
                  alt: "",
                  className: o.__invalid_image,
                  src: c,
                }),
              }),
            }),
            (0, t.jsx)(r.ModalContent, {
              children: (0, t.jsxs)("div", {
                className: o.content,
                children: [
                  (0, t.jsx)(r.Heading, {
                    variant: "heading-xl/medium",
                    color: "header-primary",
                    children:
                      l.Z.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_TITLE,
                  }),
                  (0, t.jsx)(r.Spacer, { size: 12 }),
                  (0, t.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                      l.Z.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY.format(
                        {
                          termsURL:
                            "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms",
                        },
                      ),
                  }),
                  (0, t.jsx)(r.Spacer, { size: 24 }),
                  (0, t.jsx)(T, {
                    header:
                      l.Z.Messages
                        .CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_1_HEADER,
                    body: l.Z.Messages
                      .CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_1_BODY,
                  }),
                  (0, t.jsx)(r.Spacer, { size: 16 }),
                  (0, t.jsx)(T, {
                    header:
                      l.Z.Messages
                        .CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_2_HEADER,
                    body: l.Z.Messages
                      .CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_2_BODY,
                  }),
                ],
              }),
            }),
            (0, t.jsx)(r.ModalFooter, {
              children: (0, t.jsxs)("div", {
                className: o.footer,
                children: [
                  (0, t.jsx)(r.Button, {
                    fullWidth: !0,
                    onClick: C,
                    submitting: m,
                    children:
                      l.Z.Messages
                        .CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_ACCEPT_CTA,
                  }),
                  (0, t.jsx)(r.Spacer, { size: 4 }),
                  (0, t.jsx)(r.Button, {
                    color: r.Button.Colors.CUSTOM,
                    innerClassName: o.remindMeLater,
                    look: r.Button.Looks.LINK,
                    fullWidth: !0,
                    onClick: E,
                    children:
                      l.Z.Messages
                        .CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_REMIND_ME_LATER,
                  }),
                  null == x
                    ? null
                    : (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(r.Spacer, { size: 8 }),
                          (0, t.jsxs)(r.Text, {
                            variant: "text-xs/normal",
                            color: "status-danger",
                            children: ["Error: ", x.message],
                          }),
                        ],
                      }),
                  (0, t.jsx)(r.Spacer, { size: 10 }),
                  (0, t.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children:
                      l.Z.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_ACCEPT_DISCLAIMER.format(
                        {
                          termsURL:
                            "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms",
                        },
                      ),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    694116: function (e, s, a) {
      e.exports = {
        header: "header_a54752",
        imageContainer: "imageContainer_a54752",
        content: "content_a54752",
        footer: "footer_a54752",
        bulletItem: "bulletItem_a54752",
        bulletImage: "bulletImage_a54752",
        remindMeLater: "remindMeLater_a54752",
      };
    },
  },
]);
//# sourceMappingURL=8a830dc1f5b4f3ef6e5d.js.map
