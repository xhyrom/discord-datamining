"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78273"],
  {
    556012: function (t, n, e) {
      e.d(n, {
        c: function () {
          return _;
        },
      });
      var r = e(481060),
        l = e(933557),
        i = e(592125),
        a = e(699516),
        o = e(594174),
        u = e(273504),
        c = e(590433),
        s = e(388032);
      let d = (t) => {
          if (t === u.jj.QUARANTINE_USER) return !1;
          return !0;
        },
        j = (t) => {
          switch (t) {
            case u.jj.BLOCK_MESSAGE:
            case u.jj.FLAG_TO_CHANNEL:
            case u.jj.USER_COMMUNICATION_DISABLED:
            case u.jj.QUARANTINE_USER:
              return !0;
            default:
              return !1;
          }
        },
        A = (t) => {
          switch (t) {
            case u.jj.BLOCK_MESSAGE:
              return s.intl.string(s.t.d1ab8v);
            case u.jj.FLAG_TO_CHANNEL:
              return s.intl.string(s.t["Y+Vmvb"]);
            case u.jj.USER_COMMUNICATION_DISABLED:
              return s.intl.string(s.t.Xz2njI);
            case u.jj.QUARANTINE_USER:
              return s.intl.string(s.t.NPO8eX);
          }
        },
        S = function (t) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : u.fX.KEYWORD;
          switch (t) {
            case u.jj.BLOCK_MESSAGE:
              switch (n) {
                case u.fX.MENTION_SPAM:
                  return s.intl.string(s.t["8hdId3"]);
                case u.fX.ML_SPAM:
                  return s.intl.string(s.t.tLQYs7);
                default:
                  return s.intl.string(s.t.xAAocn);
              }
            case u.jj.FLAG_TO_CHANNEL:
              return s.intl.string(s.t.BHAXfX);
            case u.jj.USER_COMMUNICATION_DISABLED:
              return s.intl.string(s.t["bNK+gI"]);
            case u.jj.QUARANTINE_USER:
              return s.intl.string(s.t["/7nL5e"]);
          }
        },
        E = (t, n) => {
          var e, r, d;
          switch (t) {
            case u.jj.QUARANTINE_USER:
            case u.jj.BLOCK_MESSAGE:
              return null;
            case u.jj.FLAG_TO_CHANNEL: {
              let t =
                null == n
                  ? void 0
                  : null === (e = n.metadata) || void 0 === e
                    ? void 0
                    : e.channelId;
              if (null == t) return null;
              let r = i.Z.getChannel(t);
              if (null == r) return null;
              let u = (0, l.F6)(r, o.default, a.Z);
              return s.intl.format(s.t.xQXnkJ, { channelName: u });
            }
            case u.jj.USER_COMMUNICATION_DISABLED: {
              let t =
                  null !==
                    (d =
                      null == n
                        ? void 0
                        : null === (r = n.metadata) || void 0 === r
                          ? void 0
                          : r.durationSeconds) && void 0 !== d
                    ? d
                    : 0,
                e = (0, c.L9)(t);
              if (null == e) return null;
              return s.intl.format(s.t.AFmbfX, { duration: e });
            }
          }
        },
        N = (t) => {
          switch (t) {
            case u.jj.BLOCK_MESSAGE:
              return r.CircleXIcon;
            case u.jj.FLAG_TO_CHANNEL:
              return r.TextIcon;
            case u.jj.USER_COMMUNICATION_DISABLED:
              return r.ClockWarningIcon;
            case u.jj.QUARANTINE_USER:
              return r.ChatXIcon;
          }
        };
      function _(t, n, e) {
        var l, i, a, o;
        return j(t)
          ? {
              headerText: null !== (l = A(t)) && void 0 !== l ? l : "",
              descriptionText: null !== (i = S(t, e)) && void 0 !== i ? i : "",
              helperText: null !== (a = E(t, n)) && void 0 !== a ? a : null,
              icon: null !== (o = N(t)) && void 0 !== o ? o : r.CircleXIcon,
              isEditable: d(t),
            }
          : null;
      }
    },
    41767: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return j;
          },
        }),
        e(47120);
      var r = e(200651),
        l = e(192379),
        i = e(481060),
        a = e(313201),
        o = e(556012),
        u = e(590433),
        c = e(388032),
        s = e(704409);
      let d = (t) => {
        var n;
        let { duration: e, onSelectDuration: l } = t,
          a = (0, u.tr)(),
          o = a.find((t) => t.value === e);
        return (0, r.jsx)(i.FormItem, {
          className: s.durationSelector,
          required: !0,
          children: (0, r.jsx)(i.SearchableSelect, {
            value:
              null !== (n = null == o ? void 0 : o.value) && void 0 !== n
                ? n
                : u.UK.DURATION_60_SEC,
            options: a,
            onChange: (t) => {
              let n = a.find((n) => n.value === t);
              null != n && l(n.value);
            },
            placeholder: c.intl.string(c.t.k7yo6u),
          }),
        });
      };
      function j(t) {
        let {
            action: n,
            triggerType: e,
            isEdit: j,
            onUpdateDuration: A,
            onClose: S,
            transitionState: E,
          } = t,
          N = (0, a.Dt)(),
          [_, C] = l.useState(() =>
            null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0
              ? n.metadata.durationSeconds
              : u.UK.DURATION_60_SEC,
          ),
          h = (0, o.c)(n.type, n, e);
        if (null == h) return null;
        let { headerText: I } = h;
        return (0, r.jsxs)(i.ModalRoot, {
          transitionState: E,
          "aria-labelledby": N,
          size: i.ModalSize.SMALL,
          children: [
            (0, r.jsxs)(i.ModalContent, {
              className: s.actionContentContainer,
              children: [
                (0, r.jsx)(i.Heading, {
                  id: N,
                  color: "header-primary",
                  variant: "heading-lg/semibold",
                  className: s.header,
                  children: I,
                }),
                (0, r.jsx)(i.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: c.intl.string(c.t.DWGBAg),
                }),
                (0, r.jsx)(d, {
                  duration: _,
                  onSelectDuration: (t) => {
                    C(t);
                  },
                }),
              ],
            }),
            (0, r.jsxs)(i.ModalFooter, {
              children: [
                (0, r.jsx)(i.Button, {
                  onClick: () => {
                    A(_);
                  },
                  color: i.Button.Colors.BRAND,
                  size: i.Button.Sizes.SMALL,
                  children: j
                    ? c.intl.string(c.t.bt75u7)
                    : c.intl.string(c.t.R3BPHx),
                }),
                (0, r.jsx)(i.Button, {
                  onClick: () => {
                    S();
                  },
                  color: i.Button.Colors.TRANSPARENT,
                  look: i.Button.Looks.LINK,
                  children: c.intl.string(c.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    704409: function (t, n, e) {
      t.exports = {
        actionContentContainer: "actionContentContainer_e7c5e0",
        durationSelector: "durationSelector_e7c5e0",
        header: "header_e7c5e0",
      };
    },
  },
]);
//# sourceMappingURL=87de810eb6792bd3e3c4.js.map
