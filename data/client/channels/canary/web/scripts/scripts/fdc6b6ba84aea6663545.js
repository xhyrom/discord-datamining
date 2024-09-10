"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27919"],
  {
    157689: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var l = n(709054),
        s = n(482241),
        i = n(854698);
      function r(e, t, n, r) {
        let a = (0, i.iA)(t, e),
          d = (0, i.Uq)(a.startDate, n.startDate) ? null : n.startDate,
          o = (0, i.Uq)(a.endDate, n.endDate) ? null : n.endDate;
        if (null != r)
          return (0, i.Y4)(n, a)
            ? s.Z.deleteGuildEventException(
                e.guild_id,
                e.id,
                r.event_exception_id,
              )
            : s.Z.updateGuildEventException(
                {
                  scheduled_start_time: null == d ? void 0 : d.toISOString(),
                  scheduled_end_time: null == o ? void 0 : o.toISOString(),
                  is_canceled: r.is_canceled,
                },
                e.guild_id,
                e.id,
                t,
              );
        {
          let n = l.default.extractTimestamp(t);
          return s.Z.createGuildEventException(
            {
              original_scheduled_start_time: new Date(n).toISOString(),
              scheduled_start_time: null == d ? void 0 : d.toISOString(),
              scheduled_end_time: null == o ? void 0 : o.toISOString(),
              is_canceled: !1,
            },
            e.guild_id,
            e.id,
          );
        }
      }
    },
    379038: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n(47120);
      var l = n(735250),
        s = n(470079),
        i = n(481060),
        r = n(981888),
        a = n(157689),
        d = n(894017),
        o = n(854698),
        u = n(440371),
        c = n(689938),
        E = n(563384);
      function _(e) {
        let {
            guildEvent: t,
            recurrenceId: n,
            transitionState: _,
            onClose: x,
          } = e,
          h = (0, d.Z)(n, t.id),
          m = (0, o.iA)(n, t),
          g = (0, o.x6)(m, h),
          [D, I] = s.useState(g),
          [T, { loading: j, error: N }] = (0, r.Z)(() => {
            let e = (0, a.Z)(t, n, D, h);
            return null == N && x(), e;
          });
        return (0, l.jsxs)(i.ModalRoot, {
          transitionState: _,
          children: [
            (0, l.jsx)(i.ModalHeader, {
              children: (0, l.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                children: c.Z.Messages.EDIT_THIS_EVENT,
              }),
            }),
            (0, l.jsxs)(i.ModalContent, {
              className: E.content,
              children: [
                (0, l.jsx)(u.Z, {
                  onScheduleChange: (e) => {
                    let { startDate: t, endDate: n } = e;
                    null != t &&
                      null != n &&
                      n.isBefore(t) &&
                      (n = t.clone().add(1, "hour")),
                      I({ startDate: t, endDate: n });
                  },
                  schedule: D,
                  showEndDate: null != D.endDate,
                  requireEndDate: null != D.endDate,
                  guildId: t.guild_id,
                  recurrenceRule: t.recurrence_rule,
                }),
                null != N
                  ? (0, l.jsx)(i.Text, {
                      color: "text-danger",
                      variant: "text-xs/normal",
                      className: E.warning,
                      children: N.getAnyErrorMessage(),
                    })
                  : null,
              ],
            }),
            (0, l.jsxs)(i.ModalFooter, {
              className: E.footer,
              children: [
                (0, l.jsx)(i.Button, {
                  color: i.Button.Colors.BRAND,
                  onClick: T,
                  className: E.button,
                  submitting: j,
                  disabled: (0, o.Y4)(D, g),
                  children: c.Z.Messages.SAVE_EVENT,
                }),
                (0, l.jsx)(i.Button, {
                  color: i.Button.Colors.PRIMARY,
                  onClick: x,
                  children: c.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    401876: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var l = n(735250),
        s = n(470079),
        i = n(481060),
        r = n(377171),
        a = n(854698),
        d = n(689938),
        o = n(94277);
      function u(e) {
        let { startDate: t, recurrenceRule: n, onRecurrenceChange: u } = e,
          c = s.useMemo(() => (0, a.zi)(t, n), [n, t]),
          E = (0, a.P8)(t),
          _ = (e) => e.toString(),
          x = (0, l.jsxs)("div", {
            className: o.title,
            children: [
              d.Z.Messages.CREATE_EVENT_RECUR_LABEL,
              (0, l.jsx)(i.TextBadge, {
                text: d.Z.Messages.NEW,
                color: r.Z.BG_BRAND,
              }),
            ],
          });
        return (0, l.jsx)(i.FormItem, {
          title: x,
          required: !0,
          children: (0, l.jsx)(i.Select, {
            placeholder: "gaming",
            options: E,
            select: u,
            serialize: _,
            isSelected: (e) => null != c && _(e) === _(c),
          }),
        });
      }
    },
    440371: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var l = n(735250);
      n(470079);
      var s = n(913527),
        i = n.n(s),
        r = n(481060),
        a = n(854698),
        d = n(401876),
        o = n(689938),
        u = n(805553);
      function c(e) {
        let {
          className: t,
          onScheduleChange: n,
          onRecurrenceChange: s,
          onTimeChange: c,
          timeSelected: E = !0,
          schedule: _,
          recurrenceRule: x,
          showEndDate: h = !1,
          requireEndDate: m = !1,
          disableStartDateTime: g = !1,
        } = e;
        if (null == _) return null;
        let D = null,
          I = _.startDate,
          T = i()(),
          j = i()().add(a.G3, "days"),
          N = i()().add(a.Ib, "days");
        null != x && (j.add(a.hn, "years"), N.add(a.hn, "years"));
        let v = (e) => {
          n({ ..._, endDate: e });
        };
        return (
          h &&
            (D =
              null != _.endDate || m
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)("div", {
                        className: u.doubleInput,
                        children: [
                          (0, l.jsx)(r.FormItem, {
                            title: o.Z.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: m,
                            children: (0, l.jsx)(r.DateInput, {
                              value: _.endDate,
                              onSelect: v,
                              minDate: _.startDate,
                              maxDate: N,
                            }),
                          }),
                          (0, l.jsx)(r.FormItem, {
                            title: o.Z.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: m,
                            children: (0, l.jsx)(r.TimeInput, {
                              value: _.endDate,
                              onChange: v,
                            }),
                          }),
                        ],
                      }),
                      m
                        ? null
                        : (0, l.jsx)(r.Button, {
                            onClick: () => {
                              v(void 0);
                            },
                            look: r.Button.Looks.BLANK,
                            size: r.Button.Sizes.MIN,
                            children: (0, l.jsxs)("div", {
                              className: u.link,
                              children: [
                                (0, l.jsx)(r.CircleXIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 17,
                                  height: 17,
                                  className: u.removeIcon,
                                }),
                                (0, l.jsx)(r.Text, {
                                  variant: "text-sm/normal",
                                  children:
                                    o.Z.Messages
                                      .CREATE_EVENT_REMOVE_END_TIME_LABEL,
                                }),
                              ],
                            }),
                          }),
                    ],
                  })
                : (0, l.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.MIN,
                    onClick: () => {
                      v(i()(_.startDate).add(1, "hour"));
                    },
                    children: (0, l.jsxs)("div", {
                      className: u.link,
                      children: [
                        (0, l.jsx)(r.CirclePlusIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                          className: u.addIcon,
                        }),
                        (0, l.jsx)(r.Text, {
                          variant: "text-sm/normal",
                          children:
                            o.Z.Messages.CREATE_EVENT_ADD_END_TIME_LABEL,
                        }),
                      ],
                    }),
                  })),
          (0, l.jsxs)("div", {
            className: t,
            children: [
              (0, l.jsxs)("div", {
                className: u.doubleInput,
                children: [
                  (0, l.jsx)(r.FormItem, {
                    title: o.Z.Messages.CREATE_EVENT_START_DATE_LABEL,
                    required: !0,
                    children: (0, l.jsx)(r.DateInput, {
                      value: _.startDate,
                      onSelect: (e) => {
                        n({ ..._, startDate: e });
                      },
                      minDate: T,
                      maxDate: j,
                      disabled: g,
                    }),
                  }),
                  (0, l.jsx)(r.FormItem, {
                    title: o.Z.Messages.CREATE_EVENT_START_TIME_LABEL,
                    required: !0,
                    children: (0, l.jsx)(r.TimeInput, {
                      value: _.startDate,
                      onChange: (e) => {
                        if (!!e.isValid())
                          null == c || c(!0), n({ ..._, startDate: e });
                      },
                      hideValue: !E,
                      disabled: g,
                    }),
                  }),
                ],
              }),
              D,
              null != I &&
                null != s &&
                (0, l.jsx)(d.Z, {
                  onRecurrenceChange: s,
                  startDate: I,
                  recurrenceRule: x,
                }),
            ],
          })
        );
      }
    },
    981888: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      var l = n(470079),
        s = n(881052);
      function i(e, t) {
        let [n, i] = l.useState(!1),
          [r, a] = l.useState(null);
        return [
          async () => {
            i(!0), a(null);
            try {
              let t = await e();
              return i(!1), a(null), t;
            } catch (n) {
              let e = new s.Hx(n);
              return null == t || t(e), a(e), i(!1), null;
            }
          },
          { loading: n, error: r },
        ];
      }
    },
    563384: function (e, t, n) {
      e.exports = {
        content: "content_d3303b",
        warning: "warning_d3303b",
        footer: "footer_d3303b",
        button: "button_d3303b",
      };
    },
    94277: function (e, t, n) {
      e.exports = { title: "title_a33974" };
    },
    805553: function (e, t, n) {
      e.exports = {
        doubleInput: "doubleInput_c8eacd",
        link: "link_c8eacd",
        addIcon: "addIcon_c8eacd",
        removeIcon: "removeIcon_c8eacd",
      };
    },
  },
]);
//# sourceMappingURL=fdc6b6ba84aea6663545.js.map
