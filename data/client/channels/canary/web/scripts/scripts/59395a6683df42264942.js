"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72323"],
  {
    98165: function (t) {
      t.exports = "/assets/0cb07fe2fdd334781860.svg";
    },
    940165: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(120356),
        a = e.n(o),
        r = e(793030),
        c = e(481060),
        s = e(759198),
        l = e(552958),
        p = e(767157),
        C = e(388032),
        d = e(36042);
      function u(t) {
        let {
            label: n,
            className: e,
            description: o,
            soundpack: u,
            location: _,
          } = t,
          { playSound: f, isPlaying: I } = (0, l.Z)();
        return (0, i.jsxs)(c.Clickable, {
          "aria-label": C.intl.string(C.t.RscU7O),
          className: a()(d.container, e, { [d.containerActive]: I }),
          onClick: () => {
            (0, p.Z)(u, _), f(u);
          },
          children: [
            (0, i.jsx)(c.CirclePlayIcon, {
              className: d.playButton,
              color: I
                ? c.tokens.colors.INTERACTIVE_ACTIVE
                : c.tokens.colors.INTERACTIVE_NORMAL,
            }),
            (0, i.jsxs)("div", {
              className: d.textContainer,
              children: [
                (0, i.jsx)(s.Z, { variant: "text-md/medium", children: n }),
                (0, i.jsx)(r.xv, { variant: "text-sm/normal", children: o }),
              ],
            }),
          ],
        });
      }
    },
    933006: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return S;
          },
        }),
        e(47120);
      var i = e(200651),
        o = e(192379),
        a = e(481060),
        r = e(230711),
        c = e(2052),
        s = e(906732),
        l = e(174609),
        p = e(626135),
        C = e(790527),
        d = e(940165),
        u = e(474936),
        _ = e(981631),
        f = e(871465),
        I = e(388032),
        x = e(780723);
      function S(t) {
        let { onClose: n, ...S } = t,
          m = (0, c.O)(),
          { analyticsLocations: N } = (0, s.ZP)(),
          [U, E] = o.useState(!1);
        o.useEffect(() => {
          if (!U)
            p.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
              type: u.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
              location: m.location,
              location_stack: N,
            }),
              E(!0);
        }, [m.location, N, U]);
        let h = (0, f.LB)(!1);
        return (0, i.jsx)(C.Z, {
          type: u.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
          artContainerClassName: x.image,
          artURL: e(98165),
          title: I.intl.string(I.t.c0X1Cw),
          glowUp: I.intl.string(I.t.c0X1Cw),
          body: I.intl.string(I.t.SX63mJ),
          showEnhancedUpsell: !0,
          analyticsLocation: {
            section: _.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL,
          },
          enableArtBoxShadow: !1,
          onSubscribeClick: l.Z,
          secondaryCTA: I.intl.string(I.t.PcTCBw),
          onSecondaryClick: () => {
            n(), r.Z.open(_.oAB.PREMIUM);
          },
          onClose: n,
          ...S,
          children: (0, i.jsx)(a.FormItem, {
            title: I.intl.string(I.t["K/hjQU"]),
            className: x.optionsContainerWrapper,
            children: (0, i.jsx)("div", {
              className: x.optionsContainer,
              children: h.map((t, n) => {
                let e = t.value;
                return e === f.YC.CLASSIC
                  ? null
                  : (0, i.jsx)(
                      d.Z,
                      {
                        label: t.label,
                        soundpack: e,
                        description: t.description,
                        location: "upsellModal",
                      },
                      n,
                    );
              }),
            }),
          }),
        });
      }
    },
    36042: function (t, n, e) {
      t.exports = {
        container: "container_ff235c",
        containerActive: "containerActive_ff235c",
        playButton: "playButton_ff235c",
        textContainer: "textContainer_ff235c",
      };
    },
    780723: function (t, n, e) {
      t.exports = {
        image: "image_a03b93",
        optionsContainerWrapper: "optionsContainerWrapper_a03b93",
        optionsContainer: "optionsContainer_a03b93",
      };
    },
  },
]);
//# sourceMappingURL=59395a6683df42264942.js.map
