"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27421"],
  {
    485267: function (e, t, n) {
      n.d(t, {
        Bt: function () {
          return u;
        },
        Jn: function () {
          return d;
        },
        lY: function () {
          return l;
        },
      });
      var i = n(570140);
      n(100527), n(592125);
      var o = n(944486),
        a = n(914010);
      n(594174);
      var r = n(626135),
        c = n(71585);
      n(295955);
      var s = n(981631);
      let l = () => {
        i.Z.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
          r.default.track(s.rMx.MEMBERLIST_CONTENT_FEED_HIDDEN, {
            channel_id: o.Z.getChannelId(),
            guild_id: a.Z.getGuildId(),
            hidden: c.Z.hidden,
          });
      };
      function d() {
        i.Z.dispatch({ type: "GAME_PROFILE_OPEN" });
      }
      function u() {
        i.Z.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
      }
    },
    295955: function () {},
    81596: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n(47120);
      var i = n(735250),
        o = n(470079),
        a = n(442837),
        r = n(481060),
        c = n(230711),
        s = n(485267),
        l = n(564990),
        d = n(353647),
        u = n(527790),
        _ = n(540440),
        E = n(365583),
        T = n(689938),
        R = n(121269);
      function f(e) {
        let {
            user: t,
            entry: n,
            transitionState: f,
            onAction: h,
            onClose: S,
            onOpenGameSettings: C,
          } = e,
          [I, N] = (0, a.Wu)([d.Z], () => [
            d.Z.isDeletingEntryHistory,
            d.Z.deleteOutboxEntryError,
          ]);
        return (
          o.useEffect(() => s.Bt, []),
          (0, i.jsxs)(r.ModalRoot, {
            size: r.ModalSize.SMALL,
            transitionState: f,
            children: [
              (0, i.jsxs)(r.ModalContent, {
                className: R.content,
                children: [
                  null != N
                    ? (0, i.jsxs)("div", {
                        className: R.error,
                        children: [
                          (0, i.jsx)(r.CircleXIcon, {
                            color: r.tokens.colors.STATUS_DANGER,
                          }),
                          (0, i.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            children:
                              T.Z.Messages.USER_ACTIVITY_DELETE_HISTORY_ERROR,
                          }),
                        ],
                      })
                    : null,
                  (0, i.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    children: (0, _.y)(n),
                  }),
                  (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    tag: "span",
                    children:
                      T.Z.Messages.USER_ACTIVITY_CLEAR_HISTORY_DISCLAIMER.format(
                        {
                          settingsHook: (e, t) => {
                            let o = (0, E.C)({
                              entry: n,
                              onOpenGameSettings: C,
                            });
                            return (0, i.jsx)(
                              r.Anchor,
                              {
                                onClick: () => {
                                  null == h ||
                                    h({
                                      action: "PRESS_CLEAR_HISTORY_DISCLAIMER",
                                    }),
                                    null != o ? o() : c.Z.open(),
                                    S();
                                },
                                children: e,
                              },
                              t,
                            );
                          },
                        },
                      ),
                  }),
                  (0, i.jsx)(u.Z, {
                    user: t,
                    entry: n,
                    className: R.card,
                    hideHeader: !0,
                    hideContextMenu: !0,
                  }),
                ],
              }),
              (0, i.jsxs)(r.ModalFooter, {
                className: R.footer,
                children: [
                  (0, i.jsx)(r.Button, {
                    disabled: I,
                    color: r.ButtonColors.RED,
                    size: r.ButtonSizes.SMALL,
                    onClick: () => {
                      null == h || h({ action: "PRESS_CLEAR_HISTORY_BUTTON" }),
                        (0, l.CV)(n, t.id, S);
                    },
                    children:
                      null != N ? T.Z.Messages.RETRY : T.Z.Messages.CLEAR,
                  }),
                  (0, i.jsx)(r.Button, {
                    onClick: S,
                    size: r.ButtonSizes.SMALL,
                    look: r.ButtonLooks.FILLED,
                    color: r.ButtonColors.TRANSPARENT,
                    children: T.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    494399: function (e, t, n) {
      e.exports = {
        container: "container_c64476",
        contentTitle: "contentTitle_c64476",
        additionalParticipantBadge: "additionalParticipantBadge_c64476",
        openOnHover: "openOnHover_c64476",
        selected: "selected_c64476",
        infoSection: "infoSection_c64476",
        userSection: "userSection_c64476",
        userName: "userName_c64476",
        facePile: "facePile_c64476",
        facePileItem: "facePileItem_c64476",
        additionalParticipantBadgeText: "additionalParticipantBadgeText_c64476",
        thumbnail: "thumbnail_c64476",
      };
    },
    121269: function (e, t, n) {
      e.exports = {
        content: "content_fa13a8",
        card: "card_fa13a8",
        footer: "footer_fa13a8",
        error: "error_fa13a8",
      };
    },
  },
]);
//# sourceMappingURL=b5f0e1b736d2f83e99c1.js.map
