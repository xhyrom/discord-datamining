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
        C = t(841226),
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
        d = t(493773),
        C = t(198993),
        u = t(626135),
        f = t(985002),
        m = t(880257),
        b = t(631885),
        x = t(292352),
        h = t(981631),
        g = t(388032),
        p = t(116594),
        v = t(232186);
      r.default = (e) => {
        let { transitionState: r, onClose: t } = e,
          s = (0, m.Z)(),
          [l, _] = n.useState(!1),
          { getLinkCode: j, isGetLinkCodeLoading: N } = (0, f.G)({}),
          y = (0, b.rW)(),
          q = (0, b.gU)(),
          z = n.useRef(q);
        a()(!s, "FamilyCenterQRCodeModal should only be rendered for teens.");
        let O = () => {
          _(
            (e) => (
              u.default.track(h.rMx.FAMILY_CENTER_ACTION, {
                action: l ? x.YC.HideQRCode : x.YC.RevealQRCode,
              }),
              !e
            ),
          ),
            !l &&
              setTimeout(() => {
                t();
              }, x.f2);
        };
        (0, d.Z)(() => {
          j();
        }),
          n.useEffect(() => {
            q > z.current && t();
          }, [z, q, t]);
        let I = l && !N && null != y;
        return (0, o.jsxs)(c.ModalRoot, {
          className: p.modalRoot,
          transitionState: r,
          children: [
            (0, o.jsxs)(c.Notice, {
              className: p.notice,
              color: c.NoticeColors.WARNING,
              children: [
                (0, o.jsx)(c.CircleInformationIcon, {
                  size: "sm",
                  color: "currentColor",
                }),
                g.intl.string(g.t.iHYMAw),
              ],
            }),
            (0, o.jsxs)(c.ModalContent, {
              className: p.content,
              children: [
                (0, o.jsx)(c.Text, {
                  className: v.marginBottom8,
                  variant: "text-lg/bold",
                  color: "header-primary",
                  children: g.intl.string(g.t.AVTZaG),
                }),
                (0, o.jsx)(c.Text, {
                  className: v.marginBottom20,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: g.intl.format(g.t.LyyCsL, {
                    link: "https://support.discord.com/hc/articles/14155060633623",
                  }),
                }),
                (0, o.jsx)("div", {
                  className: p.qrCodeContainer,
                  children: (0, o.jsx)(c.Clickable, {
                    className: i()(p.qrCodeObscure, { [p.visible]: I }),
                    onClick: O,
                    children: (0, o.jsx)(C.c2, {
                      size: 272,
                      text: I ? y : x.vH,
                      overlaySize: C.cK.SIZE_60,
                      className: p.qrCodeOverlay,
                    }),
                  }),
                }),
                (0, o.jsx)(c.Text, {
                  className: p.reminder,
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: g.intl.string(g.t.goDyoa),
                }),
                (0, o.jsxs)("div", {
                  className: i()(p.buttonContainer, v.marginTop20),
                  children: [
                    (0, o.jsx)(c.Button, {
                      className: v.marginBottom8,
                      grow: !0,
                      size: c.Button.Sizes.LARGE,
                      onClick: O,
                      submitting: l && N,
                      children: l
                        ? g.intl.string(g.t.wg2xwc)
                        : g.intl.string(g.t["10dX6e"]),
                    }),
                    (0, o.jsx)(c.Button, {
                      grow: !0,
                      color: c.Button.Colors.PRIMARY,
                      onClick: t,
                      children: g.intl.string(g.t.cpT0Cg),
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
//# sourceMappingURL=658332342fb8c7912ddc.js.map
