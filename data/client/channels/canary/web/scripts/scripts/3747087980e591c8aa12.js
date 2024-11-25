"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48017"],
  {
    511004: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      function r() {
        return n.e("47674").then(n.bind(n, 305522));
      }
    },
    850085: function (t, e, n) {
      n.r(e), n(47120), n(411104);
      var r = n(200651),
        i = n(192379),
        a = n(392711),
        s = n(36793),
        l = n(481060),
        u = n(100527),
        o = n(906732),
        c = n(488499),
        h = n(222062),
        d = n(530329),
        p = n(626135),
        A = n(197712),
        E = n(511004),
        g = n(486324),
        C = n(981631),
        m = n(678916),
        w = n(388032),
        f = n(63059);
      e.default = (t) => {
        let {
            file: e,
            imgURI: n,
            transitionState: R,
            allowSkip: M = !1,
            onCrop: N,
            onClose: v,
            uploadType: x = g.pC.AVATAR,
            showUpsellHeader: _ = !1,
            analyticsPage: y,
          } = t,
          [I, D] = i.useState({ width: 0, height: 0 }),
          [L, B] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
          [O, b] = i.useState(!1),
          [S, T] = i.useState(1),
          [j, G] = i.useState({ x: 0, y: 0 }),
          [k, V] = i.useState(null),
          [U, P] = i.useState(!1),
          { analyticsLocations: H } = (0, o.ZP)(u.Z.IMAGE_CROPPING_MODAL),
          F = i.useRef({ x: 0, y: 0 }),
          z = i.useRef(null),
          Y = i.useRef(null),
          J = "image/gif" === e.type;
        i.useEffect(() => {
          (0, E.Z)();
        }, []),
          i.useEffect(() => {
            J &&
              _ &&
              p.default.track(C.rMx.OPEN_MODAL, {
                type: C.jXE.CROP_GIF_MODAL,
                location: { page: y },
              });
          }, [_, y, J]);
        let K = () => {
            switch (x) {
              case g.pC.BANNER:
                return { height: g.f, width: g.L0 };
              case g.pC.VIDEO_BACKGROUND:
                return m.HE;
              case g.pC.AVATAR:
              case g.pC.AVATAR_DECORATION:
                return { height: C.dGM, width: C.dGM };
              case g.pC.GUILD_BANNER:
                return { height: g._T, width: g.X_ };
              case g.pC.SCHEDULED_EVENT_IMAGE:
                return { height: g.xT, width: g.d6 };
              case g.pC.HOME_HEADER:
                return { height: g.Uo, width: g.N8 };
            }
          },
          X = i.useCallback(
            (t, e, n) => {
              (F.current = (0, A.U$)(t, e, n)),
                null != z.current &&
                  (z.current.style.transform = "translate3d("
                    .concat(F.current.x, "px, ")
                    .concat(F.current.y, "px, 0)"));
            },
            [z],
          ),
          Z = i.useCallback(() => {
            if (null == z.current || S > 1) return;
            let { width: t, height: e } = z.current.getBoundingClientRect(),
              { width: n, height: r } = (0, A.Es)(x, t, e),
              i = (0, A.AK)(x, n, r, e);
            V({ width: n, height: r }), D(i), B((0, A.kH)(n, r, i));
          }, [x, S]),
          W = i.useCallback(
            (t) => {
              let { x: e, y: n } = F.current;
              if (!O || (t.clientX === e && t.clientY === n)) return;
              let r = t.clientX - j.x;
              X(r, t.clientY - j.y, L);
            },
            [L, O, j, X],
          ),
          $ = () => {
            b(!1);
          },
          q = () => {
            let t = K();
            return t.width !== t.height;
          },
          Q = async () => {
            let t;
            if (null == z.current) return;
            P(!0);
            let n = z.current,
              r = K();
            if (J)
              try {
                let { result: i, cancelFn: a } = await (0, A.$p)(
                  e,
                  n,
                  I,
                  F.current,
                  r,
                );
                (Y.current = a), (t = await i), (Y.current = null);
              } catch (t) {
                var i;
                throw (
                  (null === (i = Y.current) || void 0 === i || i.call(Y),
                  (Y.current = null),
                  Error("Error cropping GIF"))
                );
              }
            else t = (0, s.PT)(n, I, F.current, r);
            await N(t, e), P(!1), v();
          };
        i.useEffect(
          () => (
            window.addEventListener("mouseup", $),
            window.addEventListener("resize", Z),
            () => {
              window.removeEventListener("mouseup", $),
                window.removeEventListener("resize", Z);
            }
          ),
          [Z],
        ),
          i.useEffect(
            () => () => {
              null != Y.current && Y.current();
            },
            [],
          ),
          i.useEffect(() => {
            if (O)
              return (
                window.addEventListener("mousemove", W),
                () => window.removeEventListener("mousemove", W)
              );
          }, [W, O]);
        let tt = x === g.pC.AVATAR || x === g.pC.BANNER,
          te = (0, h.M)(!tt);
        return (0, r.jsx)(o.Gt, {
          value: H,
          children: (0, r.jsxs)(l.ModalRoot, {
            onAnimationEnd: Z,
            transitionState: R,
            size: l.ModalSize.MEDIUM,
            children: [
              _ &&
                !te &&
                (0, r.jsx)(c.Z, {
                  type: x,
                  analyticsPage: y,
                  analyticsSection: C.jXE.CROP_GIF_MODAL,
                  isGIF: J,
                  banner: n,
                }),
              (0, r.jsx)(l.ModalHeader, {
                separator: !1,
                children: (0, r.jsx)(l.FormTitle, {
                  className: f.titleCase,
                  tag: l.FormTitleTags.H1,
                  children: w.intl.string(w.t.DxAYCA),
                }),
              }),
              (0, r.jsxs)(l.ModalContent, {
                className: f.modalContent,
                children: [
                  (0, r.jsxs)("div", {
                    className: f.editingContainer,
                    children: [
                      (0, r.jsx)("img", {
                        style: {
                          opacity: null == k ? 0 : 1,
                          transform: "translate3d("
                            .concat(F.current.x, "px, ")
                            .concat(F.current.y, "px, 0px)"),
                          ...(() => {
                            if (null == k) return {};
                            let t = k.width / k.height,
                              e = q() && t > g.MY ? I.height / k.height : 1;
                            return {
                              width: k.width * S * e,
                              minWidth: k.width * S * e,
                              height: k.height * S * e,
                            };
                          })(),
                        },
                        className: U ? f.imageDisabled : f.imageEnabled,
                        src: n,
                        alt: "avatar",
                        ref: z,
                        onMouseDown: (t) => {
                          let e = t.clientX - F.current.x;
                          G({ x: e, y: t.clientY - F.current.y }), b(!0);
                        },
                        draggable: !1,
                      }),
                      (0, r.jsx)("div", {
                        className:
                          x === g.pC.AVATAR ? f.overlayAvatar : f.overlayBanner,
                        style: {
                          opacity: null == k ? 0 : 1,
                          width: I.width,
                          height: I.height,
                        },
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: f.sliderContainer,
                    children: [
                      (0, r.jsx)(l.ImageIcon, {
                        size: "md",
                        color: "currentColor",
                        className: f.icon,
                      }),
                      (0, r.jsx)(l.Slider, {
                        initialValue: 1,
                        minValue: 1,
                        maxValue: 2,
                        keyboardStep: 0.025,
                        asValueChanges: (t) => {
                          if (null == k) return;
                          let { width: e, height: n } = k,
                            r = (0, A.kH)(e * t, n * t, I),
                            { x: i, y: s } = F.current;
                          (!(0, a.inRange)(i, r.right, r.left) ||
                            !(0, a.inRange)(s, r.top, r.bottom)) &&
                            X(i, s, r),
                            T(t),
                            B(r);
                        },
                        disabled: U,
                        equidistant: !0,
                        hideBubble: !0,
                        "aria-label": w.intl.string(w.t.dnvZSk),
                      }),
                      (0, r.jsx)(l.ImageIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: f.icon,
                        width: 48,
                        height: 48,
                      }),
                    ],
                  }),
                  _ &&
                    te &&
                    (0, r.jsx)("div", {
                      children: (0, r.jsx)(d.Z, {
                        uploadType: x,
                        showUpsell: !0,
                        position: "inline",
                        className: f.nitroUpsell,
                        showShadow: !1,
                      }),
                    }),
                ],
              }),
              (0, r.jsxs)(l.ModalFooter, {
                className: f.modalFooter,
                children: [
                  M
                    ? (0, r.jsx)(l.Button, {
                        className: f.cancelButton,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        size: l.ButtonSizes.SMALL,
                        onClick: () => {
                          M && (N(n, e), v());
                        },
                        children: w.intl.string(w.t.B944ys),
                      })
                    : null,
                  (0, r.jsxs)("div", {
                    className: f.buttonsRight,
                    children: [
                      (0, r.jsx)(l.Button, {
                        className: f.cancelButton,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        size: l.ButtonSizes.SMALL,
                        onClick: () => {
                          if (null != Y.current) {
                            Y.current(), (Y.current = null), P(!1);
                            return;
                          }
                          v();
                        },
                        children: w.intl.string(w.t["9TG40t"]),
                      }),
                      (0, r.jsx)(l.Button, {
                        submitting: U,
                        size: l.ButtonSizes.SMALL,
                        onClick: Q,
                        children: w.intl.string(w.t.ZSHmKC),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    197712: function (t, e, n) {
      n.d(e, {
        $p: function () {
          return s;
        },
        AK: function () {
          return h;
        },
        Es: function () {
          return o;
        },
        U$: function () {
          return l;
        },
        kH: function () {
          return c;
        },
      }),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(411104),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817);
      var r = n(392711),
        i = n(36793),
        a = n(486324);
      async function s(t, e, r, s, l) {
        let {
            x: u,
            y: o,
            scaledCropWidth: c,
            scaledCropHeight: h,
          } = (0, i.eu)(e, r, s, l),
          d = await t.arrayBuffer(),
          p = new Worker(new URL("/assets/" + n.u("86047"), n.b)),
          A = new Promise((t, e) => {
            p.onmessage = (n) => {
              let { data: r } = n;
              if (r.type === a.u.CROP_GIF_COMPLETE) {
                var i;
                t(
                  ((i = new Blob([r.result])),
                  new Promise((t) => {
                    let e = new FileReader();
                    (e.onload = (e) => {
                      var n;
                      let r =
                        null === (n = e.target) || void 0 === n
                          ? void 0
                          : n.result;
                      "string" == typeof r ? t(r) : t("");
                    }),
                      e.readAsDataURL(i);
                  })),
                ),
                  p.terminate();
              } else
                r.type === a.u.CROP_GIF_ERROR &&
                  (e(Error("Error cropping GIF")), p.terminate());
            };
          });
        return (
          p.postMessage({
            type: a.u.CROP_GIF_START,
            gif: new Uint8Array(d),
            x: 0 | u,
            y: 0 | o,
            width: 0 | c,
            height: 0 | h,
          }),
          { result: A, cancelFn: () => p.terminate() }
        );
      }
      function l(t, e, n) {
        return {
          x: (0, r.clamp)(t, n.left, n.right),
          y: (0, r.clamp)(e, n.bottom, n.top),
        };
      }
      function u(t, e, n, r) {
        let i = n,
          s = r;
        return (n > a.vJ && ((i = a.vJ), (s = r * (a.vJ / n))), n / r < t)
          ? { width: i, height: s }
          : { width: (e / s) * i, height: e };
      }
      function o(t, e, n) {
        switch (t) {
          case a.pC.AVATAR:
          case a.pC.AVATAR_DECORATION:
            return { width: e, height: n };
          case a.pC.BANNER:
            return u(a.MY, a.qj, e, n);
          case a.pC.GUILD_BANNER:
            return u(a.Ij, a.C5, e, n);
          case a.pC.VIDEO_BACKGROUND:
            return u(a.Ff, a.PB, e, n);
          case a.pC.SCHEDULED_EVENT_IMAGE:
            return u(a.ut, a.WV, e, n);
          case a.pC.HOME_HEADER:
            return u(a.sX, a.SW, e, n);
        }
      }
      function c(t, e, n) {
        let r = { top: 0, bottom: 0, left: 0, right: 0 },
          i = t - n.width,
          a = e - n.height;
        return (
          0 !== i && ((r.left = -Math.abs(i / 2)), (r.right = i / 2)),
          0 !== a && ((r.bottom = -Math.abs(a / 2)), (r.top = a / 2)),
          r
        );
      }
      function h(t, e, n, r) {
        switch (t) {
          case a.pC.AVATAR:
          case a.pC.AVATAR_DECORATION:
            let i = Math.min(e, n);
            return { width: i, height: i };
          case a.pC.BANNER:
            let s = Math.min(e, a.vJ);
            return { width: s, height: s * (1 / a.MY) };
          case a.pC.GUILD_BANNER:
            let l = Math.min(e, a.vJ);
            return { width: l, height: Math.min((9 / 16) * l, r) };
          case a.pC.VIDEO_BACKGROUND:
            let u = Math.min(e, a.vJ);
            return { width: u, height: (9 / 16) * u };
          case a.pC.SCHEDULED_EVENT_IMAGE:
            let o = Math.min(e, a.vJ);
            return { width: o, height: 0.4 * o };
          case a.pC.HOME_HEADER:
            let c = Math.min(e, a.vJ);
            return { width: c, height: c * (1 / a.sX) };
        }
      }
    },
  },
]);
//# sourceMappingURL=3747087980e591c8aa12.js.map
