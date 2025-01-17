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
        l = n(36793),
        s = n(481060),
        u = n(100527),
        o = n(906732),
        c = n(540059),
        h = n(488499),
        d = n(222062),
        p = n(530329),
        g = n(626135),
        A = n(197712),
        E = n(511004),
        C = n(486324),
        m = n(981631),
        w = n(678916),
        f = n(388032),
        R = n(63059);
      e.default = (t) => {
        let {
            file: e,
            imgURI: n,
            transitionState: M,
            allowSkip: N = !1,
            onCrop: x,
            onClose: _,
            uploadType: v = C.pC.AVATAR,
            showUpsellHeader: y = !1,
            analyticsPage: I,
          } = t,
          [D, L] = i.useState({ width: 0, height: 0 }),
          [B, S] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
          [O, b] = i.useState(!1),
          [T, j] = i.useState(1),
          [G, k] = i.useState({ x: 0, y: 0 }),
          [U, V] = i.useState(null),
          [P, H] = i.useState(!1),
          { analyticsLocations: F } = (0, o.ZP)(u.Z.IMAGE_CROPPING_MODAL),
          z = (0, c.Q3)("ImageCroppingNModal"),
          Y = i.useRef({ x: 0, y: 0 }),
          K = i.useRef(null),
          X = i.useRef(null),
          Z = "image/gif" === e.type;
        i.useEffect(() => {
          (0, E.Z)();
        }, []),
          i.useEffect(() => {
            Z &&
              y &&
              g.default.track(m.rMx.OPEN_MODAL, {
                type: m.jXE.CROP_GIF_MODAL,
                location: { page: I },
              });
          }, [y, I, Z]);
        let W = () => {
            switch (v) {
              case C.pC.BANNER:
                return { height: C.f, width: C.L0 };
              case C.pC.VIDEO_BACKGROUND:
                return w.HE;
              case C.pC.AVATAR:
              case C.pC.AVATAR_DECORATION:
                return { height: m.dGM, width: m.dGM };
              case C.pC.GUILD_BANNER:
                return { height: C._T, width: C.X_ };
              case C.pC.SCHEDULED_EVENT_IMAGE:
                return { height: C.xT, width: C.d6 };
              case C.pC.HOME_HEADER:
                return { height: C.Uo, width: C.N8 };
            }
          },
          $ = i.useCallback(
            (t, e, n) => {
              (Y.current = (0, A.U$)(t, e, n)),
                null != K.current &&
                  (K.current.style.transform = "translate3d("
                    .concat(Y.current.x, "px, ")
                    .concat(Y.current.y, "px, 0)"));
            },
            [K],
          ),
          q = i.useCallback(() => {
            if (null == K.current || T > 1) return;
            let { width: t, height: e } = K.current.getBoundingClientRect(),
              { width: n, height: r } = (0, A.Es)(v, t, e, z),
              i = (0, A.AK)(v, n, r, e, z);
            V({ width: n, height: r }), L(i), S((0, A.kH)(n, r, i));
          }, [z, v, T]),
          J = i.useCallback(
            (t) => {
              let { x: e, y: n } = Y.current;
              if (!O || (t.clientX === e && t.clientY === n)) return;
              let r = t.clientX - G.x;
              $(r, t.clientY - G.y, B);
            },
            [B, O, G, $],
          ),
          Q = () => {
            b(!1);
          },
          tt = () => {
            let t = W();
            return t.width !== t.height;
          },
          te = async () => {
            let t;
            if (null == K.current) return;
            H(!0);
            let n = K.current,
              r = W();
            if (Z)
              try {
                let { result: i, cancelFn: a } = await (0, A.$p)(
                  e,
                  n,
                  D,
                  Y.current,
                  r,
                );
                (X.current = a), (t = await i), (X.current = null);
              } catch (t) {
                var i;
                throw (
                  (null === (i = X.current) || void 0 === i || i.call(X),
                  (X.current = null),
                  Error("Error cropping GIF"))
                );
              }
            else t = (0, l.PT)(n, D, Y.current, r);
            await x(t, e), H(!1), _();
          };
        i.useEffect(
          () => (
            window.addEventListener("mouseup", Q),
            window.addEventListener("resize", q),
            () => {
              window.removeEventListener("mouseup", Q),
                window.removeEventListener("resize", q);
            }
          ),
          [q],
        ),
          i.useEffect(
            () => () => {
              null != X.current && X.current();
            },
            [],
          ),
          i.useEffect(() => {
            if (O)
              return (
                window.addEventListener("mousemove", J),
                () => window.removeEventListener("mousemove", J)
              );
          }, [J, O]);
        let tn = v === C.pC.AVATAR || v === C.pC.BANNER,
          tr = (0, d.M)(!tn);
        return (0, r.jsx)(o.Gt, {
          value: F,
          children: (0, r.jsxs)(s.ModalRoot, {
            onAnimationEnd: q,
            transitionState: M,
            size: s.ModalSize.MEDIUM,
            children: [
              y &&
                !tr &&
                (0, r.jsx)(h.Z, {
                  type: v,
                  analyticsPage: I,
                  analyticsSection: m.jXE.CROP_GIF_MODAL,
                  isGIF: Z,
                  banner: n,
                }),
              (0, r.jsx)(s.ModalHeader, {
                separator: !1,
                children: (0, r.jsx)(s.FormTitle, {
                  className: R.titleCase,
                  tag: s.FormTitleTags.H1,
                  children: f.intl.string(f.t.DxAYCA),
                }),
              }),
              (0, r.jsxs)(s.ModalContent, {
                className: R.modalContent,
                children: [
                  (0, r.jsxs)("div", {
                    className: R.editingContainer,
                    children: [
                      (0, r.jsx)("img", {
                        style: {
                          opacity: null == U ? 0 : 1,
                          transform: "translate3d("
                            .concat(Y.current.x, "px, ")
                            .concat(Y.current.y, "px, 0px)"),
                          ...(() => {
                            if (null == U) return {};
                            let t = U.width / U.height,
                              e = tt() && t > C.MY ? D.height / U.height : 1;
                            return {
                              width: U.width * T * e,
                              minWidth: U.width * T * e,
                              height: U.height * T * e,
                            };
                          })(),
                        },
                        className: P ? R.imageDisabled : R.imageEnabled,
                        src: n,
                        alt: "avatar",
                        ref: K,
                        onMouseDown: (t) => {
                          let e = t.clientX - Y.current.x;
                          k({ x: e, y: t.clientY - Y.current.y }), b(!0);
                        },
                        draggable: !1,
                      }),
                      (0, r.jsx)("div", {
                        className:
                          v === C.pC.AVATAR ? R.overlayAvatar : R.overlayBanner,
                        style: {
                          opacity: null == U ? 0 : 1,
                          width: D.width,
                          height: D.height,
                        },
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: R.sliderContainer,
                    children: [
                      (0, r.jsx)(s.ImageIcon, {
                        size: "md",
                        color: "currentColor",
                        className: R.icon,
                      }),
                      (0, r.jsx)(s.Slider, {
                        initialValue: 1,
                        minValue: 1,
                        maxValue: 2,
                        keyboardStep: 0.025,
                        asValueChanges: (t) => {
                          if (null == U) return;
                          let { width: e, height: n } = U,
                            r = (0, A.kH)(e * t, n * t, D),
                            { x: i, y: l } = Y.current;
                          (!(0, a.inRange)(i, r.right, r.left) ||
                            !(0, a.inRange)(l, r.top, r.bottom)) &&
                            $(i, l, r),
                            j(t),
                            S(r);
                        },
                        disabled: P,
                        equidistant: !0,
                        hideBubble: !0,
                        "aria-label": f.intl.string(f.t.dnvZSk),
                      }),
                      (0, r.jsx)(s.ImageIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: R.icon,
                        width: 48,
                        height: 48,
                      }),
                    ],
                  }),
                  y &&
                    tr &&
                    (0, r.jsx)("div", {
                      children: (0, r.jsx)(p.Z, {
                        uploadType: v,
                        showUpsell: !0,
                        position: "inline",
                        className: R.nitroUpsell,
                        showShadow: !1,
                      }),
                    }),
                ],
              }),
              (0, r.jsxs)(s.ModalFooter, {
                className: R.modalFooter,
                children: [
                  N
                    ? (0, r.jsx)(s.Button, {
                        className: R.cancelButton,
                        look: s.Button.Looks.LINK,
                        color: s.Button.Colors.PRIMARY,
                        size: s.ButtonSizes.SMALL,
                        onClick: () => {
                          N && (x(n, e), _());
                        },
                        children: f.intl.string(f.t.B944ys),
                      })
                    : null,
                  (0, r.jsxs)("div", {
                    className: R.buttonsRight,
                    children: [
                      (0, r.jsx)(s.Button, {
                        className: R.cancelButton,
                        look: s.Button.Looks.LINK,
                        color: s.Button.Colors.PRIMARY,
                        size: s.ButtonSizes.SMALL,
                        onClick: () => {
                          if (null != X.current) {
                            X.current(), (X.current = null), H(!1);
                            return;
                          }
                          _();
                        },
                        children: f.intl.string(f.t["9TG40t"]),
                      }),
                      (0, r.jsx)(s.Button, {
                        submitting: P,
                        size: s.ButtonSizes.SMALL,
                        onClick: te,
                        children: f.intl.string(f.t.ZSHmKC),
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
          return l;
        },
        AK: function () {
          return h;
        },
        Es: function () {
          return o;
        },
        U$: function () {
          return s;
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
      async function l(t, e, r, l, s) {
        let {
            x: u,
            y: o,
            scaledCropWidth: c,
            scaledCropHeight: h,
          } = (0, i.eu)(e, r, l, s),
          d = await t.arrayBuffer(),
          p = new Worker(new URL("/assets/" + n.u("86047"), n.b)),
          g = new Promise((t, e) => {
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
          { result: g, cancelFn: () => p.terminate() }
        );
      }
      function s(t, e, n) {
        return {
          x: (0, r.clamp)(t, n.left, n.right),
          y: (0, r.clamp)(e, n.bottom, n.top),
        };
      }
      function u(t, e, n, r, i) {
        let l = n,
          s = r,
          u = i ? a.US : a.vJ;
        return (n > u && ((l = u), (s = (u / n) * r)), n / r < t)
          ? { width: l, height: s }
          : { width: (e / s) * l, height: e };
      }
      function o(t, e, n, r) {
        switch (t) {
          case a.pC.AVATAR:
          case a.pC.AVATAR_DECORATION:
            return { width: e, height: n };
          case a.pC.BANNER:
            let i = r ? a.SP : a.qj;
            return u(a.MY, i, e, n, r);
          case a.pC.GUILD_BANNER:
            let l = r ? a.t2 : a.C5;
            return u(a.Ij, l, e, n, r);
          case a.pC.VIDEO_BACKGROUND:
            let s = r ? a.kP : a.PB;
            return u(a.Ff, s, e, n, r);
          case a.pC.SCHEDULED_EVENT_IMAGE:
            let o = r ? a.tv : a.WV;
            return u(a.ut, o, e, n, r);
          case a.pC.HOME_HEADER:
            return u(a.sX, a.SW, e, n, r);
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
      function h(t, e, n, r, i) {
        let l = i ? a.US : a.vJ;
        switch (t) {
          case a.pC.AVATAR:
          case a.pC.AVATAR_DECORATION:
            let s = Math.min(e, n);
            return { width: s, height: s };
          case a.pC.BANNER:
            let u = Math.min(e, l);
            return { width: u, height: u * (1 / a.MY) };
          case a.pC.GUILD_BANNER:
            let o = Math.min(e, l);
            return { width: o, height: Math.min((9 / 16) * o, r) };
          case a.pC.VIDEO_BACKGROUND:
            let c = Math.min(e, l);
            return { width: c, height: (9 / 16) * c };
          case a.pC.SCHEDULED_EVENT_IMAGE:
            let h = Math.min(e, l);
            return { width: h, height: 0.4 * h };
          case a.pC.HOME_HEADER:
            let d = Math.min(e, l);
            return { width: d, height: d * (1 / a.sX) };
        }
      }
    },
  },
]);
//# sourceMappingURL=5e4f8a1c40491714f5f2.js.map
