"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93158"],
  {
    144165(e, t, i) {
      i.d(t, { _: () => b });
      var a = i(627968),
        l = i(64700),
        s = i(503698),
        d = i.n(s);
      function r(e) {
        let {
          alt: t,
          ariaLabel: i,
          ariaHidden: l,
          role: s,
          width: d = 288,
          height: r = 162,
        } = e;
        return (0, a.jsx)("img", {
          style: { width: d, height: r },
          src: "https://cdn.discordapp.com/assets/content/01fad351459d7599c15e3503bc14fadd01f8d18ffb2c66e064370504bd59ee82.svg",
          alt: t,
          "aria-label": i,
          "aria-hidden": l,
          role: s ?? "img",
        });
      }
      var n = i(187322),
        c = i(939249),
        h = i(834730),
        u = i(264927),
        o = i(515718),
        m = i(835517),
        x = i(966697),
        p = i(652215),
        g = i(838541),
        f = i(985018),
        R = i(503117);
      let b = l.forwardRef((e, t) => {
        var i, s, r, h;
        let m,
          {
            className: b,
            imageClassName: j,
            readyState: y = p.Rv1.READY,
            src: N,
            placeholder: I,
            placeholderVersion: S,
            alt: k,
            width: E,
            height: W,
            maxWidth: A = E,
            maxHeight: O = W,
            minWidth: C = 0,
            minHeight: G = 0,
            mediaLayoutType: H,
            limitResponsiveWidth: L = !0,
            accessory: $,
            zoomable: D = !0,
            original: M,
            children: P = (e) => {
              let {
                src: t,
                size: i,
                alt: l,
                className: s,
                mediaLayoutType: d,
              } = e;
              return (0, a.jsx)("img", {
                className: s ?? void 0,
                alt: l ?? f.intl.string(f.t.X4IxWL),
                src: t,
                style: w(i, d),
              });
            },
            renderAccessory: T,
            onClick: V,
            tabIndex: X,
            dataSafeSrc: _,
            useFullWidth: F = !1,
            srcIsAnimated: Q,
            disableLoadingSpinner: Y = !1,
            ...z
          } = e,
          K = l.useRef(null),
          U = l.useRef(null);
        if (1 === E && 1 === W) return null;
        let q = (0, o.Uj)({
            width: E,
            height: W,
            maxWidth: A,
            maxHeight: O,
            minWidth: C,
            minHeight: G,
          }),
          B = 0 !== q.width ? q.width / q.height : 1;
        "" !== N && y !== p.Rv1.ERROR
          ? (m = P({
              src: N,
              size: q,
              alt: k,
              className: j,
              mediaLayoutType: H,
            }))
          : y !== p.Rv1.LOADING &&
            (m = (0, a.jsx)(v, { size: q, mediaLayoutType: H, alt: k })),
          (m = (0, a.jsx)(x.y, {
            disableSpinner: Y,
            readyState: y,
            aspectRatio: B,
            placeholder: I,
            placeholderVersion: S,
            placeholderStyle: w(q, H),
            children: m,
          }));
        let J = null != T ? T() : null;
        return (
          (J = J ?? $),
          (0, a.jsx)(n.vN, {
            ringTarget: K,
            focusTarget: U,
            children: (0, a.jsxs)("div", {
              ref: t,
              className: d()(
                "imageWrapper",
                R.h4,
                { [R.j3]: D, [R.LF]: y !== p.Rv1.READY, [R.vk]: null != V },
                b,
              ),
              style:
                ((i = q),
                (s = L),
                (r = F),
                (h = H) === g.dG.MOSAIC
                  ? {
                      display: "block",
                      maxHeight: "inherit",
                      margin: "auto",
                      width: r ? "100%" : i.width,
                      height: "100%",
                    }
                  : h === g.dG.RESPONSIVE
                    ? {
                        maxWidth: s ? i.width : void 0,
                        width: "100%",
                        aspectRatio: `${i.width} / ${i.height}`,
                      }
                    : i),
              ...z,
              children: [
                null != M &&
                  (0, a.jsx)("a", {
                    tabIndex: -1,
                    onClick: V,
                    "aria-hidden": !0,
                    className: R.mt,
                    href: M,
                    ref: K,
                    "data-role": "img",
                    "data-safe-src": _ ?? N,
                  }),
                null != V
                  ? (0, a.jsx)(c.D, {
                      className: R.w8,
                      tabIndex: X ?? 0,
                      onClick: V,
                      "aria-label": k ?? f.intl.string(f.t.X4IxWL),
                      "aria-describedby": u.l2,
                      innerRef: U,
                      focusProps: { enabled: !1 },
                      children: m,
                    })
                  : m,
                null != J
                  ? (0, a.jsx)("div", { className: R.mQ, children: J })
                  : null,
              ],
            }),
          })
        );
      });
      function v(e) {
        let { size: t, mediaLayoutType: i, alt: l } = e;
        return (0, a.jsxs)("div", {
          className: R.x5,
          style: (function (e, t) {
            switch (t) {
              case g.dG.MOSAIC:
                return {
                  width: "100%",
                  height: "100%",
                  aspectRatio: `${e.width} / ${e.height}`,
                  display: "flex",
                  maxHeight: "inherit",
                };
              case g.dG.RESPONSIVE:
                return { ...j(e), display: "flex" };
              default:
                return e;
            }
          })(t, i),
          children: [
            (0, a.jsx)("div", {
              className: R.QM,
              children: (0, a.jsx)(r, {
                alt: l ?? f.intl.string(f.t.X4IxWL),
                height: "auto",
              }),
            }),
            (0, a.jsx)(h.E, {
              className: R.b4,
              variant: "text-sm/medium",
              color: "text-subtle",
              children: f.intl.string(f.t.sAfT1K),
            }),
          ],
        });
      }
      function w(e, t) {
        switch (t) {
          case g.dG.MOSAIC:
            return {
              display: "block",
              objectFit: "cover",
              minWidth: "100%",
              minHeight: "100%",
              maxWidth: 1 === (0, m.A)() ? "calc(100% + 1px)" : "100%",
            };
          case g.dG.RESPONSIVE:
            return j(e);
          default:
            return e;
        }
      }
      function j(e) {
        let { width: t, height: i } = e;
        return {
          maxWidth: t,
          maxHeight: i,
          width: "100%",
          display: "block",
          aspectRatio: `${t} / ${i}`,
        };
      }
      b.displayName = "Image";
    },
  },
]);
//# sourceMappingURL=93158.553daf6213327895.js.map
