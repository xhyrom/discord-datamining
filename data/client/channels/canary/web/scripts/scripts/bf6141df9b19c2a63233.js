"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19538"],
  {
    991981: function (t, o, e) {
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
            return x;
          },
        });
      var n = e(200651),
        s = e(192379),
        r = e(399606),
        l = e(481060),
        a = e(194359),
        i = e(726521),
        c = e(681678),
        d = e(594174),
        u = e(51144),
        h = e(991981),
        C = e(134612),
        k = e(981631),
        p = e(388032),
        m = e(263856);
      function x(t) {
        let {
            userId: o,
            channelId: e,
            transitionState: x,
            onBlock: B,
            onBlockAndReport: M,
            onClose: g,
            onCancel: f,
          } = t,
          j = (0, h.q)(e),
          z = s.useCallback(() => {
            a.Z.addRelationship({
              userId: o,
              context: { location: C.zr },
              type: k.OGo.BLOCKED,
            }),
              c.Z.showBlockSuccessToast(o, e);
          }, [o, e]),
          D = s.useCallback(() => {
            z(), B(), g();
          }, [z, B, g]),
          b = s.useCallback(() => {
            z(), (0, i.wk)(j), M(), g();
          }, [j, z, M, g]),
          v = (0, r.e7)([d.default], () => d.default.getUser(o)),
          I = u.ZP.useName(v);
        return (0, n.jsx)(l.ModalRoot, {
          transitionState: x,
          children: (0, n.jsx)(l.Scroller, {
            style: { overflow: "hidden auto" },
            children: (0, n.jsxs)(l.ModalContent, {
              className: m.modalContent,
              children: [
                (0, n.jsx)(l.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: p.intl.format(p.t.x5pOn5, { name: I }),
                }),
                (0, n.jsx)(l.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  className: m.modalDescription,
                  children: p.intl.string(p.t.aedksr),
                }),
                (0, n.jsx)(l.Button, {
                  onClick: D,
                  color: l.ButtonColors.BRAND,
                  size: l.ButtonSizes.MEDIUM,
                  children: p.intl.string(p.t.MzsUsr),
                }),
                (0, n.jsx)(l.Button, {
                  onClick: b,
                  color: l.ButtonColors.PRIMARY,
                  size: l.ButtonSizes.MEDIUM,
                  children: p.intl.string(p.t["3pzuj4"]),
                }),
                (0, n.jsx)(l.Button, {
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
    263856: function (t, o, e) {
      t.exports = {
        modalContent: "modalContent_acbedc",
        modalDescription: "modalDescription_acbedc",
      };
    },
  },
]);
//# sourceMappingURL=bf6141df9b19c2a63233.js.map
