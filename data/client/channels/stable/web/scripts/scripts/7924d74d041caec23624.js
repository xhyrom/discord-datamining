"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68241"],
  {
    892561: function (e) {
      e.exports = "/assets/3fb87720e4488048b4f0.svg";
    },
    494536: function (e) {
      e.exports = "/assets/614f2929b3d801833680.svg";
    },
    249842: function (e, l, s) {
      s.d(l, {
        P: function () {
          return n;
        },
      });
      var a = s(544891),
        i = s(570140),
        t = s(981631);
      async function n(e) {
        i.Z.dispatch({ type: "GUILD_POPOUT_FETCH_START", guildId: e });
        try {
          let l = await a.tn.get({
            url: t.ANM.GUILD_PREVIEW(e),
            oldFormErrors: !0,
          });
          i.Z.dispatch({
            type: "GUILD_POPOUT_FETCH_SUCCESS",
            guildId: e,
            guild: l.body,
          });
        } catch (l) {
          i.Z.dispatch({ type: "GUILD_POPOUT_FETCH_FAILURE", guildId: e });
        }
      }
    },
    838367: function (e, l, s) {
      var a,
        i,
        t,
        n,
        c,
        d,
        r = s(442837),
        o = s(570140),
        u = s(314897),
        h = s(900849);
      ((a = c || (c = {})).UNSET = "unset"),
        (a.FETCHING = "fetching"),
        (a.FAILED = "failed"),
        (a.SUCCEEDED = "succeeded");
      let m = {};
      class x extends (d = r.ZP.Store) {
        initialize() {
          this.waitFor(u.default);
        }
        isFetchingGuild(e) {
          let l = m[e];
          return null != l && "fetching" === l.fetchState;
        }
        getGuild(e) {
          let l = m[e];
          return null != l ? l.guild : null;
        }
        hasFetchFailed(e) {
          let l = m[e];
          return null != l && "failed" === l.fetchState;
        }
      }
      (n = "GuildPopoutStore"),
        (t = "displayName") in (i = x)
          ? Object.defineProperty(i, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[t] = n),
        (l.Z = new x(o.Z, {
          GUILD_POPOUT_FETCH_START: function (e) {
            let { guildId: l } = e;
            m[l] = { ...m[l], fetchState: "fetching" };
          },
          GUILD_POPOUT_FETCH_SUCCESS: function (e) {
            let { guildId: l, guild: s } = e,
              a = (0, h.PP)(s);
            m[l] = { ...m[l], guild: a, fetchState: "succeeded" };
          },
          GUILD_POPOUT_FETCH_FAILURE: function (e) {
            let { guildId: l } = e;
            m[l] = { ...m[l], fetchState: "failed" };
          },
        }));
    },
    83474: function (e, l, s) {
      s.d(l, {
        SK: function () {
          return L;
        },
        ZP: function () {
          return C;
        },
        sK: function () {
          return Z;
        },
      }),
        s(47120);
      var a = s(735250),
        i = s(470079),
        t = s(120356),
        n = s.n(t),
        c = s(442837),
        d = s(692547),
        r = s(780384),
        o = s(481060),
        u = s(410030),
        h = s(686546),
        m = s(372769),
        x = s(134432),
        g = s(703656),
        j = s(314897),
        N = s(271383),
        P = s(768581),
        f = s(900849),
        v = s(249842),
        I = s(838367),
        _ = s(981631),
        p = s(689938),
        E = s(208052),
        b = s(892561),
        T = s(494536);
      function U() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", { className: E.splashPlaceholder }),
            (0, a.jsxs)("div", {
              className: n()(E.body, E.hasSplash),
              children: [
                (0, a.jsx)("div", { className: E.iconPlaceholder }),
                (0, a.jsx)("div", {
                  className: E.__invalid_headerText,
                  children: (0, a.jsx)("div", { className: E.namePlaceholder }),
                }),
                (0, a.jsxs)("div", {
                  className: E.memberInfo,
                  children: [
                    (0, a.jsx)("div", {
                      className: E.memberCount,
                      children: (0, a.jsx)("div", {
                        className: E.memberInfoPlaceholder,
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: E.memberCount,
                      children: (0, a.jsx)("div", {
                        className: E.memberInfoPlaceholder,
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: E.viewButtonPlaceholder }),
              ],
            }),
          ],
        });
      }
      function L() {
        let e = (0, u.ZP)();
        return (0, a.jsx)(o.Dialog, {
          "aria-label": p.Z.Messages.GUILD_UNAVAILABLE_HEADER,
          className: E.guildPopout,
          children: (0, a.jsxs)("div", {
            className: E.body,
            children: [
              (0, a.jsx)("img", {
                src: (0, r.wj)(e) ? b : T,
                className: E.unavailableIcon,
                width: 80,
                height: 80,
                alt: "",
              }),
              (0, a.jsx)(o.Heading, {
                className: E.unavailableHeader,
                variant: "heading-md/semibold",
                children: p.Z.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER,
              }),
              (0, a.jsx)(o.Text, {
                variant: "text-sm/normal",
                children: p.Z.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR,
              }),
            ],
          }),
        });
      }
      function Z(e) {
        var l, s;
        let { guild: t, channelId: r, messageId: u } = e,
          {
            name: v,
            id: I,
            discoverySplash: b,
            icon: T,
            description: U,
            presenceCount: L,
            memberCount: Z,
            emojis: C,
          } = t,
          S = (0, c.e7)([j.default], () => j.default.getId()),
          O = (0, c.e7)([N.ZP], () => N.ZP.isMember(I, S), [I, S]),
          [A, D] = i.useState(!1),
          F = (e) => {
            if ((e.stopPropagation(), O)) (0, g.XU)(I, r, u);
            else {
              let e = {
                page: _.ZY5.GUILD_CHANNEL,
                section: _.jXE.GUILD_POPOUT,
                object: _.qAy.CARD,
              };
              (0, f.Ub)(I, e);
            }
            D(!0);
          },
          G = P.ZP.getGuildDiscoverySplashURL({
            id: I,
            splash: b,
            size: 250 * (0, x.x_)(),
          }),
          R =
            null !== (l = P.ZP.getGuildIconURL({ id: I, icon: T, size: 80 })) &&
            void 0 !== l
              ? l
              : void 0,
          M = C,
          y = null;
        return (
          null != M &&
            M.length > 6 &&
            null != C &&
            ((M =
              null !==
                (s =
                  null == C
                    ? void 0
                    : C.slice(
                        Math.max((null == C ? void 0 : C.length) - 6, 0),
                      )) && void 0 !== s
                ? s
                : []),
            (y = C.length - 6)),
          (0, a.jsxs)(o.Dialog, {
            "aria-label": v,
            className: E.guildPopout,
            children: [
              null != G
                ? (0, a.jsx)("img", {
                    src: G,
                    alt: "",
                    className: E.splashImage,
                  })
                : null,
              (0, a.jsxs)("div", {
                className: n()(E.body, { [E.hasSplash]: null != G }),
                children: [
                  (0, a.jsx)("div", {
                    className: n()({ [E.iconWithSplash]: null != G }),
                    children: (0, a.jsx)(o.Clickable, {
                      onClick: F,
                      children: (0, a.jsx)(h.ZP, {
                        mask: h.ZP.Masks.SQUIRCLE,
                        width: 88,
                        height: 88,
                        children: (0, a.jsx)("div", {
                          className: E.iconMask,
                          children: (0, a.jsx)(h.ZP, {
                            mask: h.ZP.Masks.SQUIRCLE,
                            width: 80,
                            height: 80,
                            children: (0, a.jsx)("img", {
                              src: R,
                              alt: "",
                              className: E.avatar,
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                  null != v
                    ? (0, a.jsxs)("div", {
                        className: E.guildNameWrapper,
                        children: [
                          (0, a.jsx)(m.Z, {
                            className: E.badge,
                            guild: t,
                            tooltipPosition: "top",
                            tooltipColor: o.Tooltip.Colors.PRIMARY,
                            badgeColor: d.Z.unsafe_rawColors.PRIMARY_500.css,
                          }),
                          (0, a.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            className: E.guildName,
                            children: v,
                          }),
                        ],
                      })
                    : null,
                  null != U
                    ? (0, a.jsx)(o.Text, {
                        color: "header-secondary",
                        className: E.description,
                        variant: "text-sm/normal",
                        children: U,
                      })
                    : null,
                  (0, a.jsxs)("div", {
                    className: E.memberInfo,
                    children: [
                      null != L
                        ? (0, a.jsxs)("div", {
                            className: E.memberCount,
                            children: [
                              (0, a.jsx)("div", { className: E.dotOnline }),
                              (0, a.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                className: E.memberText,
                                children:
                                  p.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                                    { membersOnline: L },
                                  ),
                              }),
                            ],
                          })
                        : null,
                      null != Z
                        ? (0, a.jsxs)("div", {
                            className: E.memberCount,
                            children: [
                              (0, a.jsx)("div", { className: E.dotOffline }),
                              (0, a.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                className: E.memberText,
                                children:
                                  p.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                                    { count: Z },
                                  ),
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: E.footer,
                children: [
                  null != M && M.length > 0
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(o.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: E.emojiHeader,
                            color: "header-secondary",
                            children: p.Z.Messages.SERVER_EMOJI,
                          }),
                          (0, a.jsxs)("div", {
                            className: n()(E.emojiContainer, {
                              [E.withCounter]: null != y,
                            }),
                            children: [
                              M.map((e) => {
                                let l = P.ZP.getEmojiURL({
                                  id: e.id,
                                  animated: !1,
                                  size: 24,
                                });
                                return (0, a.jsx)(
                                  o.Tooltip,
                                  {
                                    text: ":".concat(e.name, ":"),
                                    children: (e) =>
                                      (0, a.jsx)("img", {
                                        ...e,
                                        width: 24,
                                        height: 24,
                                        src: l,
                                        className: n()({
                                          [E.emoji]: null == y,
                                        }),
                                        alt: "",
                                      }),
                                  },
                                  e.id,
                                );
                              }),
                              null != y
                                ? (0, a.jsx)(o.Heading, {
                                    variant: "heading-deprecated-12/semibold",
                                    className: E.emojiCounter,
                                    color: "header-secondary",
                                    children: "+".concat(y),
                                  })
                                : null,
                            ],
                          }),
                        ],
                      })
                    : null,
                  (0, a.jsx)(o.Button, {
                    look: o.Button.Looks.FILLED,
                    color: o.Button.Colors.BRAND,
                    size: o.Button.Sizes.SMALL,
                    onClick: F,
                    submitting: A,
                    autoFocus: !0,
                    children: p.Z.Messages.GUILD_POPOUT_VIEW_SERVER_BUTTON,
                  }),
                ],
              }),
            ],
          })
        );
      }
      function C(e) {
        let { guildId: l, channelId: s, messageId: t } = e,
          {
            loading: n,
            unavailable: d,
            guild: r,
          } = (0, c.cj)(
            [I.Z],
            () => ({
              guild: I.Z.getGuild(l),
              loading: I.Z.isFetchingGuild(l),
              unavailable: I.Z.hasFetchFailed(l),
            }),
            [l],
          );
        return (i.useEffect(() => {
          null == r && !n && !d && (0, v.P)(l);
        }, [r, l, n, d]),
        n)
          ? (0, a.jsx)(o.Dialog, {
              "aria-label": p.Z.Messages.LOADING,
              className: E.guildPopout,
              children: (0, a.jsx)(U, {}),
            })
          : null == r || d
            ? (0, a.jsx)(L, {})
            : (0, a.jsx)(Z, { guild: r, channelId: s, messageId: t });
      }
    },
    857395: function (e, l, s) {
      s.d(l, {
        Z: function () {
          return o;
        },
      });
      var a = s(735250),
        i = s(470079),
        t = s(442837),
        n = s(481060),
        c = s(249842),
        d = s(838367),
        r = s(83474);
      function o(e) {
        let { guildId: l, channelId: s, messageId: o, ...u } = e,
          { unavailable: h, guild: m } = (0, t.cj)(
            [d.Z],
            () => ({
              guild: d.Z.getGuild(l),
              unavailable: d.Z.hasFetchFailed(l),
            }),
            [l],
          ),
          x = null != m,
          g = i.useCallback(async () => {
            try {
              !x && (await (0, c.P)(l));
            } catch {}
          }, [x, l]);
        return h
          ? (0, a.jsx)(n.Popout, {
              position: "right",
              renderPopout: (e) => (0, a.jsx)(r.SK, {}),
              ...u,
            })
          : (0, a.jsx)(n.Popout, {
              position: "right",
              preload: g,
              renderPopout: (e) =>
                null == m
                  ? (0, a.jsx)(a.Fragment, {})
                  : (0, a.jsx)(r.sK, {
                      ...e,
                      guild: m,
                      channelId: s,
                      messageId: o,
                    }),
              ...u,
            });
      }
    },
  },
]);
//# sourceMappingURL=7924d74d041caec23624.js.map
