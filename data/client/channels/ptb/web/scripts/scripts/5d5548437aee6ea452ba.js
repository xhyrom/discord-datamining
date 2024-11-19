"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51714"],
  {
    787885: function (t) {
      t.exports = "/assets/b22001ff9333d078c09c.svg";
    },
    875425: function (t, e, n) {
      n.d(e, {
        F: function () {
          return l;
        },
        s: function () {
          return s;
        },
      });
      let a = 36e5,
        s = 128,
        l = Object.freeze({
          MINUTES_30: 18e5,
          HOURS_1: 36e5,
          HOURS_4: 144e5,
          TODAY: "TODAY",
        });
    },
    720449: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return u;
        },
      });
      var a = n(913527),
        s = n.n(a),
        l = n(695346),
        i = n(626135),
        o = n(337953),
        r = n(981631);
      function u(t, e, n, a) {
        let u = t.trim();
        if (u.length > 0 || null != e) {
          var d;
          l.Ok.updateSetting({
            text: u.length > 0 ? u : "",
            expiresAtMs:
              null != n
                ? String(
                    s()()
                      .add((0, o.Z)(n), "ms")
                      .toDate()
                      .getTime(),
                  )
                : "0",
            emojiId: null != e && null != e.id ? e.id : "0",
            emojiName: null != e ? e.name : "",
            createdAtMs: String(s()().toDate().getTime()),
          }),
            i.default.track(r.rMx.CUSTOM_STATUS_UPDATED, {
              location: null != a ? a.location : null,
              emoji_type:
                null == (d = e) ? null : null != d.id ? "custom" : "unicode",
              text_len: u.length,
              clear_after: null != n ? "".concat(n) : null,
            });
        } else l.Ok.updateSetting(void 0);
      }
    },
    337953: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var a = n(512722),
        s = n.n(a),
        l = n(875425);
      function i(t) {
        if (t !== l.F.TODAY)
          return (
            s()("number" == typeof t, "Invalid custom status clear timeout"), t
          );
        {
          let t = new Date();
          return (
            new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime() -
            t.getTime()
          );
        }
      }
    },
    211065: function (t, e, n) {
      n.r(e), n(47120);
      var a = n(200651),
        s = n(192379),
        l = n(512722),
        i = n.n(l),
        o = n(442837),
        r = n(481060),
        u = n(596454),
        d = n(410575),
        c = n(318766),
        m = n(907040),
        h = n(246133),
        p = n(695346),
        S = n(293273),
        g = n(594174),
        f = n(626135),
        j = n(51144),
        b = n(720449),
        x = n(875425),
        C = n(981631),
        N = n(185923),
        v = n(388032),
        T = n(473937);
      function I(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let _ = Object.values(x.F)
        .filter((t) => "number" == typeof t)
        .sort((t, e) => t - e);
      function O(t) {
        return (0, a.jsxs)("div", {
          className: T.statusOptionItem,
          children: [
            (0, a.jsx)(r.Status, {
              status: t.value,
              size: 10,
              className: T.statusIcon,
            }),
            t.label,
          ],
        });
      }
      let D = [
        {
          key: 1,
          value: r.StatusTypes.ONLINE,
          label: (0, j.u5)(r.StatusTypes.ONLINE),
        },
        {
          key: 2,
          value: r.StatusTypes.IDLE,
          label: (0, j.u5)(r.StatusTypes.IDLE),
        },
        {
          key: 3,
          value: r.StatusTypes.DND,
          label: (0, j.u5)(r.StatusTypes.DND),
        },
        {
          key: 4,
          value: r.StatusTypes.INVISIBLE,
          label: (0, j.u5)(r.StatusTypes.INVISIBLE),
        },
      ];
      class y extends s.PureComponent {
        componentDidMount() {
          let { sourceAnalyticsLocations: t, sourceAnalyticsContext: e } =
            this.props;
          f.default.track(C.rMx.OPEN_MODAL, {
            source: null == e ? void 0 : e.location,
            type: C.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == e ? void 0 : e.loadId,
            location_stack: t,
          });
        }
        get clearAfterOptions() {
          return [
            { key: 1, value: x.F.TODAY, label: v.intl.string(v.t.GQmLra) },
            {
              key: 2,
              value: x.F.HOURS_4,
              label: v.intl.formatToPlainString(v.t.Rea2gY, { hours: 4 }),
            },
            {
              key: 3,
              value: x.F.HOURS_1,
              label: v.intl.formatToPlainString(v.t.Rea2gY, { hours: 1 }),
            },
            {
              key: 4,
              value: x.F.MINUTES_30,
              label: v.intl.formatToPlainString(v.t.TS3eJS, { minutes: 30 }),
            },
            { key: 5, value: null, label: v.intl.string(v.t.bRn8cn) },
          ];
        }
        get analyticsLocation() {
          return { page: C.ZY5.CUSTOM_STATUS_MODAL };
        }
        getEmojiButtonRenderer() {
          let { emojiInfo: t } = this.state;
          return null == t
            ? null
            : () =>
                (0, a.jsx)(u.Z, {
                  className: T.emoji,
                  emojiId: t.id,
                  emojiName: t.name,
                  animated: !!t.animated,
                });
        }
        renderCustomStatusInput() {
          let { user: t } = this.props,
            { text: e, emojiInfo: n } = this.state;
          return (0, a.jsx)(r.FormSection, {
            className: T.formGroup,
            title: v.intl.formatToPlainString(v.t["/w9pHx"], {
              username: t.username,
            }),
            children: (0, a.jsxs)("div", {
              className: T.inputContainer,
              children: [
                (0, a.jsx)("div", {
                  className: T.emojiButtonContainer,
                  children: (0, a.jsx)(r.Popout, {
                    renderPopout: this.renderEmojiPicker,
                    position: "left",
                    animation: r.Popout.Animation.NONE,
                    align: "top",
                    children: (t, e) => {
                      let { isShown: n } = e;
                      return (0, a.jsx)(c.Z, {
                        ...t,
                        active: n,
                        className: T.emojiButton,
                        tabIndex: 0,
                        renderButtonContents: this.getEmojiButtonRenderer(),
                      });
                    },
                  }),
                }),
                (0, a.jsx)(r.TextInput, {
                  maxLength: x.s,
                  value: e,
                  inputClassName: T.input,
                  placeholder: v.intl.string(v.t["zYR38/"]),
                  onChange: this.handleStatusChange,
                  onKeyPress: this.handleKeyPress,
                  autoFocus: !0,
                }),
                e.length > 0 || null != n
                  ? (0, a.jsx)(r.Button, {
                      focusProps: {
                        offset: { top: 8, bottom: 8, left: -2, right: -2 },
                      },
                      className: T.clearButton,
                      onClick: this.handleClearStatus,
                      look: r.Button.Looks.BLANK,
                      size: r.Button.Sizes.NONE,
                      children: (0, a.jsx)(r.CircleXIcon, {
                        size: "md",
                        color: "currentColor",
                        className: T.clearIcon,
                      }),
                    })
                  : null,
              ],
            }),
          });
        }
        renderClearAfter() {
          let { clearAfter: t } = this.state;
          return (0, a.jsx)(r.FormSection, {
            className: T.formGroup,
            title: v.intl.string(v.t.E45wvL),
            children: (0, a.jsx)(r.SingleSelect, {
              placeholder: v.intl.string(v.t.E45wvL),
              maxVisibleItems: 5,
              value: t,
              options: this.clearAfterOptions,
              onChange: this.handleChangeClearAfter,
            }),
          });
        }
        renderStatusInput() {
          let { status: t } = this.state;
          return (0, a.jsx)(r.FormSection, {
            className: T.formGroup,
            title: v.intl.string(v.t.zOdg0N),
            children: (0, a.jsx)(r.SingleSelect, {
              maxVisibleItems: 4,
              value: t,
              options: D,
              onChange: this.handleChangeStatus,
              renderOptionLabel: O,
            }),
          });
        }
        render() {
          let { transitionState: t, onClose: e } = this.props;
          return (0, a.jsx)(d.Z, {
            ...this.analyticsLocation,
            children: (0, a.jsxs)(r.ModalRoot, {
              transitionState: t,
              className: T.modalRoot,
              "aria-label": v.intl.string(v.t["/UonHB"]),
              children: [
                (0, a.jsxs)(r.ModalHeader, {
                  separator: !1,
                  className: T.headerContainer,
                  children: [
                    (0, a.jsx)("div", { className: T.art }),
                    (0, a.jsx)("div", {
                      className: T.header,
                      children: (0, a.jsx)(r.H, {
                        className: T.headerText,
                        children: v.intl.string(v.t["/UonHB"]),
                      }),
                    }),
                    (0, a.jsx)(r.ModalCloseButton, {
                      onClick: e,
                      className: T.modalCloseButton,
                    }),
                  ],
                }),
                (0, a.jsxs)(r.ModalContent, {
                  children: [
                    this.renderCustomStatusInput(),
                    this.renderClearAfter(),
                    (0, a.jsx)(r.FormDivider, { className: T.formDivider }),
                    this.renderStatusInput(),
                  ],
                }),
                (0, a.jsxs)(r.ModalFooter, {
                  children: [
                    (0, a.jsx)(r.Button, {
                      onClick: this.handleSubmit,
                      children: v.intl.string(v.t.R3BPHx),
                    }),
                    (0, a.jsx)(r.Button, {
                      onClick: e,
                      look: r.Button.Looks.LINK,
                      color: T.cancelButton,
                      children: v.intl.string(v.t["ETE/oK"]),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        constructor(...t) {
          super(...t),
            I(this, "state", {
              emojiInfo:
                null != this.props.customStatus
                  ? this.props.customStatus.emoji
                  : null,
              text:
                null != this.props.customStatus &&
                null != this.props.customStatus.state
                  ? this.props.customStatus.state
                  : "",
              clearAfter: (function () {
                var t, e, n;
                let a = p.Ok.getSetting();
                if (null == a || "" === a.expiresAtMs) return x.F.TODAY;
                let s = Number(a.expiresAtMs);
                if (isNaN(s)) return x.F.TODAY;
                let l = new Date(),
                  i = new Date(s);
                if (
                  ((e = l),
                  (n = i),
                  e.getFullYear() !== n.getFullYear() ||
                    e.getMonth() !== n.getMonth() ||
                    e.getDate() !== n.getDate())
                )
                  return x.F.TODAY;
                let o = Number(s) - Date.now();
                return null !== (t = _.find((t) => o <= t)) && void 0 !== t
                  ? t
                  : x.F.TODAY;
              })(),
              status: (function () {
                let t = p.co.getSetting();
                return D.some((e) => e.value === t) ? t : r.StatusTypes.ONLINE;
              })(),
            }),
            I(this, "handleClearStatus", () => {
              this.setState({ emojiInfo: null, text: "" });
            }),
            I(this, "handleSubmit", (t) => {
              t.preventDefault(), this.handleSaveStatus();
            }),
            I(this, "handleStatusChange", (t) => {
              this.setState({ text: t });
            }),
            I(this, "handleEmojiChange", (t) => {
              if (null == t) return;
              let e =
                null != t.id
                  ? { id: t.id, name: t.name, animated: t.animated }
                  : {
                      id: null,
                      name: t.optionallyDiverseSequence,
                      animated: !1,
                    };
              this.setState({ emojiInfo: e });
            }),
            I(this, "handleChangeClearAfter", (t) => {
              this.setState({ clearAfter: t });
            }),
            I(this, "handleChangeStatus", (t) => {
              this.setState({ status: t });
            }),
            I(this, "handleSaveStatus", () => {
              let { sourceAnalyticsContext: t, onClose: e } = this.props,
                {
                  emojiInfo: n,
                  text: a,
                  clearAfter: s,
                  status: l,
                } = this.state,
                i = p.co.getSetting();
              i !== l && (0, h.Z)(l, i, t), (0, b.Z)(a, n, s, t), e();
            }),
            I(this, "handleKeyPress", (t) => {
              t.which === C.yXg.ENTER && this.handleSaveStatus();
            }),
            I(this, "renderEmojiPicker", (t) => {
              let { closePopout: e } = t,
                { onClose: n } = this.props;
              return (0, a.jsx)(m.Z, {
                closePopout: e,
                onSelectEmoji: (t, n) => {
                  this.handleEmojiChange(t), n && e();
                },
                pickerIntention: N.Hz.STATUS,
                onNavigateAway: n,
              });
            });
        }
      }
      e.default = o.ZP.connectStores(
        [S.Z, g.default],
        () => {
          let t = g.default.getCurrentUser();
          return (
            i()(null != t, "CustomStatusModal: user cannot be null"),
            { customStatus: S.Z.getCustomStatusActivity(), user: t }
          );
        },
        { forwardRef: !0 },
      )(y);
    },
    473937: function (t, e, n) {
      t.exports = {
        formGroup: "formGroup_d5bea8",
        formDivider: "formDivider_d5bea8",
        modalRoot: "modalRoot_d5bea8",
        inputContainer: "inputContainer_d5bea8",
        header: "header_d5bea8",
        modalCloseButton: "modalCloseButton_d5bea8",
        headerText: "headerText_d5bea8",
        emojiButton: "emojiButton_d5bea8",
        emojiButtonContainer: "emojiButtonContainer_d5bea8",
        emoji: "emoji_d5bea8",
        input: "input_d5bea8",
        clearButton: "clearButton_d5bea8",
        clearIcon: "clearIcon_d5bea8",
        headerContainer: "headerContainer_d5bea8",
        art: "art_d5bea8",
        cancelButton: "cancelButton_d5bea8",
        statusOptionItem: "statusOptionItem_d5bea8",
        statusIcon: "statusIcon_d5bea8",
      };
    },
  },
]);
//# sourceMappingURL=5d5548437aee6ea452ba.js.map
