"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28128"],
  {
    442937: function (e) {
      e.exports = "/assets/709211f9d166e74b02a5.png";
    },
    485267: function (e, n, t) {
      t.d(n, {
        Bt: function () {
          return d;
        },
        Jn: function () {
          return c;
        },
        lY: function () {
          return u;
        },
      });
      var a = t(570140);
      t(100527), t(592125);
      var l = t(944486),
        i = t(914010);
      t(594174);
      var r = t(626135),
        s = t(71585);
      t(295955);
      var o = t(981631);
      let u = () => {
        a.Z.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
          r.default.track(o.rMx.MEMBERLIST_CONTENT_FEED_HIDDEN, {
            channel_id: l.Z.getChannelId(),
            guild_id: i.Z.getGuildId(),
            hidden: s.Z.hidden,
          });
      };
      function c() {
        a.Z.dispatch({ type: "GAME_PROFILE_OPEN" });
      }
      function d() {
        a.Z.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
      }
    },
    295955: function () {},
    327220: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      }),
        t(47120);
      var a = t(470079),
        l = t(442837),
        i = t(592125),
        r = t(9156);
      function s(e) {
        let n = (0, l.e7)([i.Z], () => i.Z.getPrivateChannelsVersion()),
          t = (0, l.e7)([i.Z], () => i.Z.getMutableDMsByUserIds(), [n]),
          s = (0, l.e7)([r.ZP], () => r.ZP.getMutedChannels(null)),
          o = a.useMemo(() => {
            let e = new Set();
            for (let n in t) {
              let a = t[n];
              null != a && s.has(a) && e.add(n);
            }
            return e;
          }, [t, s]);
        return a.useMemo(
          () =>
            null == e
              ? void 0
              : e.filter((e) => {
                  for (let n of e.participants) if (o.has(n)) return !1;
                  return !0;
                }),
          [e, o],
        );
      }
    },
    959580: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = t(442837),
        l = t(719247);
      let i = [];
      function r(e) {
        return (0, a.Wu)(
          [l.Z],
          () => (null == e ? i : e.filter(l.Z.canRenderContent)),
          [e],
        );
      }
    },
    69259: function (e, n, t) {
      t.d(n, {
        L: function () {
          return o;
        },
        e: function () {
          return s;
        },
      }),
        t(47120);
      var a = t(626135),
        l = t(162461),
        i = t(206583),
        r = t(981631);
      let s = function (e) {
          for (
            var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            t[i - 1] = arguments[i];
          let { trackingEnabled: r } = (0, l.nP)(
            "trackSampledContentEntryAnalytics:".concat(e),
          );
          return r ? a.default.track(e, ...t) : Promise.resolve();
        },
        o = (e, n) => {
          s(r.rMx.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
            request_id: n.requestId,
            item_id: n.entry.id,
            surface_type: i.Kd.GUILD_MEMBER_LIST,
            channel_id: n.channelId,
            guild_id: n.guildId,
            interaction_type: e,
            destination_channel_id: n.destinationChannelId,
            destination_guild_id: n.destinationGuildId,
            rich_presence_name: n.richPresenceName,
          });
        };
    },
    907152: function (e, n, t) {
      t.d(n, {
        C4: function () {
          return I;
        },
      }),
        t(653041),
        t(627494),
        t(757143),
        t(512722);
      var a = t(913527),
        l = t.n(a),
        i = t(705512);
      t(812206);
      var r = t(55e3);
      t(220082);
      var s = t(693824),
        o = t(690725);
      t(706454), t(594174);
      var u = t(70956);
      t(5192);
      var c = t(709054),
        d = t(561308);
      t(206295);
      var _ = t(737583),
        m = t(169040),
        E = t(689938);
      let T = (e, n) => ({
          AvatarImage1: e[0],
          ...(null != e[1] && { AvatarImage2: e[1] }),
          ...(null != e[2] && { AvatarImage3: e[2] }),
          ...(null != n && { ApplicationImage: n }),
        }),
        h = (e, n) => {
          let t = [{ iconPath: m.NM, text: n }],
            a = c.default.extractTimestamp(e.extra.application_id);
          if (
            (7 >= l()().diff(l()(a), "days") &&
              t.push({
                iconPath: m.As,
                text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE,
              }),
            (0, d.Ol)(e) &&
              t.push({
                iconPath: m.fO,
                text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
              }),
            (0, d.q_)(e))
          ) {
            let n = (0, d.vU)(e);
            t.push({
              iconPath: m.t1,
              text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
                days: n,
              }),
            });
          }
          (0, d.ig)(e) === i.o.GLOBAL &&
            t.push({
              iconPath: m.Op,
              text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
            });
          let r = (0, d.dw)(e);
          if (
            (null != r && t.push({ iconPath: m.Z, text: (0, d.GE)(r) }),
            (0, d.V5)(e))
          ) {
            let { text: n } = (0, d.zo)(e);
            null != n && t.push({ iconPath: m.Md, text: n });
          }
          if ((0, d.Jd)(e)) {
            let n = (0, d.yA)(e);
            if (null != n) {
              let e =
                E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format(
                  { hours: Math.round(n / u.Z.Seconds.HOUR) },
                );
              return [
                {
                  iconPath: m.eF,
                  text: ""
                    .concat(
                      E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME,
                      " — ",
                    )
                    .concat(e),
                },
              ];
            }
          }
          return t;
        },
        x = (e, n) => {
          let {
              timestamp: t,
              colors: a,
              description: l,
              entry: i,
              numAvatars: o,
            } = n,
            u = a.map((e, n) => ({ color: e, stop: n }));
          e.setSize({ w: m.nx, h: m.bg }, 4),
            e.drawRoundedGradientRect(
              u,
              { x: 0, y: m.bg },
              { x: m.nx, y: 0 },
              { x: 0, y: 0, h: m.bg, w: m.nx },
              8,
            ),
            e.setColor("white"),
            e.drawRoundedImage(
              "ApplicationImage",
              { x: m.sB, y: m.sB },
              { w: m.Pu, h: m.Pu },
              8,
            ) === s.vP.Failure &&
              e.drawPath(r.Cv, { x: m.sB, y: m.sB }, !0, 2 + 2 / 3);
          (0, _.l)({
            canvas: e,
            avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(
              0,
              o,
            ),
            position: { x: m.Iq, y: m.sB },
            avatarImageSize: m.$S,
          }),
            e.setColor("white"),
            e.setFont({
              size: 16,
              family: m.I8,
              weight: m.Ue,
              truncate: s.GX.Wrap,
            }),
            e.drawText(l, { x: m.Iq, y: 64, h: 32, w: m.kC }, !0);
          let c = h(i, t);
          (0, _.J)({
            canvas: e,
            badges: c,
            startPosition: m.Iq,
            maxWidth: m.kC,
          });
        },
        I = async (e) => {
          let {
              applicationImageSrc: n,
              entry: t,
              avatarSrcs: a,
              description: l,
              timestamp: i,
              colors: r,
              channelId: u,
            } = e,
            c = t.extra.activity_name,
            d = T(a, n);
          return await (0, o.f)({
            assetsToLoad: d,
            drawImage: (e) =>
              x(e, {
                timestamp: i,
                colors: r,
                description: l,
                entry: t,
                numAvatars: a.length,
              }),
            exportConfigs: {
              format: s.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(c, ".png").toLowerCase(),
              fileType: "png",
              channelId: u,
            },
          });
        };
    },
    919394: function (e, n, t) {
      t.d(n, {
        SO: function () {
          return I;
        },
      }),
        t(653041),
        t(512722);
      var a = t(913527),
        l = t.n(a),
        i = t(705512);
      t(812206);
      var r = t(55e3);
      t(220082);
      var s = t(693824),
        o = t(690725);
      t(706454), t(594174);
      var u = t(70956),
        c = t(709054),
        d = t(561308);
      t(206295);
      var _ = t(737583);
      t(438226);
      var m = t(169040),
        E = t(689938);
      let T = (e, n) => ({
          AvatarImage1: e[0],
          ...(null != e[1] && { AvatarImage2: e[1] }),
          ...(null != e[2] && { AvatarImage3: e[2] }),
          ...(null != n && { ApplicationImage: n }),
        }),
        h = (e, n) => {
          let t = [{ iconPath: m.NM, text: n }],
            a = c.default.extractTimestamp(e.extra.application_id);
          if (
            (7 >= l()().diff(l()(a), "days") &&
              t.push({
                iconPath: m.As,
                text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE,
              }),
            (0, d.Ol)(e) &&
              t.push({
                iconPath: m.fO,
                text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
              }),
            (0, d.q_)(e))
          ) {
            let n = (0, d.vU)(e);
            t.push({
              iconPath: m.t1,
              text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
                days: n,
              }),
            });
          }
          (0, d.ig)(e) === i.o.GLOBAL &&
            t.push({
              iconPath: m.Op,
              text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
            });
          let r = (0, d.dw)(e);
          if (
            (null != r && t.push({ iconPath: m.Z, text: (0, d.GE)(r) }),
            (0, d.V5)(e))
          ) {
            let { text: n } = (0, d.zo)(e);
            null != n && t.push({ iconPath: m.Md, text: n });
          }
          if ((0, d.Jd)(e)) {
            let n = (0, d.yA)(e);
            if (null != n) {
              let e =
                E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format(
                  { hours: Math.round(n / u.Z.Seconds.HOUR) },
                );
              return [
                {
                  iconPath: m.eF,
                  text: ""
                    .concat(
                      E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME,
                      " — ",
                    )
                    .concat(e),
                },
              ];
            }
          }
          return t;
        },
        x = (e, n) => {
          let {
              timestamp: t,
              colors: a,
              description: l,
              entry: i,
              numAvatars: o,
            } = n,
            u = a.map((e, n) => ({ color: e, stop: n }));
          e.setSize({ w: m.nx, h: m.bg }, 4),
            e.drawRoundedGradientRect(
              u,
              { x: 0, y: m.bg },
              { x: m.nx, y: 0 },
              { x: 0, y: 0, h: m.bg, w: m.nx },
              8,
            ),
            e.setColor("white"),
            e.drawRoundedImage(
              "ApplicationImage",
              { x: m.sB, y: m.sB },
              { w: m.Pu, h: m.Pu },
              8,
            ) === s.vP.Failure &&
              e.drawPath(r.Cv, { x: m.sB, y: m.sB }, !0, 2 + 2 / 3);
          (0, _.l)({
            canvas: e,
            avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(
              0,
              o,
            ),
            position: { x: m.Iq, y: m.sB },
            avatarImageSize: m.$S,
          }),
            e.setColor("white"),
            e.setFont({
              size: 16,
              family: m.I8,
              weight: m.Ue,
              truncate: s.GX.Wrap,
            }),
            e.drawText(l, { x: m.Iq, y: 64, h: 32, w: m.kC }, !0);
          let c = h(i, t);
          (0, _.J)({
            canvas: e,
            badges: c,
            startPosition: m.Iq,
            maxWidth: m.kC,
          });
        },
        I = async (e) => {
          let {
              applicationImageSrc: n,
              entry: t,
              avatarSrcs: a,
              description: l,
              timestamp: i,
              colors: r,
              channelId: u,
            } = e,
            c = t.extra.game_name,
            d = T(a, n);
          return await (0, o.f)({
            assetsToLoad: d,
            drawImage: (e) =>
              x(e, {
                timestamp: i,
                colors: r,
                description: l,
                entry: t,
                numAvatars: a.length,
              }),
            exportConfigs: {
              format: s.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(c, ".png").toLowerCase(),
              fileType: "png",
              channelId: u,
            },
          });
        };
    },
    169040: function (e, n, t) {
      t.d(n, {
        $S: function () {
          return I;
        },
        As: function () {
          return m;
        },
        I8: function () {
          return P;
        },
        Iq: function () {
          return N;
        },
        Md: function () {
          return o;
        },
        NC: function () {
          return f;
        },
        NM: function () {
          return a;
        },
        Op: function () {
          return _;
        },
        PW: function () {
          return v;
        },
        Pu: function () {
          return x;
        },
        Ue: function () {
          return M;
        },
        Z: function () {
          return c;
        },
        bg: function () {
          return T;
        },
        eF: function () {
          return u;
        },
        f0: function () {
          return C;
        },
        fO: function () {
          return l;
        },
        fj: function () {
          return s;
        },
        i6: function () {
          return i;
        },
        kC: function () {
          return p;
        },
        m2: function () {
          return g;
        },
        mb: function () {
          return r;
        },
        nx: function () {
          return E;
        },
        sB: function () {
          return h;
        },
        t1: function () {
          return d;
        },
      });
      let a =
          "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
        l =
          "M11.33 13.68c.41.27.93.27 1.34 0 1.73-1.1 6.2-4.3 6.2-8.02 0-2.02-1.6-3.66-3.59-3.66-1.46 0-2.42.58-3.28 1.44A4.33 4.33 0 0 0 8.72 2a3.63 3.63 0 0 0-3.6 3.66c0 3.72 4.48 6.92 6.2 8.02Z M3.93 13.84a.94.94 0 0 0-.93.94 5.6 5.6 0 0 0 6.48 5.6l1.02-.18v1.27c0 .85.67 1.53 1.5 1.53s1.5-.68 1.5-1.53V20.2l1.02.17A5.6 5.6 0 0 0 21 14.78a.94.94 0 0 0-.93-.94h-2.24a5.6 5.6 0 0 0-4.89 2.9L12 18.41l-.94-1.69a5.6 5.6 0 0 0-4.89-2.9H3.93Z",
        i =
          "M 4 1 C 2.3431 1 1 2.3431 1 4 V 13 C 1 14.6569 2.3431 16 4 16 H 20 C 21.6568 16 23 14.6569 23 13 V 4 C 23 2.3431 21.6568 1 20 1 H 4 Z M 6 18 C 5.4477 18 5 18.4477 5 19 C 5 19.5523 5.4477 20 6 20 H 18 C 18.5523 20 19 19.5523 19 19 C 19 18.4477 18.5523 18 18 18 H 6 Z",
        r =
          "M18.03 2.8a11 11 0 1 0 2.52 2.28c-.28-.34-.8-.13-.8.31v7.37c0 1-.4 1.95-1.1 2.65l-.78.78a.6.6 0 0 0-.14.53c.08.53-.08 1.1-.5 1.52l-1 1a1.75 1.75 0 1 1-2.47-2.48l1-1c.42-.41.99-.57 1.52-.49.2.03.4 0 .53-.14l.78-.78c.42-.42.66-1 .66-1.6V3.22a.49.49 0 0 0-.22-.41ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7-2a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 1 0 0-2 8 8 0 0 0-8 8 1 1 0 0 0 1 1Z",
        s =
          "M3.11 8H6v10.82c0 .86.37 1.68 1 2.27.46.43 1.02.71 1.63.84A1 1 0 0 0 9 22h10a4 4 0 0 0 4-4v-1a2 2 0 0 0-2-2h-1V5a3 3 0 0 0-3-3H4.67c-.87 0-1.7.32-2.34.9-.63.6-1 1.42-1 2.28 0 .71.3 1.35.52 1.75a5.35 5.35 0 0 0 .48.7l.01.01h.01L3.11 7l-.76.65a1 1 0 0 0 .76.35Zm1.56-4c-.38 0-.72.14-.97.37-.24.23-.37.52-.37.81a1.69 1.69 0 0 0 .3.82H6v-.83c0-.29-.13-.58-.37-.8C5.4 4.14 5.04 4 4.67 4Zm5 13a3.58 3.58 0 0 1 0 3H19a2 2 0 0 0 2-2v-1H9.66ZM3.86 6.35ZM11 8a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Zm-1 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z",
        o =
          "M12 22a9 9 0 0 0 7.03-14.62l.68-.67a1 1 0 0 0-1.42-1.42l-.67.68A8.96 8.96 0 0 0 13 4.05V3h2a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2h2v1.05c-1.74.2-3.32.88-4.62 1.92l-.67-.68a1 1 0 0 0-1.42 1.42l.68.67A9 9 0 0 0 12 22Zm3.7-11.3a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 1.4 1.4l3-3Z",
        u =
          "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
        c =
          "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
        d =
          "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
        _ =
          "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
        m =
          "M17.93 1.51a.74.74 0 0 0-1.41 0l-1.13 3.47h-3.65a.74.74 0 0 0-.43 1.35l2.95 2.14-1.13 3.47a.74.74 0 0 0 1.14.83l2.95-2.15 2.96 2.15a.74.74 0 0 0 1.14-.83l-1.13-3.47 2.95-2.14a.74.74 0 0 0-.43-1.35h-3.65l-1.13-3.47ZM10.7 14.7a1 1 0 0 0-1.4-1.4l-8 8a1 1 0 1 0 1.4 1.4l8-8ZM9.7 8.3a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0ZM15.7 15.7a1 1 0 0 0-1.4-1.4l-6 6a1 1 0 1 0 1.4 1.4l6-6Z",
        E = 400,
        T = 120,
        h = 12,
        x = 96,
        I = 32,
        N = 120,
        p = 260,
        C = 88,
        g = 99,
        v = 12,
        f = 18,
        P = ["gg sans", "sans-serif"],
        M = 500;
    },
    737583: function (e, n, t) {
      t.d(n, {
        J: function () {
          return i;
        },
        l: function () {
          return r;
        },
      }),
        t(47120);
      var a = t(693824),
        l = t(169040);
      function i(e) {
        let n,
          { canvas: t, badges: i, startPosition: r, maxWidth: s } = e;
        for (let { iconPath: e, text: o } of (t.setFont({
          size: 12,
          family: l.I8,
          weight: l.Ue,
          truncate: a.GX.None,
        }),
        i)) {
          let a = null != n ? n.w + n.x + l.PW : r,
            i = null != n ? n.w + n.x + l.PW + l.NC : r + l.NC;
          t.drawPath(e, { x: a, y: l.f0 }, !0, 0.6),
            (n = t.drawText(o, { x: i, y: l.m2, w: s }, !0));
        }
      }
      function r(e) {
        let {
          canvas: n,
          avatarSrcs: t,
          position: { x: l, y: i },
          avatarImageSize: r,
        } = e;
        for (let e = 0; e < t.length; e++)
          e < t.length - 1 &&
            n.clipRoundedRect(
              { x: l + (e + 1) * (r - 8) - 2, y: i - 1, w: r + 2, h: r + 2 },
              r / 2,
              !0,
            ),
            n.drawRoundedImage(
              t[e],
              { x: l + e * (r - 8), y: i },
              { w: r, h: r },
              50,
              { fillMode: a.JU.Cover },
            ),
            n.restoreContext();
      }
    },
    438226: function (e, n, t) {
      t.d(n, {
        HV: function () {
          return o;
        },
        IS: function () {
          return r;
        },
        VY: function () {
          return u;
        },
      }),
        t(627494),
        t(757143),
        t(201133);
      var a = t(5192),
        l = t(561308),
        i = t(689938);
      let r = (e, n) =>
          i.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: n.username,
            activity: e.extra.game_name,
          }),
        s = (e) => {
          let n = (0, l.kr)(e);
          return (0, l.Ol)(e)
            ? n
              ? i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME
              : i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME
            : n
              ? i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME
              : i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME;
        },
        o = (e, n, t) => {
          let l = s(e),
            i = a.ZP.getName(
              null == n ? void 0 : n.guild_id,
              null == n ? void 0 : n.id,
              t,
            ),
            r = e.extra.game_name;
          return l
            .plainFormat({ gameName: r, userName: i })
            .replaceAll("*", "");
        },
        u = (e) => {
          let { entry: n, channel: t, users: r, countOthers: s } = e;
          return (
            (0, l.kr)(n)
              ? i.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYING
              : i.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED
          )
            .plainFormat({
              gameName: n.extra.game_name,
              user1: a.ZP.getName(
                null == t ? void 0 : t.guild_id,
                null == t ? void 0 : t.id,
                r[0],
              ),
              user2: a.ZP.getName(
                null == t ? void 0 : t.guild_id,
                null == t ? void 0 : t.id,
                r[1],
              ),
              countOthers: s,
            })
            .replaceAll("*", "");
        };
    },
    256726: function (e, n, t) {
      t.d(n, {
        CR: function () {
          return E;
        },
        UU: function () {
          return _;
        },
        jE: function () {
          return d;
        },
      }),
        t(627494),
        t(757143);
      var a = t(884439),
        l = t(55e3),
        i = t(693824),
        r = t(690725),
        s = t(561308),
        o = t(737583),
        u = t(169040),
        c = t(689938);
      let d = (e) => {
          let { timestamp: n } = e;
          return [{ iconPath: u.mb, text: n }];
        },
        _ = (e) => {
          var n;
          let t =
            null === (n = (0, s.PJ)(e, a.N.AGGREGATE_COUNT)) || void 0 === n
              ? void 0
              : n.count;
          return null == t
            ? []
            : [
                {
                  iconPath: u.eF,
                  text: c.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format(
                    { count: t },
                  ),
                },
              ];
        },
        m = (e) => {
          let { avatarSrc: n, mediaImageSrc: t } = e;
          return { AvatarImage: n, ...(null != t && { MediaImage: t }) };
        },
        E = async (e) => {
          let {
              user: n,
              channel: t,
              mediaImageSrc: a,
              artist: s,
              description: c,
              colors: d,
              badges: _,
            } = e,
            E = m({
              avatarSrc: n.getAvatarURL(t.guild_id, 128),
              mediaImageSrc: a,
            }),
            T = s.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-");
          return await (0, r.f)({
            assetsToLoad: E,
            drawImage: (e) => {
              (function (e, n) {
                let t = n.map((e, n) => ({ color: e, stop: n }));
                e.setSize({ w: u.nx, h: u.bg }, 4),
                  e.drawRoundedGradientRect(
                    t,
                    { x: 0, y: u.bg },
                    { x: u.nx, y: 0 },
                    { x: 0, y: 0, h: u.bg, w: u.nx },
                    8,
                  );
              })(e, d),
                (function (e) {
                  e.drawRoundedImage(
                    "MediaImage",
                    { x: u.sB, y: u.sB },
                    { w: u.Pu, h: u.Pu },
                    8,
                    { fillMode: i.JU.Contain },
                  ) === i.vP.Failure &&
                    e.drawPath(l.Cv, { x: u.sB, y: u.sB }, !0, 2 + 2 / 3);
                })(e),
                (function (e) {
                  e.drawRoundedImage(
                    "AvatarImage",
                    { x: u.Iq, y: u.sB },
                    { w: u.$S, h: u.$S },
                    50,
                  );
                })(e),
                (function (e, n) {
                  e.setColor("white"),
                    e.setFont({
                      size: 16,
                      family: u.I8,
                      weight: u.Ue,
                      truncate: i.GX.Wrap,
                    }),
                    e.drawText(n, { x: u.Iq, y: 64, h: 32, w: u.kC }, !0);
                })(e, c),
                (0, o.J)({
                  canvas: e,
                  badges: _,
                  startPosition: u.Iq,
                  maxWidth: u.kC,
                });
            },
            exportConfigs: {
              format: i.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(T, ".png").toLowerCase(),
              fileType: "png",
              channelId: t.id,
            },
          });
        };
    },
    644810: function (e, n, t) {
      t.d(n, {
        B: function () {
          return c;
        },
      }),
        t(653041);
      var a = t(55e3),
        l = t(693824),
        i = t(690725),
        r = t(737583),
        s = t(169040);
      let o = (e, n, t) => ({
          AvatarImage: e,
          ...(null != n && { MediaImage: n }),
          ...(null != t && { ApplicationImage: t }),
        }),
        u = (e, n) => {
          let t = [{ iconPath: s.i6, text: e }];
          return null != n && t.push({ iconPath: s.fj, text: n }), t;
        },
        c = async (e) => {
          let {
              mediaImageSrc: n,
              entry: t,
              avatarSrc: c,
              description: d,
              timestamp: _,
              episodeDescription: m,
              colors: E,
              channelId: T,
            } = e,
            h = t.extra.media_title,
            x = o(c, n);
          return await (0, i.f)({
            assetsToLoad: x,
            drawImage: (e) => {
              let n = E.map((e, n) => ({ color: e, stop: n }));
              e.setSize({ w: s.nx, h: s.bg }, 4),
                e.drawRoundedGradientRect(
                  n,
                  { x: 0, y: s.bg },
                  { x: s.nx, y: 0 },
                  { x: 0, y: 0, h: s.bg, w: s.nx },
                  8,
                ),
                e.setColor("white");
              let t = e.drawRoundedImage(
                "MediaImage",
                { x: s.sB, y: s.sB },
                { w: s.Pu, h: s.Pu },
                8,
                { fillMode: l.JU.Contain },
              );
              t === l.vP.Failure &&
                (t = e.drawRoundedImage(
                  "ApplicationImage",
                  { x: s.sB, y: s.sB },
                  { w: s.Pu, h: s.Pu },
                  8,
                )),
                t === l.vP.Failure &&
                  e.drawPath(a.Cv, { x: s.sB, y: s.sB }, !0, 2 + 2 / 3),
                e.drawRoundedImage(
                  "AvatarImage",
                  { x: s.Iq, y: s.sB },
                  { w: s.$S, h: s.$S },
                  50,
                ),
                e.setFont({
                  size: 16,
                  family: s.I8,
                  weight: s.Ue,
                  truncate: l.GX.Wrap,
                }),
                e.drawText(d, { x: s.Iq, y: 64, h: 32, w: s.kC }, !0);
              let i = u(_, m);
              (0, r.J)({
                canvas: e,
                badges: i,
                startPosition: s.Iq,
                maxWidth: s.kC,
              });
            },
            exportConfigs: {
              format: l.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(h, ".png").toLowerCase(),
              fileType: "png",
              channelId: T,
            },
          });
        };
    },
    370370: function (e, n, t) {
      var a = t(735250),
        l = t(470079),
        i = t(379357),
        r = t(442550),
        s = t(297781),
        o = t(443487),
        u = t(182022);
      let c = [s.OV, s.EE, s.Af, s.U9, s.n8, s.pQ];
      n.Z = l.memo((e) => {
        let { entry: n, channel: t, selected: l, hovered: d } = e,
          { largeImage: _ } = (0, i.rv)({ entry: n });
        return (0, a.jsxs)(o.Zb, {
          selected: l,
          children: [
            (0, a.jsxs)(o.e$, {
              children: [
                (0, a.jsx)(o.F9, {
                  entry: n,
                  channelId: t.id,
                  guildId: t.guild_id,
                }),
                (0, a.jsx)(o.ll, { children: n.extra.activity_name }),
                (0, a.jsx)(s.Gk, {
                  location: s.Gt.CARD,
                  children: c.map((e, t) =>
                    (0, a.jsx)(e, { entry: n, hovered: d }, t),
                  ),
                }),
              ],
            }),
            (0, a.jsx)(r.f, {
              alt: null == _ ? void 0 : _.alt,
              src: null == _ ? void 0 : _.src,
              size: 48,
              className: u.thumbnail,
            }),
          ],
        });
      });
    },
    107062: function (e, n, t) {
      t(627494), t(757143);
      var a = t(735250),
        l = t(470079),
        i = t(442837),
        r = t(481060),
        s = t(620662),
        o = t(841784),
        u = t(429589),
        c = t(499254),
        d = t(827498),
        _ = t(812236),
        m = t(541716),
        E = t(706454),
        T = t(823379),
        h = t(5192),
        x = t(379357),
        I = t(192918),
        N = t(561308),
        p = t(907152),
        C = t(206295),
        g = t(297781),
        v = t(591853),
        f = t(797342),
        P = t(981631),
        M = t(689938);
      let Z = (e, n) =>
          M.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: n.username,
            activity: e.extra.activity_name,
          }),
        A = (e, n, t) => {
          let a = M.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME,
            l = h.ZP.getName(n.guild_id, n.id, t),
            i = e.extra.activity_name;
          return a
            .plainFormat({ gameName: i, userName: l })
            .replaceAll("*", "");
        },
        S = (e) => {
          let { entry: n, channel: t, users: a, countOthers: l } = e;
          return M.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED.plainFormat(
            {
              gameName: n.extra.activity_name,
              user1: h.ZP.getName(
                null == t ? void 0 : t.guild_id,
                null == t ? void 0 : t.id,
                a[0],
              ),
              user2: h.ZP.getName(
                null == t ? void 0 : t.guild_id,
                null == t ? void 0 : t.id,
                a[1],
              ),
              countOthers: l,
            },
          ).replaceAll("*", "");
        },
        O = (e) => {
          let {
              channel: n,
              entry: t,
              onReaction: c,
              onVoiceChannelPreview: d,
              appLoading: _,
              handleViewActivityClick: m,
            } = e,
            { largeImage: h } = (0, x.rv)({ entry: t }),
            {
              user: O,
              details: j,
              activity: R,
              embeddedActivity: y,
            } = (0, f.n)(t),
            { primaryColor: L, secondaryColor: w } = (0, C.Z)(
              null == h ? void 0 : h.src,
            ),
            B = (0, i.e7)([E.default], () => E.default.locale),
            {
              displayParticipants: U,
              participant1: b,
              participant2: k,
              numOtherParticipants: D,
            } = (0, I.Z)(t, 3),
            G = l.useCallback(
              (e) => {
                if (
                  (null == h ? void 0 : h.src) == null ||
                  null == n ||
                  null == O
                )
                  return;
                let a =
                  D > 0
                    ? S({ entry: t, channel: n, users: [b, k], countOthers: D })
                    : A(t, n, O);
                return (0, p.C4)({
                  entry: t,
                  applicationImageSrc: null == h ? void 0 : h.src,
                  avatarSrcs: U.map((e) => e.getAvatarURL(n.guild_id, 128)),
                  description: a,
                  timestamp: (0, N.yh)(t, B),
                  colors: [L, w],
                  channelId: e,
                });
              },
              [null == h ? void 0 : h.src, n, U, t, B, D, b, k, L, w, O],
            );
          if (null == O) return null;
          let H = (0, a.jsx)(g.PZ, { location: g.Gt.POPOUT, entry: t }),
            V = (0, a.jsx)(v.wG, {
              channel: n,
              userDescription: (0, N.kr)(t)
                ? M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2
                : M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
              title: t.extra.activity_name,
              subtitle: j,
              badges: H,
              entry: t,
              onClickTitle: m,
              onClickSubtitle: m,
              onClickThumbnail: m,
            }),
            Y = (0, s.Z)(R, P.xjy.JOIN) || (0, o.Z)(R),
            F = Y
              ? (0, a.jsx)(u.Z, {
                  isEmbedded: (0, o.Z)(R),
                  embeddedActivity: y,
                  activity: R,
                  user: O,
                  ButtonComponent: (e) =>
                    (0, a.jsx)(v.Ll, { IconComponent: r.DoorEnterIcon, ...e }),
                })
              : null,
            W = (0, a.jsx)(v.Ll, {
              onClick: m,
              IconComponent: r.AppsIcon,
              disabled: _,
              children: _
                ? M.Z.Messages.DEFAULT_INPUT_PLACEHOLDER
                : M.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY,
            }),
            z = [Y ? F : W].filter(T.lm);
          return (0, a.jsxs)(v.yR, {
            children: [
              V,
              (0, a.jsx)(v.St, {
                children: (0, a.jsx)(v.WT, {
                  onReaction: c,
                  onVoiceChannelPreview: d,
                  user: O,
                  channel: n,
                  generateReactionImage: G,
                  reactionImageAltText: Z(t, O),
                  entry: t,
                  buttons: z,
                }),
              }),
            ],
          });
        },
        j = (e) => (0, a.jsx)(O, { ...e }),
        R = (e) => {
          let { channel: n, entry: t } = e;
          l.useEffect(() => {
            (0, _.ZP)(n.id, t.extra.application_id);
          }, [t.extra.application_id, n]);
          let { loading: i } = (0, _.SY)(n, t.extra.application_id);
          return (0, a.jsx)(O, {
            ...e,
            appLoading: i,
            handleViewActivityClick: () => {
              if (!i)
                c._(d._b.TEXT, m.I.NORMAL, {
                  applicationId: t.extra.application_id,
                });
            },
          });
        };
      n.ZP = function (e) {
        let { channel: n, ...t } = e;
        return null == n
          ? (0, a.jsx)(j, { ...t })
          : (0, a.jsx)(R, { channel: n, ...t });
      };
    },
    178762: function (e, n, t) {
      t.d(n, {
        J: function () {
          return L;
        },
        YN: function () {
          return O;
        },
        iZ: function () {
          return j;
        },
      }),
        t(47120);
      var a = t(735250),
        l = t(470079),
        i = t(392711),
        r = t.n(i),
        s = t(91192),
        o = t(876215),
        u = t(442837),
        c = t(481060),
        d = t(239091),
        _ = t(607070),
        m = t(439170),
        E = t(594174),
        T = t(69259),
        h = t(370370),
        x = t(107062),
        I = t(91140),
        N = t(227172),
        p = t(551228),
        C = t(678869),
        g = t(278399),
        v = t(886217),
        f = t(555672),
        P = t(644548),
        M = t(335326),
        Z = t(268010),
        A = t(797342),
        S = t(206583);
      let O = 72;
      function j(e) {
        return (null == e ? void 0 : e.type) === m.so.CONTENT_INVENTORY ? O : 0;
      }
      let R = (e) => {
          let { entry: n, ...t } = e;
          switch (n.content_type) {
            case o.s.PLAYED_GAME:
              return (0, a.jsx)(I.Z, { ...t, entry: n });
            case o.s.WATCHED_MEDIA:
              return (0, a.jsx)(M.Z, { ...t, entry: n });
            case o.s.TOP_GAME:
              return (0, a.jsx)(f.ZP, { ...t, entry: n });
            case o.s.TOP_ARTIST:
              return (0, a.jsx)(g.ZP, { ...t, entry: n });
            case o.s.LISTENED_SESSION:
              return (0, a.jsx)(p.ZP, { ...t, entry: n });
            case o.s.LAUNCHED_ACTIVITY:
              return (0, a.jsx)(h.Z, { ...t, entry: n });
            default:
              return null;
          }
        },
        y = (e) => {
          let { requestId: n, closePopout: t, ...l } = e;
          return (0, a.jsx)(L, {
            onReaction: (e, a) => {
              (0, T.L)(e, {
                entry: l.entry,
                channelId: l.channel.id,
                guildId: l.channel.guild_id,
                requestId: n,
                destinationChannelId: a.id,
                destinationGuildId: a.guild_id,
              }),
                t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e, t) => {
              (0, T.L)(S.xP.VOICE_CHANNEL_PREVIEWED, {
                entry: l.entry,
                channelId: l.channel.id,
                guildId: l.channel.guild_id,
                requestId: n,
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
                richPresenceName: t,
              });
            },
            ...l,
          });
        },
        L = (e) => {
          let { entry: n, ...t } = e;
          switch (n.content_type) {
            case o.s.PLAYED_GAME:
              return (0, a.jsx)(N.Z, { ...t, entry: n });
            case o.s.WATCHED_MEDIA:
              return (0, a.jsx)(Z.Z, { ...t, entry: n });
            case o.s.TOP_GAME:
              return (0, a.jsx)(P.Z, { ...t, entry: n });
            case o.s.TOP_ARTIST:
              return (0, a.jsx)(v.Z, { ...t, entry: n });
            case o.s.LISTENED_SESSION:
              return (0, a.jsx)(C.Z, { ...t, entry: n });
            case o.s.LAUNCHED_ACTIVITY:
              return (0, a.jsx)(x.ZP, { ...t, entry: n });
            default:
              return null;
          }
        };
      n.ZP = l.memo((e) => {
        var n;
        let { index: i, ...o } = e,
          [m, h] = l.useState("default"),
          x = (0, s.JA)("".concat(i)),
          I =
            null === (n = E.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.isStaff(),
          { isRich: N, appName: p } = (0, A.n)(o.entry),
          C = {
            entry: o.entry,
            channelId: o.channel.id,
            guildId: o.channel.guild_id,
            requestId: o.requestId,
            richPresenceName: N ? p : void 0,
          },
          g = l.useRef(!1),
          [v, f] = l.useState(!1),
          [P, M] = l.useState(!1),
          Z = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled);
        l.useEffect(() => {
          v && Z && M(!0);
        }, [v, Z]);
        let O = l.useCallback(
            (e) => {
              if (!!I)
                (0, d.jW)(e, async () => {
                  let { default: e } = await t.e("153").then(t.bind(t, 330150));
                  return () =>
                    (0, a.jsx)(e, { entry: o.entry, requestId: o.requestId });
                });
            },
            [o, I],
          ),
          j = l.useCallback(() => {
            h(String(Date.now()));
          }, []),
          L = l.useCallback(
            r().throttle(
              (e) => {
                (0, T.L)(S.xP.CARD_POPOUT_OPEN, e);
              },
              2e3,
              { leading: !0, trailing: !1 },
            ),
            [],
          ),
          w = () => {
            (g.current = !1),
              setTimeout(() => {
                !g.current && (f(!1), M(Z));
              }, 100);
          };
        return (0, a.jsx)("div", {
          onMouseEnter: () => {
            (g.current = !0),
              setTimeout(() => {
                g.current && f(!0), L(C);
              }, 100);
          },
          onMouseLeave: w,
          children: (0, a.jsx)(c.Popout, {
            renderPopout: (e) => {
              let { closePopout: n } = e;
              return (0, a.jsx)(y, {
                closePopout: n,
                updatePopoutPosition: j,
                ...o,
              });
            },
            position: "left",
            shouldShow: v,
            positionKey: m,
            onRequestOpen: () => L(C),
            onRequestClose: () => {
              P && w();
            },
            spacing: 8,
            children: (e, n) => {
              let { isShown: t } = n;
              return (0, a.jsx)(c.Clickable, {
                ...e,
                ...x,
                focusProps: {
                  offset: { top: 4, bottom: 4, left: 4, right: 4 },
                },
                onClick: () => {
                  !v && f(!0);
                },
                onContextMenu: O,
                children: (0, a.jsx)(R, {
                  ...o,
                  selected: t,
                  hovered: g.current,
                }),
              });
            },
          }),
        });
      });
    },
    227172: function (e, n, t) {
      t.d(n, {
        v: function () {
          return j;
        },
      });
      var a = t(735250),
        l = t(470079),
        i = t(758713),
        r = t(442837),
        s = t(481060),
        o = t(620662),
        u = t(841784),
        c = t(420660),
        d = t(429589),
        _ = t(757182),
        m = t(706454),
        E = t(374129),
        T = t(639351),
        h = t(823379),
        x = t(379357),
        I = t(192918),
        N = t(22211),
        p = t(561308),
        C = t(919394),
        g = t(438226),
        v = t(206295),
        f = t(91140),
        P = t(297781),
        M = t(591853),
        Z = t(410441),
        A = t(797342),
        S = t(981631),
        O = t(689938);
      let j = {
        [i.z.DESKTOP]: null,
        [i.z.LINUX]: null,
        [i.z.MACOS]: null,
        [i.z.NINTENDO]: null,
        [i.z.IOS]: null,
        [i.z.ANDROID]: null,
        [i.z.XBOX]: T.Z,
        [i.z.PLAYSTATION]: E.Z,
      };
      n.Z = (e) => {
        let {
            channel: n,
            entry: t,
            disableGameProfileLinks: i,
            onReaction: E,
            onVoiceChannelPreview: T,
            onUserPopoutClosed: R,
          } = e,
          { largeImage: y } = (0, x.rv)({ entry: t }),
          { user: L, details: w, appName: B, activity: U } = (0, A.n)(t),
          { primaryColor: b, secondaryColor: k } = (0, v.Z)(
            null == y ? void 0 : y.src,
          ),
          D = (0, r.e7)([m.default], () => m.default.locale),
          { streamPreviewUrl: G, stream: H } = (0, N.Z)(t),
          {
            displayParticipants: V,
            participant1: Y,
            participant2: F,
            numOtherParticipants: W,
          } = (0, I.Z)(t, 3),
          z = l.useCallback(
            (e) => {
              if (
                (null == y ? void 0 : y.src) == null ||
                null == n ||
                null == L
              )
                return;
              let a =
                W > 0
                  ? (0, g.VY)({
                      entry: t,
                      channel: n,
                      users: [Y, F],
                      countOthers: W,
                    })
                  : (0, g.HV)(t, n, L);
              return (0, C.SO)({
                entry: t,
                applicationImageSrc: null == y ? void 0 : y.src,
                avatarSrcs: V.map((e) => e.getAvatarURL(n.guild_id, 128)),
                description: a,
                timestamp: (0, p.yh)(t, D),
                colors: [b, k],
                channelId: e,
              });
            },
            [null == y ? void 0 : y.src, n, V, t, D, W, Y, F, b, k, L],
          );
        if (null == L) return null;
        let q = null != t.extra.platform ? j[t.extra.platform] : null,
          K = (0, a.jsx)(P.Gk, {
            location: null == G ? P.Gt.POPOUT : P.Gt.STREAMING_POPOUT,
            children: f.W.map((e, n) => (0, a.jsx)(e, { entry: t }, n)),
          }),
          J =
            null == G
              ? (0, a.jsx)(M.wG, {
                  channel: n,
                  headerIcons:
                    null == q
                      ? null
                      : (0, a.jsx)(Z.Z, {
                          Icon: q,
                          "aria-label":
                            O.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
                        }),
                  userDescription: (0, p.kr)(t)
                    ? O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2
                    : O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                  title: B,
                  subtitle: w,
                  badges: K,
                  entry: t,
                  disableGameProfileLinks: i,
                  onUserPopoutClosed: R,
                })
              : (0, a.jsx)(M.jL, {
                  channel: n,
                  streamPreviewSrc: G,
                  title: t.extra.game_name,
                  subtitle: w,
                  badges: K,
                  userDescription:
                    O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING_V2,
                  entry: t,
                  stream: H,
                  onUserPopoutClosed: R,
                }),
          X =
            (0, o.Z)(U, S.xjy.JOIN) || (0, u.Z)(U)
              ? (0, a.jsx)(d.Z, {
                  activity: U,
                  user: L,
                  ButtonComponent: (e) =>
                    (0, a.jsx)(M.Ll, {
                      IconComponent: s.GameControllerIcon,
                      ...e,
                    }),
                })
              : null,
          $ = [
            X,
            (0, c.Z)(U)
              ? (0, a.jsx)(_.Z, {
                  activity: U,
                  ButtonComponent: (e) =>
                    (0, a.jsx)(M.Ll, { IconComponent: s.EyeIcon, ...e }),
                })
              : null,
          ].filter(h.lm);
        return (0, a.jsxs)(M.yR, {
          children: [
            J,
            (0, a.jsx)(M.St, {
              children: (0, a.jsx)(M.WT, {
                onReaction: E,
                onVoiceChannelPreview: T,
                user: L,
                channel: n,
                generateReactionImage: z,
                reactionImageAltText: (0, g.IS)(t, L),
                entry: t,
                buttons: $,
              }),
            }),
          ],
        });
      };
    },
    678869: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return R;
        },
      }),
        t(627494),
        t(757143),
        t(653041);
      var a = t(735250),
        l = t(470079),
        i = t(423875),
        r = t(442837),
        s = t(902704),
        o = t(481060),
        u = t(952164),
        c = t(768419),
        d = t(424678),
        _ = t(239470),
        m = t(894344),
        E = t(314897),
        T = t(908841),
        h = t(5192),
        x = t(379357),
        I = t(561308),
        N = t(256726),
        p = t(206295),
        C = t(551228),
        g = t(591853),
        v = t(371991),
        f = t(410441),
        P = t(981631),
        M = t(616922),
        Z = t(689938),
        A = t(346292),
        S = t(164384);
      let O = (e, n, t) => {
        let { artist: a, media: l } = e,
          i =
            Z.Z.Messages
              .MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST,
          r = h.ZP.getName(n.guild_id, n.id, t);
        return i
          .plainFormat({ artist: a, userName: r, media: l })
          .replaceAll("*", "");
      };
      function j(e) {
        let { activity: n } = e,
          t = n.timestamps,
          i = (0, v.tS)(),
          { durationTimestamp: r, seekBarStyles: s } = l.useMemo(() => {
            var e;
            let { start: t, end: a } =
              null !== (e = n.timestamps) && void 0 !== e ? e : {};
            if (null == t || null == a) return {};
            let l = Math.min(a, i),
              r = a - t,
              s = Math.floor((Math.max(l - t, 0) / r) * 100);
            return {
              seekBarStyles: { width: "".concat(s, "%") },
              durationTimestamp: (0, I.T_)({ start: 0 }, r),
            };
          }, [n, i]);
        return null == s
          ? null
          : (0, a.jsxs)("div", {
              className: A.listeningTimeline,
              children: [
                (0, a.jsx)(v.x3, { entry: t }),
                (0, a.jsx)("div", {
                  className: A.seekBarContainer,
                  children: (0, a.jsx)("div", {
                    className: A.seekBarFill,
                    style: s,
                  }),
                }),
                (0, a.jsx)(o.Text, {
                  className: A.timestamp,
                  variant: "text-xs/normal",
                  tabularNumbers: !0,
                  color: void 0,
                  children: r,
                }),
              ],
            });
      }
      function R(e) {
        var n, t, h;
        let v,
          A,
          R,
          {
            channel: y,
            entry: L,
            closePopout: w,
            onReaction: B,
            onVoiceChannelPreview: U,
          } = e,
          { largeImage: b } = (0, x.rv)({ entry: L }),
          {
            activity: k,
            currentEntry: D,
            artist: G,
            title: H,
            user: V,
          } = (0, C.pi)(L),
          { primaryColor: Y, secondaryColor: F } = (0, p.Z)(
            null == b ? void 0 : b.src,
          ),
          W = (0, r.e7)(
            [c.Z, E.default],
            () =>
              (null == k ? void 0 : k.type) === P.IIU.LISTENING && null != V
                ? (0, _.Z)(c.Z, E.default, V, k)
                : void 0,
            [k, V],
            s.Z,
          ),
          z = l.useCallback(() => {
            var e;
            if (null == y || null == V) return;
            let n =
                null === (e = k.timestamps) || void 0 === e ? void 0 : e.start,
              t = (0, I.T_)(null != n ? { start: n } : L, Date.now());
            return (0, N.CR)({
              user: V,
              channel: y,
              mediaImageSrc: null == b ? void 0 : b.src,
              artist: G,
              description: O({ artist: G, media: H }, y, V),
              colors: [Y, F],
              badges: (0, N.jE)({ timestamp: t }),
            });
          }, [k, G, y, L, null == b ? void 0 : b.src, Y, F, H, V]);
        if (null == k || null == D) return null;
        let q = G,
          K = [];
        if (D.media.provider === i.p.SPOTIFY) {
          (A = () => {
            (0, u.aG)(k);
          }),
            (R = () => {
              (0, u.Z5)(k, V.id);
            }),
            (v = () => {
              (0, u.aG)(k);
            });
          (q = (0, a.jsx)(d.Z, {
            artists: G,
            canOpen: null != k.sync_id,
            linkClassName: S.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
              (0, u.d$)(k, V.id, e);
            },
          })),
            (null == W ? void 0 : W.syncDisabled) === !1 &&
              K.push(
                (0, a.jsx)(
                  g.Ll,
                  {
                    onClick: () => {
                      (0, m.Z)(W, M.kG.USER_ACTIVITY_SYNC), w();
                    },
                    IconComponent: o.UserPlayIcon,
                    children:
                      Z.Z.Messages
                        .ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
                  },
                  "listen-along",
                ),
              );
        }
        let J = (0, a.jsx)(g.wG, {
          onClickThumbnail: R,
          channel: y,
          entry: L,
          headerIcons:
            D.media.provider === i.p.SPOTIFY
              ? (0, a.jsx)(f.Z, {
                  onClick: v,
                  "aria-label":
                    Z.Z.Messages
                      .ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
                  Icon: T.Z,
                })
              : null,
          userDescription: (0, I.kr)(L)
            ? Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING_V2
            : Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
          title: H,
          onClickTitle: A,
          subtitle: q,
          badges: null,
          children:
            (null === (n = k.timestamps) || void 0 === n ? void 0 : n.start) !=
              null && (0, a.jsx)(j, { activity: k }),
        });
        return (0, a.jsxs)(g.yR, {
          children: [
            J,
            (0, a.jsx)(g.St, {
              children: (0, a.jsx)(g.WT, {
                onReaction: B,
                onVoiceChannelPreview: U,
                user: V,
                channel: y,
                generateReactionImage: z,
                reactionImageAltText:
                  ((t = G),
                  (h = V),
                  Z.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format(
                    { username: h.username, activity: t },
                  )),
                entry: L,
                buttons: K,
              }),
            }),
          ],
        });
      }
    },
    886217: function (e, n, t) {
      t(627494), t(757143);
      var a = t(735250),
        l = t(470079),
        i = t(317261),
        r = t(423875),
        s = t(442837),
        o = t(18323),
        u = t(594174),
        c = t(908841),
        d = t(823379),
        _ = t(5192),
        m = t(561308),
        E = t(256726),
        T = t(206295),
        h = t(278399),
        x = t(297781),
        I = t(591853),
        N = t(410441),
        p = t(616922),
        C = t(689938);
      let g = (e, n, t, a) => {
          let l = (function (e) {
              if (e === i._.WEEK)
                return C.Z.Messages
                  .MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT;
            })(a),
            r = _.ZP.getName(n.guild_id, n.id, t),
            s = e.extra.artist.name;
          return l.plainFormat({ artist: s, userName: r }).replaceAll("*", "");
        },
        v = (e, n) =>
          C.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_TOP_ARTIST.format({
            username: n.username,
            artist: e.extra.artist.name,
          });
      n.Z = (e) => {
        let {
            channel: n,
            entry: t,
            onReaction: i,
            onVoiceChannelPreview: _,
          } = e,
          { parent_title: f, provider: P, image_url: M } = t.extra.media,
          Z = t.extra.artist.name,
          A = (0, s.e7)([u.default], () => u.default.getUser(t.author_id)),
          { primaryColor: S, secondaryColor: O } = (0, T.Z)(M),
          j = (0, m.Nq)(t),
          R = l.useCallback(() => {
            if (null == n || null == A || !(0, d.Hi)(j, h.y9)) return;
            let e = g(t, n, A, j);
            return (0, E.CR)({
              user: A,
              channel: n,
              mediaImageSrc: M,
              artist: Z,
              description: e,
              colors: [S, O],
              badges: (0, E.UU)(t),
            });
          }, [M, Z, n, t, S, j, O, A]);
        if (null == A || !(0, d.Hi)(j, h.y9)) return null;
        let y = () => {
          let e = p.Hw.ALBUM,
            n = o.Z.isProtocolRegistered()
              ? p.C7.PLAYER_OPEN(e, t.extra.media.external_parent_id)
              : p.C7.WEB_OPEN(e, t.extra.media.external_parent_id);
          window.open(n);
        };
        return (0, a.jsxs)(I.yR, {
          children: [
            (0, a.jsx)(I.wG, {
              onClickTitle: y,
              onClickSubtitle: () => {
                let e = p.Hw.ARTIST,
                  n = o.Z.isProtocolRegistered()
                    ? p.C7.PLAYER_OPEN(e, t.extra.artist.external_id)
                    : p.C7.WEB_OPEN(e, t.extra.artist.external_id);
                window.open(n);
              },
              onClickThumbnail: y,
              channel: n,
              entry: t,
              headerIcons:
                P === r.p.SPOTIFY
                  ? (0, a.jsx)(N.Z, {
                      Icon: c.Z,
                      "aria-label": C.Z.Messages.SPOTIFY,
                    })
                  : null,
              userDescription:
                C.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
              title: f,
              subtitle: Z,
              badges: (0, a.jsx)(x.Gk, {
                location: x.Gt.POPOUT,
                children: h.Ho.map((e, n) => (0, a.jsx)(e, { entry: t }, n)),
              }),
            }),
            (0, a.jsx)(I.St, {
              children: (0, a.jsx)(I.WT, {
                onReaction: i,
                onVoiceChannelPreview: _,
                user: A,
                channel: n,
                generateReactionImage: R,
                reactionImageAltText: v(t, A),
                entry: t,
              }),
            }),
          ],
        });
      };
    },
    644548: function (e, n, t) {
      t(627494), t(757143);
      var a = t(735250),
        l = t(470079),
        i = t(317261),
        r = t(70956),
        s = t(5192),
        o = t(379357),
        u = t(561308),
        c = t(919394),
        d = t(206295),
        _ = t(227172),
        m = t(555672),
        E = t(297781),
        T = t(591853),
        h = t(410441),
        x = t(797342),
        I = t(689938);
      let N = (e, n, t, a) => {
          let l = (function (e) {
              if (e === i._.WEEK)
                return I.Z.Messages
                  .MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT;
            })(a),
            r = s.ZP.getName(n.guild_id, n.id, t),
            o = e.extra.game_name;
          return l
            .plainFormat({ gameName: o, userName: r })
            .replaceAll("*", "");
        },
        p = (e, n) =>
          I.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: n.username,
            activity: e.extra.game_name,
          });
      n.Z = (e) => {
        let {
            channel: n,
            entry: t,
            disableGameProfileLinks: i,
            onReaction: s,
            onVoiceChannelPreview: C,
          } = e,
          { largeImage: g } = (0, o.rv)({ entry: t }),
          { user: v, details: f, appName: P } = (0, x.n)(t),
          { primaryColor: M, secondaryColor: Z } = (0, d.Z)(
            null == g ? void 0 : g.src,
          ),
          A = (0, u.yA)(t),
          S = (0, u.Nq)(t),
          O = l.useCallback(
            (e) => {
              if (
                null != n &&
                null != v &&
                null != A &&
                null != S &&
                !!(0, m.qy)(S)
              )
                return (0, c.SO)({
                  entry: t,
                  applicationImageSrc: null == g ? void 0 : g.src,
                  avatarSrcs: [
                    v.getAvatarURL(null == n ? void 0 : n.guild_id, 128),
                  ],
                  description: N(t, n, v, S),
                  timestamp:
                    I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format(
                      { hours: Math.round(A / r.Z.Seconds.HOUR) },
                    ),
                  colors: [M, Z],
                  channelId: e,
                });
            },
            [null == g ? void 0 : g.src, n, A, t, M, S, Z, v],
          );
        if (null == v || null == A || null == S || !(0, m.qy)(S)) return null;
        let j = null != t.extra.platform ? _.v[t.extra.platform] : null;
        return (0, a.jsxs)(T.yR, {
          children: [
            (0, a.jsx)(T.wG, {
              channel: n,
              headerIcons:
                null == j
                  ? null
                  : (0, a.jsx)(h.Z, {
                      Icon: j,
                      "aria-label":
                        I.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
                    }),
              entry: t,
              userDescription:
                I.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
              title: P,
              subtitle: f,
              badges: (0, a.jsx)(E.Gk, {
                location: E.Gt.POPOUT,
                children: m.Hs.map((e, n) => (0, a.jsx)(e, { entry: t }, n)),
              }),
              disableGameProfileLinks: i,
            }),
            (0, a.jsx)(T.St, {
              children: (0, a.jsx)(T.WT, {
                onReaction: s,
                onVoiceChannelPreview: C,
                user: v,
                channel: n,
                generateReactionImage: O,
                reactionImageAltText: p(t, v),
                entry: t,
              }),
            }),
          ],
        });
      };
    },
    268010: function (e, n, t) {
      t(627494), t(757143);
      var a = t(735250),
        l = t(470079),
        i = t(442837),
        r = t(481060),
        s = t(706454),
        o = t(594174),
        u = t(49012),
        c = t(5192),
        d = t(591759),
        _ = t(379357),
        m = t(561308),
        E = t(644810),
        T = t(206295),
        h = t(335326),
        x = t(297781),
        I = t(591853),
        N = t(410441),
        p = t(689938);
      let C = (e, n, t) => {
          let a = p.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
            l = c.ZP.getName(
              null == n ? void 0 : n.guild_id,
              null == n ? void 0 : n.id,
              t,
            ),
            i = e.extra.media_title;
          return a
            .plainFormat({
              mediaTitle: i,
              userName: l,
              episodeDescription: e.extra.media_subtitle,
            })
            .replaceAll("*", "");
        },
        g = (e, n) =>
          p.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
            username: n.username,
            activity: e.extra.media_title,
          });
      n.Z = (e) => {
        let {
            channel: n,
            entry: t,
            onReaction: c,
            onVoiceChannelPreview: v,
          } = e,
          f = (0, i.e7)([o.default], () => o.default.getUser(t.author_id)),
          { largeImage: P } = (0, _.rv)({ entry: t }),
          { primaryColor: M, secondaryColor: Z } = (0, T.Z)(
            null == P ? void 0 : P.src,
          ),
          A = (0, i.e7)([s.default], () => s.default.locale),
          S = (0, m.ap)(t.extra.media_assets_large_text),
          O = l.useCallback(
            (e) => {
              if (null != f && (null == P ? void 0 : P.src) != null)
                return (0, E.B)({
                  entry: t,
                  mediaImageSrc: null == P ? void 0 : P.src,
                  avatarSrc: f.getAvatarURL(
                    null == n ? void 0 : n.guild_id,
                    128,
                  ),
                  description: C(t, n, f),
                  timestamp: (0, m.yh)(t, A),
                  episodeDescription: S,
                  colors: [M, Z],
                  channelId: e,
                });
            },
            [n, t, S, A, null == P ? void 0 : P.src, M, Z, f],
          ),
          j = () => {
            if (null == t.extra.url) return;
            let e = d.Z.safeParseWithQuery(t.extra.url);
            if (null != e && null != e.protocol && null != e.hostname)
              (0, u.q)({ href: d.Z.format(e), trusted: !1 });
          };
        return null == f
          ? null
          : (0, a.jsxs)(I.yR, {
              children: [
                (0, a.jsx)(I.wG, {
                  channel: n,
                  entry: t,
                  userDescription: (0, m.kr)(t)
                    ? p.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2
                    : p.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
                  title: t.extra.media_title,
                  subtitle: t.extra.media_subtitle,
                  headerIcons: (0, a.jsx)(N.Z, {
                    Icon: r.CrunchyrollNeutralIcon,
                    "aria-label": p.Z.Messages.CRUNCHYROLL,
                  }),
                  badges: (0, a.jsx)(x.Gk, {
                    location: x.Gt.POPOUT,
                    children: h.t.map((e, n) => (0, a.jsx)(e, { entry: t }, n)),
                  }),
                  onClickTitle: j,
                  onClickThumbnail: j,
                }),
                (0, a.jsx)(I.St, {
                  children: (0, a.jsx)(I.WT, {
                    onReaction: c,
                    onVoiceChannelPreview: v,
                    user: f,
                    channel: n,
                    generateReactionImage: O,
                    reactionImageAltText: g(t, f),
                    entry: t,
                  }),
                }),
              ],
            });
      };
    },
    111386: function (e, n, t) {
      t(47120);
      var a = t(735250),
        l = t(470079),
        i = t(704215),
        r = t(481060),
        s = t(243778),
        o = t(689938),
        u = t(576306),
        c = t(442937);
      let d = () =>
        (0, a.jsxs)("div", {
          className: u.coachtipInner,
          children: [
            (0, a.jsx)("img", {
              src: c,
              alt: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_IMAGE_ALT,
              className: u.coachtipAsset,
            }),
            (0, a.jsxs)("div", {
              className: u.coachtipTextContainer,
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_HEADER,
                }),
                (0, a.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "text-secondary",
                  children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_TEXT,
                }),
              ],
            }),
          ],
        });
      n.Z = (e) => {
        let { children: n } = e,
          [t] = (0, s.US)([i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
          [o, c] = l.useState(!1);
        return (l.useEffect(() => {
          setTimeout(() => {
            c(!0);
          }, 300);
        }),
        t !== i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
          ? (0, a.jsx)(a.Fragment, { children: n })
          : (0, a.jsx)(r.Tooltip, {
              text: (0, a.jsx)(d, {}),
              tooltipClassName: u.coachtip,
              tooltipContentClassName: u.coachtipContent,
              position: "left",
              allowOverflow: !0,
              forceOpen: o,
              shouldShow: o,
              hideOnClick: !1,
              "aria-label": "test",
              children: (e) => (0, a.jsx)("div", { ...e, children: n }),
            });
      };
    },
    591853: function (e, n, t) {
      t.d(n, {
        Ll: function () {
          return ep;
        },
        St: function () {
          return em;
        },
        WT: function () {
          return eE;
        },
        jL: function () {
          return eN;
        },
        wG: function () {
          return eI;
        },
        yR: function () {
          return ec;
        },
      }),
        t(47120);
      var a = t(735250),
        l = t(470079),
        i = t(120356),
        r = t.n(i),
        s = t(512722),
        o = t.n(s);
      t(699581);
      var u = t(442837),
        c = t(704215),
        d = t(692547),
        _ = t(481060),
        m = t(493683),
        E = t(475179),
        T = t(287734),
        h = t(872810),
        x = t(607070),
        I = t(220779),
        N = t(201133),
        p = t(557135),
        C = t(194082),
        g = t(605236),
        v = t(543241),
        f = t(318374),
        P = t(258609),
        M = t(810568),
        Z = t(168524),
        A = t(382182),
        S = t(871118),
        O = t(565138),
        j = t(66999),
        R = t(790642),
        y = t(359110),
        L = t(12168),
        w = t(237583),
        B = t(592125),
        U = t(430824),
        b = t(496675),
        k = t(699516),
        D = t(9156),
        G = t(594174),
        H = t(979651),
        V = t(938475),
        Y = t(626135),
        F = t(768581),
        W = t(5192),
        z = t(379357),
        q = t(26033),
        K = t(91907),
        J = t(358696),
        X = t(656709),
        $ = t(192918),
        Q = t(22211),
        ee = t(561308),
        en = t(206295),
        et = t(111386),
        ea = t(797342),
        el = t(896449),
        ei = t(469153),
        er = t(206583),
        es = t(981631),
        eo = t(689938),
        eu = t(164384);
      function ec(e) {
        let { children: n } = e,
          t = l.useRef(null);
        return (
          (0, _.useFocusLock)(t),
          (0, a.jsx)("div", { className: eu.popout, ref: t, children: n })
        );
      }
      function ed(e) {
        let {
            children: n,
            backgroundImgSrc: t,
            className: l,
            style: i = {},
          } = e,
          { primaryColor: s, secondaryColor: o } = (0, en.Z)(t);
        return (
          null != t &&
            (i.background = "linear-gradient(45deg, "
              .concat(s, ", ")
              .concat(o, ")")),
          (0, a.jsx)(_.ThemeProvider, {
            theme: es.BRd.DARK,
            children: (e) =>
              (0, a.jsx)("div", {
                "data-disable-adaptive-theme": !0,
                className: r()(eu.hero, e, l),
                style: i,
                children: n,
              }),
          })
        );
      }
      let e_ = l.createContext(null);
      function em(e) {
        let { children: n } = e,
          t = l.useRef(null);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className: eu.interactionsContainerHeader,
              ref: (e) => (t.current = e),
            }),
            (0, a.jsx)("div", {
              className: eu.interactionsContainer,
              children: (0, a.jsx)(e_.Provider, {
                value: t.current,
                children: n,
              }),
            }),
          ],
        });
      }
      function eE(e) {
        let {
            channel: n,
            user: t,
            generateReactionImage: i,
            reactionImageAltText: r,
            onReaction: s,
            entry: T,
            buttons: h = [],
            header: x,
            onVoiceChannelPreview: C,
          } = e,
          [v, f] = l.useState(!1),
          [P, M] = l.useState(null),
          Z = (0, u.e7)(
            [b.Z],
            () => null != n && b.Z.can(es.Plq.SEND_MESSAGES, n),
          ),
          [A, S] = l.useState(!1),
          [L, G] = l.useState(!1),
          { voiceBar: F, joinVoiceButton: z } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
              { streamPreviewUrl: r, channel: s } = (0, Q.Z)(t),
              { isRich: o, appName: c } = (0, ea.n)(t),
              { needSubscriptionToAccess: m } = (0, j.Z)(
                null == n ? void 0 : n.id,
              ),
              T = (0, u.e7)([U.Z], () =>
                null != s ? U.Z.getGuild(s.guild_id) : void 0,
              ),
              h = (0, u.Wu)(
                [V.ZP],
                () => (null != s ? V.ZP.getVoiceStatesForChannel(s) : []),
                [s],
              ),
              x = (0, u.e7)([H.Z], () =>
                H.Z.isInChannel(null == s ? void 0 : s.id),
              ),
              I = l.useMemo(() => {
                for (let e of h) {
                  let n = B.Z.getDMFromUserId(e.user.id),
                    t = null != n && D.ZP.isChannelMuted(null, n),
                    a = k.Z.isBlocked(e.user.id);
                  if (t || a) return !0;
                }
                return !1;
              }, [h]);
            if (null == s || null == T)
              return { voiceBar: void 0, joinVoiceButton: void 0 };
            let N = null != r,
              C = () => {
                E.Z.updateChatOpen(s.id, !0), (0, y.Kh)(s.id);
                null == i || i(s, o ? c : void 0);
              },
              g = () => {
                p.Z.handleVoiceConnect({
                  channel: s,
                  connected: x,
                  needSubscriptionToAccess: m,
                  routeDirectlyToChannel: !0,
                });
              },
              v = (e) => {
                let {
                    children: n,
                    text: t,
                    hasBlockedOrMutedVCParticipant: l,
                  } = e,
                  i = l
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          l &&
                            (0, a.jsx)(_.WarningIcon, {
                              size: "custom",
                              width: 13,
                              height: 13,
                              className: eu.popoutBlockedWarningIcon,
                            }),
                          eo.Z.Messages
                            .MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING,
                        ],
                      })
                    : t;
                return (0, a.jsx)(
                  _.Tooltip,
                  {
                    "aria-label": l
                      ? eo.Z.Messages
                          .MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING
                      : null != t && t,
                    text: i,
                    shouldShow: !0,
                    children: n,
                  },
                  "voice-preview",
                );
              },
              f = (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: eu.voiceChannelPopoutReactorHeader,
                    children: [
                      (0, a.jsx)(v, {
                        text: eo.Z.Messages
                          .MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                        hasBlockedOrMutedVCParticipant: I,
                        children: (e) =>
                          (0, a.jsxs)(_.Clickable, {
                            ...e,
                            "aria-label":
                              eo.Z.Messages
                                .MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                            onClick: C,
                            className: eu.voiceChannelPopoutReactorChannel,
                            children: [
                              (0, a.jsx)(O.Z, {
                                guild: T,
                                size: O.Z.Sizes.SMOL,
                                className: eu.voiceChannelGuildIcon,
                                active: !0,
                              }),
                              (0, a.jsx)(_.ChevronSmallRightIcon, {
                                size: "xxs",
                                color: d.Z.colors.INTERACTIVE_NORMAL,
                              }),
                              (0, a.jsx)(_.VoiceNormalIcon, {
                                size: "xs",
                                color: d.Z.colors.TEXT_NORMAL,
                              }),
                              (0, a.jsx)(_.Text, {
                                variant: "text-sm/medium",
                                color: "text-normal",
                                className: eu.voiceChannelName,
                                children: s.name,
                              }),
                            ],
                          }),
                      }),
                      (0, a.jsx)(w.Z, {
                        guildId: T.id,
                        users: h,
                        max: 3,
                        renderUser: (e, n) =>
                          (0, a.jsx)(_.Avatar, {
                            src: e.user.getAvatarURL(T.id, 16),
                            size: _.AvatarSizes.SIZE_16,
                            "aria-label": "avatar",
                            className: n,
                          }),
                        renderMoreUsers: (e) =>
                          (0, a.jsx)("div", {
                            className: eu.voiceChannelAdditionalParticipants,
                            children: (0, a.jsx)(_.Text, {
                              variant: "text-xxs/semibold",
                              color: "text-normal",
                              children: e,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: eu.primaryActionPopoutDivider,
                  }),
                ],
              });
            return {
              voiceBar: f,
              joinVoiceButton: x
                ? null
                : (0, a.jsx)(v, {
                    hasBlockedOrMutedVCParticipant: I,
                    children: (e) =>
                      (0, a.jsx)(ep, {
                        ...e,
                        color: _.Button.Colors.GREEN,
                        onClick: g,
                        IconComponent: N ? _.ScreenIcon : _.VoiceNormalIcon,
                        children: N ? eo.Z.Messages.WATCH : eo.Z.Messages.JOIN,
                      }),
                  }),
            };
          })({ channel: n, entry: T, onVoiceChannelPreview: C }),
          q = null != z && 0 === h.length ? [z] : h,
          K = q.length > 0,
          J = q.length >= 2,
          [$, ee] = l.useState(!K),
          en = W.ZP.getName(
            null == n ? void 0 : n.guild_id,
            null == n ? void 0 : n.id,
            t,
          ),
          el = null != n && v ? "#".concat(n.name) : "@".concat(en),
          ec = v
            ? eo.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER
            : eo.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL,
          ed = async (e) => {
            let a;
            if (null != e) {
              if (
                (Y.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                  surface_type: er.Kd.GUILD_MEMBER_LIST,
                  channel_id: null == n ? void 0 : n.id,
                  guild_id: null == n ? void 0 : n.guild_id,
                }),
                (0, g.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                S(!0),
                G(!1),
                v)
              )
                o()(
                  null != n,
                  "shareToChannelMode should only be true if a valid channel is passed",
                ),
                  (a = n);
              else {
                var l;
                let e = await m.Z.getOrEnsurePrivateChannel(t.id);
                a = null !== (l = B.Z.getChannel(e)) && void 0 !== l ? l : null;
              }
              return (
                o()(null != a, "Send channel must be defined"),
                em({
                  reply: ":".concat(e.name, ":"),
                  sendToChannel: a,
                  onComplete: (e, n) => {
                    G(!0),
                      setTimeout(() => {
                        S(!1), s(e, n);
                      }, 600);
                  },
                  interactionType: er.xP.REACTION_EMOJI_REACT_SENT,
                })
              );
            }
          },
          e_ = async (e) => {
            let a;
            if (((0, g.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), v))
              o()(
                null != n,
                "shareToChannelMode should only be true if a valid channel is passed",
              ),
                (a = n);
            else {
              let e = await m.Z.openPrivateChannel(t.id, !1, !1),
                n = B.Z.getChannel(e);
              o()(null != n, "DM channel must be defined"), (a = n);
            }
            let l =
              a.type === es.d4z.DM
                ? er.xP.DM_REACTION_MESSAGE_SENT
                : er.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return em({
              reply: e,
              sendToChannel: a,
              interactionType: l,
              onComplete: s,
            });
          },
          em = async (e) => {
            let {
              reply: n,
              sendToChannel: t,
              onComplete: a,
              interactionType: l,
            } = e;
            if ((null == P || P.focus(), (0, R.Io)("ContentPopout Reactor")))
              await (0, X.p)({
                channel: t,
                content: n,
                entry: T,
                whenReady: !1,
              });
            else {
              var s;
              let e = await ((s = i),
              async function () {
                for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
                  n[t] = arguments[t];
                try {
                  return await s(...n);
                } catch (e) {
                  throw e;
                }
              })(t.id);
              o()(null != e, "Reaction image must be defined"),
                await (0, N.B)({ file: e, channel: t, altText: r, reply: n });
            }
            null == a || a(l, t);
          },
          eE = null != x ? x : null != F ? F : void 0;
        return (
          l.useEffect(() => {
            $ && (null == P || P.focus());
          }, [P, v, $]),
          (0, a.jsxs)("div", {
            style: { pointerEvents: A ? "none" : "all" },
            children: [
              (0, a.jsx)(ei.Z, {
                sent: L,
                shown: A,
                className: eu.toastContainer,
              }),
              null != eE
                ? eE
                : (0, a.jsx)(et.Z, {
                    children: (0, a.jsxs)("div", {
                      className: eu.emojiHotrailShareToChannel,
                      children: [
                        (0, a.jsx)(eT, { channel: n, onClickSuggestion: ed }),
                        (0, a.jsx)(I.dE, { onSelectEmoji: ed }),
                      ],
                    }),
                  }),
              (0, a.jsxs)("div", {
                className: $
                  ? eu.inputContainerShareToChannel
                  : eu.hiddenButRenderedInputField,
                children: [
                  (0, a.jsx)(I.A7, {
                    placeholder: eo.Z.Messages.TEXTAREA_PLACEHOLDER.format({
                      channel: el,
                    }),
                    onEnter: e_,
                    setEditorRef: (e) => M(e),
                    channel: v ? n : void 0,
                    showEmojiButton: null != eE,
                    renderAttachButton: Z
                      ? () =>
                          (0, a.jsx)(_.Tooltip, {
                            text: ec,
                            children: (e) =>
                              (0, a.jsx)(_.Clickable, {
                                ...e,
                                className: eu.shareToChannelButton,
                                onClick: () => f((e) => !e),
                                children: v
                                  ? (0, a.jsx)(_.TextIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                    })
                                  : (0, a.jsx)(_.AtIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                    }),
                              }),
                          })
                      : void 0,
                  }),
                  K &&
                    (0, a.jsx)(_.Clickable, {
                      onClick: () => ee(!1),
                      className: eu.primaryActionPopoutMessageCloseIcon,
                      children: (0, a.jsx)(_.XSmallIcon, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: d.Z.colors.ICON_PRIMARY,
                      }),
                    }),
                ],
              }),
              !1 === $ &&
                (0, a.jsxs)("div", {
                  className: eu.primaryActionPopoutActionButtons,
                  children: [
                    (0, a.jsxs)(
                      _.Button,
                      {
                        className: eu.secondaryButton,
                        color: _.Button.Colors.CUSTOM,
                        onClick: () => ee(!0),
                        innerClassName: eu.iconButton,
                        size: J ? _.Button.Sizes.MIN : _.Button.Sizes.LARGE,
                        children: [
                          (0, a.jsx)(_.ChatIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            colorClass: eu.secondaryText,
                          }),
                          !J &&
                            (0, a.jsx)(_.Text, {
                              variant: "text-md/semibold",
                              className: eu.secondaryText,
                              children: eo.Z.Messages.USER_POPOUT_MESSAGE,
                            }),
                        ],
                      },
                      "toggleMessageMode",
                    ),
                    q,
                  ],
                }),
            ],
          })
        );
      }
      let eT = (e) => {
        let { channel: n, onClickSuggestion: t } = e,
          [i, r] = l.useState(!1);
        l.useEffect(() => {
          r(!0);
        }, []);
        let s = !!x.Z.keyboardModeEnabled && !i,
          o = (0, v.wC)(null == n ? void 0 : n.guild_id)
            .slice(0, 5)
            .map((e) =>
              null == e.id
                ? { emoji: e, url: e.url }
                : {
                    emoji: e,
                    url: (0, F.gT)({
                      id: e.id,
                      animated: e.animated,
                      size: 58,
                    }),
                  },
            );
        return (0, a.jsx)(a.Fragment, {
          children: o.map((e) => {
            let { emoji: n, url: l } = e;
            return null != l
              ? (0, a.jsx)(
                  "div",
                  {
                    children: (0, a.jsx)(_.TooltipContainer, {
                      text: eo.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format(
                        { emojiName: n.name },
                      ),
                      position: "top",
                      "aria-label":
                        eo.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format(
                          { emojiName: n.name },
                        ),
                      color: _.Tooltip.Colors.PRIMARY,
                      shouldShow: !s && void 0,
                      children: (0, a.jsx)(L.u, {
                        emoji: n,
                        isDisabled: !i,
                        onClick: () => t(n),
                        className: eu.emoji,
                      }),
                    }),
                  },
                  n.name,
                )
              : null;
          }),
        });
      };
      function eh(e) {
        let {
            channel: n,
            userDescription: t,
            entry: l,
            disableGameProfileLinks: i,
            onUserPopoutClosed: s,
          } = e,
          o = null == n ? void 0 : n.guild_id,
          {
            displayParticipants: c,
            participant1: d,
            participant2: m,
            numOtherParticipants: E,
          } = (0, $.Z)(l, 3),
          T = (0, u.e7)([G.default], () => G.default.getUser(l.author_id)),
          { streamPreviewUrl: h } = (0, Q.Z)(l),
          x = [d, m];
        return (0, a.jsxs)("div", {
          className: eu.popoutContentHeader,
          children: [
            (0, a.jsxs)("div", {
              className: eu.popoutUserContainer,
              children: [
                (0, a.jsx)(f.Z, {
                  maxUsers: 3,
                  users: c,
                  size: _.AvatarSizes.SIZE_24,
                  avatarClassName: eu.popoutStackedAvatar,
                  hideOverflowCount: !0,
                  disableUsernameTooltip: !0,
                  onUserPopoutClosed: s,
                }),
                (0, a.jsx)(_.Spacer, { size: 8, horizontal: !0 }),
                (0, a.jsx)(_.Heading, {
                  variant: "heading-sm/normal",
                  className: eu.popoutTextSecondary,
                  children: t.format({
                    user0: W.ZP.getName(o, null == n ? void 0 : n.id, x[0]),
                    user1: W.ZP.getName(o, null == n ? void 0 : n.id, x[1]),
                    countOthers: E,
                    countOthersHook: (e, n) =>
                      (0, a.jsx)(
                        _.Text,
                        {
                          variant: "text-sm/medium",
                          className: r()(
                            eu.popoutUsername,
                            eu.popoutTextPrimary,
                          ),
                          children: e,
                        },
                        n,
                      ),
                    name0Hook: (e, t) =>
                      (0, a.jsx)(
                        K.Z,
                        {
                          textClassName: r()(
                            eu.popoutUsername,
                            eu.popoutTextPrimary,
                          ),
                          text: e,
                          user: x[0],
                          channel: n,
                          onPopoutClosed: s,
                        },
                        t,
                      ),
                    name1Hook: (e, t) =>
                      (0, a.jsx)(
                        K.Z,
                        {
                          textClassName: r()(
                            eu.popoutUsername,
                            eu.popoutTextPrimary,
                          ),
                          text: e,
                          user: x[1],
                          channel: n,
                          onPopoutClosed: s,
                        },
                        t,
                      ),
                  }),
                }),
              ],
            }),
            null != h && (0, a.jsx)(C.ZP, { size: C.ZP.Sizes.SMALL }),
            null != T &&
              (0, a.jsx)(el.Z, {
                user: T,
                channel: n,
                guildId: o,
                entry: l,
                disableGameProfileLinks: i,
              }),
          ],
        });
      }
      function ex(e) {
        let { children: n, onClick: t } = e;
        return null == t
          ? (0, a.jsx)(a.Fragment, { children: n })
          : (0, a.jsx)(_.Clickable, {
              className: eu.maybeClickable,
              onClick: t,
              children: n,
            });
      }
      function eI(e) {
        var n;
        let {
            title: t,
            subtitle: l,
            badges: i,
            children: s,
            onClickThumbnail: o,
            onClickTitle: u,
            onClickSubtitle: c,
            headerIcons: d,
            disableGameProfileLinks: m = !1,
            onUserPopoutClosed: E,
            ...T
          } = e,
          { entry: h } = T,
          x = (0, q.dX)(h),
          I = (0, Z.Z)({
            location: "ContentPopout",
            applicationId:
              x && !m
                ? null === (n = h.extra) || void 0 === n
                  ? void 0
                  : n.application_id
                : void 0,
            source: M.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: h.author_id,
          }),
          { largeImage: N, smallImage: p } = (0, z.rv)({ entry: h }),
          C = x ? I : void 0;
        return (0, a.jsxs)("div", {
          className: eu.popoutContentWrapper,
          children: [
            (0, a.jsx)(eh, {
              disableGameProfileLinks: m,
              ...T,
              onUserPopoutClosed: E,
            }),
            (0, a.jsxs)(ed, {
              backgroundImgSrc: null == N ? void 0 : N.src,
              children: [
                (0, a.jsxs)("div", {
                  className: eu.popoutHeroInner,
                  children: [
                    (0, a.jsx)("div", {
                      className: eu.popoutThumbnailContainer,
                      children: (0, a.jsx)(J.E, {
                        image: N,
                        smallImage: p,
                        onClick: null != o ? o : C,
                        size: J.J.SIZE_72,
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: eu.popoutHeroBody,
                      children: [
                        (0, a.jsx)(ex, {
                          onClick: null != u ? u : C,
                          children: (0, a.jsx)(_.Heading, {
                            variant: "heading-md/medium",
                            className: r()(eu.popoutHeroTextPrimary, {
                              [eu.popoutHeroTextPrimaryShort]: null != d,
                            }),
                            lineClamp: 3,
                            children: t,
                          }),
                        }),
                        null != l
                          ? (0, a.jsx)(ex, {
                              onClick: null != c ? c : C,
                              children: (0, a.jsx)(_.Text, {
                                variant: "text-sm/normal",
                                className: eu.popoutHeroTextSecondary,
                                children: l,
                              }),
                            })
                          : null,
                        (0, a.jsx)(_.Spacer, { size: 8 }),
                        i,
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: eu.popoutHeaderIcons,
                      children: d,
                    }),
                  ],
                }),
                s,
              ],
            }),
          ],
        });
      }
      function eN(e) {
        var n;
        let {
            title: t,
            subtitle: i,
            badges: r,
            stream: s,
            onClickThumbnail: o,
            onClickTitle: c,
            onClickSubtitle: d,
            onUserPopoutClosed: m,
            ...E
          } = e,
          x = (0, u.e7)([B.Z], () =>
            B.Z.getChannel(null == s ? void 0 : s.channelId),
          ),
          [I] = l.useMemo(() => (0, A.p9)(x, H.Z, U.Z, b.Z, P.Z), [x]),
          { entry: N } = E,
          p = (0, q.dX)(N),
          C = (0, Z.Z)({
            location: "ContentPopout",
            applicationId: p
              ? null === (n = N.extra) || void 0 === n
                ? void 0
                : n.application_id
              : void 0,
            source: M.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: N.author_id,
          }),
          g = p ? C : void 0,
          {
            activity: v,
            activityApplication: f,
            fallbackApplication: O,
          } = (0, ee.qy)(N),
          { largeImage: j, smallImage: R } = (0, z.YC)(v, null != f ? f : O);
        return null == s
          ? null
          : (0, a.jsxs)("div", {
              className: eu.popoutContentWrapper,
              children: [
                (0, a.jsx)(eh, { ...E, onUserPopoutClosed: m }),
                (0, a.jsxs)("div", {
                  className: eu.streamingPopoutHero,
                  children: [
                    (0, a.jsx)(ex, {
                      onClick: I
                        ? () => {
                            T.default.selectVoiceChannel(s.channelId),
                              (0, h.iV)(s);
                          }
                        : void 0,
                      children: (0, a.jsxs)("div", {
                        style: { position: "relative" },
                        children: [
                          (0, a.jsx)(S.Z, {
                            className: eu.streamingPopoutImg,
                            stream: s,
                          }),
                          I &&
                            (0, a.jsx)("div", {
                              className: eu.streamCTA,
                              children: (0, a.jsx)(_.Text, {
                                variant: "text-md/normal",
                                children: eo.Z.Messages.WATCH_STREAM,
                              }),
                            }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: eu.streamingPopoutHeader,
                      children: [
                        null != j &&
                          (0, a.jsx)("div", {
                            className: eu.popoutThumbnailContainer,
                            children: (0, a.jsx)(J.E, {
                              image: j,
                              smallImage: R,
                              onClick: null != o ? o : g,
                              size: J.J.SIZE_72,
                            }),
                          }),
                        (0, a.jsxs)("div", {
                          className: eu.streamingPopoutHeaderText,
                          children: [
                            (0, a.jsx)(ex, {
                              onClick: null != c ? c : g,
                              children: (0, a.jsx)(_.Heading, {
                                variant: "heading-md/semibold",
                                className: eu.popoutTextPrimary,
                                lineClamp: 3,
                                children: t,
                              }),
                            }),
                            null != i
                              ? (0, a.jsx)(ex, {
                                  onClick: null != d ? d : g,
                                  children: (0, a.jsx)(_.Text, {
                                    variant: "text-sm/normal",
                                    className: eu.popoutTextSecondary,
                                    children: i,
                                  }),
                                })
                              : null,
                            (0, a.jsx)(_.Spacer, { size: 8 }),
                            r,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
      function ep(e) {
        let { IconComponent: n, children: t, className: l, ...i } = e;
        return (0, a.jsxs)(_.Button, {
          ...i,
          className: r()(l, eu.primaryButton),
          innerClassName: null != n ? eu.iconButton : void 0,
          size: _.Button.Sizes.LARGE,
          children: [
            null != n
              ? (0, a.jsx)(n, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: d.Z.colors.WHITE,
                })
              : null,
            (0, a.jsx)(_.Text, {
              variant: "text-md/semibold",
              color: "always-white",
              children: t,
            }),
          ],
        });
      }
    },
    896449: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var a = t(735250);
      t(470079);
      var l = t(481060),
        i = t(239091),
        r = t(299206),
        s = t(810568),
        o = t(168524),
        u = t(725119),
        c = t(26033),
        d = t(689938),
        _ = t(243113);
      function m(e) {
        var n;
        let {
            user: t,
            guildId: m,
            channel: E,
            entry: T,
            onSelect: h,
            disableGameProfileLinks: x,
          } = e,
          I = (0, u.Z)({
            userId: t.id,
            guildId: m,
            channelId: null == E ? void 0 : E.id,
          }),
          N = (0, r.Z)({ id: t.id, label: d.Z.Messages.COPY_ID_USER }),
          p = (0, c.dX)(T),
          C = (0, o.Z)({
            location: "ContentPopoutContextMenu",
            applicationId:
              p && !0 !== x
                ? null === (n = T.extra) || void 0 === n
                  ? void 0
                  : n.application_id
                : void 0,
            source: s.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: T.author_id,
          });
        return (0, a.jsx)(l.Popout, {
          align: "top",
          position: "right",
          disablePointerEvents: !1,
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(l.Menu, {
              navId: "content-inventory-context",
              onClose: () => {
                (0, i.Zy)(), n();
              },
              "aria-label": d.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: h,
              children: (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)(l.MenuGroup, {
                    children: [
                      I,
                      null != C &&
                        (0, a.jsx)(l.MenuItem, {
                          id: "game-profile",
                          label: d.Z.Messages.GAME_PROFILE,
                          action: C,
                        }),
                    ],
                  }),
                  (0, a.jsx)(l.MenuGroup, { children: N }),
                ],
              }),
            });
          },
          children: (e) =>
            (0, a.jsx)(l.Tooltip, {
              text: d.Z.Messages.MORE,
              children: (n) =>
                (0, a.jsx)(l.Clickable, {
                  ...n,
                  className: _.menuIcon,
                  ...e,
                  children: (0, a.jsx)(l.MoreHorizontalIcon, {
                    color: "currentColor",
                    size: "custom",
                    width: 16,
                    height: 16,
                  }),
                }),
            }),
        });
      }
    },
    469153: function (e, n, t) {
      var a = t(735250);
      t(470079);
      var l = t(180081),
        i = t(442837),
        r = t(481060),
        s = t(607070),
        o = t(689938),
        u = t(348910),
        c = t(810819);
      let d = () =>
        (0, a.jsxs)("div", {
          className: c.toast,
          children: [
            (0, a.jsx)(r.Spinner, {
              type: r.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
              className: u.loadingSpinner,
            }),
            (0, a.jsx)(r.Text, {
              color: "header-primary",
              variant: "text-md/normal",
              children: o.Z.Messages.CONTENT_INVENTORY_MESSAGE_SENDING,
            }),
          ],
        });
      n.Z = (e) => {
        let { shown: n, sent: t, className: u } = e,
          c = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
          _ = (0, r.useTransition)(
            n,
            {
              from: {
                transform: c ? "translateY(0)" : "translateY(16px)",
                opacity: 0,
              },
              enter: { transform: "translateY(0)", opacity: 1 },
              leave: {
                transform: c ? "translateY(0)" : "translateY(16px)",
                opacity: 0,
              },
              config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
              delay: 200,
            },
            "animate-always",
          );
        return (0, a.jsx)(a.Fragment, {
          children: _(
            (e, n) =>
              n &&
              (0, a.jsx)(l.animated.div, {
                className: u,
                style: e,
                children: t
                  ? (0, a.jsx)(r.Toast, {
                      message: o.Z.Messages.CONTENT_INVENTORY_MESSAGE_SENT,
                      type: r.ToastType.SUCCESS,
                      id: "success_message_toast",
                    })
                  : (0, a.jsx)(r.Toast, {
                      message: "",
                      type: r.ToastType.CUSTOM,
                      id: "custom_loading_message_toast",
                      options: { component: (0, a.jsx)(d, {}) },
                    }),
              }),
          ),
        });
      };
    },
    656709: function (e, n, t) {
      t.d(n, {
        p: function () {
          return i;
        },
      });
      var a = t(904245),
        l = t(957730);
      function i(e) {
        let { channel: n, content: t, entry: i, whenReady: r } = e,
          s = l.ZP.parse(n, t);
        return a.Z.sendMessage(n.id, s, r, {
          contentInventoryEntry: { unverified_content: i },
        });
      }
    },
    897674: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
        g: function () {
          return o;
        },
      }),
        t(47120);
      var a = t(470079),
        l = t(442837),
        i = t(146282),
        r = t(327220),
        s = t(959580);
      function o(e, n) {
        let { types: t } = e;
        return !!(null == t || t.has(n.content_type)) || !1;
      }
      function u(e) {
        let { feed: n, filters: t } = (0, l.cj)([i.Z], () => ({
            feed: i.Z.getFeed(e),
            filters: i.Z.getFilters(),
          })),
          u = a.useMemo(() => {
            let e = null == n ? void 0 : n.entries.map((e) => e.content);
            return null != t
              ? null == e
                ? void 0
                : e.filter((e) => o(t, e))
              : e;
          }, [n, t]);
        return (u = (0, r.Z)(u)), (u = (0, s.Z)(u));
      }
    },
    871118: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var a = t(735250),
        l = t(470079),
        i = t(120356),
        r = t.n(i),
        s = t(442837),
        o = t(481060),
        u = t(543882),
        c = t(592125),
        d = t(496675),
        _ = t(981631),
        m = t(689938),
        E = t(375387);
      function T(e) {
        let { isLoading: n, noText: t, previewText: l, className: i } = e;
        return (0, a.jsx)("div", {
          className: r()(E.emptyPreviewContainer, i),
          children: n
            ? (0, a.jsx)(o.Spinner, {})
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("div", { className: E.emptyPreviewImage }),
                  t
                    ? null
                    : (0, a.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        className: E.emptyPreviewText,
                        children:
                          null != l ? l : m.Z.Messages.STREAM_NO_PREVIEW,
                      }),
                ],
              }),
        });
      }
      function h(e) {
        let { stream: n, className: t, noText: i = !1 } = e,
          o = (0, s.e7)([c.Z], () => c.Z.getBasicChannel(n.channelId)),
          h = (0, s.e7)(
            [d.Z],
            () => null != o && d.Z.canBasicChannel(_.S7T.CONNECT, o),
          ),
          { url: x, isLoading: I } = (0, s.cj)([u.Z], () => ({
            url: h
              ? u.Z.getPreviewURL(n.guildId, n.channelId, n.ownerId)
              : null,
            isLoading:
              h && u.Z.getIsPreviewLoading(n.guildId, n.channelId, n.ownerId),
          })),
          N = l.useRef(I ? null : x);
        l.useEffect(() => {
          !I && (N.current = x);
        }, [x, I]);
        let p = null == x || I ? N.current : x;
        return null == p
          ? (0, a.jsx)(T, {
              className: t,
              isLoading: I,
              noText: i,
              previewText: h ? void 0 : m.Z.Messages.STREAM_NO_PERMISSION_CTA,
            })
          : (0, a.jsx)("div", {
              className: r()(t, E.root),
              children: (0, a.jsx)("img", {
                src: p,
                alt: "",
                className: E.image,
              }),
            });
      }
    },
    12168: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        },
        u: function () {
          return M;
        },
      }),
        t(47120);
      var a = t(735250),
        l = t(470079),
        i = t(120356),
        r = t.n(i),
        s = t(392711),
        o = t(180081),
        u = t(481060),
        c = t(596454),
        d = t(727637),
        _ = t(313201),
        m = t(543241),
        E = t(318766),
        T = t(907040),
        h = t(633302),
        x = t(806966),
        I = t(176354),
        N = t(823379),
        p = t(354459),
        C = t(185923),
        g = t(420212),
        v = t(894967);
      let f = C.Hz.CHAT,
        P = [
          h.ZP.getByName("thumbsup"),
          h.ZP.getByName("eyes"),
          h.ZP.getByName("laughing"),
          h.ZP.getByName("watermelon"),
          h.ZP.getByName("fork_and_knife"),
          h.ZP.getByName("yum"),
        ].filter(N.lm);
      function M(e) {
        let { emoji: n, isDisabled: t = !1, onClick: i, className: s } = e,
          _ = l.useRef(null),
          m = (0, d.Z)(_);
        return (0, a.jsx)("span", {
          ref: _,
          children: (0, a.jsx)(u.Button, {
            onClick: i,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            focusProps: { enabled: !t },
            children: (0, a.jsx)(u.Spring, {
              config: E.u,
              from: { value: 0 },
              to: { value: m ? 1 : 0 },
              children: (e) => {
                let { value: l } = e;
                return (0, a.jsx)(o.animated.div, {
                  style: {
                    transform: l
                      .to([0, 1], [1, 1.14])
                      .to((e) => "scale(".concat(e, ")")),
                  },
                  children: (0, a.jsx)(c.Z, {
                    className: r()(v.emoji, s, { [v.emojiItemDisabled]: t }),
                    emojiId: n.id,
                    emojiName: null == n ? void 0 : n.surrogates,
                    animated: n.animated,
                  }),
                });
              },
            }),
          }),
        });
      }
      function Z(e) {
        let {
          otherAccessories: n,
          isEmojiPickerExpanded: t,
          onSetExpanded: l,
          onFocus: i,
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            n,
            (0, a.jsx)(u.Clickable, {
              className: v.dropDownContainer,
              onClick: () => {
                l(!t), i();
              },
              children: (0, a.jsx)(u.ChevronSmallDownIcon, {
                size: "md",
                color: "currentColor",
                className: r()(v.dropDown, { [v.dropDownOpen]: t }),
              }),
            }),
          ],
        });
      }
      function A(e) {
        let {
            channel: n,
            title: t,
            closePopout: i,
            onFocus: o,
            onSelectEmoji: c,
            onSelectDisabledEmoji: d,
            onExpandedToggle: E,
            emojiSearchProps: h,
            recentlyUsedEmojis: N,
            analyticsOverride: A,
          } = e,
          S = (0, _.Dt)(),
          [O, j] = l.useState(!1),
          R = (0, m.wC)(n.guild_id),
          y = (0, s.uniqBy)([...R, ...P], "name")
            .filter(
              (e) =>
                !I.ZP.isEmojiFilteredOrLocked({
                  emoji: e,
                  channel: n,
                  intention: f,
                }),
            )
            .slice(0, p.e5);
        null != N && N.length > 0 && y.splice(y.length - 1, 1, N[0]);
        let L = (e) => {
            j(e), null == E || E(e);
          },
          w = (e, n) => {
            if (null == e && n) {
              i();
              return;
            }
            null != e && c(e);
            L(!n), n && x.kJ.setSearchPlaceholder(null);
          };
        return (0, a.jsxs)(u.Dialog, {
          "aria-labelledby": S,
          children: [
            (0, a.jsx)(u.HeadingLevel, {
              forceLevel: 2,
              children: (0, a.jsx)(u.HiddenVisually, {
                children: (0, a.jsx)(u.H, { id: S, children: t }),
              }),
            }),
            (0, a.jsxs)("div", {
              className: v.container,
              children: [
                (0, a.jsx)(T.Z, {
                  analyticsOverride: A,
                  channel: n,
                  className: r()(v.animatedPicker, {
                    [v.animatedPickerTall]: O,
                  }),
                  headerClassName: r()(v.emojiPickerHeader, {
                    [v.emojiPickerHeaderExpanded]: O,
                  }),
                  closePopout: i,
                  onSelectEmoji: O ? w : () => {},
                  shouldHidePickerActions: !O,
                  wrapper: "div",
                  pickerIntention: f,
                  searchProps: {
                    ...h,
                    accessory: (0, a.jsx)(Z, {
                      otherAccessories: null == h ? void 0 : h.accessory,
                      isEmojiPickerExpanded: O,
                      onSetExpanded: L,
                      onFocus: o,
                    }),
                    onKeyDown: (e) => {
                      null != e &&
                        e.key !== g.vn.TAB &&
                        (e.key !== g.vn.ENTER || e.shiftKey ? L(!0) : L(!O));
                    },
                  },
                }),
                (0, a.jsx)("div", {
                  className: v.slotsContainer,
                  children: (0, a.jsx)("div", {
                    className: r()(v.slots, v.slotsWide),
                    children: y.map((e) => {
                      let t = I.ZP.isEmojiDisabled({
                        emoji: e,
                        channel: n,
                        intention: C.Hz.CHAT,
                      });
                      return (0, a.jsx)(
                        "div",
                        {
                          className: v.slot,
                          children: (0, a.jsx)(u.TooltipContainer, {
                            text: e.name,
                            position: "top",
                            "aria-label": e.name,
                            tooltipClassName: v.tooltipContainer,
                            color: u.Tooltip.Colors.BRAND,
                            children: (0, a.jsx)(M, {
                              emoji: e,
                              isDisabled: t,
                              onClick: () => {
                                t ? null == d || d(e) : w(e, !0);
                              },
                            }),
                          }),
                        },
                        e.name,
                      );
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=a76218a6106036f524da.js.map
