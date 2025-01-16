"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65631"],
  {
    10722: function (e, a, n) {
      n.r(a),
        n.d(a, {
          default: function () {
            return h;
          },
        });
      var o = n(200651),
        l = n(481060),
        t = n(835473),
        i = n(933557),
        d = n(471445),
        c = n(454585),
        r = n(63063),
        s = n(981631),
        b = n(388032),
        p = n(803689);
      function h(e) {
        var a;
        let { channel: n, onClose: h, guild: m, transitionState: x } = e,
          N = (0, d.KS)(n, m),
          k = (0, i.ZP)(n, !1),
          u = (0, t.q)(
            null === (a = n.linkedLobby) || void 0 === a
              ? void 0
              : a.application_id,
          );
        return (0, o.jsxs)(l.ModalRoot, {
          transitionState: x,
          "aria-label": b.intl.string(b.t.X8jMDg),
          className: p.modal,
          children: [
            (0, o.jsxs)(l.ModalHeader, {
              className: p.modalHeader,
              separator: !1,
              children: [
                (0, o.jsxs)("div", {
                  className: p.header,
                  children: [
                    null != N &&
                      (0, o.jsx)(N, {
                        size: "md",
                        color: "currentColor",
                        className: p.channelIcon,
                      }),
                    (0, o.jsx)(l.Text, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      children: k,
                    }),
                  ],
                }),
                (0, o.jsx)(l.ModalCloseButton, { onClick: h }),
              ],
            }),
            (0, o.jsxs)(l.ModalContent, {
              children: [
                (0, o.jsx)(l.Text, {
                  selectable: !0,
                  variant: "text-md/normal",
                  className: p.content,
                  children: c.Z.parseTopic(n.topic, !0, { channelId: n.id }),
                }),
                null != u
                  ? (0, o.jsxs)("div", {
                      className: p.linkedLobbyNotice,
                      children: [
                        (0, o.jsx)(l.RefreshIcon, {
                          className: p.linkedLobbyApplicationIcon,
                        }),
                        (0, o.jsx)(l.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children: b.intl.format(b.t.Ud5rys, {
                            applicationName: u.name,
                            helpdeskArticle: r.Z.getArticleURL(
                              s.BhN.CHANNEL_LINKED_LOBBIES,
                            ),
                            separatorHook: (e, a) =>
                              (0, o.jsx)(
                                "span",
                                {
                                  className: p.linkedLobbyNoticeSeparator,
                                  children: e,
                                },
                                a,
                              ),
                          }),
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          ],
        });
      }
    },
    803689: function (e, a, n) {
      e.exports = {
        modal: "modal_de766b",
        modalHeader: "modalHeader_de766b",
        header: "header_de766b",
        content: "content_de766b",
        linkedLobbyNotice: "linkedLobbyNotice_de766b",
        linkedLobbyNoticeSeparator: "linkedLobbyNoticeSeparator_de766b",
        linkedLobbyApplicationIcon: "linkedLobbyApplicationIcon_de766b",
        channelIcon: "channelIcon_de766b",
      };
    },
  },
]);
//# sourceMappingURL=8d7ecc6778497619e389.js.map
