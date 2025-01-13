"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52657"],
  {
    852860: function (e, n, t) {
      t(47120);
      var s = t(200651),
        o = t(192379),
        i = t(208404),
        l = t(692547),
        r = t(481060),
        a = t(585483),
        c = t(981631),
        u = t(388032),
        d = t(840814);
      n.Z = function (e) {
        var n;
        let {
            message: t,
            errorMessage: g,
            submitting: h,
            onReset: x,
            onSave: C,
            onSaveText: f,
            onResetText: E,
            onSaveButtonColor: T,
            disabled: k,
            saveButtonTooltip: m,
          } = e,
          S = o.useRef(null),
          [{ spring: b }, p] = (0, r.useSpring)(() => ({ spring: 0 }));
        o.useEffect(() => {
          function e() {
            p({ spring: 1, config: i.config.gentle }),
              p({ spring: 0, config: i.config.gentle, delay: 1e3 });
          }
          return (
            a.S.subscribe(c.CkL.EMPHASIZE_NOTICE, e),
            () => {
              a.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, e);
            }
          );
        }, [p]);
        let j = b.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(l.Z.colors.TEXT_NORMAL).hex(),
              (0, r.useToken)(l.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          N = b.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(l.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, r.useToken)(l.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          _ = b.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(l.Z.colors.TEXT_DANGER).hex(),
              (0, r.useToken)(l.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, s.jsx)(i.animated.div, {
          className: d.container,
          style: { backgroundColor: N },
          children: (0, s.jsx)("div", {
            className: d.flexContainer,
            ref: S,
            children: (0, s.jsxs)(r.FocusRingScope, {
              containerRef: S,
              children: [
                (0, s.jsx)("div", {
                  className: d.shrinkingContainer,
                  children: (0, s.jsx)(i.animated.div, {
                    className: d.message,
                    style: { color: null != g ? _ : j },
                    children:
                      null !== (n = null != g ? g : t) && void 0 !== n
                        ? n
                        : u.intl.string(u.t.GP7JLC),
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: d.actions,
                  children: [
                    null != x &&
                      (0, s.jsx)(r.Button, {
                        className: d.resetButton,
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        onClick: x,
                        children: (0, s.jsx)(i.animated.span, {
                          style: { color: j },
                          children: null != E ? E : u.intl.string(u.t.yBZMsb),
                        }),
                      }),
                    null != C
                      ? (0, s.jsx)(r.Tooltip, {
                          text: m,
                          children: (e) =>
                            (0, s.jsx)(r.Button, {
                              size: r.Button.Sizes.SMALL,
                              color: null != T ? T : r.Button.Colors.GREEN,
                              submitting: h,
                              disabled: k,
                              onClick: C,
                              ...e,
                              children:
                                null != f ? f : u.intl.string(u.t.K344S0),
                            }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    645264: function (e, n, t) {
      t.r(n);
      var s = t(200651),
        o = t(192379),
        i = t(442837),
        l = t(215569),
        r = t(481060),
        a = t(852860),
        c = t(313201),
        u = t(944163),
        d = t(266395),
        g = t(200305),
        h = t(592286),
        x = t(388032),
        C = t(832311);
      let f = () =>
        (0, s.jsx)(a.Z, {
          submitting: !1,
          message: x.intl.string(x.t["8g514e"]),
          onReset: () => {
            (0, d.PE)(!1);
          },
          onResetText: x.intl.string(x.t["ETE/oK"]),
          onSave: () => {
            (0, d.PE)(!1), (0, r.closeModal)(h.Pn);
          },
          onSaveText: x.intl.string(x.t["Xt+UaW"]),
          onSaveButtonColor: r.ButtonColors.RED,
        });
      n.default = (e) => {
        let {
            guildId: n,
            transitionState: t,
            onClose: a,
            onComplete: h,
            isPreview: x = !1,
          } = e,
          E = (0, d.rb)((e) => e.shouldShowWarning),
          T = (0, i.e7)([u.Z], () => u.Z.get(n)),
          k = (0, c.Dt)();
        return (o.useEffect(() => {
          T === u.t && a();
        }, [a, T]),
        T === u.t)
          ? null
          : (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)(r.ModalRoot, {
                  size: r.ModalSize.MEDIUM,
                  className: C.container,
                  transitionState: t,
                  "aria-labelledby": k,
                  children: [
                    (0, s.jsx)(r.ModalCloseButton, {
                      onClick: () => a(!1),
                      className: C.closeButton,
                    }),
                    (0, s.jsx)(g.Z, {
                      headerId: k,
                      guildId: n,
                      onClose: a,
                      onComplete: h,
                      isPreview: x,
                    }),
                  ],
                }),
                (0, s.jsx)(l.W, {
                  children:
                    !0 === E &&
                    (0, s.jsx)(r.SlideIn, {
                      className: C.notice,
                      children: (0, s.jsx)(f, {}),
                    }),
                }),
              ],
            });
      };
    },
    840814: function (e, n, t) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
  },
]);
//# sourceMappingURL=bba73a263bf5dfeb209f.js.map
