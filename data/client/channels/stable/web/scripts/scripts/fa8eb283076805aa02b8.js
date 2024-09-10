"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26545"],
  {
    485267: function (t, n, e) {
      e.d(n, {
        Bt: function () {
          return E;
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
        s = e(914010);
      e(594174);
      var i = e(626135),
        a = e(71585);
      e(295955);
      var l = e(981631);
      let c = () => {
        o.Z.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
          i.default.track(l.rMx.MEMBERLIST_CONTENT_FEED_HIDDEN, {
            channel_id: r.Z.getChannelId(),
            guild_id: s.Z.getGuildId(),
            hidden: a.Z.hidden,
          });
      };
      function d() {
        o.Z.dispatch({ type: "GAME_PROFILE_OPEN" });
      }
      function E() {
        o.Z.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
      }
    },
    295955: function () {},
    81596: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return C;
          },
        }),
        e(47120);
      var o = e(735250),
        r = e(470079),
        s = e(442837),
        i = e(481060),
        a = e(230711),
        l = e(485267),
        c = e(564990),
        d = e(353647),
        E = e(527790),
        u = e(540440),
        _ = e(365583),
        R = e(689938),
        T = e(121269);
      function C(t) {
        let {
            user: n,
            entry: e,
            transitionState: C,
            onAction: h,
            onClose: S,
            onOpenGameSettings: f,
          } = t,
          [I, L] = (0, s.Wu)([d.Z], () => [
            d.Z.isDeletingEntryHistory,
            d.Z.deleteOutboxEntryError,
          ]);
        return (
          r.useEffect(() => l.Bt, []),
          (0, o.jsxs)(i.ModalRoot, {
            size: i.ModalSize.SMALL,
            transitionState: C,
            children: [
              (0, o.jsxs)(i.ModalContent, {
                className: T.content,
                children: [
                  null != L
                    ? (0, o.jsxs)("div", {
                        className: T.error,
                        children: [
                          (0, o.jsx)(i.CircleXIcon, {
                            color: i.tokens.colors.STATUS_DANGER,
                          }),
                          (0, o.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            children:
                              R.Z.Messages.USER_ACTIVITY_DELETE_HISTORY_ERROR,
                          }),
                        ],
                      })
                    : null,
                  (0, o.jsx)(i.Heading, {
                    variant: "heading-lg/semibold",
                    children: (0, u.y)(e),
                  }),
                  (0, o.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    tag: "span",
                    children:
                      R.Z.Messages.USER_ACTIVITY_CLEAR_HISTORY_DISCLAIMER.format(
                        {
                          settingsHook: (t, n) => {
                            let r = (0, _.C)({
                              entry: e,
                              onOpenGameSettings: f,
                            });
                            return (0, o.jsx)(
                              i.Anchor,
                              {
                                onClick: () => {
                                  null == h ||
                                    h({
                                      action: "PRESS_CLEAR_HISTORY_DISCLAIMER",
                                    }),
                                    null != r ? r() : a.Z.open(),
                                    S();
                                },
                                children: t,
                              },
                              n,
                            );
                          },
                        },
                      ),
                  }),
                  (0, o.jsx)(E.Z, {
                    user: n,
                    entry: e,
                    className: T.card,
                    hideContextMenu: !0,
                  }),
                ],
              }),
              (0, o.jsxs)(i.ModalFooter, {
                className: T.footer,
                children: [
                  (0, o.jsx)(i.Button, {
                    disabled: I,
                    color: i.ButtonColors.RED,
                    size: i.ButtonSizes.SMALL,
                    onClick: () => {
                      null == h || h({ action: "PRESS_CLEAR_HISTORY_BUTTON" }),
                        (0, c.CV)(e, n.id, S);
                    },
                    children:
                      null != L ? R.Z.Messages.RETRY : R.Z.Messages.CLEAR,
                  }),
                  (0, o.jsx)(i.Button, {
                    onClick: S,
                    size: i.ButtonSizes.SMALL,
                    look: i.ButtonLooks.FILLED,
                    color: i.ButtonColors.TRANSPARENT,
                    children: R.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    121269: function (t, n, e) {
      t.exports = {
        content: "content_fa13a8",
        card: "card_fa13a8",
        footer: "footer_fa13a8",
        error: "error_fa13a8",
      };
    },
  },
]);
//# sourceMappingURL=fa8eb283076805aa02b8.js.map
