"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45406"],
  {
    344516: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        s = n(392711),
        a = n.n(s),
        r = n(442837),
        o = n(481060),
        d = n(846027),
        u = n(825209),
        h = n(600164),
        c = n(313201),
        m = n(687058),
        g = n(253052),
        p = n(382577),
        x = n(131951),
        j = n(36703),
        V = n(981631),
        C = n(65154),
        T = n(388032),
        Z = n(646156),
        F = n(275477);
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let S = (0, c.hQ)(),
        b = (0, c.hQ)(),
        I = (0, c.hQ)();
      class M extends l.PureComponent {
        handleValueRender(e) {
          return "".concat((-((100 - e) * 1)).toFixed(0), "dB");
        }
        renderAutomaticVADToggle() {
          let { autoThreshold: e } = this.props;
          return (0, i.jsx)(c.FG, {
            children: (t) =>
              (0, i.jsxs)(h.Z, {
                className: F.marginBottom4,
                children: [
                  (0, i.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H3,
                    children: (0, i.jsx)("label", {
                      htmlFor: t,
                      children: T.intl.string(T.t.I1Zuq6),
                    }),
                  }),
                  (0, i.jsx)(o.Switch, {
                    id: t,
                    checked: e,
                    onChange: this.handleAutoThresholdChange,
                  }),
                ],
              }),
          });
        }
        renderSlider() {
          let { autoThreshold: e, threshold: t } = this.props;
          if (!e)
            return (0, i.jsx)(o.Slider, {
              initialValue: t + 100,
              onValueRender: this.handleValueRender,
              onValueChange: this.handleSensitivityChange,
              "aria-label": T.intl.string(T.t["sqUm+v"]),
            });
        }
        render() {
          return (0, i.jsxs)(o.FormItem, {
            title: T.intl.string(T.t["sqUm+v"]),
            className: F.marginBottom8,
            children: [this.renderAutomaticVADToggle(), this.renderSlider()],
          });
        }
        constructor(...e) {
          super(...e),
            v(this, "handleAutoThresholdChange", (e) => {
              let { onThresholdChange: t, threshold: n } = this.props;
              null == t || t(n, e);
            }),
            v(this, "handleSensitivityChange", (e) => {
              let { onThresholdChange: t, autoThreshold: n } = this.props;
              null == t || t(-((100 - e) * 1), n);
            });
        }
      }
      function N(e) {
        let t,
          { mediaEngineContext: n, speaking: s = !1 } = e,
          {
            inputVolume: h,
            outputVolume: c,
            inputDeviceId: p,
            outputDeviceId: C,
            inputMode: Z,
            shortcut: v,
            vadThreshold: N,
            vadAutoThreshold: A,
            delay: D,
          } = (0, r.cj)([x.Z], () => ({
            inputVolume: x.Z.getInputVolume(),
            outputVolume: x.Z.getOutputVolume(),
            inputDeviceId: x.Z.getInputDeviceId(),
            outputDeviceId: x.Z.getOutputDeviceId(),
            inputMode: x.Z.getMode(n),
            shortcut: x.Z.getModeOptions(n).shortcut,
            vadThreshold: x.Z.getModeOptions(n).threshold,
            vadAutoThreshold: x.Z.getModeOptions(n).autoThreshold,
            delay: x.Z.getModeOptions(n).delay,
          })),
          O = (0, m.Z)(),
          f = (0, g.Z)(),
          B = a().first(O),
          k = null != B && B.disabled,
          y = a().first(f),
          _ = null != y && y.disabled,
          R = [
            { value: V.pM4.VOICE_ACTIVITY, name: T.intl.string(T.t.cHCEOD) },
            { value: V.pM4.PUSH_TO_TALK, name: T.intl.string(T.t.Q8gkVF) },
          ];
        return (
          (t =
            Z === V.pM4.PUSH_TO_TALK
              ? (0, i.jsxs)(l.Fragment, {
                  children: [
                    (0, i.jsx)(o.FormItem, {
                      title: T.intl.string(T.t.YkDjVF),
                      className: F.marginBottom20,
                      children: (0, i.jsx)(u.Z, {
                        defaultValue: v,
                        onChange: (e) => d.Z.setMode(Z, { shortcut: e }, n),
                      }),
                    }),
                    (0, i.jsxs)(o.FormItem, {
                      className: F.marginBottom8,
                      children: [
                        (0, i.jsx)(o.FormTitle, {
                          id: S,
                          children: T.intl.string(T.t.y0ShVl),
                        }),
                        (0, i.jsx)(o.Slider, {
                          initialValue: D,
                          onValueChange: (e) => d.Z.setMode(Z, { delay: e }, n),
                          onValueRender: (e) =>
                            e >= 1e3
                              ? ((e /= 1e3), "".concat(e.toFixed(2), "s"))
                              : "".concat(e.toFixed(0), "ms"),
                          maxValue: V.qhL,
                          "aria-labelledby": S,
                        }),
                      ],
                    }),
                  ],
                })
              : (0, i.jsx)(M, {
                  speaking: s,
                  inputMode: Z,
                  threshold: N,
                  autoThreshold: A,
                  onThresholdChange: (e, t) =>
                    d.Z.setMode(Z, { threshold: e, autoThreshold: t }, n),
                })),
          (0, i.jsxs)(l.Fragment, {
            children: [
              (0, i.jsx)(o.FormItem, {
                title: T.intl.string(T.t.hHMYbW),
                className: F.marginBottom20,
                children: (0, i.jsx)(o.SingleSelect, {
                  value: p,
                  onChange: (e) =>
                    d.Z.setInputDevice(e, { location: "Voice Settings" }),
                  options: a().map(O, (e) => {
                    let { id: t, name: n } = e;
                    return { value: t, label: n };
                  }),
                  isDisabled: k,
                }),
              }),
              (0, i.jsxs)(o.FormItem, {
                className: F.marginBottom20,
                children: [
                  (0, i.jsx)(o.FormTitle, {
                    id: b,
                    children: T.intl.string(T.t.OX2Bnp),
                  }),
                  (0, i.jsx)(o.Slider, {
                    initialValue: (0, j.P)(h),
                    asValueChanges: (e) => d.Z.setInputVolume((0, j.A)(e)),
                    "aria-labelledby": b,
                  }),
                ],
              }),
              (0, i.jsx)(o.FormItem, {
                title: T.intl.string(T.t.dl18zc),
                className: F.marginBottom20,
                children: (0, i.jsx)(o.SingleSelect, {
                  value: C,
                  onChange: (e) =>
                    d.Z.setOutputDevice(e, { location: "Voice Settings" }),
                  options: a().map(f, (e) => {
                    let { id: t, name: n } = e;
                    return { value: t, label: n };
                  }),
                  isDisabled: _,
                }),
              }),
              (0, i.jsxs)(o.FormItem, {
                className: F.marginBottom20,
                children: [
                  (0, i.jsx)(o.FormTitle, {
                    id: I,
                    children: T.intl.string(T.t.eATD2N),
                  }),
                  (0, i.jsx)(o.Slider, {
                    initialValue: (0, j.P)(c),
                    maxValue: 200,
                    asValueChanges: (e) => d.Z.setOutputVolume((0, j.A)(e)),
                    "aria-labelledby": I,
                  }),
                ],
              }),
              (0, i.jsx)(o.FormItem, {
                title: T.intl.string(T.t["pS+K2N"]),
                className: F.marginBottom20,
                children: (0, i.jsx)(o.RadioGroup, {
                  onChange: (e) => {
                    let { value: t } = e;
                    return d.Z.setMode(t, {}, n);
                  },
                  options: R,
                  value: Z,
                }),
              }),
              t,
            ],
          })
        );
      }
      function A(e) {
        var t;
        return (
          (0, p.Z)(() => {
            null != V.e3s && e.onClose();
          }),
          (0, i.jsxs)(o.ModalRoot, {
            transitionState: e.transitionState,
            "aria-label": T.intl.string(T.t.NiTd0d),
            children: [
              (0, i.jsxs)(o.ModalHeader, {
                children: [
                  (0, i.jsxs)(h.Z.Child, {
                    children: [
                      (0, i.jsx)(o.FormTitle, {
                        tag: "h1",
                        className: F.marginReset,
                        children: T.intl.string(T.t.NiTd0d),
                      }),
                      (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        className: Z.title,
                        children: e.title,
                      }),
                    ],
                  }),
                  (0, i.jsx)(h.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(o.ModalCloseButton, {
                      onClick: e.onClose,
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(o.ModalContent, {
                children: (0, i.jsx)(N, {
                  mediaEngineContext:
                    null !== (t = e.mediaEngineContext) && void 0 !== t
                      ? t
                      : C.Yn.DEFAULT,
                }),
              }),
            ],
          })
        );
      }
    },
    646156: function (e, t, n) {
      e.exports = { title: "title_d14717" };
    },
  },
]);
//# sourceMappingURL=ff9c59188569464299e6.js.map
