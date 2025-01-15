"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27919"],
  {
    157689: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var l = n(709054),
        i = n(482241),
        r = n(854698);
      function d(e, t, n, d) {
        let a = (0, r.iA)(t, e),
          s = (0, r.Uq)(a.startDate, n.startDate) ? null : n.startDate,
          o = (0, r.Uq)(a.endDate, n.endDate) ? null : n.endDate;
        if (null != d)
          return (0, r.Y4)(n, a)
            ? i.Z.deleteGuildEventException(
                e.guild_id,
                e.id,
                d.event_exception_id,
              )
            : i.Z.updateGuildEventException(
                {
                  scheduled_start_time: null == s ? void 0 : s.toISOString(),
                  scheduled_end_time: null == o ? void 0 : o.toISOString(),
                  is_canceled: d.is_canceled,
                },
                e.guild_id,
                e.id,
                t,
              );
        {
          let n = l.default.extractTimestamp(t);
          return i.Z.createGuildEventException(
            {
              original_scheduled_start_time: new Date(n).toISOString(),
              scheduled_start_time: null == s ? void 0 : s.toISOString(),
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
            return h;
          },
        }),
        n(47120);
      var l = n(200651),
        i = n(192379),
        r = n(481060),
        d = n(981888),
        a = n(157689),
        s = n(894017),
        o = n(854698),
        u = n(440371),
        c = n(388032),
        x = n(566841);
      function h(e) {
        let {
            guildEvent: t,
            recurrenceId: n,
            transitionState: h,
            onClose: m,
          } = e,
          g = (0, s.Z)(n, t.id),
          j = (0, o.iA)(n, t),
          _ = (0, o.x6)(j, g),
          [v, I] = i.useState(_),
          [f, { loading: D, error: p }] = (0, d.Z)(() => {
            let e = (0, a.Z)(t, n, v, g);
            return null == p && m(), e;
          });
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: h,
          children: [
            (0, l.jsx)(r.ModalHeader, {
              children: (0, l.jsx)(r.Heading, {
                variant: "heading-lg/semibold",
                children: c.intl.string(c.t.wmVmXF),
              }),
            }),
            (0, l.jsxs)(r.ModalContent, {
              className: x.content,
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
                  schedule: v,
                  showEndDate: null != v.endDate,
                  requireEndDate: null != v.endDate,
                  guildId: t.guild_id,
                  recurrenceRule: t.recurrence_rule,
                }),
                null != p
                  ? (0, l.jsx)(r.Text, {
                      color: "text-danger",
                      variant: "text-xs/normal",
                      className: x.warning,
                      children: p.getAnyErrorMessage(),
                    })
                  : null,
              ],
            }),
            (0, l.jsxs)(r.ModalFooter, {
              className: x.footer,
              children: [
                (0, l.jsx)(r.Button, {
                  color: r.Button.Colors.BRAND,
                  onClick: f,
                  className: x.button,
                  submitting: D,
                  disabled: (0, o.Y4)(v, _),
                  children: c.intl.string(c.t.e5VEcH),
                }),
                (0, l.jsx)(r.Button, {
                  color: r.Button.Colors.PRIMARY,
                  onClick: m,
                  children: c.intl.string(c.t["ETE/oK"]),
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
      var l = n(200651),
        i = n(192379),
        r = n(481060),
        d = n(377171),
        a = n(854698),
        s = n(388032),
        o = n(560883);
      function u(e) {
        let { startDate: t, recurrenceRule: n, onRecurrenceChange: u } = e,
          c = i.useMemo(() => (0, a.zi)(t, n), [n, t]),
          x = (0, a.P8)(t),
          h = (e) => e.toString(),
          m = (0, l.jsxs)("div", {
            className: o.title,
            children: [
              s.intl.string(s.t["59TVxM"]),
              (0, l.jsx)(r.TextBadge, {
                text: s.intl.string(s.t.y2b7CA),
                color: d.Z.BG_BRAND,
              }),
            ],
          });
        return (0, l.jsx)(r.FormItem, {
          title: m,
          required: !0,
          children: (0, l.jsx)(r.Select, {
            placeholder: "gaming",
            options: x,
            select: u,
            serialize: h,
            isSelected: (e) => null != c && h(e) === h(c),
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
      var l = n(200651);
      n(192379);
      var i = n(913527),
        r = n.n(i),
        d = n(481060),
        a = n(854698),
        s = n(401876),
        o = n(388032),
        u = n(21394);
      function c(e) {
        let {
          className: t,
          onScheduleChange: n,
          onRecurrenceChange: i,
          onTimeChange: c,
          timeSelected: x = !0,
          schedule: h,
          recurrenceRule: m,
          showEndDate: g = !1,
          requireEndDate: j = !1,
          disableStartDateTime: _ = !1,
        } = e;
        if (null == h) return null;
        let v = null,
          I = h.startDate,
          f = r()(),
          D = r()().add(a.G3, "days"),
          p = r()().add(a.Ib, "days");
        null != m && (D.add(a.hn, "years"), p.add(a.hn, "years"));
        let S = (e) => {
          n({ ...h, endDate: e });
        };
        return (
          g &&
            (v =
              null != h.endDate || j
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)("div", {
                        className: u.doubleInput,
                        children: [
                          (0, l.jsx)(d.FormItem, {
                            title: o.intl.string(o.t.CTLgZG),
                            required: j,
                            children: (0, l.jsx)(d.DateInput, {
                              value: h.endDate,
                              onSelect: S,
                              minDate: h.startDate,
                              maxDate: p,
                            }),
                          }),
                          (0, l.jsx)(d.FormItem, {
                            title: o.intl.string(o.t.j2RuXF),
                            required: j,
                            children: (0, l.jsx)(d.TimeInput, {
                              value: h.endDate,
                              onChange: S,
                            }),
                          }),
                        ],
                      }),
                      j
                        ? null
                        : (0, l.jsx)(d.Button, {
                            onClick: () => {
                              S(void 0);
                            },
                            look: d.Button.Looks.BLANK,
                            size: d.Button.Sizes.MIN,
                            children: (0, l.jsxs)("div", {
                              className: u.link,
                              children: [
                                (0, l.jsx)(d.CircleXIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 17,
                                  height: 17,
                                  className: u.removeIcon,
                                }),
                                (0, l.jsx)(d.Text, {
                                  variant: "text-sm/normal",
                                  children: o.intl.string(o.t.petdfn),
                                }),
                              ],
                            }),
                          }),
                    ],
                  })
                : (0, l.jsx)(d.Button, {
                    look: d.Button.Looks.BLANK,
                    size: d.Button.Sizes.MIN,
                    onClick: () => {
                      S(r()(h.startDate).add(1, "hour"));
                    },
                    children: (0, l.jsxs)("div", {
                      className: u.link,
                      children: [
                        (0, l.jsx)(d.CirclePlusIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                          className: u.addIcon,
                        }),
                        (0, l.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          children: o.intl.string(o.t.ncdPcn),
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
                  (0, l.jsx)(d.FormItem, {
                    title: o.intl.string(o.t.kKOIwM),
                    required: !0,
                    children: (0, l.jsx)(d.DateInput, {
                      value: h.startDate,
                      onSelect: (e) => {
                        n({ ...h, startDate: e });
                      },
                      minDate: f,
                      maxDate: D,
                      disabled: _,
                    }),
                  }),
                  (0, l.jsx)(d.FormItem, {
                    title: o.intl.string(o.t["6dGmCA"]),
                    required: !0,
                    children: (0, l.jsx)(d.TimeInput, {
                      value: h.startDate,
                      onChange: (e) => {
                        if (!!e.isValid())
                          null == c || c(!0), n({ ...h, startDate: e });
                      },
                      hideValue: !x,
                      disabled: _,
                    }),
                  }),
                ],
              }),
              v,
              null != I &&
                null != i &&
                (0, l.jsx)(s.Z, {
                  onRecurrenceChange: i,
                  startDate: I,
                  recurrenceRule: m,
                }),
            ],
          })
        );
      }
    },
    981888: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        n(47120);
      var l = n(192379),
        i = n(881052);
      function r(e, t) {
        let [n, r] = l.useState(!1),
          [d, a] = l.useState(null);
        return [
          async () => {
            r(!0), a(null);
            try {
              let t = await e();
              return r(!1), a(null), t;
            } catch (n) {
              let e = new i.Hx(n);
              return null == t || t(e), a(e), r(!1), null;
            }
          },
          { loading: n, error: d },
        ];
      }
    },
    566841: function (e, t, n) {
      e.exports = {
        content: "content_d3303b",
        warning: "warning_d3303b",
        footer: "footer_d3303b",
        button: "button_d3303b",
      };
    },
    560883: function (e, t, n) {
      e.exports = { title: "title_a33974" };
    },
    21394: function (e, t, n) {
      e.exports = {
        doubleInput: "doubleInput_c8eacd",
        link: "link_c8eacd",
        addIcon: "addIcon_c8eacd",
        removeIcon: "removeIcon_c8eacd",
      };
    },
  },
]);
//# sourceMappingURL=ab4a36c9c94b97667fdc.js.map
