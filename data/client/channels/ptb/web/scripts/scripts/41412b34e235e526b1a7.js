"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87337"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    799352: function (e, s, n) {
      n.d(s, {
        O: function () {
          return _;
        },
      });
      var a = n(544891),
        t = n(981631);
      function _(e) {
        return a.tn.post({ url: t.ANM.CHANNEL_BLOCKED_USER_WARNING_ACK(e) });
      }
    },
    164375: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return M;
          },
        });
      var a = n(735250),
        t = n(470079),
        _ = n(481060),
        r = n(493683),
        i = n(594174),
        o = n(626135),
        c = n(799352),
        d = n(110223),
        l = n(981631),
        E = n(689938),
        u = n(808843),
        N = n(444812);
      function M(e) {
        var s;
        let {
            channelId: n,
            blockedUserIds: M,
            transitionState: R,
            onClose: m,
          } = e,
          G = M.map((e) => i.default.getUser(e));
        t.useEffect(() => {
          o.default.track(l.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: n,
            warning_medium: d.X.MODAL,
            blocked_user_ids: M,
          });
        }, [n, M]);
        let D = G.length > 1;
        return (0, a.jsxs)(_.ModalRoot, {
          transitionState: R,
          children: [
            (0, a.jsx)("img", { alt: "", className: u.headerImage, src: N }),
            (0, a.jsx)(_.ModalHeader, {
              separator: !1,
              className: u.header,
              children: (0, a.jsxs)(_.Heading, {
                variant: "heading-lg/bold",
                className: u.title,
                children: [
                  D
                    ? E.Z.Messages
                        .GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_MODAL
                    : E.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_MODAL,
                  (0, a.jsx)("br", {}),
                  E.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE_GROUP_MODAL,
                ],
              }),
            }),
            (0, a.jsxs)(_.ModalContent, {
              className: u.content,
              children: [
                (0, a.jsxs)("div", {
                  className: u.infoGroup,
                  children: [
                    (0, a.jsx)("div", {
                      className: u.infoRow,
                      children: D
                        ? (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)(_.GroupIcon, {}),
                              (0, a.jsx)(_.Text, {
                                variant: "text-md/medium",
                                children:
                                  E.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format(
                                    { blockedUserCount: G.length },
                                  ),
                              }),
                            ],
                          })
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)(_.UserIcon, {}),
                              (0, a.jsx)(_.Text, {
                                variant: "text-md/medium",
                                children:
                                  E.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format(
                                    {
                                      userName:
                                        null === (s = G[0]) || void 0 === s
                                          ? void 0
                                          : s.username,
                                    },
                                  ),
                              }),
                            ],
                          }),
                    }),
                    (0, a.jsxs)("div", {
                      className: u.infoRow,
                      children: [
                        (0, a.jsx)(_.BellSlashIcon, {}),
                        (0, a.jsx)(_.Text, {
                          variant: "text-md/medium",
                          children:
                            E.Z.Messages.GDM_BLOCKED_USER_WARNING_NO_NOTIFY,
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: u.infoRow,
                      children: [
                        (0, a.jsx)(_.EnvelopeIcon, {}),
                        (0, a.jsx)(_.Text, {
                          variant: "text-md/medium",
                          children:
                            E.Z.Messages.GDM_BLOCKED_USER_WARNING_INVITE_NEEDED,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: u.buttonGroup,
                  children: [
                    (0, a.jsx)(_.Button, {
                      type: "submit",
                      color: _.Button.Colors.BRAND,
                      size: _.Button.Sizes.MEDIUM,
                      onClick: () => {
                        m(),
                          (0, c.O)(n),
                          r.Z.closePrivateChannel(n, !0, !0),
                          o.default.track(
                            l.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT,
                            {
                              action: d.q.CLICK_TO_LEAVE,
                              channel_id: n,
                              warning_medium: d.X.MODAL,
                              blocked_user_ids: M,
                            },
                          );
                      },
                      children: E.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE,
                    }),
                    (0, a.jsx)(_.Button, {
                      color: _.Button.Colors.PRIMARY,
                      onClick: () => {
                        m(),
                          (0, c.O)(n),
                          o.default.track(
                            l.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT,
                            {
                              action: d.q.CLICK_TO_STAY,
                              channel_id: n,
                              warning_medium: d.X.MODAL,
                              blocked_user_ids: M,
                            },
                          );
                      },
                      children: E.Z.Messages.GDM_BLOCKED_USER_WARNING_STAY,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    808843: function (e, s, n) {
      e.exports = {
        header: "header_fcbeba",
        headerImage: "headerImage_fcbeba",
        title: "title_fcbeba",
        content: "content_fcbeba",
        buttonGroup: "buttonGroup_fcbeba",
        infoGroup: "infoGroup_fcbeba",
        infoRow: "infoRow_fcbeba",
      };
    },
  },
]);
//# sourceMappingURL=41412b34e235e526b1a7.js.map
