"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12014"],
  {
    879367: function (a, t, e) {
      e.r(t);
      var n = e(200651),
        o = e(192379),
        s = e(481060),
        r = e(794608);
      t.default = function (a) {
        let {
            onClose: t,
            onComplete: e,
            transitionState: c,
            webviewUrl: i,
          } = a,
          l = o.useCallback(() => {
            t(), e();
          }, [e, t]),
          d = o.useCallback(
            (a) => {
              if ("" !== i && "string" == typeof a.data)
                try {
                  var t = JSON.parse(a.data);
                  "AGE_CHECK_COMPLETE" === t.status && l();
                } catch (a) {}
            },
            [i, l],
          );
        return (
          o.useEffect(
            () => (
              window.addEventListener("message", d),
              () => {
                window.removeEventListener("message", d);
              }
            ),
            [d],
          ),
          (0, n.jsx)(s.ModalRoot, {
            transitionState: c,
            className: r.root,
            children: (0, n.jsxs)(s.ModalContent, {
              className: r.content,
              children: [
                (0, n.jsx)(s.Heading, {
                  variant: "heading-xl/bold",
                  children: "Verify your age",
                }),
                (0, n.jsx)("iframe", {
                  id: "frame",
                  src: i,
                  className: r.iframe,
                  allow: "camera; microphone",
                }),
                (0, n.jsx)(s.Button, {
                  color: s.Button.Colors.TRANSPARENT,
                  onClick: t,
                  className: r.backButton,
                  children: "Back",
                }),
              ],
            }),
          })
        );
      };
    },
    794608: function (a, t, e) {
      a.exports = {
        root: "root_ba7877",
        content: "content_ba7877",
        iframe: "iframe_ba7877",
        backButton: "backButton_ba7877",
      };
    },
  },
]);
//# sourceMappingURL=cb7f5c86b24a62dd5866.js.map
