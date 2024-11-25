"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18543"],
  {
    725436: function (t, e, n) {
      n.d(e, {
        m: function () {
          return u;
        },
      });
      var l = n(454585),
        r = n(551452),
        i = n(532901);
      let a = {
          ...l.Z.guildEventRules.link,
          react: (0, i.Z)({
            enableBuildOverrides: !1,
            mustConfirmExternalLink: !0,
          }).react,
        },
        s = {
          ...l.Z.guildEventRules.channelMention,
          react: (0, r.Z)({
            enableBuildOverrides: !1,
            shouldCloseDefaultModals: !0,
            shouldStopPropagation: !0,
          }).react,
        },
        u = l.Z.reactParserFor({
          ...l.Z.guildEventRules,
          link: a,
          channelMention: s,
        });
    },
    315416: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return s;
        },
      });
      var l = n(192379),
        r = n(442837),
        i = n(897285),
        a = n(924301);
      function s(t, e, n) {
        let s = (0, r.e7)([a.ZP], () => a.ZP.getUserCount(e, n));
        return (
          (0, l.useEffect)(() => {
            null != t &&
              null != e &&
              i.Z.getGuildEventUserCounts(t, e, null != n ? [n] : []);
          }, [e, t, n]),
          s
        );
      }
    },
    405613: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var l = n(134432),
        r = n(981631);
      function i(t, e) {
        let n;
        if (null == t.image) return null;
        null == e && (e = window.screen.width * (0, l.x_)()),
          (e = (0, l.oO)(e));
        let i = window.GLOBAL_ENV.CDN_HOST;
        if (null != i) {
          var a;
          n = ""
            .concat(((a = "https:"), "https:"), "//")
            .concat(i, "/guild-events/")
            .concat(t.id, "/")
            .concat(t.image);
        } else
          n =
            location.protocol +
            window.GLOBAL_ENV.API_ENDPOINT +
            r.ANM.GUILD_EVENT_IMAGE(t.id, t.image, "png");
        return (n += "?size=".concat(e));
      }
    },
    391174: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var l = n(200651),
        r = n(192379),
        i = n(120356),
        a = n.n(i),
        s = n(725436),
        u = n(54670),
        c = n(665162);
      function o(t) {
        let { description: e, className: n, guildId: i, truncate: o = !0 } = t,
          d = r.useMemo(
            () =>
              (0, s.m)(e, !0, {
                guildId: i,
                allowLinks: !0,
                allowHeading: !0,
                allowList: !0,
              }),
            [e, i],
          );
        return (0, l.jsx)("div", {
          className: a()(u.descriptionText, n, c.markup, { [u.truncate]: o }),
          children: d,
        });
      }
    },
    95291: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return s;
        },
      });
      var l = n(200651);
      n(192379);
      var r = n(120356),
        i = n.n(r),
        a = n(818974);
      function s(t) {
        let { source: e, className: n } = t;
        return null == e
          ? null
          : (0, l.jsx)("div", {
              className: i()(a.container, n),
              style: { backgroundImage: "url(".concat(e, ")") },
            });
      }
    },
    742593: function (t, e, n) {
      n.d(e, {
        HZ: function () {
          return T;
        },
        Rf: function () {
          return S;
        },
        ZP: function () {
          return p;
        },
      });
      var l = n(200651);
      n(192379);
      var r = n(120356),
        i = n.n(r),
        a = n(442837),
        s = n(481060),
        u = n(271383),
        c = n(51144),
        o = n(894017),
        d = n(79874),
        m = n(315416),
        v = n(236373),
        x = n(854698),
        h = n(391174),
        E = n(95291),
        g = n(390966),
        N = n(388032),
        f = n(166710);
      function T(t) {
        let {
            className: e,
            creator: n,
            guildId: r,
            isNew: h,
            isHub: E = !1,
            guildEvent: T,
            eventPreview: S,
            recurrenceId: p,
          } = t,
          j = (0, m.Z)(r, T.id, p),
          D = null != T ? T : S,
          I = (0, a.e7)(
            [u.ZP],
            () => u.ZP.getNick(r, null == n ? void 0 : n.id),
            [r, n],
          );
        p = null == D || null != p ? p : (0, x.DK)(D);
        let { startTime: C } = (0, d.ZP)(null != T ? T : S, p),
          L = (0, o.Z)(p, T.id),
          Z =
            (null == D ? void 0 : D.scheduled_start_time) != null
              ? (0, x.lh)(L, C, new Date(D.scheduled_start_time))
              : null;
        if (null == D) return null;
        let { entity_type: w, status: _, recurrence_rule: b } = D;
        return (0, l.jsxs)("div", {
          className: i()(f.statusContainer, e),
          children: [
            (0, l.jsx)(g.z, {
              startTime: C.toISOString(),
              status: null != Z ? Z : _,
              eventType: w,
              isNew: h,
              recurrenceRule: (0, v.KV)(b),
              guildEventId: T.id,
              recurrenceId: p,
            }),
            (0, l.jsx)("div", { className: f.spacer }),
            !E &&
              null != n &&
              (0, l.jsx)(s.Tooltip, {
                text: N.intl.formatToPlainString(N.t["+3iypa"], {
                  username: null != I ? I : c.ZP.getName(n),
                }),
                children: (t) =>
                  (0, l.jsx)(s.Avatar, {
                    ...t,
                    src: n.getAvatarURL(r, 20),
                    size: s.AvatarSizes.SIZE_20,
                    "aria-label": null != I ? I : n.username,
                    className: f.creator,
                  }),
              }),
            (0, l.jsx)(s.Tooltip, {
              text: N.intl.formatToPlainString(N.t["+DLsDw"], { count: j }),
              children: (t) =>
                (0, l.jsxs)("div", {
                  className: f.rsvpCount,
                  ...t,
                  children: [
                    (0, l.jsx)(s.GroupIcon, {
                      size: "xxs",
                      color: "currentColor",
                      className: f.rsvpIcon,
                    }),
                    (0, l.jsx)(s.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children: j,
                    }),
                  ],
                }),
            }),
          ],
        });
      }
      function S(t) {
        let {
          headerVariant: e = "heading-lg/medium",
          descriptionClassName: n,
          name: r,
          description: a,
          truncate: u,
          guildId: c,
          imageSource: o,
        } = t;
        return (0, l.jsxs)("div", {
          className: i()({ [f.withThumbnail]: null != o }),
          children: [
            (0, l.jsxs)("div", {
              className: i()({ [f.descriptionWithThumbnail]: null != o }),
              children: [
                (0, l.jsx)(s.Heading, {
                  variant: e,
                  selectable: !0,
                  className: f.eventName,
                  children: r,
                }),
                null != a &&
                  (0, l.jsx)(h.Z, {
                    description: a,
                    className: i()(n, f.description),
                    truncate: u,
                    guildId: c,
                  }),
              ],
            }),
            null != o &&
              (0, l.jsx)("div", {
                className: f.thumbnailContainer,
                children: (0, l.jsx)(E.Z, {
                  source: o,
                  className: f.thumbnail,
                }),
              }),
          ],
        });
      }
      function p(t) {
        let {
          headerVariant: e,
          descriptionClassName: n,
          creator: r,
          name: i,
          description: a,
          imageSource: s,
          isHub: u = !1,
          truncate: c,
          guildId: o,
          isNew: d,
          guildEvent: m,
          eventPreview: v,
          recurrenceId: x,
        } = t;
        return (0, l.jsxs)("div", {
          className: f.container,
          children: [
            (0, l.jsx)(T, {
              className: f.eventInfoStatusContainer,
              creator: r,
              guildId: o,
              isHub: u,
              isNew: d,
              guildEvent: m,
              eventPreview: v,
              recurrenceId: x,
            }),
            (0, l.jsx)(S, {
              name: i,
              description: a,
              headerVariant: e,
              descriptionClassName: n,
              truncate: c,
              guildId: o,
              imageSource: s,
            }),
          ],
        });
      }
    },
    390966: function (t, e, n) {
      n.d(e, {
        z: function () {
          return j;
        },
      }),
        n(47120);
      var l,
        r,
        i = n(200651),
        a = n(192379),
        s = n(120356),
        u = n.n(s),
        c = n(913527),
        o = n.n(c),
        d = n(692547),
        m = n(481060),
        v = n(44315),
        x = n(894017),
        h = n(854698),
        E = n(849464),
        g = n(765305),
        N = n(231338),
        f = n(388032),
        T = n(98764);
      ((r = l || (l = {}))[(r.SCHEDULED = 0)] = "SCHEDULED"),
        (r[(r.STARTING_SOON = 1)] = "STARTING_SOON"),
        (r[(r.READY = 2)] = "READY"),
        (r[(r.STARTED = 3)] = "STARTED"),
        (r[(r.ENDED = 4)] = "ENDED"),
        (r[(r.CANCELED = 5)] = "CANCELED");
      function S() {
        return (0, i.jsx)(m.TextBadge, {
          className: T.newBadge,
          color: d.Z.unsafe_rawColors.BRAND_260.css,
          text: (0, i.jsx)(m.Text, {
            className: T.newBadgeText,
            variant: "text-xs/bold",
            children: f.intl.string(f.t.y2b7CA),
          }),
        });
      }
      function p(t) {
        let { children: e, className: n, tooltipText: l } = t;
        return (0, i.jsx)("div", {
          className: u()(T.eventStatusContainer, n),
          children: (0, i.jsx)(m.Tooltip, {
            position: "right",
            text: l,
            shouldShow: null != l,
            children: (t) =>
              (0, i.jsx)("div", {
                ...t,
                className: u()(T.eventStatusContainer, n),
                children: e,
              }),
          }),
        });
      }
      function j(t) {
        let {
            startTime: e,
            status: n,
            eventType: l,
            className: r,
            endTime: s,
            liveText: c,
            textVariant: d = "text-sm/semibold",
            isNew: j,
            recurrenceRule: D,
            guildEventId: I,
            recurrenceId: C,
          } = t,
          L = (0, v.O0)(N.tP.TEXT_BRAND),
          Z = (0, v.O0)(N.tP.TEXT_POSITIVE),
          w = (0, v.O0)(N.tP.TEXT_DANGER);
        null == c &&
          (c =
            l === g.WX.EXTERNAL
              ? f.intl.string(f.t.IyZxjI)
              : f.intl.string(f.t["X2K3//"]));
        let _ = (0, x.Z)(C, I),
          [
            {
              startDateTimeString: b,
              endDateTimeString: A,
              currentOrPastEvent: P,
              upcomingEvent: R,
              diffMinutes: O,
            },
            k,
          ] = a.useState((0, h.ub)(e, s));
        a.useEffect(() => {
          k((0, h.ub)(e, s));
          let t = setInterval(() => k((0, h.ub)(e, s)), 1e3);
          return () => {
            clearInterval(t);
          };
        }, [e, s]);
        let z = b;
        null != A &&
          "" !== A &&
          (z = f.intl.formatToPlainString(f.t.tXbu7O, { start: b, end: A }));
        let H = a.useMemo(
            () =>
              n === g.p1.CANCELED || (null == _ ? void 0 : _.is_canceled)
                ? 5
                : n === g.p1.ACTIVE
                  ? 3
                  : g.$I.has(n)
                    ? 4
                    : P
                      ? 2
                      : R
                        ? 1
                        : 0,
            [n, null == _ ? void 0 : _.is_canceled, P, R],
          ),
          y = (function (t, e, n, l, r) {
            switch (t) {
              case 1:
                return r > 0
                  ? f.intl.formatToPlainString(f.t.PQlCWl, { minutes: r })
                  : f.intl.string(f.t.WINqKS);
              case 2:
                return f.intl.string(f.t.WINqKS);
              case 3:
                return null != l && "" !== l
                  ? f.intl.format(f.t.vHYgJS, {
                      start: n,
                      startHook: (t) =>
                        (0, i.jsx)(m.Text, {
                          color: "text-positive",
                          variant: "text-sm/semibold",
                          className: T.liveEventEndTime,
                          children: t,
                        }),
                      end: l,
                    })
                  : null != n
                    ? n
                    : "";
              default:
                return e;
            }
          })(H, z, c, A, O),
          {
            Icon: Y,
            iconColor: B,
            textColor: G,
            tooltipText: K,
          } = a.useMemo(
            () =>
              (function (t) {
                let e,
                  {
                    timeStatus: n,
                    textBrand: l,
                    textPositive: r,
                    textDanger: i,
                    endDateTimeString: a,
                    startDateTimeString: s,
                  } = t,
                  u = m.CalendarIcon,
                  c = l,
                  o = "header-secondary";
                switch (n) {
                  case 3:
                    (c = r), (o = null != a ? void 0 : "text-positive");
                    break;
                  case 4:
                    u = m.ClockIcon;
                    break;
                  case 2:
                  case 1:
                    (o = "text-brand"), (e = s);
                    break;
                  case 5:
                    c = i;
                }
                return {
                  Icon: u,
                  iconColor: c.hex,
                  textColor: o,
                  tooltipText: e,
                };
              })({
                timeStatus: H,
                textBrand: L,
                textPositive: Z,
                textDanger: w,
                endDateTimeString: A,
                startDateTimeString: b,
              }),
            [H, L, Z, w, A, b],
          ),
          M = null;
        if (null != D) {
          let t = (0, h.Ho)(D);
          M = f.intl.formatToPlainString(f.t.HmKEqa, {
            recurrenceRule: t.toText(),
          });
          let n = o()(e);
          M = (function (t, e) {
            let n = e.toDate(),
              l = n.toLocaleString(f.intl.currentLocale, { weekday: "long" });
            switch (t) {
              case E.z.WEEKLY:
                return f.intl.formatToPlainString(f.t.xQM9X1, { weekday: l });
              case E.z.BIWEEKLY:
                return f.intl.formatToPlainString(f.t.RYscaW, { weekday: l });
              case E.z.MONTHLY:
                let r = Math.ceil(n.getDate() / 7);
                return f.intl.formatToPlainString(f.t["4ZN9Ag"], {
                  weekday: l,
                  nth: r,
                });
              case E.z.YEARLY:
                return f.intl.formatToPlainString(f.t["rXUS+v"], {
                  date: n.toLocaleString(f.intl.currentLocale, {
                    month: "short",
                    day: "2-digit",
                  }),
                });
              case E.z.WEEKDAY_ONLY:
                return f.intl.string(f.t["2BX6bG"]);
              case E.z.WEEKEND_ONLY:
                return f.intl.string(f.t["IEi+R0"]);
              default:
                return null;
            }
          })((0, h.zi)(n, D), n);
        }
        return (0, i.jsxs)(p, {
          className: u()(r, { [T.isRecurring]: null != M }),
          tooltipText: K,
          children: [
            j && n === g.p1.SCHEDULED
              ? (0, i.jsx)(S, {})
              : (0, i.jsx)(Y, {
                  color: B,
                  size: "custom",
                  width: 20,
                  height: 20,
                }),
            (0, i.jsxs)("div", {
              className: T.eventStatusLabel,
              children: [
                (0, i.jsx)(m.Text, { color: G, variant: d, children: y }),
                null != M &&
                  (0, i.jsx)(m.Text, {
                    color: "header-secondary",
                    variant: "text-xs/normal",
                    children: M,
                  }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=d66c1888954afd2bd657.js.map
