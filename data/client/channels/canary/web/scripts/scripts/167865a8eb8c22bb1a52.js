"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41128"],
  {
    699783: function (t, o, n) {
      n.r(o),
        n.d(o, {
          default: function () {
            return x;
          },
        });
      var e = n(200651),
        s = n(192379),
        l = n(399606),
        i = n(481060),
        a = n(194359),
        r = n(726521),
        c = n(681678),
        d = n(594174),
        u = n(51144),
        h = n(991981),
        C = n(134612),
        k = n(981631),
        p = n(388032),
        m = n(921529);
      function x(t) {
        let {
            userId: o,
            channelId: n,
            transitionState: x,
            onBlock: B,
            onBlockAndReport: M,
            onClose: f,
            onCancel: j,
          } = t,
          z = (0, h.q)(n),
          D = s.useCallback(() => {
            a.Z.addRelationship({
              userId: o,
              context: { location: C.zr },
              type: k.OGo.BLOCKED,
            }),
              c.Z.showBlockSuccessToast(o, n);
          }, [o, n]),
          b = s.useCallback(() => {
            D(), B(), f();
          }, [D, B, f]),
          g = s.useCallback(() => {
            D(), (0, r.wk)(z), M(), f();
          }, [z, D, M, f]),
          I = (0, l.e7)([d.default], () => d.default.getUser(o)),
          R = u.ZP.useName(I);
        return (0, e.jsx)(i.ModalRoot, {
          transitionState: x,
          children: (0, e.jsx)(i.Scroller, {
            style: { overflow: "hidden auto" },
            children: (0, e.jsxs)(i.ModalContent, {
              className: m.modalContent,
              children: [
                (0, e.jsx)(i.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: p.intl.format(p.t.x5pOn5, { name: R }),
                }),
                (0, e.jsx)(i.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  className: m.modalDescription,
                  children: p.intl.string(p.t.aedksr),
                }),
                (0, e.jsx)(i.Button, {
                  onClick: b,
                  color: i.ButtonColors.BRAND,
                  size: i.ButtonSizes.MEDIUM,
                  children: p.intl.string(p.t.MzsUsr),
                }),
                (0, e.jsx)(i.Button, {
                  onClick: g,
                  color: i.ButtonColors.PRIMARY,
                  size: i.ButtonSizes.MEDIUM,
                  children: p.intl.string(p.t["3pzuj4"]),
                }),
                (0, e.jsx)(i.Button, {
                  onClick: j,
                  color: i.ButtonColors.PRIMARY,
                  look: i.ButtonLooks.OUTLINED,
                  size: i.ButtonSizes.MEDIUM,
                  children: p.intl.string(p.t.okuCoa),
                }),
              ],
            }),
          }),
        });
      }
    },
    921529: function (t, o, n) {
      t.exports = {
        modalContent: "modalContent_acbedc",
        modalDescription: "modalDescription_acbedc",
      };
    },
  },
]);
//# sourceMappingURL=167865a8eb8c22bb1a52.js.map
