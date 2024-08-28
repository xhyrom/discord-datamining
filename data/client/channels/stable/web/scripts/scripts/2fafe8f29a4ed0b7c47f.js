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
        d = n(53691),
        A = n(626135),
        E = n(197712),
        p = n(511004),
        g = n(486324),
        C = n(981631),
        m = n(678916),
        w = n(689938),
        R = n(323125);
      t.default = (e) => {
        let {
            file: t,
            imgURI: n,
            transitionState: f,
            allowSkip: M = !1,
            onCrop: _,
            onClose: I,
            uploadType: L = g.pC.AVATAR,
            showUpsellHeader: N = !1,
            analyticsPage: x,
          } = e,
          [v, O] = i.useState({ width: 0, height: 0 }),
          [D, T] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
          [y, P] = i.useState(!1),
          [B, S] = i.useState(1),
          [b, j] = i.useState({ x: 0, y: 0 }),
          [U, G] = i.useState(null),
          [V, k] = i.useState(!1),
          { analyticsLocations: F } = (0, o.ZP)(u.Z.IMAGE_CROPPING_MODAL),
          H = i.useRef({ x: 0, y: 0 }),
          z = i.useRef(null),
          Z = i.useRef(null),
          J = "image/gif" === t.type;
        i.useEffect(() => {
          (0, p.Z)();
        }, []),
          i.useEffect(() => {
            J &&
              N &&
              A.default.track(C.rMx.OPEN_MODAL, {
                type: C.jXE.CROP_GIF_MODAL,
                location: { page: x },
              });
          }, [N, x, J]);
        let K = () => {
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
          X = i.useCallback(
            (e, t, n) => {
              (H.current = (0, E.U$)(e, t, n)),
                null != z.current &&
                  (z.current.style.transform = "translate3d("
                    .concat(H.current.x, "px, ")
                    .concat(H.current.y, "px, 0)"));
            },
            [z],
          ),
          Y = i.useCallback(() => {
            if (null == z.current || B > 1) return;
            let { width: e, height: t } = z.current.getBoundingClientRect(),
              { width: n, height: r } = (0, E.Es)(L, e, t),
              i = (0, E.AK)(L, n, r, t);
            G({ width: n, height: r }), O(i), T((0, E.kH)(n, r, i));
          }, [L, B]),
          W = i.useCallback(
            (e) => {
              let { x: t, y: n } = H.current;
              if (!y || (e.clientX === t && e.clientY === n)) return;
              let r = e.clientX - b.x;
              X(r, e.clientY - b.y, D);
            },
            [D, y, b, X],
          ),
          $ = () => {
            P(!1);
          },
          q = () => {
            let e = K();
            return e.width !== e.height;
          },
          Q = async () => {
            let e;
            if (null == z.current) return;
            k(!0);
            let n = z.current,
              r = K();
            if (J)
              try {
                let { result: i, cancelFn: a } = await (0, E.$p)(
                  t,
                  n,
                  v,
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
            else e = (0, s.PT)(n, v, H.current, r);
            await _(e, t), k(!1), I();
          };
        i.useEffect(
          () => (
            window.addEventListener("mouseup", $),
            window.addEventListener("resize", Y),
            () => {
              window.removeEventListener("mouseup", $),
                window.removeEventListener("resize", Y);
            }
          ),
          [Y],
        ),
          i.useEffect(
            () => () => {
              null != Z.current && Z.current();
            },
            [],
          ),
          i.useEffect(() => {
            if (y)
              return (
                window.addEventListener("mousemove", W),
                () => window.removeEventListener("mousemove", W)
              );
          }, [W, y]);
        let ee = (0, h.M)("ImageCroppingModal");
        return (0, r.jsx)(o.Gt, {
          value: F,
          children: (0, r.jsxs)(l.ModalRoot, {
            onAnimationEnd: Y,
            transitionState: f,
            size: l.ModalSize.MEDIUM,
            children: [
              N &&
                !ee &&
                (0, r.jsx)(c.Z, {
                  type: L,
                  analyticsPage: x,
                  analyticsSection: C.jXE.CROP_GIF_MODAL,
                  isGIF: J,
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
                          opacity: null == U ? 0 : 1,
                          transform: "translate3d("
                            .concat(H.current.x, "px, ")
                            .concat(H.current.y, "px, 0px)"),
                          ...(() => {
                            if (null == U) return {};
                            let e = U.width / U.height,
                              t = q() && e > g.MY ? v.height / U.height : 1;
                            return {
                              width: U.width * B * t,
                              minWidth: U.width * B * t,
                              height: U.height * B * t,
                            };
                          })(),
                        },
                        className: V ? R.imageDisabled : R.imageEnabled,
                        src: n,
                        alt: "avatar",
                        ref: z,
                        onMouseDown: (e) => {
                          let t = e.clientX - H.current.x;
                          j({ x: t, y: e.clientY - H.current.y }), P(!0);
                        },
                        draggable: !1,
                      }),
                      (0, r.jsx)("div", {
                        className:
                          L === g.pC.AVATAR ? R.overlayAvatar : R.overlayBanner,
                        style: {
                          opacity: null == U ? 0 : 1,
                          width: v.width,
                          height: v.height,
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
                          if (null == U) return;
                          let { width: t, height: n } = U,
                            r = (0, E.kH)(t * e, n * e, v),
                            { x: i, y: s } = H.current;
                          (!(0, a.inRange)(i, r.right, r.left) ||
                            !(0, a.inRange)(s, r.top, r.bottom)) &&
                            X(i, s, r),
                            S(e),
                            T(r);
                        },
                        disabled: V,
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
                  N &&
                    ee &&
                    (0, r.jsx)("div", {
                      children: (0, r.jsx)(d.p, {
                        showUpsell: !0,
                        upsellText: "Wear GIFs with Nitro",
                        ctaText: w.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                        ctaAnalyticsObject: {
                          section: C.jXE.EMOJI_PICKER_FLOATING_UPSELL,
                        },
                        position: "inline",
                        className: R.nitroUpsell,
                        showShadow: !1,
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
                          M && (_(n, t), I());
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
                          I();
                        },
                        children: w.Z.Messages.AVATAR_UPLOAD_CANCEL,
                      }),
                      (0, r.jsx)(l.Button, {
                        submitting: V,
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
          E = new Promise((e, t) => {
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
          { result: E, cancelFn: () => A.terminate() }
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
//# sourceMappingURL=2fafe8f29a4ed0b7c47f.js.map
