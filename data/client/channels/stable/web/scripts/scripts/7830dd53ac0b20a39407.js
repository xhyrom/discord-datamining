"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12014"],
  {
    879367: function (t, a, e) {
      e.r(a);
      var n = e(200651),
        o = e(192379),
        s = e(481060),
        r = e(388032),
        c = e(999752);
      a.default = function (t) {
        let {
            onClose: a,
            onComplete: e,
            transitionState: i,
            webviewUrl: l,
          } = t,
          d = o.useCallback(() => {
            a(), e();
          }, [e, a]),
          u = o.useCallback(
            (t) => {
              if ("" !== l && "string" == typeof t.data)
                try {
                  var a = JSON.parse(t.data);
                  "AGE_CHECK_COMPLETE" === a.status && d();
                } catch (t) {}
            },
            [l, d],
          );
        return (
          o.useEffect(
            () => (
              window.addEventListener("message", u),
              () => {
                window.removeEventListener("message", u);
              }
            ),
            [u],
          ),
          (0, n.jsx)(s.ModalRoot, {
            transitionState: i,
            className: c.root,
            children: (0, n.jsxs)(s.ModalContent, {
              className: c.content,
              children: [
                (0, n.jsx)(s.Heading, {
                  variant: "heading-xl/bold",
                  children: r.intl.string(r.t.tYNaXF),
                }),
                (0, n.jsx)("iframe", {
                  id: "frame",
                  src: l,
                  className: c.iframe,
                  allow: "camera; microphone",
                }),
                (0, n.jsx)(s.Button, {
                  color: s.Button.Colors.TRANSPARENT,
                  look: s.Button.Looks.BLANK,
                  onClick: a,
                  className: c.cancelButton,
                  children: r.intl.string(r.t["4gTnU1"]),
                }),
              ],
            }),
          })
        );
      };
    },
    999752: function (t, a, e) {
      t.exports = {
        root: "root_ba7877",
        content: "content_ba7877",
        iframe: "iframe_ba7877",
        cancelButton: "cancelButton_ba7877",
      };
    },
  },
]);
//# sourceMappingURL=7830dd53ac0b20a39407.js.map
