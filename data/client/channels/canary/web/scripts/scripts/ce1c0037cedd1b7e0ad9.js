"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66063"],
  {
    691435: function (e) {
      e.exports = "/assets/0465f5c853ca9dd2cf24.svg";
    },
    825209: function (e, t, n) {
      n(47120), n(653041);
      var i = n(200651),
        s = n(192379),
        r = n(921738),
        l = n.n(r),
        o = n(213005),
        a = n(455279),
        d = n(358085),
        u = n(998502),
        h = n(981631);
      function c(e, t, n) {
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
      let m =
        d.isPlatformEmbedded &&
        null != u.ZP.getDiscordUtils().inputCaptureRegisterElement;
      class g extends s.PureComponent {
        componentDidMount() {
          this._mounted = !0;
        }
        componentWillUnmount() {
          (this._mounted = !1), this.cleanUp();
        }
        componentDidUpdate(e) {
          this.props.defaultValue !== e.defaultValue &&
            this.setState({ codes: this.props.defaultValue });
        }
        cleanUp() {
          d.isPlatformEmbedded &&
            null != this.gs &&
            (this.gs.destroy(), (this.gs = null));
        }
        handleComboChange(e) {
          let { mode: t } = this.state,
            { onChange: n } = this.props;
          t === a.c.RECORDING &&
            (null != n && n(e), this.setState({ codes: e }));
        }
        render() {
          let e, t;
          let { codes: n, mode: s } = this.state,
            { disabled: r } = this.props;
          return (
            m
              ? ((t = u.ZP.getDiscordUtils().inputCaptureRegisterElement),
                (e = this.handleNativeChange))
              : !d.isPlatformEmbedded && (e = this.handleComboKeys),
            (0, i.jsx)(a.Z, {
              disabled: r,
              value: n,
              mode: s,
              onClick: this.toggleRecordMode,
              onChange: e,
              registerNativeRecorder: t,
              disableOnClickWhileRecording: m,
            })
          );
        }
        constructor(e) {
          super(e),
            c(this, "_input", void 0),
            c(this, "gs", void 0),
            c(this, "_mounted", !1),
            c(this, "recordStart", () => {
              d.isPlatformEmbedded &&
                !m &&
                ((this.gs = new o.Z()),
                this.gs.on("change", this.handleGSChange)),
                this.setState({ mode: a.c.RECORDING });
            }),
            c(this, "recordEnd", () => {
              this.cleanUp(), this.setState({ mode: a.c.DEFAULT });
            }),
            c(this, "toggleRecordMode", () => {
              this.state.mode === a.c.DEFAULT
                ? this.recordStart()
                : this.recordEnd();
            }),
            c(this, "handleComboKeys", (e, t, n) => {
              if ((n.preventDefault(), "keydown" === n.type)) {
                let e = t.map((e) => [
                    h.MoX.KEYBOARD_KEY,
                    l()(e),
                    h.CgE.BROWSER,
                  ]),
                  { keyCode: i } = n;
                null ==
                  e.find((e) => {
                    let [, t] = e;
                    return i === t;
                  }) && e.push([h.MoX.KEYBOARD_KEY, i, h.CgE.BROWSER]),
                  this.handleComboChange(e);
              }
            }),
            c(this, "handleGSChange", (e) => {
              if (!1 === this._mounted) return;
              let t = [...e.combo];
              this.handleComboChange(t);
            }),
            c(this, "handleNativeChange", (e) => {
              e.length > 0 && this.handleComboChange(e), this.recordEnd();
            });
          let { defaultValue: t } = e;
          this.state = { codes: t, mode: a.c.DEFAULT };
        }
      }
      t.Z = g;
    },
    344516: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return Z;
          },
        }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(392711),
        l = n.n(r),
        o = n(442837),
        a = n(481060),
        d = n(846027),
        u = n(825209),
        h = n(600164),
        c = n(313201),
        m = n(687058),
        g = n(253052),
        p = n(382577),
        b = n(131951),
        f = n(36703),
        C = n(981631),
        x = n(65154),
        v = n(388032),
        R = n(646156),
        _ = n(275477);
      function j(e, t, n) {
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
      let D = (0, c.hQ)(),
        E = (0, c.hQ)(),
        I = (0, c.hQ)();
      class N extends s.PureComponent {
        handleValueRender(e) {
          return "".concat((-((100 - e) * 1)).toFixed(0), "dB");
        }
        renderAutomaticVADToggle() {
          let { autoThreshold: e } = this.props;
          return (0, i.jsx)(c.FG, {
            children: (t) =>
              (0, i.jsxs)(h.Z, {
                className: _.marginBottom4,
                children: [
                  (0, i.jsx)(a.FormTitle, {
                    tag: a.FormTitleTags.H3,
                    children: (0, i.jsx)("label", {
                      htmlFor: t,
                      children: v.intl.string(v.t.I1Zuq6),
                    }),
                  }),
                  (0, i.jsx)(a.Switch, {
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
            return (0, i.jsx)(a.Slider, {
              initialValue: t + 100,
              onValueRender: this.handleValueRender,
              onValueChange: this.handleSensitivityChange,
              "aria-label": v.intl.string(v.t["sqUm+v"]),
            });
        }
        render() {
          return (0, i.jsxs)(a.FormItem, {
            title: v.intl.string(v.t["sqUm+v"]),
            className: _.marginBottom8,
            children: [this.renderAutomaticVADToggle(), this.renderSlider()],
          });
        }
        constructor(...e) {
          super(...e),
            j(this, "handleAutoThresholdChange", (e) => {
              let { onThresholdChange: t, threshold: n } = this.props;
              null == t || t(n, e);
            }),
            j(this, "handleSensitivityChange", (e) => {
              let { onThresholdChange: t, autoThreshold: n } = this.props;
              null == t || t(-((100 - e) * 1), n);
            });
        }
      }
      function T(e) {
        let t,
          { mediaEngineContext: n, speaking: r = !1 } = e,
          {
            inputVolume: h,
            outputVolume: c,
            inputDeviceId: p,
            outputDeviceId: x,
            inputMode: R,
            shortcut: j,
            vadThreshold: T,
            vadAutoThreshold: Z,
            delay: M,
          } = (0, o.cj)([b.Z], () => ({
            inputVolume: b.Z.getInputVolume(),
            outputVolume: b.Z.getOutputVolume(),
            inputDeviceId: b.Z.getInputDeviceId(),
            outputDeviceId: b.Z.getOutputDeviceId(),
            inputMode: b.Z.getMode(n),
            shortcut: b.Z.getModeOptions(n).shortcut,
            vadThreshold: b.Z.getModeOptions(n).threshold,
            vadAutoThreshold: b.Z.getModeOptions(n).autoThreshold,
            delay: b.Z.getModeOptions(n).delay,
          })),
          O = (0, m.Z)(),
          y = (0, g.Z)(),
          V = l().first(O),
          F = null != V && V.disabled,
          S = l().first(y),
          B = null != S && S.disabled,
          A = [
            { value: C.pM4.VOICE_ACTIVITY, name: v.intl.string(v.t.cHCEOD) },
            { value: C.pM4.PUSH_TO_TALK, name: v.intl.string(v.t.Q8gkVF) },
          ];
        return (
          (t =
            R === C.pM4.PUSH_TO_TALK
              ? (0, i.jsxs)(s.Fragment, {
                  children: [
                    (0, i.jsx)(a.FormItem, {
                      title: v.intl.string(v.t.YkDjVF),
                      className: _.marginBottom20,
                      children: (0, i.jsx)(u.Z, {
                        defaultValue: j,
                        onChange: (e) => d.Z.setMode(R, { shortcut: e }, n),
                      }),
                    }),
                    (0, i.jsxs)(a.FormItem, {
                      className: _.marginBottom8,
                      children: [
                        (0, i.jsx)(a.FormTitle, {
                          id: D,
                          children: v.intl.string(v.t.y0ShVl),
                        }),
                        (0, i.jsx)(a.Slider, {
                          initialValue: M,
                          onValueChange: (e) => d.Z.setMode(R, { delay: e }, n),
                          onValueRender: (e) =>
                            e >= 1e3
                              ? ((e /= 1e3), "".concat(e.toFixed(2), "s"))
                              : "".concat(e.toFixed(0), "ms"),
                          maxValue: C.qhL,
                          "aria-labelledby": D,
                        }),
                      ],
                    }),
                  ],
                })
              : (0, i.jsx)(N, {
                  speaking: r,
                  inputMode: R,
                  threshold: T,
                  autoThreshold: Z,
                  onThresholdChange: (e, t) =>
                    d.Z.setMode(R, { threshold: e, autoThreshold: t }, n),
                })),
          (0, i.jsxs)(s.Fragment, {
            children: [
              (0, i.jsx)(a.FormItem, {
                title: v.intl.string(v.t.hHMYbW),
                className: _.marginBottom20,
                children: (0, i.jsx)(a.SingleSelect, {
                  value: p,
                  onChange: (e) =>
                    d.Z.setInputDevice(e, { location: "Voice Settings" }),
                  options: l().map(O, (e) => {
                    let { id: t, name: n } = e;
                    return { value: t, label: n };
                  }),
                  isDisabled: F,
                }),
              }),
              (0, i.jsxs)(a.FormItem, {
                className: _.marginBottom20,
                children: [
                  (0, i.jsx)(a.FormTitle, {
                    id: E,
                    children: v.intl.string(v.t.OX2Bnp),
                  }),
                  (0, i.jsx)(a.Slider, {
                    initialValue: (0, f.P)(h),
                    asValueChanges: (e) => d.Z.setInputVolume((0, f.A)(e)),
                    "aria-labelledby": E,
                  }),
                ],
              }),
              (0, i.jsx)(a.FormItem, {
                title: v.intl.string(v.t.dl18zc),
                className: _.marginBottom20,
                children: (0, i.jsx)(a.SingleSelect, {
                  value: x,
                  onChange: (e) =>
                    d.Z.setOutputDevice(e, { location: "Voice Settings" }),
                  options: l().map(y, (e) => {
                    let { id: t, name: n } = e;
                    return { value: t, label: n };
                  }),
                  isDisabled: B,
                }),
              }),
              (0, i.jsxs)(a.FormItem, {
                className: _.marginBottom20,
                children: [
                  (0, i.jsx)(a.FormTitle, {
                    id: I,
                    children: v.intl.string(v.t.eATD2N),
                  }),
                  (0, i.jsx)(a.Slider, {
                    initialValue: (0, f.P)(c),
                    maxValue: 200,
                    asValueChanges: (e) => d.Z.setOutputVolume((0, f.A)(e)),
                    "aria-labelledby": I,
                  }),
                ],
              }),
              (0, i.jsx)(a.FormItem, {
                title: v.intl.string(v.t["pS+K2N"]),
                className: _.marginBottom20,
                children: (0, i.jsx)(a.RadioGroup, {
                  onChange: (e) => {
                    let { value: t } = e;
                    return d.Z.setMode(t, {}, n);
                  },
                  options: A,
                  value: R,
                }),
              }),
              t,
            ],
          })
        );
      }
      function Z(e) {
        var t;
        return (
          (0, p.Z)(() => {
            null != C.e3s && e.onClose();
          }),
          (0, i.jsxs)(a.ModalRoot, {
            transitionState: e.transitionState,
            "aria-label": v.intl.string(v.t.NiTd0d),
            children: [
              (0, i.jsxs)(a.ModalHeader, {
                children: [
                  (0, i.jsxs)(h.Z.Child, {
                    children: [
                      (0, i.jsx)(a.FormTitle, {
                        tag: "h1",
                        className: _.marginReset,
                        children: v.intl.string(v.t.NiTd0d),
                      }),
                      (0, i.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        className: R.title,
                        children: e.title,
                      }),
                    ],
                  }),
                  (0, i.jsx)(h.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(a.ModalCloseButton, {
                      onClick: e.onClose,
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(a.ModalContent, {
                children: (0, i.jsx)(T, {
                  mediaEngineContext:
                    null !== (t = e.mediaEngineContext) && void 0 !== t
                      ? t
                      : x.Yn.DEFAULT,
                }),
              }),
            ],
          })
        );
      }
    },
    213005: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120),
        n(653041);
      var i = n(836560),
        s = n(358085),
        r = n(998502),
        l = n(13140),
        o = n(981631);
      let a = [],
        d = (e, t, n) => {
          let i = (0, s.isWindows)() ? 0 : 1;
          if (e !== o.MoX.MOUSE_BUTTON || n !== i)
            a.forEach((i) => i._handleEvent(e, t, n));
        };
      class u extends i.EventEmitter {
        destroy() {
          this.removeAllListeners(),
            0 === (a = a.filter((e) => e !== this)).length &&
              r.ZP.setOnInputEventCallback(null);
        }
        toString() {
          return (0, l.BB)(this.combo);
        }
        _handleEvent(e, t, n) {
          0 === t
            ? (this.combo = this.combo.filter((t) => {
                let [i, s] = t;
                return !(i === e && s === n);
              }))
            : (this.combo.push([e, n, (0, l.dU)()]), this.emit("change", this));
        }
        constructor() {
          var e, t, n;
          super(),
            (e = this),
            (n = []),
            (t = "combo") in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            a.push(this),
            1 === a.length && r.ZP.setOnInputEventCallback(d);
        }
      }
    },
    455279: function (e, t, n) {
      n.d(t, {
        c: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        s,
        r = n(200651),
        l = n(192379),
        o = n(120356),
        a = n.n(o),
        d = n(879443),
        u = n.n(d),
        h = n(392711),
        c = n.n(h),
        m = n(481060),
        g = n(600164),
        p = n(13140),
        b = n(388032),
        f = n(955489);
      function C(e, t, n) {
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
      ((s = i || (i = {})).DEFAULT = "DEFAULT"), (s.RECORDING = "RECORDING");
      let x = { DEFAULT: f.__invalid_default, RECORDING: f.recording };
      class v extends l.PureComponent {
        componentWillUnmount() {
          null != this._unregisterNativeRecorder &&
            this._unregisterNativeRecorder();
        }
        componentDidUpdate(e) {
          let { mode: t } = this.props,
            { mode: n } = e;
          if (n === t) return;
          let { _inputRef: i } = this;
          if (null == i.current) return;
          let { activeElement: s } = document;
          "DEFAULT" === t && i.current === s && i.current.blur(),
            "RECORDING" === t && i.current !== s && i.current.focus();
        }
        render() {
          let e;
          let { mode: t, value: n, disabled: i } = this.props,
            s = (0, p.BB)(n, !0);
          e =
            "RECORDING" === t
              ? b.intl.string(b.t.bmOri4)
              : 0 === n.length
                ? b.intl.string(b.t.co3wt7)
                : b.intl.string(b.t.idFMvL);
          let l = "DEFAULT" === t && n.length > 0;
          return (0, r.jsx)(m.FocusRing, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, r.jsx)("div", {
              onClick: this.handleClick,
              onMouseDown: this.handleMouseDown,
              ref: this._containerRef,
              className: a()(f.recorderContainer, x[t], {
                [f.hasValue]: l,
                [f.containerDisabled]: i,
              }),
              children: (0, r.jsxs)(g.Z, {
                className: f.recorderLayout,
                children: [
                  (0, r.jsx)(g.Z.Child, {
                    className: f.keybindInput,
                    children: (0, r.jsx)("input", {
                      id: this._inputId,
                      placeholder: b.intl.string(b.t.nWRdnp),
                      type: "text",
                      ref: this.setInputRef,
                      readOnly: !0,
                      value: s,
                      disabled: "RECORDING" !== this.props.mode || i,
                    }),
                  }),
                  (0, r.jsx)(g.Z, {
                    shrink: 1,
                    grow: 0,
                    style: { margin: 0 },
                    children: (0, r.jsxs)(m.Button, {
                      className: f.addKeybindButton,
                      disabled: i,
                      onClick: (e) => {
                        e.stopPropagation(),
                          e.preventDefault(),
                          this.handleClick(e);
                      },
                      size: m.Button.Sizes.MIN,
                      color: m.ButtonColors.PRIMARY,
                      children: [
                        (0, r.jsx)("span", { className: f.text, children: e }),
                        (0, r.jsx)("span", { className: f.editIcon }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            C(this, "_inputId", c().uniqueId("key-recorder-")),
            C(this, "_unregisterNativeRecorder", null),
            C(this, "_mousedownMode", null),
            C(this, "_inputRef", l.createRef()),
            C(this, "_containerRef", l.createRef()),
            C(this, "setInputRef", (e) => {
              var t;
              let { registerNativeRecorder: n, onChange: i } = this.props;
              if (
                ((this._inputRef.current = e),
                null === (t = this._unregisterNativeRecorder) ||
                  void 0 === t ||
                  t.call(this),
                null != e)
              ) {
                if (null != n && null != i)
                  try {
                    this._unregisterNativeRecorder = n(e.id, i);
                  } catch (e) {
                    this._unregisterNativeRecorder = null;
                  }
                else null != i && (new (u())(e).handleKey = i);
              }
            }),
            C(this, "handleClick", (e) => {
              e.stopPropagation(), e.preventDefault();
              let { onClick: t, disableOnClickWhileRecording: n } = this.props;
              if (!n || "RECORDING" !== this._mousedownMode) t();
            }),
            C(this, "handleMouseDown", () => {
              this._mousedownMode = this.props.mode;
            });
        }
      }
      t.Z = v;
    },
    646156: function (e, t, n) {
      e.exports = { title: "title_d14717" };
    },
    955489: function (e, t, n) {
      e.exports = {
        recorderContainer: "recorderContainer_fb7bb2 " + n("520237").container,
        hasValue: "hasValue_fb7bb2",
        addKeybindButton: "addKeybindButton_fb7bb2 " + n("520237").button,
        containerDisabled: "containerDisabled_fb7bb2 " + n("520237").disabled,
        recorderLayout: "recorderLayout_fb7bb2 " + n("520237").layout,
        recording: "recording_fb7bb2",
        keybindInput: "keybindInput_fb7bb2 " + n("520237").input,
        editIcon: "editIcon_fb7bb2",
        text: "text_fb7bb2",
      };
    },
    520237: function (e, t, n) {
      n.r(
        (e.exports = {
          container: "container_c67e31",
          layout: "layout_c67e31",
          base: "base_c67e31",
          hiddenMessage: "hiddenMessage_c67e31 base_c67e31",
          input: "input_c67e31 base_c67e31",
          button: "button_c67e31",
          disabled: "disabled_c67e31",
        }),
      );
    },
  },
]);
//# sourceMappingURL=ce1c0037cedd1b7e0ad9.js.map
