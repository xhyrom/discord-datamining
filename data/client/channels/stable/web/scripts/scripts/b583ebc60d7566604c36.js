"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19538"],
  {
    699783: function (t, o, n) {
      n.r(o),
        n.d(o, {
          default: function () {
            return m;
          },
        });
      var e = n(200651),
        s = n(192379),
        i = n(399606),
        l = n(481060),
        a = n(194359),
        r = n(726521),
        c = n(594174),
        d = n(51144),
        u = n(650408),
        h = n(134612),
        C = n(981631),
        p = n(388032),
        k = n(367580);
      function m(t) {
        let {
            userId: o,
            channelId: n,
            transitionState: m,
            onBlock: x,
            onBlockAndReport: B,
            onClose: M,
            onCancel: f,
          } = t,
          g = (0, u.q)(n),
          j = s.useCallback(() => {
            a.Z.addRelationship({
              userId: o,
              context: { location: h.zr },
              type: C.OGo.BLOCKED,
            }),
              (0, l.showToast)(
                (0, l.createToast)(
                  p.intl.string(p.t.YVFRoK),
                  l.ToastType.SUCCESS,
                ),
              );
          }, [o]),
          z = s.useCallback(() => {
            j(), x(), M();
          }, [j, x, M]),
          D = s.useCallback(() => {
            j(), (0, r.wk)(g), B(), M();
          }, [g, j, B, M]),
          b = (0, i.e7)([c.default], () => c.default.getUser(o)),
          R = d.ZP.useName(b);
        return (0, e.jsx)(l.ModalRoot, {
          transitionState: m,
          children: (0, e.jsx)(l.Scroller, {
            style: { overflow: "hidden auto" },
            children: (0, e.jsxs)(l.ModalContent, {
              className: k.modalContent,
              children: [
                (0, e.jsx)(l.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: p.intl.format(p.t.x5pOn5, { name: R }),
                }),
                (0, e.jsx)(l.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  className: k.modalDescription,
                  children: p.intl.string(p.t.aedksr),
                }),
                (0, e.jsx)(l.Button, {
                  onClick: z,
                  color: l.ButtonColors.BRAND,
                  size: l.ButtonSizes.MEDIUM,
                  children: p.intl.string(p.t.MzsUsr),
                }),
                (0, e.jsx)(l.Button, {
                  onClick: D,
                  color: l.ButtonColors.PRIMARY,
                  size: l.ButtonSizes.MEDIUM,
                  children: p.intl.string(p.t["3pzuj4"]),
                }),
                (0, e.jsx)(l.Button, {
                  onClick: f,
                  color: l.ButtonColors.PRIMARY,
                  look: l.ButtonLooks.OUTLINED,
                  size: l.ButtonSizes.MEDIUM,
                  children: p.intl.string(p.t.okuCoa),
                }),
              ],
            }),
          }),
        });
      }
    },
    367580: function (t, o, n) {
      t.exports = {
        modalContent: "modalContent_acbedc",
        modalDescription: "modalDescription_acbedc",
      };
    },
  },
]);
//# sourceMappingURL=b583ebc60d7566604c36.js.map
