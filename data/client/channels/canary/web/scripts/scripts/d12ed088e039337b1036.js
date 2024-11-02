"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19538"],
  {
    941362: function (t, o, e) {
      e.d(o, {
        q: function () {
          return r;
        },
      });
      var n = e(442837),
        s = e(375954);
      let r = (t) =>
        (0, n.e7)([s.Z], () => {
          var o;
          return null !== (o = s.Z.getLastNonCurrentUserMessage(t)) &&
            void 0 !== o
            ? o
            : s.Z.getLastMessage(t);
        });
    },
    699783: function (t, o, e) {
      e.r(o),
        e.d(o, {
          default: function () {
            return m;
          },
        });
      var n = e(200651),
        s = e(192379),
        r = e(399606),
        a = e(481060),
        i = e(194359),
        l = e(726521),
        c = e(594174),
        d = e(51144),
        u = e(941362),
        C = e(134612),
        h = e(981631),
        p = e(388032),
        k = e(872612);
      function m(t) {
        let {
            userId: o,
            channelId: e,
            transitionState: m,
            onBlock: g,
            onBlockAndReport: x,
            onClose: M,
            onCancel: B,
          } = t,
          f = (0, u.q)(e),
          j = s.useCallback(() => {
            i.Z.addRelationship({
              userId: o,
              context: { location: C.zr },
              type: h.OGo.BLOCKED,
            }),
              (0, a.showToast)(
                (0, a.createToast)(
                  p.intl.string(p.t.YVFRoK),
                  a.ToastType.SUCCESS,
                ),
              );
          }, [o]),
          z = s.useCallback(() => {
            j(), g(), M();
          }, [j, g, M]),
          D = s.useCallback(() => {
            j(), (0, l.wk)(f), x(), M();
          }, [f, j, x, M]),
          b = (0, r.e7)([c.default], () => c.default.getUser(o)),
          R = d.ZP.useName(b);
        return (0, n.jsx)(a.ModalRoot, {
          transitionState: m,
          children: (0, n.jsx)(a.Scroller, {
            style: { overflow: "hidden auto" },
            children: (0, n.jsxs)(a.ModalContent, {
              className: k.modalContent,
              children: [
                (0, n.jsx)(a.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: p.intl.format(p.t.x5pOn5, { name: R }),
                }),
                (0, n.jsx)(a.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  className: k.modalDescription,
                  children: p.intl.string(p.t.aedksr),
                }),
                (0, n.jsx)(a.Button, {
                  onClick: z,
                  color: a.ButtonColors.BRAND,
                  size: a.ButtonSizes.MEDIUM,
                  children: p.intl.string(p.t.MzsUsr),
                }),
                (0, n.jsx)(a.Button, {
                  onClick: D,
                  color: a.ButtonColors.PRIMARY,
                  size: a.ButtonSizes.MEDIUM,
                  children: p.intl.string(p.t["3pzuj4"]),
                }),
                (0, n.jsx)(a.Button, {
                  onClick: B,
                  color: a.ButtonColors.PRIMARY,
                  look: a.ButtonLooks.OUTLINED,
                  size: a.ButtonSizes.MEDIUM,
                  children: p.intl.string(p.t.okuCoa),
                }),
              ],
            }),
          }),
        });
      }
    },
    872612: function (t, o, e) {
      t.exports = {
        modalContent: "modalContent_acbedc",
        modalDescription: "modalDescription_acbedc",
      };
    },
  },
]);
//# sourceMappingURL=d12ed088e039337b1036.js.map
