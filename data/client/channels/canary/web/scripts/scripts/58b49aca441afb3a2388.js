"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57650"],
  {
    264165: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var a = t(120356),
        o = t.n(a),
        r = t(261535);
      n.Z = (e) => {
        let { aspectRatio: n, style: t, className: a, children: s } = e;
        return (0, i.jsx)("div", {
          className: o()(r.outer, a),
          style: { paddingTop: "".concat((1 / n) * 100, "%"), ...t },
          children: (0, i.jsx)("div", { className: r.inner, children: s }),
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
      var i = t(200651),
        a = t(192379),
        o = t(477690),
        r = t(481060),
        s = t(208156),
        l = t(385499),
        c = t(264165),
        d = t(885006),
        u = t(624138),
        h = t(293979),
        _ = t(674563),
        m = t(388032),
        I = t(347860);
      let M = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
        v = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
        x = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
        N = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
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
          T = a.useMemo(() => {
            let e = Math.min(((w - N - 2 * x) * 16) / 9, v);
            return Math.max(M, Math.min(p - 2 * x, e));
          }, [p, w]);
        return (0, i.jsx)(r.ModalRoot, {
          ...e,
          size: r.ModalSize.DYNAMIC,
          className: I.root,
          children: (0, i.jsxs)("div", {
            style: { width: T },
            children: [
              (0, i.jsxs)(r.ModalHeader, {
                separator: !1,
                className: I.modalHeader,
                children: [
                  (0, i.jsx)(r.Avatar, {
                    src: u,
                    size: r.AvatarSizes.SIZE_32,
                    "aria-label": A,
                    className: I.applicationIcon,
                  }),
                  (0, i.jsxs)("div", {
                    className: I.flexRow,
                    children: [
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(r.Heading, {
                            variant: "heading-sm/bold",
                            children: A,
                          }),
                          (0, i.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: t,
                          }),
                        ],
                      }),
                      (0, i.jsx)(l.Z, {
                        type: _.Hb.BOT,
                        className: I.botTag,
                        verified:
                          null === (n = e.application.bot) || void 0 === n
                            ? void 0
                            : n.verified,
                      }),
                    ],
                  }),
                  (0, i.jsx)(r.Button, {
                    onClick: o,
                    innerClassName: I.closeButton,
                    className: I.closeButtonContainer,
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.NONE,
                    "aria-label": m.intl.string(m.t.WAI6xs),
                    children: (0, i.jsx)(r.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                      className: I.closeIcon,
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(c.Z, {
                aspectRatio: 16 / 9,
                children: (0, i.jsx)(s.J, {
                  url: f,
                  shouldRefocus: !0,
                  className: I.iframe,
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
          return a;
        },
      }),
        t(47120);
      var i = t(192379);
      function a() {
        var e, n;
        let [t, a] = i.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (n = window.innerHeight) && void 0 !== n ? n : 1080,
        });
        return (
          i.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth;
              a({ width: e, height: window.innerHeight });
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
    261535: function (e, n, t) {
      e.exports = { outer: "outer_b15852", inner: "inner_b15852" };
    },
    347860: function (e, n, t) {
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
//# sourceMappingURL=58b49aca441afb3a2388.js.map
