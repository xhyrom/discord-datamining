"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["522"],
  {
    515695: function (e) {
      e.exports = "/assets/450a761db3bfe89ca9b9.png";
    },
    198993: function (e, s, r) {
      r.d(s, {
        c2: function () {
          return _;
        },
        cK: function () {
          return t;
        },
      });
      var a,
        t,
        n,
        c,
        d = r(735250),
        o = r(470079),
        i = r(789877),
        l = r(458221);
      function f(e, s, r) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = r),
          e
        );
      }
      ((a = t || (t = {})).SIZE_40 = "SIZE_40"), (a.SIZE_60 = "SIZE_60");
      let u = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        m = r(515695);
      class x extends (n = o.PureComponent) {
        render() {
          let { className: e, text: s, ...r } = this.props;
          return (0, d.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: r.size,
              height: r.size,
              backgroundColor: r.bgColor,
            },
            className: e,
            children: (0, d.jsx)(i.default, { value: s, level: "M", ...r }),
          });
        }
      }
      f(x, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class _ extends (c = o.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            s = u[null != e ? e : "SIZE_40"];
          return (0, d.jsxs)("div", {
            className: l.qrCodeContainer,
            children: [
              (0, d.jsx)(x, { ...this.props }),
              (0, d.jsx)("div", {
                className: l.qrCodeOverlay,
                children: (0, d.jsx)("img", {
                  className: l[s],
                  src: m,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      f(_, "defaultProps", {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000",
      }),
        (s.ZP = x);
    },
    259408: function (e, s, r) {
      r.d(s, {
        Z: function () {
          return u;
        },
      });
      var a = r(544891),
        t = r(933557),
        n = r(430824),
        c = r(131951),
        d = r(699516),
        o = r(594174),
        i = r(927923),
        l = r(981631),
        f = r(689938);
      function u(e, s) {
        var r;
        let { nonce: u, forQRCode: m } = s,
          x = e.getGuildId(),
          _ = n.Z.getGuild(x),
          N = (0, i.Lc)({
            guildId: null != x ? x : l.aIL,
            channelId: e.id,
            channelName: (0, t.F6)(e, o.default, d.Z),
            guildName:
              null !== (r = null == _ ? void 0 : _.name) && void 0 !== r
                ? r
                : f.Z.Messages.UNNAMED,
            muted: c.Z.isSelfMute(),
            deafened: c.Z.isSelfDeaf(),
            nonce: u,
          });
        return m
          ? ""
              .concat((0, a.K0)())
              .concat(l.ANM.XBOX_HANDOFF, "?")
              .concat(N.toString())
          : "".concat(i.bJ, "?").concat(N.toString());
      }
    },
    200623: function (e, s, r) {
      r.r(s),
        r.d(s, {
          default: function () {
            return C;
          },
        });
      var a = r(735250),
        t = r(470079),
        n = r(442837),
        c = r(481060),
        d = r(198993),
        o = r(639351),
        i = r(63063),
        l = r(258609),
        f = r(259408),
        u = r(893387),
        m = r(927923),
        x = r(981631),
        _ = r(689938),
        N = r(47772);
      function h(e) {
        let { step: s, instructions: r } = e;
        return (0, a.jsxs)("div", {
          className: N.cardRow,
          children: [
            (0, a.jsx)("div", {
              className: N.stepNumberContainer,
              children: (0, a.jsx)(c.Text, {
                variant: "text-sm/semibold",
                className: N.stepNumber,
                children: s,
              }),
            }),
            (0, a.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "header-primary",
              className: N.instructions,
              children: r,
            }),
          ],
        });
      }
      function C(e) {
        let { channel: s, transitionState: r, onClose: C } = e,
          p = (0, n.e7)([l.Z], () => null != l.Z.getRemoteSessionId()),
          b = (0, f.Z)(s, { forQRCode: !0 });
        return (
          t.useEffect(() => {
            p && C();
          }, [p, C]),
          t.useEffect(() => {
            (0, u.Z)(s.id, m.YE.XBOX);
          }, [s.id]),
          (0, a.jsxs)(c.ModalRoot, {
            size: c.ModalSize.DYNAMIC,
            className: N.modalRoot,
            transitionState: r,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: N.modalHeaderContainer,
                children: [
                  (0, a.jsx)(c.Heading, {
                    className: N.modalHeader,
                    variant: "heading-xl/extrabold",
                    children: _.Z.Messages.TRANSFER_VOICE_TO_XBOX,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: _.Z.Messages.XBOX_APP_REQUIRED_SUBHEADER,
                  }),
                ],
              }),
              (0, a.jsx)(c.ModalContent, {
                className: N.content,
                children: (0, a.jsxs)("div", {
                  className: N.card,
                  children: [
                    (0, a.jsxs)("div", {
                      className: N.cardText,
                      children: [
                        (0, a.jsxs)(c.Text, {
                          variant: "text-lg/semibold",
                          color: "header-primary",
                          className: N.cardRow,
                          children: [
                            (0, a.jsx)(o.Z, { className: N.cardHeaderIcon }),
                            _.Z.Messages.XBOX_APP_FOR_MOBILE,
                          ],
                        }),
                        (0, a.jsx)(h, {
                          step: 1,
                          instructions: _.Z.Messages.XBOX_APP_STEP_ONE,
                        }),
                        (0, a.jsx)(h, {
                          step: 2,
                          instructions: _.Z.Messages.XBOX_APP_STEP_TWO,
                        }),
                        (0, a.jsx)(c.Text, {
                          variant: "text-sm/medium",
                          children: (0, a.jsx)(c.Anchor, {
                            className: N.learnMore,
                            href: i.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
                            children: _.Z.Messages.LEARN_MORE,
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)(d.ZP, {
                      className: N.qrCode,
                      size: 120,
                      text: b,
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(c.ModalCloseButton, {
                className: N.closeButton,
                onClick: C,
              }),
            ],
          })
        );
      }
    },
    458221: function (e, s, r) {
      r.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
    47772: function (e, s, r) {
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
//# sourceMappingURL=d4924dde0a2168a7411a.js.map
