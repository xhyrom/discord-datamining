"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19036"],
  {
    231443: function (e) {
      e.exports = "/assets/e04bcb7316f7205e85fb.svg";
    },
    206818: function (e) {
      e.exports = "/assets/17a91e9b4e7eb3921ed5.svg";
    },
    73117: function (e, n, t) {
      e.exports = t.p + "39b91170d9f2309e4c5e.mov";
    },
    988868: function (e, n, t) {
      e.exports = t.p + "15aad6b83736f221e23b.mp4";
    },
    554355: function (e) {
      e.exports = "/assets/fb70c6325a7d728cb6d0.png";
    },
    991989: function (e, n, t) {
      e.exports = t.p + "48ad19e80083bee682d2.webm";
    },
    787462: function (e, n, t) {
      e.exports = t.p + "a476863d4f441618840f.mov";
    },
    635507: function (e, n, t) {
      e.exports = t.p + "87c3abd90e246db4b38a.mp4";
    },
    470794: function (e) {
      e.exports = "/assets/7df11a68a272724be266.png";
    },
    886777: function (e, n, t) {
      e.exports = t.p + "b235c36699192662a3fe.webm";
    },
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    816782: function (e, n, t) {
      var l = t(570140);
      n.Z = {
        toggleMembersSection() {
          l.Z.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
        },
        toggleProfilePanelSection() {
          l.Z.dispatch({ type: "PROFILE_PANEL_TOGGLE_SECTION" });
        },
        toggleSummariesSection() {
          l.Z.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
        },
      };
    },
    475468: function (e, n, t) {
      t.d(n, {
        K: function () {
          return o;
        },
        z: function () {
          return u;
        },
      });
      var l = t(481060),
        a = t(475179),
        i = t(925549),
        r = t(905423),
        s = t(981631);
      function o(e, n) {
        let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!(0, l.hasAnyModalOpen)())
          t && i.Z.channelListScrollTo(e, n),
            o && null != n && a.Z.updateChatOpen(n, !0),
            r.Z.getState().updatePath(s.Z5c.CHANNEL(e, n));
      }
      function u(e) {
        if (!(0, l.hasAnyModalOpen)()) r.Z.getState().updatePath(e);
      }
    },
    388905: function (e, n, t) {
      t.d(n, {
        DK: function () {
          return E;
        },
        Dx: function () {
          return Z;
        },
        EJ: function () {
          return O;
        },
        Ee: function () {
          return v;
        },
        Hh: function () {
          return L;
        },
        II: function () {
          return T;
        },
        MC: function () {
          return C;
        },
        Vj: function () {
          return _;
        },
        gO: function () {
          return S;
        },
        i_: function () {
          return b;
        },
        jQ: function () {
          return M;
        },
        qE: function () {
          return I;
        },
        v6: function () {
          return A;
        },
        zx: function () {
          return j;
        },
      }),
        t(536091);
      var l = t(735250);
      t(470079);
      var a = t(120356),
        i = t.n(a),
        r = t(481060),
        s = t(43267),
        o = t(905656),
        u = t(600164),
        c = t(313201),
        d = t(565138),
        p = t(361207),
        m = t(63063),
        h = t(792125),
        x = t(981631),
        f = t(689938),
        g = t(986579);
      let N = r.Avatar;
      null == N && (N = () => null);
      let Z = (e) => {
          let { className: n, id: t, children: a } = e;
          return (0, l.jsx)(r.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: i()(g.title, n),
            id: t,
            children: a,
          });
        },
        E = (e) => {
          let { className: n, children: t } = e;
          return (0, l.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: n,
            children: t,
          });
        },
        v = (e) => {
          let { className: n, src: t } = e;
          return (0, l.jsx)("img", {
            alt: "",
            src: t,
            className: i()(g.image, n),
          });
        },
        j = (e) => {
          let { className: n, ...t } = e,
            a = t.look === r.Button.Looks.LINK;
          return (0, l.jsx)(r.Button, {
            size: a ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
            fullWidth: !a,
            className: i()(n, { [g.button]: !a, [g.linkButton]: a }),
            ...t,
          });
        };
      (j.Looks = r.Button.Looks),
        (j.Colors = r.Button.Colors),
        (j.Sizes = r.Button.Sizes);
      let I = (e) => {
          let { className: n, src: t, size: a } = e;
          return (0, l.jsx)(N, {
            src: t,
            size: a,
            className: i()(g.inviteLargeIcon, n),
            "aria-hidden": !0,
          });
        },
        _ = (e) => {
          let { guild: n, size: t, animate: a = !1, className: i } = e;
          return (0, l.jsx)(d.Z, {
            active: !0,
            guild: n,
            size: t,
            animate: a,
            className: i,
          });
        };
      _.Sizes = d.Z.Sizes;
      let C = (e) => {
        let { className: n, channel: t, size: a } = e;
        return (0, l.jsx)(N, {
          src: (0, s.x)(t),
          size: a,
          className: i()(g.inviteIcon, n),
          "aria-hidden": !0,
        });
      };
      C.Sizes = r.AvatarSizes;
      let T = (e) => {
          let {
              label: n,
              error: t,
              placeholder: a,
              value: s,
              className: o,
              inputClassName: u,
              setRef: d,
              type: p = "text",
              onChange: m,
              autoComplete: h,
              autoFocus: x,
              maxLength: f,
              spellCheck: N,
              name: Z,
              description: E,
              required: v,
              onFocus: j,
              onBlur: I,
            } = e,
            _ = (0, c.Dt)();
          return (0, l.jsxs)(r.FormItem, {
            title: n,
            error: t,
            className: o,
            required: v,
            tag: "label",
            htmlFor: _,
            children: [
              (0, l.jsx)(r.TextInput, {
                name: Z,
                type: p,
                value: s,
                inputRef: d,
                placeholder: a,
                inputClassName: i()(u, { [g.inputError]: null != t }),
                "aria-label": n,
                onChange: m,
                autoComplete: h,
                autoFocus: x,
                maxLength: f,
                spellCheck: N,
                id: _,
                onFocus: j,
                onBlur: I,
              }),
              null != E
                ? (0, l.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: g.description,
                    children: E,
                  })
                : null,
            ],
          });
        },
        S = (e) => {
          let { className: n, children: t } = e;
          return (0, l.jsx)("div", { className: i()(g.block, n), children: t });
        },
        b = (e) => {
          let { className: n, children: t, isProminent: a } = e;
          return (0, l.jsx)(r.Text, {
            variant: a ? "text-sm/normal" : "text-xs/normal",
            className: i()(g.subText, n),
            children: t,
          });
        },
        L = (e) => {
          let { className: n } = e;
          return (0, l.jsx)(u.Z, {
            direction: u.Z.Direction.VERTICAL,
            align: u.Z.Align.CENTER,
            className: n,
            children: (0, l.jsx)(o.Z, { className: g.spinnerVideo }),
          });
        },
        O = (e) => {
          let n,
            {
              online: t,
              total: a,
              className: s,
              flat: o,
              textClassName: c,
            } = e;
          return null == a
            ? null
            : (null != t &&
                t > 0 &&
                (n = (0, l.jsxs)("div", {
                  className: i()(g.pill, g.pillOnline, o && g.pillFlat),
                  children: [
                    (0, l.jsx)("i", { className: g.pillIconOnline }),
                    (0, l.jsx)(r.Text, {
                      tag: "span",
                      className: i()(g.pillMessage, c),
                      variant: "text-sm/normal",
                      children:
                        f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                          { membersOnline: t },
                        ),
                    }),
                  ],
                })),
              (0, l.jsxs)(u.Z, {
                justify: u.Z.Justify.CENTER,
                className: s,
                children: [
                  n,
                  (0, l.jsxs)("div", {
                    className: i()(g.pill, o && g.pillFlat),
                    children: [
                      (0, l.jsx)("i", { className: g.pillIconTotal }),
                      (0, l.jsx)(r.Text, {
                        tag: "span",
                        className: i()(g.pillMessage, c),
                        variant: "text-sm/normal",
                        children:
                          f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: a },
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        M = (e) => {
          let { user: n } = e;
          return null == n
            ? null
            : (0, l.jsxs)("div", {
                className: g.joiningAs,
                children: [
                  (0, l.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      f.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, l.jsx)(I, {
                    className: g.joiningAsAvatar,
                    src: n.getAvatarURL(void 0, 24),
                    size: r.AvatarSizes.SIZE_24,
                    "aria-label": n.username,
                  }),
                  (0, l.jsx)(r.Text, {
                    className: g.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: n.username,
                  }),
                ],
              });
        },
        A = (e) => {
          let { className: n } = e;
          return (0, l.jsxs)(S, {
            className: n,
            children: [
              (0, l.jsx)(j, {
                onClick: () => window.open((0, p.t3)()),
                children: f.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, p.DW)(),
                }),
              }),
              (0, l.jsx)(b, {
                className: g.downloadButtonSubtext,
                children: f.Z.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: m.Z.getArticleURL(
                    x.BhN.SUPPORTED_BROWSERS,
                  ),
                }),
              }),
            ],
          });
        };
      n.ZP = (e) => {
        let {
          className: n,
          contentClassName: t,
          tag: a = "section",
          onSubmit: r,
          children: s,
          expanded: o = !1,
          theme: u = x.BRd.DARK,
          style: c,
        } = e;
        return (0, l.jsxs)(a, {
          "data-theme": u,
          "data-disable-adaptive-theme": !0,
          onSubmit: r,
          style: c,
          className: i()(o ? g.authBoxExpanded : g.authBox, (0, h.Q)(u), n),
          children: [
            (0, l.jsx)("div", { className: g.discordLogo }),
            (0, l.jsx)("div", {
              className: i()(g.centeringWrapper, t),
              children: s,
            }),
          ],
        });
      };
    },
    207035: function (e, n, t) {
      t.d(n, {
        P: function () {
          return a;
        },
      });
      let l = (0, t(818083).B)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function a(e) {
        return l.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    373651: function (e, n, t) {
      t.r(n);
      var l = t(735250);
      t(470079);
      var a = t(481060),
        i = t(239091),
        r = t(883385),
        s = t(108843),
        o = t(947440),
        u = t(100527),
        c = t(299206),
        d = t(916069),
        p = t(895563),
        m = t(212205),
        h = t(478035),
        x = t(62420),
        f = t(423589),
        g = t(398048),
        N = t(109764),
        Z = t(3689),
        E = t(323597),
        v = t(852245),
        j = t(367722),
        I = t(461535),
        _ = t(776568),
        C = t(218035),
        T = t(775666),
        S = t(593589),
        b = t(442754),
        L = t(981631),
        O = t(689938);
      function M(e) {
        let { channel: n, onSelect: t } = e,
          r = (0, I.Z)(n),
          s = (0, N.Z)(n),
          u = (0, p.l)(n),
          d = (0, p.P)(n),
          g = (0, m.Z)(n),
          Z = (0, h.Z)(n),
          E = (0, x.Z)(n),
          j = (0, _.ZP)(n),
          S = (0, C.Z)(n),
          b = (0, v.Z)(n),
          L = (0, c.Z)({ id: n.id, label: O.Z.Messages.COPY_ID_CHANNEL }),
          M = (0, o.Z)(n),
          A = (0, T.ZP)(n),
          P = (0, f.Mn)("ChannelContextFavoritesMenu");
        return (0, l.jsxs)(a.Menu, {
          navId: "channel-context",
          onClose: i.Zy,
          "aria-label": O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: t,
          children: [
            (0, l.jsx)(a.MenuGroup, { children: r }),
            (0, l.jsxs)(a.MenuGroup, { children: [Z, E, g, u] }),
            (0, l.jsxs)(a.MenuGroup, { children: [j, P ? A : S] }),
            (0, l.jsx)(a.MenuGroup, { children: b }),
            (0, l.jsx)(a.MenuGroup, { children: M }),
            (0, l.jsx)(a.MenuGroup, { children: d }),
            (0, l.jsx)(a.MenuGroup, { children: s }),
            (0, l.jsx)(a.MenuGroup, { children: L }),
          ],
        });
      }
      function A(e) {
        let { channel: n, guild: t, onSelect: r } = e,
          s = (0, I.Z)(n),
          o = (0, N.Z)(n),
          u = (0, p.l)(n),
          d = (0, p.P)(n),
          m = (0, b.Z)(n),
          h = (0, _.ZP)(n),
          x = (0, v.Z)(n),
          L = (0, j.Z)(n, t),
          M = (0, g.Z)(n, t),
          A = (0, Z.Z)(n, t),
          P = (0, E.Z)(n),
          R = (0, c.Z)({ id: n.id, label: O.Z.Messages.COPY_ID_CHANNEL }),
          y = (0, S.Z)(n, "list_text_channel_context_menu"),
          G = (0, C.Z)(n),
          w = (0, T.ZP)(n),
          U = (0, f.Mn)("ChannelContextMenuNormal");
        return (0, l.jsxs)(a.Menu, {
          navId: "channel-context",
          onClose: i.Zy,
          "aria-label": O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: r,
          children: [
            (0, l.jsxs)(
              a.MenuGroup,
              { children: [s, u] },
              "mark-as-read-or-favorite",
            ),
            (0, l.jsxs)(
              a.MenuGroup,
              { children: [L, m, o, y] },
              "channel-actions",
            ),
            (0, l.jsxs)(
              a.MenuGroup,
              { children: [h, U ? w : G] },
              "notifications",
            ),
            (0, l.jsxs)(
              a.MenuGroup,
              { children: [x, M, A, P] },
              "admin-actions",
            ),
            (0, l.jsx)(a.MenuGroup, { children: d }),
            (0, l.jsx)(a.MenuGroup, { children: R }, "developer-actions"),
          ],
        });
      }
      n.default = (0, s.Z)(
        (0, r.Z)(
          function (e) {
            return (0, d.Z)()
              ? (0, l.jsx)(M, { ...e })
              : (0, l.jsx)(A, { ...e });
          },
          { object: L.qAy.CONTEXT_MENU },
        ),
        [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
      );
    },
    593589: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var l = t(735250),
        a = t(470079),
        i = t(481060),
        r = t(372900),
        s = t(238246),
        o = t(788983),
        u = t(207035),
        c = t(823748),
        d = t(981631),
        p = t(616792);
      function m(e) {
        let { windowKey: n, channel: t } = e;
        return (0, l.jsx)(s.Z, {
          withTitleBar: !0,
          windowKey: n,
          title: t.name,
          channelId: t.id,
          contentClassName: p.popoutContent,
          children: (0, l.jsx)(r.Z.Provider, {
            value: t.guild_id,
            children: (0, l.jsx)(c.Z, { providedChannel: t }),
          }),
        });
      }
      function h(e, n) {
        let t = (0, u.P)(n),
          r = a.useCallback(() => {
            o.bA(
              "".concat(d.KJ3.CHANNEL_POPOUT, "-").concat(e.id),
              (n) => (0, l.jsx)(m, { windowKey: n, channel: e }),
              { defaultWidth: 854, defaultHeight: 480 },
            );
          }, [e]);
        return t
          ? (0, l.jsx)(i.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => r(),
            })
          : null;
      }
    },
    905656: function (e, n, t) {
      t(733860);
      var l = t(735250),
        a = t(470079),
        i = t(780384),
        r = t(481060),
        s = t(197344),
        o = t(526167),
        u = t(73117),
        c = t(787462),
        d = t(70097),
        p = t(981631),
        m = t(988868),
        h = t(554355),
        x = t(991989),
        f = t(635507),
        g = t(470794),
        N = t(886777);
      function Z(e) {
        let {
            movDark: n = u,
            movLight: t = c,
            mp4Dark: a = m,
            mp4Light: i = f,
            pngDark: r = h,
            pngLight: s = g,
            webmDark: d = x,
            webmLight: Z = N,
          } = e,
          E = (0, o.vu)(),
          v = [
            (0, l.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, l.jsx)("img", { alt: "", src: r }, "png"),
          ],
          j = [
            (0, l.jsx)("source", { src: i, type: "video/mp4" }, "mp4"),
            (0, l.jsx)("img", { alt: "", src: s }, "png"),
          ];
        return (
          (E > 52 || -1 === E) &&
            (v.unshift(
              (0, l.jsx)("source", { src: d, type: "video/webm" }, "webm"),
            ),
            j.unshift(
              (0, l.jsx)("source", { src: Z, type: "video/webm" }, "webm"),
            )),
          (0, o.rO)() &&
            (v.unshift(
              (0, l.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            ),
            j.unshift(
              (0, l.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            )),
          { [p.BRd.DARK]: v, [p.BRd.LIGHT]: j }
        );
      }
      let E = s.Z.getAppSpinnerSources(),
        v = null != E ? Z(E) : null,
        j = Z({});
      n.Z = (e) => {
        var n;
        let {
            loop: t = !0,
            autoPlay: s = !0,
            setRef: o,
            className: u,
            onReady: c,
          } = e,
          { theme: m } = (0, r.useThemeContext)(),
          { reducedMotion: h } = a.useContext(
            r.AccessibilityPreferencesContext,
          ),
          x = j;
        null != v && (x = v);
        let f =
          null !== (n = x[(0, i.wj)(m) ? p.BRd.DARK : p.BRd.LIGHT]) &&
          void 0 !== n
            ? n
            : x[p.BRd.DARK];
        return (0, l.jsx)(
          d.Z,
          {
            ref: o,
            onLoadedData: c,
            className: u,
            loop: !h.enabled && t,
            autoPlay: !h.enabled && s,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: f,
          },
          m,
        );
      };
    },
    905423: function (e, n, t) {
      var l = t(266067),
        a = t(652874),
        i = t(731965),
        r = t(981631);
      function s(e) {
        let n = (0, l.LX)(null != e ? e : "", {
          path: r.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?"),
        });
        if (null != n) {
          let { guildId: e, channelId: t } = n.params;
          return {
            guildId: e === r.ME ? null : e,
            channelId: null != t ? t : null,
          };
        }
        let t = (0, l.LX)(null != e ? e : "", {
          path: r.Z5c.GUILD_BOOSTING_MARKETING(":guildId"),
        });
        return null != t
          ? { guildId: t.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      n.Z = (0, a.Z)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(n) {
          let { guildId: t, channelId: l } = s(n);
          (0, i.j)(() => e({ path: n, guildId: t, channelId: l }));
        },
        resetPath(n) {
          let { guildId: t, channelId: l } = s(n);
          (0, i.j)(() =>
            e({ path: null, guildId: t, channelId: l, basePath: n }),
          );
        },
      }));
    },
    829750: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
        t: function () {
          return o;
        },
      });
      var l = t(442837),
        a = t(430824),
        i = t(938475),
        r = t(981631);
      function s(e) {
        return (0, l.cj)(
          [i.ZP, a.Z],
          () => {
            let n = i.ZP.countVoiceStatesForChannel(e.id),
              t = a.Z.getGuild(e.getGuildId());
            return null == t
              ? { reachedLimit: !1, limit: -1 }
              : e.type === r.d4z.GUILD_STAGE_VOICE
                ? {
                    reachedLimit: n > t.maxStageVideoChannelUsers,
                    limit: t.maxStageVideoChannelUsers,
                  }
                : {
                    reachedLimit:
                      t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                    limit: t.maxVideoChannelUsers,
                  };
          },
          [e],
        );
      }
      function o(e) {
        let n = i.ZP.countVoiceStatesForChannel(e.id),
          t = a.Z.getGuild(e.getGuildId());
        return null == t
          ? { reachedLimit: !1, limit: -1 }
          : e.type === r.d4z.GUILD_STAGE_VOICE
            ? {
                reachedLimit: n > t.maxStageVideoChannelUsers,
                limit: t.maxStageVideoChannelUsers,
              }
            : {
                reachedLimit:
                  t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                limit: t.maxVideoChannelUsers,
              };
      }
    },
    173507: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(735250);
      t(470079);
      var a = t(481060),
        i = t(695346),
        r = t(981631);
      function s(e, n) {
        i.qF.getSetting()
          ? (0, a.openModalLazy)(
              async () => {
                let { default: n } = await Promise.all([
                  t.e("5528"),
                  t.e("59967"),
                ]).then(t.bind(t, 601572));
                return (t) =>
                  (0, l.jsx)(n, { ...t, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey:
                  n === r.IlC.POPOUT
                    ? a.POPOUT_MODAL_CONTEXT
                    : a.DEFAULT_MODAL_CONTEXT,
              },
            )
          : null == e || e();
      }
    },
    896797: function (e, n, t) {
      var l,
        a = t(442837),
        i = t(433517),
        r = t(570140),
        s = t(981631);
      function o(e, n, t) {
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
      let u = { lastViewedPath: null, lastViewedNonVoicePath: null },
        c = u,
        d = "LAST_VIEWED_PATH";
      class p extends (l = a.ZP.PersistedStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
          c = null != e ? e : u;
        }
        get defaultRoute() {
          return s.Z5c.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = c.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : s.Z5c.ME;
        }
        get fallbackRoute() {
          return s.Z5c.ME;
        }
        getState() {
          return c;
        }
      }
      o(p, "displayName", "DefaultRouteStore"),
        o(p, "persistKey", "DefaultRouteStore"),
        o(p, "migrations", [
          () => {
            let e = i.K.get(d, null);
            return i.K.remove(d), { lastViewedPath: e };
          },
        ]),
        (n.Z = new p(r.Z, {
          SAVE_LAST_ROUTE: function (e) {
            let { path: n } = e;
            return (c.lastViewedPath = n), !0;
          },
          SAVE_LAST_NON_VOICE_ROUTE: function (e) {
            let { path: n } = e;
            return (c.lastViewedNonVoicePath = n), !0;
          },
        }));
    },
    361207: function (e, n, t) {
      t.d(n, {
        DW: function () {
          return d;
        },
        Gn: function () {
          return m;
        },
        t3: function () {
          return p;
        },
        w4: function () {
          return u;
        },
      });
      var l = t(525654),
        a = t.n(l),
        i = t(271579),
        r = t(314897),
        s = t(981631);
      let o = "linux";
      function u(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(s.fzT.DESKTOP)
          .concat(n ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != t ? "&format=".concat(t) : "");
      }
      function c() {
        var e;
        let n =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (e = a().os) || void 0 === e
              ? void 0
              : e.family;
        return null == n
          ? "win"
          : -1 !== n.indexOf("Ubuntu") ||
              -1 !== n.indexOf("Debian") ||
              -1 !== n.indexOf("Fedora") ||
              -1 !== n.indexOf("Red Hat") ||
              -1 !== n.indexOf("SuSE") ||
              -1 !== n.indexOf("Linux")
            ? o
            : -1 !== n.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function d(e) {
        return { win: "Windows", osx: "Mac", [o]: "Linux" }[c(e)];
      }
      function p() {
        let e = c();
        return u(e, !1, e === o ? "tar.gz" : null);
      }
      function m(e, n, t) {
        let l = null != t ? t.toString() : null;
        switch (n) {
          case "iOS":
            return (0, i.ZP)(
              null != l
                ? l
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, i.WS)(),
              },
            );
          case "Android":
            return (0, i.ZP)(
              null != l ? l : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, i.WS)(),
              },
            );
          default:
            return null != l ? l : "https://www.discord.com";
        }
      }
    },
    616792: function (e, n, t) {
      e.exports = { popoutContent: "popoutContent_fc32a6" };
    },
  },
]);
//# sourceMappingURL=227c19c4a8bde196dc66.js.map
