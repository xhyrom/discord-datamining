"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52657"],
  {
    852860: function (e, s, n) {
      n(47120);
      var o = n(735250),
        t = n(470079),
        l = n(212433),
        i = n(692547),
        a = n(481060),
        r = n(585483),
        c = n(981631),
        u = n(689938),
        d = n(147768);
      s.Z = function (e) {
        var s;
        let {
            message: n,
            errorMessage: E,
            submitting: g,
            onReset: C,
            onSave: S,
            onSaveText: h,
            onResetText: x,
            onSaveButtonColor: T,
            disabled: _,
            saveButtonTooltip: N,
          } = e,
          I = t.useRef(null),
          [{ spring: M }, R] = (0, a.useSpring)(() => ({ spring: 0 }));
        t.useEffect(() => {
          function e() {
            R({ spring: 1, config: l.config.gentle }),
              R({ spring: 0, config: l.config.gentle, delay: 1e3 });
          }
          return (
            r.S.subscribe(c.CkL.EMPHASIZE_NOTICE, e),
            () => {
              r.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, e);
            }
          );
        }, [R]);
        let f = M.to({
            range: [0, 1],
            output: [
              (0, a.useToken)(i.Z.colors.TEXT_NORMAL).hex(),
              (0, a.useToken)(i.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          k = M.to({
            range: [0, 1],
            output: [
              (0, a.useToken)(i.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, a.useToken)(i.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          m = M.to({
            range: [0, 1],
            output: [
              (0, a.useToken)(i.Z.colors.TEXT_DANGER).hex(),
              (0, a.useToken)(i.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, o.jsx)(l.animated.div, {
          className: d.container,
          style: { backgroundColor: k },
          children: (0, o.jsx)("div", {
            className: d.flexContainer,
            ref: I,
            children: (0, o.jsxs)(a.FocusRingScope, {
              containerRef: I,
              children: [
                (0, o.jsx)("div", {
                  className: d.shrinkingContainer,
                  children: (0, o.jsx)(l.animated.div, {
                    className: d.message,
                    style: { color: null != E ? m : f },
                    children:
                      null !== (s = null != E ? E : n) && void 0 !== s
                        ? s
                        : u.Z.Messages.SETTINGS_NOTICE_MESSAGE,
                  }),
                }),
                (0, o.jsxs)("div", {
                  className: d.actions,
                  children: [
                    null != C &&
                      (0, o.jsx)(a.Button, {
                        className: d.resetButton,
                        size: a.Button.Sizes.SMALL,
                        color: a.Button.Colors.PRIMARY,
                        look: a.Button.Looks.LINK,
                        onClick: C,
                        children: (0, o.jsx)(l.animated.span, {
                          style: { color: f },
                          children: null != x ? x : u.Z.Messages.RESET,
                        }),
                      }),
                    null != S
                      ? (0, o.jsx)(a.Tooltip, {
                          text: N,
                          children: (e) =>
                            (0, o.jsx)(a.Button, {
                              size: a.Button.Sizes.SMALL,
                              color: null != T ? T : a.Button.Colors.GREEN,
                              submitting: g,
                              disabled: _,
                              onClick: S,
                              ...e,
                              children:
                                null != h ? h : u.Z.Messages.SAVE_CHANGES,
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
    645264: function (e, s, n) {
      n.r(s);
      var o = n(735250),
        t = n(470079),
        l = n(442837),
        i = n(215569),
        a = n(481060),
        r = n(852860),
        c = n(313201),
        u = n(944163),
        d = n(266395),
        E = n(200305),
        g = n(592286),
        C = n(689938),
        S = n(27471);
      let h = () =>
        (0, o.jsx)(r.Z, {
          submitting: !1,
          message: C.Z.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
          onReset: () => {
            (0, d.PE)(!1);
          },
          onResetText: C.Z.Messages.CANCEL,
          onSave: () => {
            (0, d.PE)(!1), (0, a.closeModal)(g.Pn);
          },
          onSaveText: C.Z.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
          onSaveButtonColor: a.ButtonColors.RED,
        });
      s.default = (e) => {
        let {
            guildId: s,
            transitionState: n,
            onClose: r,
            onComplete: g,
            isPreview: C = !1,
          } = e,
          x = (0, d.rb)((e) => e.shouldShowWarning),
          T = (0, l.e7)([u.Z], () => u.Z.get(s)),
          _ = (0, c.Dt)();
        return (t.useEffect(() => {
          T === u.t && r();
        }, [r, T]),
        T === u.t)
          ? null
          : (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsxs)(a.ModalRoot, {
                  size: a.ModalSize.MEDIUM,
                  className: S.container,
                  transitionState: n,
                  "aria-labelledby": _,
                  children: [
                    (0, o.jsx)(a.ModalCloseButton, {
                      onClick: () => r(!1),
                      className: S.closeButton,
                    }),
                    (0, o.jsx)(E.Z, {
                      headerId: _,
                      guildId: s,
                      onClose: r,
                      onComplete: g,
                      isPreview: C,
                    }),
                  ],
                }),
                (0, o.jsx)(i.W, {
                  children:
                    !0 === x &&
                    (0, o.jsx)(a.SlideIn, {
                      className: S.notice,
                      children: (0, o.jsx)(h, {}),
                    }),
                }),
              ],
            });
      };
    },
    147768: function (e, s, n) {
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
//# sourceMappingURL=8c5451d089370b6f6696.js.map
