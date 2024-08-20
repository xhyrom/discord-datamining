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
          return u;
        },
        lY: function () {
          return c;
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
      let c = () => {
        a.Z.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
          r.default.track(o.rMx.MEMBERLIST_CONTENT_FEED_HIDDEN, {
            channel_id: l.Z.getChannelId(),
            guild_id: i.Z.getGuildId(),
            hidden: s.Z.hidden,
          });
      };
      function u() {
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
    571243: function (e, n, t) {
      t.d(n, {
        a: function () {
          return l;
        },
      });
      let a = (0, t(818083).B)({
          id: "2024-04_memberlist_one_click_reply",
          kind: "user",
          label: "Memberlist One Click Reply",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 0, label: "Control", config: { enabled: !1 } },
            {
              id: 1,
              label: "One click reply enabled",
              config: { enabled: !0 },
            },
          ],
        }),
        l = (e) => {
          let { location: n, autoTrackExposure: t = !0 } = e,
            { enabled: l } = a.useExperiment(
              { location: n },
              { autoTrackExposure: t },
            );
          return l;
        };
    },
    69259: function (e, n, t) {
      t.d(n, {
        L: function () {
          return r;
        },
      });
      var a = t(626135),
        l = t(206583),
        i = t(981631);
      let r = (e, n) => {
        a.default.track(i.rMx.RANKING_ITEM_INTERACTED, {
          request_id: n.requestId,
          item_id: n.entry.id,
          surface_type: l.Kd.GUILD_MEMBER_LIST,
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
          return N;
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
      var c = t(70956);
      t(5192);
      var u = t(709054),
        d = t(561308);
      t(206295);
      var m = t(737583),
        _ = t(169040),
        E = t(689938);
      let T = (e, n) => ({
          AvatarImage1: e[0],
          ...(null != e[1] && { AvatarImage2: e[1] }),
          ...(null != e[2] && { AvatarImage3: e[2] }),
          ...(null != n && { ApplicationImage: n }),
        }),
        h = (e, n) => {
          let t = [{ iconPath: _.NM, text: n }],
            a = u.default.extractTimestamp(e.extra.application_id);
          if (
            (7 >= l()().diff(l()(a), "days") &&
              t.push({
                iconPath: _.As,
                text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE,
              }),
            (0, d.Ol)(e) &&
              t.push({
                iconPath: _.fO,
                text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
              }),
            (0, d.q_)(e))
          ) {
            let n = (0, d.vU)(e);
            t.push({
              iconPath: _.t1,
              text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
                days: n,
              }),
            });
          }
          (0, d.ig)(e) === i.o.GLOBAL &&
            t.push({
              iconPath: _.Op,
              text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
            });
          let r = (0, d.dw)(e);
          if (
            (null != r && t.push({ iconPath: _.Z, text: (0, d.GE)(r) }),
            (0, d.V5)(e))
          ) {
            let { text: n } = (0, d.zo)(e);
            null != n && t.push({ iconPath: _.Md, text: n });
          }
          if ((0, d.Jd)(e)) {
            let n = (0, d.yA)(e);
            if (null != n) {
              let e =
                E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format(
                  { hours: Math.round(n / c.Z.Seconds.HOUR) },
                );
              return [
                {
                  iconPath: _.eF,
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
            c = a.map((e, n) => ({ color: e, stop: n }));
          e.setSize({ w: _.nx, h: _.bg }, 4),
            e.drawRoundedGradientRect(
              c,
              { x: 0, y: _.bg },
              { x: _.nx, y: 0 },
              { x: 0, y: 0, h: _.bg, w: _.nx },
              8,
            ),
            e.setColor("white"),
            e.drawRoundedImage(
              "ApplicationImage",
              { x: _.sB, y: _.sB },
              { w: _.Pu, h: _.Pu },
              8,
            ) === s.vP.Failure &&
              e.drawPath(r.Cv, { x: _.sB, y: _.sB }, !0, 2 + 2 / 3);
          (0, m.l)({
            canvas: e,
            avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(
              0,
              o,
            ),
            position: { x: _.Iq, y: _.sB },
            avatarImageSize: _.$S,
          }),
            e.setColor("white"),
            e.setFont({
              size: 16,
              family: _.I8,
              weight: _.Ue,
              truncate: s.GX.Wrap,
            }),
            e.drawText(l, { x: _.Iq, y: 64, h: 32, w: _.kC }, !0);
          let u = h(i, t);
          (0, m.J)({
            canvas: e,
            badges: u,
            startPosition: _.Iq,
            maxWidth: _.kC,
          });
        },
        N = async (e) => {
          let {
              applicationImageSrc: n,
              entry: t,
              avatarSrcs: a,
              description: l,
              timestamp: i,
              colors: r,
              channelId: c,
            } = e,
            u = t.extra.activity_name,
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
              fileName: "user-reacting-to-".concat(u, ".png").toLowerCase(),
              fileType: "png",
              channelId: c,
            },
          });
        };
    },
    919394: function (e, n, t) {
      t.d(n, {
        SO: function () {
          return N;
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
      var c = t(70956),
        u = t(709054),
        d = t(561308);
      t(206295);
      var m = t(737583);
      t(438226);
      var _ = t(169040),
        E = t(689938);
      let T = (e, n) => ({
          AvatarImage1: e[0],
          ...(null != e[1] && { AvatarImage2: e[1] }),
          ...(null != e[2] && { AvatarImage3: e[2] }),
          ...(null != n && { ApplicationImage: n }),
        }),
        h = (e, n) => {
          let t = [{ iconPath: _.NM, text: n }],
            a = u.default.extractTimestamp(e.extra.application_id);
          if (
            (7 >= l()().diff(l()(a), "days") &&
              t.push({
                iconPath: _.As,
                text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE,
              }),
            (0, d.Ol)(e) &&
              t.push({
                iconPath: _.fO,
                text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
              }),
            (0, d.q_)(e))
          ) {
            let n = (0, d.vU)(e);
            t.push({
              iconPath: _.t1,
              text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
                days: n,
              }),
            });
          }
          (0, d.ig)(e) === i.o.GLOBAL &&
            t.push({
              iconPath: _.Op,
              text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
            });
          let r = (0, d.dw)(e);
          if (
            (null != r && t.push({ iconPath: _.Z, text: (0, d.GE)(r) }),
            (0, d.V5)(e))
          ) {
            let { text: n } = (0, d.zo)(e);
            null != n && t.push({ iconPath: _.Md, text: n });
          }
          if ((0, d.Jd)(e)) {
            let n = (0, d.yA)(e);
            if (null != n) {
              let e =
                E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format(
                  { hours: Math.round(n / c.Z.Seconds.HOUR) },
                );
              return [
                {
                  iconPath: _.eF,
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
            c = a.map((e, n) => ({ color: e, stop: n }));
          e.setSize({ w: _.nx, h: _.bg }, 4),
            e.drawRoundedGradientRect(
              c,
              { x: 0, y: _.bg },
              { x: _.nx, y: 0 },
              { x: 0, y: 0, h: _.bg, w: _.nx },
              8,
            ),
            e.setColor("white"),
            e.drawRoundedImage(
              "ApplicationImage",
              { x: _.sB, y: _.sB },
              { w: _.Pu, h: _.Pu },
              8,
            ) === s.vP.Failure &&
              e.drawPath(r.Cv, { x: _.sB, y: _.sB }, !0, 2 + 2 / 3);
          (0, m.l)({
            canvas: e,
            avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(
              0,
              o,
            ),
            position: { x: _.Iq, y: _.sB },
            avatarImageSize: _.$S,
          }),
            e.setColor("white"),
            e.setFont({
              size: 16,
              family: _.I8,
              weight: _.Ue,
              truncate: s.GX.Wrap,
            }),
            e.drawText(l, { x: _.Iq, y: 64, h: 32, w: _.kC }, !0);
          let u = h(i, t);
          (0, m.J)({
            canvas: e,
            badges: u,
            startPosition: _.Iq,
            maxWidth: _.kC,
          });
        },
        N = async (e) => {
          let {
              applicationImageSrc: n,
              entry: t,
              avatarSrcs: a,
              description: l,
              timestamp: i,
              colors: r,
              channelId: c,
            } = e,
            u = t.extra.game_name,
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
              fileName: "user-reacting-to-".concat(u, ".png").toLowerCase(),
              fileType: "png",
              channelId: c,
            },
          });
        };
    },
    169040: function (e, n, t) {
      t.d(n, {
        $S: function () {
          return N;
        },
        As: function () {
          return _;
        },
        I8: function () {
          return M;
        },
        Iq: function () {
          return I;
        },
        Md: function () {
          return o;
        },
        NC: function () {
          return v;
        },
        NM: function () {
          return a;
        },
        Op: function () {
          return m;
        },
        PW: function () {
          return f;
        },
        Pu: function () {
          return x;
        },
        Ue: function () {
          return P;
        },
        Z: function () {
          return u;
        },
        bg: function () {
          return T;
        },
        eF: function () {
          return c;
        },
        f0: function () {
          return p;
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
          return C;
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
        c =
          "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
        u =
          "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
        d =
          "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
        m =
          "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
        _ =
          "M17.93 1.51a.74.74 0 0 0-1.41 0l-1.13 3.47h-3.65a.74.74 0 0 0-.43 1.35l2.95 2.14-1.13 3.47a.74.74 0 0 0 1.14.83l2.95-2.15 2.96 2.15a.74.74 0 0 0 1.14-.83l-1.13-3.47 2.95-2.14a.74.74 0 0 0-.43-1.35h-3.65l-1.13-3.47ZM10.7 14.7a1 1 0 0 0-1.4-1.4l-8 8a1 1 0 1 0 1.4 1.4l8-8ZM9.7 8.3a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0ZM15.7 15.7a1 1 0 0 0-1.4-1.4l-6 6a1 1 0 1 0 1.4 1.4l6-6Z",
        E = 400,
        T = 120,
        h = 12,
        x = 96,
        N = 32,
        I = 120,
        C = 260,
        p = 88,
        g = 99,
        f = 12,
        v = 18,
        M = ["gg sans", "sans-serif"],
        P = 500;
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
          return c;
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
        c = (e) => {
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
          return m;
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
        c = t(169040),
        u = t(689938);
      let d = (e) => {
          let { timestamp: n } = e;
          return [{ iconPath: c.mb, text: n }];
        },
        m = (e) => {
          var n;
          let t =
            null === (n = (0, s.PJ)(e, a.N.AGGREGATE_COUNT)) || void 0 === n
              ? void 0
              : n.count;
          return null == t
            ? []
            : [
                {
                  iconPath: c.eF,
                  text: u.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format(
                    { count: t },
                  ),
                },
              ];
        },
        _ = (e) => {
          let { avatarSrc: n, mediaImageSrc: t } = e;
          return { AvatarImage: n, ...(null != t && { MediaImage: t }) };
        },
        E = async (e) => {
          let {
              user: n,
              channel: t,
              mediaImageSrc: a,
              artist: s,
              description: u,
              colors: d,
              badges: m,
            } = e,
            E = _({
              avatarSrc: n.getAvatarURL(t.guild_id, 128),
              mediaImageSrc: a,
            }),
            T = s.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-");
          return await (0, r.f)({
            assetsToLoad: E,
            drawImage: (e) => {
              (function (e, n) {
                let t = n.map((e, n) => ({ color: e, stop: n }));
                e.setSize({ w: c.nx, h: c.bg }, 4),
                  e.drawRoundedGradientRect(
                    t,
                    { x: 0, y: c.bg },
                    { x: c.nx, y: 0 },
                    { x: 0, y: 0, h: c.bg, w: c.nx },
                    8,
                  );
              })(e, d),
                (function (e) {
                  e.drawRoundedImage(
                    "MediaImage",
                    { x: c.sB, y: c.sB },
                    { w: c.Pu, h: c.Pu },
                    8,
                    { fillMode: i.JU.Contain },
                  ) === i.vP.Failure &&
                    e.drawPath(l.Cv, { x: c.sB, y: c.sB }, !0, 2 + 2 / 3);
                })(e),
                (function (e) {
                  e.drawRoundedImage(
                    "AvatarImage",
                    { x: c.Iq, y: c.sB },
                    { w: c.$S, h: c.$S },
                    50,
                  );
                })(e),
                (function (e, n) {
                  e.setColor("white"),
                    e.setFont({
                      size: 16,
                      family: c.I8,
                      weight: c.Ue,
                      truncate: i.GX.Wrap,
                    }),
                    e.drawText(n, { x: c.Iq, y: 64, h: 32, w: c.kC }, !0);
                })(e, u),
                (0, o.J)({
                  canvas: e,
                  badges: m,
                  startPosition: c.Iq,
                  maxWidth: c.kC,
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
          return u;
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
        c = (e, n) => {
          let t = [{ iconPath: s.i6, text: e }];
          return null != n && t.push({ iconPath: s.fj, text: n }), t;
        },
        u = async (e) => {
          let {
              mediaImageSrc: n,
              entry: t,
              avatarSrc: u,
              description: d,
              timestamp: m,
              episodeDescription: _,
              colors: E,
              channelId: T,
            } = e,
            h = t.extra.media_title,
            x = o(u, n);
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
              let i = c(m, _);
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
        i = t(297781),
        r = t(443487),
        s = t(43205),
        o = t(797342),
        c = t(182022);
      let u = [i.OV, i.Af, i.pQ];
      n.Z = l.memo((e) => {
        let { entry: n, channel: t, selected: l, hovered: d } = e,
          { iconUrl: m, iconTitle: _ } = (0, o.n)(n);
        return (0, a.jsxs)(r.Zb, {
          selected: l,
          children: [
            (0, a.jsxs)(r.e$, {
              children: [
                (0, a.jsx)(r.F9, {
                  entry: n,
                  channelId: t.id,
                  guildId: t.guild_id,
                }),
                (0, a.jsx)(r.ll, { children: n.extra.activity_name }),
                (0, a.jsx)(i.Gk, {
                  location: i.Gt.CARD,
                  children: u.map((e, t) =>
                    (0, a.jsx)(e, { entry: n, hovered: d }, t),
                  ),
                }),
              ],
            }),
            (0, a.jsx)(s.f, {
              alt: _,
              src: m,
              size: 48,
              className: c.thumbnail,
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
        s = t(2052),
        o = t(620662),
        c = t(841784),
        u = t(429589),
        d = t(403404),
        m = t(906732),
        _ = t(522474),
        E = t(706454),
        T = t(823379),
        h = t(5192),
        x = t(192918),
        N = t(561308),
        I = t(907152),
        C = t(206295),
        p = t(297781),
        g = t(591853),
        f = t(797342),
        v = t(981631),
        M = t(701488),
        P = t(689938);
      let Z = (e, n) =>
          P.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: n.username,
            activity: e.extra.activity_name,
          }),
        S = (e, n, t) => {
          let a = P.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME,
            l = h.ZP.getName(n.guild_id, n.id, t),
            i = e.extra.activity_name;
          return a
            .plainFormat({ gameName: i, userName: l })
            .replaceAll("*", "");
        },
        A = (e) => {
          let { entry: n, channel: t, users: a, countOthers: l } = e;
          return P.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED.plainFormat(
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
        };
      n.ZP = (e) => {
        var n;
        let {
            channel: t,
            entry: h,
            onReaction: O,
            onVoiceChannelPreview: j,
          } = e,
          {
            iconUrl: R,
            iconTitle: y,
            user: L,
            details: w,
            activity: b,
            coverImageUrl: k,
            richIcon: B,
          } = (0, f.n)(h),
          { primaryColor: U, secondaryColor: G } = (0, C.Z)(R),
          D = (0, i.e7)([E.default], () => E.default.locale),
          {
            displayParticipants: H,
            participant1: Y,
            participant2: V,
            numOtherParticipants: F,
          } = (0, x.Z)(h, 3),
          W = (0, s.O)(),
          { analyticsLocations: z } = (0, m.ZP)(),
          q = _.Z.getWindowOpen(v.KJ3.CHANNEL_CALL_POPOUT),
          K = () => {
            (0, d.Z)({
              guildId: null == t ? void 0 : t.guild_id,
              locationObject: W.location,
              openInPopout: q,
              initialSelectedApplicationId: h.extra.application_id,
              initialSlide: M.ag.SELECT_CHANNEL,
              analyticsLocations: z,
            });
          },
          J = l.useCallback(
            (e) => {
              if (null == R || null == t || null == L) return;
              let n =
                F > 0
                  ? A({ entry: h, channel: t, users: [Y, V], countOthers: F })
                  : S(h, t, L);
              return (0, I.C4)({
                entry: h,
                applicationImageSrc: R,
                avatarSrcs: H.map((e) => e.getAvatarURL(t.guild_id, 128)),
                description: n,
                timestamp: (0, N.yh)(h, D),
                colors: [U, G],
                channelId: e,
              });
            },
            [R, t, H, h, D, F, Y, V, U, G, L],
          );
        if (null == L) return null;
        let X = (0, a.jsx)(p.PZ, { location: p.Gt.POPOUT, entry: h }),
          $ = (0, a.jsx)(g.wG, {
            thumbnailSrc:
              null !== (n = null != B ? B : k) && void 0 !== n ? n : R,
            thumbnailTitle: y,
            channel: t,
            userDescription: (0, N.kr)(h)
              ? P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING
              : P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
            title: h.extra.activity_name,
            subtitle: w,
            badges: X,
            entry: h,
            onClickTitle: K,
            onClickSubtitle: K,
            onClickThumbnail: K,
          }),
          Q =
            (0, o.Z)(b, v.xjy.JOIN) || (0, c.Z)(b)
              ? (0, a.jsx)(u.Z, {
                  activity: b,
                  user: L,
                  ButtonComponent: (e) =>
                    (0, a.jsx)(g.Ll, {
                      IconComponent: r.GameControllerIcon,
                      ...e,
                    }),
                })
              : null,
          ee = [
            Q,
            (0, a.jsx)(g.Ll, {
              onClick: K,
              IconComponent: r.ActivitiesIcon,
              children: P.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY,
            }),
          ].filter(T.lm);
        return (0, a.jsxs)(g.yR, {
          children: [
            $,
            (0, a.jsx)(g.St, {
              children: (0, a.jsx)(g.WT, {
                onReaction: O,
                onVoiceChannelPreview: j,
                user: L,
                channel: t,
                generateReactionImage: J,
                reactionImageAltText: Z(h, L),
                entry: h,
                buttons: ee,
              }),
            }),
          ],
        });
      };
    },
    178762: function (e, n, t) {
      t.d(n, {
        J: function () {
          return b;
        },
        YN: function () {
          return j;
        },
        iZ: function () {
          return R;
        },
      }),
        t(47120);
      var a = t(735250),
        l = t(470079),
        i = t(392711),
        r = t.n(i),
        s = t(91192),
        o = t(876215),
        c = t(442837),
        u = t(481060),
        d = t(239091),
        m = t(607070),
        _ = t(439170),
        E = t(594174),
        T = t(687694),
        h = t(69259),
        x = t(370370),
        N = t(107062),
        I = t(91140),
        C = t(227172),
        p = t(551228),
        g = t(678869),
        f = t(278399),
        v = t(886217),
        M = t(555672),
        P = t(644548),
        Z = t(335326),
        S = t(268010),
        A = t(797342),
        O = t(206583);
      let j = 72;
      function R(e) {
        return (null == e ? void 0 : e.type) === _.so.CONTENT_INVENTORY ? j : 0;
      }
      let y = r().throttle(
          (e) => {
            (0, h.L)(O.xP.CARD_HOVER, e);
          },
          5e3,
          { leading: !0, trailing: !1 },
        ),
        L = (e) => {
          let { entry: n, ...t } = e;
          switch (n.content_type) {
            case o.s.PLAYED_GAME:
              return (0, a.jsx)(I.Z, { ...t, entry: n });
            case o.s.WATCHED_MEDIA:
              return (0, a.jsx)(Z.ZP, { ...t, entry: n });
            case o.s.TOP_GAME:
              return (0, a.jsx)(M.ZP, { ...t, entry: n });
            case o.s.TOP_ARTIST:
              return (0, a.jsx)(f.ZP, { ...t, entry: n });
            case o.s.LISTENED_SESSION:
              return (0, a.jsx)(p.ZP, { ...t, entry: n });
            case o.s.LAUNCHED_ACTIVITY:
              return (0, a.jsx)(x.Z, { ...t, entry: n });
            default:
              return null;
          }
        },
        w = (e) => {
          let { requestId: n, closePopout: t, ...l } = e;
          return (0, a.jsx)(b, {
            onReaction: (e, a) => {
              (0, h.L)(e, {
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
              (0, h.L)(O.xP.VOICE_CHANNEL_PREVIEWED, {
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
        b = (e) => {
          let { entry: n, ...t } = e;
          switch (n.content_type) {
            case o.s.PLAYED_GAME:
              return (0, a.jsx)(C.Z, { ...t, entry: n });
            case o.s.WATCHED_MEDIA:
              return (0, a.jsx)(S.Z, { ...t, entry: n });
            case o.s.TOP_GAME:
              return (0, a.jsx)(P.Z, { ...t, entry: n });
            case o.s.TOP_ARTIST:
              return (0, a.jsx)(v.Z, { ...t, entry: n });
            case o.s.LISTENED_SESSION:
              return (0, a.jsx)(g.Z, { ...t, entry: n });
            case o.s.LAUNCHED_ACTIVITY:
              return (0, a.jsx)(N.ZP, { ...t, entry: n });
            default:
              return null;
          }
        };
      n.ZP = l.memo((e) => {
        var n;
        let { index: i, ...r } = e,
          [o, _] = l.useState("default"),
          x = (0, s.JA)("".concat(i)),
          N =
            null === (n = E.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.isStaff(),
          { isRich: I, appName: C } = (0, A.n)(r.entry),
          p = {
            entry: r.entry,
            channelId: r.channel.id,
            guildId: r.channel.guild_id,
            requestId: r.requestId,
            richPresenceName: I ? C : void 0,
          },
          { openOnHover: g } = (0, T.C)({ location: "MemberListContentRow" }),
          f = l.useRef(!1),
          [v, M] = l.useState(!1),
          [P, Z] = l.useState(!1),
          [S, j] = l.useState(!1),
          R = (0, c.e7)([m.Z], () => m.Z.keyboardModeEnabled);
        l.useEffect(() => {
          v && R && j(!0);
        }, [v, R]);
        let b = l.useCallback(
            (e) => {
              if (!!N)
                (0, d.jW)(e, async () => {
                  let { default: e } = await t.e("153").then(t.bind(t, 330150));
                  return () =>
                    (0, a.jsx)(e, { entry: r.entry, requestId: r.requestId });
                });
            },
            [r, N],
          ),
          k = l.useCallback(() => {
            _(String(Date.now()));
          }, []),
          B = () => {
            (f.current = !1),
              setTimeout(() => {
                !f.current && (M(!1), j(R));
              }, 100);
          };
        return (0, a.jsx)("div", {
          onMouseEnter: () => {
            (f.current = !0),
              setTimeout(() => {
                f.current && M(!0), g && (0, h.L)(O.xP.CARD_CLICK, p);
              }, 100);
          },
          onMouseLeave: B,
          children: (0, a.jsx)(u.Popout, {
            renderPopout: (e) => {
              let { closePopout: n } = e;
              return (0, a.jsx)(w, {
                closePopout: n,
                updatePopoutPosition: k,
                ...r,
              });
            },
            position: "left",
            shouldShow: g ? v : P,
            positionKey: o,
            onRequestOpen: () => (0, h.L)(O.xP.CARD_CLICK, p),
            onRequestClose: () => {
              S && B(), !g && (M(!1), Z(!1));
            },
            spacing: 8,
            children: (e, n) => {
              let { isShown: t } = n;
              return (0, a.jsx)(u.Clickable, {
                ...e,
                ...x,
                focusProps: {
                  offset: { top: 4, bottom: 4, left: 4, right: 4 },
                },
                onClick: () => {
                  g && !v && M(!0), !g && Z((e) => !e);
                },
                onMouseEnter: () => {
                  y(p);
                },
                onContextMenu: b,
                children: (0, a.jsx)(L, {
                  ...r,
                  selected: t,
                  hovered: f.current,
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
          return O;
        },
      });
      var a = t(735250),
        l = t(470079),
        i = t(758713),
        r = t(442837),
        s = t(481060),
        o = t(620662),
        c = t(841784),
        u = t(420660),
        d = t(429589),
        m = t(757182),
        _ = t(706454),
        E = t(374129),
        T = t(639351),
        h = t(823379),
        x = t(192918),
        N = t(22211),
        I = t(561308),
        C = t(919394),
        p = t(438226),
        g = t(206295),
        f = t(91140),
        v = t(297781),
        M = t(591853),
        P = t(410441),
        Z = t(797342),
        S = t(981631),
        A = t(689938);
      let O = {
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
        var n;
        let {
            channel: t,
            entry: i,
            disableGameProfileLinks: E,
            onReaction: T,
            onVoiceChannelPreview: j,
          } = e,
          {
            iconUrl: R,
            iconTitle: y,
            user: L,
            details: w,
            appName: b,
            activity: k,
            coverImageUrl: B,
            richIcon: U,
          } = (0, Z.n)(i),
          { primaryColor: G, secondaryColor: D } = (0, g.Z)(R),
          H = (0, r.e7)([_.default], () => _.default.locale),
          { streamPreviewUrl: Y, stream: V } = (0, N.Z)(i),
          {
            displayParticipants: F,
            participant1: W,
            participant2: z,
            numOtherParticipants: q,
          } = (0, x.Z)(i, 3),
          K = l.useCallback(
            (e) => {
              if (null == R || null == t || null == L) return;
              let n =
                q > 0
                  ? (0, p.VY)({
                      entry: i,
                      channel: t,
                      users: [W, z],
                      countOthers: q,
                    })
                  : (0, p.HV)(i, t, L);
              return (0, C.SO)({
                entry: i,
                applicationImageSrc: R,
                avatarSrcs: F.map((e) => e.getAvatarURL(t.guild_id, 128)),
                description: n,
                timestamp: (0, I.yh)(i, H),
                colors: [G, D],
                channelId: e,
              });
            },
            [R, t, F, i, H, q, W, z, G, D, L],
          );
        if (null == L) return null;
        let J = null != i.extra.platform ? O[i.extra.platform] : null,
          X = (0, a.jsx)(v.Gk, {
            location: null == Y ? v.Gt.POPOUT : v.Gt.STREAMING_POPOUT,
            children: f.W.map((e, n) => (0, a.jsx)(e, { entry: i }, n)),
          }),
          $ =
            null == Y
              ? (0, a.jsx)(M.wG, {
                  thumbnailSrc:
                    null !== (n = null != U ? U : B) && void 0 !== n ? n : R,
                  thumbnailTitle: y,
                  channel: t,
                  headerIcons:
                    null == J
                      ? null
                      : (0, a.jsx)(P.Z, {
                          Icon: J,
                          "aria-label":
                            A.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
                        }),
                  userDescription: (0, I.kr)(i)
                    ? A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING
                    : A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
                  title: b,
                  subtitle: w,
                  badges: X,
                  entry: i,
                  disableGameProfileLinks: E,
                })
              : (0, a.jsx)(M.jL, {
                  thumbnailSrc: U,
                  thumbnailTitle: y,
                  channel: t,
                  streamPreviewSrc: Y,
                  title: i.extra.game_name,
                  subtitle: w,
                  badges: X,
                  userDescription:
                    A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING,
                  entry: i,
                  stream: V,
                }),
          Q =
            (0, o.Z)(k, S.xjy.JOIN) || (0, c.Z)(k)
              ? (0, a.jsx)(d.Z, {
                  activity: k,
                  user: L,
                  ButtonComponent: (e) =>
                    (0, a.jsx)(M.Ll, {
                      IconComponent: s.GameControllerIcon,
                      ...e,
                    }),
                })
              : null,
          ee = [
            Q,
            (0, u.Z)(k)
              ? (0, a.jsx)(m.Z, {
                  activity: k,
                  ButtonComponent: (e) =>
                    (0, a.jsx)(M.Ll, { IconComponent: s.EyeIcon, ...e }),
                })
              : null,
          ].filter(h.lm);
        return (0, a.jsxs)(M.yR, {
          children: [
            $,
            (0, a.jsx)(M.St, {
              children: (0, a.jsx)(M.WT, {
                onReaction: T,
                onVoiceChannelPreview: j,
                user: L,
                channel: t,
                generateReactionImage: K,
                reactionImageAltText: (0, p.IS)(i, L),
                entry: i,
                buttons: ee,
              }),
            }),
          ],
        });
      };
    },
    678869: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return j;
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
        c = t(952164),
        u = t(768419),
        d = t(424678),
        m = t(239470),
        _ = t(894344),
        E = t(314897),
        T = t(908841),
        h = t(5192),
        x = t(561308),
        N = t(256726),
        I = t(206295),
        C = t(551228),
        p = t(591853),
        g = t(371991),
        f = t(410441),
        v = t(981631),
        M = t(616922),
        P = t(689938),
        Z = t(346292),
        S = t(164384);
      let A = (e, n, t) => {
        let { artist: a, media: l } = e,
          i =
            P.Z.Messages
              .MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST,
          r = h.ZP.getName(n.guild_id, n.id, t);
        return i
          .plainFormat({ artist: a, userName: r, media: l })
          .replaceAll("*", "");
      };
      function O(e) {
        let { activity: n } = e,
          t = n.timestamps,
          i = (0, g.tS)(),
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
              durationTimestamp: (0, x.T_)({ start: 0 }, r),
            };
          }, [n, i]);
        return null == s
          ? null
          : (0, a.jsxs)("div", {
              className: Z.listeningTimeline,
              children: [
                (0, a.jsx)(g.x3, { entry: t }),
                (0, a.jsx)("div", {
                  className: Z.seekBarContainer,
                  children: (0, a.jsx)("div", {
                    className: Z.seekBarFill,
                    style: s,
                  }),
                }),
                (0, a.jsx)(o.Text, {
                  className: Z.timestamp,
                  variant: "text-xs/normal",
                  tabularNumbers: !0,
                  color: void 0,
                  children: r,
                }),
              ],
            });
      }
      function j(e) {
        var n, t, h;
        let g,
          Z,
          j,
          {
            channel: R,
            entry: y,
            closePopout: L,
            onReaction: w,
            onVoiceChannelPreview: b,
          } = e,
          {
            activity: k,
            currentEntry: B,
            artist: U,
            imageUrl: G,
            title: D,
            user: H,
          } = (0, C.pi)(y),
          { primaryColor: Y, secondaryColor: V } = (0, I.Z)(G),
          F = (0, r.e7)(
            [u.Z, E.default],
            () =>
              (null == k ? void 0 : k.type) === v.IIU.LISTENING && null != H
                ? (0, m.Z)(u.Z, E.default, H, k)
                : void 0,
            [k, H],
            s.Z,
          ),
          W = l.useCallback(() => {
            var e;
            if (null == R || null == H) return;
            let n =
                null === (e = k.timestamps) || void 0 === e ? void 0 : e.start,
              t = (0, x.T_)(null != n ? { start: n } : y, Date.now());
            return (0, N.CR)({
              user: H,
              channel: R,
              mediaImageSrc: G,
              artist: U,
              description: A({ artist: U, media: D }, R, H),
              colors: [Y, V],
              badges: (0, N.jE)({ timestamp: t }),
            });
          }, [k, U, R, y, G, Y, V, D, H]);
        if (null == k || null == B) return null;
        let z = U,
          q = [];
        if (B.media.provider === i.p.SPOTIFY) {
          (Z = () => {
            (0, c.aG)(k);
          }),
            (j = () => {
              (0, c.Z5)(k, H.id);
            }),
            (g = () => {
              (0, c.aG)(k);
            });
          (z = (0, a.jsx)(d.Z, {
            artists: U,
            canOpen: null != k.sync_id,
            linkClassName: S.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
              (0, c.d$)(k, H.id, e);
            },
          })),
            (null == F ? void 0 : F.syncDisabled) === !1 &&
              q.push(
                (0, a.jsx)(
                  p.Ll,
                  {
                    onClick: () => {
                      (0, _.Z)(F, M.kG.USER_ACTIVITY_SYNC), L();
                    },
                    IconComponent: o.UserPlayIcon,
                    children:
                      P.Z.Messages
                        .ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
                  },
                  "listen-along",
                ),
              );
        }
        let K = (0, a.jsx)(p.wG, {
          thumbnailSrc: G,
          onClickThumbnail: j,
          channel: R,
          entry: y,
          headerIcons:
            B.media.provider === i.p.SPOTIFY
              ? (0, a.jsx)(f.Z, {
                  onClick: g,
                  "aria-label":
                    P.Z.Messages
                      .ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
                  Icon: T.Z,
                })
              : null,
          userDescription: (0, x.kr)(y)
            ? P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING
            : P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
          title: D,
          onClickTitle: Z,
          subtitle: z,
          badges: null,
          children:
            (null === (n = k.timestamps) || void 0 === n ? void 0 : n.start) !=
              null && (0, a.jsx)(O, { activity: k }),
        });
        return (0, a.jsxs)(p.yR, {
          children: [
            K,
            (0, a.jsx)(p.St, {
              children: (0, a.jsx)(p.WT, {
                onReaction: w,
                onVoiceChannelPreview: b,
                user: H,
                channel: R,
                generateReactionImage: W,
                reactionImageAltText:
                  ((t = U),
                  (h = H),
                  P.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format(
                    { username: h.username, activity: t },
                  )),
                entry: y,
                buttons: q,
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
        c = t(594174),
        u = t(908841),
        d = t(823379),
        m = t(5192),
        _ = t(561308),
        E = t(256726),
        T = t(206295),
        h = t(278399),
        x = t(297781),
        N = t(591853),
        I = t(410441),
        C = t(616922),
        p = t(689938);
      let g = (e, n, t, a) => {
          let l = (function (e) {
              if (e === i._.WEEK)
                return p.Z.Messages
                  .MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT;
            })(a),
            r = m.ZP.getName(n.guild_id, n.id, t),
            s = e.extra.artist.name;
          return l.plainFormat({ artist: s, userName: r }).replaceAll("*", "");
        },
        f = (e, n) =>
          p.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_TOP_ARTIST.format({
            username: n.username,
            artist: e.extra.artist.name,
          });
      n.Z = (e) => {
        let {
            channel: n,
            entry: t,
            onReaction: i,
            onVoiceChannelPreview: m,
          } = e,
          { parent_title: v, provider: M, image_url: P } = t.extra.media,
          Z = t.extra.artist.name,
          S = (0, s.e7)([c.default], () => c.default.getUser(t.author_id)),
          { primaryColor: A, secondaryColor: O } = (0, T.Z)(P),
          j = (0, _.Nq)(t),
          R = l.useCallback(() => {
            if (null == n || null == S || !(0, d.Hi)(j, h.y9)) return;
            let e = g(t, n, S, j);
            return (0, E.CR)({
              user: S,
              channel: n,
              mediaImageSrc: P,
              artist: Z,
              description: e,
              colors: [A, O],
              badges: (0, E.UU)(t),
            });
          }, [P, Z, n, t, A, j, O, S]);
        if (null == S || !(0, d.Hi)(j, h.y9)) return null;
        let y = () => {
          let e = C.Hw.ALBUM,
            n = o.Z.isProtocolRegistered()
              ? C.C7.PLAYER_OPEN(e, t.extra.media.external_parent_id)
              : C.C7.WEB_OPEN(e, t.extra.media.external_parent_id);
          window.open(n);
        };
        return (0, a.jsxs)(N.yR, {
          children: [
            (0, a.jsx)(N.wG, {
              onClickTitle: y,
              onClickSubtitle: () => {
                let e = C.Hw.ARTIST,
                  n = o.Z.isProtocolRegistered()
                    ? C.C7.PLAYER_OPEN(e, t.extra.artist.external_id)
                    : C.C7.WEB_OPEN(e, t.extra.artist.external_id);
                window.open(n);
              },
              onClickThumbnail: y,
              thumbnailSrc: P,
              channel: n,
              entry: t,
              headerIcons:
                M === r.p.SPOTIFY
                  ? (0, a.jsx)(I.Z, {
                      Icon: u.Z,
                      "aria-label": p.Z.Messages.SPOTIFY,
                    })
                  : null,
              userDescription:
                p.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
              title: v,
              subtitle: Z,
              badges: (0, a.jsx)(x.Gk, {
                location: x.Gt.POPOUT,
                children: h.Ho.map((e, n) => (0, a.jsx)(e, { entry: t }, n)),
              }),
            }),
            (0, a.jsx)(N.St, {
              children: (0, a.jsx)(N.WT, {
                onReaction: i,
                onVoiceChannelPreview: m,
                user: S,
                channel: n,
                generateReactionImage: R,
                reactionImageAltText: f(t, S),
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
        o = t(561308),
        c = t(919394),
        u = t(206295),
        d = t(227172),
        m = t(555672),
        _ = t(297781),
        E = t(591853),
        T = t(410441),
        h = t(797342),
        x = t(689938);
      let N = (e, n, t, a) => {
          let l = (function (e) {
              if (e === i._.WEEK)
                return x.Z.Messages
                  .MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT;
            })(a),
            r = s.ZP.getName(n.guild_id, n.id, t),
            o = e.extra.game_name;
          return l
            .plainFormat({ gameName: o, userName: r })
            .replaceAll("*", "");
        },
        I = (e, n) =>
          x.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
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
          {
            iconUrl: p,
            iconTitle: g,
            user: f,
            details: v,
            appName: M,
            coverImageUrl: P,
          } = (0, h.n)(t),
          { primaryColor: Z, secondaryColor: S } = (0, u.Z)(p),
          A = (0, o.yA)(t),
          O = (0, o.Nq)(t),
          j = l.useCallback(
            (e) => {
              if (
                null != n &&
                null != f &&
                null != A &&
                null != O &&
                !!(0, m.qy)(O)
              )
                return (0, c.SO)({
                  entry: t,
                  applicationImageSrc: p,
                  avatarSrcs: [
                    f.getAvatarURL(null == n ? void 0 : n.guild_id, 128),
                  ],
                  description: N(t, n, f, O),
                  timestamp:
                    x.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format(
                      { hours: Math.round(A / r.Z.Seconds.HOUR) },
                    ),
                  colors: [Z, S],
                  channelId: e,
                });
            },
            [p, n, A, t, Z, O, S, f],
          );
        if (null == f || null == A || null == O || !(0, m.qy)(O)) return null;
        let R = null != t.extra.platform ? d.v[t.extra.platform] : null;
        return (0, a.jsxs)(E.yR, {
          children: [
            (0, a.jsx)(E.wG, {
              thumbnailSrc: null != P ? P : p,
              thumbnailTitle: g,
              channel: n,
              headerIcons:
                null == R
                  ? null
                  : (0, a.jsx)(T.Z, {
                      Icon: R,
                      "aria-label":
                        x.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
                    }),
              entry: t,
              userDescription:
                x.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
              title: M,
              subtitle: v,
              badges: (0, a.jsx)(_.Gk, {
                location: _.Gt.POPOUT,
                children: m.Hs.map((e, n) => (0, a.jsx)(e, { entry: t }, n)),
              }),
              disableGameProfileLinks: i,
            }),
            (0, a.jsx)(E.St, {
              children: (0, a.jsx)(E.WT, {
                onReaction: s,
                onVoiceChannelPreview: C,
                user: f,
                channel: n,
                generateReactionImage: j,
                reactionImageAltText: I(t, f),
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
        o = t(49012),
        c = t(5192),
        u = t(591759),
        d = t(561308),
        m = t(644810),
        _ = t(206295),
        E = t(335326),
        T = t(297781),
        h = t(591853),
        x = t(410441),
        N = t(689938);
      let I = (e, n, t) => {
          let a = N.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
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
        C = (e, n) =>
          N.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
            username: n.username,
            activity: e.extra.media_title,
          });
      n.Z = (e) => {
        let {
            channel: n,
            entry: t,
            onReaction: c,
            onVoiceChannelPreview: p,
          } = e,
          { user: g, mediaImageSrc: f, episodeDescription: v } = (0, E.Bj)(t),
          { primaryColor: M, secondaryColor: P } = (0, _.Z)(f),
          Z = (0, i.e7)([s.default], () => s.default.locale),
          S = l.useCallback(
            (e) => {
              if (null != g && null != f)
                return (0, m.B)({
                  entry: t,
                  mediaImageSrc: f,
                  avatarSrc: g.getAvatarURL(
                    null == n ? void 0 : n.guild_id,
                    128,
                  ),
                  description: I(t, n, g),
                  timestamp: (0, d.yh)(t, Z),
                  episodeDescription: v,
                  colors: [M, P],
                  channelId: e,
                });
            },
            [n, t, v, Z, f, M, P, g],
          ),
          A = () => {
            if (null == t.extra.url) return;
            let e = u.Z.safeParseWithQuery(t.extra.url);
            if (null != e && null != e.protocol && null != e.hostname)
              (0, o.q)({ href: u.Z.format(e), trusted: !1 });
          };
        return null == g
          ? null
          : (0, a.jsxs)(h.yR, {
              children: [
                (0, a.jsx)(h.wG, {
                  thumbnailSrc: f,
                  channel: n,
                  entry: t,
                  userDescription: (0, d.kr)(t)
                    ? N.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING
                    : N.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED,
                  title: t.extra.media_title,
                  subtitle: t.extra.media_subtitle,
                  headerIcons: (0, a.jsx)(x.Z, {
                    Icon: r.CrunchyrollNeutralIcon,
                    "aria-label": N.Z.Messages.CRUNCHYROLL,
                  }),
                  badges: (0, a.jsx)(T.Gk, {
                    location: T.Gt.POPOUT,
                    children: E.td.map((e, n) =>
                      (0, a.jsx)(e, { entry: t }, n),
                    ),
                  }),
                  onClickTitle: A,
                  onClickThumbnail: A,
                }),
                (0, a.jsx)(h.St, {
                  children: (0, a.jsx)(h.WT, {
                    onReaction: c,
                    onVoiceChannelPreview: p,
                    user: g,
                    channel: n,
                    generateReactionImage: S,
                    reactionImageAltText: C(t, g),
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
        c = t(576306),
        u = t(442937);
      let d = () =>
        (0, a.jsxs)("div", {
          className: c.coachtipInner,
          children: [
            (0, a.jsx)("img", {
              src: u,
              alt: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_IMAGE_ALT,
              className: c.coachtipAsset,
            }),
            (0, a.jsxs)("div", {
              className: c.coachtipTextContainer,
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
          [o, u] = l.useState(!1);
        return (l.useEffect(() => {
          setTimeout(() => {
            u(!0);
          }, 300);
        }),
        t !== i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
          ? (0, a.jsx)(a.Fragment, { children: n })
          : (0, a.jsx)(r.Tooltip, {
              text: (0, a.jsx)(d, {}),
              tooltipClassName: c.coachtip,
              tooltipContentClassName: c.coachtipContent,
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
          return eC;
        },
        St: function () {
          return e_;
        },
        WT: function () {
          return eE;
        },
        jL: function () {
          return eI;
        },
        wG: function () {
          return eN;
        },
        yR: function () {
          return eu;
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
      var c = t(442837),
        u = t(704215),
        d = t(692547),
        m = t(481060),
        _ = t(493683),
        E = t(475179),
        T = t(287734),
        h = t(872810),
        x = t(607070),
        N = t(220779),
        I = t(201133),
        C = t(557135),
        p = t(194082),
        g = t(605236),
        f = t(543241),
        v = t(318374),
        M = t(258609),
        P = t(810568),
        Z = t(168524),
        S = t(382182),
        A = t(871118),
        O = t(565138),
        j = t(66999),
        R = t(790642),
        y = t(359110),
        L = t(171368),
        w = t(12168),
        b = t(237583),
        k = t(592125),
        B = t(430824),
        U = t(496675),
        G = t(699516),
        D = t(9156),
        H = t(594174),
        Y = t(979651),
        V = t(938475),
        F = t(626135),
        W = t(768581),
        z = t(5192),
        q = t(792125),
        K = t(26033),
        J = t(656709),
        X = t(192918),
        $ = t(22211),
        Q = t(571243),
        ee = t(206295),
        en = t(111386),
        et = t(797342),
        ea = t(43205),
        el = t(896449),
        ei = t(469153),
        er = t(206583),
        es = t(981631),
        eo = t(689938),
        ec = t(164384);
      function eu(e) {
        let { children: n } = e,
          t = l.useRef(null);
        return (
          (0, m.useFocusLock)(t),
          (0, a.jsx)("div", { className: ec.popout, ref: t, children: n })
        );
      }
      function ed(e) {
        let {
            children: n,
            backgroundImgSrc: t,
            className: l,
            style: i = {},
          } = e,
          { primaryColor: s, secondaryColor: o } = (0, ee.Z)(t);
        return (
          null != t &&
            (i.background = "linear-gradient(45deg, "
              .concat(s, ", ")
              .concat(o, ")")),
          (0, a.jsx)("div", {
            "data-disable-adaptive-theme": !0,
            className: r()(ec.hero, (0, q.Q)(es.BRd.DARK), l),
            style: i,
            children: n,
          })
        );
      }
      let em = l.createContext(null);
      function e_(e) {
        let { children: n } = e,
          t = l.useRef(null);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className: ec.interactionsContainerHeader,
              ref: (e) => (t.current = e),
            }),
            (0, a.jsx)("div", {
              className: ec.interactionsContainer,
              children: (0, a.jsx)(em.Provider, {
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
            onVoiceChannelPreview: p,
          } = e,
          [f, v] = l.useState(!1),
          [M, P] = l.useState(null),
          Z = (0, c.e7)(
            [U.Z],
            () => null != n && U.Z.can(es.Plq.SEND_MESSAGES, n),
          ),
          S = (0, Q.a)({ location: "PopoutReactor" }),
          [A, L] = l.useState(!1),
          [w, H] = l.useState(!1),
          { voiceBar: W, joinVoiceButton: q } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
              { streamPreviewUrl: r, channel: s } = (0, $.Z)(t),
              { isRich: o, appName: u } = (0, et.n)(t),
              { needSubscriptionToAccess: _ } = (0, j.Z)(
                null == n ? void 0 : n.id,
              ),
              T = (0, c.e7)([B.Z], () =>
                null != s ? B.Z.getGuild(s.guild_id) : void 0,
              ),
              h = (0, c.Wu)(
                [V.ZP],
                () => (null != s ? V.ZP.getVoiceStatesForChannel(s) : []),
                [s],
              ),
              x = (0, c.e7)([Y.Z], () =>
                Y.Z.isInChannel(null == s ? void 0 : s.id),
              ),
              N = l.useMemo(() => {
                for (let e of h) {
                  let n = k.Z.getDMFromUserId(e.user.id),
                    t = null != n && D.ZP.isChannelMuted(null, n),
                    a = G.Z.isBlocked(e.user.id);
                  if (t || a) return !0;
                }
                return !1;
              }, [h]);
            if (null == s || null == T)
              return { voiceBar: void 0, joinVoiceButton: void 0 };
            let I = null != r,
              p = () => {
                E.Z.updateChatOpen(s.id, !0), (0, y.Kh)(s.id);
                null == i || i(s, o ? u : void 0);
              },
              g = () => {
                C.Z.handleVoiceConnect({
                  channel: s,
                  connected: x,
                  needSubscriptionToAccess: _,
                  routeDirectlyToChannel: !0,
                });
              },
              f = (e) => {
                let {
                    children: n,
                    text: t,
                    hasBlockedOrMutedVCParticipant: l,
                  } = e,
                  i = l
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          l &&
                            (0, a.jsx)(m.WarningIcon, {
                              size: "custom",
                              width: 13,
                              height: 13,
                              className: ec.popoutBlockedWarningIcon,
                            }),
                          eo.Z.Messages
                            .MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING,
                        ],
                      })
                    : t;
                return (0, a.jsx)(
                  m.Tooltip,
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
              v = (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: ec.voiceChannelPopoutReactorHeader,
                    children: [
                      (0, a.jsx)(f, {
                        text: eo.Z.Messages
                          .MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                        hasBlockedOrMutedVCParticipant: N,
                        children: (e) =>
                          (0, a.jsxs)(m.Clickable, {
                            ...e,
                            "aria-label":
                              eo.Z.Messages
                                .MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                            onClick: p,
                            className: ec.voiceChannelPopoutReactorChannel,
                            children: [
                              (0, a.jsx)(O.Z, {
                                guild: T,
                                size: O.Z.Sizes.SMOL,
                                className: ec.voiceChannelGuildIcon,
                                active: !0,
                              }),
                              (0, a.jsx)(m.ChevronSmallRightIcon, {
                                size: "xxs",
                                color: d.Z.colors.INTERACTIVE_NORMAL,
                              }),
                              (0, a.jsx)(m.VoiceNormalIcon, {
                                size: "xs",
                                color: d.Z.colors.TEXT_NORMAL,
                              }),
                              (0, a.jsx)(m.Text, {
                                variant: "text-sm/medium",
                                color: "text-normal",
                                className: ec.voiceChannelName,
                                children: s.name,
                              }),
                            ],
                          }),
                      }),
                      (0, a.jsx)(b.Z, {
                        guildId: T.id,
                        users: h,
                        max: 3,
                        renderUser: (e, n) =>
                          (0, a.jsx)(m.Avatar, {
                            src: e.user.getAvatarURL(T.id, 16),
                            size: m.AvatarSizes.SIZE_16,
                            "aria-label": "avatar",
                            className: n,
                          }),
                        renderMoreUsers: (e) =>
                          (0, a.jsx)("div", {
                            className: ec.voiceChannelAdditionalParticipants,
                            children: (0, a.jsx)(m.Text, {
                              variant: "text-xxs/semibold",
                              color: "text-normal",
                              children: e,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: ec.primaryActionPopoutDivider,
                  }),
                ],
              });
            return {
              voiceBar: v,
              joinVoiceButton: x
                ? null
                : (0, a.jsx)(f, {
                    hasBlockedOrMutedVCParticipant: N,
                    children: (e) =>
                      (0, a.jsx)(eC, {
                        ...e,
                        color: m.Button.Colors.GREEN,
                        onClick: g,
                        IconComponent: I ? m.ScreenIcon : m.VoiceNormalIcon,
                        children: I ? eo.Z.Messages.WATCH : eo.Z.Messages.JOIN,
                      }),
                  }),
            };
          })({ channel: n, entry: T, onVoiceChannelPreview: p }),
          K = null != q && 0 === h.length ? [q] : h,
          X = K.length > 0,
          ee = K.length >= 2,
          [ea, el] = l.useState(!X),
          eu = z.ZP.getName(
            null == n ? void 0 : n.guild_id,
            null == n ? void 0 : n.id,
            t,
          ),
          ed = null != n && f ? "#".concat(n.name) : "@".concat(eu),
          em = f
            ? eo.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER
            : eo.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL,
          e_ = async (e) => {
            if (null != e) {
              if (
                (F.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                  surface_type: er.Kd.GUILD_MEMBER_LIST,
                  channel_id: null == n ? void 0 : n.id,
                  guild_id: null == n ? void 0 : n.guild_id,
                }),
                S)
              ) {
                let l;
                if (
                  ((0, g.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                  L(!0),
                  H(!1),
                  f)
                )
                  o()(
                    null != n,
                    "shareToChannelMode should only be true if a valid channel is passed",
                  ),
                    (l = n);
                else {
                  var a;
                  let e = await _.Z.getOrEnsurePrivateChannel(t.id);
                  l =
                    null !== (a = k.Z.getChannel(e)) && void 0 !== a ? a : null;
                }
                return (
                  o()(null != l, "Send channel must be defined"),
                  eh({
                    reply: ":".concat(e.name, ":"),
                    sendToChannel: l,
                    onComplete: (e, n) => {
                      H(!0),
                        setTimeout(() => {
                          L(!1), s(e, n);
                        }, 600);
                    },
                    interactionType: er.xP.REACTION_EMOJI_REACT_SENT,
                  })
                );
              }
              el(!0), null != M && (M.insertEmoji(e, !1, !1), M.focus());
            }
          },
          eE = async (e) => {
            let a;
            if (
              (S && (0, g.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
              f)
            )
              o()(
                null != n,
                "shareToChannelMode should only be true if a valid channel is passed",
              ),
                (a = n);
            else {
              let e = await _.Z.openPrivateChannel(t.id, !1, !1),
                n = k.Z.getChannel(e);
              o()(null != n, "DM channel must be defined"), (a = n);
            }
            let l =
              a.type === es.d4z.DM
                ? er.xP.DM_REACTION_MESSAGE_SENT
                : er.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return eh({
              reply: e,
              sendToChannel: a,
              interactionType: l,
              onComplete: s,
            });
          },
          eh = async (e) => {
            let {
              reply: n,
              sendToChannel: t,
              onComplete: a,
              interactionType: l,
            } = e;
            if ((0, R.Io)("ContentPopout Reactor"))
              await (0, J.p)({ channel: t, content: n, entry: T });
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
                await (0, I.B)({ file: e, channel: t, altText: r, reply: n });
            }
            null == a || a(l, t);
          },
          ex = null != x ? x : null != W ? W : void 0;
        return (0, a.jsxs)("div", {
          style: { pointerEvents: A ? "none" : "all" },
          children: [
            (0, a.jsx)(ei.Z, {
              sent: w,
              shown: A,
              className: ec.toastContainer,
            }),
            null != ex
              ? ex
              : S
                ? (0, a.jsx)(en.Z, {
                    children: (0, a.jsxs)("div", {
                      className: ec.emojiHotrailShareToChannel,
                      children: [
                        (0, a.jsx)(eT, { channel: n, onClickSuggestion: e_ }),
                        (0, a.jsx)(N.dE, { onSelectEmoji: e_ }),
                      ],
                    }),
                  })
                : (0, a.jsx)("div", {
                    className: ec.emojiHotrailShareToChannel,
                    children: (0, a.jsx)(eT, {
                      channel: n,
                      onClickSuggestion: e_,
                    }),
                  }),
            (0, a.jsxs)("div", {
              className: ea
                ? ec.inputContainerShareToChannel
                : ec.hiddenButRenderedInputField,
              children: [
                (0, a.jsx)(N.A7, {
                  placeholder: eo.Z.Messages.TEXTAREA_PLACEHOLDER.format({
                    channel: ed,
                  }),
                  onEnter: eE,
                  setEditorRef: (e) => P(e),
                  channel: f ? n : void 0,
                  showEmojiButton: null != ex,
                  renderAttachButton: Z
                    ? () =>
                        (0, a.jsx)(m.Tooltip, {
                          text: em,
                          children: (e) =>
                            (0, a.jsx)(m.Clickable, {
                              ...e,
                              className: ec.shareToChannelButton,
                              onClick: () => v((e) => !e),
                              children: f
                                ? (0, a.jsx)(m.TextIcon, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                  })
                                : (0, a.jsx)(m.AtIcon, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                  }),
                            }),
                        })
                    : void 0,
                }),
                X &&
                  (0, a.jsx)(m.Clickable, {
                    onClick: () => el(!1),
                    className: ec.primaryActionPopoutMessageCloseIcon,
                    children: (0, a.jsx)(m.XSmallIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: d.Z.colors.ICON_PRIMARY,
                    }),
                  }),
              ],
            }),
            !1 === ea &&
              (0, a.jsxs)("div", {
                className: ec.primaryActionPopoutActionButtons,
                children: [
                  (0, a.jsxs)(
                    m.Button,
                    {
                      className: ec.secondaryButton,
                      color: m.Button.Colors.CUSTOM,
                      onClick: () => el(!0),
                      innerClassName: ec.iconButton,
                      size: ee ? m.Button.Sizes.MIN : m.Button.Sizes.LARGE,
                      children: [
                        (0, a.jsx)(m.ChatIcon, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          colorClass: ec.secondaryText,
                        }),
                        !ee &&
                          (0, a.jsx)(m.Text, {
                            variant: "text-md/semibold",
                            className: ec.secondaryText,
                            children: eo.Z.Messages.USER_POPOUT_MESSAGE,
                          }),
                      ],
                    },
                    "toggleMessageMode",
                  ),
                  K,
                ],
              }),
          ],
        });
      }
      let eT = (e) => {
        let { channel: n, onClickSuggestion: t } = e,
          [i, r] = l.useState(!1);
        l.useEffect(() => {
          r(!0);
        }, []);
        let s = !!x.Z.keyboardModeEnabled && !i,
          o = (0, f.wC)(null == n ? void 0 : n.guild_id)
            .slice(0, 5)
            .map((e) =>
              null == e.id
                ? { emoji: e, url: e.url }
                : {
                    emoji: e,
                    url: (0, W.gT)({
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
                    children: (0, a.jsx)(m.TooltipContainer, {
                      text: eo.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format(
                        { emojiName: n.name },
                      ),
                      position: "top",
                      "aria-label":
                        eo.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format(
                          { emojiName: n.name },
                        ),
                      color: m.Tooltip.Colors.PRIMARY,
                      shouldShow: !s && void 0,
                      children: (0, a.jsx)(w.u, {
                        emoji: n,
                        isDisabled: !i,
                        onClick: () => t(n),
                        className: ec.emoji,
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
          } = e,
          s = null == n ? void 0 : n.guild_id,
          {
            displayParticipants: o,
            participant1: u,
            participant2: d,
            numOtherParticipants: _,
          } = (0, X.Z)(l, 3),
          E = (0, c.e7)([H.default], () => H.default.getUser(l.author_id)),
          { streamPreviewUrl: T } = (0, $.Z)(l),
          h = [u, d];
        return (0, a.jsxs)("div", {
          className: ec.popoutContentHeader,
          children: [
            (0, a.jsxs)("div", {
              className: ec.popoutUserContainer,
              children: [
                (0, a.jsx)(v.Z, {
                  maxUsers: 3,
                  users: o,
                  size: m.AvatarSizes.SIZE_24,
                  avatarClassName: ec.popoutStackedAvatar,
                  hideOverflowCount: !0,
                  disableUsernameTooltip: !0,
                }),
                (0, a.jsx)(m.Spacer, { size: 8, horizontal: !0 }),
                (0, a.jsx)(m.Heading, {
                  variant: "heading-sm/normal",
                  className: ec.popoutTextSecondary,
                  children: t.format({
                    user1: z.ZP.getName(s, null == n ? void 0 : n.id, h[0]),
                    user2: z.ZP.getName(s, null == n ? void 0 : n.id, h[1]),
                    countOthers: _,
                    nameHook: (e, n) =>
                      (0, a.jsx)(m.Clickable, {
                        tag: "span",
                        onClick: () =>
                          (0, L.openUserProfileModal)({
                            userId: h[parseInt(n)].id,
                          }),
                        className: ec.maybeClickable,
                        children: (0, a.jsx)(
                          m.Text,
                          {
                            variant: "text-sm/medium",
                            className: r()(
                              ec.popoutUsername,
                              ec.popoutTextPrimary,
                            ),
                            children: e,
                          },
                          n,
                        ),
                      }),
                  }),
                }),
              ],
            }),
            null != T && (0, a.jsx)(p.ZP, { size: p.ZP.Sizes.SMALL }),
            null != E &&
              (0, a.jsx)(el.Z, {
                user: E,
                channel: n,
                guildId: s,
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
          : (0, a.jsx)(m.Clickable, {
              className: ec.maybeClickable,
              onClick: t,
              children: n,
            });
      }
      function eN(e) {
        var n;
        let {
            thumbnailSrc: t,
            thumbnailFallbackSrc: l,
            thumbnailTitle: i,
            title: s,
            subtitle: o,
            badges: c,
            children: u,
            onClickThumbnail: d,
            onClickTitle: _,
            onClickSubtitle: E,
            headerIcons: T,
            disableGameProfileLinks: h = !1,
            ...x
          } = e,
          { entry: N } = x,
          I = (0, K.dX)(N),
          C = (0, Z.Z)({
            location: "ContentPopout",
            applicationId:
              I && !h
                ? null === (n = N.extra) || void 0 === n
                  ? void 0
                  : n.application_id
                : void 0,
            source: P.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: N.author_id,
          }),
          p = I ? C : void 0;
        return (0, a.jsxs)("div", {
          className: ec.popoutContentWrapper,
          children: [
            (0, a.jsx)(eh, { disableGameProfileLinks: h, ...x }),
            (0, a.jsxs)(ed, {
              backgroundImgSrc: t,
              children: [
                (0, a.jsxs)("div", {
                  className: ec.popoutHeroInner,
                  children: [
                    (0, a.jsx)("div", {
                      className: ec.popoutThumbnailContainer,
                      children: (0, a.jsx)(ex, {
                        onClick: null != d ? d : p,
                        children: (0, a.jsx)(ea.f, {
                          size: 72,
                          constrain: "width",
                          alt: i,
                          src: t,
                          fallbackSrc: l,
                          className: ec.contentImage,
                          showTooltip: null != i,
                        }),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: ec.popoutHeroBody,
                      children: [
                        (0, a.jsx)(ex, {
                          onClick: null != _ ? _ : p,
                          children: (0, a.jsx)(m.Heading, {
                            variant: "heading-md/medium",
                            className: r()(ec.popoutHeroTextPrimary, {
                              [ec.popoutHeroTextPrimaryShort]: null != T,
                            }),
                            lineClamp: 3,
                            children: s,
                          }),
                        }),
                        null != o
                          ? (0, a.jsx)(ex, {
                              onClick: null != E ? E : p,
                              children: (0, a.jsx)(m.Text, {
                                variant: "text-sm/normal",
                                className: ec.popoutHeroTextSecondary,
                                children: o,
                              }),
                            })
                          : null,
                        (0, a.jsx)(m.Spacer, { size: 8 }),
                        c,
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: ec.popoutHeaderIcons,
                      children: T,
                    }),
                  ],
                }),
                u,
              ],
            }),
          ],
        });
      }
      function eI(e) {
        var n;
        let {
            title: t,
            subtitle: i,
            badges: r,
            stream: s,
            thumbnailSrc: o,
            thumbnailFallbackSrc: u,
            thumbnailTitle: d,
            onClickThumbnail: _,
            onClickTitle: E,
            onClickSubtitle: x,
            ...N
          } = e,
          I = (0, c.e7)([k.Z], () =>
            k.Z.getChannel(null == s ? void 0 : s.channelId),
          ),
          [C] = l.useMemo(() => (0, S.p9)(I, Y.Z, B.Z, U.Z, M.Z), [I]),
          { entry: p } = N,
          g = (0, K.dX)(p),
          f = (0, Z.Z)({
            location: "ContentPopout",
            applicationId: g
              ? null === (n = p.extra) || void 0 === n
                ? void 0
                : n.application_id
              : void 0,
            source: P.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: p.author_id,
          }),
          v = g ? f : void 0;
        return null == s
          ? null
          : (0, a.jsxs)("div", {
              className: ec.popoutContentWrapper,
              children: [
                (0, a.jsx)(eh, { ...N }),
                (0, a.jsxs)("div", {
                  className: ec.streamingPopoutHero,
                  children: [
                    (0, a.jsx)(ex, {
                      onClick: C
                        ? () => {
                            T.default.selectVoiceChannel(s.channelId),
                              (0, h.iV)(s);
                          }
                        : void 0,
                      children: (0, a.jsxs)("div", {
                        style: { position: "relative" },
                        children: [
                          (0, a.jsx)(A.Z, {
                            className: ec.streamingPopoutImg,
                            stream: s,
                          }),
                          C &&
                            (0, a.jsx)("div", {
                              className: ec.streamCTA,
                              children: (0, a.jsx)(m.Text, {
                                variant: "text-md/normal",
                                children: eo.Z.Messages.WATCH_STREAM,
                              }),
                            }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: ec.streamingPopoutHeader,
                      children: [
                        null != o &&
                          (0, a.jsx)("div", {
                            className: ec.popoutThumbnailContainer,
                            children: (0, a.jsx)(ex, {
                              onClick: null != _ ? _ : v,
                              children: (0, a.jsx)(ea.f, {
                                size: 72,
                                constrain: "width",
                                alt: d,
                                src: o,
                                fallbackSrc: u,
                                className: ec.contentImage,
                              }),
                            }),
                          }),
                        (0, a.jsxs)("div", {
                          className: ec.streamingPopoutHeaderText,
                          children: [
                            (0, a.jsx)(ex, {
                              onClick: null != E ? E : v,
                              children: (0, a.jsx)(m.Heading, {
                                variant: "heading-md/semibold",
                                className: ec.popoutTextPrimary,
                                lineClamp: 3,
                                children: t,
                              }),
                            }),
                            null != i
                              ? (0, a.jsx)(ex, {
                                  onClick: null != x ? x : v,
                                  children: (0, a.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    className: ec.popoutTextSecondary,
                                    children: i,
                                  }),
                                })
                              : null,
                            (0, a.jsx)(m.Spacer, { size: 8 }),
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
      function eC(e) {
        let { IconComponent: n, children: t, className: l, ...i } = e;
        return (0, a.jsxs)(m.Button, {
          ...i,
          className: r()(l, ec.primaryButton),
          innerClassName: null != n ? ec.iconButton : void 0,
          size: m.Button.Sizes.LARGE,
          children: [
            null != n
              ? (0, a.jsx)(n, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: d.Z.colors.WHITE,
                })
              : null,
            (0, a.jsx)(m.Text, {
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
          return _;
        },
      });
      var a = t(735250);
      t(470079);
      var l = t(481060),
        i = t(239091),
        r = t(299206),
        s = t(810568),
        o = t(168524),
        c = t(725119),
        u = t(26033),
        d = t(689938),
        m = t(243113);
      function _(e) {
        var n;
        let {
            user: t,
            guildId: _,
            channel: E,
            entry: T,
            onSelect: h,
            disableGameProfileLinks: x,
          } = e,
          N = (0, c.Z)({
            userId: t.id,
            guildId: _,
            channelId: null == E ? void 0 : E.id,
          }),
          I = (0, r.Z)({ id: t.id, label: d.Z.Messages.COPY_ID_USER }),
          C = (0, u.dX)(T),
          p = (0, o.Z)({
            location: "ContentPopoutContextMenu",
            applicationId:
              C && !0 !== x
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
                      N,
                      null != p &&
                        (0, a.jsx)(l.MenuItem, {
                          id: "game-profile",
                          label: d.Z.Messages.GAME_PROFILE,
                          action: p,
                        }),
                    ],
                  }),
                  (0, a.jsx)(l.MenuGroup, { children: I }),
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
                  className: m.menuIcon,
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
      var l = t(567526),
        i = t(442837),
        r = t(481060),
        s = t(607070),
        o = t(689938),
        c = t(348910),
        u = t(810819);
      let d = () =>
        (0, a.jsxs)("div", {
          className: u.toast,
          children: [
            (0, a.jsx)(r.Spinner, {
              type: r.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
              className: c.loadingSpinner,
            }),
            (0, a.jsx)(r.Text, {
              color: "header-primary",
              variant: "text-md/normal",
              children: o.Z.Messages.CONTENT_INVENTORY_MESSAGE_SENDING,
            }),
          ],
        });
      n.Z = (e) => {
        let { shown: n, sent: t, className: c } = e,
          u = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
          m = (0, r.useTransition)(
            n,
            {
              from: {
                transform: u ? "translateY(0)" : "translateY(16px)",
                opacity: 0,
              },
              enter: { transform: "translateY(0)", opacity: 1 },
              leave: {
                transform: u ? "translateY(0)" : "translateY(16px)",
                opacity: 0,
              },
              config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
              delay: 200,
            },
            "animate-always",
          );
        return (0, a.jsx)(a.Fragment, {
          children: m(
            (e, n) =>
              n &&
              (0, a.jsx)(l.animated.div, {
                className: c,
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
        let { channel: n, content: t, entry: i } = e,
          r = l.ZP.parse(n, t);
        return a.Z.sendMessage(n.id, r, void 0, {
          contentInventoryEntry: { unverified_content: i },
        });
      }
    },
    897674: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
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
      function c(e) {
        let { feed: n, filters: t } = (0, l.cj)([i.Z], () => ({
            feed: i.Z.getFeed(e),
            filters: i.Z.getFilters(),
          })),
          c = a.useMemo(() => {
            let e = null == n ? void 0 : n.entries.map((e) => e.content);
            return null != t
              ? null == e
                ? void 0
                : e.filter((e) => o(t, e))
              : e;
          }, [n, t]);
        return (c = (0, r.Z)(c)), (c = (0, s.Z)(c));
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
        c = t(543882),
        u = t(592125),
        d = t(496675),
        m = t(981631),
        _ = t(689938),
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
                          null != l ? l : _.Z.Messages.STREAM_NO_PREVIEW,
                      }),
                ],
              }),
        });
      }
      function h(e) {
        let { stream: n, className: t, noText: i = !1 } = e,
          o = (0, s.e7)([u.Z], () => u.Z.getBasicChannel(n.channelId)),
          h = (0, s.e7)(
            [d.Z],
            () => null != o && d.Z.canBasicChannel(m.S7T.CONNECT, o),
          ),
          { url: x, isLoading: N } = (0, s.cj)([c.Z], () => ({
            url: h
              ? c.Z.getPreviewURL(n.guildId, n.channelId, n.ownerId)
              : null,
            isLoading:
              h && c.Z.getIsPreviewLoading(n.guildId, n.channelId, n.ownerId),
          })),
          I = l.useRef(N ? null : x);
        l.useEffect(() => {
          !N && (I.current = x);
        }, [x, N]);
        let C = null == x || N ? I.current : x;
        return null == C
          ? (0, a.jsx)(T, {
              className: t,
              isLoading: N,
              noText: i,
              previewText: h ? void 0 : _.Z.Messages.STREAM_NO_PERMISSION_CTA,
            })
          : (0, a.jsx)("div", {
              className: r()(t, E.root),
              children: (0, a.jsx)("img", {
                src: C,
                alt: "",
                className: E.image,
              }),
            });
      }
    },
    12168: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return S;
        },
        u: function () {
          return P;
        },
      }),
        t(47120);
      var a = t(735250),
        l = t(470079),
        i = t(120356),
        r = t.n(i),
        s = t(392711),
        o = t(567526),
        c = t(481060),
        u = t(596454),
        d = t(727637),
        m = t(313201),
        _ = t(543241),
        E = t(318766),
        T = t(907040),
        h = t(633302),
        x = t(806966),
        N = t(176354),
        I = t(823379),
        C = t(354459),
        p = t(185923),
        g = t(420212),
        f = t(894967);
      let v = p.Hz.CHAT,
        M = [
          h.ZP.getByName("thumbsup"),
          h.ZP.getByName("eyes"),
          h.ZP.getByName("laughing"),
          h.ZP.getByName("watermelon"),
          h.ZP.getByName("fork_and_knife"),
          h.ZP.getByName("yum"),
        ].filter(I.lm);
      function P(e) {
        let { emoji: n, isDisabled: t = !1, onClick: i, className: s } = e,
          m = l.useRef(null),
          _ = (0, d.Z)(m);
        return (0, a.jsx)("span", {
          ref: m,
          children: (0, a.jsx)(c.Button, {
            onClick: i,
            look: c.Button.Looks.BLANK,
            size: c.Button.Sizes.NONE,
            focusProps: { enabled: !t },
            children: (0, a.jsx)(c.Spring, {
              config: E.u,
              from: { value: 0 },
              to: { value: _ ? 1 : 0 },
              children: (e) => {
                let { value: l } = e;
                return (0, a.jsx)(o.animated.div, {
                  style: {
                    transform: l
                      .to([0, 1], [1, 1.14])
                      .to((e) => "scale(".concat(e, ")")),
                  },
                  children: (0, a.jsx)(u.Z, {
                    className: r()(f.emoji, s, { [f.emojiItemDisabled]: t }),
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
            (0, a.jsx)(c.Clickable, {
              className: f.dropDownContainer,
              onClick: () => {
                l(!t), i();
              },
              children: (0, a.jsx)(c.ChevronSmallDownIcon, {
                size: "md",
                color: "currentColor",
                className: r()(f.dropDown, { [f.dropDownOpen]: t }),
              }),
            }),
          ],
        });
      }
      function S(e) {
        let {
            channel: n,
            title: t,
            closePopout: i,
            onFocus: o,
            onSelectEmoji: u,
            onSelectDisabledEmoji: d,
            onExpandedToggle: E,
            emojiSearchProps: h,
            recentlyUsedEmojis: I,
            analyticsOverride: S,
          } = e,
          A = (0, m.Dt)(),
          [O, j] = l.useState(!1),
          R = (0, _.wC)(n.guild_id),
          y = (0, s.uniqBy)([...R, ...M], "name")
            .filter(
              (e) =>
                !N.ZP.isEmojiFilteredOrLocked({
                  emoji: e,
                  channel: n,
                  intention: v,
                }),
            )
            .slice(0, C.e5);
        null != I && I.length > 0 && y.splice(y.length - 1, 1, I[0]);
        let L = (e) => {
            j(e), null == E || E(e);
          },
          w = (e, n) => {
            if (null == e && n) {
              i();
              return;
            }
            null != e && u(e);
            L(!n), n && x.kJ.setSearchPlaceholder(null);
          };
        return (0, a.jsxs)(c.Dialog, {
          "aria-labelledby": A,
          children: [
            (0, a.jsx)(c.HeadingLevel, {
              forceLevel: 2,
              children: (0, a.jsx)(c.HiddenVisually, {
                children: (0, a.jsx)(c.H, { id: A, children: t }),
              }),
            }),
            (0, a.jsxs)("div", {
              className: f.container,
              children: [
                (0, a.jsx)(T.Z, {
                  analyticsOverride: S,
                  channel: n,
                  className: r()(f.animatedPicker, {
                    [f.animatedPickerTall]: O,
                  }),
                  headerClassName: r()(f.emojiPickerHeader, {
                    [f.emojiPickerHeaderExpanded]: O,
                  }),
                  closePopout: i,
                  onSelectEmoji: O ? w : () => {},
                  shouldHidePickerActions: !O,
                  wrapper: "div",
                  pickerIntention: v,
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
                  className: f.slotsContainer,
                  children: (0, a.jsx)("div", {
                    className: r()(f.slots, f.slotsWide),
                    children: y.map((e) => {
                      let t = N.ZP.isEmojiDisabled({
                        emoji: e,
                        channel: n,
                        intention: p.Hz.CHAT,
                      });
                      return (0, a.jsx)(
                        "div",
                        {
                          className: f.slot,
                          children: (0, a.jsx)(c.TooltipContainer, {
                            text: e.name,
                            position: "top",
                            "aria-label": e.name,
                            tooltipClassName: f.tooltipContainer,
                            color: c.Tooltip.Colors.BRAND,
                            children: (0, a.jsx)(P, {
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
//# sourceMappingURL=fec66a9d1f4c2df23156.js.map
