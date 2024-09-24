"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66063"],
  {
    691435: function (e) {
      e.exports = "/assets/0465f5c853ca9dd2cf24.svg";
    },
    825209: function (e, t, n) {
      n(47120), n(653041);
      var s = n(735250),
        i = n(470079),
        r = n(921738),
        o = n.n(r),
        l = n(213005),
        a = n(455279),
        d = n(358085),
        u = n(998502),
        c = n(981631);
      function h(e, t, n) {
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
      class p extends i.PureComponent {
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
          let { codes: n, mode: i } = this.state,
            { disabled: r } = this.props;
          return (
            m
              ? ((t = u.ZP.getDiscordUtils().inputCaptureRegisterElement),
                (e = this.handleNativeChange))
              : !d.isPlatformEmbedded && (e = this.handleComboKeys),
            (0, s.jsx)(a.Z, {
              disabled: r,
              value: n,
              mode: i,
              onClick: this.toggleRecordMode,
              onChange: e,
              registerNativeRecorder: t,
              disableOnClickWhileRecording: m,
            })
          );
        }
        constructor(e) {
          super(e),
            h(this, "_input", void 0),
            h(this, "gs", void 0),
            h(this, "_mounted", !1),
            h(this, "recordStart", () => {
              d.isPlatformEmbedded &&
                !m &&
                ((this.gs = new l.Z()),
                this.gs.on("change", this.handleGSChange)),
                this.setState({ mode: a.c.RECORDING });
            }),
            h(this, "recordEnd", () => {
              this.cleanUp(), this.setState({ mode: a.c.DEFAULT });
            }),
            h(this, "toggleRecordMode", () => {
              this.state.mode === a.c.DEFAULT
                ? this.recordStart()
                : this.recordEnd();
            }),
            h(this, "handleComboKeys", (e, t, n) => {
              if ((n.preventDefault(), "keydown" === n.type)) {
                let e = t.map((e) => [
                    c.MoX.KEYBOARD_KEY,
                    o()(e),
                    c.CgE.BROWSER,
                  ]),
                  { keyCode: s } = n;
                null ==
                  e.find((e) => {
                    let [, t] = e;
                    return s === t;
                  }) && e.push([c.MoX.KEYBOARD_KEY, s, c.CgE.BROWSER]),
                  this.handleComboChange(e);
              }
            }),
            h(this, "handleGSChange", (e) => {
              if (!1 === this._mounted) return;
              let t = [...e.combo];
              this.handleComboChange(t);
            }),
            h(this, "handleNativeChange", (e) => {
              e.length > 0 && this.handleComboChange(e), this.recordEnd();
            });
          let { defaultValue: t } = e;
          this.state = { codes: t, mode: a.c.DEFAULT };
        }
      }
      t.Z = p;
    },
    344516: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        }),
        n(47120);
      var s = n(735250),
        i = n(470079),
        r = n(392711),
        o = n.n(r),
        l = n(442837),
        a = n(481060),
        d = n(846027),
        u = n(825209),
        c = n(600164),
        h = n(313201),
        m = n(382577),
        p = n(131951),
        g = n(36703),
        _ = n(981631),
        b = n(65154),
        E = n(689938),
        C = n(300247),
        R = n(113207);
      function f(e, t, n) {
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
      let T = (0, h.hQ)(),
        O = (0, h.hQ)(),
        M = (0, h.hQ)();
      class x extends i.PureComponent {
        handleValueRender(e) {
          return "".concat((-((100 - e) * 1)).toFixed(0), "dB");
        }
        renderAutomaticVADToggle() {
          let { autoThreshold: e } = this.props;
          return (0, s.jsx)(h.FG, {
            children: (t) =>
              (0, s.jsxs)(c.Z, {
                className: R.marginBottom4,
                children: [
                  (0, s.jsx)(a.FormTitle, {
                    tag: a.FormTitleTags.H3,
                    children: (0, s.jsx)("label", {
                      htmlFor: t,
                      children: E.Z.Messages.FORM_LABEL_AUTOMATIC_VAD,
                    }),
                  }),
                  (0, s.jsx)(a.Switch, {
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
            return (0, s.jsx)(a.Slider, {
              initialValue: t + 100,
              onValueRender: this.handleValueRender,
              onValueChange: this.handleSensitivityChange,
              "aria-label": E.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY,
            });
        }
        render() {
          return (0, s.jsxs)(a.FormItem, {
            title: E.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY,
            className: R.marginBottom8,
            children: [this.renderAutomaticVADToggle(), this.renderSlider()],
          });
        }
        constructor(...e) {
          super(...e),
            f(this, "handleAutoThresholdChange", (e) => {
              let { onThresholdChange: t, threshold: n } = this.props;
              null == t || t(n, e);
            }),
            f(this, "handleSensitivityChange", (e) => {
              let { onThresholdChange: t, autoThreshold: n } = this.props;
              null == t || t(-((100 - e) * 1), n);
            });
        }
      }
      let I = l.ZP.connectStores([p.Z], (e) => {
        let { mediaEngineContext: t } = e;
        return {
          inputVolume: p.Z.getInputVolume(),
          outputVolume: p.Z.getOutputVolume(),
          inputDeviceId: p.Z.getInputDeviceId(),
          inputDevices: p.Z.getInputDevices(),
          outputDevices: p.Z.getOutputDevices(),
          outputDeviceId: p.Z.getOutputDeviceId(),
          inputMode: p.Z.getMode(t),
          shortcut: p.Z.getModeOptions(t).shortcut,
          vadThreshold: p.Z.getModeOptions(t).threshold,
          vadAutoThreshold: p.Z.getModeOptions(t).autoThreshold,
          delay: p.Z.getModeOptions(t).delay,
        };
      })((e) => {
        let t,
          {
            mediaEngineContext: n,
            inputMode: r,
            shortcut: l,
            delay: c,
            vadThreshold: h,
            vadAutoThreshold: m,
            inputDevices: p,
            inputDeviceId: b,
            inputVolume: C,
            outputDeviceId: f,
            outputDevices: I,
            outputVolume: D,
            speaking: Z = !1,
          } = e,
          v = o().first(p),
          N = null != v && v.disabled,
          j = o().first(I),
          S = null != j && j.disabled,
          U = [
            { value: _.pM4.VOICE_ACTIVITY, name: E.Z.Messages.INPUT_MODE_VAD },
            { value: _.pM4.PUSH_TO_TALK, name: E.Z.Messages.INPUT_MODE_PTT },
          ];
        return (
          (t =
            r === _.pM4.PUSH_TO_TALK
              ? (0, s.jsxs)(i.Fragment, {
                  children: [
                    (0, s.jsx)(a.FormItem, {
                      title: E.Z.Messages.FORM_LABEL_SHORTCUT,
                      className: R.marginBottom20,
                      children: (0, s.jsx)(u.Z, {
                        defaultValue: l,
                        onChange: (e) => d.Z.setMode(r, { shortcut: e }, n),
                      }),
                    }),
                    (0, s.jsxs)(a.FormItem, {
                      className: R.marginBottom8,
                      children: [
                        (0, s.jsx)(a.FormTitle, {
                          id: T,
                          children: E.Z.Messages.INPUT_MODE_PTT_RELEASE_DELAY,
                        }),
                        (0, s.jsx)(a.Slider, {
                          initialValue: c,
                          onValueChange: (e) => d.Z.setMode(r, { delay: e }, n),
                          onValueRender: (e) =>
                            e >= 1e3
                              ? ((e /= 1e3), "".concat(e.toFixed(2), "s"))
                              : "".concat(e.toFixed(0), "ms"),
                          maxValue: _.qhL,
                          "aria-labelledby": T,
                        }),
                      ],
                    }),
                  ],
                })
              : (0, s.jsx)(x, {
                  speaking: Z,
                  inputMode: r,
                  threshold: h,
                  autoThreshold: m,
                  onThresholdChange: (e, t) =>
                    d.Z.setMode(r, { threshold: e, autoThreshold: t }, n),
                })),
          (0, s.jsxs)(i.Fragment, {
            children: [
              (0, s.jsx)(a.FormItem, {
                title: E.Z.Messages.FORM_LABEL_INPUT_DEVICE,
                className: R.marginBottom20,
                children: (0, s.jsx)(a.SingleSelect, {
                  value: b,
                  onChange: (e) =>
                    d.Z.setInputDevice(e, { location: "Voice Settings" }),
                  options: o().map(p, (e) => {
                    let { id: t, name: n } = e;
                    return { value: t, label: n };
                  }),
                  isDisabled: N,
                }),
              }),
              (0, s.jsxs)(a.FormItem, {
                className: R.marginBottom20,
                children: [
                  (0, s.jsx)(a.FormTitle, {
                    id: O,
                    children: E.Z.Messages.FORM_LABEL_INPUT_VOLUME,
                  }),
                  (0, s.jsx)(a.Slider, {
                    initialValue: (0, g.P)(C),
                    asValueChanges: (e) => d.Z.setInputVolume((0, g.A)(e)),
                    "aria-labelledby": O,
                  }),
                ],
              }),
              (0, s.jsx)(a.FormItem, {
                title: E.Z.Messages.FORM_LABEL_OUTPUT_DEVICE,
                className: R.marginBottom20,
                children: (0, s.jsx)(a.SingleSelect, {
                  value: f,
                  onChange: (e) =>
                    d.Z.setOutputDevice(e, { location: "Voice Settings" }),
                  options: o().map(I, (e) => {
                    let { id: t, name: n } = e;
                    return { value: t, label: n };
                  }),
                  isDisabled: S,
                }),
              }),
              (0, s.jsxs)(a.FormItem, {
                className: R.marginBottom20,
                children: [
                  (0, s.jsx)(a.FormTitle, {
                    id: M,
                    children: E.Z.Messages.FORM_LABEL_OUTPUT_VOLUME,
                  }),
                  (0, s.jsx)(a.Slider, {
                    initialValue: (0, g.P)(D),
                    maxValue: 200,
                    asValueChanges: (e) => d.Z.setOutputVolume((0, g.A)(e)),
                    "aria-labelledby": M,
                  }),
                ],
              }),
              (0, s.jsx)(a.FormItem, {
                title: E.Z.Messages.FORM_LABEL_INPUT_MODE,
                className: R.marginBottom20,
                children: (0, s.jsx)(a.RadioGroup, {
                  onChange: (e) => {
                    let { value: t } = e;
                    return d.Z.setMode(t, {}, n);
                  },
                  options: U,
                  value: r,
                }),
              }),
              t,
            ],
          })
        );
      });
      function D(e) {
        var t;
        return (
          (0, m.Z)(() => {
            null != _.e3s && e.onClose();
          }),
          (0, s.jsxs)(a.ModalRoot, {
            transitionState: e.transitionState,
            "aria-label": E.Z.Messages.VOICE_SETTINGS,
            children: [
              (0, s.jsxs)(a.ModalHeader, {
                children: [
                  (0, s.jsxs)(c.Z.Child, {
                    children: [
                      (0, s.jsx)(a.FormTitle, {
                        tag: "h1",
                        className: R.marginReset,
                        children: E.Z.Messages.VOICE_SETTINGS,
                      }),
                      (0, s.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        className: C.title,
                        children: e.title,
                      }),
                    ],
                  }),
                  (0, s.jsx)(c.Z.Child, {
                    grow: 0,
                    children: (0, s.jsx)(a.ModalCloseButton, {
                      onClick: e.onClose,
                    }),
                  }),
                ],
              }),
              (0, s.jsx)(a.ModalContent, {
                children: (0, s.jsx)(I, {
                  mediaEngineContext:
                    null !== (t = e.mediaEngineContext) && void 0 !== t
                      ? t
                      : b.Yn.DEFAULT,
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
      var s = n(836560),
        i = n(358085),
        r = n(998502),
        o = n(13140),
        l = n(981631);
      let a = [],
        d = (e, t, n) => {
          let s = (0, i.isWindows)() ? 0 : 1;
          if (e !== l.MoX.MOUSE_BUTTON || n !== s)
            a.forEach((s) => s._handleEvent(e, t, n));
        };
      class u extends s.EventEmitter {
        destroy() {
          this.removeAllListeners(),
            0 === (a = a.filter((e) => e !== this)).length &&
              r.ZP.setOnInputEventCallback(null);
        }
        toString() {
          return (0, o.BB)(this.combo);
        }
        _handleEvent(e, t, n) {
          0 === t
            ? (this.combo = this.combo.filter((t) => {
                let [s, i] = t;
                return !(s === e && i === n);
              }))
            : (this.combo.push([e, n, (0, o.dU)()]), this.emit("change", this));
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
          return s;
        },
      }),
        n(47120);
      var s,
        i,
        r = n(735250),
        o = n(470079),
        l = n(120356),
        a = n.n(l),
        d = n(879443),
        u = n.n(d),
        c = n(392711),
        h = n.n(c),
        m = n(481060),
        p = n(600164),
        g = n(13140),
        _ = n(689938),
        b = n(98256);
      function E(e, t, n) {
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
      ((i = s || (s = {})).DEFAULT = "DEFAULT"), (i.RECORDING = "RECORDING");
      let C = { DEFAULT: b.__invalid_default, RECORDING: b.recording };
      class R extends o.PureComponent {
        componentWillUnmount() {
          null != this._unregisterNativeRecorder &&
            this._unregisterNativeRecorder();
        }
        componentDidUpdate(e) {
          let { mode: t } = this.props,
            { mode: n } = e;
          if (n === t) return;
          let { _inputRef: s } = this;
          if (null == s.current) return;
          let { activeElement: i } = document;
          "DEFAULT" === t && s.current === i && s.current.blur(),
            "RECORDING" === t && s.current !== i && s.current.focus();
        }
        render() {
          let e;
          let { mode: t, value: n, disabled: s } = this.props,
            i = (0, g.BB)(n, !0);
          e =
            "RECORDING" === t
              ? _.Z.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING
              : 0 === n.length
                ? _.Z.Messages.SHORTCUT_RECORDER_BUTTON
                : _.Z.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
          let o = "DEFAULT" === t && n.length > 0;
          return (0, r.jsx)(m.FocusRing, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, r.jsx)("div", {
              onClick: this.handleClick,
              onMouseDown: this.handleMouseDown,
              ref: this._containerRef,
              className: a()(b.recorderContainer, C[t], {
                [b.hasValue]: o,
                [b.containerDisabled]: s,
              }),
              children: (0, r.jsxs)(p.Z, {
                className: b.recorderLayout,
                children: [
                  (0, r.jsx)(p.Z.Child, {
                    className: b.keybindInput,
                    children: (0, r.jsx)("input", {
                      id: this._inputId,
                      placeholder: _.Z.Messages.SHORTCUT_RECORDER_NO_BIND,
                      type: "text",
                      ref: this.setInputRef,
                      readOnly: !0,
                      value: i,
                      disabled: "RECORDING" !== this.props.mode || s,
                    }),
                  }),
                  (0, r.jsx)(p.Z, {
                    shrink: 1,
                    grow: 0,
                    style: { margin: 0 },
                    children: (0, r.jsxs)(m.Button, {
                      className: b.addKeybindButton,
                      disabled: s,
                      onClick: (e) => {
                        e.stopPropagation(),
                          e.preventDefault(),
                          this.handleClick(e);
                      },
                      size: m.Button.Sizes.MIN,
                      color: m.ButtonColors.PRIMARY,
                      children: [
                        (0, r.jsx)("span", { className: b.text, children: e }),
                        (0, r.jsx)("span", { className: b.editIcon }),
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
            E(this, "_inputId", h().uniqueId("key-recorder-")),
            E(this, "_unregisterNativeRecorder", null),
            E(this, "_mousedownMode", null),
            E(this, "_inputRef", o.createRef()),
            E(this, "_containerRef", o.createRef()),
            E(this, "setInputRef", (e) => {
              var t;
              let { registerNativeRecorder: n, onChange: s } = this.props;
              (this._inputRef.current = e),
                null === (t = this._unregisterNativeRecorder) ||
                  void 0 === t ||
                  t.call(this),
                null != e &&
                  (null != n && null != s
                    ? (this._unregisterNativeRecorder = n(e.id, s))
                    : null != s && (new (u())(e).handleKey = s));
            }),
            E(this, "handleClick", (e) => {
              e.stopPropagation(), e.preventDefault();
              let { onClick: t, disableOnClickWhileRecording: n } = this.props;
              if (!n || "RECORDING" !== this._mousedownMode) t();
            }),
            E(this, "handleMouseDown", () => {
              this._mousedownMode = this.props.mode;
            });
        }
      }
      t.Z = R;
    },
    382577: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(470079),
        i = n(570140);
      function r(e) {
        let t = (0, s.useRef)(e);
        (0, s.useEffect)(() => {
          t.current = e;
        }, [e]),
          (0, s.useEffect)(() => {
            if (__OVERLAY__) {
              function e(e) {
                e.locked && t.current();
              }
              return (
                i.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", e),
                () => {
                  i.Z.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e);
                }
              );
            }
          }, []);
      }
    },
    300247: function (e, t, n) {
      e.exports = { title: "title_d14717" };
    },
    98256: function (e, t, n) {
      e.exports = {
        recorderContainer: "recorderContainer_fb7bb2 " + n("903884").container,
        hasValue: "hasValue_fb7bb2",
        addKeybindButton: "addKeybindButton_fb7bb2 " + n("903884").button,
        containerDisabled: "containerDisabled_fb7bb2 " + n("903884").disabled,
        recorderLayout: "recorderLayout_fb7bb2 " + n("903884").layout,
        recording: "recording_fb7bb2",
        keybindInput: "keybindInput_fb7bb2 " + n("903884").input,
        editIcon: "editIcon_fb7bb2",
        text: "text_fb7bb2",
      };
    },
    903884: function (e, t, n) {
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
//# sourceMappingURL=f400e50cb08f44f333fb.js.map
