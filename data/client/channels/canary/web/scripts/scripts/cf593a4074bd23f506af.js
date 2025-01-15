"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26545"],
  {
    485267: function (t, n, e) {
      e.d(n, {
        Bt: function () {
          return u;
        },
        Jn: function () {
          return d;
        },
        lY: function () {
          return c;
        },
      });
      var o = e(570140);
      e(100527), e(592125);
      var r = e(944486),
        i = e(914010);
      e(594174);
      var l = e(626135),
        s = e(71585),
        a = e(981631);
      let c = () => {
        o.Z.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
          l.default.track(a.rMx.MEMBERLIST_CONTENT_FEED_HIDDEN, {
            channel_id: r.Z.getChannelId(),
            guild_id: i.Z.getGuildId(),
            hidden: s.Z.hidden,
          });
      };
      function d() {
        o.Z.dispatch({ type: "GAME_PROFILE_OPEN" });
      }
      function u() {
        o.Z.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
      }
    },
    81596: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return f;
          },
        }),
        e(47120);
      var o = e(200651),
        r = e(192379),
        i = e(442837),
        l = e(481060),
        s = e(230711),
        a = e(485267),
        c = e(564990),
        d = e(353647),
        u = e(527790),
        E = e(540440),
        _ = e(365583),
        h = e(388032),
        T = e(807674);
      function f(t) {
        let {
            user: n,
            entry: e,
            transitionState: f,
            onAction: N,
            onClose: R,
            onOpenGameSettings: x,
          } = t,
          [C, S] = (0, i.Wu)([d.Z], () => [
            d.Z.isDeletingEntryHistory,
            d.Z.deleteOutboxEntryError,
          ]);
        return (
          r.useEffect(() => a.Bt, []),
          (0, o.jsxs)(l.ModalRoot, {
            size: l.ModalSize.SMALL,
            transitionState: f,
            children: [
              (0, o.jsxs)(l.ModalContent, {
                className: T.content,
                children: [
                  null != S
                    ? (0, o.jsxs)("div", {
                        className: T.error,
                        children: [
                          (0, o.jsx)(l.CircleXIcon, {
                            color: l.tokens.colors.STATUS_DANGER,
                          }),
                          (0, o.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            children: h.intl.string(h.t.FMbL3t),
                          }),
                        ],
                      })
                    : null,
                  (0, o.jsx)(l.Heading, {
                    variant: "heading-lg/semibold",
                    children: (0, E.y)(e),
                  }),
                  (0, o.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    tag: "span",
                    children: h.intl.format(h.t.KV72oa, {
                      settingsHook: (t, n) => {
                        let r = (0, _.C)({ entry: e, onOpenGameSettings: x });
                        return (0, o.jsx)(
                          l.Anchor,
                          {
                            onClick: () => {
                              null == N ||
                                N({ action: "PRESS_CLEAR_HISTORY_DISCLAIMER" }),
                                null != r ? r() : s.Z.open(),
                                R();
                            },
                            children: t,
                          },
                          n,
                        );
                      },
                    }),
                  }),
                  (0, o.jsx)(u.Z, {
                    user: n,
                    entry: e,
                    className: T.card,
                    hideContextMenu: !0,
                  }),
                ],
              }),
              (0, o.jsxs)(l.ModalFooter, {
                className: T.footer,
                children: [
                  (0, o.jsx)(l.Button, {
                    disabled: C,
                    color: l.ButtonColors.RED,
                    size: l.ButtonSizes.SMALL,
                    onClick: () => {
                      null == N || N({ action: "PRESS_CLEAR_HISTORY_BUTTON" }),
                        (0, c.CV)(e, n.id, R);
                    },
                    children:
                      null != S
                        ? h.intl.string(h.t["5911LS"])
                        : h.intl.string(h.t.VkKicX),
                  }),
                  (0, o.jsx)(l.Button, {
                    onClick: R,
                    size: l.ButtonSizes.SMALL,
                    look: l.ButtonLooks.FILLED,
                    color: l.ButtonColors.TRANSPARENT,
                    children: h.intl.string(h.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    807674: function (t, n, e) {
      t.exports = {
        content: "content_fa13a8",
        card: "card_fa13a8",
        footer: "footer_fa13a8",
        error: "error_fa13a8",
      };
    },
  },
]);
//# sourceMappingURL=cf593a4074bd23f506af.js.map
