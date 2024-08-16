"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51182"],
  {
    485267: function (t, e, n) {
      n.d(e, {
        Bt: function () {
          return E;
        },
        Jn: function () {
          return s;
        },
        lY: function () {
          return c;
        },
      });
      var a = n(570140);
      n(100527), n(592125);
      var r = n(944486),
        l = n(914010);
      n(594174);
      var u = n(626135),
        i = n(71585);
      n(295955);
      var o = n(981631);
      let c = () => {
        a.Z.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
          u.default.track(o.rMx.MEMBERLIST_CONTENT_FEED_HIDDEN, {
            channel_id: r.Z.getChannelId(),
            guild_id: l.Z.getGuildId(),
            hidden: i.Z.hidden,
          });
      };
      function s() {
        a.Z.dispatch({ type: "GAME_PROFILE_OPEN" });
      }
      function E() {
        a.Z.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
      }
    },
    295955: function () {},
    327220: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      var a = n(470079),
        r = n(442837),
        l = n(592125),
        u = n(9156);
      function i(t) {
        let e = (0, r.e7)([l.Z], () => l.Z.getPrivateChannelsVersion()),
          n = (0, r.e7)([l.Z], () => l.Z.getMutableDMsByUserIds(), [e]),
          i = (0, r.e7)([u.ZP], () => u.ZP.getMutedChannels(null)),
          o = a.useMemo(() => {
            let t = new Set();
            for (let e in n) {
              let a = n[e];
              null != a && i.has(a) && t.add(e);
            }
            return t;
          }, [n, i]);
        return a.useMemo(
          () =>
            null == t
              ? void 0
              : t.filter((t) => {
                  for (let e of t.participants) if (o.has(e)) return !1;
                  return !0;
                }),
          [t, o],
        );
      }
    },
    959580: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return u;
        },
      });
      var a = n(442837),
        r = n(719247);
      let l = [];
      function u(t) {
        return (0, a.Wu)(
          [r.Z],
          () => (null == t ? l : t.filter(r.Z.canRenderContent)),
          [t],
        );
      }
    },
    919394: function (t, e, n) {
      n.d(e, {
        QC: function () {
          return R;
        },
        SO: function () {
          return C;
        },
      }),
        n(653041);
      var a = n(512722),
        r = n.n(a),
        l = n(913527),
        u = n.n(l),
        i = n(705512),
        o = n(812206),
        c = n(55e3),
        s = n(220082),
        E = n(693824),
        _ = n(690725),
        f = n(706454),
        d = n(594174),
        M = n(70956),
        h = n(709054),
        g = n(561308),
        Z = n(206295),
        T = n(737583),
        N = n(438226),
        m = n(169040),
        I = n(689938);
      let A = (t, e) => ({
          AvatarImage1: t[0],
          ...(null != t[1] && { AvatarImage2: t[1] }),
          ...(null != t[2] && { AvatarImage3: t[2] }),
          ...(null != e && { ApplicationImage: e }),
        }),
        p = (t, e) => {
          let n = [{ iconPath: m.NM, text: e }],
            a = h.default.extractTimestamp(t.extra.application_id);
          if (
            (7 >= u()().diff(u()(a), "days") &&
              n.push({
                iconPath: m.As,
                text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE,
              }),
            (0, g.Ol)(t) &&
              n.push({
                iconPath: m.fO,
                text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
              }),
            (0, g.q_)(t))
          ) {
            let e = (0, g.vU)(t);
            n.push({
              iconPath: m.t1,
              text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
                days: e,
              }),
            });
          }
          (0, g.ig)(t) === i.o.GLOBAL &&
            n.push({
              iconPath: m.Op,
              text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
            });
          let r = (0, g.dw)(t);
          if (
            (null != r && n.push({ iconPath: m.Z, text: (0, g.GE)(r) }),
            (0, g.V5)(t))
          ) {
            let { text: e } = (0, g.zo)(t);
            null != e && n.push({ iconPath: m.Md, text: e });
          }
          if ((0, g.Jd)(t)) {
            let e = (0, g.yA)(t);
            if (null != e) {
              let t =
                I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format(
                  { hours: Math.round(e / M.Z.Seconds.HOUR) },
                );
              return [
                {
                  iconPath: m.eF,
                  text: ""
                    .concat(
                      I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME,
                      " — ",
                    )
                    .concat(t),
                },
              ];
            }
          }
          return n;
        },
        v = (t, e) => {
          let {
              timestamp: n,
              colors: a,
              description: r,
              entry: l,
              numAvatars: u,
            } = e,
            i = a.map((t, e) => ({ color: t, stop: e }));
          t.setSize({ w: m.nx, h: m.bg }, 4),
            t.drawRoundedGradientRect(
              i,
              { x: 0, y: m.bg },
              { x: m.nx, y: 0 },
              { x: 0, y: 0, h: m.bg, w: m.nx },
              8,
            ),
            t.setColor("white"),
            t.drawRoundedImage(
              "ApplicationImage",
              { x: m.sB, y: m.sB },
              { w: m.Pu, h: m.Pu },
              8,
            ) === E.vP.Failure &&
              t.drawPath(c.Cv, { x: m.sB, y: m.sB }, !0, 2 + 2 / 3);
          (0, T.l)({
            canvas: t,
            avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(
              0,
              u,
            ),
            position: { x: m.Iq, y: m.sB },
            avatarImageSize: m.$S,
          }),
            t.setColor("white"),
            t.setFont({
              size: 16,
              family: m.I8,
              weight: m.Ue,
              truncate: E.GX.Wrap,
            }),
            t.drawText(r, { x: m.Iq, y: 64, h: 32, w: m.kC }, !0);
          let o = p(l, n);
          (0, T.J)({
            canvas: t,
            badges: o,
            startPosition: m.Iq,
            maxWidth: m.kC,
          });
        },
        C = async (t) => {
          let {
              applicationImageSrc: e,
              entry: n,
              avatarSrcs: a,
              description: r,
              timestamp: l,
              colors: u,
              channelId: i,
            } = t,
            o = n.extra.game_name,
            c = A(a, e);
          return await (0, _.f)({
            assetsToLoad: c,
            drawImage: (t) =>
              v(t, {
                timestamp: l,
                colors: u,
                description: r,
                entry: n,
                numAvatars: a.length,
              }),
            exportConfigs: {
              format: E.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(o, ".png").toLowerCase(),
              fileType: "png",
              channelId: i,
            },
          });
        };
      async function R(t, e, n) {
        let a = t.extra.game_name,
          l = o.Z.getApplication(t.extra.application_id),
          u = null == l ? void 0 : l.getIconURL(128),
          i = d.default.getUser(t.author_id);
        r()(null != i, "Author must not be null"),
          await (0, s.vM)(null != u ? u : "");
        let c = [null == i ? void 0 : i.getAvatarURL(e.guild_id, 128)],
          M = A(c, u),
          h = f.default.locale,
          T = (0, g.yh)(t, h),
          { primaryColor: m, secondaryColor: I } = (0, Z.w)(null != u ? u : ""),
          p = (0, N.HV)(t, e, i),
          C = {
            format: n,
            quality: 1,
            fileName: "user-reacting-to-".concat(a, ".png").toLowerCase(),
            fileType: "png",
          };
        if (n === E.kH.CloudUpload) {
          var R;
          C.channelId = null !== (R = e.id) && void 0 !== R ? R : "";
        }
        return await (0, _.f)({
          assetsToLoad: M,
          drawImage: (e) =>
            v(e, {
              timestamp: T,
              colors: [m, I],
              description: p,
              entry: t,
              numAvatars: c.length,
            }),
          exportConfigs: C,
        });
      }
    },
    169040: function (t, e, n) {
      n.d(e, {
        $S: function () {
          return Z;
        },
        As: function () {
          return f;
        },
        I8: function () {
          return v;
        },
        Iq: function () {
          return T;
        },
        Md: function () {
          return o;
        },
        NC: function () {
          return p;
        },
        NM: function () {
          return a;
        },
        Op: function () {
          return _;
        },
        PW: function () {
          return A;
        },
        Pu: function () {
          return g;
        },
        Ue: function () {
          return C;
        },
        Z: function () {
          return s;
        },
        bg: function () {
          return M;
        },
        eF: function () {
          return c;
        },
        f0: function () {
          return m;
        },
        fO: function () {
          return r;
        },
        fj: function () {
          return i;
        },
        i6: function () {
          return l;
        },
        kC: function () {
          return N;
        },
        m2: function () {
          return I;
        },
        mb: function () {
          return u;
        },
        nx: function () {
          return d;
        },
        sB: function () {
          return h;
        },
        t1: function () {
          return E;
        },
      });
      let a =
          "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
        r =
          "M11.33 13.68c.41.27.93.27 1.34 0 1.73-1.1 6.2-4.3 6.2-8.02 0-2.02-1.6-3.66-3.59-3.66-1.46 0-2.42.58-3.28 1.44A4.33 4.33 0 0 0 8.72 2a3.63 3.63 0 0 0-3.6 3.66c0 3.72 4.48 6.92 6.2 8.02Z M3.93 13.84a.94.94 0 0 0-.93.94 5.6 5.6 0 0 0 6.48 5.6l1.02-.18v1.27c0 .85.67 1.53 1.5 1.53s1.5-.68 1.5-1.53V20.2l1.02.17A5.6 5.6 0 0 0 21 14.78a.94.94 0 0 0-.93-.94h-2.24a5.6 5.6 0 0 0-4.89 2.9L12 18.41l-.94-1.69a5.6 5.6 0 0 0-4.89-2.9H3.93Z",
        l =
          "M 4 1 C 2.3431 1 1 2.3431 1 4 V 13 C 1 14.6569 2.3431 16 4 16 H 20 C 21.6568 16 23 14.6569 23 13 V 4 C 23 2.3431 21.6568 1 20 1 H 4 Z M 6 18 C 5.4477 18 5 18.4477 5 19 C 5 19.5523 5.4477 20 6 20 H 18 C 18.5523 20 19 19.5523 19 19 C 19 18.4477 18.5523 18 18 18 H 6 Z",
        u =
          "M18.03 2.8a11 11 0 1 0 2.52 2.28c-.28-.34-.8-.13-.8.31v7.37c0 1-.4 1.95-1.1 2.65l-.78.78a.6.6 0 0 0-.14.53c.08.53-.08 1.1-.5 1.52l-1 1a1.75 1.75 0 1 1-2.47-2.48l1-1c.42-.41.99-.57 1.52-.49.2.03.4 0 .53-.14l.78-.78c.42-.42.66-1 .66-1.6V3.22a.49.49 0 0 0-.22-.41ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7-2a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 1 0 0-2 8 8 0 0 0-8 8 1 1 0 0 0 1 1Z",
        i =
          "M3.11 8H6v10.82c0 .86.37 1.68 1 2.27.46.43 1.02.71 1.63.84A1 1 0 0 0 9 22h10a4 4 0 0 0 4-4v-1a2 2 0 0 0-2-2h-1V5a3 3 0 0 0-3-3H4.67c-.87 0-1.7.32-2.34.9-.63.6-1 1.42-1 2.28 0 .71.3 1.35.52 1.75a5.35 5.35 0 0 0 .48.7l.01.01h.01L3.11 7l-.76.65a1 1 0 0 0 .76.35Zm1.56-4c-.38 0-.72.14-.97.37-.24.23-.37.52-.37.81a1.69 1.69 0 0 0 .3.82H6v-.83c0-.29-.13-.58-.37-.8C5.4 4.14 5.04 4 4.67 4Zm5 13a3.58 3.58 0 0 1 0 3H19a2 2 0 0 0 2-2v-1H9.66ZM3.86 6.35ZM11 8a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Zm-1 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z",
        o =
          "M12 22a9 9 0 0 0 7.03-14.62l.68-.67a1 1 0 0 0-1.42-1.42l-.67.68A8.96 8.96 0 0 0 13 4.05V3h2a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2h2v1.05c-1.74.2-3.32.88-4.62 1.92l-.67-.68a1 1 0 0 0-1.42 1.42l.68.67A9 9 0 0 0 12 22Zm3.7-11.3a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 1.4 1.4l3-3Z",
        c =
          "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
        s =
          "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
        E =
          "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
        _ =
          "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
        f =
          "M17.93 1.51a.74.74 0 0 0-1.41 0l-1.13 3.47h-3.65a.74.74 0 0 0-.43 1.35l2.95 2.14-1.13 3.47a.74.74 0 0 0 1.14.83l2.95-2.15 2.96 2.15a.74.74 0 0 0 1.14-.83l-1.13-3.47 2.95-2.14a.74.74 0 0 0-.43-1.35h-3.65l-1.13-3.47ZM10.7 14.7a1 1 0 0 0-1.4-1.4l-8 8a1 1 0 1 0 1.4 1.4l8-8ZM9.7 8.3a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0ZM15.7 15.7a1 1 0 0 0-1.4-1.4l-6 6a1 1 0 1 0 1.4 1.4l6-6Z",
        d = 400,
        M = 120,
        h = 12,
        g = 96,
        Z = 32,
        T = 120,
        N = 260,
        m = 88,
        I = 99,
        A = 12,
        p = 18,
        v = ["gg sans", "sans-serif"],
        C = 500;
    },
    737583: function (t, e, n) {
      n.d(e, {
        J: function () {
          return l;
        },
        l: function () {
          return u;
        },
      }),
        n(47120);
      var a = n(693824),
        r = n(169040);
      function l(t) {
        let e,
          { canvas: n, badges: l, startPosition: u, maxWidth: i } = t;
        for (let { iconPath: t, text: o } of (n.setFont({
          size: 12,
          family: r.I8,
          weight: r.Ue,
          truncate: a.GX.None,
        }),
        l)) {
          let a = null != e ? e.w + e.x + r.PW : u,
            l = null != e ? e.w + e.x + r.PW + r.NC : u + r.NC;
          n.drawPath(t, { x: a, y: r.f0 }, !0, 0.6),
            (e = n.drawText(o, { x: l, y: r.m2, w: i }, !0));
        }
      }
      function u(t) {
        let {
          canvas: e,
          avatarSrcs: n,
          position: { x: r, y: l },
          avatarImageSize: u,
        } = t;
        for (let t = 0; t < n.length; t++)
          t < n.length - 1 &&
            e.clipRoundedRect(
              { x: r + (t + 1) * (u - 8) - 2, y: l - 1, w: u + 2, h: u + 2 },
              u / 2,
              !0,
            ),
            e.drawRoundedImage(
              n[t],
              { x: r + t * (u - 8), y: l },
              { w: u, h: u },
              50,
              { fillMode: a.JU.Cover },
            ),
            e.restoreContext();
      }
    },
    438226: function (t, e, n) {
      n.d(e, {
        HV: function () {
          return o;
        },
        IS: function () {
          return u;
        },
        VY: function () {
          return c;
        },
      }),
        n(627494),
        n(757143),
        n(201133);
      var a = n(5192),
        r = n(561308),
        l = n(689938);
      let u = (t, e) =>
          l.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: e.username,
            activity: t.extra.game_name,
          }),
        i = (t) => {
          let e = (0, r.kr)(t);
          return (0, r.Ol)(t)
            ? e
              ? l.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME
              : l.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME
            : e
              ? l.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME
              : l.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME;
        },
        o = (t, e, n) => {
          let r = i(t),
            l = a.ZP.getName(
              null == e ? void 0 : e.guild_id,
              null == e ? void 0 : e.id,
              n,
            ),
            u = t.extra.game_name;
          return r
            .plainFormat({ gameName: u, userName: l })
            .replaceAll("*", "");
        },
        c = (t) => {
          let { entry: e, channel: n, users: u, countOthers: i } = t;
          return (
            (0, r.kr)(e)
              ? l.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYING
              : l.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED
          )
            .plainFormat({
              gameName: e.extra.game_name,
              user1: a.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                u[0],
              ),
              user2: a.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                u[1],
              ),
              countOthers: i,
            })
            .replaceAll("*", "");
        };
    },
    897674: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return c;
        },
        g: function () {
          return o;
        },
      }),
        n(47120);
      var a = n(470079),
        r = n(442837),
        l = n(146282),
        u = n(327220),
        i = n(959580);
      function o(t, e) {
        let { types: n } = t;
        return !!(null == n || n.has(e.content_type)) || !1;
      }
      function c(t) {
        let { feed: e, filters: n } = (0, r.cj)([l.Z], () => ({
            feed: l.Z.getFeed(t),
            filters: l.Z.getFilters(),
          })),
          c = a.useMemo(() => {
            let t = null == e ? void 0 : e.entries.map((t) => t.content);
            return null != n
              ? null == t
                ? void 0
                : t.filter((t) => o(n, t))
              : t;
          }, [e, n]);
        return (c = (0, u.Z)(c)), (c = (0, i.Z)(c));
      }
    },
  },
]);
//# sourceMappingURL=6fdf586569c49ccf7b7b.js.map
