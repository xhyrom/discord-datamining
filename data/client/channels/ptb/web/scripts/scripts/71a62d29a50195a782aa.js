"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57650"],
  {
    264165: function (e, n, t) {
      var a = t(735250);
      t(470079);
      var i = t(120356),
        o = t.n(i),
        r = t(354555);
      n.Z = (e) => {
        let { aspectRatio: n, style: t, className: i, children: s } = e;
        return (0, a.jsx)("div", {
          className: o()(r.outer, i),
          style: { paddingTop: "".concat((1 / n) * 100, "%"), ...t },
          children: (0, a.jsx)("div", { className: r.inner, children: s }),
        });
      };
    },
    677012: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return A;
          },
        });
      var a = t(735250),
        i = t(470079),
        o = t(477690),
        r = t(481060),
        s = t(208156),
        l = t(385499),
        c = t(264165),
        d = t(885006),
        u = t(624138),
        h = t(293979),
        _ = t(674563),
        m = t(689938),
        M = t(239890);
      let I = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
        v = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
        N = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
        x = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
      function A(e) {
        var n;
        let { title: t, onClose: o } = e,
          {
            applicationIconURL: u,
            applicationName: A,
            queryParams: b,
            iframeUrl: f,
          } = (0, h.b8)(e),
          { width: p, height: w } = (0, d.Z)(),
          T = i.useMemo(() => {
            let e = Math.min(((w - x - 2 * N) * 16) / 9, v);
            return Math.max(I, Math.min(p - 2 * N, e));
          }, [p, w]);
        return (0, a.jsx)(r.ModalRoot, {
          ...e,
          size: r.ModalSize.DYNAMIC,
          className: M.root,
          children: (0, a.jsxs)("div", {
            style: { width: T },
            children: [
              (0, a.jsxs)(r.ModalHeader, {
                separator: !1,
                className: M.modalHeader,
                children: [
                  (0, a.jsx)(r.Avatar, {
                    src: u,
                    size: r.AvatarSizes.SIZE_32,
                    "aria-label": A,
                    className: M.applicationIcon,
                  }),
                  (0, a.jsxs)("div", {
                    className: M.flexRow,
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)(r.Heading, {
                            variant: "heading-sm/bold",
                            children: A,
                          }),
                          (0, a.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: t,
                          }),
                        ],
                      }),
                      (0, a.jsx)(l.Z, {
                        type: _.Hb.BOT,
                        className: M.botTag,
                        verified:
                          null === (n = e.application.bot) || void 0 === n
                            ? void 0
                            : n.verified,
                      }),
                    ],
                  }),
                  (0, a.jsx)(r.Button, {
                    onClick: o,
                    innerClassName: M.closeButton,
                    className: M.closeButtonContainer,
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.NONE,
                    "aria-label": m.Z.Messages.DISMISS,
                    children: (0, a.jsx)(r.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                      className: M.closeIcon,
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(c.Z, {
                aspectRatio: 16 / 9,
                children: (0, a.jsx)(s.J, {
                  url: f,
                  shouldRefocus: !0,
                  className: M.iframe,
                  queryParams: b,
                }),
              }),
            ],
          }),
        });
      }
    },
    885006: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      }),
        t(47120);
      var a = t(470079);
      function i() {
        var e, n;
        let [t, i] = a.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (n = window.innerHeight) && void 0 !== n ? n : 1080,
        });
        return (
          a.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth;
              i({ width: e, height: window.innerHeight });
            }
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          t
        );
      }
    },
    354555: function (e, n, t) {
      e.exports = { outer: "outer_b15852", inner: "inner_b15852" };
    },
    239890: function (e, n, t) {
      e.exports = {
        root: "root_ea6b24",
        applicationIcon: "applicationIcon_ea6b24",
        modalHeader: "modalHeader_ea6b24",
        closeButtonContainer: "closeButtonContainer_ea6b24",
        closeButton: "closeButton_ea6b24",
        closeIcon: "closeIcon_ea6b24",
        iframe: "iframe_ea6b24",
        botTag: "botTag_ea6b24",
        flexRow: "flexRow_ea6b24",
      };
    },
  },
]);
//# sourceMappingURL=71a62d29a50195a782aa.js.map
