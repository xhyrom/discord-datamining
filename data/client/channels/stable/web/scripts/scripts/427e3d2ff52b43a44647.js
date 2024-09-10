"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48017"],
  {
    511004: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      function r() {
        return n.e("47674").then(n.bind(n, 305522));
      }
    },
    850085: function (e, t, n) {
      n.r(t), n(47120), n(411104);
      var r = n(735250),
        i = n(470079),
        a = n(392711),
        s = n(36793),
        l = n(481060),
        u = n(100527),
        o = n(906732),
        c = n(488499),
        h = n(81245),
        d = n(530329),
        A = n(626135),
        p = n(197712),
        E = n(511004),
        g = n(486324),
        C = n(981631),
        m = n(678916),
        w = n(689938),
        R = n(57739);
      t.default = (e) => {
        let {
            file: t,
            imgURI: n,
            transitionState: f,
            allowSkip: M = !1,
            onCrop: _,
            onClose: N,
            uploadType: L = g.pC.AVATAR,
            showUpsellHeader: v = !1,
            analyticsPage: I,
          } = e,
          [x, D] = i.useState({ width: 0, height: 0 }),
          [y, O] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
          [T, B] = i.useState(!1),
          [S, b] = i.useState(1),
          [V, j] = i.useState({ x: 0, y: 0 }),
          [P, G] = i.useState(null),
          [U, k] = i.useState(!1),
          { analyticsLocations: F } = (0, o.ZP)(u.Z.IMAGE_CROPPING_MODAL),
          H = i.useRef({ x: 0, y: 0 }),
          z = i.useRef(null),
          Z = i.useRef(null),
          Y = "image/gif" === t.type;
        i.useEffect(() => {
          (0, E.Z)();
        }, []),
          i.useEffect(() => {
            Y &&
              v &&
              A.default.track(C.rMx.OPEN_MODAL, {
                type: C.jXE.CROP_GIF_MODAL,
                location: { page: I },
              });
          }, [v, I, Y]);
        let J = () => {
            switch (L) {
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
          K = i.useCallback(
            (e, t, n) => {
              (H.current = (0, p.U$)(e, t, n)),
                null != z.current &&
                  (z.current.style.transform = "translate3d("
                    .concat(H.current.x, "px, ")
                    .concat(H.current.y, "px, 0)"));
            },
            [z],
          ),
          X = i.useCallback(() => {
            if (null == z.current || S > 1) return;
            let { width: e, height: t } = z.current.getBoundingClientRect(),
              { width: n, height: r } = (0, p.Es)(L, e, t),
              i = (0, p.AK)(L, n, r, t);
            G({ width: n, height: r }), D(i), O((0, p.kH)(n, r, i));
          }, [L, S]),
          W = i.useCallback(
            (e) => {
              let { x: t, y: n } = H.current;
              if (!T || (e.clientX === t && e.clientY === n)) return;
              let r = e.clientX - V.x;
              K(r, e.clientY - V.y, y);
            },
            [y, T, V, K],
          ),
          $ = () => {
            B(!1);
          },
          q = () => {
            let e = J();
            return e.width !== e.height;
          },
          Q = async () => {
            let e;
            if (null == z.current) return;
            k(!0);
            let n = z.current,
              r = J();
            if (Y)
              try {
                let { result: i, cancelFn: a } = await (0, p.$p)(
                  t,
                  n,
                  x,
                  H.current,
                  r,
                );
                (Z.current = a), (e = await i), (Z.current = null);
              } catch (e) {
                var i;
                throw (
                  (null === (i = Z.current) || void 0 === i || i.call(Z),
                  (Z.current = null),
                  Error("Error cropping GIF"))
                );
              }
            else e = (0, s.PT)(n, x, H.current, r);
            await _(e, t), k(!1), N();
          };
        i.useEffect(
          () => (
            window.addEventListener("mouseup", $),
            window.addEventListener("resize", X),
            () => {
              window.removeEventListener("mouseup", $),
                window.removeEventListener("resize", X);
            }
          ),
          [X],
        ),
          i.useEffect(
            () => () => {
              null != Z.current && Z.current();
            },
            [],
          ),
          i.useEffect(() => {
            if (T)
              return (
                window.addEventListener("mousemove", W),
                () => window.removeEventListener("mousemove", W)
              );
          }, [W, T]);
        let ee = L === g.pC.AVATAR || L === g.pC.BANNER,
          et = (0, h.Mu)("ImageCroppingModal", !ee);
        return (0, r.jsx)(o.Gt, {
          value: F,
          children: (0, r.jsxs)(l.ModalRoot, {
            onAnimationEnd: X,
            transitionState: f,
            size: l.ModalSize.MEDIUM,
            children: [
              v &&
                !et &&
                (0, r.jsx)(c.Z, {
                  type: L,
                  analyticsPage: I,
                  analyticsSection: C.jXE.CROP_GIF_MODAL,
                  isGIF: Y,
                  banner: n,
                }),
              (0, r.jsx)(l.ModalHeader, {
                separator: !1,
                children: (0, r.jsx)(l.FormTitle, {
                  className: R.titleCase,
                  tag: l.FormTitleTags.H1,
                  children: w.Z.Messages.AVATAR_UPLOAD_EDIT_MEDIA,
                }),
              }),
              (0, r.jsxs)(l.ModalContent, {
                className: R.modalContent,
                children: [
                  (0, r.jsxs)("div", {
                    className: R.editingContainer,
                    children: [
                      (0, r.jsx)("img", {
                        style: {
                          opacity: null == P ? 0 : 1,
                          transform: "translate3d("
                            .concat(H.current.x, "px, ")
                            .concat(H.current.y, "px, 0px)"),
                          ...(() => {
                            if (null == P) return {};
                            let e = P.width / P.height,
                              t = q() && e > g.MY ? x.height / P.height : 1;
                            return {
                              width: P.width * S * t,
                              minWidth: P.width * S * t,
                              height: P.height * S * t,
                            };
                          })(),
                        },
                        className: U ? R.imageDisabled : R.imageEnabled,
                        src: n,
                        alt: "avatar",
                        ref: z,
                        onMouseDown: (e) => {
                          let t = e.clientX - H.current.x;
                          j({ x: t, y: e.clientY - H.current.y }), B(!0);
                        },
                        draggable: !1,
                      }),
                      (0, r.jsx)("div", {
                        className:
                          L === g.pC.AVATAR ? R.overlayAvatar : R.overlayBanner,
                        style: {
                          opacity: null == P ? 0 : 1,
                          width: x.width,
                          height: x.height,
                        },
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: R.sliderContainer,
                    children: [
                      (0, r.jsx)(l.ImageIcon, {
                        size: "md",
                        color: "currentColor",
                        className: R.icon,
                      }),
                      (0, r.jsx)(l.Slider, {
                        initialValue: 1,
                        minValue: 1,
                        maxValue: 2,
                        keyboardStep: 0.025,
                        asValueChanges: (e) => {
                          if (null == P) return;
                          let { width: t, height: n } = P,
                            r = (0, p.kH)(t * e, n * e, x),
                            { x: i, y: s } = H.current;
                          (!(0, a.inRange)(i, r.right, r.left) ||
                            !(0, a.inRange)(s, r.top, r.bottom)) &&
                            K(i, s, r),
                            b(e),
                            O(r);
                        },
                        disabled: U,
                        equidistant: !0,
                        hideBubble: !0,
                        "aria-label": w.Z.Messages.FORM_LABEL_AVATAR_SIZE,
                      }),
                      (0, r.jsx)(l.ImageIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: R.icon,
                        width: 48,
                        height: 48,
                      }),
                    ],
                  }),
                  v &&
                    et &&
                    (0, r.jsx)("div", {
                      children: (0, r.jsx)(d.Z, {
                        uploadType: L,
                        showUpsell: !0,
                        position: "inline",
                        className: R.nitroUpsell,
                        showShadow: !1,
                        onSecondaryClick: N,
                      }),
                    }),
                ],
              }),
              (0, r.jsxs)(l.ModalFooter, {
                className: R.modalFooter,
                children: [
                  M
                    ? (0, r.jsx)(l.Button, {
                        className: R.cancelButton,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        size: l.ButtonSizes.SMALL,
                        onClick: () => {
                          M && (_(n, t), N());
                        },
                        children: w.Z.Messages.AVATAR_UPLOAD_SKIP,
                      })
                    : null,
                  (0, r.jsxs)("div", {
                    className: R.buttonsRight,
                    children: [
                      (0, r.jsx)(l.Button, {
                        className: R.cancelButton,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        size: l.ButtonSizes.SMALL,
                        onClick: () => {
                          if (null != Z.current) {
                            Z.current(), (Z.current = null), k(!1);
                            return;
                          }
                          N();
                        },
                        children: w.Z.Messages.AVATAR_UPLOAD_CANCEL,
                      }),
                      (0, r.jsx)(l.Button, {
                        submitting: U,
                        size: l.ButtonSizes.SMALL,
                        onClick: Q,
                        children: w.Z.Messages.AVATAR_UPLOAD_APPLY,
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
    197712: function (e, t, n) {
      n.d(t, {
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
      async function s(e, t, r, s, l) {
        let {
            x: u,
            y: o,
            scaledCropWidth: c,
            scaledCropHeight: h,
          } = (0, i.eu)(t, r, s, l),
          d = await e.arrayBuffer(),
          A = new Worker(new URL("/assets/" + n.u("86047"), n.b)),
          p = new Promise((e, t) => {
            A.onmessage = (n) => {
              let { data: r } = n;
              if (r.type === a.u.CROP_GIF_COMPLETE) {
                var i;
                e(
                  ((i = new Blob([r.result])),
                  new Promise((e) => {
                    let t = new FileReader();
                    (t.onload = (t) => {
                      var n;
                      let r =
                        null === (n = t.target) || void 0 === n
                          ? void 0
                          : n.result;
                      "string" == typeof r ? e(r) : e("");
                    }),
                      t.readAsDataURL(i);
                  })),
                ),
                  A.terminate();
              } else
                r.type === a.u.CROP_GIF_ERROR &&
                  (t(Error("Error cropping GIF")), A.terminate());
            };
          });
        return (
          A.postMessage({
            type: a.u.CROP_GIF_START,
            gif: new Uint8Array(d),
            x: 0 | u,
            y: 0 | o,
            width: 0 | c,
            height: 0 | h,
          }),
          { result: p, cancelFn: () => A.terminate() }
        );
      }
      function l(e, t, n) {
        return {
          x: (0, r.clamp)(e, n.left, n.right),
          y: (0, r.clamp)(t, n.bottom, n.top),
        };
      }
      function u(e, t, n, r) {
        let i = n,
          s = r;
        return (n > a.vJ && ((i = a.vJ), (s = r * (a.vJ / n))), n / r < e)
          ? { width: i, height: s }
          : { width: (t / s) * i, height: t };
      }
      function o(e, t, n) {
        switch (e) {
          case a.pC.AVATAR:
          case a.pC.AVATAR_DECORATION:
            return { width: t, height: n };
          case a.pC.BANNER:
            return u(a.MY, a.qj, t, n);
          case a.pC.GUILD_BANNER:
            return u(a.Ij, a.C5, t, n);
          case a.pC.VIDEO_BACKGROUND:
            return u(a.Ff, a.PB, t, n);
          case a.pC.SCHEDULED_EVENT_IMAGE:
            return u(a.ut, a.WV, t, n);
          case a.pC.HOME_HEADER:
            return u(a.sX, a.SW, t, n);
        }
      }
      function c(e, t, n) {
        let r = { top: 0, bottom: 0, left: 0, right: 0 },
          i = e - n.width,
          a = t - n.height;
        return (
          0 !== i && ((r.left = -Math.abs(i / 2)), (r.right = i / 2)),
          0 !== a && ((r.bottom = -Math.abs(a / 2)), (r.top = a / 2)),
          r
        );
      }
      function h(e, t, n, r) {
        switch (e) {
          case a.pC.AVATAR:
          case a.pC.AVATAR_DECORATION:
            let i = Math.min(t, n);
            return { width: i, height: i };
          case a.pC.BANNER:
            let s = Math.min(t, a.vJ);
            return { width: s, height: s * (1 / a.MY) };
          case a.pC.GUILD_BANNER:
            let l = Math.min(t, a.vJ);
            return { width: l, height: Math.min((9 / 16) * l, r) };
          case a.pC.VIDEO_BACKGROUND:
            let u = Math.min(t, a.vJ);
            return { width: u, height: (9 / 16) * u };
          case a.pC.SCHEDULED_EVENT_IMAGE:
            let o = Math.min(t, a.vJ);
            return { width: o, height: 0.4 * o };
          case a.pC.HOME_HEADER:
            let c = Math.min(t, a.vJ);
            return { width: c, height: c * (1 / a.sX) };
        }
      }
    },
  },
]);
//# sourceMappingURL=427e3d2ff52b43a44647.js.map
