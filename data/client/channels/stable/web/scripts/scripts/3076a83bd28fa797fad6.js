"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58023"],
  {
    137707: function (e) {
      e.exports = "/assets/511e8321949194fd8ed3.svg";
    },
    62640: function (e) {
      e.exports = "/assets/c61fe8d4e58fa62f15fb.svg";
    },
    639933: function (e) {
      e.exports = "/assets/f24b23296e9c6847e7f4.svg";
    },
    96698: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return d;
        },
      });
      var s = l(735250);
      l(470079);
      var a = l(120356),
        t = l.n(a),
        i = l(481060),
        r = l(112831),
        o = l(985992);
      function d(e) {
        let { steps: n, stepIndex: l, onClick: a } = e;
        return (0, s.jsx)("div", {
          className: o.container,
          children: n.map((e, n) => {
            let d = l === n;
            return (0, s.jsxs)(
              i.Clickable,
              {
                onClick: () => a(n),
                className: o.stepContainer,
                children: [
                  (0, s.jsx)("div", {
                    className: t()(o.progressBar, {
                      [o.selectedProgressBar]: d,
                    }),
                  }),
                  (0, s.jsx)(r.Z, {
                    color: d ? r.Z.Colors.BRAND : r.Z.Colors.MUTED,
                    size: r.Z.Sizes.SIZE_12,
                    children: e,
                  }),
                ],
              },
              e,
            );
          }),
        });
      }
    },
    356685: function (e, n, l) {
      l.d(n, {
        X: function () {
          return t;
        },
      });
      var s = l(544891),
        a = l(981631);
      async function t(e, n, l) {
        return (
          await s.tn.get({
            url: a.ANM.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
            query: { type: n, entity_id: l },
          })
        ).body;
      }
    },
    433775: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return u;
        },
      }),
        l(47120);
      var s = l(470079),
        a = l(442837),
        t = l(951539),
        i = l(592125),
        r = l(356685),
        o = l(486527),
        d = l(981631);
      let c = { can_broadcast: !1 };
      function u(e, n, l) {
        let [u, E] = s.useState(c),
          [_, x] = s.useState(!1),
          I = s.useRef(!1),
          m = null == e ? void 0 : e.id,
          N = null == e ? void 0 : e.hasFeature(d.oNc.HAS_DIRECTORY_ENTRY);
        s.useEffect(() => {
          if (!N) {
            E(c);
            return;
          }
          if (!I.current && null != m)
            (async () => {
              I.current = !0;
              try {
                let e = await (0, r.X)(m, o.C2.GUILD_SCHEDULED_EVENT, n);
                E(e);
              } catch (e) {
                E(c);
              }
              I.current = !1;
            })();
        }, [m, N, n]),
          s.useEffect(() => {
            var e;
            if (!u.can_broadcast) {
              x(!1);
              return;
            }
            x(null === (e = u.has_broadcast) || void 0 === e || e);
          }, [u]);
        let T = (0, a.e7)([i.Z], () => (0, t.wg)(l, [i.Z]));
        return {
          broadcastInfo: u,
          broadcastToDirectoryChannels: T && _,
          setBroadcastToDirectoryChannels: x,
          canEveryoneRoleViewEvent: T,
        };
      }
    },
    545165: function (e, n, l) {
      l.d(n, {
        SU: function () {
          return i;
        },
        sR: function () {
          return r;
        },
      }),
        l(47120),
        l(653041);
      var s = l(442837),
        a = l(357156);
      l(427679);
      var t = l(984933);
      function i(e, n) {
        let [l] =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : [t.ZP];
        if (null == n) return [];
        let s = l.getChannels(e)[t.Zb],
          i = [];
        for (let { channel: e } of s) {
          let { canCreateGuildEvent: l, canManageAllEvents: s } = (0, a.Gw)(e),
            t = l || s;
          if (e.type === n)
            e.isGuildVoice() && t
              ? i.push(e)
              : e.isGuildStageVoice() && t && i.push(e);
        }
        return i;
      }
      function r(e, n) {
        return (0, s.Wu)([t.ZP], () => i(e, n, [t.ZP]), [e, n]);
      }
      l(496675), l(85243);
    },
    77810: function (e, n, l) {
      l.d(n, {
        q: function () {
          return r;
        },
      }),
        l(724458),
        l(653041);
      var s = l(442837),
        a = l(146085),
        t = l(984933),
        i = l(496675);
      function r(e) {
        var n;
        let l =
          null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null;
        return (0, s.Wu)(
          [t.ZP, i.Z],
          () =>
            t.ZP.getChannels(l)[t.Zb].reduce((e, n) => {
              let l = n.channel;
              return l.isGuildStageVoice()
                ? ((function (e) {
                    let n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : i.Z;
                    return !!e.isGuildStageVoice() && n.can(a.yP, e);
                  })(n.channel, i.Z) && e.push(l),
                  e)
                : e;
            }, []),
          [l],
        );
      }
    },
    401876: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return c;
        },
      });
      var s = l(735250),
        a = l(470079),
        t = l(481060),
        i = l(377171),
        r = l(854698),
        o = l(689938),
        d = l(94277);
      function c(e) {
        let { startDate: n, recurrenceRule: l, onRecurrenceChange: c } = e,
          u = a.useMemo(() => (0, r.zi)(n, l), [l, n]),
          E = (0, r.P8)(n),
          _ = (e) => e.toString(),
          x = (0, s.jsxs)("div", {
            className: d.title,
            children: [
              o.Z.Messages.CREATE_EVENT_RECUR_LABEL,
              (0, s.jsx)(t.TextBadge, {
                text: o.Z.Messages.NEW,
                color: i.Z.BG_BRAND,
              }),
            ],
          });
        return (0, s.jsx)(t.FormItem, {
          title: x,
          required: !0,
          children: (0, s.jsx)(t.Select, {
            placeholder: "gaming",
            options: E,
            select: c,
            serialize: _,
            isSelected: (e) => null != u && _(e) === _(u),
          }),
        });
      }
    },
    440371: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return u;
        },
      });
      var s = l(735250);
      l(470079);
      var a = l(913527),
        t = l.n(a),
        i = l(481060),
        r = l(854698),
        o = l(401876),
        d = l(689938),
        c = l(805553);
      function u(e) {
        let {
          className: n,
          onScheduleChange: l,
          onRecurrenceChange: a,
          onTimeChange: u,
          timeSelected: E = !0,
          schedule: _,
          recurrenceRule: x,
          showEndDate: I = !1,
          requireEndDate: m = !1,
          disableStartDateTime: N = !1,
        } = e;
        if (null == _) return null;
        let T = null,
          h = _.startDate,
          g = t()(),
          v = t()().add(r.G3, "days"),
          S = t()().add(r.Ib, "days");
        null != x && (v.add(r.hn, "years"), S.add(r.hn, "years"));
        let C = (e) => {
          l({ ..._, endDate: e });
        };
        return (
          I &&
            (T =
              null != _.endDate || m
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)("div", {
                        className: c.doubleInput,
                        children: [
                          (0, s.jsx)(i.FormItem, {
                            title: d.Z.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: m,
                            children: (0, s.jsx)(i.DateInput, {
                              value: _.endDate,
                              onSelect: C,
                              minDate: _.startDate,
                              maxDate: S,
                            }),
                          }),
                          (0, s.jsx)(i.FormItem, {
                            title: d.Z.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: m,
                            children: (0, s.jsx)(i.TimeInput, {
                              value: _.endDate,
                              onChange: C,
                            }),
                          }),
                        ],
                      }),
                      m
                        ? null
                        : (0, s.jsx)(i.Button, {
                            onClick: () => {
                              C(void 0);
                            },
                            look: i.Button.Looks.BLANK,
                            size: i.Button.Sizes.MIN,
                            children: (0, s.jsxs)("div", {
                              className: c.link,
                              children: [
                                (0, s.jsx)(i.CircleXIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 17,
                                  height: 17,
                                  className: c.removeIcon,
                                }),
                                (0, s.jsx)(i.Text, {
                                  variant: "text-sm/normal",
                                  children:
                                    d.Z.Messages
                                      .CREATE_EVENT_REMOVE_END_TIME_LABEL,
                                }),
                              ],
                            }),
                          }),
                    ],
                  })
                : (0, s.jsx)(i.Button, {
                    look: i.Button.Looks.BLANK,
                    size: i.Button.Sizes.MIN,
                    onClick: () => {
                      C(t()(_.startDate).add(1, "hour"));
                    },
                    children: (0, s.jsxs)("div", {
                      className: c.link,
                      children: [
                        (0, s.jsx)(i.CirclePlusIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                          className: c.addIcon,
                        }),
                        (0, s.jsx)(i.Text, {
                          variant: "text-sm/normal",
                          children:
                            d.Z.Messages.CREATE_EVENT_ADD_END_TIME_LABEL,
                        }),
                      ],
                    }),
                  })),
          (0, s.jsxs)("div", {
            className: n,
            children: [
              (0, s.jsxs)("div", {
                className: c.doubleInput,
                children: [
                  (0, s.jsx)(i.FormItem, {
                    title: d.Z.Messages.CREATE_EVENT_START_DATE_LABEL,
                    required: !0,
                    children: (0, s.jsx)(i.DateInput, {
                      value: _.startDate,
                      onSelect: (e) => {
                        l({ ..._, startDate: e });
                      },
                      minDate: g,
                      maxDate: v,
                      disabled: N,
                    }),
                  }),
                  (0, s.jsx)(i.FormItem, {
                    title: d.Z.Messages.CREATE_EVENT_START_TIME_LABEL,
                    required: !0,
                    children: (0, s.jsx)(i.TimeInput, {
                      value: _.startDate,
                      onChange: (e) => {
                        if (!!e.isValid())
                          null == u || u(!0), l({ ..._, startDate: e });
                      },
                      hideValue: !E,
                      disabled: N,
                    }),
                  }),
                ],
              }),
              T,
              null != h &&
                null != a &&
                (0, s.jsx)(o.Z, {
                  onRecurrenceChange: a,
                  startDate: h,
                  recurrenceRule: x,
                }),
            ],
          })
        );
      }
    },
    195367: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return S;
        },
      }),
        l(47120);
      var s = l(735250),
        a = l(470079),
        t = l(913527),
        i = l.n(t),
        r = l(481060),
        o = l(516129),
        d = l(813197),
        c = l(930180),
        u = l(582019),
        E = l(924301),
        _ = l(236373),
        x = l(854698),
        I = l(405613),
        m = l(440371),
        N = l(765305),
        T = l(486324),
        h = l(689938),
        g = l(351293);
      function v(e) {
        let { editBroadcastInfoData: n } = e,
          {
            broadcastInfo: l,
            broadcastToDirectoryChannels: a,
            setBroadcastToDirectoryChannels: t,
            canEveryoneRoleViewEvent: i,
          } = n;
        return l.can_broadcast
          ? (0, s.jsxs)(r.FormItem, {
              title: h.Z.Messages.CREATE_EVENT_PRIVACY_LABEL,
              className: g.formItem,
              children: [
                (0, s.jsx)(r.Tooltip, {
                  text: (0, s.jsx)(r.Text, {
                    className: g.broadcastInfoTooltip,
                    variant: "text-sm/normal",
                    children:
                      h.Z.Messages
                        .HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
                  }),
                  "aria-label":
                    h.Z.Messages
                      .HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
                  shouldShow: !i,
                  children: (e) =>
                    (0, s.jsx)("div", {
                      ...e,
                      children: (0, s.jsx)(r.Checkbox, {
                        type: r.Checkbox.Types.INVERTED,
                        disabled: !i,
                        value: a,
                        onChange: (e, n) => t(n),
                        children: (0, s.jsx)(r.Text, {
                          variant: "text-md/normal",
                          color: "interactive-active",
                          children: h.Z.Messages.HUB_EVENTS_SHARE_TITLE,
                        }),
                      }),
                    }),
                }),
                (0, s.jsx)(r.Text, {
                  className: g.broadcastInfoDescription,
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  children: h.Z.Messages.HUB_EVENTS_SHARE_DESCRIPTION,
                }),
              ],
            })
          : null;
      }
      function S(e) {
        let {
            guildEvent: n,
            guildEventId: t,
            guildId: S,
            editBroadcastInfoData: C,
            error: L,
            validationErrorMessage: A,
            onChange: Z,
            canSetFocus: f = !1,
          } = e,
          {
            entityType: j,
            channelId: M,
            description: D,
            name: R,
            image: p,
            scheduledEndTime: V,
            scheduledStartTime: G,
            recurrenceRule: O,
          } = n,
          U = (0, c._d)(M),
          y = null != n && (0, E.xt)(n),
          b = a.useMemo(() => {
            let e = (0, x.v1)(n);
            return null != e ? e : { startDate: i()(G) };
          }, [n, G]),
          [B, P] = a.useState(() => (0, x.zi)(i()(G), O)),
          k = a.useRef(null);
        a.useEffect(() => {
          if (f) {
            var e;
            null === (e = k.current) || void 0 === e || e.focus();
          }
        }, [f]);
        let z = (e) => {
            Z({ image: e });
          },
          H = (e, n) => {
            if (null == e || void 0 === n) {
              z(null);
              return;
            }
            (0, r.openModalLazy)(async () => {
              let { default: a } = await Promise.all([
                l.e("70687"),
                l.e("48017"),
                l.e("93865"),
              ]).then(l.bind(l, 850085));
              return (l) =>
                (0, s.jsx)(a, {
                  imgURI: e,
                  file: n,
                  onCrop: z,
                  uploadType: T.pC.SCHEDULED_EVENT_IMAGE,
                  allowSkip: !0,
                  ...l,
                });
            });
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              className: g.blockedUsersContainer,
              children:
                null != M && !y && U > 0 && (0, s.jsx)(u.mv, { channelId: M }),
            }),
            (0, s.jsxs)("div", {
              className: g.form,
              children: [
                (0, s.jsxs)(r.FormItem, {
                  title: h.Z.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
                  className: g.topicFormItem,
                  required: !0,
                  children: [
                    (0, s.jsx)(r.TextInput, {
                      className: g.textInput,
                      onChange: (e) => {
                        Z({ name: e });
                      },
                      placeholder:
                        h.Z.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
                      maxLength: N.p,
                      value: R,
                      autoComplete: "off",
                      inputRef: k,
                    }),
                    null != L
                      ? (0, s.jsx)(r.Text, {
                          color: "text-danger",
                          variant: "text-xs/normal",
                          className: g.warning,
                          children: L.getAnyErrorMessage(),
                        })
                      : null,
                  ],
                }),
                (0, s.jsx)(m.Z, {
                  className: g.formItem,
                  onScheduleChange: (e) => {
                    let { startDate: n, endDate: l } = e,
                      s = {
                        scheduledStartTime:
                          null == n ? void 0 : n.toISOString(),
                        scheduledEndTime: null == l ? void 0 : l.toISOString(),
                      };
                    null != n &&
                      null != V &&
                      (null == l ? void 0 : l.isBefore(n)) &&
                      (s.scheduledEndTime = n.add(1, "hour").toISOString()),
                      null != n &&
                        null != B &&
                        (s.recurrenceRule = (0, x.mF)(B, n)),
                      Z(s);
                  },
                  onRecurrenceChange: (e) => {
                    let n = b.startDate;
                    if (null != n) Z({ recurrenceRule: (0, x.mF)(e, n) }), P(e);
                  },
                  schedule: b,
                  recurrenceRule: O,
                  showEndDate: j === N.WX.EXTERNAL,
                  requireEndDate: j === N.WX.EXTERNAL,
                  disableStartDateTime: y,
                  guildId: S,
                }),
                null != A
                  ? (0, s.jsx)(r.Text, {
                      color: "text-danger",
                      variant: "text-xs/normal",
                      className: g.warning,
                      children: A,
                    })
                  : null,
                (0, s.jsx)(r.FormItem, {
                  title:
                    h.Z.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                  className: g.formItem,
                  children: (0, s.jsx)(r.TextArea, {
                    className: g.__invalid_descriptionInput,
                    placeholder:
                      h.Z.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                    value: D,
                    onChange: (e) => {
                      Z({ description: e });
                    },
                    maxLength: N.wm,
                    autosize: !0,
                  }),
                }),
                (0, s.jsxs)(r.FormItem, {
                  title: h.Z.Messages.GUILD_EVENT_IMAGE,
                  className: g.formItem,
                  children: [
                    (0, s.jsx)(r.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      className: g.addImageHint,
                      children: h.Z.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION,
                    }),
                    null != p
                      ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(o.Z, {
                              className: g.imagePreview,
                              iconWrapperClassName: g.imagePreviewInner,
                              image: p,
                              makeURL: (e) => {
                                if (null == e) return null;
                                if (null != S) {
                                  var l;
                                  return null !==
                                    (l = (0, I.Z)((0, _.Gb)(n, S, t))) &&
                                    void 0 !== l
                                    ? l
                                    : null;
                                }
                              },
                              onChange: H,
                              hint: h.Z.Messages.GUILD_EVENT_CHANGE_IMAGE,
                              showRemoveButton: !1,
                              enabled: !0,
                            }),
                            (0, s.jsx)(r.Button, {
                              size: r.Button.Sizes.SMALL,
                              onClick: () => z(null),
                              children: h.Z.Messages.GUILD_EVENT_REMOVE_IMAGE,
                            }),
                          ],
                        })
                      : (0, s.jsxs)(r.Button, {
                          size: r.Button.Sizes.SMALL,
                          children: [
                            h.Z.Messages.GUILD_EVENT_ADD_IMAGE,
                            (0, s.jsx)(d.ZP, { onChange: H }),
                          ],
                        }),
                  ],
                }),
                (0, s.jsx)(v, { editBroadcastInfoData: C }),
              ],
            }),
          ],
        });
      }
    },
    779250: function (e, n, l) {
      l.r(n),
        l.d(n, {
          default: function () {
            return k;
          },
        }),
        l(47120);
      var s,
        a,
        t = l(735250),
        i = l(470079),
        r = l(392711),
        o = l(442837),
        d = l(481060),
        c = l(447543),
        u = l(607070),
        E = l(745510),
        _ = l(96698),
        x = l(313201),
        I = l(433775),
        m = l(984933),
        N = l(430824),
        T = l(971130),
        h = l(981888),
        g = l(924301),
        v = l(482241),
        S = l(951539),
        C = l(545165),
        L = l(236373),
        A = l(230900),
        Z = l(854698),
        f = l(334877),
        j = l(785468),
        M = l(377329),
        D = l(311166),
        R = l(744782),
        p = l(129526),
        V = l(765305),
        G = l(981631),
        O = l(689938),
        U = l(373520);
      let { INVITE_OPTIONS_7_DAYS: y, INVITE_OPTIONS_UNLIMITED: b } = T.ZP;
      function B(e) {
        let { modal: n } = e,
          { createMultipleConfetti: l } = i.useContext(E.h);
        return (
          i.useEffect(() => {
            let e = null == n ? void 0 : n.getScrollerNode();
            if (null == e) return;
            let s = e.getBoundingClientRect();
            l(
              {
                position: {
                  type: "static-random",
                  minValue: { x: s.left - 100, y: s.top - 100 },
                  maxValue: { x: s.left + 100, y: s.top + 100 },
                },
                velocity: {
                  type: "static-random",
                  minValue: { x: -20, y: -20 },
                  maxValue: { x: -60, y: -60 },
                },
              },
              80,
            ),
              l(
                {
                  position: {
                    type: "static-random",
                    minValue: { x: s.right - 100, y: s.top - 100 },
                    maxValue: { x: s.right + 100, y: s.top + 100 },
                  },
                  velocity: {
                    type: "static-random",
                    minValue: { x: 20, y: -20 },
                    maxValue: { x: 60, y: -60 },
                  },
                },
                80,
              );
          }, [l, n]),
          null
        );
      }
      function P(e) {
        let {
            guildId: n,
            guildEvent: l,
            guildEventId: a,
            editBroadcastInfoData: c,
            isEdit: E,
            formErrors: I,
            transitionState: m,
            loading: N,
            error: T,
            onChange: h,
            onSave: v,
            onClose: S,
            createdEvent: C,
          } = e,
          L = (0, x.Dt)(),
          A = i.useRef(l),
          Z = !(0, r.isEqual)(A.current, l),
          p = i.useMemo(
            () => [
              {
                slideId: 0,
                label: O.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
                valid: null == I.entity,
                userErrorMessage: I.entity,
              },
              {
                slideId: 1,
                label: O.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
                valid: null == I.schedule && null == I.topic && (!E || Z),
                userErrorMessage: I.schedule,
              },
              {
                slideId: 2,
                label: O.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
                valid: !0,
              },
            ],
            [I, E, Z],
          ),
          V = Object.keys(s).length,
          G = (0, g.xt)(l),
          y = (e) => Math.max(0, Math.min(e, V - 1)),
          [b, P] = i.useState(G ? 1 : 0),
          [k, z] = i.useState(!1),
          H = i.useMemo(
            () =>
              p
                .slice(0, b + 1)
                .map((e) => e.valid)
                .every(Boolean),
            [p, b],
          ),
          F = b >= p.length ? 3 : p[y(b)].slideId,
          w = 3 === F;
        (0, f.l)((e) => e.onUpdateCanCloseModal)(w);
        let W = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
          X = i.useRef(null),
          Y = (e) => {
            z(!1), P(y(e));
          };
        i.useEffect(() => {
          null != C && Y(3);
        }, [null == C ? void 0 : C.id, Y]);
        let q = () => {
            if (!!H) 2 === F ? v() : w ? S() : Y(b + 1);
          },
          K = () => {
            Y(b - 1);
          },
          Q = O.Z.Messages.NEXT;
        return (
          2 === F &&
            (Q = E ? O.Z.Messages.SAVE_EVENT : O.Z.Messages.SCHEDULE_EVENT),
          (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)(d.ModalRoot, {
              transitionState: m,
              "aria-labelledby": L,
              size: d.ModalSize.DYNAMIC,
              children: [
                !W && w ? (0, t.jsx)(B, { modal: X.current }) : null,
                (0, t.jsxs)(d.ModalContent, {
                  className: U.content,
                  scrollerRef: X,
                  children: [
                    !w &&
                      (0, t.jsx)(_.Z, {
                        steps: p.map((e) => e.label),
                        stepIndex: b,
                        onClick: (e) => {
                          e < b ? K() : e > b && q();
                        },
                      }),
                    (0, t.jsxs)(d.Slides, {
                      activeSlide: F,
                      width: 440,
                      onSlideReady: (e) => {
                        z(e === F);
                      },
                      children: [
                        (0, t.jsx)(d.Slide, {
                          id: 0,
                          children: (0, t.jsx)(j.Z, {
                            guildId: n,
                            guildEvent: l,
                            validationErrorMessage: I.entity,
                            isSlideReady: k,
                            onChange: h,
                          }),
                        }),
                        (0, t.jsx)(d.Slide, {
                          id: 1,
                          children: (0, t.jsx)(D.Z, {
                            guildEvent: l,
                            guildEventId: a,
                            guildId: n,
                            editBroadcastInfoData: c,
                            onChange: h,
                            error: T,
                            validationErrorMessage: I.schedule,
                            isSlideReady: k,
                          }),
                        }),
                        (0, t.jsx)(d.Slide, {
                          id: 2,
                          children: (0, t.jsx)(M.Z, {
                            guildId: n,
                            guildEvent: l,
                            guildEventId: a,
                            error: T,
                          }),
                        }),
                        (0, t.jsx)(d.Slide, {
                          id: 3,
                          children: (0, t.jsx)(R.Z, { onClose: S, event: C }),
                        }),
                      ],
                    }),
                  ],
                }),
                !w &&
                  (0, t.jsxs)(d.ModalFooter, {
                    className: U.footer,
                    children: [
                      (0, t.jsxs)("div", {
                        className: U.inline,
                        children: [
                          (0, t.jsx)(d.Button, {
                            color: d.Button.Colors.PRIMARY,
                            onClick: S,
                            children: O.Z.Messages.CANCEL,
                          }),
                          (0, t.jsx)(d.Button, {
                            onClick: q,
                            disabled: !H,
                            className: U.button,
                            submitting: N,
                            children: Q,
                          }),
                        ],
                      }),
                      0 !== F &&
                        (0, t.jsx)(d.Button, {
                          look: d.Button.Looks.LINK,
                          size: d.Button.Sizes.MIN,
                          onClick: K,
                          color: d.Button.Colors.LINK,
                          children: O.Z.Messages.BACK,
                        }),
                    ],
                  }),
              ],
            }),
          })
        );
      }
      function k(e) {
        let {
            guildId: n,
            guildScheduledEventId: s,
            transitionState: a,
            onClose: r,
          } = e,
          u = (0, o.e7)([N.Z], () => N.Z.getGuild(n)),
          E = (0, o.e7)([g.ZP], () => g.ZP.getGuildScheduledEvent(s), [s]),
          _ = (0, o.e7)([m.ZP], () => m.ZP.getDefaultChannel(n), [n]),
          x = (0, L.j$)(E, _),
          [T, f] = i.useState(x),
          [j] = i.useState((0, L.Ql)(E)),
          [M, D] = i.useState(null),
          R = (e) => {
            var n;
            let l = (0, S.so)(e),
              s =
                null !== (n = e.channel_id) && void 0 !== n
                  ? n
                  : null == _
                    ? void 0
                    : _.id;
            null != s &&
              c.Z.createInvite(
                s,
                { max_age: y.value, max_uses: b.value },
                G.t4x.GUILD_EVENTS,
              ),
              l ? D(e) : r();
          },
          U = (0, I.Z)(u, null == E ? void 0 : E.id, T),
          [B, { loading: k, error: z }] = (0, h.Z)(async () => {
            if (null != M) return;
            let e = {
              broadcastToDirectoryChannels: U.broadcastToDirectoryChannels,
            };
            if (j && null != s) return await v.Z.saveEvent(s, T, n, e), r();
            let l = await v.Z.createGuildEvent(T, n, e);
            return R(l.body), l;
          }),
          H = i.useMemo(() => (0, p.Z)(T, j), [T, j]);
        return (0, t.jsx)(P, {
          guildId: n,
          guildEvent: T,
          guildEventId: s,
          editBroadcastInfoData: U,
          isEdit: j,
          formErrors: H,
          transitionState: a,
          loading: k,
          error: z,
          onChange: (e) => {
            if (null != e.entityType) {
              var l;
              let s = (0, A.xC)(e.entityType),
                [a] = (0, C.SU)(n, s);
              (e.channelId =
                null !== (l = null == a ? void 0 : a.id) && void 0 !== l
                  ? l
                  : null),
                e.entityType !== V.WX.EXTERNAL &&
                  T.entityType === V.WX.EXTERNAL &&
                  (e.entityMetadata = null);
            }
            f((n) => ({ ...n, ...e }));
          },
          onSave: () => {
            null != T.recurrenceRule && j && (0, Z.BP)(E, T)
              ? (0, d.openModalLazy)(async () => {
                  let { ConfirmModal: e } = await Promise.resolve().then(
                    l.bind(l, 481060),
                  );
                  return (n) =>
                    (0, t.jsxs)(e, {
                      ...n,
                      header: O.Z.Messages.EDIT_ALL_EVENTS,
                      confirmText: O.Z.Messages.SAVE_EVENT,
                      cancelText: O.Z.Messages.NEVERMIND,
                      onConfirm: B,
                      children: [
                        (0, t.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children:
                            O.Z.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM,
                        }),
                        (0, t.jsx)("br", {}),
                        (0, t.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children:
                            O.Z.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format(),
                        }),
                      ],
                    });
                })
              : B();
          },
          onClose: r,
          createdEvent: M,
        });
      }
      ((a = s || (s = {}))[(a.ENTITY = 0)] = "ENTITY"),
        (a[(a.SETTINGS = 1)] = "SETTINGS"),
        (a[(a.PREVIEW = 2)] = "PREVIEW"),
        (a[(a.SUCCESS = 3)] = "SUCCESS");
    },
    785468: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return O;
        },
      }),
        l(47120);
      var s = l(735250),
        a = l(470079),
        t = l(913527),
        i = l.n(t),
        r = l(442837),
        o = l(481060),
        d = l(933557),
        c = l(592125),
        u = l(430824),
        E = l(496675),
        _ = l(699516),
        x = l(594174),
        I = l(924301),
        m = l(518756),
        N = l(545165),
        T = l(77810),
        h = l(274311),
        g = l(230900),
        v = l(63712),
        S = l(765305),
        C = l(981631),
        L = l(689938),
        A = l(356731);
      let Z = (e) => e === S.WX.EXTERNAL,
        f = (e, n) => {
          let l = c.Z.getChannel(e);
          if (null == l) return null;
          let a = l.type === C.d4z.GUILD_STAGE_VOICE,
            t = (0, h.Q)(l, n),
            i = t ? o.VoiceNormalIcon : o.VoiceLockIcon,
            r = t ? o.StageIcon : o.StageLockIcon;
          return (0, s.jsx)(a ? r : i, {
            color: "currentColor",
            size: "md",
            className: A.channelOptionIcon,
          });
        },
        j = (e) => {
          let {
              guildId: n,
              channelType: l,
              channel: a,
              onSelectChannel: t,
              disabled: i,
              entityType: r,
            } = e,
            c = l === C.d4z.GUILD_STAGE_VOICE,
            u = (0, h.Q)(a, r),
            E = (0, N.sR)(n, l);
          return (0, s.jsxs)(o.FormItem, {
            title: c
              ? L.Z.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL
              : L.Z.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
            className: A.options,
            disabled: i,
            required: !0,
            children: [
              (0, s.jsx)(o.SearchableSelect, {
                value: null == a ? void 0 : a.id,
                options: E.map((e) => ({
                  value: e.id,
                  label: (0, d.F6)(e, x.default, _.Z, !0),
                })),
                onChange: (e) => {
                  let n = E.find((n) => n.id === e);
                  t(null != n ? n : void 0);
                },
                renderOptionPrefix: (e) => f(null == e ? void 0 : e.value, r),
                isDisabled: i,
              }),
              !u &&
                (0, s.jsx)(o.Text, {
                  color: "header-secondary",
                  className: A.channelPrivate,
                  variant: "text-sm/normal",
                  children: L.Z.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION,
                }),
            ],
          });
        };
      function M(e, n, l, s) {
        return n
          ? {
              disabled: !0,
              tooltipText:
                L.Z.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT,
            }
          : l
            ? 0 === s && e !== S.WX.EXTERNAL
              ? {
                  disabled: !0,
                  tooltipText:
                    L.Z.Messages
                      .GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL,
                }
              : { disabled: !1, tooltipText: null }
            : {
                disabled: !0,
                tooltipText:
                  L.Z.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION,
              };
      }
      let D = (e) => (n) => {
          e({ entityMetadata: { location: n } });
        },
        R = (e) => (n) => {
          var l;
          e({
            channelId:
              null !== (l = null == n ? void 0 : n.id) && void 0 !== l
                ? l
                : null,
          });
        },
        p = (e, n) => (l) => {
          let { value: s } = l,
            a = { entityType: s, scheduledEndTime: void 0 };
          if (Z(s)) {
            var t;
            let e = (
              null !== (t = i()(n.scheduledStartTime)) && void 0 !== t
                ? t
                : i()()
            ).add(2, "hour");
            a.scheduledEndTime = e.toISOString();
          }
          e(a);
        };
      function V(e) {
        let { guildId: n, guildEvent: l, onChange: t, isFocusReady: i } = e,
          { entityType: d, channelId: u } = l,
          E = (0, r.e7)([c.Z], () => c.Z.getChannel(u), [u]),
          _ = a.useRef(null);
        a.useEffect(() => {
          if (i && Z(d)) {
            var e;
            null === (e = _.current) || void 0 === e || e.focus();
          }
        }, [i, d]);
        let x = D(t),
          m = R(t),
          N = (0, g.xV)(l),
          T = (0, g.xC)(d),
          h = (0, I.xt)(l);
        return null == d || d === S.WX.NONE
          ? null
          : Z(d)
            ? (0, s.jsx)(o.FormItem, {
                title: L.Z.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
                className: A.options,
                required: !0,
                children: (0, s.jsx)(o.TextInput, {
                  className: A.__invalid_textInput,
                  onChange: x,
                  placeholder:
                    L.Z.Messages
                      .GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
                  maxLength: S.gG,
                  value: null != N ? N : "",
                  inputRef: _,
                }),
              })
            : null == T
              ? null
              : (0, s.jsx)(j, {
                  guildId: n,
                  channelType: T,
                  onSelectChannel: m,
                  channel: E,
                  entityType: d,
                  disabled: h,
                });
      }
      function G(e) {
        let { guildId: n, guildEvent: l, onChange: t } = e,
          i = (0, r.e7)([u.Z], () => u.Z.getGuild(n), [n]),
          d = (0, m.Z)(n, void 0),
          c = (0, m.Z)(n, C.d4z.GUILD_VOICE),
          E = (0, m.Z)(n, C.d4z.GUILD_STAGE_VOICE),
          _ = (0, N.sR)(n, C.d4z.GUILD_VOICE),
          x = (0, T.q)(i),
          h = null == i ? void 0 : i.hasFeature(C.oNc.COMMUNITY),
          g = (0, I.xt)(l),
          v = p(t, l),
          Z = a.useMemo(() => {
            let e = [
              {
                name: L.Z.Messages.VOICE_CHANNEL,
                value: S.WX.VOICE,
                desc: L.Z.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
                icon: o.VoiceNormalIcon,
                ...M(S.WX.VOICE, g, c, _.length),
              },
              {
                name: L.Z.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
                value: S.WX.EXTERNAL,
                desc: L.Z.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
                icon: o.LocationIcon,
                ...M(S.WX.EXTERNAL, g, d, 0),
              },
            ];
            return h
              ? [
                  {
                    name: L.Z.Messages.STAGE_CHANNEL,
                    value: S.WX.STAGE_INSTANCE,
                    desc: L.Z.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
                    icon: o.StageIcon,
                    ...M(S.WX.STAGE_INSTANCE, g, E, x.length),
                  },
                  ...e,
                ]
              : e;
          }, [d, c, E, h, _.length, x.length, g]);
        return (0, s.jsx)(o.RadioGroup, {
          value: l.entityType,
          options: Z,
          onChange: v,
          className: A.options,
        });
      }
      function O(e) {
        let {
            guildId: n,
            guildEvent: a,
            validationErrorMessage: t,
            onChange: i,
            isSlideReady: d = !1,
          } = e,
          { entityType: c } = a,
          _ = (0, r.e7)([u.Z], () => u.Z.getGuild(n), [n]),
          x = (0, T.q)(_),
          I = (0, r.e7)([E.Z], () => E.Z.can(C.Plq.MANAGE_CHANNELS, _)),
          m = null == _ ? void 0 : _.hasFeature(C.oNc.COMMUNITY),
          N = p(i, a),
          h = m && !Z(c) && 0 === x.length && I && null != c;
        return (0, s.jsxs)("div", {
          className: A.container,
          children: [
            (0, s.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              className: A.header,
              children: L.Z.Messages.GUILD_EVENT_LOCATION_TITLE,
            }),
            (0, s.jsx)(o.Text, {
              color: "header-secondary",
              className: A.text,
              variant: "text-sm/normal",
              children: L.Z.Messages.GUILD_EVENT_LOCATION_SUBTITLE,
            }),
            (0, s.jsx)(G, { guildId: n, guildEvent: a, onChange: i }),
            (0, s.jsx)(V, {
              guildId: n,
              guildEvent: a,
              isFocusReady: d,
              onChange: i,
            }),
            h
              ? (0, s.jsx)(v.Z, {
                  onClick: () => {
                    N({
                      value: S.WX.STAGE_INSTANCE,
                      name: L.Z.Messages.STAGE_CHANNEL,
                    }),
                      (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                          l.e("7590"),
                          l.e("45094"),
                          l.e("47431"),
                        ]).then(l.bind(l, 218613));
                        return (l) =>
                          (0, s.jsx)(e, {
                            ...l,
                            channelType: C.d4z.GUILD_STAGE_VOICE,
                            guildId: n,
                          });
                      });
                  },
                })
              : null,
          ],
        });
      }
    },
    377329: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return T;
        },
      });
      var s = l(735250),
        a = l(470079),
        t = l(442837),
        i = l(481060),
        r = l(471445),
        o = l(41776),
        d = l(592125),
        c = l(430824),
        u = l(594174),
        E = l(236373),
        _ = l(230900),
        x = l(405613),
        I = l(460838),
        m = l(689938),
        N = l(26940);
      function T(e) {
        var n, l, T;
        let { guildId: h, guildEvent: g, guildEventId: v, error: S } = e,
          C = a.useMemo(() => (0, E.Gb)(g, h), [g, h]),
          { channel_id: L, name: A, image: Z, description: f } = C,
          j = (0, t.e7)([d.Z], () => d.Z.getChannel(L), [L]),
          M = (0, t.e7)([c.Z], () => c.Z.getGuild(h), [h]),
          D = (0, _.cS)(C),
          R = (0, t.e7)(
            [u.default],
            () =>
              null != g.creatorId
                ? u.default.getUser(g.creatorId)
                : u.default.getCurrentUser(),
            [g.creatorId],
          ),
          p = (0, t.e7)([o.Z], () => o.Z.isLurking(h), [h]),
          V = (0, r.KS)(j, M);
        return (0, s.jsxs)("div", {
          className: N.content,
          children: [
            (0, s.jsx)(I.Z, {
              className: N.previewCard,
              guild: M,
              channel: j,
              location: null != D ? D : void 0,
              creator: R,
              name: A,
              description: f,
              imageSource:
                ((l = (0, E.Gb)(g, h, v)),
                null == (T = Z) && null == l.image
                  ? null
                  : null != T && /^data:/.test(T)
                    ? T
                    : (0, x.Z)(l)),
              isActive: !1,
              isUserLurking: p,
              speakers: [],
              speakerCount: 0,
              rsvped: !0,
              guildEvent: C,
              eventPreview: C,
            }),
            (0, s.jsxs)("div", {
              className: N.textContainer,
              children: [
                (0, s.jsx)(i.Heading, {
                  variant: "heading-xl/semibold",
                  children: m.Z.Messages.GUILD_EVENT_PREVIEW_TITLE,
                }),
                (0, s.jsx)(i.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: N.subheader,
                  children:
                    null != location
                      ? m.Z.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY
                      : m.Z.Messages.GUILD_EVENT_PREVIEW_BODY.format({
                          channelName:
                            null !== (n = null == j ? void 0 : j.name) &&
                            void 0 !== n
                              ? n
                              : "",
                          channelHook: () => {
                            var e;
                            return (0, s.jsxs)("div", {
                              className: N.channelName,
                              children: [
                                null != V
                                  ? (0, s.jsx)(V, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 20,
                                      height: 20,
                                      className: N.icon,
                                    })
                                  : (0, s.jsx)(i.LocationIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      height: 18,
                                      width: 18,
                                      className: N.locationIcon,
                                    }),
                                null !== (e = null == j ? void 0 : j.name) &&
                                void 0 !== e
                                  ? e
                                  : D,
                              ],
                            });
                          },
                        }),
                }),
                null != S &&
                  (0, s.jsx)(i.Text, {
                    color: "text-danger",
                    variant: "text-xs/normal",
                    className: N.subheader,
                    children: S.getAnyErrorMessage(),
                  }),
              ],
            }),
          ],
        });
      }
    },
    311166: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return o;
        },
      });
      var s = l(735250);
      l(470079);
      var a = l(481060),
        t = l(195367),
        i = l(689938),
        r = l(759704);
      function o(e) {
        let { isSlideReady: n, ...l } = e;
        return (0, s.jsxs)("div", {
          className: r.__invalid_slideContainer,
          children: [
            (0, s.jsxs)("div", {
              className: r.header,
              children: [
                (0, s.jsx)(a.Heading, {
                  variant: "heading-xl/semibold",
                  children: i.Z.Messages.GUILD_EVENT_CREATE_HEADER,
                }),
                (0, s.jsx)(a.Text, {
                  color: "header-secondary",
                  className: r.text,
                  variant: "text-sm/normal",
                  children: i.Z.Messages.GUILD_EVENT_CREATE_BODY,
                }),
              ],
            }),
            (0, s.jsx)(t.Z, { ...l, canSetFocus: n }),
          ],
        });
      }
    },
    744782: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return C;
        },
      });
      var s = l(735250);
      l(470079);
      var a = l(442837),
        t = l(481060),
        i = l(264229),
        r = l(751499),
        o = l(366980),
        d = l(603236),
        c = l(939863),
        u = l(984933),
        E = l(430824),
        _ = l(341165),
        x = l(626135),
        I = l(572004),
        m = l(971130),
        N = l(230900),
        T = l(981631),
        h = l(689938),
        g = l(237645);
      let { INVITE_OPTIONS_7_DAYS: v, INVITE_OPTIONS_UNLIMITED: S } = m.ZP;
      function C(e) {
        var n, l, C;
        let { onClose: L, event: A } = e,
          Z = null == A ? void 0 : A.guild_id,
          f = (0, a.e7)(
            [u.ZP],
            () => {
              var e;
              return null != Z
                ? null === (e = u.ZP.getDefaultChannel(Z)) || void 0 === e
                  ? void 0
                  : e.id
                : null;
            },
            [Z],
          ),
          j = (0, a.e7)([E.Z], () => E.Z.getGuild(Z), [Z]),
          M =
            (null == j ? void 0 : j.vanityURLCode) != null &&
            (null == j ? void 0 : j.vanityURLCode.length) > 0,
          { enabled: D } = r.Z.useExperiment(
            { guildId: null != Z ? Z : T.lds, location: "bd50e8_1" },
            { autoTrackExposure: M },
          ),
          { channel_id: R, id: p } = null != A ? A : {},
          V = (0, a.e7)(
            [_.Z],
            () => {
              let e = null != R ? R : f;
              return null == e ? null : _.Z.getInvite(e);
            },
            [R, f],
          );
        if (null == A) return L(), null;
        let G =
            D &&
            null !== (n = null == j ? void 0 : j.vanityURLCode) &&
            void 0 !== n
              ? n
              : null == V
                ? void 0
                : V.code,
          O =
            null != G
              ? (0, i.tV)({ baseCode: G, guildScheduledEventId: p })
              : null,
          U = null == O || null == V,
          y = (0, o.Z)(null != O ? O : ""),
          b =
            null !== (l = null == V ? void 0 : V.maxAge) && void 0 !== l
              ? l
              : v.value,
          B =
            null !== (C = null == V ? void 0 : V.maxUses) && void 0 !== C
              ? C
              : S.value;
        return (0, s.jsxs)("div", {
          className: g.container,
          children: [
            (0, s.jsx)(t.Clickable, {
              onClick: L,
              className: g.close,
              "aria-label": h.Z.Messages.CLOSE,
              children: (0, s.jsx)(t.XSmallIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
            (0, s.jsx)(c.Z, {
              children: (0, s.jsx)("div", {
                className: g.iconContainer,
                children: (0, s.jsx)(t.CalendarIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 30,
                  width: 30,
                  className: g.icon,
                }),
              }),
            }),
            (0, s.jsx)(t.Heading, {
              variant: "heading-xl/semibold",
              className: g.header,
              children: h.Z.Messages.GUILD_EVENT_CREATED_MODAL_HEADER,
            }),
            (0, s.jsx)(t.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: g.body,
              children: h.Z.Messages.GUILD_EVENT_CREATED_MODAL_BODY,
            }),
            (0, s.jsxs)("div", {
              className: g.invite,
              children: [
                (0, s.jsx)(d.S, {
                  value: y,
                  autoFocus: !1,
                  onCopy: (e) => {
                    if (U) return;
                    (0, I.JG)(e);
                    let n = (0, N.xC)(A.entity_type);
                    x.default.track(T.rMx.COPY_INSTANT_INVITE, {
                      server: A.guild_id,
                      channel: R,
                      channel_type: n,
                      location: T.t4x.GUILD_EVENTS,
                      code: V.code,
                      guild_scheduled_event_id: null == A ? void 0 : A.id,
                    });
                  },
                }),
                (null == j ? void 0 : j.vanityURLCode) == null &&
                  (0, s.jsx)(t.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    className: g.inviteDetail,
                    children: (0, m.Vg)(b, B),
                  }),
              ],
            }),
          ],
        });
      }
    },
    63712: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return E;
        },
      });
      var s = l(735250);
      l(470079);
      var a = l(442837),
        t = l(481060),
        i = l(536442),
        r = l(142497),
        o = l(689938),
        d = l(510863),
        c = l(137707);
      let u = () =>
        (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.Text, {
              color: "header-primary",
              variant: "text-xs/normal",
              className: d.inlineText,
              children: o.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1,
            }),
            (0, s.jsx)(t.Text, {
              color: "header-primary",
              variant: "text-xs/normal",
              className: d.inlineText,
              children: o.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2,
            }),
            (0, s.jsx)(t.Text, {
              color: "header-primary",
              variant: "text-xs/normal",
              className: d.inlineText,
              children: o.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3,
            }),
            (0, s.jsx)(t.Text, {
              color: "header-primary",
              variant: "text-xs/normal",
              className: d.inlineText,
              children: o.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4,
            }),
          ],
        });
      function E(e) {
        let { onClick: n } = e;
        return (0, a.e7)(
          [i.qc],
          () => !i.qc.hasHotspot(i.v6.STAGE_CHANNEL_UPSELL),
        )
          ? null
          : (0, s.jsxs)("div", {
              className: d.container,
              children: [
                (0, s.jsxs)("div", {
                  className: d.content,
                  children: [
                    (0, s.jsxs)("div", {
                      className: d.textContainer,
                      children: [
                        (0, s.jsx)(t.Heading, {
                          variant: "heading-md/semibold",
                          children: o.Z.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE,
                        }),
                        (0, s.jsx)(t.Text, {
                          color: "header-secondary",
                          variant: "text-xs/normal",
                          className: d.descriptionText,
                          children: o.Z.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY,
                        }),
                        (0, s.jsx)(t.Text, {
                          color: "header-secondary",
                          variant: "text-xs/normal",
                          children:
                            o.Z.Messages.GUILD_EVENT_STAGE_UPSELL.format({
                              suggestionsHook: u,
                            }),
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: d.image,
                      children: (0, s.jsx)("img", {
                        src: c,
                        alt: o.Z.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE,
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: d.footer,
                  children: [
                    (0, s.jsx)(t.Button, {
                      onClick: n,
                      color: t.Button.Colors.PRIMARY,
                      size: t.Button.Sizes.SMALL,
                      className: d.button,
                      children: o.Z.Messages.CREATE_STAGE_CHANNEL,
                    }),
                    (0, s.jsx)(t.Button, {
                      onClick: () => {
                        r.Kw(i.v6.STAGE_CHANNEL_UPSELL);
                      },
                      color: t.Button.Colors.TRANSPARENT,
                      size: t.Button.Sizes.SMALL,
                      look: t.ButtonLooks.LINK,
                      children: o.Z.Messages.DONT_SHOW_AGAIN,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    129526: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return d;
        },
      });
      var s = l(913527),
        a = l.n(s),
        t = l(230900),
        i = l(854698),
        r = l(765305),
        o = l(689938);
      function d(e, n) {
        return {
          entity: (function (e) {
            let { entityType: n, channelId: l } = e,
              s = (0, t.xV)(e);
            return null == n || n === r.WX.NONE
              ? "An event type must be specified."
              : (null == s || "" === s.trim()) && null == l
                ? "Either a location or channel must be specified."
                : void 0;
          })(e),
          schedule: (function (e, n) {
            let l = (0, i.v1)(e),
              { entityType: s } = e;
            if (null == l || (null == l ? void 0 : l.startDate) == null)
              return o.Z.Messages.GUILD_EVENT_START_DATE_REQUIRED;
            let { startDate: t, endDate: d } = l;
            return s === r.WX.EXTERNAL && null == d
              ? o.Z.Messages.GUILD_EVENT_END_DATE_REQUIRED
              : !n && t.isBefore(a()())
                ? o.Z.Messages.GUILD_EVENT_PAST_START_DATE
                : null != d && null != t && d.isBefore(t)
                  ? o.Z.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE
                  : null != d && d.isBefore(a()())
                    ? o.Z.Messages.GUILD_EVENT_PAST_END_DATE_1
                    : void 0;
          })(e, n),
          topic: (function (e) {
            let { name: n } = e;
            return null == n || "" === n.trim()
              ? "Topic must be specified."
              : void 0;
          })(e),
        };
      }
    },
    516129: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return I;
        },
      });
      var s = l(735250);
      l(470079);
      var a = l(120356),
        t = l.n(a),
        i = l(780384),
        r = l(481060),
        o = l(410030),
        d = l(44315),
        c = l(208567),
        u = l(981631),
        E = l(686550);
      let _ = u.Ilk.PRIMARY_400,
        x = u.Ilk.PRIMARY_500;
      function I(e) {
        let {
            enabled: n,
            imageClassName: l,
            iconWrapperClassName: a,
            ...u
          } = e,
          I = (0, o.ZP)(),
          m = (0, i.wj)(I) ? _ : x,
          N = { height: 18, width: 18, color: (0, d.Lq)(m) };
        return (0, s.jsx)(c.Z, {
          className: t()({
            [E.avatarUploader]: n,
            [E.avatarUploaderDisabled]: !n,
          }),
          imageClassName: t()(l, E.avatarUploaderInnerSquare, {
            [E.avatarUploaderInnerSquareDisabled]: !n,
          }),
          icon:
            null != u.image && "" !== u.image
              ? (0, s.jsx)(r.PencilIcon, { size: "custom", ...N })
              : (0, s.jsx)(r.ImagePlusIcon, { size: "custom", ...N }),
          iconClassName: t()(E.avatarUploadIcon, E.hideDefaultIcon),
          iconWrapperClassName: a,
          showIcon: !0,
          showIconDisabled: !0,
          hideSize: !0,
          ...u,
        });
      }
    },
    208567: function (e, n, l) {
      l.d(n, {
        S: function () {
          return N;
        },
      }),
        l(47120);
      var s,
        a = l(735250),
        t = l(470079),
        i = l(120356),
        r = l.n(i),
        o = l(512722),
        d = l.n(o),
        c = l(481060),
        u = l(624138),
        E = l(813197),
        _ = l(981631),
        x = l(689938),
        I = l(315822);
      function m(e, n, l) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = l),
          e
        );
      }
      function N(e) {
        let { className: n, icon: l = null } = e;
        return (0, a.jsx)(c.ThemeProvider, {
          theme: _.BRd.LIGHT,
          children: (e) =>
            (0, a.jsx)("div", {
              className: r()(I.imageUploaderIcon, n, e),
              children: l,
            }),
        });
      }
      class T extends (s = t.PureComponent) {
        handleExternalFileChange(e) {
          d()(
            null != this.inputRef.current,
            "ImageInputRef asked to handleExternalFileChange when not mounted",
          ),
            this.inputRef.current.handleFileChange(e);
        }
        render() {
          var e;
          let n, l, s, t;
          let {
            image: i,
            hint: o,
            name: d,
            makeURL: m,
            disabled: T,
            onChange: h,
            showIcon: g,
            showIconDisabled: v,
            className: S,
            imageClassName: C,
            iconClassName: L,
            iconWrapperClassName: A,
            icon: Z,
            hideSize: f,
            imageStyle: j,
            showRemoveButton: M,
            maxFileSizeBytes: D,
            onFileSizeError: R,
            onOpenImageSelectModal: p,
            "aria-label": V,
          } = this.props;
          if (
            (null != (n = null != i && /^data:/.test(i) ? i : m(i))
              ? (l = 'url("'.concat(n, '")'))
              : null != d &&
                (s = (0, a.jsx)(c.Heading, {
                  variant: "heading-xxl/normal",
                  color: "always-white",
                  className: I.imageUploaderAcronym,
                  children: (0, u.Zg)(d),
                })),
            T)
          )
            return (0, a.jsx)("div", {
              className: r()(I.imageUploader, I.disabled, S),
              children: (0, a.jsxs)("div", {
                className: r()(I.imageUploaderInner, C),
                style: { ...j, backgroundImage: l },
                children: [
                  s,
                  v &&
                    (0, a.jsx)("div", {
                      className: r()(
                        I.imageUploaderIcon,
                        I.imageUploaderIconDisabled,
                        L,
                      ),
                      children: Z,
                    }),
                ],
              }),
            });
          null != i
            ? (t = (0, a.jsx)(c.Anchor, {
                className: I.removeButton,
                onClick: this.handleRemove,
                children: x.Z.Messages.REMOVE,
              }))
            : !f &&
              (t = (0, a.jsx)("small", {
                className: I.sizeInfo,
                children: x.Z.Messages.MINIMUM_SIZE.format({ size: _.IXf }),
              }));
          let G =
            null !== (e = null != V ? V : o) && void 0 !== e
              ? e
              : x.Z.Messages.CHANGE_AVATAR;
          return (0, a.jsxs)("div", {
            className: r()(I.imageUploader, S),
            children: [
              (0, a.jsx)(c.FocusRing, {
                within: !0,
                children: (0, a.jsxs)("div", {
                  className: g ? r()(I.imageUploaderIconWrapper, A) : void 0,
                  children: [
                    (0, a.jsxs)("div", {
                      className: r()(I.imageUploaderInner, C),
                      style: { ...j, backgroundImage: l },
                      children: [
                        (0, a.jsx)("span", { "aria-hidden": !0, children: s }),
                        null != p
                          ? (0, a.jsx)(c.Clickable, {
                              className: I.imageUploaderFileInput,
                              "aria-label": G,
                              onClick: p,
                            })
                          : (0, a.jsx)(E.ZP, {
                              ref: this.inputRef,
                              onChange: h,
                              className: I.imageUploaderFileInput,
                              "aria-label": G,
                              tabIndex: 0,
                              maxFileSizeBytes: D,
                              onFileSizeError: R,
                            }),
                      ],
                    }),
                    null != o &&
                      (0, a.jsx)("div", {
                        className: I.imageUploaderHint,
                        "aria-hidden": "true",
                        children: o,
                      }),
                    g && (0, a.jsx)(N, { className: L, icon: Z }),
                  ],
                }),
              }),
              M ? t : null,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            m(this, "inputRef", t.createRef()),
            m(this, "handleRemove", () => {
              this.props.onChange(null);
            });
        }
      }
      m(T, "defaultProps", {
        name: "",
        makeURL: (e) => e,
        disabled: !1,
        showIcon: !1,
        hideSize: !1,
        showRemoveButton: !0,
        maxFileSizeBytes: 1 / 0,
        icon: null,
      }),
        (n.Z = T);
    },
    751499: function (e, n, l) {
      var s = l(818083);
      n.Z = (0, s.B)({
        kind: "guild",
        id: "2022-11_default_to_server_vanity_v2",
        label: "Default To Server Vanity v2",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
    },
    603236: function (e, n, l) {
      l.d(n, {
        I: function () {
          return Z;
        },
        S: function () {
          return A;
        },
      }),
        l(47120);
      var s = l(735250),
        a = l(470079),
        t = l(120356),
        i = l.n(t),
        r = l(533800),
        o = l(442837),
        d = l(846519),
        c = l(481060),
        u = l(914010),
        E = l(246946),
        _ = l(626135),
        x = l(572004),
        I = l(630388),
        m = l(971130),
        N = l(530436),
        T = l(245335),
        h = l(981631),
        g = l(689938),
        v = l(871820),
        S = l(803636),
        C = l(739017),
        L = l(113207);
      let A = o.ZP.connectStores([E.Z], () => ({
          hideValue: E.Z.hideInstantInvites,
        }))((e) => {
          let {
              value: n,
              autoFocus: l,
              hideValue: t,
              onCopy: r,
              disabled: o,
            } = e,
            [u, E] = a.useState(!1),
            [_, I] = a.useState(!1),
            m = a.useMemo(() => new d.sW(1e3, () => I(!1)), [I]);
          return (
            a.useEffect(
              () => () => {
                m.cancel();
              },
              [m],
            ),
            (0, s.jsxs)("div", {
              className: i()(
                S.input,
                C.__invalid_flexJustifyBetween,
                C.flexCenter,
                { [S.success]: _, [S.focused]: u },
              ),
              children: [
                (0, s.jsx)(c.TextInput, {
                  className: v.copyInput,
                  name: "invite",
                  value: t ? g.Z.Messages.INSTANT_INVITE_HIDDEN : n,
                  editable: !1,
                  inputClassName: v.input,
                  autoFocus: l,
                  onFocus: () => (l ? E(!0) : null),
                  onBlur: () => (l ? E(!1) : null),
                  spellCheck: "false",
                  onClick: (e) => e.currentTarget.select(),
                  "aria-label": g.Z.Messages.FORM_LABEL_INVITE_LINK,
                  disabled: o,
                }),
                x.wS
                  ? (0, s.jsx)(c.Button, {
                      size: c.Button.Sizes.SMALL,
                      color: _ ? c.Button.Colors.GREEN : c.Button.Colors.BRAND,
                      className: v.copyButton,
                      onClick: () => {
                        I(!0), m.delay(), r(n);
                      },
                      disabled: o,
                      children: _
                        ? g.Z.Messages.INVITE_COPIED
                        : g.Z.Messages.COPY,
                    })
                  : null,
              ],
            })
          );
        }),
        Z = (e) => {
          let {
              guild: n,
              noInvitesAvailable: l,
              showFriends: t,
              onClose: o,
              modalState: d,
              isGuestInviteCreationToggleEnabled: E,
              inviteFlags: S,
              setInviteFlags: C,
              showGuestInviteToggleForCurrentVoiceChannel: Z,
              copyValue: f,
              changePage: j,
              inviteChannel: M,
              source: D,
              code: R,
              guildScheduledEvent: p,
              disabled: V,
            } = e,
            { maxAge: G, maxUses: O, networkError: U, showVanityURL: y } = d,
            b = a.useCallback(() => {
              (0, x.JG)(f),
                _.default.track(h.rMx.COPY_INSTANT_INVITE, {
                  server: u.Z.getGuildId(),
                  channel: null == M ? void 0 : M.id,
                  channel_type: null == M ? void 0 : M.type,
                  location: D,
                  code: R,
                  guild_scheduled_event_id: null == p ? void 0 : p.id,
                });
            }, [f, M, D, R, p]);
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(A, { value: f, autoFocus: t, onCopy: b, disabled: V }),
              E
                ? (0, s.jsx)("div", {
                    className: v.temporaryMembershipContainerBackground,
                    children: (0, s.jsx)(c.FormSwitch, {
                      className: v.temporaryMembershipContainer,
                      value: (0, I.yE)(S, r.$.IS_GUEST_INVITE),
                      onChange: (e) => C((0, I.mB)(S, r.$.IS_GUEST_INVITE, e)),
                      note: g.Z.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                      disabled: V,
                      hideBorder: !0,
                      children: Z
                        ? g.Z.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY
                        : g.Z.Messages.GRANT_GUEST_MEMBERSHIP,
                    }),
                  })
                : null,
              l || y
                ? null
                : (0, s.jsxs)(c.Text, {
                    variant: "text-xs/normal",
                    className: i()(L.marginTop8, v.footerText),
                    children: [
                      (0, m.Vg)(G, O),
                      " ",
                      t
                        ? (0, s.jsx)(c.Anchor, {
                            onClick: () => j(T.RV.SETTINGS),
                            children: g.Z.Messages.INVITE_EDIT_LINK,
                          })
                        : null,
                    ],
                  }),
              !l && t && y
                ? (0, s.jsxs)(c.Text, {
                    variant: "text-xs/normal",
                    className: i()(L.marginTop8, v.footerText),
                    children: [
                      g.Z.Messages.INVITE_VANITY_USED,
                      " ",
                      (0, s.jsx)(c.Anchor, {
                        onClick: () => j(T.RV.SETTINGS),
                        children: g.Z.Messages.INVITE_EDIT_LINK,
                      }),
                    ],
                  })
                : null,
              null != U
                ? (0, s.jsx)(N.W, { guild: n, error: U, onClose: o })
                : null,
            ],
          });
        };
    },
    530436: function (e, n, l) {
      l.d(n, {
        W: function () {
          return u;
        },
      });
      var s = l(735250),
        a = l(470079),
        t = l(481060),
        i = l(434404),
        r = l(496675),
        o = l(981631),
        d = l(689938),
        c = l(871820);
      function u(e) {
        let { guild: n, error: l, onClose: u } = e,
          E = n.id,
          _ = a.useCallback(() => {
            u(), i.Z.open(E, o.pNK.INSTANT_INVITES);
          }, [E, u]),
          x = a.useCallback(
            (e) =>
              (0, s.jsx)(t.Clickable, {
                className: c.errorLink,
                onClick: _,
                children: (0, s.jsx)(t.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  tag: "span",
                  children: e,
                }),
              }),
            [_],
          ),
          I = a.useCallback(
            (e) =>
              (0, s.jsx)(t.Anchor, {
                href: o.EYA.INVITES_HELP,
                target: "_blank",
                children: (0, s.jsx)(t.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  tag: "span",
                  children: e,
                }),
              }),
            [],
          ),
          m =
            l.code !== o.evJ.TOO_MANY_INVITES
              ? l.getAnyErrorMessage()
              : r.Z.can(o.Plq.MANAGE_GUILD, n)
                ? d.Z.Messages.TOO_MANY_INVITES_ERROR.format({
                    inviteListHook: x,
                    inviteHelpHook: I,
                  })
                : d.Z.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
        return (0, s.jsx)(t.Text, {
          className: c.errorMessage,
          variant: "text-xs/normal",
          color: "text-danger",
          children: m,
        });
      }
    },
    582019: function (e, n, l) {
      l.d(n, {
        Xd: function () {
          return m;
        },
        mv: function () {
          return I;
        },
      });
      var s = l(735250);
      l(470079);
      var a = l(442837),
        t = l(692547),
        i = l(481060),
        r = l(239091),
        o = l(584511),
        d = l(112831),
        c = l(51144),
        u = l(88751),
        E = l(930180),
        _ = l(689938),
        x = l(578814);
      let I = (e) => {
          let { channelId: n } = e,
            l = (0, E._d)(n);
          return 0 === l
            ? null
            : (0, s.jsxs)("div", {
                className: x.blockedNotice,
                children: [
                  (0, s.jsx)(i.DenyIcon, {
                    size: "lg",
                    className: x.__invalid_blockedIcon,
                    color: t.Z.unsafe_rawColors.RED_400.css,
                  }),
                  (0, s.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children:
                      _.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format(
                        { number: l },
                      ),
                  }),
                  (0, s.jsx)(i.Clickable, {
                    className: x.blockedButton,
                    onClick: (e) => {
                      (0, r.vq)(
                        e,
                        (e) => (0, s.jsx)(N, { ...e, channelId: n }),
                        { position: "left", align: "bottom" },
                      );
                    },
                    children: _.Z.Messages.VIEW_ALL,
                  }),
                ],
              });
        },
        m = (e) => {
          let { user: n, showStatus: l, speaker: t, channelId: r } = e,
            E = (0, a.e7)([u.ZP], () => u.ZP.isModerator(n.id, r)),
            I = null;
          return (
            l &&
              (I = t
                ? _.Z.Messages.STAGE_SPEAKER
                : E
                  ? _.Z.Messages.STAGE_MODERATOR_TOOLTIP
                  : _.Z.Messages.STAGE_AUDIENCE),
            (0, s.jsxs)("div", {
              className: x.user,
              children: [
                (0, s.jsx)(
                  o.Z,
                  {
                    src: n.getAvatarURL(null, 32),
                    size: i.AvatarSizes.SIZE_32,
                    muted: !1,
                    deafen: !1,
                    speaking: !1,
                    ringing: !1,
                    renderIcon: t
                      ? () =>
                          (0, s.jsx)(i.MicrophoneIcon, {
                            size: "md",
                            color: "currentColor",
                            className: x.icon,
                          })
                      : null,
                  },
                  n.id,
                ),
                (0, s.jsxs)("div", {
                  className: x.userInfo,
                  children: [
                    (0, s.jsxs)("div", {
                      className: x.username,
                      children: [
                        (0, s.jsx)(d.Z, {
                          size: l ? d.Z.Sizes.SIZE_16 : d.Z.Sizes.SIZE_14,
                          children: c.ZP.getName(n),
                        }),
                        (0, s.jsx)(d.Z, {
                          size: l ? d.Z.Sizes.SIZE_16 : d.Z.Sizes.SIZE_14,
                          color: d.Z.Colors.HEADER_SECONDARY,
                          children: "#".concat(n.discriminator),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: x.username,
                      children: [
                        (0, s.jsx)(i.Text, {
                          variant: "text-xs/normal",
                          color: "text-danger",
                          children: _.Z.Messages.BLOCKED,
                        }),
                        (0, s.jsxs)(i.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: [" ", "| ", I],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        N = (e) => {
          let { channelId: n } = e,
            l = (0, E.z)(n);
          return (0, s.jsx)(i.Scroller, {
            className: x.container,
            children: l.map((e) => {
              let { user: l } = e;
              return (0, s.jsx)(m, { user: l, channelId: n }, l.id);
            }),
          });
        };
    },
  },
]);
//# sourceMappingURL=3076a83bd28fa797fad6.js.map
