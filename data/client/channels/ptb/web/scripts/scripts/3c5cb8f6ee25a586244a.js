"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90688"],
  {
    515695: function (e) {
      e.exports = "/assets/450a761db3bfe89ca9b9.png";
    },
    198993: function (e, s, o) {
      o.d(s, {
        c2: function () {
          return m;
        },
        cK: function () {
          return t;
        },
      });
      var r,
        t,
        n,
        i,
        a = o(735250),
        c = o(470079),
        l = o(789877),
        d = o(458221);
      function C(e, s, o) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = o),
          e
        );
      }
      ((r = t || (t = {})).SIZE_40 = "SIZE_40"), (r.SIZE_60 = "SIZE_60");
      let _ = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        u = o(515695);
      class f extends (n = c.PureComponent) {
        render() {
          let { className: e, text: s, ...o } = this.props;
          return (0, a.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: o.size,
              height: o.size,
              backgroundColor: o.bgColor,
            },
            className: e,
            children: (0, a.jsx)(l.default, { value: s, level: "M", ...o }),
          });
        }
      }
      C(f, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class m extends (i = c.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            s = _[null != e ? e : "SIZE_40"];
          return (0, a.jsxs)("div", {
            className: d.qrCodeContainer,
            children: [
              (0, a.jsx)(f, { ...this.props }),
              (0, a.jsx)("div", {
                className: d.qrCodeOverlay,
                children: (0, a.jsx)("img", {
                  className: d[s],
                  src: u,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      C(m, "defaultProps", {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000",
      }),
        (s.ZP = f);
    },
    978305: function (e, s, o) {
      o.r(s), o(47120);
      var r = o(735250),
        t = o(470079),
        n = o(120356),
        i = o.n(n),
        a = o(512722),
        c = o.n(a),
        l = o(481060),
        d = o(198993),
        C = o(626135),
        _ = o(985002),
        u = o(880257),
        f = o(631885),
        m = o(292352),
        E = o(981631),
        b = o(689938),
        x = o(532121),
        N = o(113207);
      s.default = (e) => {
        let { transitionState: s, onClose: o } = e,
          n = (0, u.Z)(),
          [a, h] = t.useState(!1),
          { getLinkCode: R, isGetLinkCodeLoading: p } = (0, _.G)({}),
          I = (0, f.rW)(),
          g = (0, f.gU)(),
          M = t.useRef(g);
        c()(!n, "FamilyCenterQRCodeModal should only be rendered for teens.");
        let O = () => {
          h(
            (e) => (
              C.default.track(E.rMx.FAMILY_CENTER_ACTION, {
                action: a ? m.YC.HideQRCode : m.YC.RevealQRCode,
              }),
              !e
            ),
          ),
            !a &&
              setTimeout(() => {
                o();
              }, m.f2);
        };
        t.useEffect(() => {
          R();
        }, []),
          t.useEffect(() => {
            g > M.current && o();
          }, [M, g, o]);
        let v = a && !p && null != I;
        return (0, r.jsxs)(l.ModalRoot, {
          className: x.modalRoot,
          transitionState: s,
          children: [
            (0, r.jsxs)(l.Notice, {
              className: x.notice,
              color: l.NoticeColors.WARNING,
              children: [
                (0, r.jsx)(l.CircleInformationIcon, {
                  size: "sm",
                  color: "currentColor",
                  className: x.infoIcon,
                }),
                b.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_NOTICE,
              ],
            }),
            (0, r.jsxs)(l.ModalContent, {
              className: x.content,
              children: [
                (0, r.jsx)(l.Text, {
                  className: N.marginBottom8,
                  variant: "text-lg/bold",
                  color: "header-primary",
                  children: b.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_HEADER,
                }),
                (0, r.jsx)(l.Text, {
                  className: N.marginBottom20,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children:
                    b.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_DESCRIPTION.format(
                      {
                        link: "https://support.discord.com/hc/articles/14155060633623",
                      },
                    ),
                }),
                (0, r.jsx)("div", {
                  className: x.qrCode,
                  children: (0, r.jsx)(l.Clickable, {
                    className: i()(x.qrCodeObscure, { [x.visible]: v }),
                    onClick: O,
                    children: (0, r.jsx)(d.c2, {
                      size: 272,
                      text: v ? I : m.vH,
                      overlaySize: d.cK.SIZE_60,
                    }),
                  }),
                }),
                (0, r.jsx)(l.Text, {
                  className: x.reminder,
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: b.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_REMINDER,
                }),
                (0, r.jsxs)("div", {
                  className: i()(x.buttonContainer, N.marginTop20),
                  children: [
                    (0, r.jsx)(l.Button, {
                      className: N.marginBottom8,
                      grow: !0,
                      size: l.Button.Sizes.LARGE,
                      onClick: O,
                      submitting: a && p,
                      children: a
                        ? b.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_HIDE
                        : b.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_SHOW,
                    }),
                    (0, r.jsx)(l.Button, {
                      grow: !0,
                      color: l.Button.Colors.PRIMARY,
                      onClick: o,
                      children: b.Z.Messages.CLOSE,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    458221: function (e, s, o) {
      o.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
    532121: function (e, s, o) {
      e.exports = {
        modalRoot: "modalRoot_c23051",
        content: "content_c23051",
        notice: "notice_c23051",
        infoIcon: "infoIcon_c23051",
        buttonContainer: "buttonContainer_c23051",
        qrCode: "qrCode_c23051",
        qrCodeObscure: "qrCodeObscure_c23051",
        visible: "visible_c23051",
        reminder: "reminder_c23051",
      };
    },
  },
]);
//# sourceMappingURL=3c5cb8f6ee25a586244a.js.map
