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
          return h;
        },
        cK: function () {
          return a;
        },
      });
      var n,
        a,
        s,
        c,
        d = r(200651),
        o = r(192379),
        i = r(38189),
        l = r(458221);
      function f(e, t, r) {
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
      let u = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        m = r(515695);
      class x extends (s = o.PureComponent) {
        render() {
          let { className: e, text: t, ...r } = this.props;
          return (0, d.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: r.size,
              height: r.size,
              backgroundColor: r.bgColor,
            },
            className: e,
            children: (0, d.jsx)(i.default, { value: t, level: "M", ...r }),
          });
        }
      }
      f(x, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class h extends (c = o.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            t = u[null != e ? e : "SIZE_40"];
          return (0, d.jsxs)("div", {
            className: l.qrCodeContainer,
            children: [
              (0, d.jsx)(x, { ...this.props }),
              (0, d.jsx)("div", {
                className: l.qrCodeOverlay,
                children: (0, d.jsx)("img", {
                  className: l[t],
                  src: m,
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
        (t.ZP = x);
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
        d = r(699516),
        o = r(594174),
        i = r(927923),
        l = r(981631),
        f = r(388032);
      function u(e, t) {
        var r;
        let { nonce: u, forQRCode: m } = t,
          x = e.getGuildId(),
          h = s.Z.getGuild(x),
          p = (0, i.Lc)({
            guildId: null != x ? x : l.aIL,
            channelId: e.id,
            channelName: (0, a.F6)(e, o.default, d.Z),
            guildName:
              null !== (r = null == h ? void 0 : h.name) && void 0 !== r
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
              .concat(p.toString())
          : "".concat(i.bJ, "?").concat(p.toString());
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
        d = r(198993),
        o = r(639351),
        i = r(63063),
        l = r(258609),
        f = r(259408),
        u = r(893387),
        m = r(927923),
        x = r(981631),
        h = r(388032),
        p = r(47772);
      function C(e) {
        let { step: t, instructions: r } = e;
        return (0, n.jsxs)("div", {
          className: p.cardRow,
          children: [
            (0, n.jsx)("div", {
              className: p.stepNumberContainer,
              children: (0, n.jsx)(c.Text, {
                variant: "text-sm/semibold",
                className: p.stepNumber,
                children: t,
              }),
            }),
            (0, n.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "header-primary",
              className: p.instructions,
              children: r,
            }),
          ],
        });
      }
      function N(e) {
        let { channel: t, transitionState: r, onClose: N } = e,
          b = (0, s.e7)([l.Z], () => null != l.Z.getRemoteSessionId()),
          g = (0, f.Z)(t, { forQRCode: !0 });
        return (
          a.useEffect(() => {
            b && N();
          }, [b, N]),
          a.useEffect(() => {
            (0, u.Z)(t.id, m.YE.XBOX);
          }, [t.id]),
          (0, n.jsxs)(c.ModalRoot, {
            size: c.ModalSize.DYNAMIC,
            className: p.modalRoot,
            transitionState: r,
            children: [
              (0, n.jsxs)(c.ModalHeader, {
                separator: !1,
                className: p.modalHeaderContainer,
                children: [
                  (0, n.jsx)(c.Heading, {
                    className: p.modalHeader,
                    variant: "heading-xl/extrabold",
                    children: h.intl.string(h.t["f+Aijo"]),
                  }),
                  (0, n.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: h.intl.string(h.t.mYFmDQ),
                  }),
                ],
              }),
              (0, n.jsx)(c.ModalContent, {
                className: p.content,
                children: (0, n.jsxs)("div", {
                  className: p.card,
                  children: [
                    (0, n.jsxs)("div", {
                      className: p.cardText,
                      children: [
                        (0, n.jsxs)(c.Text, {
                          variant: "text-lg/semibold",
                          color: "header-primary",
                          className: p.cardRow,
                          children: [
                            (0, n.jsx)(o.Z, { className: p.cardHeaderIcon }),
                            h.intl.string(h.t.ZNlYbG),
                          ],
                        }),
                        (0, n.jsx)(C, {
                          step: 1,
                          instructions: h.intl.string(h.t.dDtkl5),
                        }),
                        (0, n.jsx)(C, {
                          step: 2,
                          instructions: h.intl.string(h.t.IWuXjI),
                        }),
                        (0, n.jsx)(c.Text, {
                          variant: "text-sm/medium",
                          children: (0, n.jsx)(c.Anchor, {
                            className: p.learnMore,
                            href: i.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
                            children: h.intl.string(h.t.hvVgAQ),
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)(d.ZP, {
                      className: p.qrCode,
                      size: 120,
                      text: g,
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(c.ModalCloseButton, {
                className: p.closeButton,
                onClick: N,
              }),
            ],
          })
        );
      }
    },
    458221: function (e, t, r) {
      r.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
    47772: function (e, t, r) {
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
//# sourceMappingURL=649e8bbddef2bbc07a95.js.map
