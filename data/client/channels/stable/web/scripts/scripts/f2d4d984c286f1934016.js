"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72458"],
  {
    915509: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return d;
        },
      }),
        e(47120);
      var r = e(200651),
        a = e(192379),
        i = e(120356),
        l = e.n(i),
        o = e(481060),
        s = e(313201),
        u = e(388032),
        c = e(516497);
      function d(t) {
        let {
            errorText: n,
            title: e,
            description: i,
            transitionState: d,
            onCancel: f,
            onConfirm: g,
            children: m,
          } = t,
          E = (0, s.Dt)(),
          [_, p] = a.useState(!1),
          N = a.useCallback(async () => {
            p(!0);
            try {
              await g();
            } catch (t) {
              throw t;
            } finally {
              p(!1);
            }
          }, [g]);
        return (0, r.jsxs)(o.ModalRoot, {
          className: c.modal,
          transitionState: d,
          "aria-labelledby": E,
          size: o.ModalSize.SMALL,
          children: [
            (0, r.jsxs)(o.ModalContent, {
              className: c.modalContent,
              children: [
                (0, r.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  id: E,
                  children: e,
                }),
                null != i && "" !== i
                  ? (0, r.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: c.description,
                      children: i,
                    })
                  : null,
                (0, r.jsx)("div", { className: c.body, children: m }),
                null != n && "" !== n
                  ? (0, r.jsx)(o.Text, {
                      className: c.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: n,
                    })
                  : null,
              ],
            }),
            (0, r.jsxs)(o.ModalFooter, {
              children: [
                (0, r.jsx)(o.Button, {
                  submitting: _,
                  className: c.button,
                  size: o.Button.Sizes.SMALL,
                  color: o.Button.Colors.BRAND,
                  onClick: N,
                  children: u.intl.string(u.t.R3BPHx),
                }),
                (0, r.jsx)(o.Button, {
                  className: l()(c.cancelButton, c.button),
                  size: o.Button.Sizes.SMALL,
                  color: o.Button.Colors.PRIMARY,
                  onClick: f,
                  children: u.intl.string(u.t["ETE/oK"]),
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
            return g;
          },
        }),
        e(47120);
      var r = e(200651),
        a = e(192379),
        i = e(481060),
        l = e(881052),
        o = e(434404),
        s = e(78451),
        u = e(915509),
        c = e(981631),
        d = e(388032),
        f = e(971436);
      function g(t) {
        let { guild: n, onClose: e, hideColors: g } = t,
          [m, E] = a.useState(n.verificationLevel),
          [_, p] = a.useState(null),
          N = n.hasFeature(c.oNc.COMMUNITY),
          I = (0, s.IF)(N, g).filter((t) => !t.disabled),
          R = a.useCallback(async () => {
            null != _ && p(null);
            try {
              await o.Z.saveGuild(n.id, { verificationLevel: m }),
                o.Z.updateGuild({ verificationLevel: m }),
                e();
            } catch (t) {
              p(new l.Hx(t).getAnyErrorMessage());
            }
          }, [_, n.id, m, e]);
        return (0, r.jsx)(u.Z, {
          ...t,
          title: d.intl.string(d.t.DpRdYG),
          errorText: _,
          onConfirm: R,
          onCancel: e,
          children: (0, r.jsxs)(i.FormSection, {
            children: [
              (0, r.jsx)(i.FormText, {
                type: i.FormText.Types.DESCRIPTION,
                className: f.marginBottom20,
                children: d.intl.format(d.t.iuRk2t, {}),
              }),
              (0, r.jsx)(i.RadioGroup, {
                value: m,
                options: I,
                onChange: (t) => E(t.value),
              }),
            ],
          }),
        });
      }
    },
    2150: function (t, n, e) {
      var r, a;
      e.d(n, {
        q: function () {
          return r;
        },
      }),
        ((a = r || (r = {})).ACCENT = "accent"),
        (a.GREEN = "statusGreen"),
        (a.YELLOW = "statusYellow"),
        (a.ORANGE = "statusOrange"),
        (a.RED = "statusRed"),
        (a.NONE = "transparent");
    },
    78451: function (t, n, e) {
      e.d(n, {
        IF: function () {
          return d;
        },
        LJ: function () {
          return c;
        },
        MF: function () {
          return f;
        },
        X7: function () {
          return m;
        },
        c7: function () {
          return g;
        },
      });
      var r = e(524437);
      e(376345);
      var a = e(692547),
        i = e(2150),
        l = e(187819),
        o = e(981631),
        s = e(973005),
        u = e(388032);
      function c(t) {
        return t.map((t) => ({
          title: t.name,
          description: t.desc,
          highlightColor: (function (t) {
            switch (t) {
              case E("PRIMARY_400"):
                return i.q.ACCENT;
              case E("GREEN_360"):
                return i.q.GREEN;
              case E("YELLOW_360"):
                return i.q.YELLOW;
              case E("ORANGE_345"):
                return i.q.ORANGE;
              case E("RED_400"):
                return i.q.RED;
              default:
                return i.q.NONE;
            }
          })(t.color),
          value: t.value,
          disabled: t.disabled,
        }));
      }
      function d() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return [
          {
            name: u.intl.string(u.t.PEzffn),
            desc: u.intl.string(u.t.nDQy0t),
            value: o.sFg.NONE,
            disabled: t,
            tooltipText: t ? u.intl.string(u.t.j9WtHx) : null,
          },
          {
            name: u.intl.string(u.t.SsCK8P),
            desc: u.intl.string(u.t["8GCOX1"]),
            value: o.sFg.LOW,
            color: n ? void 0 : E("GREEN_360"),
          },
          {
            name: u.intl.string(u.t.WwNoR0),
            desc: u.intl.formatToPlainString(u.t.VS14gY, {
              min: o.YeM.ACCOUNT_AGE,
            }),
            value: o.sFg.MEDIUM,
            color: n ? void 0 : E("YELLOW_360"),
          },
          {
            name: u.intl.string(u.t.I2jMUF),
            desc: u.intl.formatToPlainString(u.t["r+b3Iy"], {
              min: o.YeM.MEMBER_AGE,
            }),
            value: o.sFg.HIGH,
            color: n ? void 0 : E("ORANGE_345"),
          },
          {
            name: u.intl.string(u.t.cJY8w8),
            desc: u.intl.string(u.t.PWaKmZ),
            value: o.sFg.VERY_HIGH,
            color: n ? void 0 : E("RED_400"),
          },
        ];
      }
      function f() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
          {
            name: u.intl.string(u.t.iHuPEx),
            desc: u.intl.string(u.t.dzbET0),
            value: o.lxg.ALL_MEMBERS,
            color: E("RED_400"),
          },
          {
            name: u.intl.string(u.t.ynfFaG),
            desc: u.intl.string(u.t.qZ1eHh),
            value: o.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: t,
            tooltipText: t ? u.intl.string(u.t.j9WtHx) : null,
            color: E("YELLOW_360"),
          },
          {
            name: u.intl.string(u.t.VbSyAw),
            desc: u.intl.string(u.t.jesz8f),
            value: o.lxg.DISABLED,
            disabled: t,
            tooltipText: t ? u.intl.string(u.t.j9WtHx) : null,
            color: E("PRIMARY_400"),
          },
        ];
      }
      function g() {
        let t = (0, l.sp)({ location: "generate-dm-spam-options" });
        return [
          {
            name: t
              ? u.intl.string(u.t["4IaoCA"])
              : u.intl.string(u.t["DY6/Fx"]),
            desc: t ? u.intl.string(u.t.TgipjI) : u.intl.string(u.t.p5t0h4),
            value: r.Xr.FRIENDS_AND_NON_FRIENDS,
            color: E("GREEN_360"),
          },
          {
            name: t ? u.intl.string(u.t["6NnX6O"]) : u.intl.string(u.t.IUO82t),
            desc: t
              ? u.intl.string(u.t["+dw1qq"])
              : u.intl.string(u.t["Fo/jub"]),
            value: r.Xr.NON_FRIENDS,
            color: E("YELLOW_360"),
          },
          {
            name: t ? u.intl.string(u.t["1tiAFx"]) : u.intl.string(u.t.XV5TIi),
            desc: t ? u.intl.string(u.t.LKTyeH) : u.intl.string(u.t.Ykdtoq),
            value: r.Xr.DISABLED,
            color: E("RED_400"),
          },
        ];
      }
      function m() {
        return [
          {
            name: u.intl.string(u.t.PhNlh4),
            desc: u.intl.string(u.t["Fw+Lvr"]),
            value: s.TI.FRIENDS_AND_NON_FRIENDS,
            color: E("GREEN_360"),
          },
          {
            name: u.intl.string(u.t["8ioJ4e"]),
            desc: u.intl.string(u.t.z4l4Cg),
            value: s.TI.NON_FRIENDS,
            color: E("YELLOW_360"),
          },
          {
            name: u.intl.string(u.t.FLfuhI),
            desc: u.intl.string(u.t.MoZlaG),
            value: s.TI.DISABLED,
            color: E("RED_400"),
          },
        ];
      }
      function E(t) {
        return a.Z.unsafe_rawColors[t].css;
      }
    },
    516497: function (t, n, e) {
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
        rulesInputNumber: "rulesInputNumber_f152fa",
        rulesTextAreaInput: "rulesTextAreaInput_f152fa",
        clearIcon: "clearIcon_f152fa",
        dragContainer: "dragContainer_f152fa",
        dragIcon: "dragIcon_f152fa",
        divider: "divider_f152fa",
        termsExampleRulesContainer: "termsExampleRulesContainer_f152fa",
        termsExampleRulePairContainer: "termsExampleRulePairContainer_f152fa",
        exampleRule: "exampleRule_f152fa",
        disabled: "disabled_f152fa",
        errorText: "errorText_f152fa",
        spacedItem: "spacedItem_f152fa",
        button: "button_f152fa",
        cancelButton: "cancelButton_f152fa",
        characterCount: "characterCount_f152fa",
        radioIconEmptyContainer: "radioIconEmptyContainer_f152fa",
        radioIconEmpty: "radioIconEmpty_f152fa",
      };
    },
  },
]);
//# sourceMappingURL=f2d4d984c286f1934016.js.map
