"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65617"],
  {
    478063(A, _, t) {
      t.d(_, { A: () => D });
      var I = t(627968),
        s = t(64700),
        a = t(503698),
        E = t.n(a),
        e = t(97808),
        i = t(863610),
        L = t(778712),
        h = t(652215),
        l = t(133171),
        C = t(573435);
      t(883392);
      var n = t(989822);
      let N = {},
        r = 1 / 4;
      function u(A) {
        let { height: _, fillColor: t } = A;
        return (0, I.jsx)("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: _ / 2,
            backgroundColor: t,
            height: _,
            width: 2.5 * _,
          },
          children: (0, I.jsx)(i.n, { className: n.r$, dotRadius: _ * r }),
        });
      }
      function P(A) {
        let { isTyping: _, statusCoords: t, status: s } = A,
          a = (0, l.S3)(h.clD.ONLINE);
        return _
          ? (0, I.jsx)("div", {
              style: { position: "absolute", top: t.y, left: t.x },
              children: (0, I.jsx)(u, { height: t.height, fillColor: a }),
            })
          : null != s
            ? (0, I.jsx)(l.nW, {
                size: t.height,
                status: s,
                style: { position: "absolute", top: t.y, left: t.x },
              })
            : null;
      }
      function G(A) {
        let { src: _, size: t } = A;
        return (0, I.jsx)("img", {
          className: n.tM,
          src: _,
          alt: "",
          width: t,
          height: t,
        });
      }
      let d = {
          [L._3.SIZE_16]: {
            default: C.hW.DIAGONAL_FACEPILE_16,
            typing: C.hW.DIAGONAL_FACEPILE_TYPING_16,
            status: C.hW.DIAGONAL_FACEPILE_STATUS_16,
            back: C.hW.DIAGONAL_FACEPILE_BACK_16,
          },
          [L._3.SIZE_20]: {
            default: C.hW.DIAGONAL_FACEPILE_20,
            typing: C.hW.DIAGONAL_FACEPILE_TYPING_20,
            status: C.hW.DIAGONAL_FACEPILE_STATUS_20,
            back: C.hW.DIAGONAL_FACEPILE_BACK_20,
          },
          [L._3.SIZE_24]: {
            default: C.hW.DIAGONAL_FACEPILE_24,
            typing: C.hW.DIAGONAL_FACEPILE_TYPING_24,
            status: C.hW.DIAGONAL_FACEPILE_STATUS_24,
            back: C.hW.DIAGONAL_FACEPILE_BACK_24,
          },
          [L._3.SIZE_32]: {
            default: C.hW.DIAGONAL_FACEPILE_32,
            typing: C.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: C.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: C.hW.DIAGONAL_FACEPILE_BACK_32,
          },
          [L._3.SIZE_40]: {
            default: C.hW.DIAGONAL_FACEPILE_32,
            typing: C.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: C.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: C.hW.DIAGONAL_FACEPILE_BACK_32,
          },
          [L._3.SIZE_48]: {
            default: C.hW.DIAGONAL_FACEPILE_40,
            typing: C.hW.DIAGONAL_FACEPILE_TYPING_40,
            status: C.hW.DIAGONAL_FACEPILE_STATUS_40,
            back: C.hW.DIAGONAL_FACEPILE_BACK_40,
          },
          [L._3.SIZE_56]: {
            default: C.hW.DIAGONAL_FACEPILE_56,
            typing: C.hW.DIAGONAL_FACEPILE_TYPING_56,
            status: C.hW.DIAGONAL_FACEPILE_STATUS_56,
            back: C.hW.DIAGONAL_FACEPILE_BACK_56,
          },
          [L._3.SIZE_72]: {
            default: C.hW.DIAGONAL_FACEPILE_72,
            typing: C.hW.DIAGONAL_FACEPILE_TYPING_72,
            status: C.hW.DIAGONAL_FACEPILE_STATUS_72,
            back: C.hW.DIAGONAL_FACEPILE_BACK_72,
          },
          [L._3.SIZE_80]: {
            default: C.hW.DIAGONAL_FACEPILE_80,
            typing: C.hW.DIAGONAL_FACEPILE_TYPING_80,
            status: C.hW.DIAGONAL_FACEPILE_STATUS_80,
            back: C.hW.DIAGONAL_FACEPILE_BACK_80,
          },
          [L._3.SIZE_96]: {
            default: C.hW.DIAGONAL_FACEPILE_96,
            typing: C.hW.DIAGONAL_FACEPILE_TYPING_96,
            status: C.hW.DIAGONAL_FACEPILE_STATUS_96,
            back: C.hW.DIAGONAL_FACEPILE_BACK_96,
          },
          [L._3.SIZE_120]: {
            default: C.hW.DIAGONAL_FACEPILE_120,
            typing: C.hW.DIAGONAL_FACEPILE_TYPING_120,
            status: C.hW.DIAGONAL_FACEPILE_STATUS_120,
            back: C.hW.DIAGONAL_FACEPILE_BACK_120,
          },
        },
        D = function (A) {
          var _;
          let {
              backSrc: t,
              frontSrc: a,
              size: i,
              isTyping: l,
              status: r,
              style: u,
              className: D,
              ...O
            } = A,
            { size: c } = L.vC[i],
            {
              statusCoords: W,
              frontAvatarOffsetPx: F,
              frontAvatarSizePx: S,
              backAvatarSizePx: o,
            } = s.useMemo(() => {
              let A,
                _,
                t,
                I,
                s,
                a = `${c}-${l}`;
              return (
                N[a] ??
                ((t = +(_ = (A = L.vC[i]).size / 1.5)),
                (I = 0.5 * _),
                (s = {
                  statusCoords: (0, e.Rb)(A, h.clD.ONLINE, {
                    isTyping: l,
                    isMobile: !1,
                    isVR: !1,
                  }),
                  frontAvatarSizePx: t,
                  backAvatarSizePx: _,
                  frontAvatarOffsetPx: I,
                  frontAvatarCenter: I + t / 2,
                }),
                (N[a] = s),
                s)
              );
            }, [c, l, i]),
            T =
              ((_ = null != r),
              l ? d[i].typing : _ ? d[i].status : d[i].default),
            g = d[i].back;
          return (0, I.jsxs)("div", {
            style: { width: c, height: c, ...u },
            "aria-label": O["aria-label"],
            "aria-hidden": O["aria-hidden"],
            className: E()(n.kL, D),
            children: [
              (0, I.jsxs)(C.Ay, {
                mask: T,
                height: c,
                width: c,
                children: [
                  (0, I.jsx)(C.Ay, {
                    mask: g,
                    height: c,
                    width: c,
                    children: (0, I.jsx)("img", {
                      src: t,
                      alt: "",
                      width: o,
                      height: o,
                    }),
                  }),
                  (0, I.jsx)("div", {
                    style: { position: "absolute", top: F, left: F },
                    children: (0, I.jsx)(G, {
                      src: a,
                      size: S,
                      isTyping: l,
                      status: r,
                    }),
                  }),
                ],
              }),
              (0, I.jsx)(P, { statusCoords: W, status: r, isTyping: l }),
            ],
          });
        };
    },
    954376(A, _, t) {
      t.d(_, { A: () => i });
      var I = t(627968);
      t(64700);
      var s = t(17928),
        a = t(778712),
        E = t(478063),
        e = t(287809);
      let i = function (A) {
        let {
            recipients: _,
            size: t,
            status: i,
            isTyping: L,
            className: h,
            ...l
          } = A,
          C = a.vC[t],
          n = (0, s.yK)(
            [e.default],
            () =>
              _.slice(0, 2).map((A) => {
                let _ = e.default.getUser(A);
                if (null != _) return _.getAvatarURL(void 0, C.size, !1);
              }),
            [_, C.size],
          );
        return (0, I.jsx)(E.A, {
          "aria-label": l["aria-label"],
          "aria-hidden": l["aria-hidden"],
          backSrc: n[0],
          frontSrc: n[1],
          size: t,
          status: i,
          isTyping: L ?? !1,
          className: h,
        });
      };
    },
  },
]);
//# sourceMappingURL=65617.31523e6ba9f9f572.js.map
