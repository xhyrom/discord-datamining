"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72458"],
  {
    915509: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      }),
        e(47120);
      var i = e(200651),
        r = e(192379),
        a = e(120356),
        l = e.n(a),
        o = e(481060),
        s = e(313201),
        c = e(388032),
        d = e(945330);
      function u(t) {
        let {
            errorText: n,
            title: e,
            description: a,
            transitionState: u,
            onCancel: g,
            onConfirm: f,
            children: E,
          } = t,
          m = (0, s.Dt)(),
          [_, N] = r.useState(!1),
          I = r.useCallback(async () => {
            N(!0);
            try {
              await f();
            } catch (t) {
              throw t;
            } finally {
              N(!1);
            }
          }, [f]);
        return (0, i.jsxs)(o.ModalRoot, {
          className: d.modal,
          transitionState: u,
          "aria-labelledby": m,
          size: o.ModalSize.SMALL,
          children: [
            (0, i.jsxs)(o.ModalContent, {
              className: d.modalContent,
              children: [
                (0, i.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  id: m,
                  children: e,
                }),
                null != a && "" !== a
                  ? (0, i.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: d.description,
                      children: a,
                    })
                  : null,
                (0, i.jsx)("div", { className: d.body, children: E }),
                null != n && "" !== n
                  ? (0, i.jsx)(o.Text, {
                      className: d.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: n,
                    })
                  : null,
              ],
            }),
            (0, i.jsxs)(o.ModalFooter, {
              children: [
                (0, i.jsx)(o.Button, {
                  submitting: _,
                  className: d.button,
                  size: o.Button.Sizes.SMALL,
                  color: o.Button.Colors.BRAND,
                  onClick: I,
                  children: c.intl.string(c.t.R3BPHx),
                }),
                (0, i.jsx)(o.Button, {
                  className: l()(d.cancelButton, d.button),
                  size: o.Button.Sizes.SMALL,
                  color: o.Button.Colors.PRIMARY,
                  onClick: g,
                  children: c.intl.string(c.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    694278: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return f;
          },
        }),
        e(47120);
      var i = e(200651),
        r = e(192379),
        a = e(481060),
        l = e(881052),
        o = e(434404),
        s = e(78451),
        c = e(915509),
        d = e(981631),
        u = e(388032),
        g = e(232186);
      function f(t) {
        let { guild: n, onClose: e, hideColors: f } = t,
          [E, m] = r.useState(n.verificationLevel),
          [_, N] = r.useState(null),
          I = n.hasFeature(d.oNc.COMMUNITY),
          R = (0, s.IF)(I, f).filter((t) => !t.disabled),
          p = r.useCallback(async () => {
            null != _ && N(null);
            try {
              await o.Z.saveGuild(n.id, { verificationLevel: E }),
                o.Z.updateGuild({ verificationLevel: E }),
                e();
            } catch (t) {
              N(new l.Hx(t).getAnyErrorMessage());
            }
          }, [_, n.id, E, e]);
        return (0, i.jsx)(c.Z, {
          ...t,
          title: u.intl.string(u.t.DpRdYG),
          errorText: _,
          onConfirm: p,
          onCancel: e,
          children: (0, i.jsxs)(a.FormSection, {
            children: [
              (0, i.jsx)(a.FormText, {
                type: a.FormText.Types.DESCRIPTION,
                className: g.marginBottom20,
                children: u.intl.format(u.t.iuRk2t, {}),
              }),
              (0, i.jsx)(a.RadioGroup, {
                value: E,
                options: R,
                onChange: (t) => m(t.value),
              }),
            ],
          }),
        });
      }
    },
    2150: function (t, n, e) {
      var i, r;
      e.d(n, {
        q: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).ACCENT = "accent"),
        (r.GREEN = "statusGreen"),
        (r.YELLOW = "statusYellow"),
        (r.ORANGE = "statusOrange"),
        (r.RED = "statusRed"),
        (r.NONE = "transparent");
    },
    78451: function (t, n, e) {
      e.d(n, {
        IF: function () {
          return u;
        },
        LJ: function () {
          return d;
        },
        MF: function () {
          return g;
        },
        X7: function () {
          return E;
        },
        c7: function () {
          return f;
        },
      });
      var i = e(524437);
      e(376345);
      var r = e(692547),
        a = e(2150),
        l = e(187819),
        o = e(981631),
        s = e(973005),
        c = e(388032);
      function d(t) {
        return t.map((t) => ({
          title: t.name,
          description: t.desc,
          highlightColor: (function (t) {
            switch (t) {
              case m("PRIMARY_400"):
                return a.q.ACCENT;
              case m("GREEN_360"):
                return a.q.GREEN;
              case m("YELLOW_360"):
                return a.q.YELLOW;
              case m("ORANGE_345"):
                return a.q.ORANGE;
              case m("RED_400"):
                return a.q.RED;
              default:
                return a.q.NONE;
            }
          })(t.color),
          value: t.value,
          disabled: t.disabled,
        }));
      }
      function u() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return [
          {
            name: c.intl.string(c.t.PEzffn),
            desc: c.intl.string(c.t.nDQy0t),
            value: o.sFg.NONE,
            disabled: t,
            tooltipText: t ? c.intl.string(c.t.j9WtHx) : null,
          },
          {
            name: c.intl.string(c.t.SsCK8P),
            desc: c.intl.string(c.t["8GCOX1"]),
            value: o.sFg.LOW,
            color: n ? void 0 : m("GREEN_360"),
          },
          {
            name: c.intl.string(c.t.WwNoR0),
            desc: c.intl.formatToPlainString(c.t.VS14gY, {
              min: o.YeM.ACCOUNT_AGE,
            }),
            value: o.sFg.MEDIUM,
            color: n ? void 0 : m("YELLOW_360"),
          },
          {
            name: c.intl.string(c.t.I2jMUF),
            desc: c.intl.formatToPlainString(c.t["r+b3Iy"], {
              min: o.YeM.MEMBER_AGE,
            }),
            value: o.sFg.HIGH,
            color: n ? void 0 : m("ORANGE_345"),
          },
          {
            name: c.intl.string(c.t.cJY8w8),
            desc: c.intl.string(c.t.PWaKmZ),
            value: o.sFg.VERY_HIGH,
            color: n ? void 0 : m("RED_400"),
          },
        ];
      }
      function g() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
          {
            name: c.intl.string(c.t.iHuPEx),
            desc: c.intl.string(c.t.dzbET0),
            value: o.lxg.ALL_MEMBERS,
            color: m("RED_400"),
          },
          {
            name: c.intl.string(c.t.ynfFaG),
            desc: c.intl.string(c.t.qZ1eHh),
            value: o.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: t,
            tooltipText: t ? c.intl.string(c.t.j9WtHx) : null,
            color: m("YELLOW_360"),
          },
          {
            name: c.intl.string(c.t.VbSyAw),
            desc: c.intl.string(c.t.jesz8f),
            value: o.lxg.DISABLED,
            disabled: t,
            tooltipText: t ? c.intl.string(c.t.j9WtHx) : null,
            color: m("PRIMARY_400"),
          },
        ];
      }
      function f() {
        let t = (0, l.sp)({ location: "generate-dm-spam-options" });
        return [
          {
            name: t
              ? c.intl.string(c.t["4IaoCA"])
              : c.intl.string(c.t["DY6/Fx"]),
            desc: t ? c.intl.string(c.t.TgipjI) : c.intl.string(c.t.p5t0h4),
            value: i.Xr.FRIENDS_AND_NON_FRIENDS,
            color: m("GREEN_360"),
          },
          {
            name: t ? c.intl.string(c.t["6NnX6O"]) : c.intl.string(c.t.IUO82t),
            desc: t
              ? c.intl.string(c.t["+dw1qq"])
              : c.intl.string(c.t["Fo/jub"]),
            value: i.Xr.NON_FRIENDS,
            color: m("YELLOW_360"),
          },
          {
            name: t ? c.intl.string(c.t["1tiAFx"]) : c.intl.string(c.t.XV5TIi),
            desc: t ? c.intl.string(c.t.LKTyeH) : c.intl.string(c.t.Ykdtoq),
            value: i.Xr.DISABLED,
            color: m("RED_400"),
          },
        ];
      }
      function E() {
        return [
          {
            name: c.intl.string(c.t.PhNlh4),
            desc: c.intl.string(c.t["Fw+Lvr"]),
            value: s.TI.FRIENDS_AND_NON_FRIENDS,
            color: m("GREEN_360"),
          },
          {
            name: c.intl.string(c.t["8ioJ4e"]),
            desc: c.intl.string(c.t.z4l4Cg),
            value: s.TI.NON_FRIENDS,
            color: m("YELLOW_360"),
          },
          {
            name: c.intl.string(c.t.FLfuhI),
            desc: c.intl.string(c.t.MoZlaG),
            value: s.TI.DISABLED,
            color: m("RED_400"),
          },
        ];
      }
      function m(t) {
        return r.Z.unsafe_rawColors[t].css;
      }
    },
    945330: function (t, n, e) {
      t.exports = {
        modal: "modal_f152fa",
        description: "description_f152fa",
        body: "body_f152fa",
        modalContent: "modalContent_f152fa",
        addItemContainer: "addItemContainer_f152fa",
        addItemButton: "addItemButton_f152fa",
        dragging: "dragging_f152fa",
        draggableInputContainer: "draggableInputContainer_f152fa",
        inputWrapper: "inputWrapper_f152fa",
        clearButton: "clearButton_f152fa",
        clearIcon: "clearIcon_f152fa",
        dragContainer: "dragContainer_f152fa",
        dragIcon: "dragIcon_f152fa",
        divider: "divider_f152fa",
        errorText: "errorText_f152fa",
        spacedItem: "spacedItem_f152fa",
        button: "button_f152fa",
        cancelButton: "cancelButton_f152fa",
        radioIconEmptyContainer: "radioIconEmptyContainer_f152fa",
        radioIconEmpty: "radioIconEmpty_f152fa",
      };
    },
  },
]);
//# sourceMappingURL=5fe0504f898a7f4d6caa.js.map
