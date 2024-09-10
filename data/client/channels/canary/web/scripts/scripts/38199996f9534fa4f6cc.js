"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95393"],
  {
    392459: function (e) {
      e.exports =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 66 38' width='66' height='38'%3E%3Crect x='0' y='0' width='66' height='38' style='fill: rgb(0, 0, 0); stroke: rgb(0, 0, 0);'%3E%3C/rect%3E%3C/svg%3E";
    },
    850259: function (e) {
      e.exports =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='6.122 5.864 259 50' width='259' height='50'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M 68.122 11.864 L 192.122 11.864 C 193.779 11.864 195.122 13.207 195.122 14.864 L 195.122 28.864 C 195.122 30.521 193.779 31.864 192.122 31.864 L 68.122 31.864 C 66.465 31.864 65.122 30.521 65.122 28.864 L 65.122 14.864 C 65.122 13.207 66.465 11.864 68.122 11.864 Z M 68.122 35.864 L 262.122 35.864 C 263.779 35.864 265.122 37.207 265.122 38.864 L 265.122 48.864 C 265.122 50.521 263.779 51.864 262.122 51.864 L 68.122 51.864 C 66.465 51.864 65.122 50.521 65.122 48.864 L 65.122 38.864 C 65.122 37.207 66.465 35.864 68.122 35.864 Z M 25.352 5.864 L 36.892 5.864 C 43.579 5.864 46.004 6.56 48.448 7.867 C 50.893 9.175 52.811 11.093 54.118 13.537 C 55.428 15.984 56.122 18.407 56.122 25.094 L 56.122 36.634 C 56.122 43.321 55.426 45.746 54.119 48.19 C 52.811 50.635 50.893 52.553 48.449 53.86 C 46.002 55.17 43.579 55.864 36.892 55.864 L 25.352 55.864 C 18.665 55.864 16.24 55.168 13.796 53.861 C 11.351 52.553 9.433 50.635 8.126 48.191 C 6.816 45.744 6.122 43.321 6.122 36.634 L 6.122 25.094 C 6.122 18.407 6.818 15.982 8.125 13.538 C 9.432 11.094 11.352 9.174 13.795 7.868 C 16.242 6.558 18.665 5.864 25.352 5.864 Z'%3E%3C/path%3E%3C/svg%3E";
    },
    978227: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return o;
        },
      });
      var s = l(470079),
        t = l(442837),
        a = l(749210),
        i = l(594174);
      function o(e) {
        let n = (0, t.e7)(
          [i.default],
          () => i.default.getUser(null == e ? void 0 : e.creator_id),
          [e],
        );
        return (
          s.useEffect(() => {
            null == n &&
              (null == e ? void 0 : e.creator_id) != null &&
              a.Z.requestMembersById(e.guild_id, e.creator_id);
          }, [e, n]),
          n
        );
      }
    },
    11868: function (e, n, l) {
      l.d(n, {
        Qt: function () {
          return b;
        },
      });
      var s = l(735250),
        t = l(470079),
        a = l(120356),
        i = l.n(a),
        o = l(442837),
        r = l(481060),
        u = l(447543),
        c = l(287734),
        d = l(372769),
        m = l(955415),
        N = l(922482),
        v = l(601964),
        C = l(592125),
        p = l(430824),
        h = l(15274),
        E = l(924301),
        g = l(725436),
        I = l(978227),
        x = l(236373),
        j = l(854698),
        L = l(405613),
        f = l(95291),
        S = l(742593),
        T = l(217804),
        _ = l(139712),
        B = l(765305),
        Z = l(689938),
        k = l(639955);
      let R = (e, n) => (l) => {
          l.stopPropagation(),
            c.default.selectVoiceChannel(e.channel_id, !1),
            null == n || n(l);
        },
        D = (e, n) => (l) => {
          let s = C.Z.getChannel(e.channel_id);
          null != s && (l.stopPropagation(), (0, N.Cq)(s), null == n || n(l));
        },
        b = (e, n) => {
          switch (null == e ? void 0 : e.entity_type) {
            case B.WX.STAGE_INSTANCE:
              return D(e, n);
            case B.WX.VOICE:
              return R(e, n);
          }
          return () => {};
        },
        A = (e, n) =>
          n &&
          [B.WX.STAGE_INSTANCE, B.WX.VOICE].includes(
            null == e ? void 0 : e.entity_type,
          ),
        M = t.memo(function (e) {
          var n;
          let { guild: l, guildScheduledEvent: a, channel: i, isMember: c } = e,
            N = (0, o.e7)(
              [p.Z],
              () => {
                var e;
                return null == l
                  ? null
                  : null !== (e = p.Z.getGuild(l.id)) && void 0 !== e
                    ? e
                    : new v.ZP(l);
              },
              [l],
            ),
            C = (0, T.u)(a, i),
            h = t.useCallback(
              (e) => {
                c && null != a && (e.stopPropagation(), (0, u.B)(a));
              },
              [c, a],
            ),
            E = t.useCallback(
              (e) => {
                b(a)(e);
              },
              [a],
            );
          if (null == N) return null;
          let I = null == C ? void 0 : C.IconComponent,
            x = (0, s.jsxs)(s.Fragment, {
              children: [
                null != I &&
                  (0, s.jsx)(I, {
                    size: "xs",
                    color: "currentColor",
                    className: k.channelIcon,
                  }),
                (0, s.jsx)(r.Text, {
                  className: k.channelDescription,
                  variant: "text-xs/normal",
                  children: (0, g.m)(
                    null !== (n = null == C ? void 0 : C.locationName) &&
                      void 0 !== n
                      ? n
                      : "",
                    !0,
                  ),
                }),
              ],
            });
          return (0, s.jsxs)("div", {
            className: k.inviteDetailsContainer,
            children: [
              (0, s.jsx)(m.Z.Icon, { guild: N, onClick: h }),
              (0, s.jsxs)("div", {
                className: k.verticalContainer,
                children: [
                  (0, s.jsxs)("div", {
                    className: k.guildChannelInfoContainer,
                    children: [
                      (0, s.jsx)(d.Z, {
                        guild: N,
                        tooltipPosition: "top",
                        tooltipColor: r.Tooltip.Colors.PRIMARY,
                        size: 16,
                        className: k.guildBadge,
                      }),
                      (0, s.jsx)(r.Clickable, {
                        className: k.guildNameClickable,
                        onClick: h,
                        children: (0, s.jsx)(r.Heading, {
                          className: c ? k.guildNameLinkable : k.guildName,
                          variant: "text-sm/medium",
                          children: N.name,
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: k.channelInfoContainer,
                    children: A(a, c)
                      ? (0, s.jsx)(r.Clickable, {
                          className: k.channelLocationLink,
                          onClick: E,
                          children: x,
                        })
                      : x,
                  }),
                ],
              }),
            ],
          });
        }),
        P = t.memo(function (e) {
          let {
              guildId: n,
              guildScheduledEventId: l,
              recurrenceId: t,
              isActive: a,
              isEnded: i,
              isMember: u,
              isExternal: c,
              onAcceptInstantInvite: d,
              onTransitionToInviteChannel: m,
            } = e,
            N = (0, o.e7)(
              [E.ZP],
              () => E.ZP.isInterestedInEventRecurrence(l, t),
              [l, t],
            ),
            v = (e) => {
              e.stopPropagation(), u ? a && m() : d();
            };
          return u
            ? a
              ? (0, s.jsx)(r.Button, {
                  className: k.button,
                  size: r.Button.Sizes.SMALL,
                  onClick: (e) => {
                    !c && v(e);
                  },
                  color: c
                    ? r.Button.Colors.TRANSPARENT
                    : r.Button.Colors.GREEN,
                  children: c
                    ? Z.Z.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL
                    : Z.Z.Messages.JOIN_GUILD,
                })
              : i
                ? (0, s.jsx)(r.Button, {
                    className: k.button,
                    size: r.Button.Sizes.SMALL,
                    disabled: !0,
                    color: r.Button.Colors.PRIMARY,
                    look: r.Button.Looks.OUTLINED,
                    children: Z.Z.Messages.GUILD_EVENT_INVITE_COMPLETED,
                  })
                : (0, s.jsxs)(r.Button, {
                    className: k.button,
                    innerClassName: k.innerButton,
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.PRIMARY,
                    look: N ? r.Button.Looks.OUTLINED : r.Button.Looks.FILLED,
                    onClick: (e) => {
                      e.stopPropagation(), (0, _.Z)(l, t, n);
                    },
                    children: [
                      N
                        ? (0, s.jsx)(r.CheckmarkLargeIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: k.buttonIcon,
                          })
                        : (0, s.jsx)(r.BellIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: k.buttonIcon,
                          }),
                      Z.Z.Messages.INDICATE_RSVP,
                    ],
                  })
            : (0, s.jsx)(r.Button, {
                className: k.button,
                size: r.Button.Sizes.SMALL,
                onClick: v,
                color: r.Button.Colors.GREEN,
                children: Z.Z.Messages.JOIN_GUILD,
              });
        }),
        y = t.memo(function (e) {
          var n;
          let {
              guildScheduledEvent: l,
              guild: a,
              channel: o,
              isMember: u,
              recurrenceId: c,
              onAcceptInstantInvite: d,
              onTransitionToInviteChannel: N,
            } = e,
            v = null != c ? c : null != l ? (0, j.DK)(l) : null,
            C =
              (null == l ? void 0 : l.recurrence_rule) == null ||
              null == v ||
              (0, j.Rp)((0, x.KV)(null == l ? void 0 : l.recurrence_rule), v),
            p = (0, I.Z)(l),
            g = t.useCallback(() => {
              u && null != l && (0, h.bO)({ eventId: l.id, recurrenceId: v });
            }, [u, l, v]);
          if (null == l || !C) return null;
          let T = (0, E.xt)(l),
            _ = (0, E.Z2)(l),
            Z = l.entity_type === B.WX.EXTERNAL;
          return (0, s.jsx)(m.Z, {
            className: i()({ [k.clickable]: u }),
            children: (0, s.jsxs)(r.Clickable, {
              onClick: g,
              children: [
                null != l.image &&
                  (0, s.jsx)(f.Z, { source: (0, L.Z)(l), className: k.banner }),
                (0, s.jsx)(S.ZP, {
                  name: l.name,
                  description:
                    null !== (n = l.description) && void 0 !== n ? n : void 0,
                  descriptionClassName: k.eventDescription,
                  guildId: l.guild_id,
                  creator: p,
                  guildEvent: l,
                  eventPreview: l,
                  recurrenceId: v,
                }),
                (0, s.jsxs)("div", {
                  className: k.footerContainer,
                  children: [
                    (0, s.jsx)(M, {
                      guild: a,
                      channel: o,
                      guildScheduledEvent: l,
                      isMember: u,
                    }),
                    (0, s.jsx)(P, {
                      isActive: T,
                      isEnded: _,
                      isMember: u,
                      guildId: l.guild_id,
                      guildScheduledEventId: l.id,
                      recurrenceId: v,
                      onAcceptInstantInvite: d,
                      onTransitionToInviteChannel: N,
                      isExternal: Z,
                    }),
                  ],
                }),
              ],
            }),
          });
        });
      n.ZP = y;
    },
    217804: function (e, n, l) {
      l.d(n, {
        u: function () {
          return i;
        },
      });
      var s = l(481060),
        t = l(471445),
        a = l(230900);
      function i(e, n) {
        let l, i;
        if (null == e) return null;
        let o = (0, a.cS)(e);
        if (null != o) (l = s.LocationIcon), (i = o);
        else {
          if (null == n) return null;
          (l = (0, t.Th)(n.type)), (i = n.name);
        }
        return { IconComponent: l, locationName: i };
      }
    },
    139712: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return m;
        },
      }),
        l(47120);
      var s = l(735250),
        t = l(470079),
        a = l(481060),
        i = l(482241),
        o = l(124165),
        r = l(765305),
        u = l(689938),
        c = l(196238);
      function d(e) {
        let { event: n, recurrenceId: l, guildId: d, onRsvp: m, ...N } = e,
          [v, C] = t.useState(o.KX.SERIES),
          p = (0, o.X2)(n.id, null),
          h =
            (null == p ? void 0 : p.response) === r.gv.INTERESTED
              ? r.gv.UNINTERESTED
              : r.gv.INTERESTED,
          E =
            h === r.gv.INTERESTED
              ? u.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED
              : u.Z.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
        return (0, s.jsx)(a.ConfirmModal, {
          ...N,
          header: E,
          confirmText: u.Z.Messages.OK,
          cancelText: u.Z.Messages.CANCEL,
          onConfirm: () => {
            v === o.KX.SERIES
              ? i.Z.updateRsvp(n.id, null, d, h)
              : i.Z.updateRsvp(n.id, l, d, h),
              null == m || m(),
              N.onClose();
          },
          confirmButtonColor: a.Button.Colors.BRAND,
          children: (0, s.jsx)(a.RadioGroup, {
            className: c.responseOptions,
            value: v,
            options: (0, o.pF)(),
            onChange: (e) => C(e.value),
          }),
        });
      }
      function m(e, n, l, t) {
        (0, o.cg)({
          eventId: e,
          recurrenceId: n,
          guildId: l,
          updateRsvp: (n, s, t, a) => i.Z.updateRsvp(e, s, l, a),
          openRsvpPicker: (e, n) => {
            (0, a.openModalLazy)(() =>
              Promise.resolve((a) =>
                (0, s.jsx)(d, {
                  ...a,
                  event: e,
                  recurrenceId: n,
                  guildId: l,
                  onRsvp: t,
                }),
              ),
            );
          },
          onRsvp: t,
        });
      }
    },
    955415: function (e, n, l) {
      l(653041), l(47120);
      var s = l(735250),
        t = l(470079),
        a = l(120356),
        i = l.n(a),
        o = l(481060),
        r = l(43267),
        u = l(933557),
        c = l(471445),
        d = l(600164),
        m = l(925329),
        N = l(565138),
        v = l(134432),
        C = l(695346),
        p = l(768581),
        h = l(153066),
        E = l(689938),
        g = l(850393);
      let I = (e) => {
          let { text: n, extra: l } = e;
          return (0, s.jsxs)(o.FormTitle, {
            className: g.header,
            children: [n, l],
          });
        },
        x = (e) => {
          let { resolving: n, children: l } = e;
          return (0, s.jsx)("div", {
            className: g.content,
            children: n
              ? (0, s.jsxs)("div", {
                  className: g.resolvingWrapper,
                  children: [
                    (0, s.jsx)("div", {
                      className: g.resolving,
                      children: (0, s.jsx)("div", {
                        className: g.resolvingBackground,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: g.resolvingFakeButton,
                      children: (0, s.jsx)("div", {
                        className: g.resolvingBackground,
                      }),
                    }),
                  ],
                })
              : l,
          });
        },
        j = (e) => {
          var n;
          let {
              application: l,
              guild: t,
              channel: a,
              onClick: c,
              expired: d = !1,
              user: v,
              className: p,
            } = e,
            E = null !== (n = (0, u.ZP)(a)) && void 0 !== n ? n : "",
            I = C.QK.useSetting();
          if (d) return (0, s.jsx)("div", { className: g.guildIconExpired });
          let x = null == t || null != t.icon,
            j = i()(
              (0, h.l)(
                g,
                "guildIcon",
                x ? "Image" : "",
                null != c ? "Joined" : "",
              ),
              p,
            );
          if (null != l)
            return (0, s.jsx)(m.Z, {
              game: l,
              onClick: c,
              size: g.applicationIcon,
              className: j,
            });
          if (null != t)
            return (0, s.jsx)(N.Z, {
              onClick: c,
              active: !0,
              guild: t,
              className: j,
              animate: I,
            });
          if (null != a)
            return (0, s.jsx)(o.Avatar, {
              onClick: c,
              src: (0, r.x)(a),
              size: o.AvatarSizes.SIZE_56,
              className: j,
              "aria-label": E,
            });
          else if (null != v)
            return (0, s.jsx)(o.Avatar, {
              onClick: c,
              src: v.getAvatarURL(null, 56),
              size: o.AvatarSizes.SIZE_56,
              className: j,
              "aria-label": E,
            });
          return null;
        },
        L = (e) => {
          let { title: n, onClick: l, expired: t, children: a } = e,
            i = (0, s.jsx)(o.Heading, {
              variant: "heading-md/semibold",
              className: (0, h.l)(
                g,
                "inviteDestination",
                t ? "Expired" : null != l ? "Joined" : "",
              ),
              children: n,
            });
          return (0, s.jsxs)(d.Z, {
            className: g.guildInfo,
            direction: d.Z.Direction.VERTICAL,
            justify: d.Z.Justify.CENTER,
            children: [
              null == l
                ? i
                : (0, s.jsx)(o.Clickable, { onClick: l, children: i }),
              (0, s.jsx)(o.Text, {
                tag: "strong",
                className: g.guildDetail,
                variant: "text-sm/normal",
                children: a,
              }),
            ],
          });
        },
        f = (e) => {
          let { membersOnline: n, members: l } = e,
            t = [];
          return (
            null != n &&
              n > 0 &&
              t.push(
                (0, s.jsxs)(
                  "div",
                  {
                    className: g.statusWrapper,
                    children: [
                      (0, s.jsx)("i", { className: g.statusOnline }),
                      (0, s.jsx)("span", {
                        className: g.count,
                        children:
                          E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                            { membersOnline: n },
                          ),
                      }),
                    ],
                  },
                  "onlineCount",
                ),
              ),
            null != l &&
              t.push(
                (0, s.jsxs)(
                  "div",
                  {
                    className: g.statusWrapper,
                    children: [
                      (0, s.jsx)("i", { className: g.statusOffline }),
                      (0, s.jsx)("span", {
                        className: g.count,
                        children:
                          E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: l },
                          ),
                      }),
                    ],
                  },
                  "memberCount",
                ),
              ),
            (0, s.jsx)("div", { className: g.statusCounts, children: t })
          );
        },
        S = (e) => {
          let { channel: n, guild: l } = e,
            t = (0, c.KS)(n, l);
          return null == n || null == t
            ? null
            : (0, s.jsxs)("div", {
                className: g.channel,
                children: [
                  (0, s.jsx)(t, {
                    className: g.channelIcon,
                    color: "currentColor",
                    size: "custom",
                    width: 20,
                    height: 20,
                  }),
                  (0, s.jsx)("span", {
                    className: g.channelName,
                    children: n.name,
                  }),
                ],
              });
        },
        T = (e) => {
          let {
            children: n,
            onClick: l,
            className: t,
            isDisabled: a,
            ...r
          } = e;
          return (0, s.jsx)(o.Button, {
            ...r,
            disabled: a,
            onClick: l,
            size: g.buttonSize,
            className: i()(g.button, t),
            children: n,
          });
        };
      (T.Colors = o.Button.Colors),
        (T.Looks = o.Button.Looks),
        (T.defaultProps = { className: null, isDisabled: !1 });
      let _ = (e) => {
          let { children: n, className: l, containerRef: t } = e;
          return (0, s.jsx)("div", {
            ref: t,
            className: i()(g.wrapper, l),
            children: n,
          });
        },
        B = (e) => {
          let { guild: n } = e,
            [l, a] = t.useState(!1),
            o = p.ZP.getGuildSplashURL({
              id: n.id,
              splash: n.splash,
              size: 400 * (0, v.x_)(),
            });
          return null == o
            ? null
            : (0, s.jsx)("div", {
                className: g.inviteSplash,
                children: (0, s.jsx)("img", {
                  src: o,
                  alt: "",
                  className: i()(g.inviteSplashImage, {
                    [g.inviteSplashImageLoaded]: l,
                  }),
                  onLoad: () => a(!0),
                }),
              });
        },
        Z = (e) => {
          let { guild: n } = e;
          return (0, s.jsx)("div", {
            className: g.guildNameWrapper,
            children: (0, s.jsx)("span", {
              className: g.guildName,
              children: n.name,
            }),
          });
        },
        k = (e) => {
          let { guildTemplate: n } = e;
          return (0, s.jsx)("div", {
            className: g.guildNameWrapper,
            children: (0, s.jsx)("span", {
              className: g.guildName,
              children: n.serializedSourceGuild.name,
            }),
          });
        };
      (_.Header = I),
        (_.Body = x),
        (_.Icon = j),
        (_.Info = L),
        (_.Data = f),
        (_.Channel = S),
        (_.Button = T),
        (_.GuildSplash = B),
        (_.GuildName = Z),
        (_.GuildTemplateName = k),
        (I.displayName = "InviteButton.Header"),
        (x.displayName = "InviteButton.Body"),
        (j.displayName = "InviteButton.Icon"),
        (L.displayName = "InviteButton.Info"),
        (f.displayName = "InviteButton.Data"),
        (S.displayName = "InviteButton.Channel"),
        (T.displayName = "InviteButton.Button"),
        (B.displayName = "InviteButton.GuildSplash"),
        (Z.displayName = "InviteButton.GuildName"),
        (k.displayName = "InviteButton.GuildTemplateName"),
        (n.Z = _);
    },
  },
]);
//# sourceMappingURL=38199996f9534fa4f6cc.js.map
