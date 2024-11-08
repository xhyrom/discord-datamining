"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90688"],
  {
    515695: function (e) {
      e.exports = "/assets/450a761db3bfe89ca9b9.png";
    },
    198993: function (e, t, o) {
      o.d(t, {
        c2: function () {
          return b;
        },
        cK: function () {
          return n;
        },
      });
      var r,
        n,
        s,
        i,
        c = o(200651),
        l = o(192379),
        a = o(38189),
        d = o(146456);
      function u(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      ((r = n || (n = {})).SIZE_40 = "SIZE_40"), (r.SIZE_60 = "SIZE_60");
      let f = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        C = o(515695);
      class m extends (s = l.PureComponent) {
        render() {
          let { className: e, text: t, ...o } = this.props;
          return (0, c.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: o.size,
              height: o.size,
              backgroundColor: o.bgColor,
            },
            className: e,
            children: (0, c.jsx)(a.default, { value: t, level: "M", ...o }),
          });
        }
      }
      u(m, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class b extends (i = l.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            t = f[null != e ? e : "SIZE_40"];
          return (0, c.jsxs)("div", {
            className: d.qrCodeContainer,
            children: [
              (0, c.jsx)(m, { ...this.props }),
              (0, c.jsx)("div", {
                className: d.qrCodeOverlay,
                children: (0, c.jsx)("img", {
                  className: d[t],
                  src: C,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      u(b, "defaultProps", {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000",
      }),
        (t.ZP = m);
    },
    978305: function (e, t, o) {
      o.r(t), o(47120);
      var r = o(200651),
        n = o(192379),
        s = o(120356),
        i = o.n(s),
        c = o(512722),
        l = o.n(c),
        a = o(481060),
        d = o(198993),
        u = o(626135),
        f = o(985002),
        C = o(880257),
        m = o(631885),
        b = o(292352),
        x = o(981631),
        h = o(388032),
        g = o(182466),
        p = o(971436);
      t.default = (e) => {
        let { transitionState: t, onClose: o } = e,
          s = (0, C.Z)(),
          [c, _] = n.useState(!1),
          { getLinkCode: v, isGetLinkCodeLoading: j } = (0, f.G)({}),
          N = (0, m.rW)(),
          I = (0, m.gU)(),
          z = n.useRef(I);
        l()(!s, "FamilyCenterQRCodeModal should only be rendered for teens.");
        let R = () => {
          _(
            (e) => (
              u.default.track(x.rMx.FAMILY_CENTER_ACTION, {
                action: c ? b.YC.HideQRCode : b.YC.RevealQRCode,
              }),
              !e
            ),
          ),
            !c &&
              setTimeout(() => {
                o();
              }, b.f2);
        };
        n.useEffect(() => {
          v();
        }, []),
          n.useEffect(() => {
            I > z.current && o();
          }, [z, I, o]);
        let y = c && !j && null != N;
        return (0, r.jsxs)(a.ModalRoot, {
          className: g.modalRoot,
          transitionState: t,
          children: [
            (0, r.jsxs)(a.Notice, {
              className: g.notice,
              color: a.NoticeColors.WARNING,
              children: [
                (0, r.jsx)(a.CircleInformationIcon, {
                  size: "sm",
                  color: "currentColor",
                  className: g.infoIcon,
                }),
                h.intl.string(h.t.iHYMAw),
              ],
            }),
            (0, r.jsxs)(a.ModalContent, {
              className: g.content,
              children: [
                (0, r.jsx)(a.Text, {
                  className: p.marginBottom8,
                  variant: "text-lg/bold",
                  color: "header-primary",
                  children: h.intl.string(h.t.AVTZaG),
                }),
                (0, r.jsx)(a.Text, {
                  className: p.marginBottom20,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: h.intl.format(h.t.LyyCsL, {
                    link: "https://support.discord.com/hc/articles/14155060633623",
                  }),
                }),
                (0, r.jsx)("div", {
                  className: g.qrCode,
                  children: (0, r.jsx)(a.Clickable, {
                    className: i()(g.qrCodeObscure, { [g.visible]: y }),
                    onClick: R,
                    children: (0, r.jsx)(d.c2, {
                      size: 272,
                      text: y ? N : b.vH,
                      overlaySize: d.cK.SIZE_60,
                    }),
                  }),
                }),
                (0, r.jsx)(a.Text, {
                  className: g.reminder,
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: h.intl.string(h.t.goDyoa),
                }),
                (0, r.jsxs)("div", {
                  className: i()(g.buttonContainer, p.marginTop20),
                  children: [
                    (0, r.jsx)(a.Button, {
                      className: p.marginBottom8,
                      grow: !0,
                      size: a.Button.Sizes.LARGE,
                      onClick: R,
                      submitting: c && j,
                      children: c
                        ? h.intl.string(h.t.wg2xwc)
                        : h.intl.string(h.t["10dX6e"]),
                    }),
                    (0, r.jsx)(a.Button, {
                      grow: !0,
                      color: a.Button.Colors.PRIMARY,
                      onClick: o,
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
    146456: function (e, t, o) {
      o.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
    182466: function (e, t, o) {
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
//# sourceMappingURL=44765a6e22ec78ac1668.js.map
