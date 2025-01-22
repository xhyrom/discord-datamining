"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["522"],
  {
    515695: function (e) {
      e.exports = "/assets/450a761db3bfe89ca9b9.png";
    },
    198993: function (e, t, r) {
      r.d(t, {
        c2: function () {
          return b;
        },
        cK: function () {
          return a;
        },
      });
      var n,
        a,
        s,
        c,
        o = r(200651),
        d = r(192379),
        i = r(120356),
        l = r.n(i),
        f = r(841226),
        u = r(982823);
      function m(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      ((n = a || (a = {})).SIZE_40 = "SIZE_40"), (n.SIZE_60 = "SIZE_60");
      let x = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        C = r(515695);
      class h extends (s = d.PureComponent) {
        render() {
          let { className: e, text: t, ...r } = this.props;
          return (0, o.jsx)("div", {
            style: {
              width: r.size,
              height: r.size,
              backgroundColor: r.bgColor,
            },
            className: l()(u.qrCodeContainer, e),
            children: (0, o.jsx)(f.default, { value: t, level: "M", ...r }),
          });
        }
      }
      m(h, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class b extends (c = d.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            t = x[null != e ? e : "SIZE_40"];
          return (0, o.jsxs)("div", {
            className: u.qrCodeOverlayContainer,
            children: [
              (0, o.jsx)(h, { ...this.props }),
              (0, o.jsx)("div", {
                className: u.qrCodeOverlay,
                children: (0, o.jsx)("img", {
                  className: u[t],
                  src: C,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      m(b, "defaultProps", {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000",
      }),
        (t.ZP = h);
    },
    259408: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = r(544891),
        a = r(933557),
        s = r(430824),
        c = r(131951),
        o = r(699516),
        d = r(594174),
        i = r(927923),
        l = r(981631),
        f = r(388032);
      function u(e, t) {
        var r;
        let { nonce: u, forQRCode: m } = t,
          x = e.getGuildId(),
          C = s.Z.getGuild(x),
          h = (0, i.Lc)({
            guildId: null != x ? x : l.aIL,
            channelId: e.id,
            channelName: (0, a.F6)(e, d.default, o.Z),
            guildName:
              null !== (r = null == C ? void 0 : C.name) && void 0 !== r
                ? r
                : f.intl.string(f.t.LJpTRE),
            muted: c.Z.isSelfMute(),
            deafened: c.Z.isSelfDeaf(),
            nonce: u,
          });
        return m
          ? ""
              .concat((0, n.K0)())
              .concat(l.ANM.XBOX_HANDOFF, "?")
              .concat(h.toString())
          : "".concat(i.bJ, "?").concat(h.toString());
      }
    },
    200623: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return N;
          },
        });
      var n = r(200651),
        a = r(192379),
        s = r(442837),
        c = r(481060),
        o = r(198993),
        d = r(639351),
        i = r(63063),
        l = r(258609),
        f = r(259408),
        u = r(893387),
        m = r(927923),
        x = r(981631),
        C = r(388032),
        h = r(327179);
      function b(e) {
        let { step: t, instructions: r } = e;
        return (0, n.jsxs)("div", {
          className: h.cardRow,
          children: [
            (0, n.jsx)("div", {
              className: h.stepNumberContainer,
              children: (0, n.jsx)(c.Text, {
                variant: "text-sm/semibold",
                className: h.stepNumber,
                children: t,
              }),
            }),
            (0, n.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "header-primary",
              className: h.instructions,
              children: r,
            }),
          ],
        });
      }
      function N(e) {
        let { channel: t, transitionState: r, onClose: N } = e,
          p = (0, s.e7)([l.Z], () => null != l.Z.getRemoteSessionId()),
          _ = (0, f.Z)(t, { forQRCode: !0 });
        return (
          a.useEffect(() => {
            p && N();
          }, [p, N]),
          a.useEffect(() => {
            (0, u.Z)(t.id, m.YE.XBOX);
          }, [t.id]),
          (0, n.jsxs)(c.ModalRoot, {
            size: c.ModalSize.DYNAMIC,
            className: h.modalRoot,
            transitionState: r,
            children: [
              (0, n.jsxs)(c.ModalHeader, {
                separator: !1,
                className: h.modalHeaderContainer,
                children: [
                  (0, n.jsx)(c.Heading, {
                    className: h.modalHeader,
                    variant: "heading-xl/extrabold",
                    children: C.intl.string(C.t["f+Aijo"]),
                  }),
                  (0, n.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: C.intl.string(C.t.mYFmDQ),
                  }),
                ],
              }),
              (0, n.jsx)(c.ModalContent, {
                className: h.content,
                children: (0, n.jsxs)("div", {
                  className: h.card,
                  children: [
                    (0, n.jsxs)("div", {
                      className: h.cardText,
                      children: [
                        (0, n.jsxs)(c.Text, {
                          variant: "text-lg/semibold",
                          color: "header-primary",
                          className: h.cardRow,
                          children: [
                            (0, n.jsx)(d.Z, { className: h.cardHeaderIcon }),
                            C.intl.string(C.t.ZNlYbG),
                          ],
                        }),
                        (0, n.jsx)(b, {
                          step: 1,
                          instructions: C.intl.string(C.t.dDtkl5),
                        }),
                        (0, n.jsx)(b, {
                          step: 2,
                          instructions: C.intl.string(C.t.IWuXjI),
                        }),
                        (0, n.jsx)(c.Text, {
                          variant: "text-sm/medium",
                          children: (0, n.jsx)(c.Anchor, {
                            className: h.learnMore,
                            href: i.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
                            children: C.intl.string(C.t.hvVgAQ),
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)(o.ZP, {
                      className: h.qrCode,
                      size: 120,
                      text: _,
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(c.ModalCloseButton, {
                className: h.closeButton,
                onClick: N,
              }),
            ],
          })
        );
      }
    },
    982823: function (e, t, r) {
      r.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeOverlayContainer: "qrCodeOverlayContainer_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
    327179: function (e, t, r) {
      e.exports = {
        modalRoot: "modalRoot_cffc8d",
        modalHeaderContainer: "modalHeaderContainer_cffc8d",
        modalHeader: "modalHeader_cffc8d",
        content: "content_cffc8d",
        card: "card_cffc8d",
        cardText: "cardText_cffc8d",
        cardRow: "cardRow_cffc8d",
        cardHeaderIcon: "cardHeaderIcon_cffc8d",
        qrCode: "qrCode_cffc8d",
        closeButton: "closeButton_cffc8d",
        learnMore: "learnMore_cffc8d",
        stepNumberContainer: "stepNumberContainer_cffc8d",
        stepNumber: "stepNumber_cffc8d",
        instructions: "instructions_cffc8d",
      };
    },
  },
]);
//# sourceMappingURL=cc893c9b4e179b77a401.js.map
