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
          return D;
        },
        Ee: function () {
          return b;
        },
        Il: function () {
          return M;
        },
      }),
        n(47120),
        n(789020);
      var l = n(200651),
        i = n(192379),
        u = n(512722),
        r = n.n(u),
        a = n(442837),
        o = n(570140),
        d = n(911969),
        c = n(493773),
        s = n(71619),
        E = n(282397),
        T = n(622449),
        I = n(188597),
        f = n(41776),
        p = n(665906),
        m = n(592125),
        S = n(271383),
        C = n(607744),
        _ = n(594174),
        g = n(280501),
        N = n(892902),
        h = n(359232);
      let v = (e) => {
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
        O = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = g.gH.NORMAL;
          return (
            null != e &&
              e.state !== T.F.FAILED &&
              (e.data.interactionType === d.B8.MESSAGE_COMPONENT &&
              e.data.componentId === t.id
                ? (l = g.gH.LOADING)
                : v(t) && (l = g.gH.DISABLED)),
            n && (l = g.gH.DISABLED),
            l
          );
        },
        A = (e) => {
          let t = m.Z.getChannel(e),
            n = (0, a.e7)(
              [C.Z],
              () =>
                (null == t ? void 0 : t.guild_id) == null ||
                C.Z.canChatInGuild(t.guild_id),
              [t],
            ),
            l = (0, a.e7)(
              [f.Z],
              () =>
                (null == t ? void 0 : t.guild_id) != null &&
                f.Z.isLurking(t.guild_id),
              [t],
            ),
            i = (0, a.e7)([S.ZP, _.default], () => {
              var e, n;
              let l = _.default.getCurrentUser();
              return (
                null !==
                  (n =
                    (null == t ? void 0 : t.guild_id) != null && null != l
                      ? null ===
                          (e = S.ZP.getMember(
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
            [, u] = (0, s.AB)(null == t ? void 0 : t.guild_id),
            r = (0, p.tc)(t);
          return (
            !!(
              !n ||
              l ||
              i ||
              (null == t ? void 0 : t.isLockedThread()) ||
              ((null == t ? void 0 : t.isArchivedThread()) && !r)
            ) ||
            !!u ||
            !1
          );
        };
      function L(e, t) {
        let n = i.useContext(y),
          [l, u] = i.useState(null),
          r = i.useCallback(
            (t) => {
              let n = (0, h.Z)(e, t);
              return u(n), null == n;
            },
            [e],
          );
        return (
          i.useEffect(() => {
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
      function R(e, t, n, l) {
        var u;
        let r = (0, a.e7)([N.Z], () =>
            N.Z.getInteractionComponentState(e.id, n.id),
          ),
          o = (0, a.e7)([E.ZP], () => E.ZP.getInteraction(e), [e]),
          d = A(e.channel_id) || t,
          { error: c, validate: s } = L(n, r),
          T = null !== (u = e.applicationId) && void 0 !== u ? u : e.author.id;
        return {
          state: r,
          executeStateUpdate: i.useCallback(
            (t) => {
              if (!s(t)) return !1;
              let l = m.Z.getChannel(e.channel_id);
              return (
                null != l &&
                  null != n.customId &&
                  (0, I.tM)({
                    componentType: n.type,
                    messageId: e.id,
                    messageFlags: e.flags,
                    customId: n.customId,
                    componentId: n.id,
                    applicationId: T,
                    channelId: l.id,
                    guildId: l.guild_id,
                    localState: t,
                  }),
                !0
              );
            },
            [e.channel_id, e.flags, e.id, n.customId, n.type, n.id, T, s],
          ),
          isDisabled: d,
          visualState: O(o, n),
          error: c,
        };
      }
      function Z(e, t, n) {
        let l = (0, a.e7)([N.Z], () =>
            N.Z.getInteractionComponentState(e.customId, t.id),
          ),
          { error: u, validate: r } = L(t, l),
          d = i.useCallback(
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
          (0, c.Z)(() => {
            d(n);
          }),
          {
            state: l,
            executeStateUpdate: d,
            isDisabled: !1,
            visualState: g.gH.NORMAL,
            error: u,
          }
        );
      }
      let y = i.createContext(null);
      function M(e) {
        let {
            children: t,
            message: n,
            modal: u,
            validators: a,
            shouldDisableInteractiveComponents: o = !1,
          } = e,
          d = i.useMemo(
            () =>
              null != n
                ? {
                    useComponentState: R.bind(null, n, o),
                    channelId: n.channel_id,
                    message: n,
                    validators: a,
                  }
                : (r()(null != u, "modal is present if message is not"),
                  {
                    useComponentState: Z.bind(null, u),
                    channelId: u.channelId,
                    modal: u,
                    validators: a,
                  }),
            [n, u, a, o],
          );
        return (0, l.jsx)(y.Provider, { value: d, children: t });
      }
      function b(e, t) {
        return i.useContext(y).useComponentState(e, t);
      }
      function D() {
        return i.useContext(y);
      }
    },
    471073: function (e, t, n) {
      let l, i, u, r, a;
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
          return e !== l ? null : i;
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
              (l = null), (i = null), (u = null), (r = null), (a = null), !0
            );
          },
          INTERACTION_MODAL_CREATE: function (e) {
            let { nonce: t } = e;
            return (
              t === a &&
                (S.Z.deleteMessage(r, u, !0),
                (u = null),
                (r = null),
                (a = null)),
              !1
            );
          },
          INTERACTION_IFRAME_MODAL_CREATE: function (e) {
            let { nonce: t } = e;
            return (
              t === a &&
                (S.Z.deleteMessage(r, u, !0),
                (u = null),
                (r = null),
                (a = null)),
              !1
            );
          },
          INTERACTION_QUEUE: function (e) {
            let { messageId: t, nonce: n, data: o } = e;
            switch (o.interactionType) {
              case C.B8.APPLICATION_COMMAND:
                return (u = t), (r = o.channelId), (a = n), !1;
              case C.B8.MODAL_SUBMIT:
                return (
                  f()(
                    null == l || 1 === i || 2 === i,
                    "cannot submit multiple modals at once",
                  ),
                  (l = n),
                  (i = 0),
                  setTimeout(() => {
                    l === n && 0 === i && (0, _.yr)(n);
                  }, 10 * g.Z.Millis.SECOND),
                  !0
                );
              default:
                return !1;
            }
          },
          INTERACTION_SUCCESS: function (e) {
            let { nonce: t } = e;
            return null != t && t === l && ((i = 2), !0);
          },
          INTERACTION_FAILURE: function (e) {
            let { nonce: t } = e;
            return null != t && t === l && ((i = 1), !0);
          },
        }));
    },
    293979: function (e, t, n) {
      n.d(t, {
        X9: function () {
          return Z;
        },
        b8: function () {
          return y;
        },
        hz: function () {
          return L;
        },
      }),
        n(47120),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648);
      var l = n(192379),
        i = n(512722),
        u = n.n(i),
        r = n(442837),
        a = n(544891),
        o = n(570140),
        d = n(911969),
        c = n(211266),
        s = n(81897),
        E = n(155268),
        T = n(603721),
        I = n(314897),
        f = n(592125),
        p = n(271383),
        m = n(914010),
        S = n(768581),
        C = n(70956),
        _ = n(709054),
        g = n(970184),
        N = n(471073),
        h = n(892902),
        v = n(981631),
        O = n(388032);
      let A = (e) => {
        let t = !0;
        return (
          e.forEach((e) => {
            !e() && (t = !1);
          }),
          t
        );
      };
      function L(e) {
        var t;
        let n = (0, g.CJ)(),
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
      function R(e) {
        return l.useMemo(() => {
          let t = m.Z.getGuildId(),
            n =
              null != t && null != e.bot ? p.ZP.getMember(t, e.bot.id) : void 0,
            l = S.ZP.getApplicationIconURL({
              id: e.id,
              icon: e.icon,
              botIconFirst: !0,
              bot: null != n ? e.bot : void 0,
            }),
            i = null != n && null != e.bot ? e.bot.username : e.name;
          return {
            applicationIconURL: l,
            applicationName: i,
            applicationBaseUrl: (0, E.Z)(e.id),
          };
        }, [e.id, e.icon, e.name, e.bot]);
      }
      function Z(e, t) {
        let { application: n, customId: i, components: E } = e,
          p = (0, s.Z)(),
          [m, S] = l.useState(null),
          [g, h] = l.useState(null),
          L = (0, r.e7)([N.Z], () => N.Z.getModalState(g), [g]),
          Z = (0, c.Z)(() => new Set()),
          y = l.useCallback(() => {
            S(null),
              h(null),
              A(Z) &&
                h(
                  (function (e, t) {
                    let n = _.default.fromTimestamp(Date.now()),
                      l = e.channelId,
                      i = f.Z.getChannel(l);
                    u()(null != i, "expected channel");
                    let r = M(e.customId, e.components);
                    (0, T.kz)(n, {
                      data: { interactionType: d.B8.MODAL_SUBMIT },
                    });
                    let o = () => {
                      (null == t || !t.aborted) &&
                        a.tn
                          .post({
                            url: v.ANM.INTERACTIONS,
                            body: {
                              type: d.B8.MODAL_SUBMIT,
                              application_id: e.application.id,
                              channel_id: i.id,
                              guild_id: i.guild_id,
                              data: {
                                id: e.id,
                                custom_id: e.customId,
                                components: r,
                              },
                              session_id: I.default.getSessionId(),
                              nonce: n,
                            },
                            signal: t,
                            rejectWithError: !1,
                          })
                          .catch((e) => {
                            429 === e.status
                              ? setTimeout(
                                  o,
                                  e.body.retry_after * C.Z.Millis.SECOND,
                                )
                              : (0, T.yr)(n);
                          });
                    };
                    return o(), n;
                  })(e, p),
                );
          }, [p, e, Z]);
        l.useEffect(() => {
          L === N.i.SUCCEEDED &&
            (o.Z.dispatch({
              type: "CLEAR_INTERACTION_MODAL_STATE",
              customId: i,
            }),
            t()),
            L === N.i.ERRORED && S(O.intl.string(O.t.uJgdEh));
        }, [g, L, t, i]);
        let { applicationIconURL: b, applicationName: D } = R(n);
        return {
          components: E,
          applicationIconURL: b,
          applicationName: D,
          submissionState: L,
          error: m,
          validators: Z,
          onSubmit: y,
        };
      }
      function y(e) {
        let { application: t, customId: n } = e,
          {
            applicationIconURL: l,
            applicationName: i,
            applicationBaseUrl: r,
          } = R(t),
          a = f.Z.getChannel(e.channelId);
        u()(null != a, "channel should not be null");
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
            applicationName: i,
            applicationBaseUrl: r,
            queryParams: o,
            iframeUrl: d.toString(),
          }
        );
      }
      let M = (e, t) =>
        t.map((t) => {
          switch (t.type) {
            case d.re.ACTION_ROW:
              return { type: t.type, components: M(e, t.components) };
            case d.re.TEXT_INPUT: {
              let n = h.Z.getInteractionComponentState(e, t.id);
              return {
                type: t.type,
                custom_id: t.customId,
                value:
                  (null == n ? void 0 : n.type) === t.type ? n.value : null,
              };
            }
            case d.re.STRING_SELECT: {
              let n = h.Z.getInteractionComponentState(e, t.id);
              return {
                type: t.type,
                custom_id: t.customId,
                values:
                  (null == n ? void 0 : n.type) === t.type ? n.values : null,
              };
            }
            default:
              u()(!1, "unreachable");
          }
        });
    },
    892902: function (e, t, n) {
      n(47120);
      var l,
        i,
        u,
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
        let i = null !== (l = c.get(e)) && void 0 !== l ? l : new Map();
        i.set(t, n), c.set(e, i), s++;
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
        (u = "displayName") in (i = p)
          ? Object.defineProperty(i, u, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[u] = r),
        (t.Z = new p(o.Z, {
          LOGOUT: function () {
            c.clear(), E.clear(), T.clear(), s++;
          },
          QUEUE_INTERACTION_COMPONENT_STATE: function (e) {
            let { messageId: t, nonce: n, componentId: l, state: i } = e;
            E.set(t, n), T.set(n, { messageId: t, componentId: l }), I(t, l, i);
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
        i = n.n(l),
        u = n(911969),
        r = n(388032);
      let a = (e, t) => {
          let { minValues: n, maxValues: l } = e;
          if (null == t)
            return 0 === n
              ? null
              : r.intl.formatToPlainString(r.t.Jmwzd3, { count: n });
          if (t.type === u.re.STRING_SELECT) {
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
          let { minLength: n, maxLength: l, required: i } = e;
          if (null == t || 0 === t.value.length)
            return i
              ? r.intl.formatToPlainString(r.t.ONSqYW, { min: n, max: l })
              : null;
          return t.value.length < n || t.value.length > l
            ? r.intl.formatToPlainString(r.t.ONSqYW, { min: n, max: l })
            : null;
        };
      function d(e, t) {
        switch (
          (null != t && i()(t.type === e.type, "component type matches state"),
          e.type)
        ) {
          case u.re.BUTTON:
            return null;
          case u.re.STRING_SELECT:
          case u.re.USER_SELECT:
          case u.re.ROLE_SELECT:
          case u.re.MENTIONABLE_SELECT:
          case u.re.CHANNEL_SELECT:
            return a(e, t);
          case u.re.TEXT_INPUT:
            return o(e, t);
          default:
            i()(!1, "missing validator for this component");
        }
      }
    },
  },
]);
//# sourceMappingURL=29c47579c367b1d5a439.js.map
