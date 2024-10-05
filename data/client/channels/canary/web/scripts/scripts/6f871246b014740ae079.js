"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18543"],
  {
    725436: function (e, t, n) {
      n.d(t, {
        m: function () {
          return u;
        },
      });
      var s = n(454585),
        a = n(551452),
        l = n(532901);
      let r = {
          ...s.Z.guildEventRules.link,
          react: (0, l.Z)({
            enableBuildOverrides: !1,
            mustConfirmExternalLink: !0,
          }).react,
        },
        i = {
          ...s.Z.guildEventRules.channelMention,
          react: (0, a.Z)({
            enableBuildOverrides: !1,
            shouldCloseDefaultModals: !0,
            shouldStopPropagation: !0,
          }).react,
        },
        u = s.Z.reactParserFor({
          ...s.Z.guildEventRules,
          link: r,
          channelMention: i,
        });
    },
    315416: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = n(470079),
        a = n(442837),
        l = n(897285),
        r = n(924301);
      function i(e, t, n) {
        let i = (0, a.e7)([r.ZP], () => r.ZP.getUserCount(t, n));
        return (
          (0, s.useEffect)(() => {
            null != e &&
              null != t &&
              l.Z.getGuildEventUserCounts(e, t, null != n ? [n] : []);
          }, [t, e, n]),
          i
        );
      }
    },
    405613: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = n(134432),
        a = n(981631);
      function l(e, t) {
        let n;
        if (null == e.image) return null;
        null == t && (t = window.screen.width * (0, s.x_)()),
          (t = (0, s.oO)(t));
        let l = window.GLOBAL_ENV.CDN_HOST;
        if (null != l) {
          var r;
          n = ""
            .concat(((r = "https:"), "https:"), "//")
            .concat(l, "/guild-events/")
            .concat(e.id, "/")
            .concat(e.image);
        } else
          n =
            location.protocol +
            window.GLOBAL_ENV.API_ENDPOINT +
            a.ANM.GUILD_EVENT_IMAGE(e.id, e.image, "png");
        return (n += "?size=".concat(t));
      }
    },
    391174: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(735250),
        a = n(470079),
        l = n(120356),
        r = n.n(l),
        i = n(725436),
        u = n(737602),
        c = n(554034);
      function o(e) {
        let { description: t, className: n, guildId: l, truncate: o = !0 } = e,
          E = a.useMemo(
            () =>
              (0, i.m)(t, !0, {
                guildId: l,
                allowLinks: !0,
                allowHeading: !0,
                allowList: !0,
              }),
            [t, l],
          );
        return (0, s.jsx)("div", {
          className: r()(u.descriptionText, n, c.markup, { [u.truncate]: o }),
          children: E,
        });
      }
    },
    95291: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = n(735250);
      n(470079);
      var a = n(120356),
        l = n.n(a),
        r = n(731006);
      function i(e) {
        let { source: t, className: n } = e;
        return null == t
          ? null
          : (0, s.jsx)("div", {
              className: l()(r.container, n),
              style: { backgroundImage: "url(".concat(t, ")") },
            });
      }
    },
    742593: function (e, t, n) {
      n.d(t, {
        HZ: function () {
          return h;
        },
        Rf: function () {
          return g;
        },
        ZP: function () {
          return f;
        },
      });
      var s = n(735250);
      n(470079);
      var a = n(120356),
        l = n.n(a),
        r = n(442837),
        i = n(481060),
        u = n(271383),
        c = n(51144),
        o = n(894017),
        E = n(79874),
        d = n(315416),
        N = n(236373),
        _ = n(854698),
        T = n(391174),
        m = n(95291),
        D = n(390966),
        v = n(689938),
        x = n(247912);
      function h(e) {
        let {
            className: t,
            creator: n,
            guildId: a,
            isNew: T,
            isHub: m = !1,
            guildEvent: h,
            eventPreview: g,
            recurrenceId: f,
          } = e,
          L = (0, d.Z)(a, h.id, f),
          S = null != h ? h : g,
          A = (0, r.e7)(
            [u.ZP],
            () => u.ZP.getNick(a, null == n ? void 0 : n.id),
            [a, n],
          );
        f = null == S || null != f ? f : (0, _.DK)(S);
        let { startTime: I } = (0, E.ZP)(null != h ? h : g, f),
          Z = (0, o.Z)(f, h.id),
          C =
            (null == S ? void 0 : S.scheduled_start_time) != null
              ? (0, _.lh)(Z, I, new Date(S.scheduled_start_time))
              : null;
        if (null == S) return null;
        let { entity_type: R, status: p, recurrence_rule: j } = S;
        return (0, s.jsxs)("div", {
          className: l()(x.statusContainer, t),
          children: [
            (0, s.jsx)(D.z, {
              startTime: I.toISOString(),
              status: null != C ? C : p,
              eventType: R,
              isNew: T,
              recurrenceRule: (0, N.KV)(j),
              guildEventId: h.id,
              recurrenceId: f,
            }),
            (0, s.jsx)("div", { className: x.spacer }),
            !m &&
              null != n &&
              (0, s.jsx)(i.Tooltip, {
                text: v.Z.Messages.GUILD_EVENT_CREATED_BY.format({
                  username: null != A ? A : c.ZP.getName(n),
                }),
                children: (e) =>
                  (0, s.jsx)(i.Avatar, {
                    ...e,
                    src: n.getAvatarURL(a, 20),
                    size: i.AvatarSizes.SIZE_20,
                    "aria-label": null != A ? A : n.username,
                    className: x.creator,
                  }),
              }),
            (0, s.jsx)(i.Tooltip, {
              text: v.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                count: L,
              }),
              children: (e) =>
                (0, s.jsxs)("div", {
                  className: x.rsvpCount,
                  ...e,
                  children: [
                    (0, s.jsx)(i.GroupIcon, {
                      size: "xxs",
                      color: "currentColor",
                      className: x.rsvpIcon,
                    }),
                    (0, s.jsx)(i.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children: L,
                    }),
                  ],
                }),
            }),
          ],
        });
      }
      function g(e) {
        let {
          headerVariant: t = "heading-lg/medium",
          descriptionClassName: n,
          name: a,
          description: r,
          truncate: u,
          guildId: c,
          imageSource: o,
        } = e;
        return (0, s.jsxs)("div", {
          className: l()({ [x.withThumbnail]: null != o }),
          children: [
            (0, s.jsxs)("div", {
              className: l()({ [x.descriptionWithThumbnail]: null != o }),
              children: [
                (0, s.jsx)(i.Heading, {
                  variant: t,
                  selectable: !0,
                  className: x.eventName,
                  children: a,
                }),
                null != r &&
                  (0, s.jsx)(T.Z, {
                    description: r,
                    className: l()(n, x.description),
                    truncate: u,
                    guildId: c,
                  }),
              ],
            }),
            null != o &&
              (0, s.jsx)("div", {
                className: x.thumbnailContainer,
                children: (0, s.jsx)(m.Z, {
                  source: o,
                  className: x.thumbnail,
                }),
              }),
          ],
        });
      }
      function f(e) {
        let {
          headerVariant: t,
          descriptionClassName: n,
          creator: a,
          name: l,
          description: r,
          imageSource: i,
          isHub: u = !1,
          truncate: c,
          guildId: o,
          isNew: E,
          guildEvent: d,
          eventPreview: N,
          recurrenceId: _,
        } = e;
        return (0, s.jsxs)("div", {
          className: x.container,
          children: [
            (0, s.jsx)(h, {
              className: x.eventInfoStatusContainer,
              creator: a,
              guildId: o,
              isHub: u,
              isNew: E,
              guildEvent: d,
              eventPreview: N,
              recurrenceId: _,
            }),
            (0, s.jsx)(g, {
              name: l,
              description: r,
              headerVariant: t,
              descriptionClassName: n,
              truncate: c,
              guildId: o,
              imageSource: i,
            }),
          ],
        });
      }
    },
    390966: function (e, t, n) {
      n.d(t, {
        z: function () {
          return L;
        },
      }),
        n(47120);
      var s,
        a,
        l = n(735250),
        r = n(470079),
        i = n(120356),
        u = n.n(i),
        c = n(913527),
        o = n.n(c),
        E = n(692547),
        d = n(481060),
        N = n(44315),
        _ = n(894017),
        T = n(854698),
        m = n(849464),
        D = n(765305),
        v = n(231338),
        x = n(689938),
        h = n(205569);
      ((a = s || (s = {}))[(a.SCHEDULED = 0)] = "SCHEDULED"),
        (a[(a.STARTING_SOON = 1)] = "STARTING_SOON"),
        (a[(a.READY = 2)] = "READY"),
        (a[(a.STARTED = 3)] = "STARTED"),
        (a[(a.ENDED = 4)] = "ENDED"),
        (a[(a.CANCELED = 5)] = "CANCELED");
      function g() {
        return (0, l.jsx)(d.TextBadge, {
          className: h.newBadge,
          color: E.Z.unsafe_rawColors.BRAND_260.css,
          text: (0, l.jsx)(d.Text, {
            className: h.newBadgeText,
            variant: "text-xs/bold",
            children: x.Z.Messages.NEW,
          }),
        });
      }
      function f(e) {
        let { children: t, className: n, tooltipText: s } = e;
        return (0, l.jsx)("div", {
          className: u()(h.eventStatusContainer, n),
          children: (0, l.jsx)(d.Tooltip, {
            position: "right",
            text: s,
            shouldShow: null != s,
            children: (e) =>
              (0, l.jsx)("div", {
                ...e,
                className: u()(h.eventStatusContainer, n),
                children: t,
              }),
          }),
        });
      }
      function L(e) {
        let {
            startTime: t,
            status: n,
            eventType: s,
            className: a,
            endTime: i,
            liveText: c,
            textVariant: E = "text-sm/semibold",
            isNew: L,
            recurrenceRule: S,
            guildEventId: A,
            recurrenceId: I,
          } = e,
          Z = (0, N.O0)(v.tP.TEXT_BRAND),
          C = (0, N.O0)(v.tP.TEXT_POSITIVE),
          R = (0, N.O0)(v.tP.TEXT_DANGER);
        null == c &&
          (c =
            s === D.WX.EXTERNAL
              ? x.Z.Messages.STAGE_CHANNEL_HAPPENING_NOW
              : x.Z.Messages.STAGE_CHANNEL_LIVE_NOW);
        let p = (0, _.Z)(I, A),
          [
            {
              startDateTimeString: j,
              endDateTimeString: O,
              currentOrPastEvent: M,
              upcomingEvent: U,
              diffMinutes: w,
            },
            G,
          ] = r.useState((0, T.ub)(t, i));
        r.useEffect(() => {
          G((0, T.ub)(t, i));
          let e = setInterval(() => G((0, T.ub)(t, i)), 1e3);
          return () => {
            clearInterval(e);
          };
        }, [t, i]);
        let P = j;
        null != O &&
          "" !== O &&
          (P = x.Z.Messages.START_DATE_TO_END_DATE.format({
            start: j,
            end: O,
          }));
        let b = r.useMemo(
            () =>
              n === D.p1.CANCELED || (null == p ? void 0 : p.is_canceled)
                ? 5
                : n === D.p1.ACTIVE
                  ? 3
                  : D.$I.has(n)
                    ? 4
                    : M
                      ? 2
                      : U
                        ? 1
                        : 0,
            [n, null == p ? void 0 : p.is_canceled, M, U],
          ),
          H = (function (e, t, n, s, a) {
            switch (e) {
              case 1:
                return a > 0
                  ? x.Z.Messages.STARTING_IN_MINUTES.format({ minutes: a })
                  : x.Z.Messages.STARTING_SOON;
              case 2:
                return x.Z.Messages.STARTING_SOON;
              case 3:
                return null != s && "" !== s
                  ? x.Z.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                      start: n,
                      startHook: (e) =>
                        (0, l.jsx)(d.Text, {
                          color: "text-positive",
                          variant: "text-sm/semibold",
                          className: h.liveEventEndTime,
                          children: e,
                        }),
                      end: s,
                    })
                  : null != n
                    ? n
                    : "";
              default:
                return t;
            }
          })(b, P, c, O, w),
          {
            Icon: V,
            iconColor: Y,
            textColor: k,
            tooltipText: z,
          } = r.useMemo(
            () =>
              (function (e) {
                let t,
                  {
                    timeStatus: n,
                    textBrand: s,
                    textPositive: a,
                    textDanger: l,
                    endDateTimeString: r,
                    startDateTimeString: i,
                  } = e,
                  u = d.CalendarIcon,
                  c = s,
                  o = "header-secondary";
                switch (n) {
                  case 3:
                    (c = a), (o = null != r ? void 0 : "text-positive");
                    break;
                  case 4:
                    u = d.ClockIcon;
                    break;
                  case 2:
                  case 1:
                    (o = "text-brand"), (t = i);
                    break;
                  case 5:
                    c = l;
                }
                return {
                  Icon: u,
                  iconColor: c.hex,
                  textColor: o,
                  tooltipText: t,
                };
              })({
                timeStatus: b,
                textBrand: Z,
                textPositive: C,
                textDanger: R,
                endDateTimeString: O,
                startDateTimeString: j,
              }),
            [b, Z, C, R, O, j],
          ),
          W = null;
        if (null != S) {
          let e = (0, T.Ho)(S);
          W = x.Z.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
            recurrenceRule: e.toText(),
          });
          let n = o()(t);
          W = (function (e, t) {
            let n = t.toDate(),
              s = n.toLocaleString(x.Z.getLocale(), { weekday: "long" });
            switch (e) {
              case m.z.WEEKLY:
                return x.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format(
                  { weekday: s },
                );
              case m.z.BIWEEKLY:
                return x.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_BIWEEKLY.format(
                  { weekday: s },
                );
              case m.z.MONTHLY:
                let a = Math.ceil(n.getDate() / 7);
                return x.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_MONTHLY.format(
                  { weekday: s, nth: a },
                );
              case m.z.YEARLY:
                return x.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format(
                  {
                    date: n.toLocaleString(x.Z.getLocale(), {
                      month: "short",
                      day: "2-digit",
                    }),
                  },
                );
              case m.z.WEEKDAY_ONLY:
                return x.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
              case m.z.WEEKEND_ONLY:
                return x.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKENDS;
              default:
                return null;
            }
          })((0, T.zi)(n, S), n);
        }
        return (0, l.jsxs)(f, {
          className: u()(a, { [h.isRecurring]: null != W }),
          tooltipText: z,
          children: [
            L && n === D.p1.SCHEDULED
              ? (0, l.jsx)(g, {})
              : (0, l.jsx)(V, {
                  color: Y,
                  size: "custom",
                  width: 20,
                  height: 20,
                }),
            (0, l.jsxs)("div", {
              className: h.eventStatusLabel,
              children: [
                (0, l.jsx)(d.Text, { color: k, variant: E, children: H }),
                null != W &&
                  (0, l.jsx)(d.Text, {
                    color: "header-secondary",
                    variant: "text-xs/normal",
                    children: W,
                  }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=6f871246b014740ae079.js.map
