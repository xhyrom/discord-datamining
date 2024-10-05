"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41811"],
  {
    231443: function (e) {
      e.exports = "/assets/e04bcb7316f7205e85fb.svg";
    },
    74830: function (e) {
      e.exports = "/assets/23a7a3fd6624342117bf.svg";
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
        r = t(925549),
        i = t(905423),
        s = t(981631);
      function o(e, n) {
        let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!(0, l.hasAnyModalOpen)())
          t && r.Z.channelListScrollTo(e, n),
            o && null != n && a.Z.updateChatOpen(n, !0),
            i.Z.getState().updatePath(s.Z5c.CHANNEL(e, n));
      }
      function u(e) {
        if (!(0, l.hasAnyModalOpen)()) i.Z.getState().updatePath(e);
      }
    },
    388905: function (e, n, t) {
      t.d(n, {
        DK: function () {
          return E;
        },
        Dx: function () {
          return N;
        },
        EJ: function () {
          return L;
        },
        Ee: function () {
          return Z;
        },
        Hh: function () {
          return S;
        },
        II: function () {
          return C;
        },
        MC: function () {
          return b;
        },
        Vj: function () {
          return j;
        },
        gO: function () {
          return T;
        },
        i_: function () {
          return I;
        },
        jQ: function () {
          return O;
        },
        qE: function () {
          return _;
        },
        v6: function () {
          return M;
        },
        zx: function () {
          return v;
        },
      }),
        t(536091);
      var l = t(735250);
      t(470079);
      var a = t(120356),
        r = t.n(a),
        i = t(481060),
        s = t(43267),
        o = t(905656),
        u = t(600164),
        c = t(313201),
        d = t(565138),
        p = t(361207),
        m = t(63063),
        f = t(981631),
        h = t(689938),
        x = t(878145);
      let g = i.Avatar;
      null == g && (g = () => null);
      let N = (e) => {
          let { className: n, id: t, children: a } = e;
          return (0, l.jsx)(i.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: r()(x.title, n),
            id: t,
            children: a,
          });
        },
        E = (e) => {
          let { className: n, children: t } = e;
          return (0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: n,
            children: t,
          });
        },
        Z = (e) => {
          let { className: n, src: t } = e;
          return (0, l.jsx)("img", {
            alt: "",
            src: t,
            className: r()(x.image, n),
          });
        },
        v = (e) => {
          let { className: n, ...t } = e,
            a = t.look === i.Button.Looks.LINK;
          return (0, l.jsx)(i.Button, {
            size: a ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
            fullWidth: !a,
            className: r()(n, { [x.button]: !a, [x.linkButton]: a }),
            ...t,
          });
        };
      (v.Looks = i.Button.Looks),
        (v.Colors = i.Button.Colors),
        (v.Sizes = i.Button.Sizes);
      let _ = (e) => {
          let { className: n, src: t, size: a } = e;
          return (0, l.jsx)(g, {
            src: t,
            size: a,
            className: r()(x.inviteLargeIcon, n),
            "aria-hidden": !0,
          });
        },
        j = (e) => {
          let { guild: n, size: t, animate: a = !1, className: r } = e;
          return (0, l.jsx)(d.Z, {
            active: !0,
            guild: n,
            size: t,
            animate: a,
            className: r,
          });
        };
      j.Sizes = d.Z.Sizes;
      let b = (e) => {
        let { className: n, channel: t, size: a } = e;
        return (0, l.jsx)(g, {
          src: (0, s.x)(t),
          size: a,
          className: r()(x.inviteIcon, n),
          "aria-hidden": !0,
        });
      };
      b.Sizes = i.AvatarSizes;
      let C = (e) => {
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
              autoComplete: f,
              autoFocus: h,
              maxLength: g,
              spellCheck: N,
              name: E,
              description: Z,
              required: v,
              onFocus: _,
              onBlur: j,
            } = e,
            b = (0, c.Dt)();
          return (0, l.jsxs)(i.FormItem, {
            title: n,
            error: t,
            className: o,
            required: v,
            tag: "label",
            htmlFor: b,
            children: [
              (0, l.jsx)(i.TextInput, {
                name: E,
                type: p,
                value: s,
                inputRef: d,
                placeholder: a,
                inputClassName: r()(u, { [x.inputError]: null != t }),
                "aria-label": n,
                onChange: m,
                autoComplete: f,
                autoFocus: h,
                maxLength: g,
                spellCheck: N,
                id: b,
                onFocus: _,
                onBlur: j,
              }),
              null != Z
                ? (0, l.jsx)(i.FormText, {
                    type: i.FormText.Types.DESCRIPTION,
                    className: x.description,
                    children: Z,
                  })
                : null,
            ],
          });
        },
        T = (e) => {
          let { className: n, children: t } = e;
          return (0, l.jsx)("div", { className: r()(x.block, n), children: t });
        },
        I = (e) => {
          let { className: n, children: t, isProminent: a } = e;
          return (0, l.jsx)(i.Text, {
            variant: a ? "text-sm/normal" : "text-xs/normal",
            className: r()(x.subText, n),
            children: t,
          });
        },
        S = (e) => {
          let { className: n } = e;
          return (0, l.jsx)(u.Z, {
            direction: u.Z.Direction.VERTICAL,
            align: u.Z.Align.CENTER,
            className: n,
            children: (0, l.jsx)(o.Z, { className: x.spinnerVideo }),
          });
        },
        L = (e) => {
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
                  className: r()(x.pill, x.pillOnline, o && x.pillFlat),
                  children: [
                    (0, l.jsx)("i", { className: x.pillIconOnline }),
                    (0, l.jsx)(i.Text, {
                      tag: "span",
                      className: r()(x.pillMessage, c),
                      variant: "text-sm/normal",
                      children:
                        h.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
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
                    className: r()(x.pill, o && x.pillFlat),
                    children: [
                      (0, l.jsx)("i", { className: x.pillIconTotal }),
                      (0, l.jsx)(i.Text, {
                        tag: "span",
                        className: r()(x.pillMessage, c),
                        variant: "text-sm/normal",
                        children:
                          h.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: a },
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        O = (e) => {
          let { user: n } = e;
          return null == n
            ? null
            : (0, l.jsxs)("div", {
                className: x.joiningAs,
                children: [
                  (0, l.jsx)(i.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      h.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, l.jsx)(_, {
                    className: x.joiningAsAvatar,
                    src: n.getAvatarURL(void 0, 24),
                    size: i.AvatarSizes.SIZE_24,
                    "aria-label": n.username,
                  }),
                  (0, l.jsx)(i.Text, {
                    className: x.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: n.username,
                  }),
                ],
              });
        },
        M = (e) => {
          let { className: n } = e;
          return (0, l.jsxs)(T, {
            className: n,
            children: [
              (0, l.jsx)(v, {
                onClick: () => window.open((0, p.t3)()),
                children: h.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, p.DW)(),
                }),
              }),
              (0, l.jsx)(I, {
                className: x.downloadButtonSubtext,
                children: h.Z.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: m.Z.getArticleURL(
                    f.BhN.SUPPORTED_BROWSERS,
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
          onSubmit: s,
          children: o,
          expanded: u = !1,
          theme: c = f.BRd.DARK,
          style: d,
        } = e;
        return (0, l.jsx)(i.ThemeProvider, {
          theme: c,
          children: (e) =>
            (0, l.jsxs)(a, {
              "data-theme": c,
              "data-disable-adaptive-theme": !0,
              onSubmit: s,
              style: d,
              className: r()(u ? x.authBoxExpanded : x.authBox, e, n),
              children: [
                (0, l.jsx)("div", { className: x.discordLogo }),
                (0, l.jsx)("div", {
                  className: r()(x.centeringWrapper, t),
                  children: o,
                }),
              ],
            }),
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
        r = t(239091),
        i = t(883385),
        s = t(108843),
        o = t(947440),
        u = t(100527),
        c = t(299206),
        d = t(916069),
        p = t(895563),
        m = t(212205),
        f = t(478035),
        h = t(62420),
        x = t(423589),
        g = t(398048),
        N = t(109764),
        E = t(3689),
        Z = t(323597),
        v = t(852245),
        _ = t(367722),
        j = t(461535),
        b = t(776568),
        C = t(218035),
        T = t(775666),
        I = t(593589),
        S = t(442754),
        L = t(981631),
        O = t(689938);
      function M(e) {
        let { channel: n, onSelect: t } = e,
          i = (0, j.Z)(n),
          s = (0, N.Z)(n),
          u = (0, p.l)(n),
          d = (0, p.P)(n),
          g = (0, m.Z)(n),
          E = (0, f.Z)(n),
          Z = (0, h.Z)(n),
          _ = (0, b.ZP)(n),
          I = (0, C.Z)(n),
          S = (0, v.Z)(n),
          L = (0, c.Z)({ id: n.id, label: O.Z.Messages.COPY_ID_CHANNEL }),
          M = (0, o.Z)(n),
          A = (0, T.ZP)(n),
          P = (0, x.Mn)("ChannelContextFavoritesMenu");
        return (0, l.jsxs)(a.Menu, {
          navId: "channel-context",
          onClose: r.Zy,
          "aria-label": O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: t,
          children: [
            (0, l.jsx)(a.MenuGroup, { children: i }),
            (0, l.jsxs)(a.MenuGroup, { children: [E, Z, g, u] }),
            (0, l.jsxs)(a.MenuGroup, { children: [_, P ? A : I] }),
            (0, l.jsx)(a.MenuGroup, { children: S }),
            (0, l.jsx)(a.MenuGroup, { children: M }),
            (0, l.jsx)(a.MenuGroup, { children: d }),
            (0, l.jsx)(a.MenuGroup, { children: s }),
            (0, l.jsx)(a.MenuGroup, { children: L }),
          ],
        });
      }
      function A(e) {
        let { channel: n, guild: t, onSelect: i } = e,
          s = (0, j.Z)(n),
          o = (0, N.Z)(n),
          u = (0, p.l)(n),
          d = (0, p.P)(n),
          m = (0, S.Z)(n),
          f = (0, b.ZP)(n),
          h = (0, v.Z)(n),
          L = (0, _.Z)(n, t),
          M = (0, g.Z)(n, t),
          A = (0, E.Z)(n, t),
          P = (0, Z.Z)(n),
          R = (0, c.Z)({ id: n.id, label: O.Z.Messages.COPY_ID_CHANNEL }),
          w = (0, I.Z)(n, "list_text_channel_context_menu"),
          y = (0, C.Z)(n),
          G = (0, T.ZP)(n),
          U = (0, x.Mn)("ChannelContextMenuNormal");
        return (0, l.jsxs)(a.Menu, {
          navId: "channel-context",
          onClose: r.Zy,
          "aria-label": O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: i,
          children: [
            (0, l.jsxs)(
              a.MenuGroup,
              { children: [s, u] },
              "mark-as-read-or-favorite",
            ),
            (0, l.jsxs)(
              a.MenuGroup,
              { children: [L, m, o, w] },
              "channel-actions",
            ),
            (0, l.jsxs)(
              a.MenuGroup,
              { children: [f, U ? G : y] },
              "notifications",
            ),
            (0, l.jsxs)(
              a.MenuGroup,
              { children: [h, M, A, P] },
              "admin-actions",
            ),
            (0, l.jsx)(a.MenuGroup, { children: d }),
            (0, l.jsx)(a.MenuGroup, { children: R }, "developer-actions"),
          ],
        });
      }
      n.default = (0, s.Z)(
        (0, i.Z)(
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
          return f;
        },
      });
      var l = t(735250),
        a = t(470079),
        r = t(481060),
        i = t(372900),
        s = t(238246),
        o = t(788983),
        u = t(207035),
        c = t(823748),
        d = t(981631),
        p = t(405601);
      function m(e) {
        let { windowKey: n, channel: t } = e;
        return (0, l.jsx)(s.Z, {
          withTitleBar: !0,
          windowKey: n,
          title: t.name,
          channelId: t.id,
          contentClassName: p.popoutContent,
          children: (0, l.jsx)(i.Z.Provider, {
            value: t.guild_id,
            children: (0, l.jsx)(c.Z, { providedChannel: t }),
          }),
        });
      }
      function f(e, n) {
        let t = (0, u.P)(n),
          i = a.useCallback(() => {
            o.bA(
              "".concat(d.KJ3.CHANNEL_POPOUT, "-").concat(e.id),
              (n) => (0, l.jsx)(m, { windowKey: n, channel: e }),
              { defaultWidth: 854, defaultHeight: 480 },
            );
          }, [e]);
        return t
          ? (0, l.jsx)(r.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => i(),
            })
          : null;
      }
    },
    905656: function (e, n, t) {
      t(733860);
      var l = t(735250),
        a = t(470079),
        r = t(780384),
        i = t(481060),
        s = t(197344),
        o = t(526167),
        u = t(70097),
        c = t(981631),
        d = t(73117),
        p = t(988868),
        m = t(554355),
        f = t(991989),
        h = t(787462),
        x = t(635507),
        g = t(470794),
        N = t(886777);
      function E(e) {
        let {
            movDark: n = d,
            movLight: t = h,
            mp4Dark: a = p,
            mp4Light: r = x,
            pngDark: i = m,
            pngLight: s = g,
            webmDark: u = f,
            webmLight: E = N,
          } = e,
          Z = (0, o.vu)(),
          v = [
            (0, l.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, l.jsx)("img", { alt: "", src: i }, "png"),
          ],
          _ = [
            (0, l.jsx)("source", { src: r, type: "video/mp4" }, "mp4"),
            (0, l.jsx)("img", { alt: "", src: s }, "png"),
          ];
        return (
          (Z > 52 || -1 === Z) &&
            (v.unshift(
              (0, l.jsx)("source", { src: u, type: "video/webm" }, "webm"),
            ),
            _.unshift(
              (0, l.jsx)("source", { src: E, type: "video/webm" }, "webm"),
            )),
          (0, o.rO)() &&
            (v.unshift(
              (0, l.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            ),
            _.unshift(
              (0, l.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            )),
          { [c.BRd.DARK]: v, [c.BRd.LIGHT]: _ }
        );
      }
      let Z = s.Z.getAppSpinnerSources(),
        v = null != Z ? E(Z) : null,
        _ = E({});
      n.Z = (e) => {
        var n;
        let {
            loop: t = !0,
            autoPlay: s = !0,
            setRef: o,
            className: d,
            onReady: p,
          } = e,
          { theme: m } = (0, i.useThemeContext)(),
          { reducedMotion: f } = a.useContext(
            i.AccessibilityPreferencesContext,
          ),
          h = _;
        null != v && (h = v);
        let x =
          null !== (n = h[(0, r.wj)(m) ? c.BRd.DARK : c.BRd.LIGHT]) &&
          void 0 !== n
            ? n
            : h[c.BRd.DARK];
        return (0, l.jsx)(
          u.Z,
          {
            ref: o,
            onLoadedData: p,
            className: d,
            loop: !f.enabled && t,
            autoPlay: !f.enabled && s,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: x,
          },
          m,
        );
      };
    },
    905423: function (e, n, t) {
      var l = t(266067),
        a = t(652874),
        r = t(731965),
        i = t(893607),
        s = t(981631);
      function o(e) {
        let n = (0, l.LX)(null != e ? e : "", {
          path: s.Z5c.CHANNEL(
            i.Hw.guildId(),
            i.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != n) {
          let { guildId: e, channelId: t } = n.params;
          return {
            guildId: e === s.ME ? null : e,
            channelId: null != t ? t : null,
          };
        }
        let t = (0, l.LX)(null != e ? e : "", {
          path: s.Z5c.GUILD_BOOSTING_MARKETING(i.Hw.guildId()),
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
          let { guildId: t, channelId: l } = o(n);
          (0, r.j)(() => e({ path: n, guildId: t, channelId: l }));
        },
        resetPath(n) {
          let { guildId: t, channelId: l } = o(n);
          (0, r.j)(() =>
            e({ path: null, guildId: t, channelId: l, basePath: n }),
          );
        },
      }));
    },
    977059: function (e, n, t) {
      t.d(n, {
        R: function () {
          return r;
        },
        S: function () {
          return a;
        },
      });
      let l = (0, t(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function a(e) {
        let { location: n } = e;
        return l.useExperiment({ location: n }, { autoTrackExposure: !0 });
      }
      function r(e) {
        let { location: n } = e;
        return l.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
      }
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
        r = t(938475),
        i = t(981631);
      function s(e) {
        return (0, l.cj)(
          [r.ZP, a.Z],
          () => {
            let n = r.ZP.countVoiceStatesForChannel(e.id),
              t = a.Z.getGuild(e.getGuildId());
            return null == t
              ? { reachedLimit: !1, limit: -1 }
              : e.type === i.d4z.GUILD_STAGE_VOICE
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
        let n = r.ZP.countVoiceStatesForChannel(e.id),
          t = a.Z.getGuild(e.getGuildId());
        return null == t
          ? { reachedLimit: !1, limit: -1 }
          : e.type === i.d4z.GUILD_STAGE_VOICE
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
        r = t(695346),
        i = t(981631);
      function s(e, n) {
        r.qF.getSetting()
          ? (0, a.openModalLazy)(
              async () => {
                let { default: n } = await Promise.all([
                  t.e("8821"),
                  t.e("62010"),
                ]).then(t.bind(t, 601572));
                return (t) =>
                  (0, l.jsx)(n, { ...t, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey:
                  n === i.IlC.POPOUT
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
        r = t(433517),
        i = t(570140),
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
            let e = r.K.get(d, null);
            return r.K.remove(d), { lastViewedPath: e };
          },
        ]),
        (n.Z = new p(i.Z, {
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
        r = t(271579),
        i = t(314897),
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
            return (0, r.ZP)(
              null != l
                ? l
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: i.default.getFingerprint(),
                attemptId: (0, r.WS)(),
              },
            );
          case "Android":
            return (0, r.ZP)(
              null != l ? l : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: i.default.getFingerprint(),
                attemptId: (0, r.WS)(),
              },
            );
          default:
            return null != l ? l : "https://www.discord.com";
        }
      }
    },
    405601: function (e, n, t) {
      e.exports = { popoutContent: "popoutContent_fc32a6" };
    },
  },
]);
//# sourceMappingURL=c98aa3bfa5fbce1740aa.js.map
