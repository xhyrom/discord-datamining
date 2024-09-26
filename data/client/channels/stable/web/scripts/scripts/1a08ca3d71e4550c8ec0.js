"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72323"],
  {
    98165: function (e) {
      e.exports = "/assets/0cb07fe2fdd334781860.svg";
    },
    940165: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var a = t(735250);
      t(470079);
      var o = t(120356),
        s = t.n(o),
        i = t(793030),
        c = t(481060),
        r = t(759198),
        l = t(552958),
        _ = t(767157),
        C = t(689938),
        O = t(618900);
      function I(e) {
        let {
            label: n,
            className: t,
            description: o,
            soundpack: I,
            location: p,
          } = e,
          { playSound: M, isPlaying: T } = (0, l.Z)();
        return (0, a.jsxs)(c.Clickable, {
          "aria-label": C.Z.Messages.PLAY,
          className: s()(O.container, t, { [O.containerActive]: T }),
          onClick: () => {
            (0, _.Z)(I, p), M(I);
          },
          children: [
            (0, a.jsx)(c.CirclePlayIcon, {
              className: O.playButton,
              color: T
                ? c.tokens.colors.INTERACTIVE_ACTIVE
                : c.tokens.colors.INTERACTIVE_NORMAL,
            }),
            (0, a.jsxs)("div", {
              className: O.textContainer,
              children: [
                (0, a.jsx)(r.Z, { variant: "text-md/medium", children: n }),
                (0, a.jsx)(i.xv, { variant: "text-sm/normal", children: o }),
              ],
            }),
          ],
        });
      }
    },
    933006: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return N;
          },
        }),
        t(47120);
      var a = t(735250),
        o = t(470079),
        s = t(481060),
        i = t(230711),
        c = t(2052),
        r = t(906732),
        l = t(174609),
        _ = t(626135),
        C = t(790527),
        O = t(940165),
        I = t(474936),
        p = t(981631),
        M = t(871465),
        T = t(689938),
        d = t(194213);
      function N(e) {
        let { onClose: n, ...N } = e,
          u = (0, c.O)(),
          { analyticsLocations: U } = (0, r.ZP)(),
          [S, A] = o.useState(!1);
        o.useEffect(() => {
          if (!S)
            _.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
              type: I.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
              location: u.location,
              location_stack: U,
            }),
              A(!0);
        }, [u.location, U, S]);
        let E = (0, M.LB)(!1);
        return (0, a.jsx)(C.Z, {
          type: I.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
          artContainerClassName: d.image,
          artURL: t(98165),
          title: T.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_TITLE,
          glowUp:
            T.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_TITLE,
          body: T.Z.Messages
            .PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_DESCRIPTION,
          showEnhancedUpsell: !0,
          analyticsLocation: {
            section: p.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL,
          },
          enableArtBoxShadow: !1,
          onSubscribeClick: l.Z,
          secondaryCTA: T.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
          onSecondaryClick: () => {
            n(), i.Z.open(p.oAB.PREMIUM);
          },
          onClose: n,
          ...N,
          children: (0, a.jsx)(s.FormItem, {
            title:
              T.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_LABEL,
            className: d.optionsContainerWrapper,
            children: (0, a.jsx)("div", {
              className: d.optionsContainer,
              children: E.map((e, n) => {
                let t = e.value;
                return t === M.YC.CLASSIC
                  ? null
                  : (0, a.jsx)(
                      O.Z,
                      {
                        label: e.label,
                        soundpack: t,
                        description: e.description,
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
    618900: function (e, n, t) {
      e.exports = {
        container: "container_ff235c",
        containerActive: "containerActive_ff235c",
        playButton: "playButton_ff235c",
        textContainer: "textContainer_ff235c",
      };
    },
    194213: function (e, n, t) {
      e.exports = {
        image: "image_a03b93",
        optionsContainerWrapper: "optionsContainerWrapper_a03b93",
        optionsContainer: "optionsContainer_a03b93",
      };
    },
  },
]);
//# sourceMappingURL=1a08ca3d71e4550c8ec0.js.map
