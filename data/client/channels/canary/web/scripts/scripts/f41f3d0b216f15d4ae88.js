"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19538"],
  {
    941362: function (e, t, o) {
      o.d(t, {
        q: function () {
          return a;
        },
      });
      var s = o(442837),
        n = o(375954);
      let a = (e) =>
        (0, s.e7)([n.Z], () => {
          var t;
          return null !== (t = n.Z.getLastNonCurrentUserMessage(e)) &&
            void 0 !== t
            ? t
            : n.Z.getLastMessage(e);
        });
    },
    699783: function (e, t, o) {
      o.r(t),
        o.d(t, {
          default: function () {
            return R;
          },
        });
      var s = o(735250),
        n = o(470079),
        a = o(399606),
        r = o(481060),
        l = o(194359),
        i = o(726521),
        c = o(594174),
        d = o(51144),
        u = o(941362),
        C = o(134612),
        O = o(981631),
        _ = o(689938),
        N = o(872612);
      function R(e) {
        let {
            userId: t,
            channelId: o,
            transitionState: R,
            onBlock: T,
            onBlockAndReport: I,
            onClose: M,
            onCancel: A,
          } = e,
          B = (0, u.q)(o),
          E = n.useCallback(() => {
            l.Z.addRelationship({
              userId: t,
              context: { location: C.zr },
              type: O.OGo.BLOCKED,
            }),
              (0, r.showToast)(
                (0, r.createToast)(
                  _.Z.Messages.STRANGER_DANGER_BLOCK_CONFIRM,
                  r.ToastType.SUCCESS,
                ),
              );
          }, [t]),
          h = n.useCallback(() => {
            E(), T(), M();
          }, [E, T, M]),
          L = n.useCallback(() => {
            E(), (0, i.wk)(B), I(), M();
          }, [B, E, I, M]),
          P = (0, a.e7)([c.default], () => c.default.getUser(t)),
          D = d.ZP.useName(P);
        return (0, s.jsx)(r.ModalRoot, {
          transitionState: R,
          children: (0, s.jsx)(r.Scroller, {
            style: { overflow: "hidden auto" },
            children: (0, s.jsxs)(r.ModalContent, {
              className: N.modalContent,
              children: [
                (0, s.jsx)(r.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: _.Z.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                    name: D,
                  }),
                }),
                (0, s.jsx)(r.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  className: N.modalDescription,
                  children:
                    _.Z.Messages
                      .INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_DESCRIPTION,
                }),
                (0, s.jsx)(r.Button, {
                  onClick: h,
                  color: r.ButtonColors.BRAND,
                  size: r.ButtonSizes.MEDIUM,
                  children:
                    _.Z.Messages
                      .INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_BLOCK_BUTTON,
                }),
                (0, s.jsx)(r.Button, {
                  onClick: L,
                  color: r.ButtonColors.PRIMARY,
                  size: r.ButtonSizes.MEDIUM,
                  children:
                    _.Z.Messages
                      .INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_BLOCK_AND_REPORT_BUTTON,
                }),
                (0, s.jsx)(r.Button, {
                  onClick: A,
                  color: r.ButtonColors.PRIMARY,
                  look: r.ButtonLooks.OUTLINED,
                  size: r.ButtonSizes.MEDIUM,
                  children:
                    _.Z.Messages
                      .INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_CANCEL_BUTTON,
                }),
              ],
            }),
          }),
        });
      }
    },
    872612: function (e, t, o) {
      e.exports = {
        modalContent: "modalContent_acbedc",
        modalDescription: "modalDescription_acbedc",
      };
    },
  },
]);
//# sourceMappingURL=f41f3d0b216f15d4ae88.js.map
