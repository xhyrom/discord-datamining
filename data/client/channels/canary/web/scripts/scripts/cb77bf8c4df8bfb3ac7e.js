(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23746"],
  {
    943418: function (e, t, s) {
      var n = s(383083);
      (t.encode = n.encode), (t.decode = n.decode);
    },
    383083: function (e, t, s) {
      var n = s(413135).Buffer,
        r = [
          255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255,
          255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
          17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0,
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 255, 255, 255, 255, 255,
        ];
      (t.encode = function (e) {
        !n.isBuffer(e) && (e = new n(e));
        var t,
          s,
          r = 0,
          i = 0,
          a = 0,
          o = 0;
        for (
          var c = new n(
            8 *
              ((s = Math.floor((t = e).length / 5)),
              t.length % 5 == 0 ? s : s + 1),
          );
          r < e.length;

        ) {
          var l = e[r];
          a > 3
            ? ((o =
                ((o = l & (255 >> a)) << (a = (a + 5) % 8)) |
                ((r + 1 < e.length ? e[r + 1] : 0) >> (8 - a))),
              r++)
            : ((o = (l >> (8 - (a + 5))) & 31), 0 == (a = (a + 5) % 8) && r++),
            (c[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(o)),
            i++;
        }
        for (r = i; r < c.length; r++) c[r] = 61;
        return c;
      }),
        (t.decode = function (e) {
          var t,
            s = 0,
            i = 0,
            a = 0;
          !n.isBuffer(e) && (e = new n(e));
          for (
            var o = new n(Math.ceil((5 * e.length) / 8)), c = 0;
            c < e.length && 61 != e[c];
            c++
          ) {
            var l = e[c] - 48;
            if (l < r.length)
              (i = r[l]),
                s <= 3
                  ? 0 == (s = (s + 5) % 8)
                    ? ((t |= i), (o[a] = t), a++, (t = 0))
                    : (t |= 255 & (i << (8 - s)))
                  : ((t |= 255 & (i >>> (s = (s + 5) % 8))),
                    (o[a] = t),
                    a++,
                    (t = 255 & (i << (8 - s))));
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
    837651: function (e, t, s) {
      "use strict";
      s.r(t), s(47120);
      var n = s(735250),
        r = s(470079),
        i = s(481060),
        a = s(816814),
        o = s(600164),
        c = s(198993),
        l = s(200483),
        d = s(594174),
        u = s(287880),
        h = s(689938),
        f = s(925924);
      function g(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      let p = (e) => {
        let { image: t, label: s, text: r, children: a } = e;
        return (0, n.jsxs)(o.Z, {
          className: f.spacing,
          children: [
            (0, n.jsx)(o.Z, {
              grow: 0,
              shrink: 0,
              basis: "156px",
              justify: o.Z.Justify.CENTER,
              className: f.image,
              children: t,
            }),
            (0, n.jsx)(o.Z, {
              direction: o.Z.Direction.VERTICAL,
              justify: o.Z.Justify.CENTER,
              children: (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)(i.FormTitle, {
                    tag: "h5",
                    className: f.headerSpacing,
                    children: s,
                  }),
                  (0, n.jsx)(i.FormText, {
                    type: i.FormText.Types.DESCRIPTION,
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
            { totpSecret: a, code: l, isVerifying: g } = this.state,
            m =
              null === (e = d.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.email,
            x = (0, u.U0)(null != m ? m : "", a),
            _ = (0, n.jsx)("form", {
              onSubmit: this.handleActivate,
              children: (0, n.jsxs)(o.Z, {
                className: f.inputContainer,
                align: o.Z.Align.START,
                children: [
                  (0, n.jsx)(i.TextInput, {
                    value: l,
                    className: f.input,
                    placeholder: "000 000",
                    maxLength: 7,
                    autoComplete: "one-time-code",
                    onChange: this.handleCodeChange,
                    error: this.state.error,
                    autoFocus: !0,
                  }),
                  (0, n.jsx)(o.Z.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, n.jsx)(i.Button, {
                      type: "submit",
                      submitting: g,
                      children: h.Z.Messages.TWO_FA_ACTIVATE,
                    }),
                  }),
                ],
              }),
            });
          return (0, n.jsxs)(i.ModalRoot, {
            transitionState: t,
            size: i.ModalSize.DYNAMIC,
            className: f.customWidth,
            children: [
              (0, n.jsxs)(i.ModalHeader, {
                separator: !1,
                children: [
                  (0, n.jsxs)(o.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                      (0, n.jsx)(i.Heading, {
                        variant: "heading-lg/semibold",
                        children: h.Z.Messages.TWO_FA_ENABLE,
                      }),
                      (0, n.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        className: f.subHeader,
                        children: h.Z.Messages.TWO_FA_ENABLE_SUBHEADER,
                      }),
                    ],
                  }),
                  (0, n.jsx)(o.Z.Child, {
                    grow: 0,
                    children: (0, n.jsx)(i.ModalCloseButton, { onClick: r }),
                  }),
                ],
              }),
              (0, n.jsxs)(i.ModalContent, {
                children: [
                  (0, n.jsx)(p, {
                    image: (0, n.jsx)("img", {
                      alt: "",
                      src: s(340061),
                      width: 100,
                      height: 100,
                    }),
                    label: h.Z.Messages.TWO_FA_DOWNLOAD_APP_LABEL,
                    text: h.Z.Messages.TWO_FA_DOWNLOAD_APP_BODY.format({
                      googleAuthURL:
                        "https://support.google.com/accounts/answer/1066447?hl=en",
                      authyURL: "https://www.authy.com/",
                    }),
                  }),
                  (0, n.jsx)(i.FormDivider, { className: f.divider }),
                  (0, n.jsx)(p, {
                    image: (0, n.jsx)(c.ZP, { text: x }),
                    label: h.Z.Messages.TWO_FA_QR_LABEL,
                    text: h.Z.Messages.TWO_FA_QR_BODY,
                    children: (0, n.jsxs)("div", {
                      className: f.topSpacing,
                      children: [
                        (0, n.jsx)(i.FormTitle, {
                          tag: "h5",
                          className: f.headerSpacing,
                          children: h.Z.Messages.TWO_FA_KEY,
                        }),
                        (0, n.jsx)(i.Text, {
                          variant: "text-md/normal",
                          className: f.secret,
                          selectable: !0,
                          children: a,
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(i.FormDivider, { className: f.divider }),
                  (0, n.jsx)(p, {
                    image: (0, n.jsx)("img", { alt: "", src: s(308777) }),
                    label: h.Z.Messages._TWO_FA_LOGIN_LABEL,
                    text: h.Z.Messages.TWO_FA_LOGIN_BODY,
                    children: _,
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
              let { password: t, emailToken: s } = this.props,
                { totpSecret: n, code: r } = this.state;
              this.setState({ isVerifying: !0 }),
                a.Z.enable({
                  password: t,
                  code: r,
                  secret: (0, u.Qe)(n),
                  ...((0, l.j)() && { emailToken: s }),
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
    198993: function (e, t, s) {
      "use strict";
      s.d(t, {
        c2: function () {
          return p;
        },
        cK: function () {
          return r;
        },
      });
      var n,
        r,
        i,
        a,
        o = s(735250),
        c = s(470079),
        l = s(235167),
        d = s(458221);
      function u(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      ((n = r || (r = {})).SIZE_40 = "SIZE_40"), (n.SIZE_60 = "SIZE_60");
      let h = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        f = s(515695);
      class g extends (i = c.PureComponent) {
        render() {
          let { className: e, text: t, ...s } = this.props;
          return (0, o.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: s.size,
              height: s.size,
              backgroundColor: s.bgColor,
            },
            className: e,
            children: (0, o.jsx)(l.default, { value: t, level: "M", ...s }),
          });
        }
      }
      u(g, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class p extends (a = c.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            t = h[null != e ? e : "SIZE_40"];
          return (0, o.jsxs)("div", {
            className: d.qrCodeContainer,
            children: [
              (0, o.jsx)(g, { ...this.props }),
              (0, o.jsx)("div", {
                className: d.qrCodeOverlay,
                children: (0, o.jsx)("img", {
                  className: d[t],
                  src: f,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      u(p, "defaultProps", {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000",
      }),
        (t.ZP = g);
    },
    287880: function (e, t, s) {
      "use strict";
      s.d(t, {
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
          return l;
        },
      }),
        s(518263),
        s(970173),
        s(520712),
        s(268111),
        s(941497),
        s(32026),
        s(480839),
        s(744285),
        s(492257),
        s(873817),
        s(757143);
      var n,
        r,
        i,
        a = s(943418);
      let o =
          null !==
            (i = null === (n = window) || void 0 === n ? void 0 : n.crypto) &&
          void 0 !== i
            ? i
            : null === (r = window) || void 0 === r
              ? void 0
              : r.msCrypto,
        c = "Uint8Array" in window,
        l = null != o && "getRandomValues" in o && c,
        d = "PublicKeyCredential" in window && c;
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
        let s =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "Discord";
        return "otpauth://totp/"
          .concat(encodeURI(s), ":")
          .concat(encodeURI(e), "?secret=")
          .concat(h(t), "&issuer=")
          .concat(encodeURIComponent(s));
      }
    },
    925924: function (e, t, s) {
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
    458221: function (e, t, s) {
      "use strict";
      s.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
  },
]);
//# sourceMappingURL=cb77bf8c4df8bfb3ac7e.js.map
