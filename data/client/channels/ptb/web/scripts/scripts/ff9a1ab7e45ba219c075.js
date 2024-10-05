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
          return y;
        },
        Il: function () {
          return Z;
        },
      }),
        n(47120),
        n(789020);
      var l = n(735250),
        u = n(470079),
        i = n(512722),
        r = n.n(i),
        a = n(442837),
        o = n(570140),
        d = n(911969),
        s = n(71619),
        c = n(282397),
        E = n(622449),
        T = n(188597),
        _ = n(41776),
        I = n(665906),
        S = n(592125),
        C = n(271383),
        f = n(607744),
        p = n(594174),
        N = n(280501),
        m = n(892902),
        g = n(359232);
      let O = (e) => {
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
            case d.re.INPUT_TEXT:
              return !1;
          }
        },
        M = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = N.gH.NORMAL;
          return (
            null != e &&
              e.state !== E.F.FAILED &&
              (e.data.interactionType === d.B8.MESSAGE_COMPONENT &&
              e.data.componentId === t.id
                ? (l = N.gH.LOADING)
                : O(t) && (l = N.gH.DISABLED)),
            n && (l = N.gH.DISABLED),
            l
          );
        },
        A = (e) => {
          let t = S.Z.getChannel(e),
            n = (0, a.e7)(
              [f.Z],
              () =>
                (null == t ? void 0 : t.guild_id) == null ||
                f.Z.canChatInGuild(t.guild_id),
              [t],
            ),
            l = (0, a.e7)(
              [_.Z],
              () =>
                (null == t ? void 0 : t.guild_id) != null &&
                _.Z.isLurking(t.guild_id),
              [t],
            ),
            u = (0, a.e7)([C.ZP, p.default], () => {
              var e, n;
              let l = p.default.getCurrentUser();
              return (
                null !==
                  (n =
                    (null == t ? void 0 : t.guild_id) != null && null != l
                      ? null ===
                          (e = C.ZP.getMember(
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
            [, i] = (0, s.AB)(null == t ? void 0 : t.guild_id),
            r = (0, I.tc)(t);
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
      function R(e, t) {
        let n = u.useContext(L),
          [l, i] = u.useState(null),
          r = u.useCallback(
            (t) => {
              let n = (0, g.Z)(e, t);
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
      function h(e, t, n) {
        var l;
        let i = (0, a.e7)([m.Z], () =>
            m.Z.getInteractionComponentState(e.id, t.id),
          ),
          r = (0, a.e7)([c.ZP], () => c.ZP.getInteraction(e), [e]),
          o = A(e.channel_id),
          { error: d, validate: s } = R(t, i),
          E = null !== (l = e.applicationId) && void 0 !== l ? l : e.author.id;
        return {
          state: i,
          executeStateUpdate: u.useCallback(
            (n) => {
              if (!s(n)) return !1;
              let l = S.Z.getChannel(e.channel_id);
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
            [e.channel_id, e.flags, e.id, t.customId, t.type, t.id, E, s],
          ),
          isDisabled: o,
          visualState: M(r, t),
          error: d,
        };
      }
      function v(e, t, n) {
        let l = (0, a.e7)([m.Z], () =>
            m.Z.getInteractionComponentState(e.customId, t.id),
          ),
          { error: i, validate: r } = R(t, l),
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
            visualState: N.gH.NORMAL,
            error: i,
          }
        );
      }
      let L = u.createContext(null);
      function Z(e) {
        let { children: t, message: n, modal: i, validators: a } = e,
          o = u.useMemo(
            () =>
              null != n
                ? {
                    useComponentState: h.bind(null, n),
                    channelId: n.channel_id,
                    message: n,
                    validators: a,
                  }
                : (r()(null != i, "modal is present if message is not"),
                  {
                    useComponentState: v.bind(null, i),
                    channelId: i.channelId,
                    modal: i,
                    validators: a,
                  }),
            [n, i, a],
          );
        return (0, l.jsx)(L.Provider, { value: o, children: t });
      }
      function y(e, t) {
        return u.useContext(L).useComponentState(e, t);
      }
      function b() {
        return u.useContext(L);
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
        s,
        c,
        E,
        T,
        _ = n(512722),
        I = n.n(_),
        S = n(442837),
        C = n(570140),
        f = n(904245),
        p = n(911969),
        N = n(603721),
        m = n(70956);
      ((o = E || (E = {}))[(o.IN_FLIGHT = 0)] = "IN_FLIGHT"),
        (o[(o.ERRORED = 1)] = "ERRORED"),
        (o[(o.SUCCEEDED = 2)] = "SUCCEEDED");
      class g extends (T = S.ZP.Store) {
        getModalState(e) {
          return e !== l ? null : u;
        }
      }
      (c = "InteractionModalStore"),
        (s = "displayName") in (d = g)
          ? Object.defineProperty(d, s, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (d[s] = c),
        (t.Z = new g(C.Z, {
          LOGOUT: function () {
            return (
              (l = null), (u = null), (i = null), (r = null), (a = null), !0
            );
          },
          INTERACTION_MODAL_CREATE: function (e) {
            let { nonce: t } = e;
            return (
              t === a &&
                (f.Z.deleteMessage(r, i, !0),
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
                (f.Z.deleteMessage(r, i, !0),
                (i = null),
                (r = null),
                (a = null)),
              !1
            );
          },
          INTERACTION_QUEUE: function (e) {
            let { messageId: t, nonce: n, data: o } = e;
            switch (o.interactionType) {
              case p.B8.APPLICATION_COMMAND:
                return (i = t), (r = o.channelId), (a = n), !1;
              case p.B8.MODAL_SUBMIT:
                return (
                  I()(
                    null == l || 1 === u || 2 === u,
                    "cannot submit multiple modals at once",
                  ),
                  (l = n),
                  (u = 0),
                  setTimeout(() => {
                    l === n && 0 === u && (0, N.yr)(n);
                  }, 10 * m.Z.Millis.SECOND),
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
          return v;
        },
        b8: function () {
          return L;
        },
        hz: function () {
          return R;
        },
      }),
        n(47120),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648);
      var l = n(470079),
        u = n(512722),
        i = n.n(u),
        r = n(442837),
        a = n(544891),
        o = n(570140),
        d = n(911969),
        s = n(81897),
        c = n(155268),
        E = n(603721),
        T = n(314897),
        _ = n(592125),
        I = n(271383),
        S = n(914010),
        C = n(768581),
        f = n(70956),
        p = n(709054),
        N = n(970184),
        m = n(471073),
        g = n(892902),
        O = n(981631),
        M = n(689938);
      let A = (e) => {
        let t = !0;
        return (
          e.forEach((e) => {
            !e() && (t = !1);
          }),
          t
        );
      };
      function R(e) {
        var t;
        let n = (0, N.CJ)(),
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
      function h(e) {
        return l.useMemo(() => {
          let t = S.Z.getGuildId(),
            n =
              null != t && null != e.bot ? I.ZP.getMember(t, e.bot.id) : void 0,
            l = C.ZP.getApplicationIconURL({
              id: e.id,
              icon: e.icon,
              botIconFirst: !0,
              bot: null != n ? e.bot : void 0,
            }),
            u = null != n && null != e.bot ? e.bot.username : e.name;
          return {
            applicationIconURL: l,
            applicationName: u,
            applicationBaseUrl: (0, c.Z)(e.id),
          };
        }, [e.id, e.icon, e.name, e.bot]);
      }
      function v(e, t) {
        let { application: n, customId: u, components: c } = e,
          I = (0, s.Z)(),
          [S, C] = l.useState(null),
          [N, g] = l.useState(null),
          R = (0, r.e7)([m.Z], () => m.Z.getModalState(N), [N]),
          v = l.useRef(new Set()),
          L = l.useCallback(() => {
            C(null),
              g(null),
              A(v.current) &&
                g(
                  (function (e, t) {
                    let n = p.default.fromTimestamp(Date.now()),
                      l = e.channelId,
                      u = _.Z.getChannel(l);
                    i()(null != u, "expected channel");
                    let r = Z(e.customId, e.components);
                    (0, E.kz)(n, {
                      data: { interactionType: d.B8.MODAL_SUBMIT },
                    });
                    let o = () => {
                      (null == t || !t.aborted) &&
                        a.tn
                          .post({
                            url: O.ANM.INTERACTIONS,
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
                                  e.body.retry_after * f.Z.Millis.SECOND,
                                )
                              : (0, E.yr)(n);
                          });
                    };
                    return o(), n;
                  })(e, I),
                );
          }, [I, e]);
        l.useEffect(() => {
          R === m.i.SUCCEEDED &&
            (o.Z.dispatch({
              type: "CLEAR_INTERACTION_MODAL_STATE",
              customId: u,
            }),
            t()),
            R === m.i.ERRORED &&
              C(M.Z.Messages.INTERACTION_FORM_SUBMISSION_FAILED);
        }, [N, R, t, u]);
        let { applicationIconURL: y, applicationName: b } = h(n);
        return {
          components: c,
          applicationIconURL: y,
          applicationName: b,
          submissionState: R,
          error: S,
          validators: v.current,
          onSubmit: L,
        };
      }
      function L(e) {
        let { application: t, customId: n } = e,
          {
            applicationIconURL: l,
            applicationName: u,
            applicationBaseUrl: r,
          } = h(t),
          a = _.Z.getChannel(e.channelId);
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
      let Z = (e, t) =>
        t.map((t) => {
          switch (t.type) {
            case d.re.ACTION_ROW:
              return { type: t.type, components: Z(e, t.components) };
            case d.re.INPUT_TEXT: {
              let n = g.Z.getInteractionComponentState(e, t.id);
              return {
                type: t.type,
                custom_id: t.customId,
                value:
                  (null == n ? void 0 : n.type) === t.type ? n.value : null,
              };
            }
            case d.re.STRING_SELECT: {
              let n = g.Z.getInteractionComponentState(e, t.id);
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
      let s = new d.Z(196606),
        c = 0,
        E = new d.Z(196606),
        T = new d.Z(196606);
      function _(e, t, n) {
        var l;
        let u = null !== (l = s.get(e)) && void 0 !== l ? l : new Map();
        u.set(t, n), s.set(e, u), c++;
      }
      function I(e) {
        let t = E.get(e);
        null != t && T.delete(t), E.delete(e), s.delete(e), c++;
      }
      class S extends (l = a.ZP.Store) {
        getInteractionComponentStates() {
          return s;
        }
        getInteractionComponentStateVersion() {
          return c;
        }
        getInteractionComponentState(e, t) {
          var n;
          let l = s.get(e);
          return null == l
            ? null
            : null !== (n = l.get(t)) && void 0 !== n
              ? n
              : null;
        }
      }
      (r = "LocalInteractionComponentStateStore"),
        (i = "displayName") in (u = S)
          ? Object.defineProperty(u, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[i] = r),
        (t.Z = new S(o.Z, {
          LOGOUT: function () {
            s.clear(), E.clear(), T.clear(), c++;
          },
          QUEUE_INTERACTION_COMPONENT_STATE: function (e) {
            let { messageId: t, nonce: n, componentId: l, state: u } = e;
            E.set(t, n), T.set(n, { messageId: t, componentId: l }), _(t, l, u);
          },
          SET_INTERACTION_COMPONENT_STATE: function (e) {
            let { rootContainerId: t, componentId: n, state: l } = e;
            _(t, n, l);
          },
          MESSAGE_DELETE: function (e) {
            let { id: t } = e;
            if (!s.has(t)) return !1;
            I(t);
          },
          MESSAGE_UPDATE: function (e) {
            let { message: t } = e;
            if (null == t.id || !s.has(t.id)) return !1;
            I(t.id);
          },
          INTERACTION_SUCCESS: function (e) {
            let { nonce: t } = e;
            if (null == t) return !1;
            let n = T.get(t);
            if (null == n) return !1;
            E.delete(n.messageId), T.delete(t), c++;
          },
          INTERACTION_FAILURE: function (e) {
            let { nonce: t } = e;
            if (null == t) return !1;
            let n = T.get(t);
            if (null == n) return !1;
            !(function (e) {
              let { componentId: t, messageId: n } = e,
                l = s.get(n);
              if (null == l || !l.has(t)) return;
              l.delete(t), 0 === l.size && s.delete(n), c++;
            })(n);
          },
          CLEAR_INTERACTION_MODAL_STATE: function (e) {
            let { customId: t } = e;
            s.delete(t), c++;
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
        r = n(689938);
      let a = (e, t) => {
          let { minValues: n, maxValues: l } = e;
          if (null == t)
            return 0 === n
              ? null
              : r.Z.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format(
                  { count: n },
                );
          if (t.type === i.re.STRING_SELECT) {
            if (t.values.length < n)
              return r.Z.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format(
                { count: n },
              );
            if (t.values.length > l)
              return r.Z.Messages.MESSAGE_SELECT_COMPONENT_MAX_SELECT_REQUIREMENT.format(
                { count: l },
              );
          } else {
            if (t.selectedOptions.length < n)
              return r.Z.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format(
                { count: n },
              );
            if (t.selectedOptions.length > l)
              return r.Z.Messages.MESSAGE_SELECT_COMPONENT_MAX_SELECT_REQUIREMENT.format(
                { count: l },
              );
          }
          return null;
        },
        o = (e, t) => {
          let { minLength: n, maxLength: l, required: u } = e;
          if (null == t || 0 === t.value.length)
            return u
              ? r.Z.Messages.FORM_LENGTH_ERROR.format({ min: n, max: l })
              : null;
          return t.value.length < n || t.value.length > l
            ? r.Z.Messages.FORM_LENGTH_ERROR.format({ min: n, max: l })
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
          case i.re.INPUT_TEXT:
            return o(e, t);
          default:
            u()(!1, "missing validator for this component");
        }
      }
    },
  },
]);
//# sourceMappingURL=ff9a1ab7e45ba219c075.js.map
