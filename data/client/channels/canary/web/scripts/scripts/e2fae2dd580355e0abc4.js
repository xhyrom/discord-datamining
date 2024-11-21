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
    96698: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        a = t(481060),
        s = t(118012),
        o = t(243351);
      function c(e) {
        let { steps: n, stepIndex: t, onClick: i } = e;
        return (0, l.jsx)("div", {
          className: o.container,
          children: n.map((e, n) => {
            let c = t === n;
            return (0, l.jsxs)(
              a.Clickable,
              {
                onClick: () => i(n),
                className: o.stepContainer,
                children: [
                  (0, l.jsx)("div", {
                    className: r()(o.progressBar, {
                      [o.selectedProgressBar]: c,
                    }),
                  }),
                  (0, l.jsx)(s.Z, {
                    color: c ? s.Z.Colors.BRAND : s.Z.Colors.MUTED,
                    size: s.Z.Sizes.SIZE_12,
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
    356685: function (e, n, t) {
      t.d(n, {
        X: function () {
          return r;
        },
      });
      var l = t(544891),
        i = t(981631);
      async function r(e, n, t) {
        return (
          await l.tn.get({
            url: i.ANM.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
            query: { type: n, entity_id: t },
            rejectWithError: !1,
          })
        ).body;
      }
    },
    433775: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var l = t(192379),
        i = t(442837),
        r = t(951539),
        a = t(592125),
        s = t(356685),
        o = t(486527),
        c = t(981631);
      let d = { can_broadcast: !1 };
      function u(e, n, t) {
        let [u, x] = l.useState(d),
          [m, h] = l.useState(!1),
          g = l.useRef(!1),
          v = null == e ? void 0 : e.id,
          j = null == e ? void 0 : e.hasFeature(c.oNc.HAS_DIRECTORY_ENTRY);
        l.useEffect(() => {
          if (!j) {
            x(d);
            return;
          }
          if (!g.current && null != v)
            (async () => {
              g.current = !0;
              try {
                let e = await (0, s.X)(v, o.C2.GUILD_SCHEDULED_EVENT, n);
                x(e);
              } catch (e) {
                x(d);
              }
              g.current = !1;
            })();
        }, [v, j, n]),
          l.useEffect(() => {
            var e;
            if (!u.can_broadcast) {
              h(!1);
              return;
            }
            h(null === (e = u.has_broadcast) || void 0 === e || e);
          }, [u]);
        let f = (0, i.e7)([a.Z], () => (0, r.wg)(t, [a.Z]));
        return {
          broadcastInfo: u,
          broadcastToDirectoryChannels: f && m,
          setBroadcastToDirectoryChannels: h,
          canEveryoneRoleViewEvent: f,
        };
      }
    },
    545165: function (e, n, t) {
      t.d(n, {
        SU: function () {
          return a;
        },
        sR: function () {
          return s;
        },
      }),
        t(47120),
        t(653041);
      var l = t(442837),
        i = t(357156);
      t(427679);
      var r = t(984933);
      function a(e, n) {
        let [t] =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : [r.ZP];
        if (null == n) return [];
        let l = t.getChannels(e)[r.Zb],
          a = [];
        for (let { channel: e } of l) {
          let { canCreateGuildEvent: t, canManageAllEvents: l } = (0, i.Gw)(e),
            r = t || l;
          if (e.type === n)
            e.isGuildVoice() && r
              ? a.push(e)
              : e.isGuildStageVoice() && r && a.push(e);
        }
        return a;
      }
      function s(e, n) {
        return (0, l.Wu)([r.ZP], () => a(e, n, [r.ZP]), [e, n]);
      }
      t(496675), t(85243);
    },
    77810: function (e, n, t) {
      t.d(n, {
        q: function () {
          return s;
        },
      }),
        t(724458),
        t(653041);
      var l = t(442837),
        i = t(146085),
        r = t(984933),
        a = t(496675);
      function s(e) {
        var n;
        let t =
          null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null;
        return (0, l.Wu)(
          [r.ZP, a.Z],
          () =>
            r.ZP.getChannels(t)[r.Zb].reduce((e, n) => {
              let t = n.channel;
              return t.isGuildStageVoice()
                ? ((function (e) {
                    let n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : a.Z;
                    return !!e.isGuildStageVoice() && n.can(i.yP, e);
                  })(n.channel, a.Z) && e.push(t),
                  e)
                : e;
            }, []),
          [t],
        );
      }
    },
    401876: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(481060),
        a = t(377171),
        s = t(854698),
        o = t(388032),
        c = t(94277);
      function d(e) {
        let { startDate: n, recurrenceRule: t, onRecurrenceChange: d } = e,
          u = i.useMemo(() => (0, s.zi)(n, t), [t, n]),
          x = (0, s.P8)(n),
          m = (e) => e.toString(),
          h = (0, l.jsxs)("div", {
            className: c.title,
            children: [
              o.intl.string(o.t["59TVxM"]),
              (0, l.jsx)(r.TextBadge, {
                text: o.intl.string(o.t.y2b7CA),
                color: a.Z.BG_BRAND,
              }),
            ],
          });
        return (0, l.jsx)(r.FormItem, {
          title: h,
          required: !0,
          children: (0, l.jsx)(r.Select, {
            placeholder: "gaming",
            options: x,
            select: d,
            serialize: m,
            isSelected: (e) => null != u && m(e) === m(u),
          }),
        });
      }
    },
    440371: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(913527),
        r = t.n(i),
        a = t(481060),
        s = t(854698),
        o = t(401876),
        c = t(388032),
        d = t(805553);
      function u(e) {
        let {
          className: n,
          onScheduleChange: t,
          onRecurrenceChange: i,
          onTimeChange: u,
          timeSelected: x = !0,
          schedule: m,
          recurrenceRule: h,
          showEndDate: g = !1,
          requireEndDate: v = !1,
          disableStartDateTime: j = !1,
        } = e;
        if (null == m) return null;
        let f = null,
          N = m.startDate,
          I = r()(),
          p = r()().add(s.G3, "days"),
          C = r()().add(s.Ib, "days");
        null != h && (p.add(s.hn, "years"), C.add(s.hn, "years"));
        let E = (e) => {
          t({ ...m, endDate: e });
        };
        return (
          g &&
            (f =
              null != m.endDate || v
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)("div", {
                        className: d.doubleInput,
                        children: [
                          (0, l.jsx)(a.FormItem, {
                            title: c.intl.string(c.t.CTLgZG),
                            required: v,
                            children: (0, l.jsx)(a.DateInput, {
                              value: m.endDate,
                              onSelect: E,
                              minDate: m.startDate,
                              maxDate: C,
                            }),
                          }),
                          (0, l.jsx)(a.FormItem, {
                            title: c.intl.string(c.t.j2RuXF),
                            required: v,
                            children: (0, l.jsx)(a.TimeInput, {
                              value: m.endDate,
                              onChange: E,
                            }),
                          }),
                        ],
                      }),
                      v
                        ? null
                        : (0, l.jsx)(a.Button, {
                            onClick: () => {
                              E(void 0);
                            },
                            look: a.Button.Looks.BLANK,
                            size: a.Button.Sizes.MIN,
                            children: (0, l.jsxs)("div", {
                              className: d.link,
                              children: [
                                (0, l.jsx)(a.CircleXIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 17,
                                  height: 17,
                                  className: d.removeIcon,
                                }),
                                (0, l.jsx)(a.Text, {
                                  variant: "text-sm/normal",
                                  children: c.intl.string(c.t.petdfn),
                                }),
                              ],
                            }),
                          }),
                    ],
                  })
                : (0, l.jsx)(a.Button, {
                    look: a.Button.Looks.BLANK,
                    size: a.Button.Sizes.MIN,
                    onClick: () => {
                      E(r()(m.startDate).add(1, "hour"));
                    },
                    children: (0, l.jsxs)("div", {
                      className: d.link,
                      children: [
                        (0, l.jsx)(a.CirclePlusIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                          className: d.addIcon,
                        }),
                        (0, l.jsx)(a.Text, {
                          variant: "text-sm/normal",
                          children: c.intl.string(c.t.ncdPcn),
                        }),
                      ],
                    }),
                  })),
          (0, l.jsxs)("div", {
            className: n,
            children: [
              (0, l.jsxs)("div", {
                className: d.doubleInput,
                children: [
                  (0, l.jsx)(a.FormItem, {
                    title: c.intl.string(c.t.kKOIwM),
                    required: !0,
                    children: (0, l.jsx)(a.DateInput, {
                      value: m.startDate,
                      onSelect: (e) => {
                        t({ ...m, startDate: e });
                      },
                      minDate: I,
                      maxDate: p,
                      disabled: j,
                    }),
                  }),
                  (0, l.jsx)(a.FormItem, {
                    title: c.intl.string(c.t["6dGmCA"]),
                    required: !0,
                    children: (0, l.jsx)(a.TimeInput, {
                      value: m.startDate,
                      onChange: (e) => {
                        if (!!e.isValid())
                          null == u || u(!0), t({ ...m, startDate: e });
                      },
                      hideValue: !x,
                      disabled: j,
                    }),
                  }),
                ],
              }),
              f,
              null != N &&
                null != i &&
                (0, l.jsx)(o.Z, {
                  onRecurrenceChange: i,
                  startDate: N,
                  recurrenceRule: h,
                }),
            ],
          })
        );
      }
    },
    195367: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(913527),
        a = t.n(r),
        s = t(481060),
        o = t(516129),
        c = t(813197),
        d = t(930180),
        u = t(46920),
        x = t(924301),
        m = t(236373),
        h = t(854698),
        g = t(405613),
        v = t(440371),
        j = t(765305),
        f = t(486324),
        N = t(388032),
        I = t(351293);
      function p(e) {
        let { editBroadcastInfoData: n } = e,
          {
            broadcastInfo: t,
            broadcastToDirectoryChannels: i,
            setBroadcastToDirectoryChannels: r,
            canEveryoneRoleViewEvent: a,
          } = n;
        return t.can_broadcast
          ? (0, l.jsxs)(s.FormItem, {
              title: N.intl.string(N.t.BgAW29),
              className: I.formItem,
              children: [
                (0, l.jsx)(s.Tooltip, {
                  text: (0, l.jsx)(s.Text, {
                    className: I.broadcastInfoTooltip,
                    variant: "text-sm/normal",
                    children: N.intl.string(N.t.gTgUmZ),
                  }),
                  "aria-label": N.intl.string(N.t.gTgUmZ),
                  shouldShow: !a,
                  children: (e) =>
                    (0, l.jsx)("div", {
                      ...e,
                      children: (0, l.jsx)(s.Checkbox, {
                        type: s.Checkbox.Types.INVERTED,
                        disabled: !a,
                        value: i,
                        onChange: (e, n) => r(n),
                        children: (0, l.jsx)(s.Text, {
                          variant: "text-md/normal",
                          color: "interactive-active",
                          children: N.intl.string(N.t["8GW68/"]),
                        }),
                      }),
                    }),
                }),
                (0, l.jsx)(s.Text, {
                  className: I.broadcastInfoDescription,
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  children: N.intl.string(N.t.V8Oq8P),
                }),
              ],
            })
          : null;
      }
      function C(e) {
        let {
            guildEvent: n,
            guildEventId: r,
            guildId: C,
            editBroadcastInfoData: E,
            error: T,
            validationErrorMessage: S,
            onChange: b,
            canSetFocus: y = !1,
          } = e,
          {
            entityType: Z,
            channelId: _,
            description: k,
            name: R,
            image: A,
            scheduledEndTime: D,
            scheduledStartTime: L,
            recurrenceRule: B,
          } = n,
          z = (0, d._d)(_),
          M = (0, d.K3)(_),
          G = null != n && (0, x.xt)(n),
          U = i.useMemo(() => {
            let e = (0, h.v1)(n);
            return null != e ? e : { startDate: a()(L) };
          }, [n, L]),
          [P, V] = i.useState(() => (0, h.zi)(a()(L), B)),
          w = i.useRef(null);
        i.useEffect(() => {
          if (y) {
            var e;
            null === (e = w.current) || void 0 === e || e.focus();
          }
        }, [y]);
        let F = (e) => {
            b({ image: e });
          },
          X = (e, n) => {
            if (null == e || void 0 === n) {
              F(null);
              return;
            }
            (0, s.openModalLazy)(async () => {
              let { default: i } = await Promise.all([
                t.e("70687"),
                t.e("48017"),
                t.e("47140"),
              ]).then(t.bind(t, 850085));
              return (t) =>
                (0, l.jsx)(i, {
                  imgURI: e,
                  file: n,
                  onCrop: F,
                  uploadType: f.pC.SCHEDULED_EVENT_IMAGE,
                  allowSkip: !0,
                  ...t,
                });
            });
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: I.blockedUsersContainer,
              children:
                null != _ &&
                !G &&
                (z > 0 || M > 0) &&
                (0, l.jsx)(u.mv, { channelId: _ }),
            }),
            (0, l.jsxs)("div", {
              className: I.form,
              children: [
                (0, l.jsxs)(s.FormItem, {
                  title: N.intl.string(N.t["0HbEQ0"]),
                  className: I.topicFormItem,
                  required: !0,
                  children: [
                    (0, l.jsx)(s.TextInput, {
                      className: I.textInput,
                      onChange: (e) => {
                        b({ name: e });
                      },
                      placeholder: N.intl.string(N.t["6/yarq"]),
                      maxLength: j.p,
                      value: R,
                      autoComplete: "off",
                      inputRef: w,
                    }),
                    null != T
                      ? (0, l.jsx)(s.Text, {
                          color: "text-danger",
                          variant: "text-xs/normal",
                          className: I.warning,
                          children: T.getAnyErrorMessage(),
                        })
                      : null,
                  ],
                }),
                (0, l.jsx)(v.Z, {
                  className: I.formItem,
                  onScheduleChange: (e) => {
                    let { startDate: n, endDate: t } = e,
                      l = {
                        scheduledStartTime:
                          null == n ? void 0 : n.toISOString(),
                        scheduledEndTime: null == t ? void 0 : t.toISOString(),
                      };
                    null != n &&
                      null != D &&
                      (null == t ? void 0 : t.isBefore(n)) &&
                      (l.scheduledEndTime = n.add(1, "hour").toISOString()),
                      null != n &&
                        null != P &&
                        (l.recurrenceRule = (0, h.mF)(P, n)),
                      b(l);
                  },
                  onRecurrenceChange: (e) => {
                    let n = U.startDate;
                    if (null != n) b({ recurrenceRule: (0, h.mF)(e, n) }), V(e);
                  },
                  schedule: U,
                  recurrenceRule: B,
                  showEndDate: Z === j.WX.EXTERNAL,
                  requireEndDate: Z === j.WX.EXTERNAL,
                  disableStartDateTime: G,
                  guildId: C,
                }),
                null != S
                  ? (0, l.jsx)(s.Text, {
                      color: "text-danger",
                      variant: "text-xs/normal",
                      className: I.warning,
                      children: S,
                    })
                  : null,
                (0, l.jsx)(s.FormItem, {
                  title: N.intl.string(N.t["+gRCCw"]),
                  className: I.formItem,
                  children: (0, l.jsx)(s.TextArea, {
                    className: I.__invalid_descriptionInput,
                    placeholder: N.intl.string(N.t["kWO/Ex"]),
                    value: k,
                    onChange: (e) => {
                      b({ description: e });
                    },
                    maxLength: j.wm,
                    autosize: !0,
                  }),
                }),
                (0, l.jsxs)(s.FormItem, {
                  title: N.intl.string(N.t.Ly121d),
                  className: I.formItem,
                  children: [
                    (0, l.jsx)(s.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      className: I.addImageHint,
                      children: N.intl.string(N.t.B9C9bW),
                    }),
                    null != A
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)(o.Z, {
                              className: I.imagePreview,
                              iconWrapperClassName: I.imagePreviewInner,
                              image: A,
                              makeURL: (e) => {
                                if (null == e) return null;
                                if (null != C) {
                                  var t;
                                  return null !==
                                    (t = (0, g.Z)((0, m.Gb)(n, C, r))) &&
                                    void 0 !== t
                                    ? t
                                    : null;
                                }
                              },
                              onChange: X,
                              hint: N.intl.string(N.t.G44Xmp),
                              showRemoveButton: !1,
                              enabled: !0,
                            }),
                            (0, l.jsx)(s.Button, {
                              size: s.Button.Sizes.SMALL,
                              onClick: () => F(null),
                              children: N.intl.string(N.t.gmUvOz),
                            }),
                          ],
                        })
                      : (0, l.jsxs)(s.Button, {
                          size: s.Button.Sizes.SMALL,
                          children: [
                            N.intl.string(N.t.vKCGYW),
                            (0, l.jsx)(c.ZP, { onChange: X }),
                          ],
                        }),
                  ],
                }),
                (0, l.jsx)(p, { editBroadcastInfoData: E }),
              ],
            }),
          ],
        });
      }
    },
    779250: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return V;
          },
        }),
        t(47120);
      var l,
        i,
        r = t(200651),
        a = t(192379),
        s = t(392711),
        o = t(442837),
        c = t(481060),
        d = t(447543),
        u = t(607070),
        x = t(745510),
        m = t(96698),
        h = t(313201),
        g = t(433775),
        v = t(984933),
        j = t(430824),
        f = t(971130),
        N = t(981888),
        I = t(924301),
        p = t(482241),
        C = t(951539),
        E = t(545165),
        T = t(236373),
        S = t(230900),
        b = t(854698),
        y = t(334877),
        Z = t(785468),
        _ = t(377329),
        k = t(311166),
        R = t(744782),
        A = t(129526),
        D = t(765305),
        L = t(981631),
        B = t(388032),
        z = t(373520);
      let { INVITE_OPTIONS_7_DAYS: M, INVITE_OPTIONS_UNLIMITED: G } = f.ZP;
      function U(e) {
        let { modal: n } = e,
          { createMultipleConfetti: t } = a.useContext(x.h);
        return (
          a.useEffect(() => {
            let e = null == n ? void 0 : n.getScrollerNode();
            if (null == e) return;
            let l = e.getBoundingClientRect();
            t(
              {
                position: {
                  type: "static-random",
                  minValue: { x: l.left - 100, y: l.top - 100 },
                  maxValue: { x: l.left + 100, y: l.top + 100 },
                },
                velocity: {
                  type: "static-random",
                  minValue: { x: -20, y: -20 },
                  maxValue: { x: -60, y: -60 },
                },
              },
              80,
            ),
              t(
                {
                  position: {
                    type: "static-random",
                    minValue: { x: l.right - 100, y: l.top - 100 },
                    maxValue: { x: l.right + 100, y: l.top + 100 },
                  },
                  velocity: {
                    type: "static-random",
                    minValue: { x: 20, y: -20 },
                    maxValue: { x: 60, y: -60 },
                  },
                },
                80,
              );
          }, [t, n]),
          null
        );
      }
      function P(e) {
        let {
            guildId: n,
            guildEvent: t,
            guildEventId: i,
            editBroadcastInfoData: d,
            isEdit: x,
            formErrors: g,
            transitionState: v,
            loading: j,
            error: f,
            onChange: N,
            onSave: p,
            onClose: C,
            createdEvent: E,
          } = e,
          T = (0, h.Dt)(),
          S = a.useRef(t),
          b = !(0, s.isEqual)(S.current, t),
          A = a.useMemo(
            () => [
              {
                slideId: 0,
                label: B.intl.string(B.t["56QlKS"]),
                valid: null == g.entity,
                userErrorMessage: g.entity,
              },
              {
                slideId: 1,
                label: B.intl.string(B.t["w5/ntb"]),
                valid: null == g.schedule && null == g.topic && (!x || b),
                userErrorMessage: g.schedule,
              },
              { slideId: 2, label: B.intl.string(B.t["8aJzT0"]), valid: !0 },
            ],
            [g, x, b],
          ),
          D = Object.keys(l).length,
          L = (0, I.xt)(t),
          M = (e) => Math.max(0, Math.min(e, D - 1)),
          [G, P] = a.useState(L ? 1 : 0),
          [V, w] = a.useState(!1),
          F = a.useMemo(
            () =>
              A.slice(0, G + 1)
                .map((e) => e.valid)
                .every(Boolean),
            [A, G],
          ),
          X = G >= A.length ? 3 : A[M(G)].slideId,
          O = 3 === X;
        (0, y.l)((e) => e.onUpdateCanCloseModal)(O);
        let W = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
          q = a.useRef(null),
          H = (e) => {
            w(!1), P(M(e));
          };
        a.useEffect(() => {
          null != E && H(3);
        }, [null == E ? void 0 : E.id, H]);
        let Y = () => {
            if (!!F) 2 === X ? p() : O ? C() : H(G + 1);
          },
          K = () => {
            H(G - 1);
          },
          Q = B.intl.string(B.t.PDTjLC);
        return (
          2 === X &&
            (Q = x ? B.intl.string(B.t.e5VEcH) : B.intl.string(B.t["60lJ0N"])),
          (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(c.ModalRoot, {
              transitionState: v,
              "aria-labelledby": T,
              size: c.ModalSize.DYNAMIC,
              children: [
                !W && O ? (0, r.jsx)(U, { modal: q.current }) : null,
                (0, r.jsxs)(c.ModalContent, {
                  className: z.content,
                  scrollerRef: q,
                  children: [
                    !O &&
                      (0, r.jsx)(m.Z, {
                        steps: A.map((e) => e.label),
                        stepIndex: G,
                        onClick: (e) => {
                          e < G ? K() : e > G && Y();
                        },
                      }),
                    (0, r.jsxs)(c.Slides, {
                      activeSlide: X,
                      width: 440,
                      onSlideReady: (e) => {
                        w(e === X);
                      },
                      children: [
                        (0, r.jsx)(c.Slide, {
                          id: 0,
                          children: (0, r.jsx)(Z.Z, {
                            guildId: n,
                            guildEvent: t,
                            validationErrorMessage: g.entity,
                            isSlideReady: V,
                            onChange: N,
                          }),
                        }),
                        (0, r.jsx)(c.Slide, {
                          id: 1,
                          children: (0, r.jsx)(k.Z, {
                            guildEvent: t,
                            guildEventId: i,
                            guildId: n,
                            editBroadcastInfoData: d,
                            onChange: N,
                            error: f,
                            validationErrorMessage: g.schedule,
                            isSlideReady: V,
                          }),
                        }),
                        (0, r.jsx)(c.Slide, {
                          id: 2,
                          children: (0, r.jsx)(_.Z, {
                            guildId: n,
                            guildEvent: t,
                            guildEventId: i,
                            error: f,
                          }),
                        }),
                        (0, r.jsx)(c.Slide, {
                          id: 3,
                          children: (0, r.jsx)(R.Z, { onClose: C, event: E }),
                        }),
                      ],
                    }),
                  ],
                }),
                !O &&
                  (0, r.jsxs)(c.ModalFooter, {
                    className: z.footer,
                    children: [
                      (0, r.jsxs)("div", {
                        className: z.inline,
                        children: [
                          (0, r.jsx)(c.Button, {
                            color: c.Button.Colors.PRIMARY,
                            onClick: C,
                            children: B.intl.string(B.t["ETE/oK"]),
                          }),
                          (0, r.jsx)(c.Button, {
                            onClick: Y,
                            disabled: !F,
                            className: z.button,
                            submitting: j,
                            children: Q,
                          }),
                        ],
                      }),
                      0 !== X &&
                        (0, r.jsx)(c.Button, {
                          look: c.Button.Looks.LINK,
                          size: c.Button.Sizes.MIN,
                          onClick: K,
                          color: c.Button.Colors.LINK,
                          children: B.intl.string(B.t["13/7kZ"]),
                        }),
                    ],
                  }),
              ],
            }),
          })
        );
      }
      function V(e) {
        let {
            guildId: n,
            guildScheduledEventId: l,
            transitionState: i,
            onClose: s,
          } = e,
          u = (0, o.e7)([j.Z], () => j.Z.getGuild(n)),
          x = (0, o.e7)([I.ZP], () => I.ZP.getGuildScheduledEvent(l), [l]),
          m = (0, o.e7)([v.ZP], () => v.ZP.getDefaultChannel(n), [n]),
          h = (0, T.j$)(x, m),
          [f, y] = a.useState(h),
          [Z] = a.useState((0, T.Ql)(x)),
          [_, k] = a.useState(null),
          R = (e) => {
            var n;
            let t = (0, C.so)(e),
              l =
                null !== (n = e.channel_id) && void 0 !== n
                  ? n
                  : null == m
                    ? void 0
                    : m.id;
            null != l &&
              d.Z.createInvite(
                l,
                { max_age: M.value, max_uses: G.value },
                L.t4x.GUILD_EVENTS,
              ),
              t ? k(e) : s();
          },
          z = (0, g.Z)(u, null == x ? void 0 : x.id, f),
          [U, { loading: V, error: w }] = (0, N.Z)(async () => {
            if (null != _) return;
            let e = {
              broadcastToDirectoryChannels: z.broadcastToDirectoryChannels,
            };
            if (Z && null != l) return await p.Z.saveEvent(l, f, n, e), s();
            let t = await p.Z.createGuildEvent(f, n, e);
            return R(t.body), t;
          }),
          F = a.useMemo(() => (0, A.Z)(f, Z), [f, Z]);
        return (0, r.jsx)(P, {
          guildId: n,
          guildEvent: f,
          guildEventId: l,
          editBroadcastInfoData: z,
          isEdit: Z,
          formErrors: F,
          transitionState: i,
          loading: V,
          error: w,
          onChange: (e) => {
            if (null != e.entityType) {
              var t;
              let l = (0, S.xC)(e.entityType),
                [i] = (0, E.SU)(n, l);
              (e.channelId =
                null !== (t = null == i ? void 0 : i.id) && void 0 !== t
                  ? t
                  : null),
                e.entityType !== D.WX.EXTERNAL &&
                  f.entityType === D.WX.EXTERNAL &&
                  (e.entityMetadata = null);
            }
            y((n) => ({ ...n, ...e }));
          },
          onSave: () => {
            null != f.recurrenceRule && Z && (0, b.BP)(x, f)
              ? (0, c.openModalLazy)(async () => {
                  let { ConfirmModal: e } = await Promise.resolve().then(
                    t.bind(t, 481060),
                  );
                  return (n) =>
                    (0, r.jsxs)(e, {
                      ...n,
                      header: B.intl.string(B.t.BW1Qoq),
                      confirmText: B.intl.string(B.t.e5VEcH),
                      cancelText: B.intl.string(B.t.oEAioK),
                      onConfirm: U,
                      children: [
                        (0, r.jsx)(c.Text, {
                          variant: "text-md/normal",
                          children: B.intl.string(B.t.aNCYam),
                        }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)(c.Text, {
                          variant: "text-md/normal",
                          children: B.intl.format(B.t.RWBa5e, {}),
                        }),
                      ],
                    });
                })
              : U();
          },
          onClose: s,
          createdEvent: _,
        });
      }
      ((i = l || (l = {}))[(i.ENTITY = 0)] = "ENTITY"),
        (i[(i.SETTINGS = 1)] = "SETTINGS"),
        (i[(i.PREVIEW = 2)] = "PREVIEW"),
        (i[(i.SUCCESS = 3)] = "SUCCESS");
    },
    785468: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return B;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(913527),
        a = t.n(r),
        s = t(442837),
        o = t(481060),
        c = t(933557),
        d = t(592125),
        u = t(430824),
        x = t(496675),
        m = t(699516),
        h = t(594174),
        g = t(924301),
        v = t(518756),
        j = t(545165),
        f = t(77810),
        N = t(274311),
        I = t(230900),
        p = t(366815),
        C = t(765305),
        E = t(981631),
        T = t(388032),
        S = t(356731);
      let b = (e) => e === C.WX.EXTERNAL,
        y = (e, n) => {
          let t = d.Z.getChannel(e);
          if (null == t) return null;
          let i = t.type === E.d4z.GUILD_STAGE_VOICE,
            r = (0, N.Q)(t, n),
            a = r ? o.VoiceNormalIcon : o.VoiceLockIcon,
            s = r ? o.StageIcon : o.StageLockIcon;
          return (0, l.jsx)(i ? s : a, {
            color: "currentColor",
            size: "md",
            className: S.channelOptionIcon,
          });
        },
        Z = (e) => {
          let {
              guildId: n,
              channelType: t,
              channel: i,
              onSelectChannel: r,
              disabled: a,
              entityType: s,
            } = e,
            d = t === E.d4z.GUILD_STAGE_VOICE,
            u = (0, N.Q)(i, s),
            x = (0, j.sR)(n, t);
          return (0, l.jsxs)(o.FormItem, {
            title: d ? T.intl.string(T.t.S7GjDw) : T.intl.string(T.t["7RYWCA"]),
            className: S.options,
            disabled: a,
            required: !0,
            children: [
              (0, l.jsx)(o.SearchableSelect, {
                value: null == i ? void 0 : i.id,
                options: x.map((e) => ({
                  value: e.id,
                  label: (0, c.F6)(e, h.default, m.Z, !0),
                })),
                onChange: (e) => {
                  let n = x.find((n) => n.id === e);
                  r(null != n ? n : void 0);
                },
                renderOptionPrefix: (e) => y(null == e ? void 0 : e.value, s),
                isDisabled: a,
              }),
              !u &&
                (0, l.jsx)(o.Text, {
                  color: "header-secondary",
                  className: S.channelPrivate,
                  variant: "text-sm/normal",
                  children: T.intl.string(T.t.F3bDaW),
                }),
            ],
          });
        };
      function _(e, n, t, l) {
        return n
          ? { disabled: !0, tooltipText: T.intl.string(T.t.yutP5e) }
          : t
            ? 0 === l && e !== C.WX.EXTERNAL
              ? { disabled: !0, tooltipText: T.intl.string(T.t["DkY+cH"]) }
              : { disabled: !1, tooltipText: null }
            : { disabled: !0, tooltipText: T.intl.string(T.t.HeF1kZ) };
      }
      let k = (e) => (n) => {
          e({ entityMetadata: { location: n } });
        },
        R = (e) => (n) => {
          var t;
          e({
            channelId:
              null !== (t = null == n ? void 0 : n.id) && void 0 !== t
                ? t
                : null,
          });
        },
        A = (e, n) => (t) => {
          let { value: l } = t,
            i = { entityType: l, scheduledEndTime: void 0 };
          if (b(l)) {
            var r;
            let e = (
              null !== (r = a()(n.scheduledStartTime)) && void 0 !== r
                ? r
                : a()()
            ).add(2, "hour");
            i.scheduledEndTime = e.toISOString();
          }
          e(i);
        };
      function D(e) {
        let { guildId: n, guildEvent: t, onChange: r, isFocusReady: a } = e,
          { entityType: c, channelId: u } = t,
          x = (0, s.e7)([d.Z], () => d.Z.getChannel(u), [u]),
          m = i.useRef(null);
        i.useEffect(() => {
          if (a && b(c)) {
            var e;
            null === (e = m.current) || void 0 === e || e.focus();
          }
        }, [a, c]);
        let h = k(r),
          v = R(r),
          j = (0, I.xV)(t),
          f = (0, I.xC)(c),
          N = (0, g.xt)(t);
        return null == c || c === C.WX.NONE
          ? null
          : b(c)
            ? (0, l.jsx)(o.FormItem, {
                title: T.intl.string(T.t.yx785O),
                className: S.options,
                required: !0,
                children: (0, l.jsx)(o.TextInput, {
                  className: S.__invalid_textInput,
                  onChange: h,
                  placeholder: T.intl.string(T.t.mkCMiY),
                  maxLength: C.gG,
                  value: null != j ? j : "",
                  inputRef: m,
                }),
              })
            : null == f
              ? null
              : (0, l.jsx)(Z, {
                  guildId: n,
                  channelType: f,
                  onSelectChannel: v,
                  channel: x,
                  entityType: c,
                  disabled: N,
                });
      }
      function L(e) {
        let { guildId: n, guildEvent: t, onChange: r } = e,
          a = (0, s.e7)([u.Z], () => u.Z.getGuild(n), [n]),
          c = (0, v.Z)(n, void 0),
          d = (0, v.Z)(n, E.d4z.GUILD_VOICE),
          x = (0, v.Z)(n, E.d4z.GUILD_STAGE_VOICE),
          m = (0, j.sR)(n, E.d4z.GUILD_VOICE),
          h = (0, f.q)(a),
          N = null == a ? void 0 : a.hasFeature(E.oNc.COMMUNITY),
          I = (0, g.xt)(t),
          p = A(r, t),
          b = i.useMemo(() => {
            let e = [
              {
                name: T.intl.string(T.t.BVZqJi),
                value: C.WX.VOICE,
                desc: T.intl.string(T.t["EV//4e"]),
                icon: o.VoiceNormalIcon,
                ..._(C.WX.VOICE, I, d, m.length),
              },
              {
                name: T.intl.string(T.t.w7ipb2),
                value: C.WX.EXTERNAL,
                desc: T.intl.string(T.t.DYxrHh),
                icon: o.LocationIcon,
                ..._(C.WX.EXTERNAL, I, c, 0),
              },
            ];
            return N
              ? [
                  {
                    name: T.intl.string(T.t.EErMzM),
                    value: C.WX.STAGE_INSTANCE,
                    desc: T.intl.string(T.t.LgALpq),
                    icon: o.StageIcon,
                    ..._(C.WX.STAGE_INSTANCE, I, x, h.length),
                  },
                  ...e,
                ]
              : e;
          }, [c, d, x, N, m.length, h.length, I]);
        return (0, l.jsx)(o.RadioGroup, {
          value: t.entityType,
          options: b,
          onChange: p,
          className: S.options,
        });
      }
      function B(e) {
        let {
            guildId: n,
            guildEvent: i,
            validationErrorMessage: r,
            onChange: a,
            isSlideReady: c = !1,
          } = e,
          { entityType: d } = i,
          m = (0, s.e7)([u.Z], () => u.Z.getGuild(n), [n]),
          h = (0, f.q)(m),
          g = (0, s.e7)([x.Z], () => x.Z.can(E.Plq.MANAGE_CHANNELS, m)),
          v = null == m ? void 0 : m.hasFeature(E.oNc.COMMUNITY),
          j = A(a, i),
          N = v && !b(d) && 0 === h.length && g && null != d;
        return (0, l.jsxs)("div", {
          className: S.container,
          children: [
            (0, l.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              className: S.header,
              children: T.intl.string(T.t["DC+Qm5"]),
            }),
            (0, l.jsx)(o.Text, {
              color: "header-secondary",
              className: S.text,
              variant: "text-sm/normal",
              children: T.intl.string(T.t.IwmXLC),
            }),
            (0, l.jsx)(L, { guildId: n, guildEvent: i, onChange: a }),
            (0, l.jsx)(D, {
              guildId: n,
              guildEvent: i,
              isFocusReady: c,
              onChange: a,
            }),
            N
              ? (0, l.jsx)(p.Z, {
                  onClick: () => {
                    j({
                      value: C.WX.STAGE_INSTANCE,
                      name: T.intl.string(T.t.EErMzM),
                    }),
                      (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                          t.e("90508"),
                          t.e("7590"),
                          t.e("45094"),
                          t.e("32606"),
                        ]).then(t.bind(t, 218613));
                        return (t) =>
                          (0, l.jsx)(e, {
                            ...t,
                            channelType: E.d4z.GUILD_STAGE_VOICE,
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
    377329: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        a = t(481060),
        s = t(471445),
        o = t(41776),
        c = t(592125),
        d = t(430824),
        u = t(594174),
        x = t(236373),
        m = t(230900),
        h = t(405613),
        g = t(460838),
        v = t(388032),
        j = t(26940);
      function f(e) {
        var n, t, f;
        let { guildId: N, guildEvent: I, guildEventId: p, error: C } = e,
          E = i.useMemo(() => (0, x.Gb)(I, N), [I, N]),
          { channel_id: T, name: S, image: b, description: y } = E,
          Z = (0, r.e7)([c.Z], () => c.Z.getChannel(T), [T]),
          _ = (0, r.e7)([d.Z], () => d.Z.getGuild(N), [N]),
          k = (0, m.cS)(E),
          R = (0, r.e7)(
            [u.default],
            () =>
              null != I.creatorId
                ? u.default.getUser(I.creatorId)
                : u.default.getCurrentUser(),
            [I.creatorId],
          ),
          A = (0, r.e7)([o.Z], () => o.Z.isLurking(N), [N]),
          D = (0, s.KS)(Z, _);
        return (0, l.jsxs)("div", {
          className: j.content,
          children: [
            (0, l.jsx)(g.Z, {
              className: j.previewCard,
              guild: _,
              channel: Z,
              location: null != k ? k : void 0,
              creator: R,
              name: S,
              description: y,
              imageSource:
                ((t = (0, x.Gb)(I, N, p)),
                null == (f = b) && null == t.image
                  ? null
                  : null != f && /^data:/.test(f)
                    ? f
                    : (0, h.Z)(t)),
              isActive: !1,
              isUserLurking: A,
              speakers: [],
              speakerCount: 0,
              rsvped: !0,
              guildEvent: E,
              eventPreview: E,
            }),
            (0, l.jsxs)("div", {
              className: j.textContainer,
              children: [
                (0, l.jsx)(a.Heading, {
                  variant: "heading-xl/semibold",
                  children: v.intl.string(v.t.yBsFEx),
                }),
                (0, l.jsx)(a.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: j.subheader,
                  children:
                    null != location
                      ? v.intl.string(v.t.KDPFi4)
                      : v.intl.format(v.t.f55NX1, {
                          channelName:
                            null !== (n = null == Z ? void 0 : Z.name) &&
                            void 0 !== n
                              ? n
                              : "",
                          channelHook: () => {
                            var e;
                            return (0, l.jsxs)("div", {
                              className: j.channelName,
                              children: [
                                null != D
                                  ? (0, l.jsx)(D, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 20,
                                      height: 20,
                                      className: j.icon,
                                    })
                                  : (0, l.jsx)(a.LocationIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      height: 18,
                                      width: 18,
                                      className: j.locationIcon,
                                    }),
                                null !== (e = null == Z ? void 0 : Z.name) &&
                                void 0 !== e
                                  ? e
                                  : k,
                              ],
                            });
                          },
                        }),
                }),
                null != C &&
                  (0, l.jsx)(a.Text, {
                    color: "text-danger",
                    variant: "text-xs/normal",
                    className: j.subheader,
                    children: C.getAnyErrorMessage(),
                  }),
              ],
            }),
          ],
        });
      }
    },
    311166: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(481060),
        r = t(195367),
        a = t(388032),
        s = t(759704);
      function o(e) {
        let { isSlideReady: n, ...t } = e;
        return (0, l.jsxs)("div", {
          className: s.__invalid_slideContainer,
          children: [
            (0, l.jsxs)("div", {
              className: s.header,
              children: [
                (0, l.jsx)(i.Heading, {
                  variant: "heading-xl/semibold",
                  children: a.intl.string(a.t.GG6vbm),
                }),
                (0, l.jsx)(i.Text, {
                  color: "header-secondary",
                  className: s.text,
                  variant: "text-sm/normal",
                  children: a.intl.string(a.t.q5lgwc),
                }),
              ],
            }),
            (0, l.jsx)(r.Z, { ...t, canSetFocus: n }),
          ],
        });
      }
    },
    744782: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        a = t(264229),
        s = t(366980),
        o = t(603236),
        c = t(939863),
        d = t(984933),
        u = t(430824),
        x = t(341165),
        m = t(626135),
        h = t(572004),
        g = t(971130),
        v = t(230900),
        j = t(981631),
        f = t(388032),
        N = t(237645);
      let { INVITE_OPTIONS_7_DAYS: I, INVITE_OPTIONS_UNLIMITED: p } = g.ZP;
      function C(e) {
        var n, t, C;
        let { onClose: E, event: T } = e,
          S = null == T ? void 0 : T.guild_id,
          b = (0, i.e7)(
            [d.ZP],
            () => {
              var e;
              return null != S
                ? null === (e = d.ZP.getDefaultChannel(S)) || void 0 === e
                  ? void 0
                  : e.id
                : null;
            },
            [S],
          ),
          y = (0, i.e7)([u.Z], () => u.Z.getGuild(S), [S]),
          { channel_id: Z, id: _ } = null != T ? T : {},
          k = (0, i.e7)(
            [x.Z],
            () => {
              let e = null != Z ? Z : b;
              return null == e ? null : x.Z.getInvite(e);
            },
            [Z, b],
          );
        if (null == T) return E(), null;
        let R =
            null !== (n = null == y ? void 0 : y.vanityURLCode) && void 0 !== n
              ? n
              : null == k
                ? void 0
                : k.code,
          A =
            null != R
              ? (0, a.tV)({ baseCode: R, guildScheduledEventId: _ })
              : null,
          D = null == A || null == k,
          L = (0, s.Z)(null != A ? A : ""),
          B =
            null !== (t = null == k ? void 0 : k.maxAge) && void 0 !== t
              ? t
              : I.value,
          z =
            null !== (C = null == k ? void 0 : k.maxUses) && void 0 !== C
              ? C
              : p.value;
        return (0, l.jsxs)("div", {
          className: N.container,
          children: [
            (0, l.jsx)(r.Clickable, {
              onClick: E,
              className: N.close,
              "aria-label": f.intl.string(f.t.cpT0Cg),
              children: (0, l.jsx)(r.XSmallIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
            (0, l.jsx)(c.Z, {
              children: (0, l.jsx)("div", {
                className: N.iconContainer,
                children: (0, l.jsx)(r.CalendarIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 30,
                  width: 30,
                  className: N.icon,
                }),
              }),
            }),
            (0, l.jsx)(r.Heading, {
              variant: "heading-xl/semibold",
              className: N.header,
              children: f.intl.string(f.t.UzNv7u),
            }),
            (0, l.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: N.body,
              children: f.intl.string(f.t.UetJjI),
            }),
            (0, l.jsxs)("div", {
              className: N.invite,
              children: [
                (0, l.jsx)(o.S, {
                  value: L,
                  autoFocus: !1,
                  onCopy: (e) => {
                    if (D) return;
                    (0, h.JG)(e);
                    let n = (0, v.xC)(T.entity_type);
                    m.default.track(j.rMx.COPY_INSTANT_INVITE, {
                      server: T.guild_id,
                      channel: Z,
                      channel_type: n,
                      location: j.t4x.GUILD_EVENTS,
                      code: k.code,
                      guild_scheduled_event_id: null == T ? void 0 : T.id,
                    });
                  },
                }),
                (null == y ? void 0 : y.vanityURLCode) == null &&
                  (0, l.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    className: N.inviteDetail,
                    children: (0, g.Vg)(B, z),
                  }),
              ],
            }),
          ],
        });
      }
    },
    366815: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        a = t(536442),
        s = t(142497),
        o = t(388032),
        c = t(510863),
        d = t(137707);
      let u = () =>
        (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(r.Text, {
              color: "header-primary",
              variant: "text-xs/normal",
              className: c.inlineText,
              children: o.intl.string(o.t.GcZzp6),
            }),
            (0, l.jsx)(r.Text, {
              color: "header-primary",
              variant: "text-xs/normal",
              className: c.inlineText,
              children: o.intl.string(o.t["/NEGrK"]),
            }),
            (0, l.jsx)(r.Text, {
              color: "header-primary",
              variant: "text-xs/normal",
              className: c.inlineText,
              children: o.intl.string(o.t.eUbuHB),
            }),
            (0, l.jsx)(r.Text, {
              color: "header-primary",
              variant: "text-xs/normal",
              className: c.inlineText,
              children: o.intl.string(o.t.sCAZeH),
            }),
          ],
        });
      function x(e) {
        let { onClick: n } = e;
        return (0, i.e7)(
          [a.qc],
          () => !a.qc.hasHotspot(a.v6.STAGE_CHANNEL_UPSELL),
        )
          ? null
          : (0, l.jsxs)("div", {
              className: c.container,
              children: [
                (0, l.jsxs)("div", {
                  className: c.content,
                  children: [
                    (0, l.jsxs)("div", {
                      className: c.textContainer,
                      children: [
                        (0, l.jsx)(r.Heading, {
                          variant: "heading-md/semibold",
                          children: o.intl.string(o.t.Sx8Ezs),
                        }),
                        (0, l.jsx)(r.Text, {
                          color: "header-secondary",
                          variant: "text-xs/normal",
                          className: c.descriptionText,
                          children: o.intl.string(o.t.JUzPho),
                        }),
                        (0, l.jsx)(r.Text, {
                          color: "header-secondary",
                          variant: "text-xs/normal",
                          children: o.intl.format(o.t.Vh7rPz, {
                            suggestionsHook: u,
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: c.image,
                      children: (0, l.jsx)("img", {
                        src: d,
                        alt: o.intl.string(o.t["uIm/n5"]),
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: c.footer,
                  children: [
                    (0, l.jsx)(r.Button, {
                      onClick: n,
                      color: r.Button.Colors.PRIMARY,
                      size: r.Button.Sizes.SMALL,
                      className: c.button,
                      children: o.intl.string(o.t["X/3SyM"]),
                    }),
                    (0, l.jsx)(r.Button, {
                      onClick: () => {
                        s.Kw(a.v6.STAGE_CHANNEL_UPSELL);
                      },
                      color: r.Button.Colors.TRANSPARENT,
                      size: r.Button.Sizes.SMALL,
                      look: r.ButtonLooks.LINK,
                      children: o.intl.string(o.t["5E9SBw"]),
                    }),
                  ],
                }),
              ],
            });
      }
    },
    129526: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var l = t(913527),
        i = t.n(l),
        r = t(230900),
        a = t(854698),
        s = t(765305),
        o = t(388032);
      function c(e, n) {
        return {
          entity: (function (e) {
            let { entityType: n, channelId: t } = e,
              l = (0, r.xV)(e);
            return null == n || n === s.WX.NONE
              ? "An event type must be specified."
              : (null == l || "" === l.trim()) && null == t
                ? "Either a location or channel must be specified."
                : void 0;
          })(e),
          schedule: (function (e, n) {
            let t = (0, a.v1)(e),
              { entityType: l } = e;
            if (null == t || (null == t ? void 0 : t.startDate) == null)
              return o.intl.string(o.t.M73YyM);
            let { startDate: r, endDate: c } = t;
            return l === s.WX.EXTERNAL && null == c
              ? o.intl.string(o.t["H16p//"])
              : !n && r.isBefore(i()())
                ? o.intl.string(o.t.AXR5Sk)
                : null != c && null != r && c.isBefore(r)
                  ? o.intl.string(o.t.LpjF4O)
                  : null != c && c.isBefore(i()())
                    ? o.intl.string(o.t.ViDcm5)
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
    516129: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        a = t(780384),
        s = t(481060),
        o = t(410030),
        c = t(44315),
        d = t(208567),
        u = t(981631),
        x = t(686550);
      let m = u.Ilk.PRIMARY_400,
        h = u.Ilk.PRIMARY_500;
      function g(e) {
        let {
            enabled: n,
            imageClassName: t,
            iconWrapperClassName: i,
            ...u
          } = e,
          g = (0, o.ZP)(),
          v = (0, a.wj)(g) ? m : h,
          j = { height: 18, width: 18, color: (0, c.Lq)(v) };
        return (0, l.jsx)(d.Z, {
          className: r()({
            [x.avatarUploader]: n,
            [x.avatarUploaderDisabled]: !n,
          }),
          imageClassName: r()(t, x.avatarUploaderInnerSquare, {
            [x.avatarUploaderInnerSquareDisabled]: !n,
          }),
          icon:
            null != u.image && "" !== u.image
              ? (0, l.jsx)(s.PencilIcon, { size: "custom", ...j })
              : (0, l.jsx)(s.ImagePlusIcon, { size: "custom", ...j }),
          iconClassName: r()(x.avatarUploadIcon, x.hideDefaultIcon),
          iconWrapperClassName: i,
          showIcon: !0,
          showIconDisabled: !0,
          hideSize: !0,
          ...u,
        });
      }
    },
    208567: function (e, n, t) {
      t.d(n, {
        S: function () {
          return j;
        },
      }),
        t(47120);
      var l,
        i = t(200651),
        r = t(192379),
        a = t(120356),
        s = t.n(a),
        o = t(512722),
        c = t.n(o),
        d = t(481060),
        u = t(624138),
        x = t(813197),
        m = t(981631),
        h = t(388032),
        g = t(315822);
      function v(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function j(e) {
        let { className: n, icon: t = null } = e;
        return (0, i.jsx)(d.ThemeProvider, {
          theme: m.BRd.LIGHT,
          children: (e) =>
            (0, i.jsx)("div", {
              className: s()(g.imageUploaderIcon, n, e),
              children: t,
            }),
        });
      }
      class f extends (l = r.PureComponent) {
        handleExternalFileChange(e) {
          c()(
            null != this.inputRef.current,
            "ImageInputRef asked to handleExternalFileChange when not mounted",
          ),
            this.inputRef.current.handleFileChange(e);
        }
        render() {
          var e;
          let n, t, l, r;
          let {
            image: a,
            hint: o,
            name: c,
            makeURL: v,
            disabled: f,
            onChange: N,
            showIcon: I,
            showIconDisabled: p,
            className: C,
            imageClassName: E,
            iconClassName: T,
            iconWrapperClassName: S,
            icon: b,
            hideSize: y,
            imageStyle: Z,
            showRemoveButton: _,
            maxFileSizeBytes: k,
            onFileSizeError: R,
            onOpenImageSelectModal: A,
            "aria-label": D,
          } = this.props;
          if (
            (null != (n = null != a && /^data:/.test(a) ? a : v(a))
              ? (t = 'url("'.concat(n, '")'))
              : null != c &&
                (l = (0, i.jsx)(d.Heading, {
                  variant: "heading-xxl/normal",
                  color: "always-white",
                  className: g.imageUploaderAcronym,
                  children: (0, u.Zg)(c),
                })),
            f)
          )
            return (0, i.jsx)("div", {
              className: s()(g.imageUploader, g.disabled, C),
              children: (0, i.jsxs)("div", {
                className: s()(g.imageUploaderInner, E),
                style: { ...Z, backgroundImage: t },
                children: [
                  l,
                  p &&
                    (0, i.jsx)("div", {
                      className: s()(
                        g.imageUploaderIcon,
                        g.imageUploaderIconDisabled,
                        T,
                      ),
                      children: b,
                    }),
                ],
              }),
            });
          null != a
            ? (r = (0, i.jsx)(d.Anchor, {
                className: g.removeButton,
                onClick: this.handleRemove,
                children: h.intl.string(h.t.N86XcH),
              }))
            : !y &&
              (r = (0, i.jsx)("small", {
                className: g.sizeInfo,
                children: h.intl.format(h.t.AH4c7e, { size: m.IXf }),
              }));
          let L =
            null !== (e = null != D ? D : o) && void 0 !== e
              ? e
              : h.intl.string(h.t["Ge+94+"]);
          return (0, i.jsxs)("div", {
            className: s()(g.imageUploader, C),
            children: [
              (0, i.jsx)(d.FocusRing, {
                within: !0,
                children: (0, i.jsxs)("div", {
                  className: I ? s()(g.imageUploaderIconWrapper, S) : void 0,
                  children: [
                    (0, i.jsxs)("div", {
                      className: s()(g.imageUploaderInner, E),
                      style: { ...Z, backgroundImage: t },
                      children: [
                        (0, i.jsx)("span", { "aria-hidden": !0, children: l }),
                        null != A
                          ? (0, i.jsx)(d.Clickable, {
                              className: g.imageUploaderFileInput,
                              "aria-label": L,
                              onClick: A,
                            })
                          : (0, i.jsx)(x.ZP, {
                              ref: this.inputRef,
                              onChange: N,
                              className: g.imageUploaderFileInput,
                              "aria-label": L,
                              tabIndex: 0,
                              maxFileSizeBytes: k,
                              onFileSizeError: R,
                            }),
                      ],
                    }),
                    null != o &&
                      (0, i.jsx)("div", {
                        className: g.imageUploaderHint,
                        "aria-hidden": "true",
                        children: o,
                      }),
                    I && (0, i.jsx)(j, { className: T, icon: b }),
                  ],
                }),
              }),
              _ ? r : null,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            v(this, "inputRef", r.createRef()),
            v(this, "handleRemove", () => {
              this.props.onChange(null);
            });
        }
      }
      v(f, "defaultProps", {
        name: "",
        makeURL: (e) => e,
        disabled: !1,
        showIcon: !1,
        hideSize: !1,
        showRemoveButton: !0,
        maxFileSizeBytes: 1 / 0,
        icon: null,
      }),
        (n.Z = f);
    },
    603236: function (e, n, t) {
      t.d(n, {
        I: function () {
          return b;
        },
        S: function () {
          return S;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(533800),
        o = t(442837),
        c = t(846519),
        d = t(481060),
        u = t(914010),
        x = t(246946),
        m = t(626135),
        h = t(572004),
        g = t(630388),
        v = t(971130),
        j = t(530436),
        f = t(245335),
        N = t(981631),
        I = t(388032),
        p = t(871820),
        C = t(803636),
        E = t(739017),
        T = t(113207);
      let S = o.ZP.connectStores([x.Z], () => ({
          hideValue: x.Z.hideInstantInvites,
        }))((e) => {
          let {
              value: n,
              autoFocus: t,
              hideValue: r,
              onCopy: s,
              disabled: o,
            } = e,
            [u, x] = i.useState(!1),
            [m, g] = i.useState(!1),
            v = i.useMemo(() => new c.sW(1e3, () => g(!1)), [g]);
          return (
            i.useEffect(
              () => () => {
                v.cancel();
              },
              [v],
            ),
            (0, l.jsxs)("div", {
              className: a()(
                C.input,
                E.__invalid_flexJustifyBetween,
                E.flexCenter,
                { [C.success]: m, [C.focused]: u },
              ),
              children: [
                (0, l.jsx)(d.TextInput, {
                  className: p.copyInput,
                  name: "invite",
                  value: r ? I.intl.string(I.t["6HzNgY"]) : n,
                  editable: !1,
                  inputClassName: p.input,
                  autoFocus: t,
                  onFocus: () => (t ? x(!0) : null),
                  onBlur: () => (t ? x(!1) : null),
                  spellCheck: "false",
                  onClick: (e) => e.currentTarget.select(),
                  "aria-label": I.intl.string(I.t.qreV29),
                  disabled: o,
                }),
                h.wS
                  ? (0, l.jsx)(d.Button, {
                      size: d.Button.Sizes.SMALL,
                      color: m ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
                      className: p.copyButton,
                      onClick: () => {
                        g(!0), v.delay(), s(n);
                      },
                      disabled: o,
                      children: m
                        ? I.intl.string(I.t.q30c5u)
                        : I.intl.string(I.t.OpuAlJ),
                    })
                  : null,
              ],
            })
          );
        }),
        b = (e) => {
          let {
              guild: n,
              noInvitesAvailable: t,
              showFriends: r,
              onClose: o,
              modalState: c,
              isGuestInviteCreationToggleEnabled: x,
              inviteFlags: C,
              setInviteFlags: E,
              showGuestInviteToggleForCurrentVoiceChannel: b,
              copyValue: y,
              changePage: Z,
              inviteChannel: _,
              source: k,
              code: R,
              guildScheduledEvent: A,
              disabled: D,
            } = e,
            { maxAge: L, maxUses: B, networkError: z, showVanityURL: M } = c,
            G = i.useCallback(() => {
              (0, h.JG)(y),
                m.default.track(N.rMx.COPY_INSTANT_INVITE, {
                  server: u.Z.getGuildId(),
                  channel: null == _ ? void 0 : _.id,
                  channel_type: null == _ ? void 0 : _.type,
                  location: k,
                  code: R,
                  guild_scheduled_event_id: null == A ? void 0 : A.id,
                });
            }, [y, _, k, R, A]);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(S, { value: y, autoFocus: r, onCopy: G, disabled: D }),
              x
                ? (0, l.jsx)("div", {
                    className: p.temporaryMembershipContainerBackground,
                    children: (0, l.jsx)(d.FormSwitch, {
                      className: p.temporaryMembershipContainer,
                      value: (0, g.yE)(C, s.$.IS_GUEST_INVITE),
                      onChange: (e) => E((0, g.mB)(C, s.$.IS_GUEST_INVITE, e)),
                      note: I.intl.string(I.t["/FeTKy"]),
                      disabled: D,
                      hideBorder: !0,
                      children: b
                        ? I.intl.string(I.t.BPL98f)
                        : I.intl.string(I.t["2snqsL"]),
                    }),
                  })
                : null,
              t || M
                ? null
                : (0, l.jsxs)(d.Text, {
                    variant: "text-xs/normal",
                    className: a()(T.marginTop8, p.footerText),
                    children: [
                      (0, v.Vg)(L, B),
                      " ",
                      r
                        ? (0, l.jsx)(d.Anchor, {
                            onClick: () => Z(f.RV.SETTINGS),
                            children: I.intl.string(I.t.VNe8Pz),
                          })
                        : null,
                    ],
                  }),
              !t && r && M
                ? (0, l.jsxs)(d.Text, {
                    variant: "text-xs/normal",
                    className: a()(T.marginTop8, p.footerText),
                    children: [
                      I.intl.string(I.t["0M2U9/"]),
                      " ",
                      (0, l.jsx)(d.Anchor, {
                        onClick: () => Z(f.RV.SETTINGS),
                        children: I.intl.string(I.t.VNe8Pz),
                      }),
                    ],
                  })
                : null,
              null != z
                ? (0, l.jsx)(j.W, { guild: n, error: z, onClose: o })
                : null,
            ],
          });
        };
    },
    530436: function (e, n, t) {
      t.d(n, {
        W: function () {
          return u;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(481060),
        a = t(434404),
        s = t(496675),
        o = t(981631),
        c = t(388032),
        d = t(871820);
      function u(e) {
        let { guild: n, error: t, onClose: u } = e,
          x = n.id,
          m = i.useCallback(() => {
            u(), a.Z.open(x, o.pNK.INSTANT_INVITES);
          }, [x, u]),
          h = i.useCallback(
            (e) =>
              (0, l.jsx)(r.Clickable, {
                className: d.errorLink,
                onClick: m,
                children: (0, l.jsx)(r.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  tag: "span",
                  children: e,
                }),
              }),
            [m],
          ),
          g = i.useCallback(
            (e) =>
              (0, l.jsx)(r.Anchor, {
                href: o.EYA.INVITES_HELP,
                target: "_blank",
                children: (0, l.jsx)(r.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  tag: "span",
                  children: e,
                }),
              }),
            [],
          ),
          v =
            t.code !== o.evJ.TOO_MANY_INVITES
              ? t.getAnyErrorMessage()
              : s.Z.can(o.Plq.MANAGE_GUILD, n)
                ? c.intl.format(c.t["H/RUY2"], {
                    inviteListHook: h,
                    inviteHelpHook: g,
                  })
                : c.intl.string(c.t["/FxH6O"]);
        return (0, l.jsx)(r.Text, {
          className: d.errorMessage,
          variant: "text-xs/normal",
          color: "text-danger",
          children: v,
        });
      }
    },
    46920: function (e, n, t) {
      t.d(n, {
        Ie: function () {
          return N;
        },
        mv: function () {
          return j;
        },
      }),
        t(47120);
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(692547),
        a = t(481060),
        s = t(239091),
        o = t(584511),
        c = t(118012),
        d = t(922611),
        u = t(699516),
        x = t(51144),
        m = t(88751),
        h = t(930180),
        g = t(388032),
        v = t(578814);
      let j = (e) => {
          let { channelId: n } = e,
            t = (0, h._d)(n);
          return (0, d.Do)({ location: "blocked-users-notice" })
            ? (0, l.jsx)(f, { channelId: n })
            : 0 === t
              ? null
              : (0, l.jsxs)("div", {
                  className: v.blockedNotice,
                  children: [
                    (0, l.jsx)(a.DenyIcon, {
                      size: "lg",
                      className: v.__invalid_blockedIcon,
                      color: r.Z.unsafe_rawColors.RED_400.css,
                    }),
                    (0, l.jsx)(a.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: g.intl.format(g.t["6Tcdt7"], { number: t }),
                    }),
                    (0, l.jsx)(a.Clickable, {
                      className: v.blockedButton,
                      onClick: (e) => {
                        (0, s.vq)(
                          e,
                          (e) => (0, l.jsx)(I, { ...e, channelId: n }),
                          { position: "left", align: "bottom" },
                        );
                      },
                      children: g.intl.string(g.t.rUEjBQ),
                    }),
                  ],
                });
        },
        f = (e) => {
          let { channelId: n } = e,
            t = (0, h._d)(n),
            i = (0, h.K3)(n);
          if (0 === t && 0 === i) return null;
          let o = (e) => {
            (0, s.vq)(e, (e) => (0, l.jsx)(I, { ...e, channelId: n }), {
              position: "left",
              align: "bottom",
            });
          };
          return t > 0 && i > 0
            ? (0, l.jsxs)("div", {
                className: v.blockedNotice,
                children: [
                  (0, l.jsx)(a.DenyIcon, {
                    size: "lg",
                    color: r.Z.unsafe_rawColors.RED_400.css,
                  }),
                  (0, l.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: g.intl.string(g.t["P/KFX1"]),
                  }),
                  (0, l.jsx)(a.Clickable, {
                    className: v.blockedButton,
                    onClick: o,
                    children: g.intl.string(g.t.rUEjBQ),
                  }),
                ],
              })
            : i > 0
              ? (0, l.jsxs)("div", {
                  className: v.blockedNotice,
                  children: [
                    (0, l.jsx)(a.EyeSlashIcon, { size: "lg" }),
                    (0, l.jsx)(a.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: g.intl.format(g.t.Ri3o39, { number: i }),
                    }),
                    (0, l.jsx)(a.Clickable, {
                      className: v.blockedButton,
                      onClick: o,
                      children: g.intl.string(g.t.rUEjBQ),
                    }),
                  ],
                })
              : (0, l.jsxs)("div", {
                  className: v.blockedNotice,
                  children: [
                    (0, l.jsx)(a.DenyIcon, {
                      size: "lg",
                      color: r.Z.unsafe_rawColors.RED_400.css,
                    }),
                    (0, l.jsx)(a.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: g.intl.format(g.t["6Tcdt7"], { number: t }),
                    }),
                    (0, l.jsx)(a.Clickable, {
                      className: v.blockedButton,
                      onClick: o,
                      children: g.intl.string(g.t.rUEjBQ),
                    }),
                  ],
                });
        },
        N = (e) => {
          let { user: n, showStatus: t, speaker: r, channelId: s } = e,
            d = (0, i.e7)([m.ZP], () => m.ZP.isModerator(n.id, s)),
            h = (0, i.e7)([u.Z], () => u.Z.isBlocked(n.id)),
            j = null;
          return (
            t &&
              (j = r
                ? g.intl.string(g.t.LqMmGx)
                : d
                  ? g.intl.string(g.t.GMZqSk)
                  : g.intl.string(g.t.suRAp6)),
            (0, l.jsxs)("div", {
              className: v.user,
              children: [
                (0, l.jsx)(
                  o.Z,
                  {
                    src: n.getAvatarURL(null, 32),
                    size: a.AvatarSizes.SIZE_32,
                    muted: !1,
                    deafen: !1,
                    speaking: !1,
                    ringing: !1,
                    renderIcon: r
                      ? () =>
                          (0, l.jsx)(a.MicrophoneIcon, {
                            size: "md",
                            color: "currentColor",
                            className: v.icon,
                          })
                      : null,
                  },
                  n.id,
                ),
                (0, l.jsxs)("div", {
                  className: v.userInfo,
                  children: [
                    (0, l.jsxs)("div", {
                      className: v.username,
                      children: [
                        (0, l.jsx)(c.Z, {
                          size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                          children: x.ZP.getName(n),
                        }),
                        (0, l.jsx)(c.Z, {
                          size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                          color: c.Z.Colors.HEADER_SECONDARY,
                          children: "#".concat(n.discriminator),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: v.username,
                      children: [
                        (0, l.jsx)(a.Text, {
                          variant: "text-xs/normal",
                          color: h ? "text-danger" : "text-normal",
                          children: h
                            ? g.intl.string(g.t["4bDptL"])
                            : g.intl.string(g.t.tFY5ZW),
                        }),
                        (0, l.jsxs)(a.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: ["| ", j],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        I = (e) => {
          let { channelId: n } = e,
            t = (0, h.z)(n),
            i = (0, h.bA)(n);
          return (0, l.jsx)(a.Scroller, {
            className: v.container,
            children: [...t, ...i].map((e) => {
              let { user: t } = e;
              return (0, l.jsx)(N, { user: t, channelId: n }, t.id);
            }),
          });
        };
    },
  },
]);
//# sourceMappingURL=e2fae2dd580355e0abc4.js.map
