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
          return r;
        },
      });
      var t = l(192379),
        i = l(442837),
        s = l(749210),
        a = l(594174);
      function r(e) {
        let n = (0, i.e7)(
          [a.default],
          () => a.default.getUser(null == e ? void 0 : e.creator_id),
          [e],
        );
        return (
          t.useEffect(() => {
            null == n &&
              (null == e ? void 0 : e.creator_id) != null &&
              s.Z.requestMembersById(e.guild_id, e.creator_id);
          }, [e, n]),
          n
        );
      }
    },
    997321: function (e, n, l) {
      l.d(n, {
        Qt: function () {
          return z;
        },
      });
      var t = l(200651),
        i = l(192379),
        s = l(120356),
        a = l.n(s),
        r = l(442837),
        o = l(481060),
        u = l(447543),
        c = l(287734),
        d = l(372769),
        m = l(955415),
        v = l(922482),
        p = l(601964),
        C = l(592125),
        N = l(430824),
        h = l(15274),
        g = l(924301),
        x = l(725436),
        I = l(978227),
        j = l(236373),
        E = l(854698),
        f = l(405613),
        B = l(95291),
        k = l(742593),
        L = l(217804),
        S = l(139712),
        Z = l(765305),
        b = l(388032),
        R = l(101241);
      let T = (e, n) => (l) => {
          l.stopPropagation(),
            c.default.selectVoiceChannel(e.channel_id, !1),
            null == n || n(l);
        },
        y = (e, n) => (l) => {
          let t = C.Z.getChannel(e.channel_id);
          null != t && (l.stopPropagation(), (0, v.Cq)(t), null == n || n(l));
        },
        z = (e, n) => {
          switch (null == e ? void 0 : e.entity_type) {
            case Z.WX.STAGE_INSTANCE:
              return y(e, n);
            case Z.WX.VOICE:
              return T(e, n);
          }
          return () => {};
        },
        A = (e, n) =>
          n &&
          [Z.WX.STAGE_INSTANCE, Z.WX.VOICE].includes(
            null == e ? void 0 : e.entity_type,
          ),
        P = i.memo(function (e) {
          var n;
          let { guild: l, guildScheduledEvent: s, channel: a, isMember: c } = e,
            v = (0, r.e7)(
              [N.Z],
              () => {
                var e;
                return null == l
                  ? null
                  : null !== (e = N.Z.getGuild(l.id)) && void 0 !== e
                    ? e
                    : new p.ZP(l);
              },
              [l],
            ),
            C = (0, L.u)(s, a),
            h = i.useCallback(
              (e) => {
                c && null != s && (e.stopPropagation(), (0, u.B)(s));
              },
              [c, s],
            ),
            g = i.useCallback(
              (e) => {
                z(s)(e);
              },
              [s],
            );
          if (null == v) return null;
          let I = null == C ? void 0 : C.IconComponent,
            j = (0, t.jsxs)(t.Fragment, {
              children: [
                null != I &&
                  (0, t.jsx)(I, {
                    size: "xs",
                    color: "currentColor",
                    className: R.channelIcon,
                  }),
                (0, t.jsx)(o.Text, {
                  className: R.channelDescription,
                  variant: "text-xs/normal",
                  children: (0, x.m)(
                    null !== (n = null == C ? void 0 : C.locationName) &&
                      void 0 !== n
                      ? n
                      : "",
                    !0,
                  ),
                }),
              ],
            });
          return (0, t.jsxs)("div", {
            className: R.inviteDetailsContainer,
            children: [
              (0, t.jsx)(m.Z.Icon, { guild: v, onClick: h }),
              (0, t.jsxs)("div", {
                className: R.verticalContainer,
                children: [
                  (0, t.jsxs)("div", {
                    className: R.guildChannelInfoContainer,
                    children: [
                      (0, t.jsx)(d.Z, {
                        guild: v,
                        tooltipPosition: "top",
                        tooltipColor: o.Tooltip.Colors.PRIMARY,
                        size: 16,
                        className: R.guildBadge,
                      }),
                      (0, t.jsx)(o.Clickable, {
                        className: R.guildNameClickable,
                        onClick: h,
                        children: (0, t.jsx)(o.Heading, {
                          className: c ? R.guildNameLinkable : R.guildName,
                          variant: "text-sm/medium",
                          children: v.name,
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: R.channelInfoContainer,
                    children: A(s, c)
                      ? (0, t.jsx)(o.Clickable, {
                          className: R.channelLocationLink,
                          onClick: g,
                          children: j,
                        })
                      : j,
                  }),
                ],
              }),
            ],
          });
        }),
        w = i.memo(function (e) {
          let {
              guildId: n,
              guildScheduledEventId: l,
              recurrenceId: i,
              isActive: s,
              isEnded: a,
              isMember: u,
              isExternal: c,
              onAcceptInstantInvite: d,
              onTransitionToInviteChannel: m,
            } = e,
            v = (0, r.e7)(
              [g.ZP],
              () => g.ZP.isInterestedInEventRecurrence(l, i),
              [l, i],
            ),
            p = (e) => {
              e.stopPropagation(), u ? s && m() : d();
            };
          return u
            ? s
              ? (0, t.jsx)(o.Button, {
                  className: R.button,
                  size: o.Button.Sizes.SMALL,
                  onClick: (e) => {
                    !c && p(e);
                  },
                  color: c
                    ? o.Button.Colors.TRANSPARENT
                    : o.Button.Colors.GREEN,
                  children: c
                    ? b.intl.string(b.t.GoCQxc)
                    : b.intl.string(b.t.XpeFYm),
                })
              : a
                ? (0, t.jsx)(o.Button, {
                    className: R.button,
                    size: o.Button.Sizes.SMALL,
                    disabled: !0,
                    color: o.Button.Colors.PRIMARY,
                    look: o.Button.Looks.OUTLINED,
                    children: b.intl.string(b.t.Pj7Xrq),
                  })
                : (0, t.jsxs)(o.Button, {
                    className: R.button,
                    innerClassName: R.innerButton,
                    size: o.Button.Sizes.SMALL,
                    color: o.Button.Colors.PRIMARY,
                    look: v ? o.Button.Looks.OUTLINED : o.Button.Looks.FILLED,
                    onClick: (e) => {
                      e.stopPropagation(), (0, S.Z)(l, i, n);
                    },
                    children: [
                      v
                        ? (0, t.jsx)(o.CheckmarkLargeIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: R.buttonIcon,
                          })
                        : (0, t.jsx)(o.BellIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: R.buttonIcon,
                          }),
                      b.intl.string(b.t.DlcqlZ),
                    ],
                  })
            : (0, t.jsx)(o.Button, {
                className: R.button,
                size: o.Button.Sizes.SMALL,
                onClick: p,
                color: o.Button.Colors.GREEN,
                children: b.intl.string(b.t.XpeFYm),
              });
        }),
        _ = i.memo(function (e) {
          var n;
          let {
              guildScheduledEvent: l,
              guild: s,
              channel: r,
              isMember: u,
              recurrenceId: c,
              onAcceptInstantInvite: d,
              onTransitionToInviteChannel: v,
            } = e,
            p = null != c ? c : null != l ? (0, E.DK)(l) : null,
            C =
              (null == l ? void 0 : l.recurrence_rule) == null ||
              null == p ||
              (0, E.Rp)((0, j.KV)(null == l ? void 0 : l.recurrence_rule), p),
            N = (0, I.Z)(l),
            x = i.useCallback(() => {
              u && null != l && (0, h.bO)({ eventId: l.id, recurrenceId: p });
            }, [u, l, p]);
          if (null == l || !C) return null;
          let L = (0, g.xt)(l),
            S = (0, g.Z2)(l),
            b = l.entity_type === Z.WX.EXTERNAL;
          return (0, t.jsx)(m.Z, {
            className: a()({ [R.clickable]: u }),
            children: (0, t.jsxs)(o.Clickable, {
              onClick: x,
              children: [
                null != l.image &&
                  (0, t.jsx)(B.Z, { source: (0, f.Z)(l), className: R.banner }),
                (0, t.jsx)(k.ZP, {
                  name: l.name,
                  description:
                    null !== (n = l.description) && void 0 !== n ? n : void 0,
                  descriptionClassName: R.eventDescription,
                  guildId: l.guild_id,
                  creator: N,
                  guildEvent: l,
                  eventPreview: l,
                  recurrenceId: p,
                }),
                (0, t.jsxs)("div", {
                  className: R.footerContainer,
                  children: [
                    (0, t.jsx)(P, {
                      guild: s,
                      channel: r,
                      guildScheduledEvent: l,
                      isMember: u,
                    }),
                    (0, t.jsx)(w, {
                      isActive: L,
                      isEnded: S,
                      isMember: u,
                      guildId: l.guild_id,
                      guildScheduledEventId: l.id,
                      recurrenceId: p,
                      onAcceptInstantInvite: d,
                      onTransitionToInviteChannel: v,
                      isExternal: b,
                    }),
                  ],
                }),
              ],
            }),
          });
        });
      n.ZP = _;
    },
    217804: function (e, n, l) {
      l.d(n, {
        u: function () {
          return a;
        },
      });
      var t = l(481060),
        i = l(471445),
        s = l(230900);
      function a(e, n) {
        let l, a;
        if (null == e) return null;
        let r = (0, s.cS)(e);
        if (null != r) (l = t.LocationIcon), (a = r);
        else {
          if (null == n) return null;
          (l = (0, i.Th)(n.type)), (a = n.name);
        }
        return { IconComponent: l, locationName: a };
      }
    },
    139712: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return m;
        },
      }),
        l(47120);
      var t = l(200651),
        i = l(192379),
        s = l(481060),
        a = l(482241),
        r = l(124165),
        o = l(765305),
        u = l(388032),
        c = l(917493);
      function d(e) {
        let { event: n, recurrenceId: l, guildId: d, onRsvp: m, ...v } = e,
          [p, C] = i.useState(r.KX.SERIES),
          N = (0, r.X2)(n.id, null),
          h =
            (null == N ? void 0 : N.response) === o.gv.INTERESTED
              ? o.gv.UNINTERESTED
              : o.gv.INTERESTED,
          g =
            h === o.gv.INTERESTED
              ? u.intl.string(u.t.WtOReX)
              : u.intl.string(u.t["8MPCVl"]);
        return (0, t.jsx)(s.ConfirmModal, {
          ...v,
          header: g,
          confirmText: u.intl.string(u.t.TyCVIi),
          cancelText: u.intl.string(u.t["ETE/oK"]),
          onConfirm: () => {
            p === r.KX.SERIES
              ? a.Z.updateRsvp(n.id, null, d, h)
              : a.Z.updateRsvp(n.id, l, d, h),
              null == m || m(),
              v.onClose();
          },
          confirmButtonColor: s.Button.Colors.BRAND,
          children: (0, t.jsx)(s.RadioGroup, {
            className: c.responseOptions,
            value: p,
            options: (0, r.pF)(),
            onChange: (e) => C(e.value),
          }),
        });
      }
      function m(e, n, l, i) {
        (0, r.cg)({
          eventId: e,
          recurrenceId: n,
          guildId: l,
          updateRsvp: (n, t, i, s) => a.Z.updateRsvp(e, t, l, s),
          openRsvpPicker: (e, n) => {
            (0, s.openModalLazy)(() =>
              Promise.resolve((s) =>
                (0, t.jsx)(d, {
                  ...s,
                  event: e,
                  recurrenceId: n,
                  guildId: l,
                  onRsvp: i,
                }),
              ),
            );
          },
          onRsvp: i,
        });
      }
    },
    955415: function (e, n, l) {
      l(653041), l(47120);
      var t = l(200651),
        i = l(192379),
        s = l(120356),
        a = l.n(s),
        r = l(481060),
        o = l(43267),
        u = l(933557),
        c = l(471445),
        d = l(600164),
        m = l(925329),
        v = l(565138),
        p = l(134432),
        C = l(695346),
        N = l(768581),
        h = l(153066),
        g = l(388032),
        x = l(88584);
      let I = (e) => {
          let { text: n, extra: l } = e;
          return (0, t.jsxs)(r.FormTitle, {
            className: x.header,
            children: [n, l],
          });
        },
        j = (e) => {
          let { resolving: n, children: l } = e;
          return (0, t.jsx)("div", {
            className: x.content,
            children: n
              ? (0, t.jsxs)("div", {
                  className: x.resolvingWrapper,
                  children: [
                    (0, t.jsx)("div", {
                      className: x.resolving,
                      children: (0, t.jsx)("div", {
                        className: x.resolvingBackground,
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: x.resolvingFakeButton,
                      children: (0, t.jsx)("div", {
                        className: x.resolvingBackground,
                      }),
                    }),
                  ],
                })
              : l,
          });
        },
        E = (e) => {
          var n;
          let {
              application: l,
              guild: i,
              channel: s,
              onClick: c,
              expired: d = !1,
              user: p,
              className: N,
            } = e,
            g = null !== (n = (0, u.ZP)(s)) && void 0 !== n ? n : "",
            I = C.QK.useSetting();
          if (d) return (0, t.jsx)("div", { className: x.guildIconExpired });
          let j = null == i || null != i.icon,
            E = a()(
              (0, h.l)(
                x,
                "guildIcon",
                j ? "Image" : "",
                null != c ? "Joined" : "",
              ),
              N,
            );
          if (null != l)
            return (0, t.jsx)(m.Z, {
              game: l,
              onClick: c,
              size: x.applicationIcon,
              className: E,
            });
          if (null != i)
            return (0, t.jsx)(v.Z, {
              onClick: c,
              active: !0,
              guild: i,
              className: E,
              animate: I,
            });
          if (null != s)
            return (0, t.jsx)(r.Avatar, {
              onClick: c,
              src: (0, o.x)(s),
              size: r.AvatarSizes.SIZE_56,
              className: E,
              "aria-label": g,
            });
          else if (null != p)
            return (0, t.jsx)(r.Avatar, {
              onClick: c,
              src: p.getAvatarURL(null, 56),
              size: r.AvatarSizes.SIZE_56,
              className: E,
              "aria-label": g,
            });
          return null;
        },
        f = (e) => {
          let { title: n, onClick: l, expired: i, children: s } = e,
            a = (0, t.jsx)(r.Heading, {
              variant: "heading-md/semibold",
              className: (0, h.l)(
                x,
                "inviteDestination",
                i ? "Expired" : null != l ? "Joined" : "",
              ),
              children: n,
            });
          return (0, t.jsxs)(d.Z, {
            className: x.guildInfo,
            direction: d.Z.Direction.VERTICAL,
            justify: d.Z.Justify.CENTER,
            children: [
              null == l
                ? a
                : (0, t.jsx)(r.Clickable, { onClick: l, children: a }),
              (0, t.jsx)(r.Text, {
                tag: "strong",
                className: x.guildDetail,
                variant: "text-sm/normal",
                children: s,
              }),
            ],
          });
        },
        B = (e) => {
          let { membersOnline: n, members: l } = e,
            i = [];
          return (
            null != n &&
              n > 0 &&
              i.push(
                (0, t.jsxs)(
                  "div",
                  {
                    className: x.statusWrapper,
                    children: [
                      (0, t.jsx)("i", { className: x.statusOnline }),
                      (0, t.jsx)("span", {
                        className: x.count,
                        children: g.intl.format(g.t["LC+S+v"], {
                          membersOnline: n,
                        }),
                      }),
                    ],
                  },
                  "onlineCount",
                ),
              ),
            null != l &&
              i.push(
                (0, t.jsxs)(
                  "div",
                  {
                    className: x.statusWrapper,
                    children: [
                      (0, t.jsx)("i", { className: x.statusOffline }),
                      (0, t.jsx)("span", {
                        className: x.count,
                        children: g.intl.format(g.t.zRl6XV, { count: l }),
                      }),
                    ],
                  },
                  "memberCount",
                ),
              ),
            (0, t.jsx)("div", { className: x.statusCounts, children: i })
          );
        },
        k = (e) => {
          let { channel: n, guild: l } = e,
            i = (0, c.KS)(n, l);
          return null == n || null == i
            ? null
            : (0, t.jsxs)("div", {
                className: x.channel,
                children: [
                  (0, t.jsx)(i, {
                    className: x.channelIcon,
                    color: "currentColor",
                    size: "custom",
                    width: 20,
                    height: 20,
                  }),
                  (0, t.jsx)("span", {
                    className: x.channelName,
                    children: n.name,
                  }),
                ],
              });
        },
        L = (e) => {
          let {
            children: n,
            onClick: l,
            className: i,
            isDisabled: s,
            ...o
          } = e;
          return (0, t.jsx)(r.Button, {
            ...o,
            disabled: s,
            onClick: l,
            size: x.buttonSize,
            className: a()(x.button, i),
            children: n,
          });
        };
      (L.Colors = r.Button.Colors),
        (L.Looks = r.Button.Looks),
        (L.defaultProps = { className: null, isDisabled: !1 });
      let S = (e) => {
          let { children: n, className: l, containerRef: i } = e;
          return (0, t.jsx)("div", {
            ref: i,
            className: a()(x.wrapper, l),
            children: n,
          });
        },
        Z = (e) => {
          let { guild: n } = e,
            [l, s] = i.useState(!1),
            r = N.ZP.getGuildSplashURL({
              id: n.id,
              splash: n.splash,
              size: 400 * (0, p.x_)(),
            });
          return null == r
            ? null
            : (0, t.jsx)("div", {
                className: x.inviteSplash,
                children: (0, t.jsx)("img", {
                  src: r,
                  alt: "",
                  className: a()(x.inviteSplashImage, {
                    [x.inviteSplashImageLoaded]: l,
                  }),
                  onLoad: () => s(!0),
                }),
              });
        },
        b = (e) => {
          let { guild: n } = e;
          return (0, t.jsx)("div", {
            className: x.guildNameWrapper,
            children: (0, t.jsx)("span", {
              className: x.guildName,
              children: n.name,
            }),
          });
        },
        R = (e) => {
          let { guildTemplate: n } = e;
          return (0, t.jsx)("div", {
            className: x.guildNameWrapper,
            children: (0, t.jsx)("span", {
              className: x.guildName,
              children: n.serializedSourceGuild.name,
            }),
          });
        };
      (S.Header = I),
        (S.Body = j),
        (S.Icon = E),
        (S.Info = f),
        (S.Data = B),
        (S.Channel = k),
        (S.Button = L),
        (S.GuildSplash = Z),
        (S.GuildName = b),
        (S.GuildTemplateName = R),
        (I.displayName = "InviteButton.Header"),
        (j.displayName = "InviteButton.Body"),
        (E.displayName = "InviteButton.Icon"),
        (f.displayName = "InviteButton.Info"),
        (B.displayName = "InviteButton.Data"),
        (k.displayName = "InviteButton.Channel"),
        (L.displayName = "InviteButton.Button"),
        (Z.displayName = "InviteButton.GuildSplash"),
        (b.displayName = "InviteButton.GuildName"),
        (R.displayName = "InviteButton.GuildTemplateName"),
        (n.Z = S);
    },
  },
]);
//# sourceMappingURL=8d122303fa076a2d24e4.js.map
