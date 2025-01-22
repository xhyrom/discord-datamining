(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23746"],
  {
    943418: function (e, t, n) {
      var i = n(383083);
      (t.encode = i.encode), (t.decode = i.decode);
    },
    383083: function (e, t, n) {
      var i = n(413135).Buffer,
        r = [
          255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255,
          255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
          17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0,
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 255, 255, 255, 255, 255,
        ];
      (t.encode = function (e) {
        !i.isBuffer(e) && (e = new i(e));
        var t,
          n,
          r = 0,
          s = 0,
          a = 0,
          o = 0;
        for (
          var l = new i(
            8 *
              ((n = Math.floor((t = e).length / 5)),
              t.length % 5 == 0 ? n : n + 1),
          );
          r < e.length;

        ) {
          var c = e[r];
          a > 3
            ? ((o =
                ((o = c & (255 >> a)) << (a = (a + 5) % 8)) |
                ((r + 1 < e.length ? e[r + 1] : 0) >> (8 - a))),
              r++)
            : ((o = (c >> (8 - (a + 5))) & 31), 0 == (a = (a + 5) % 8) && r++),
            (l[s] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(o)),
            s++;
        }
        for (r = s; r < l.length; r++) l[r] = 61;
        return l;
      }),
        (t.decode = function (e) {
          var t,
            n = 0,
            s = 0,
            a = 0;
          !i.isBuffer(e) && (e = new i(e));
          for (
            var o = new i(Math.ceil((5 * e.length) / 8)), l = 0;
            l < e.length && 61 != e[l];
            l++
          ) {
            var c = e[l] - 48;
            if (c < r.length)
              (s = r[c]),
                n <= 3
                  ? 0 == (n = (n + 5) % 8)
                    ? ((t |= s), (o[a] = t), a++, (t = 0))
                    : (t |= 255 & (s << (8 - n)))
                  : ((t |= 255 & (s >>> (n = (n + 5) % 8))),
                    (o[a] = t),
                    a++,
                    (t = 255 & (s << (8 - n))));
            else throw Error("Invalid input - it is not base32 encoded string");
          }
          return o.slice(0, a);
        });
    },
    308777: function (e) {
      "use strict";
      e.exports = "/assets/384f3fec6998d1b68b40.svg";
    },
    515695: function (e) {
      "use strict";
      e.exports = "/assets/450a761db3bfe89ca9b9.png";
    },
    340061: function (e) {
      "use strict";
      e.exports = "/assets/3f3d47414ba561766307.png";
    },
    837651: function (e, t, n) {
      "use strict";
      n.r(t), n(47120);
      var i = n(200651),
        r = n(192379),
        s = n(481060),
        a = n(816814),
        o = n(600164),
        l = n(198993),
        c = n(200483),
        d = n(594174),
        u = n(287880),
        h = n(388032),
        f = n(235170);
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let p = (e) => {
        let { image: t, label: n, text: r, children: a } = e;
        return (0, i.jsxs)(o.Z, {
          className: f.spacing,
          children: [
            (0, i.jsx)(o.Z, {
              grow: 0,
              shrink: 0,
              basis: "156px",
              justify: o.Z.Justify.CENTER,
              className: f.image,
              children: t,
            }),
            (0, i.jsx)(o.Z, {
              direction: o.Z.Direction.VERTICAL,
              justify: o.Z.Justify.CENTER,
              children: (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(s.FormTitle, {
                    tag: "h5",
                    className: f.headerSpacing,
                    children: n,
                  }),
                  (0, i.jsx)(s.FormText, {
                    type: s.FormText.Types.DESCRIPTION,
                    children: r,
                  }),
                  a,
                ],
              }),
            }),
          ],
        });
      };
      class m extends r.PureComponent {
        render() {
          var e;
          let { transitionState: t, onClose: r } = this.props,
            { totpSecret: a, code: c, isVerifying: g } = this.state,
            m =
              null === (e = d.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.email,
            x = (0, u.U0)(null != m ? m : "", a),
            v = (0, i.jsx)("form", {
              onSubmit: this.handleActivate,
              children: (0, i.jsxs)(o.Z, {
                className: f.inputContainer,
                align: o.Z.Align.START,
                children: [
                  (0, i.jsx)(s.TextInput, {
                    value: c,
                    className: f.input,
                    placeholder: "000 000",
                    maxLength: 7,
                    autoComplete: "one-time-code",
                    onChange: this.handleCodeChange,
                    error: this.state.error,
                    autoFocus: !0,
                  }),
                  (0, i.jsx)(o.Z.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, i.jsx)(s.Button, {
                      type: "submit",
                      submitting: g,
                      children: h.intl.string(h.t["/a5+YW"]),
                    }),
                  }),
                ],
              }),
            });
          return (0, i.jsxs)(s.ModalRoot, {
            transitionState: t,
            size: s.ModalSize.DYNAMIC,
            className: f.customWidth,
            children: [
              (0, i.jsxs)(s.ModalHeader, {
                separator: !1,
                children: [
                  (0, i.jsxs)(o.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                      (0, i.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: h.intl.string(h.t.cDgKtb),
                      }),
                      (0, i.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        className: f.subHeader,
                        children: h.intl.string(h.t["7NGwtL"]),
                      }),
                    ],
                  }),
                  (0, i.jsx)(o.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(s.ModalCloseButton, { onClick: r }),
                  }),
                ],
              }),
              (0, i.jsxs)(s.ModalContent, {
                children: [
                  (0, i.jsx)(p, {
                    image: (0, i.jsx)("img", {
                      alt: "",
                      src: n(340061),
                      width: 100,
                      height: 100,
                    }),
                    label: h.intl.string(h.t["9E74Dw"]),
                    text: h.intl.format(h.t.A7Aeh4, {
                      googleAuthURL:
                        "https://support.google.com/accounts/answer/1066447?hl=en",
                      authyURL: "https://www.authy.com/",
                    }),
                  }),
                  (0, i.jsx)(s.FormDivider, { className: f.divider }),
                  (0, i.jsx)(p, {
                    image: (0, i.jsx)(l.ZP, { text: x }),
                    label: h.intl.string(h.t["91InFx"]),
                    text: h.intl.string(h.t.hFeBkp),
                    children: (0, i.jsxs)("div", {
                      className: f.topSpacing,
                      children: [
                        (0, i.jsx)(s.FormTitle, {
                          tag: "h5",
                          className: f.headerSpacing,
                          children: h.intl.string(h.t["76IPws"]),
                        }),
                        (0, i.jsx)(s.Text, {
                          variant: "text-md/normal",
                          className: f.secret,
                          selectable: !0,
                          children: a,
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)(s.FormDivider, { className: f.divider }),
                  (0, i.jsx)(p, {
                    image: (0, i.jsx)("img", { alt: "", src: n(308777) }),
                    label: h.intl.string(h.t["SaD/LS"]),
                    text: h.intl.string(h.t.vI1ziY),
                    children: v,
                  }),
                ],
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            g(this, "state", {
              code: "",
              totpSecret: (0, u.bV)(),
              error: null,
              isVerifying: !1,
            }),
            g(this, "handleCodeChange", (e) => {
              this.setState({ code: e });
            }),
            g(this, "handleActivate", (e) => {
              e.preventDefault();
              let { password: t, emailToken: n } = this.props,
                { totpSecret: i, code: r } = this.state;
              this.setState({ isVerifying: !0 }),
                a.Z.enable({
                  password: t,
                  code: r,
                  secret: (0, u.Qe)(i),
                  ...((0, c.j)() && { emailToken: n }),
                }).then(this.handleActivateSuccess, (e) =>
                  this.setState({ error: e.body.message, isVerifying: !1 }),
                );
            }),
            g(this, "handleActivateSuccess", () => {
              let { onClose: e, handleEnableMFASuccess: t } = this.props;
              this.setState({ isVerifying: !1 }), t(), null == e || e();
            });
        }
      }
      t.default = m;
    },
    198993: function (e, t, n) {
      "use strict";
      n.d(t, {
        c2: function () {
          return x;
        },
        cK: function () {
          return r;
        },
      });
      var i,
        r,
        s,
        a,
        o = n(200651),
        l = n(192379),
        c = n(120356),
        d = n.n(c),
        u = n(841226),
        h = n(982823);
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      ((i = r || (r = {})).SIZE_40 = "SIZE_40"), (i.SIZE_60 = "SIZE_60");
      let g = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        p = n(515695);
      class m extends (s = l.PureComponent) {
        render() {
          let { className: e, text: t, ...n } = this.props;
          return (0, o.jsx)("div", {
            style: {
              width: n.size,
              height: n.size,
              backgroundColor: n.bgColor,
            },
            className: d()(h.qrCodeContainer, e),
            children: (0, o.jsx)(u.default, { value: t, level: "M", ...n }),
          });
        }
      }
      f(m, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class x extends (a = l.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            t = g[null != e ? e : "SIZE_40"];
          return (0, o.jsxs)("div", {
            className: h.qrCodeOverlayContainer,
            children: [
              (0, o.jsx)(m, { ...this.props }),
              (0, o.jsx)("div", {
                className: h.qrCodeOverlay,
                children: (0, o.jsx)("img", {
                  className: h[t],
                  src: p,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      f(x, "defaultProps", {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000",
      }),
        (t.ZP = m);
    },
    287880: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ae: function () {
          return d;
        },
        Qe: function () {
          return h;
        },
        U0: function () {
          return f;
        },
        bV: function () {
          return u;
        },
        uZ: function () {
          return c;
        },
      }),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817),
        n(757143);
      var i,
        r,
        s,
        a = n(943418);
      let o =
          null !==
            (s = null === (i = window) || void 0 === i ? void 0 : i.crypto) &&
          void 0 !== s
            ? s
            : null === (r = window) || void 0 === r
              ? void 0
              : r.msCrypto,
        l = "Uint8Array" in window,
        c = null != o && "getRandomValues" in o && l,
        d = "PublicKeyCredential" in window && l;
      function u() {
        var e, t;
        return (
          (t = ((e = 20), o.getRandomValues(new Uint8Array(20)))),
          a
            .encode(t)
            .toString("utf8")
            .replace(/=/g, "")
            .toLowerCase()
            .replace(/(\w{4})/g, "$1 ")
            .trim()
        );
      }
      function h(e) {
        return e.replace(/[\s._-]+/g, "").toUpperCase();
      }
      function f(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "Discord";
        return "otpauth://totp/"
          .concat(encodeURI(n), ":")
          .concat(encodeURI(e), "?secret=")
          .concat(h(t), "&issuer=")
          .concat(encodeURIComponent(n));
      }
    },
    235170: function (e, t, n) {
      "use strict";
      e.exports = {
        spacing: "spacing_f7d416",
        headerSpacing: "headerSpacing_f7d416",
        topSpacing: "topSpacing_f7d416",
        inputContainer: "inputContainer_f7d416",
        input: "input_f7d416",
        customWidth: "customWidth_f7d416",
        divider: "divider_f7d416",
        image: "image_f7d416",
        secret: "secret_f7d416",
        subHeader: "subHeader_f7d416",
      };
    },
    982823: function (e, t, n) {
      "use strict";
      n.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeOverlayContainer: "qrCodeOverlayContainer_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
  },
]);
//# sourceMappingURL=8c329f83bf4ee88c5173.js.map
