"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41128"],
  {
    699783: function (e, o, t) {
      t.r(o),
        t.d(o, {
          default: function () {
            return N;
          },
        });
      var s = t(735250),
        a = t(470079),
        n = t(399606),
        l = t(481060),
        r = t(194359),
        i = t(726521),
        c = t(594174),
        d = t(51144),
        C = t(941362),
        O = t(134612),
        _ = t(981631),
        u = t(689938),
        R = t(872612);
      function N(e) {
        let {
            userId: o,
            channelId: t,
            transitionState: N,
            onBlock: T,
            onBlockAndReport: I,
            onClose: A,
            onCancel: B,
          } = e,
          M = (0, C.q)(t),
          E = a.useCallback(() => {
            r.Z.addRelationship({
              userId: o,
              context: { location: O.zr },
              type: _.OGo.BLOCKED,
            }),
              (0, l.showToast)(
                (0, l.createToast)(
                  u.Z.Messages.STRANGER_DANGER_BLOCK_CONFIRM,
                  l.ToastType.SUCCESS,
                ),
              );
          }, [o]),
          h = a.useCallback(() => {
            E(), T(), A();
          }, [E, T, A]),
          L = a.useCallback(() => {
            E(), (0, i.wk)(M), I(), A();
          }, [M, E, I, A]),
          P = (0, n.e7)([c.default], () => c.default.getUser(o)),
          D = d.ZP.useName(P);
        return (0, s.jsx)(l.ModalRoot, {
          transitionState: N,
          children: (0, s.jsx)(l.Scroller, {
            style: { overflow: "hidden auto" },
            children: (0, s.jsxs)(l.ModalContent, {
              className: R.modalContent,
              children: [
                (0, s.jsx)(l.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: u.Z.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                    name: D,
                  }),
                }),
                (0, s.jsx)(l.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  className: R.modalDescription,
                  children:
                    u.Z.Messages
                      .INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_DESCRIPTION,
                }),
                (0, s.jsx)(l.Button, {
                  onClick: h,
                  color: l.ButtonColors.BRAND,
                  size: l.ButtonSizes.MEDIUM,
                  children:
                    u.Z.Messages
                      .INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_BLOCK_BUTTON,
                }),
                (0, s.jsx)(l.Button, {
                  onClick: L,
                  color: l.ButtonColors.PRIMARY,
                  size: l.ButtonSizes.MEDIUM,
                  children:
                    u.Z.Messages
                      .INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_BLOCK_AND_REPORT_BUTTON,
                }),
                (0, s.jsx)(l.Button, {
                  onClick: B,
                  color: l.ButtonColors.PRIMARY,
                  look: l.ButtonLooks.OUTLINED,
                  size: l.ButtonSizes.MEDIUM,
                  children:
                    u.Z.Messages
                      .INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_CANCEL_BUTTON,
                }),
              ],
            }),
          }),
        });
      }
    },
    872612: function (e, o, t) {
      e.exports = {
        modalContent: "modalContent_acbedc",
        modalDescription: "modalDescription_acbedc",
      };
    },
  },
]);
//# sourceMappingURL=150d2b143a25cf84ce33.js.map
