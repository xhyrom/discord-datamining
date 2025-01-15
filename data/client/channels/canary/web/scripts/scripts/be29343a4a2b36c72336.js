"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52657"],
  {
    645264: function (e, t, s) {
      s.r(t);
      var n = s(200651),
        o = s(192379),
        l = s(442837),
        i = s(215569),
        a = s(481060),
        r = s(852860),
        d = s(313201),
        c = s(944163),
        u = s(266395),
        h = s(200305),
        g = s(592286),
        x = s(388032),
        j = s(537416);
      let p = () =>
        (0, n.jsx)(r.Z, {
          submitting: !1,
          message: x.intl.string(x.t["8g514e"]),
          onReset: () => {
            (0, u.PE)(!1);
          },
          onResetText: x.intl.string(x.t["ETE/oK"]),
          onSave: () => {
            (0, u.PE)(!1), (0, a.closeModal)(g.Pn);
          },
          onSaveText: x.intl.string(x.t["Xt+UaW"]),
          onSaveButtonColor: a.ButtonColors.RED,
        });
      t.default = (e) => {
        let {
            guildId: t,
            transitionState: s,
            onClose: r,
            onComplete: g,
            isPreview: x = !1,
          } = e,
          C = (0, u.rb)((e) => e.shouldShowWarning),
          m = (0, l.e7)([c.Z], () => c.Z.get(t)),
          E = (0, d.Dt)();
        return (o.useEffect(() => {
          m === c.t && r();
        }, [r, m]),
        m === c.t)
          ? null
          : (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)(a.ModalRoot, {
                  size: a.ModalSize.MEDIUM,
                  className: j.container,
                  transitionState: s,
                  "aria-labelledby": E,
                  children: [
                    (0, n.jsx)(a.ModalCloseButton, {
                      onClick: () => r(!1),
                      className: j.closeButton,
                    }),
                    (0, n.jsx)(h.Z, {
                      headerId: E,
                      guildId: t,
                      onClose: r,
                      onComplete: g,
                      isPreview: x,
                    }),
                  ],
                }),
                (0, n.jsx)(i.W, {
                  children:
                    !0 === C &&
                    (0, n.jsx)(a.SlideIn, {
                      className: j.notice,
                      children: (0, n.jsx)(p, {}),
                    }),
                }),
              ],
            });
      };
    },
  },
]);
//# sourceMappingURL=be29343a4a2b36c72336.js.map
