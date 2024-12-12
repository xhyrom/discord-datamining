"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90688"],
  {
    515695: function (e) {
      e.exports = "/assets/450a761db3bfe89ca9b9.png";
    },
    198993: function (e, r, t) {
      t.d(r, {
        c2: function () {
          return h;
        },
        cK: function () {
          return n;
        },
      });
      var o,
        n,
        s,
        i,
        l = t(200651),
        a = t(192379),
        c = t(120356),
        d = t.n(c),
        C = t(841596),
        u = t(982823);
      function f(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      ((o = n || (n = {})).SIZE_40 = "SIZE_40"), (o.SIZE_60 = "SIZE_60");
      let m = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        b = t(515695);
      class x extends (s = a.PureComponent) {
        render() {
          let { className: e, text: r, ...t } = this.props;
          return (0, l.jsx)("div", {
            style: {
              width: t.size,
              height: t.size,
              backgroundColor: t.bgColor,
            },
            className: d()(u.qrCodeContainer, e),
            children: (0, l.jsx)(C.default, { value: r, level: "M", ...t }),
          });
        }
      }
      f(x, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class h extends (i = a.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            r = m[null != e ? e : "SIZE_40"];
          return (0, l.jsxs)("div", {
            className: u.qrCodeOverlayContainer,
            children: [
              (0, l.jsx)(x, { ...this.props }),
              (0, l.jsx)("div", {
                className: u.qrCodeOverlay,
                children: (0, l.jsx)("img", {
                  className: u[r],
                  src: b,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      f(h, "defaultProps", {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000",
      }),
        (r.ZP = x);
    },
    978305: function (e, r, t) {
      t.r(r), t(47120);
      var o = t(200651),
        n = t(192379),
        s = t(120356),
        i = t.n(s),
        l = t(512722),
        a = t.n(l),
        c = t(481060),
        d = t(198993),
        C = t(626135),
        u = t(985002),
        f = t(880257),
        m = t(631885),
        b = t(292352),
        x = t(981631),
        h = t(388032),
        g = t(116594),
        p = t(232186);
      r.default = (e) => {
        let { transitionState: r, onClose: t } = e,
          s = (0, f.Z)(),
          [l, v] = n.useState(!1),
          { getLinkCode: _, isGetLinkCodeLoading: j } = (0, u.G)({}),
          N = (0, m.rW)(),
          y = (0, m.gU)(),
          q = n.useRef(y);
        a()(!s, "FamilyCenterQRCodeModal should only be rendered for teens.");
        let z = () => {
          v(
            (e) => (
              C.default.track(x.rMx.FAMILY_CENTER_ACTION, {
                action: l ? b.YC.HideQRCode : b.YC.RevealQRCode,
              }),
              !e
            ),
          ),
            !l &&
              setTimeout(() => {
                t();
              }, b.f2);
        };
        n.useEffect(() => {
          _();
        }, []),
          n.useEffect(() => {
            y > q.current && t();
          }, [q, y, t]);
        let O = l && !j && null != N;
        return (0, o.jsxs)(c.ModalRoot, {
          className: g.modalRoot,
          transitionState: r,
          children: [
            (0, o.jsxs)(c.Notice, {
              className: g.notice,
              color: c.NoticeColors.WARNING,
              children: [
                (0, o.jsx)(c.CircleInformationIcon, {
                  size: "sm",
                  color: "currentColor",
                }),
                h.intl.string(h.t.iHYMAw),
              ],
            }),
            (0, o.jsxs)(c.ModalContent, {
              className: g.content,
              children: [
                (0, o.jsx)(c.Text, {
                  className: p.marginBottom8,
                  variant: "text-lg/bold",
                  color: "header-primary",
                  children: h.intl.string(h.t.AVTZaG),
                }),
                (0, o.jsx)(c.Text, {
                  className: p.marginBottom20,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: h.intl.format(h.t.LyyCsL, {
                    link: "https://support.discord.com/hc/articles/14155060633623",
                  }),
                }),
                (0, o.jsx)("div", {
                  className: g.qrCodeContainer,
                  children: (0, o.jsx)(c.Clickable, {
                    className: i()(g.qrCodeObscure, { [g.visible]: O }),
                    onClick: z,
                    children: (0, o.jsx)(d.c2, {
                      size: 272,
                      text: O ? N : b.vH,
                      overlaySize: d.cK.SIZE_60,
                      className: g.qrCodeOverlay,
                    }),
                  }),
                }),
                (0, o.jsx)(c.Text, {
                  className: g.reminder,
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: h.intl.string(h.t.goDyoa),
                }),
                (0, o.jsxs)("div", {
                  className: i()(g.buttonContainer, p.marginTop20),
                  children: [
                    (0, o.jsx)(c.Button, {
                      className: p.marginBottom8,
                      grow: !0,
                      size: c.Button.Sizes.LARGE,
                      onClick: z,
                      submitting: l && j,
                      children: l
                        ? h.intl.string(h.t.wg2xwc)
                        : h.intl.string(h.t["10dX6e"]),
                    }),
                    (0, o.jsx)(c.Button, {
                      grow: !0,
                      color: c.Button.Colors.PRIMARY,
                      onClick: t,
                      children: h.intl.string(h.t.cpT0Cg),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    982823: function (e, r, t) {
      t.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeOverlayContainer: "qrCodeOverlayContainer_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
    116594: function (e, r, t) {
      e.exports = {
        modalRoot: "modalRoot_c23051",
        content: "content_c23051",
        notice: "notice_c23051",
        buttonContainer: "buttonContainer_c23051",
        qrCodeContainer: "qrCodeContainer_c23051",
        qrCodeObscure: "qrCodeObscure_c23051",
        qrCodeOverlay: "qrCodeOverlay_c23051",
        visible: "visible_c23051",
        reminder: "reminder_c23051",
      };
    },
  },
]);
//# sourceMappingURL=a9800ce55753b31648c8.js.map
