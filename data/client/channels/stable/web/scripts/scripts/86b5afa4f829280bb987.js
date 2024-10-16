"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39473"],
  {
    99713: function (e) {
      e.exports = "/assets/19030c98f81270503f7a.png";
    },
    120619: function (e, a, s) {
      s(47120);
      var n,
        t,
        r,
        d,
        i = s(442837),
        l = s(570140);
      let c = new Map(),
        o = new Set(),
        _ = new Set();
      class h extends (n = i.ZP.Store) {
        getPrice(e) {
          return c.get(e);
        }
        getFetching(e) {
          return o.has(e);
        }
        getErrored(e) {
          return _.has(e);
        }
      }
      (d = "ConsumablesStore"),
        (r = "displayName") in (t = h)
          ? Object.defineProperty(t, r, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[r] = d),
        (a.Z = new h(l.Z, {
          CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            o.add(e.skuId);
          },
          CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            c.set(e.skuId, e.price), o.delete(e.skuId);
          },
          CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            o.delete(e.skuId), _.add(e.skuId);
          },
          CONSUMABLES_CLEAR_ERROR: (e) => {
            _.delete(e.skuId);
          },
        }));
    },
    447564: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return N;
          },
        });
      var n = s(735250),
        t = s(470079),
        r = s(442837),
        d = s(481060),
        i = s(335131),
        l = s(120619),
        c = s(690221),
        o = s(422034),
        _ = s(938475),
        h = s(937615),
        E = s(215023),
        m = s(689938),
        x = s(912568),
        M = s(99713);
      function N(e) {
        let { transitionState: a, channel: s } = e;
        return (0, n.jsx)(d.ModalRoot, {
          size: d.ModalSize.DYNAMIC,
          transitionState: a,
          children: (0, n.jsx)(b, { channel: s }),
        });
      }
      function b(e) {
        let { channel: a } = e,
          s = _.ZP.getVoiceStatesForChannel(a).slice(0, 6),
          N = (0, r.e7)([l.Z], () => l.Z.getFetching(E.FX)),
          b = (0, r.e7)([l.Z], () => l.Z.getPrice(E.FX)),
          S = (0, r.e7)([l.Z], () => l.Z.getErrored(E.FX));
        t.useEffect(
          () => () => {
            (0, i.SN)(E.FX);
          },
          [],
        ),
          t.useEffect(() => {
            !N && null == b && !S && (0, i.Gq)(E.FX);
          }, [N, b, S]);
        let u = s.map((e, a) => {
          let { user: t } = e;
          return (0, n.jsx)(
            o.O,
            {
              affinity: t,
              applyMask: a !== s.length - 1,
              size: d.AvatarSizes.SIZE_20,
            },
            t.id,
          );
        });
        return S
          ? (0, n.jsx)("div", {
              className: x.anomaly,
              children: (0, n.jsxs)("div", {
                className: x.error,
                children: [
                  (0, n.jsx)(d.Image, { src: M, width: 178, height: 190 }),
                  (0, n.jsx)(d.Text, {
                    variant: "text-md/normal",
                    children:
                      m.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_ERROR_MESSAGE,
                  }),
                ],
              }),
            })
          : null == b
            ? (0, n.jsx)("div", {
                className: x.anomaly,
                children: (0, n.jsx)("div", {
                  className: x.spinner,
                  children: (0, n.jsx)(d.Spinner, {}),
                }),
              })
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("div", {
                    className: x.modal,
                    children: [
                      (0, n.jsx)("img", {
                        className: x.image,
                        src: "https://cdn.discordapp.com/assets/content/5e2cb8d8137c2e5caecabaa7659295c2d443086ae7141bdc9e35a4825b47bdd7.png",
                        alt: m.Z.Messages
                          .CONSUMABLE_HD_STREAMING_MODAL_IMAGE_ALT,
                      }),
                      (0, n.jsxs)("div", {
                        className: x.body,
                        children: [
                          (0, n.jsx)(d.Heading, {
                            variant: "heading-lg/bold",
                            children:
                              m.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_TITLE,
                          }),
                          (0, n.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            children:
                              m.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_DESCR,
                          }),
                          (0, n.jsx)(c.Z, {
                            onClick: () => {},
                            children: (0, n.jsx)(d.Text, {
                              color: "text-link",
                              variant: "text-xs/medium",
                              children:
                                m.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_LINK,
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", { className: x.divider }),
                      (0, n.jsxs)("div", {
                        className: x.applyingTo,
                        children: [
                          (0, n.jsx)(d.Text, {
                            variant: "eyebrow",
                            children:
                              m.Z.Messages.CONSUMABLE_HD_STREAMING_APPLYING_TO,
                          }),
                          (0, n.jsxs)("div", {
                            className: x.channel,
                            children: [
                              (0, n.jsxs)("div", {
                                className: x.channelLeft,
                                children: [
                                  (0, n.jsx)(d.VoiceNormalIcon, {}),
                                  (0, n.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: a.name,
                                  }),
                                ],
                              }),
                              (0, n.jsx)("div", {
                                className: x.avatars,
                                children: u,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: x.footer,
                    children: [
                      (0, n.jsx)(d.Button, {
                        color: d.Button.Colors.PRIMARY,
                        children:
                          m.Z.Messages
                            .CONSUMABLE_HD_STREAMING_MODAL_CANCEL_BUTTON_COPY,
                      }),
                      (0, n.jsx)(d.Button, {
                        children:
                          m.Z.Messages.CONSUMABLE_HD_STREAMING_MODAL_BUY_BUTTON_COPY.format(
                            { price: (0, h.T4)(b.amount, b.currency) },
                          ),
                      }),
                    ],
                  }),
                ],
              });
      }
    },
    912568: function (e, a, s) {
      e.exports = {
        modal: "modal_beafbd",
        divider: "divider_beafbd",
        channel: "channel_beafbd",
        image: "image_beafbd",
        body: "body_beafbd",
        applyingTo: "applyingTo_beafbd",
        channelLeft: "channelLeft_beafbd",
        footer: "footer_beafbd",
        anomaly: "anomaly_beafbd",
        error: "error_beafbd",
        spinner: "spinner_beafbd",
        avatars: "avatars_beafbd",
      };
    },
  },
]);
//# sourceMappingURL=86b5afa4f829280bb987.js.map
