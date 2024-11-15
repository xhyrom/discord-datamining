"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8739"],
  {
    69004: function (e, t, n) {
      n(47120);
      class l extends Map {
        set(e, t) {
          return (
            this.size >= this.maxSize && this.delete(this.keys().next().value),
            super.set(e, t)
          );
        }
        constructor(e) {
          var t, n, l;
          super(),
            (t = this),
            (l = void 0),
            (n = "maxSize") in t
              ? Object.defineProperty(t, n, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = l),
            (this.maxSize = e);
        }
      }
      t.Z = l;
    },
    970184: function (e, t, n) {
      n.d(t, {
        CJ: function () {
          return b;
        },
        Ee: function () {
          return M;
        },
        Il: function () {
          return y;
        },
      }),
        n(47120),
        n(789020);
      var l = n(200651),
        u = n(192379),
        i = n(512722),
        r = n.n(i),
        a = n(442837),
        o = n(570140),
        d = n(911969),
        c = n(71619),
        s = n(282397),
        E = n(622449),
        T = n(188597),
        I = n(41776),
        f = n(665906),
        p = n(592125),
        m = n(271383),
        S = n(607744),
        C = n(594174),
        _ = n(280501),
        g = n(892902),
        N = n(359232);
      let h = (e) => {
          switch (e.type) {
            case d.re.BUTTON:
              return e.style !== d.ZJ.LINK;
            case d.re.STRING_SELECT:
            case d.re.USER_SELECT:
            case d.re.ROLE_SELECT:
            case d.re.MENTIONABLE_SELECT:
            case d.re.CHANNEL_SELECT:
              return !0;
            case d.re.ACTION_ROW:
            case d.re.TEXT_INPUT:
              return !1;
          }
        },
        v = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = _.gH.NORMAL;
          return (
            null != e &&
              e.state !== E.F.FAILED &&
              (e.data.interactionType === d.B8.MESSAGE_COMPONENT &&
              e.data.componentId === t.id
                ? (l = _.gH.LOADING)
                : h(t) && (l = _.gH.DISABLED)),
            n && (l = _.gH.DISABLED),
            l
          );
        },
        O = (e) => {
          let t = p.Z.getChannel(e),
            n = (0, a.e7)(
              [S.Z],
              () =>
                (null == t ? void 0 : t.guild_id) == null ||
                S.Z.canChatInGuild(t.guild_id),
              [t],
            ),
            l = (0, a.e7)(
              [I.Z],
              () =>
                (null == t ? void 0 : t.guild_id) != null &&
                I.Z.isLurking(t.guild_id),
              [t],
            ),
            u = (0, a.e7)([m.ZP, C.default], () => {
              var e, n;
              let l = C.default.getCurrentUser();
              return (
                null !==
                  (n =
                    (null == t ? void 0 : t.guild_id) != null && null != l
                      ? null ===
                          (e = m.ZP.getMember(
                            null == t ? void 0 : t.guild_id,
                            l.id,
                          )) || void 0 === e
                        ? void 0
                        : e.isPending
                      : null) &&
                void 0 !== n &&
                n
              );
            }),
            [, i] = (0, c.AB)(null == t ? void 0 : t.guild_id),
            r = (0, f.tc)(t);
          return (
            !!(
              !n ||
              l ||
              u ||
              (null == t ? void 0 : t.isLockedThread()) ||
              ((null == t ? void 0 : t.isArchivedThread()) && !r)
            ) ||
            !!i ||
            !1
          );
        };
      function A(e, t) {
        let n = u.useContext(Z),
          [l, i] = u.useState(null),
          r = u.useCallback(
            (t) => {
              let n = (0, N.Z)(e, t);
              return i(n), null == n;
            },
            [e],
          );
        return (
          u.useEffect(() => {
            var e;
            let l = () => r(t);
            return (
              null === (e = n.validators) || void 0 === e || e.add(l),
              () => {
                var e;
                null === (e = n.validators) || void 0 === e || e.delete(l);
              }
            );
          }, [n.validators, r, t]),
          { error: l, validate: r }
        );
      }
      function L(e, t, n) {
        var l;
        let i = (0, a.e7)([g.Z], () =>
            g.Z.getInteractionComponentState(e.id, t.id),
          ),
          r = (0, a.e7)([s.ZP], () => s.ZP.getInteraction(e), [e]),
          o = O(e.channel_id),
          { error: d, validate: c } = A(t, i),
          E = null !== (l = e.applicationId) && void 0 !== l ? l : e.author.id;
        return {
          state: i,
          executeStateUpdate: u.useCallback(
            (n) => {
              if (!c(n)) return !1;
              let l = p.Z.getChannel(e.channel_id);
              return (
                null != l &&
                  null != t.customId &&
                  (0, T.tM)({
                    componentType: t.type,
                    messageId: e.id,
                    messageFlags: e.flags,
                    customId: t.customId,
                    componentId: t.id,
                    applicationId: E,
                    channelId: l.id,
                    guildId: l.guild_id,
                    localState: n,
                  }),
                !0
              );
            },
            [e.channel_id, e.flags, e.id, t.customId, t.type, t.id, E, c],
          ),
          isDisabled: o,
          visualState: v(r, t),
          error: d,
        };
      }
      function R(e, t, n) {
        let l = (0, a.e7)([g.Z], () =>
            g.Z.getInteractionComponentState(e.customId, t.id),
          ),
          { error: i, validate: r } = A(t, l),
          d = u.useCallback(
            (n) =>
              null == n ||
              (o.Z.dispatch({
                type: "SET_INTERACTION_COMPONENT_STATE",
                rootContainerId: e.customId,
                componentId: t.id,
                state: n,
              }),
              !!r(n) || !1),
            [e.customId, t.id, r],
          );
        return (
          u.useEffect(() => {
            d(n);
          }, []),
          {
            state: l,
            executeStateUpdate: d,
            isDisabled: !1,
            visualState: _.gH.NORMAL,
            error: i,
          }
        );
      }
      let Z = u.createContext(null);
      function y(e) {
        let { children: t, message: n, modal: i, validators: a } = e,
          o = u.useMemo(
            () =>
              null != n
                ? {
                    useComponentState: L.bind(null, n),
                    channelId: n.channel_id,
                    message: n,
                    validators: a,
                  }
                : (r()(null != i, "modal is present if message is not"),
                  {
                    useComponentState: R.bind(null, i),
                    channelId: i.channelId,
                    modal: i,
                    validators: a,
                  }),
            [n, i, a],
          );
        return (0, l.jsx)(Z.Provider, { value: o, children: t });
      }
      function M(e, t) {
        return u.useContext(Z).useComponentState(e, t);
      }
      function b() {
        return u.useContext(Z);
      }
    },
    471073: function (e, t, n) {
      let l, u, i, r, a;
      n.d(t, {
        i: function () {
          return E;
        },
      });
      var o,
        d,
        c,
        s,
        E,
        T,
        I = n(512722),
        f = n.n(I),
        p = n(442837),
        m = n(570140),
        S = n(904245),
        C = n(911969),
        _ = n(603721),
        g = n(70956);
      ((o = E || (E = {}))[(o.IN_FLIGHT = 0)] = "IN_FLIGHT"),
        (o[(o.ERRORED = 1)] = "ERRORED"),
        (o[(o.SUCCEEDED = 2)] = "SUCCEEDED");
      class N extends (T = p.ZP.Store) {
        getModalState(e) {
          return e !== l ? null : u;
        }
      }
      (s = "InteractionModalStore"),
        (c = "displayName") in (d = N)
          ? Object.defineProperty(d, c, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (d[c] = s),
        (t.Z = new N(m.Z, {
          LOGOUT: function () {
            return (
              (l = null), (u = null), (i = null), (r = null), (a = null), !0
            );
          },
          INTERACTION_MODAL_CREATE: function (e) {
            let { nonce: t } = e;
            return (
              t === a &&
                (S.Z.deleteMessage(r, i, !0),
                (i = null),
                (r = null),
                (a = null)),
              !1
            );
          },
          INTERACTION_IFRAME_MODAL_CREATE: function (e) {
            let { nonce: t } = e;
            return (
              t === a &&
                (S.Z.deleteMessage(r, i, !0),
                (i = null),
                (r = null),
                (a = null)),
              !1
            );
          },
          INTERACTION_QUEUE: function (e) {
            let { messageId: t, nonce: n, data: o } = e;
            switch (o.interactionType) {
              case C.B8.APPLICATION_COMMAND:
                return (i = t), (r = o.channelId), (a = n), !1;
              case C.B8.MODAL_SUBMIT:
                return (
                  f()(
                    null == l || 1 === u || 2 === u,
                    "cannot submit multiple modals at once",
                  ),
                  (l = n),
                  (u = 0),
                  setTimeout(() => {
                    l === n && 0 === u && (0, _.yr)(n);
                  }, 10 * g.Z.Millis.SECOND),
                  !0
                );
              default:
                return !1;
            }
          },
          INTERACTION_SUCCESS: function (e) {
            let { nonce: t } = e;
            return null != t && t === l && ((u = 2), !0);
          },
          INTERACTION_FAILURE: function (e) {
            let { nonce: t } = e;
            return null != t && t === l && ((u = 1), !0);
          },
        }));
    },
    293979: function (e, t, n) {
      n.d(t, {
        X9: function () {
          return R;
        },
        b8: function () {
          return Z;
        },
        hz: function () {
          return A;
        },
      }),
        n(47120),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648);
      var l = n(192379),
        u = n(512722),
        i = n.n(u),
        r = n(442837),
        a = n(544891),
        o = n(570140),
        d = n(911969),
        c = n(81897),
        s = n(155268),
        E = n(603721),
        T = n(314897),
        I = n(592125),
        f = n(271383),
        p = n(914010),
        m = n(768581),
        S = n(70956),
        C = n(709054),
        _ = n(970184),
        g = n(471073),
        N = n(892902),
        h = n(981631),
        v = n(388032);
      let O = (e) => {
        let t = !0;
        return (
          e.forEach((e) => {
            !e() && (t = !1);
          }),
          t
        );
      };
      function A(e) {
        var t;
        let n = (0, _.CJ)(),
          l =
            null == n
              ? void 0
              : null === (t = n.modal) || void 0 === t
                ? void 0
                : t.components[0];
        return (
          (null == l ? void 0 : l.type) === d.re.ACTION_ROW &&
          l.components[0].id === e
        );
      }
      function L(e) {
        return l.useMemo(() => {
          let t = p.Z.getGuildId(),
            n =
              null != t && null != e.bot ? f.ZP.getMember(t, e.bot.id) : void 0,
            l = m.ZP.getApplicationIconURL({
              id: e.id,
              icon: e.icon,
              botIconFirst: !0,
              bot: null != n ? e.bot : void 0,
            }),
            u = null != n && null != e.bot ? e.bot.username : e.name;
          return {
            applicationIconURL: l,
            applicationName: u,
            applicationBaseUrl: (0, s.Z)(e.id),
          };
        }, [e.id, e.icon, e.name, e.bot]);
      }
      function R(e, t) {
        let { application: n, customId: u, components: s } = e,
          f = (0, c.Z)(),
          [p, m] = l.useState(null),
          [_, N] = l.useState(null),
          A = (0, r.e7)([g.Z], () => g.Z.getModalState(_), [_]),
          R = l.useRef(new Set()),
          Z = l.useCallback(() => {
            m(null),
              N(null),
              O(R.current) &&
                N(
                  (function (e, t) {
                    let n = C.default.fromTimestamp(Date.now()),
                      l = e.channelId,
                      u = I.Z.getChannel(l);
                    i()(null != u, "expected channel");
                    let r = y(e.customId, e.components);
                    (0, E.kz)(n, {
                      data: { interactionType: d.B8.MODAL_SUBMIT },
                    });
                    let o = () => {
                      (null == t || !t.aborted) &&
                        a.tn
                          .post({
                            url: h.ANM.INTERACTIONS,
                            body: {
                              type: d.B8.MODAL_SUBMIT,
                              application_id: e.application.id,
                              channel_id: u.id,
                              guild_id: u.guild_id,
                              data: {
                                id: e.id,
                                custom_id: e.customId,
                                components: r,
                              },
                              session_id: T.default.getSessionId(),
                              nonce: n,
                            },
                            signal: t,
                          })
                          .catch((e) => {
                            429 === e.status
                              ? setTimeout(
                                  o,
                                  e.body.retry_after * S.Z.Millis.SECOND,
                                )
                              : (0, E.yr)(n);
                          });
                    };
                    return o(), n;
                  })(e, f),
                );
          }, [f, e]);
        l.useEffect(() => {
          A === g.i.SUCCEEDED &&
            (o.Z.dispatch({
              type: "CLEAR_INTERACTION_MODAL_STATE",
              customId: u,
            }),
            t()),
            A === g.i.ERRORED && m(v.intl.string(v.t.uJgdEh));
        }, [_, A, t, u]);
        let { applicationIconURL: M, applicationName: b } = L(n);
        return {
          components: s,
          applicationIconURL: M,
          applicationName: b,
          submissionState: A,
          error: p,
          validators: R.current,
          onSubmit: Z,
        };
      }
      function Z(e) {
        let { application: t, customId: n } = e,
          {
            applicationIconURL: l,
            applicationName: u,
            applicationBaseUrl: r,
          } = L(t),
          a = I.Z.getChannel(e.channelId);
        i()(null != a, "channel should not be null");
        let o = {
          instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
          custom_id: n,
          channel_id: e.channelId,
        };
        null != a.guild_id && "" !== a.guild_id && (o.guild_id = a.guild_id);
        let d = new URL(null != r ? r : "");
        return (
          (d.pathname = e.iframePath),
          {
            applicationIconURL: l,
            applicationName: u,
            applicationBaseUrl: r,
            queryParams: o,
            iframeUrl: d.toString(),
          }
        );
      }
      let y = (e, t) =>
        t.map((t) => {
          switch (t.type) {
            case d.re.ACTION_ROW:
              return { type: t.type, components: y(e, t.components) };
            case d.re.TEXT_INPUT: {
              let n = N.Z.getInteractionComponentState(e, t.id);
              return {
                type: t.type,
                custom_id: t.customId,
                value:
                  (null == n ? void 0 : n.type) === t.type ? n.value : null,
              };
            }
            case d.re.STRING_SELECT: {
              let n = N.Z.getInteractionComponentState(e, t.id);
              return {
                type: t.type,
                custom_id: t.customId,
                values:
                  (null == n ? void 0 : n.type) === t.type ? n.values : null,
              };
            }
            default:
              i()(!1, "unreachable");
          }
        });
    },
    892902: function (e, t, n) {
      n(47120);
      var l,
        u,
        i,
        r,
        a = n(442837),
        o = n(570140),
        d = n(69004);
      let c = new d.Z(196606),
        s = 0,
        E = new d.Z(196606),
        T = new d.Z(196606);
      function I(e, t, n) {
        var l;
        let u = null !== (l = c.get(e)) && void 0 !== l ? l : new Map();
        u.set(t, n), c.set(e, u), s++;
      }
      function f(e) {
        let t = E.get(e);
        null != t && T.delete(t), E.delete(e), c.delete(e), s++;
      }
      class p extends (l = a.ZP.Store) {
        getInteractionComponentStates() {
          return c;
        }
        getInteractionComponentStateVersion() {
          return s;
        }
        getInteractionComponentState(e, t) {
          var n;
          let l = c.get(e);
          return null == l
            ? null
            : null !== (n = l.get(t)) && void 0 !== n
              ? n
              : null;
        }
      }
      (r = "LocalInteractionComponentStateStore"),
        (i = "displayName") in (u = p)
          ? Object.defineProperty(u, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[i] = r),
        (t.Z = new p(o.Z, {
          LOGOUT: function () {
            c.clear(), E.clear(), T.clear(), s++;
          },
          QUEUE_INTERACTION_COMPONENT_STATE: function (e) {
            let { messageId: t, nonce: n, componentId: l, state: u } = e;
            E.set(t, n), T.set(n, { messageId: t, componentId: l }), I(t, l, u);
          },
          SET_INTERACTION_COMPONENT_STATE: function (e) {
            let { rootContainerId: t, componentId: n, state: l } = e;
            I(t, n, l);
          },
          MESSAGE_DELETE: function (e) {
            let { id: t } = e;
            if (!c.has(t)) return !1;
            f(t);
          },
          MESSAGE_UPDATE: function (e) {
            let { message: t } = e;
            if (null == t.id || !c.has(t.id)) return !1;
            f(t.id);
          },
          INTERACTION_SUCCESS: function (e) {
            let { nonce: t } = e;
            if (null == t) return !1;
            let n = T.get(t);
            if (null == n) return !1;
            E.delete(n.messageId), T.delete(t), s++;
          },
          INTERACTION_FAILURE: function (e) {
            let { nonce: t } = e;
            if (null == t) return !1;
            let n = T.get(t);
            if (null == n) return !1;
            !(function (e) {
              let { componentId: t, messageId: n } = e,
                l = c.get(n);
              if (null == l || !l.has(t)) return;
              l.delete(t), 0 === l.size && c.delete(n), s++;
            })(n);
          },
          CLEAR_INTERACTION_MODAL_STATE: function (e) {
            let { customId: t } = e;
            c.delete(t), s++;
          },
        }));
    },
    359232: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var l = n(512722),
        u = n.n(l),
        i = n(911969),
        r = n(388032);
      let a = (e, t) => {
          let { minValues: n, maxValues: l } = e;
          if (null == t)
            return 0 === n
              ? null
              : r.intl.formatToPlainString(r.t.Jmwzd3, { count: n });
          if (t.type === i.re.STRING_SELECT) {
            if (t.values.length < n)
              return r.intl.formatToPlainString(r.t.Jmwzd3, { count: n });
            if (t.values.length > l)
              return r.intl.formatToPlainString(r.t.LDvfRE, { count: l });
          } else {
            if (t.selectedOptions.length < n)
              return r.intl.formatToPlainString(r.t.Jmwzd3, { count: n });
            if (t.selectedOptions.length > l)
              return r.intl.formatToPlainString(r.t.LDvfRE, { count: l });
          }
          return null;
        },
        o = (e, t) => {
          let { minLength: n, maxLength: l, required: u } = e;
          if (null == t || 0 === t.value.length)
            return u
              ? r.intl.formatToPlainString(r.t.ONSqYW, { min: n, max: l })
              : null;
          return t.value.length < n || t.value.length > l
            ? r.intl.formatToPlainString(r.t.ONSqYW, { min: n, max: l })
            : null;
        };
      function d(e, t) {
        switch (
          (null != t && u()(t.type === e.type, "component type matches state"),
          e.type)
        ) {
          case i.re.BUTTON:
            return null;
          case i.re.STRING_SELECT:
          case i.re.USER_SELECT:
          case i.re.ROLE_SELECT:
          case i.re.MENTIONABLE_SELECT:
          case i.re.CHANNEL_SELECT:
            return a(e, t);
          case i.re.TEXT_INPUT:
            return o(e, t);
          default:
            u()(!1, "missing validator for this component");
        }
      }
    },
  },
]);
//# sourceMappingURL=fcc39dc8cc788723b7c8.js.map
