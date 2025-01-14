"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84804"],
  {
    442937: function (e) {
      e.exports = "/assets/709211f9d166e74b02a5.png";
    },
    485267: function (e, t, n) {
      n.d(t, {
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
      var l = n(570140);
      n(100527), n(592125);
      var a = n(944486),
        i = n(914010);
      n(594174);
      var r = n(626135),
        o = n(71585),
        s = n(981631);
      let u = () => {
        l.Z.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
          r.default.track(s.rMx.MEMBERLIST_CONTENT_FEED_HIDDEN, {
            channel_id: a.Z.getChannelId(),
            guild_id: i.Z.getGuildId(),
            hidden: o.Z.hidden,
          });
      };
      function c() {
        l.Z.dispatch({ type: "GAME_PROFILE_OPEN" });
      }
      function d() {
        l.Z.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
      }
    },
    69259: function (e, t, n) {
      n.d(t, {
        L: function () {
          return s;
        },
        e: function () {
          return o;
        },
      }),
        n(47120);
      var l = n(626135),
        a = n(162461),
        i = n(206583),
        r = n(981631);
      let o = function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            n[i - 1] = arguments[i];
          let { trackingEnabled: r } = (0, a.nP)(
            "trackSampledContentEntryAnalytics:".concat(e),
          );
          return r ? l.default.track(e, ...n) : Promise.resolve();
        },
        s = (e, t) => {
          o(r.rMx.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
            request_id: t.requestId,
            item_id: t.entry.id,
            surface_type: i.Kd.GUILD_MEMBER_LIST,
            channel_id: t.channelId,
            guild_id: t.guildId,
            interaction_type: e,
            destination_channel_id: t.destinationChannelId,
            destination_guild_id: t.destinationGuildId,
            rich_presence_name: t.richPresenceName,
          });
        };
    },
    907152: function (e, t, n) {
      n.d(t, {
        C4: function () {
          return g;
        },
      }),
        n(653041),
        n(627494),
        n(757143),
        n(512722);
      var l = n(913527),
        a = n.n(l),
        i = n(705512);
      n(812206);
      var r = n(55e3);
      n(220082);
      var o = n(693824),
        s = n(690725);
      n(706454), n(594174);
      var u = n(70956);
      n(5192);
      var c = n(709054),
        d = n(561308);
      n(206295);
      var m = n(737583),
        x = n(169040),
        h = n(388032);
      let p = (e, t) => ({
          AvatarImage1: e[0],
          ...(null != e[1] && { AvatarImage2: e[1] }),
          ...(null != e[2] && { AvatarImage3: e[2] }),
          ...(null != t && { ApplicationImage: t }),
        }),
        C = (e, t) => {
          let n = [{ iconPath: x.NM, text: t }],
            l = c.default.extractTimestamp(e.extra.application_id);
          if (
            (7 >= a()().diff(a()(l), "days") &&
              n.push({ iconPath: x.As, text: h.intl.string(h.t.vYuyWV) }),
            (0, d.Ol)(e) &&
              n.push({ iconPath: x.fO, text: h.intl.string(h.t.keY6mZ) }),
            (0, d.q_)(e))
          ) {
            let t = (0, d.vU)(e);
            n.push({
              iconPath: x.t1,
              text: h.intl.formatToPlainString(h.t["Klie/P"], { days: t }),
            });
          }
          (0, d.ig)(e) === i.o.GLOBAL &&
            n.push({ iconPath: x.Op, text: h.intl.string(h.t.kAlUs7) });
          let r = (0, d.dw)(e);
          if (
            (null != r && n.push({ iconPath: x.Z, text: (0, d.GE)(r) }),
            (0, d.V5)(e))
          ) {
            let { text: t } = (0, d.zo)(e);
            null != t && n.push({ iconPath: x.Md, text: t });
          }
          if ((0, d.Jd)(e)) {
            let t = (0, d.yA)(e);
            if (null != t) {
              let e = h.intl.formatToPlainString(h.t.C0Axoa, {
                hours: Math.round(t / u.Z.Seconds.HOUR),
              });
              return [
                {
                  iconPath: x.eF,
                  text: ""
                    .concat(h.intl.string(h.t["/50eHh"]), " — ")
                    .concat(e),
                },
              ];
            }
          }
          return n;
        },
        v = (e, t) => {
          let {
              timestamp: n,
              colors: l,
              description: a,
              entry: i,
              numAvatars: s,
            } = t,
            u = l.map((e, t) => ({ color: e, stop: t }));
          e.setSize({ w: x.nx, h: x.bg }, 4),
            e.drawRoundedGradientRect(
              u,
              { x: 0, y: x.bg },
              { x: x.nx, y: 0 },
              { x: 0, y: 0, h: x.bg, w: x.nx },
              8,
            ),
            e.setColor("white"),
            e.drawRoundedImage(
              "ApplicationImage",
              { x: x.sB, y: x.sB },
              { w: x.Pu, h: x.Pu },
              8,
            ) === o.vP.Failure &&
              e.drawPath(r.Cv, { x: x.sB, y: x.sB }, !0, 2 + 2 / 3);
          (0, m.l)({
            canvas: e,
            avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(
              0,
              s,
            ),
            position: { x: x.Iq, y: x.sB },
            avatarImageSize: x.$S,
          }),
            e.setColor("white"),
            e.setFont({
              size: 16,
              family: x.I8,
              weight: x.Ue,
              truncate: o.GX.Wrap,
            }),
            e.drawText(a, { x: x.Iq, y: 64, h: 32, w: x.kC }, !0);
          let c = C(i, n);
          (0, m.J)({
            canvas: e,
            badges: c,
            startPosition: x.Iq,
            maxWidth: x.kC,
          });
        },
        g = async (e) => {
          let {
              applicationImageSrc: t,
              entry: n,
              avatarSrcs: l,
              description: a,
              timestamp: i,
              colors: r,
              channelId: u,
            } = e,
            c = n.extra.activity_name,
            d = p(l, t);
          return await (0, s.f)({
            assetsToLoad: d,
            drawImage: (e) =>
              v(e, {
                timestamp: i,
                colors: r,
                description: a,
                entry: n,
                numAvatars: l.length,
              }),
            exportConfigs: {
              format: o.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(c, ".png").toLowerCase(),
              fileType: "png",
              channelId: u,
            },
          });
        };
    },
    919394: function (e, t, n) {
      n.d(t, {
        SO: function () {
          return g;
        },
      }),
        n(653041),
        n(512722);
      var l = n(913527),
        a = n.n(l),
        i = n(705512);
      n(812206);
      var r = n(55e3);
      n(220082);
      var o = n(693824),
        s = n(690725);
      n(706454), n(594174);
      var u = n(70956),
        c = n(709054),
        d = n(561308);
      n(206295);
      var m = n(737583);
      n(438226);
      var x = n(169040),
        h = n(388032);
      let p = (e, t) => ({
          AvatarImage1: e[0],
          ...(null != e[1] && { AvatarImage2: e[1] }),
          ...(null != e[2] && { AvatarImage3: e[2] }),
          ...(null != t && { ApplicationImage: t }),
        }),
        C = (e, t) => {
          let n = [{ iconPath: x.NM, text: t }],
            l = c.default.extractTimestamp(e.extra.application_id);
          if (
            (7 >= a()().diff(a()(l), "days") &&
              n.push({ iconPath: x.As, text: h.intl.string(h.t.vYuyWV) }),
            (0, d.Ol)(e) &&
              n.push({ iconPath: x.fO, text: h.intl.string(h.t.keY6mZ) }),
            (0, d.q_)(e))
          ) {
            let t = (0, d.vU)(e);
            n.push({
              iconPath: x.t1,
              text: h.intl.formatToPlainString(h.t["Klie/P"], { days: t }),
            });
          }
          (0, d.ig)(e) === i.o.GLOBAL &&
            n.push({ iconPath: x.Op, text: h.intl.string(h.t.kAlUs7) });
          let r = (0, d.dw)(e);
          if (
            (null != r && n.push({ iconPath: x.Z, text: (0, d.GE)(r) }),
            (0, d.V5)(e))
          ) {
            let { text: t } = (0, d.zo)(e);
            null != t && n.push({ iconPath: x.Md, text: t });
          }
          if ((0, d.Jd)(e)) {
            let t = (0, d.yA)(e);
            if (null != t) {
              let e = h.intl.formatToPlainString(h.t.C0Axoa, {
                hours: Math.round(t / u.Z.Seconds.HOUR),
              });
              return [
                {
                  iconPath: x.eF,
                  text: ""
                    .concat(h.intl.string(h.t["/50eHh"]), " — ")
                    .concat(e),
                },
              ];
            }
          }
          return n;
        },
        v = (e, t) => {
          let {
              timestamp: n,
              colors: l,
              description: a,
              entry: i,
              numAvatars: s,
            } = t,
            u = l.map((e, t) => ({ color: e, stop: t }));
          e.setSize({ w: x.nx, h: x.bg }, 4),
            e.drawRoundedGradientRect(
              u,
              { x: 0, y: x.bg },
              { x: x.nx, y: 0 },
              { x: 0, y: 0, h: x.bg, w: x.nx },
              8,
            ),
            e.setColor("white"),
            e.drawRoundedImage(
              "ApplicationImage",
              { x: x.sB, y: x.sB },
              { w: x.Pu, h: x.Pu },
              8,
            ) === o.vP.Failure &&
              e.drawPath(r.Cv, { x: x.sB, y: x.sB }, !0, 2 + 2 / 3);
          (0, m.l)({
            canvas: e,
            avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(
              0,
              s,
            ),
            position: { x: x.Iq, y: x.sB },
            avatarImageSize: x.$S,
          }),
            e.setColor("white"),
            e.setFont({
              size: 16,
              family: x.I8,
              weight: x.Ue,
              truncate: o.GX.Wrap,
            }),
            e.drawText(a, { x: x.Iq, y: 64, h: 32, w: x.kC }, !0);
          let c = C(i, n);
          (0, m.J)({
            canvas: e,
            badges: c,
            startPosition: x.Iq,
            maxWidth: x.kC,
          });
        },
        g = async (e) => {
          let {
              applicationImageSrc: t,
              entry: n,
              avatarSrcs: l,
              description: a,
              timestamp: i,
              colors: r,
              channelId: u,
            } = e,
            c = n.extra.game_name,
            d = p(l, t);
          return await (0, s.f)({
            assetsToLoad: d,
            drawImage: (e) =>
              v(e, {
                timestamp: i,
                colors: r,
                description: a,
                entry: n,
                numAvatars: l.length,
              }),
            exportConfigs: {
              format: o.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(c, ".png").toLowerCase(),
              fileType: "png",
              channelId: u,
            },
          });
        };
    },
    169040: function (e, t, n) {
      n.d(t, {
        $S: function () {
          return g;
        },
        As: function () {
          return x;
        },
        I8: function () {
          return N;
        },
        Iq: function () {
          return f;
        },
        Md: function () {
          return s;
        },
        NC: function () {
          return L;
        },
        NM: function () {
          return l;
        },
        Op: function () {
          return m;
        },
        PW: function () {
          return P;
        },
        Pu: function () {
          return v;
        },
        Ue: function () {
          return T;
        },
        Z: function () {
          return c;
        },
        bg: function () {
          return p;
        },
        eF: function () {
          return u;
        },
        f0: function () {
          return j;
        },
        fO: function () {
          return a;
        },
        fj: function () {
          return o;
        },
        i6: function () {
          return i;
        },
        kC: function () {
          return I;
        },
        m2: function () {
          return Z;
        },
        mb: function () {
          return r;
        },
        nx: function () {
          return h;
        },
        sB: function () {
          return C;
        },
        t1: function () {
          return d;
        },
      });
      let l =
          "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
        a =
          "M11.33 13.68c.41.27.93.27 1.34 0 1.73-1.1 6.2-4.3 6.2-8.02 0-2.02-1.6-3.66-3.59-3.66-1.46 0-2.42.58-3.28 1.44A4.33 4.33 0 0 0 8.72 2a3.63 3.63 0 0 0-3.6 3.66c0 3.72 4.48 6.92 6.2 8.02Z M3.93 13.84a.94.94 0 0 0-.93.94 5.6 5.6 0 0 0 6.48 5.6l1.02-.18v1.27c0 .85.67 1.53 1.5 1.53s1.5-.68 1.5-1.53V20.2l1.02.17A5.6 5.6 0 0 0 21 14.78a.94.94 0 0 0-.93-.94h-2.24a5.6 5.6 0 0 0-4.89 2.9L12 18.41l-.94-1.69a5.6 5.6 0 0 0-4.89-2.9H3.93Z",
        i =
          "M 4 1 C 2.3431 1 1 2.3431 1 4 V 13 C 1 14.6569 2.3431 16 4 16 H 20 C 21.6568 16 23 14.6569 23 13 V 4 C 23 2.3431 21.6568 1 20 1 H 4 Z M 6 18 C 5.4477 18 5 18.4477 5 19 C 5 19.5523 5.4477 20 6 20 H 18 C 18.5523 20 19 19.5523 19 19 C 19 18.4477 18.5523 18 18 18 H 6 Z",
        r =
          "M18.03 2.8a11 11 0 1 0 2.52 2.28c-.28-.34-.8-.13-.8.31v7.37c0 1-.4 1.95-1.1 2.65l-.78.78a.6.6 0 0 0-.14.53c.08.53-.08 1.1-.5 1.52l-1 1a1.75 1.75 0 1 1-2.47-2.48l1-1c.42-.41.99-.57 1.52-.49.2.03.4 0 .53-.14l.78-.78c.42-.42.66-1 .66-1.6V3.22a.49.49 0 0 0-.22-.41ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7-2a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 1 0 0-2 8 8 0 0 0-8 8 1 1 0 0 0 1 1Z",
        o =
          "M3.11 8H6v10.82c0 .86.37 1.68 1 2.27.46.43 1.02.71 1.63.84A1 1 0 0 0 9 22h10a4 4 0 0 0 4-4v-1a2 2 0 0 0-2-2h-1V5a3 3 0 0 0-3-3H4.67c-.87 0-1.7.32-2.34.9-.63.6-1 1.42-1 2.28 0 .71.3 1.35.52 1.75a5.35 5.35 0 0 0 .48.7l.01.01h.01L3.11 7l-.76.65a1 1 0 0 0 .76.35Zm1.56-4c-.38 0-.72.14-.97.37-.24.23-.37.52-.37.81a1.69 1.69 0 0 0 .3.82H6v-.83c0-.29-.13-.58-.37-.8C5.4 4.14 5.04 4 4.67 4Zm5 13a3.58 3.58 0 0 1 0 3H19a2 2 0 0 0 2-2v-1H9.66ZM3.86 6.35ZM11 8a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Zm-1 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z",
        s =
          "M12 22a9 9 0 0 0 7.03-14.62l.68-.67a1 1 0 0 0-1.42-1.42l-.67.68A8.96 8.96 0 0 0 13 4.05V3h2a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2h2v1.05c-1.74.2-3.32.88-4.62 1.92l-.67-.68a1 1 0 0 0-1.42 1.42l.68.67A9 9 0 0 0 12 22Zm3.7-11.3a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 1.4 1.4l3-3Z",
        u =
          "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
        c =
          "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
        d =
          "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
        m =
          "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
        x =
          "M17.93 1.51a.74.74 0 0 0-1.41 0l-1.13 3.47h-3.65a.74.74 0 0 0-.43 1.35l2.95 2.14-1.13 3.47a.74.74 0 0 0 1.14.83l2.95-2.15 2.96 2.15a.74.74 0 0 0 1.14-.83l-1.13-3.47 2.95-2.14a.74.74 0 0 0-.43-1.35h-3.65l-1.13-3.47ZM10.7 14.7a1 1 0 0 0-1.4-1.4l-8 8a1 1 0 1 0 1.4 1.4l8-8ZM9.7 8.3a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0ZM15.7 15.7a1 1 0 0 0-1.4-1.4l-6 6a1 1 0 1 0 1.4 1.4l6-6Z",
        h = 400,
        p = 120,
        C = 12,
        v = 96,
        g = 32,
        f = 120,
        I = 260,
        j = 88,
        Z = 99,
        P = 12,
        L = 18,
        N = ["gg sans", "sans-serif"],
        T = 500;
    },
    737583: function (e, t, n) {
      n.d(t, {
        J: function () {
          return i;
        },
        l: function () {
          return r;
        },
      }),
        n(47120);
      var l = n(693824),
        a = n(169040);
      function i(e) {
        let t,
          { canvas: n, badges: i, startPosition: r, maxWidth: o } = e;
        for (let { iconPath: e, text: s } of (n.setFont({
          size: 12,
          family: a.I8,
          weight: a.Ue,
          truncate: l.GX.None,
        }),
        i)) {
          let l = null != t ? t.w + t.x + a.PW : r,
            i = null != t ? t.w + t.x + a.PW + a.NC : r + a.NC;
          n.drawPath(e, { x: l, y: a.f0 }, !0, 0.6),
            (t = n.drawText(s, { x: i, y: a.m2, w: o }, !0));
        }
      }
      function r(e) {
        let {
          canvas: t,
          avatarSrcs: n,
          position: { x: a, y: i },
          avatarImageSize: r,
        } = e;
        for (let e = 0; e < n.length; e++)
          e < n.length - 1 &&
            t.clipRoundedRect(
              { x: a + (e + 1) * (r - 8) - 2, y: i - 1, w: r + 2, h: r + 2 },
              r / 2,
              !0,
            ),
            t.drawRoundedImage(
              n[e],
              { x: a + e * (r - 8), y: i },
              { w: r, h: r },
              50,
              { fillMode: l.JU.Cover },
            ),
            t.restoreContext();
      }
    },
    438226: function (e, t, n) {
      n.d(t, {
        HV: function () {
          return s;
        },
        IS: function () {
          return r;
        },
        VY: function () {
          return u;
        },
      }),
        n(627494),
        n(757143),
        n(201133);
      var l = n(5192),
        a = n(561308),
        i = n(388032);
      let r = (e, t) =>
          i.intl.formatToPlainString(i.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name,
          }),
        o = (e) => {
          let t = (0, a.kr)(e);
          return (0, a.Ol)(e)
            ? t
              ? i.t.MHO1AQ
              : i.t.i7AOz8
            : t
              ? i.t.lLPKY2
              : i.t["bES+y8"];
        },
        s = (e, t, n) => {
          let a = o(e),
            r = l.ZP.getName(
              null == t ? void 0 : t.guild_id,
              null == t ? void 0 : t.id,
              n,
            ),
            s = e.extra.game_name;
          return i.intl
            .formatToMarkdownString(a, { gameName: s, userName: r })
            .replaceAll("*", "");
        },
        u = (e) => {
          let { entry: t, channel: n, users: r, countOthers: o } = e,
            s = (0, a.kr)(t) ? i.t.QaUWPT : i.t["7j/5mp"];
          return i.intl
            .formatToMarkdownString(s, {
              gameName: t.extra.game_name,
              user1: l.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                r[0],
              ),
              user2: l.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                r[1],
              ),
              countOthers: o,
            })
            .replaceAll("*", "");
        };
    },
    319604: function (e, t, n) {
      n.d(t, {
        CR: function () {
          return h;
        },
        UU: function () {
          return m;
        },
        jE: function () {
          return d;
        },
      }),
        n(627494),
        n(757143);
      var l = n(884439),
        a = n(55e3),
        i = n(693824),
        r = n(690725),
        o = n(561308),
        s = n(737583),
        u = n(169040),
        c = n(388032);
      let d = (e) => {
          let { timestamp: t } = e;
          return [{ iconPath: u.mb, text: t }];
        },
        m = (e) => {
          var t;
          let n =
            null === (t = (0, o.PJ)(e, l.N.AGGREGATE_COUNT)) || void 0 === t
              ? void 0
              : t.count;
          return null == n
            ? []
            : [
                {
                  iconPath: u.eF,
                  text: c.intl.formatToPlainString(c.t.HtifnJ, { count: n }),
                },
              ];
        },
        x = (e) => {
          let { avatarSrc: t, mediaImageSrc: n } = e;
          return { AvatarImage: t, ...(null != n && { MediaImage: n }) };
        },
        h = async (e) => {
          let {
              user: t,
              channel: n,
              mediaImageSrc: l,
              artist: o,
              description: c,
              colors: d,
              badges: m,
            } = e,
            h = x({
              avatarSrc: t.getAvatarURL(n.guild_id, 128),
              mediaImageSrc: l,
            }),
            p = o.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-");
          return await (0, r.f)({
            assetsToLoad: h,
            drawImage: (e) => {
              (function (e, t) {
                let n = t.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: u.nx, h: u.bg }, 4),
                  e.drawRoundedGradientRect(
                    n,
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
                    e.drawPath(a.Cv, { x: u.sB, y: u.sB }, !0, 2 + 2 / 3);
                })(e),
                (function (e) {
                  e.drawRoundedImage(
                    "AvatarImage",
                    { x: u.Iq, y: u.sB },
                    { w: u.$S, h: u.$S },
                    50,
                  );
                })(e),
                (function (e, t) {
                  e.setColor("white"),
                    e.setFont({
                      size: 16,
                      family: u.I8,
                      weight: u.Ue,
                      truncate: i.GX.Wrap,
                    }),
                    e.drawText(t, { x: u.Iq, y: 64, h: 32, w: u.kC }, !0);
                })(e, c),
                (0, s.J)({
                  canvas: e,
                  badges: m,
                  startPosition: u.Iq,
                  maxWidth: u.kC,
                });
            },
            exportConfigs: {
              format: i.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(p, ".png").toLowerCase(),
              fileType: "png",
              channelId: n.id,
            },
          });
        };
    },
    685270: function (e, t, n) {
      n.d(t, {
        B: function () {
          return c;
        },
      }),
        n(653041);
      var l = n(55e3),
        a = n(693824),
        i = n(690725),
        r = n(737583),
        o = n(169040);
      let s = (e, t, n) => ({
          AvatarImage: e,
          ...(null != t && { MediaImage: t }),
          ...(null != n && { ApplicationImage: n }),
        }),
        u = (e, t) => {
          let n = [{ iconPath: o.i6, text: e }];
          return null != t && n.push({ iconPath: o.fj, text: t }), n;
        },
        c = async (e) => {
          let {
              mediaImageSrc: t,
              entry: n,
              avatarSrc: c,
              description: d,
              timestamp: m,
              episodeDescription: x,
              colors: h,
              channelId: p,
            } = e,
            C = n.extra.media_title,
            v = s(c, t);
          return await (0, i.f)({
            assetsToLoad: v,
            drawImage: (e) => {
              let t = h.map((e, t) => ({ color: e, stop: t }));
              e.setSize({ w: o.nx, h: o.bg }, 4),
                e.drawRoundedGradientRect(
                  t,
                  { x: 0, y: o.bg },
                  { x: o.nx, y: 0 },
                  { x: 0, y: 0, h: o.bg, w: o.nx },
                  8,
                ),
                e.setColor("white");
              let n = e.drawRoundedImage(
                "MediaImage",
                { x: o.sB, y: o.sB },
                { w: o.Pu, h: o.Pu },
                8,
                { fillMode: a.JU.Contain },
              );
              n === a.vP.Failure &&
                (n = e.drawRoundedImage(
                  "ApplicationImage",
                  { x: o.sB, y: o.sB },
                  { w: o.Pu, h: o.Pu },
                  8,
                )),
                n === a.vP.Failure &&
                  e.drawPath(l.Cv, { x: o.sB, y: o.sB }, !0, 2 + 2 / 3),
                e.drawRoundedImage(
                  "AvatarImage",
                  { x: o.Iq, y: o.sB },
                  { w: o.$S, h: o.$S },
                  50,
                ),
                e.setFont({
                  size: 16,
                  family: o.I8,
                  weight: o.Ue,
                  truncate: a.GX.Wrap,
                }),
                e.drawText(d, { x: o.Iq, y: 64, h: 32, w: o.kC }, !0);
              let i = u(m, x);
              (0, r.J)({
                canvas: e,
                badges: i,
                startPosition: o.Iq,
                maxWidth: o.kC,
              });
            },
            exportConfigs: {
              format: a.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(C, ".png").toLowerCase(),
              fileType: "png",
              channelId: p,
            },
          });
        };
    },
    31074: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var l = n(192379),
        a = n(442837),
        i = n(231757),
        r = n(553795);
      function o(e) {
        let t = (0, a.e7)([r.Z], () =>
            r.Z.getAccounts().some((t) => t.type === e),
          ),
          n = l.useCallback(() => {
            if (null == e) return null;
            (0, i.Z)({
              platformType: e,
              location: "Member List Content Popout",
            });
          }, [e]);
        if (null != e) return t ? void 0 : n;
      }
    },
    107062: function (e, t, n) {
      n(627494), n(757143);
      var l = n(200651),
        a = n(192379),
        i = n(442837),
        r = n(481060),
        o = n(620662),
        s = n(841784),
        u = n(429589),
        c = n(499254),
        d = n(827498),
        m = n(541716),
        x = n(706454),
        h = n(823379),
        p = n(5192),
        C = n(379357),
        v = n(192918),
        g = n(561308),
        f = n(907152),
        I = n(206295),
        j = n(297781),
        Z = n(591853),
        P = n(797342),
        L = n(981631),
        N = n(388032);
      let T = (e, t) =>
          N.intl.formatToPlainString(N.t.tAwI1t, {
            username: t.username,
            activity: e.extra.activity_name,
          }),
        y = (e, t, n) => {
          let l = N.t["bES+y8"],
            a = p.ZP.getName(t.guild_id, t.id, n),
            i = e.extra.activity_name;
          return N.intl
            .formatToMarkdownString(l, { gameName: i, userName: a })
            .replaceAll("*", "");
        },
        _ = (e) => {
          let { entry: t, channel: n, users: l, countOthers: a } = e,
            i = N.t["7j/5mp"];
          return N.intl
            .formatToMarkdownString(i, {
              gameName: t.extra.activity_name,
              user1: p.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                l[0],
              ),
              user2: p.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                l[1],
              ),
              countOthers: a,
            })
            .replaceAll("*", "");
        };
      t.ZP = (e) => {
        let {
            channel: t,
            entry: n,
            onReaction: p,
            onVoiceChannelPreview: A,
          } = e,
          { largeImage: E } = (0, C.rv)({ entry: n, showCoverImage: !1 }),
          {
            user: S,
            details: R,
            activity: M,
            embeddedActivity: k,
          } = (0, P.n)(n),
          { primaryColor: w, secondaryColor: O } = (0, I.Z)(
            null == E ? void 0 : E.src,
          ),
          b = (0, i.e7)([x.default], () => x.default.locale),
          {
            displayParticipants: H,
            participant1: V,
            participant2: B,
            numOtherParticipants: D,
          } = (0, v.Z)(n, 3),
          U = () => {
            c.__(d._b.TEXT, m.Ie.NORMAL, {
              applicationId: n.extra.application_id,
            });
          },
          G = a.useCallback(
            (e) => {
              if (
                (null == E ? void 0 : E.src) == null ||
                null == t ||
                null == S
              )
                return;
              let l =
                D > 0
                  ? _({ entry: n, channel: t, users: [V, B], countOthers: D })
                  : y(n, t, S);
              return (0, f.C4)({
                entry: n,
                applicationImageSrc: null == E ? void 0 : E.src,
                avatarSrcs: H.map((e) => e.getAvatarURL(t.guild_id, 128)),
                description: l,
                timestamp: (0, g.yh)(n, b),
                colors: [w, O],
                channelId: e,
              });
            },
            [null == E ? void 0 : E.src, t, H, n, b, D, V, B, w, O, S],
          );
        if (null == S) return null;
        let z = (0, l.jsx)(j.PZ, { location: j.Gt.POPOUT, entry: n }),
          Y = (0, l.jsx)(Z.wG, {
            channel: t,
            userDescription: (0, g.kr)(n) ? N.t.vPg1JS : N.t.rPqqtr,
            title: n.extra.activity_name,
            subtitle: R,
            badges: z,
            entry: n,
            showCoverImage: !1,
            onClickTitle: U,
            onClickSubtitle: U,
            onClickThumbnail: U,
          }),
          W = (0, o.Z)(M, L.xjy.JOIN) || (0, s.Z)(M),
          q = W
            ? (0, l.jsx)(u.Z, {
                isEmbedded: (0, s.Z)(M),
                embeddedActivity: k,
                activity: M,
                user: S,
                ButtonComponent: (e) =>
                  (0, l.jsx)(Z.Ll, { IconComponent: r.DoorEnterIcon, ...e }),
              })
            : null,
          F = (0, l.jsx)(Z.Ll, {
            onClick: U,
            IconComponent: r.AppsIcon,
            children: N.intl.string(N.t.GDWYR0),
          }),
          J = [W ? q : F].filter(h.lm);
        return (0, l.jsxs)(Z.yR, {
          children: [
            Y,
            (0, l.jsx)(Z.St, {
              children: (0, l.jsx)(Z.WT, {
                onReaction: p,
                onVoiceChannelPreview: A,
                user: S,
                channel: t,
                generateReactionImage: G,
                reactionImageAltText: T(n, S),
                entry: n,
                buttons: J,
              }),
            }),
          ],
        });
      };
    },
    178762: function (e, t, n) {
      n.d(t, {
        J: function () {
          return B;
        },
        YN: function () {
          return O;
        },
        iZ: function () {
          return b;
        },
      }),
        n(47120);
      var l = n(200651),
        a = n(192379),
        i = n(392711),
        r = n.n(i),
        o = n(91192),
        s = n(876215),
        u = n(442837),
        c = n(704215),
        d = n(481060),
        m = n(239091),
        x = n(607070),
        h = n(100527),
        p = n(605236),
        C = n(704041),
        v = n(475676),
        g = n(662594),
        f = n(594174),
        I = n(69259),
        j = n(370370),
        Z = n(107062),
        P = n(91140),
        L = n(227172),
        N = n(551228),
        T = n(678869),
        y = n(278399),
        _ = n(886217),
        A = n(555672),
        E = n(644548),
        S = n(335326),
        R = n(268010),
        M = n(797342),
        k = n(206583),
        w = n(921944);
      let O = 72;
      function b(e) {
        return (null == e ? void 0 : e.type) === g.so.CONTENT_INVENTORY ? O : 0;
      }
      let H = (e) => {
          let { entry: t, ...n } = e;
          switch (t.content_type) {
            case s.s.PLAYED_GAME:
              return (0, l.jsx)(P.Z, { ...n, entry: t });
            case s.s.WATCHED_MEDIA:
              return (0, l.jsx)(S.Z, { ...n, entry: t });
            case s.s.TOP_GAME:
              return (0, l.jsx)(A.ZP, { ...n, entry: t });
            case s.s.TOP_ARTIST:
              return (0, l.jsx)(y.ZP, { ...n, entry: t });
            case s.s.LISTENED_SESSION:
              return (0, l.jsx)(N.ZP, { ...n, entry: t });
            case s.s.LAUNCHED_ACTIVITY:
              return (0, l.jsx)(j.Z, { ...n, entry: t });
            case s.s.LEADERBOARD:
              return (0, l.jsx)(v.Z, { ...n, entry: t });
            default:
              return null;
          }
        },
        V = (e) => {
          let { closePopout: t, ...n } = e;
          return (0, l.jsx)(B, {
            onReaction: (e, l) => {
              n.trackRankingItemInteraction(e, {
                destinationChannelId: l.id,
                destinationGuildId: l.guild_id,
              }),
                t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e) => {
              n.trackRankingItemInteraction(k.xP.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
              });
            },
            ...n,
          });
        },
        B = (e) => {
          let { entry: t, ...n } = e;
          switch (t.content_type) {
            case s.s.PLAYED_GAME:
              return (0, l.jsx)(L.Z, { ...n, entry: t });
            case s.s.WATCHED_MEDIA:
              return (0, l.jsx)(R.Z, { ...n, entry: t });
            case s.s.TOP_GAME:
              return (0, l.jsx)(E.Z, { ...n, entry: t });
            case s.s.TOP_ARTIST:
              return (0, l.jsx)(_.Z, { ...n, entry: t });
            case s.s.LISTENED_SESSION:
              return (0, l.jsx)(T.Z, { ...n, entry: t });
            case s.s.LAUNCHED_ACTIVITY:
              return (0, l.jsx)(Z.ZP, { ...n, entry: t });
            case s.s.LEADERBOARD:
              var a;
              return (null === (a = n.channel) || void 0 === a
                ? void 0
                : a.guild_id) != null
                ? (0, l.jsx)(C.Z, {
                    guildId: n.channel.guild_id,
                    leaderboardId: t.extra.leaderboard_id,
                    source: h.Z.MEMBER_LIST,
                    trackRankingItemInteraction: n.trackRankingItemInteraction,
                  })
                : null;
            default:
              return null;
          }
        };
      t.ZP = a.memo((e) => {
        var t;
        let { index: i, ...h } = e,
          [C, v] = a.useState("default"),
          g = (0, o.JA)("".concat(i)),
          j =
            null === (t = f.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.isStaff(),
          { isRich: Z, appName: P } = (0, M.n)(h.entry),
          L = a.useMemo(
            () => ({
              entry: h.entry,
              channelId: h.channel.id,
              guildId: h.channel.guild_id,
              requestId: h.requestId,
              richPresenceName: Z ? P : void 0,
            }),
            [P, h.channel.guild_id, h.channel.id, h.entry, h.requestId, Z],
          ),
          N = a.useRef(!1),
          [T, y] = a.useState(!1),
          [_, A] = a.useState(!1),
          E = (0, u.e7)([x.Z], () => x.Z.keyboardModeEnabled);
        a.useEffect(() => {
          T && E && A(!0);
        }, [T, E]);
        let S = a.useCallback(
            (e) => {
              if (!!j)
                (0, m.jW)(e, async () => {
                  let { default: e } = await n.e("153").then(n.bind(n, 330150));
                  return () =>
                    (0, l.jsx)(e, { entry: h.entry, requestId: h.requestId });
                });
            },
            [h, j],
          ),
          R = a.useCallback(() => {
            v(String(Date.now()));
          }, []),
          O = a.useCallback(
            function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (0, I.L)(e, { ...L, ...t });
            },
            [L],
          ),
          b = a.useMemo(
            () =>
              r().throttle(
                (e) => {
                  (0, I.L)(k.xP.CARD_POPOUT_OPEN, e);
                },
                2e3,
                { leading: !0, trailing: !1 },
              ),
            [],
          ),
          B = () => {
            (N.current = !1),
              setTimeout(() => {
                !N.current && (y(!1), A(E));
              }, 100);
          };
        return (0, l.jsx)("div", {
          onMouseEnter: () => {
            h.entry.content_type === s.s.LEADERBOARD &&
              !(0, p.un)(c.z.LEADERBOARD_NUX_COACHMARK) &&
              (0, p.EW)(c.z.LEADERBOARD_NUX_COACHMARK, {
                dismissAction: w.L.SECONDARY,
              }),
              (N.current = !0),
              setTimeout(() => {
                N.current && y(!0), b(L);
              }, 100);
          },
          onMouseLeave: B,
          children: (0, l.jsx)(d.Popout, {
            renderPopout: (e) => {
              let { closePopout: t } = e;
              return (0, l.jsx)(V, {
                closePopout: t,
                updatePopoutPosition: R,
                trackRankingItemInteraction: O,
                ...h,
              });
            },
            position: "left",
            shouldShow: T,
            positionKey: C,
            onRequestOpen: () => b(L),
            onRequestClose: () => {
              _ && B();
            },
            spacing: 8,
            children: (e, t) => {
              let { isShown: n } = t;
              return (0, l.jsx)(d.Clickable, {
                ...e,
                ...g,
                focusProps: {
                  offset: { top: 4, bottom: 4, left: 4, right: 4 },
                },
                onClick: () => {
                  !T && y(!0);
                },
                onContextMenu: S,
                children: (0, l.jsx)(H, {
                  ...h,
                  selected: n,
                  hovered: N.current,
                }),
              });
            },
          }),
        });
      });
    },
    227172: function (e, t, n) {
      n.d(t, {
        v: function () {
          return R;
        },
      });
      var l = n(200651),
        a = n(192379),
        i = n(758713),
        r = n(442837),
        o = n(481060),
        s = n(620662),
        u = n(841784),
        c = n(420660),
        d = n(429589),
        m = n(757182),
        x = n(706454),
        h = n(374129),
        p = n(639351),
        C = n(823379),
        v = n(379357),
        g = n(192918),
        f = n(22211),
        I = n(561308),
        j = n(919394),
        Z = n(438226),
        P = n(31074),
        L = n(206295),
        N = n(91140),
        T = n(297781),
        y = n(591853),
        _ = n(410441),
        A = n(797342),
        E = n(981631),
        S = n(388032);
      let R = {
        [i.z.DESKTOP]: null,
        [i.z.LINUX]: null,
        [i.z.MACOS]: null,
        [i.z.NINTENDO]: null,
        [i.z.IOS]: null,
        [i.z.ANDROID]: null,
        [i.z.XBOX]: p.Z,
        [i.z.PLAYSTATION]: h.Z,
      };
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            disableGameProfileLinks: h,
            onReaction: p,
            onVoiceChannelPreview: M,
            onUserPopoutClosed: k,
            trackRankingItemInteraction: w,
          } = e,
          { largeImage: O } = (0, v.rv)({ entry: n }),
          { user: b, details: H, appName: V, activity: B } = (0, A.n)(n),
          { primaryColor: D, secondaryColor: U } = (0, L.Z)(
            null == O ? void 0 : O.src,
          ),
          G = (0, r.e7)([x.default], () => x.default.locale),
          { streamPreviewUrl: z, stream: Y } = (0, f.Z)(n),
          {
            displayParticipants: W,
            participant1: q,
            participant2: F,
            numOtherParticipants: J,
          } = (0, g.Z)(n, 3),
          X = n.extra.platform,
          K = null != X ? R[X] : null,
          $ =
            X === i.z.XBOX
              ? E.ABu.XBOX
              : X === i.z.PLAYSTATION
                ? E.ABu.PLAYSTATION
                : void 0,
          Q = (0, P.Z)($),
          ee = a.useCallback(
            (e) => {
              if (
                (null == O ? void 0 : O.src) == null ||
                null == t ||
                null == b
              )
                return;
              let l =
                J > 0
                  ? (0, Z.VY)({
                      entry: n,
                      channel: t,
                      users: [q, F],
                      countOthers: J,
                    })
                  : (0, Z.HV)(n, t, b);
              return (0, j.SO)({
                entry: n,
                applicationImageSrc: null == O ? void 0 : O.src,
                avatarSrcs: W.map((e) => e.getAvatarURL(t.guild_id, 128)),
                description: l,
                timestamp: (0, I.yh)(n, G),
                colors: [D, U],
                channelId: e,
              });
            },
            [null == O ? void 0 : O.src, t, W, n, G, J, q, F, D, U, b],
          );
        if (null == b) return null;
        let et = (0, l.jsx)(T.Gk, {
            location: null == z ? T.Gt.POPOUT : T.Gt.STREAMING_POPOUT,
            children: N.W.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
          }),
          en =
            null == z
              ? (0, l.jsx)(y.wG, {
                  channel: t,
                  headerIcons:
                    null == K
                      ? null
                      : (0, l.jsx)(_.Z, {
                          onClick: Q,
                          Icon: K,
                          "aria-label": S.intl.string(S.t.YR4cHB),
                        }),
                  userDescription: (0, I.kr)(n) ? S.t.vPg1JS : S.t.rPqqtr,
                  title: V,
                  subtitle: H,
                  badges: et,
                  entry: n,
                  disableGameProfileLinks: h,
                  onUserPopoutClosed: k,
                  trackRankingItemInteraction: w,
                })
              : (0, l.jsx)(y.jL, {
                  channel: t,
                  streamPreviewSrc: z,
                  title: n.extra.game_name,
                  subtitle: H,
                  badges: et,
                  userDescription: S.t["6oWFUF"],
                  entry: n,
                  stream: Y,
                  onUserPopoutClosed: k,
                  trackRankingItemInteraction: w,
                }),
          el =
            (0, s.Z)(B, E.xjy.JOIN) || (0, u.Z)(B)
              ? (0, l.jsx)(d.Z, {
                  activity: B,
                  user: b,
                  ButtonComponent: (e) =>
                    (0, l.jsx)(y.Ll, {
                      IconComponent: o.GameControllerIcon,
                      ...e,
                    }),
                })
              : null,
          ea = [
            el,
            (0, c.Z)(B)
              ? (0, l.jsx)(m.Z, {
                  activity: B,
                  ButtonComponent: (e) =>
                    (0, l.jsx)(y.Ll, { IconComponent: o.EyeIcon, ...e }),
                })
              : null,
          ].filter(C.lm);
        return (0, l.jsxs)(y.yR, {
          children: [
            en,
            (0, l.jsx)(y.St, {
              children: (0, l.jsx)(y.WT, {
                onReaction: p,
                onVoiceChannelPreview: M,
                user: b,
                channel: t,
                generateReactionImage: ee,
                reactionImageAltText: (0, Z.IS)(n, b),
                entry: n,
                buttons: ea,
              }),
            }),
          ],
        });
      };
    },
    678869: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return M;
        },
      }),
        n(627494),
        n(757143),
        n(653041);
      var l = n(200651),
        a = n(192379),
        i = n(423875),
        r = n(442837),
        o = n(902704),
        s = n(481060),
        u = n(952164),
        c = n(768419),
        d = n(424678),
        m = n(239470),
        x = n(894344),
        h = n(314897),
        p = n(908841),
        C = n(5192),
        v = n(379357),
        g = n(561308),
        f = n(319604),
        I = n(31074),
        j = n(206295),
        Z = n(551228),
        P = n(591853),
        L = n(371991),
        N = n(410441),
        T = n(981631),
        y = n(616922),
        _ = n(388032),
        A = n(241574),
        E = n(179546);
      let S = (e, t, n) => {
        let { artist: l, media: a } = e,
          i = _.t["6iNxrq"],
          r = C.ZP.getName(t.guild_id, t.id, n);
        return _.intl
          .formatToMarkdownString(i, { artist: l, userName: r, media: a })
          .replaceAll("*", "");
      };
      function R(e) {
        let { activity: t } = e,
          n = t.timestamps,
          { now: i } = (0, L.tS)(),
          { durationTimestamp: r, seekBarStyles: o } = a.useMemo(() => {
            var e;
            let { start: n, end: l } =
              null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == l) return {};
            let a = Math.min(l, i),
              r = l - n,
              o = Math.floor((Math.max(a - n, 0) / r) * 100);
            return {
              seekBarStyles: { width: "".concat(o, "%") },
              durationTimestamp: (0, g.T_)({ start: 0 }, r),
            };
          }, [t, i]);
        return null == o
          ? null
          : (0, l.jsxs)("div", {
              className: A.listeningTimeline,
              children: [
                (0, l.jsx)(L.x3, { entry: n }),
                (0, l.jsx)("div", {
                  className: A.seekBarContainer,
                  children: (0, l.jsx)("div", {
                    className: A.seekBarFill,
                    style: o,
                  }),
                }),
                (0, l.jsx)(s.Text, {
                  className: A.timestamp,
                  variant: "text-xs/normal",
                  tabularNumbers: !0,
                  color: void 0,
                  children: r,
                }),
              ],
            });
      }
      function M(e) {
        var t, n, C;
        let L,
          A,
          M,
          {
            channel: k,
            entry: w,
            closePopout: O,
            onReaction: b,
            onVoiceChannelPreview: H,
          } = e,
          { largeImage: V } = (0, v.rv)({ entry: w }),
          {
            activity: B,
            currentEntry: D,
            artist: U,
            title: G,
            user: z,
          } = (0, Z.pi)(w),
          { primaryColor: Y, secondaryColor: W } = (0, j.Z)(
            null == V ? void 0 : V.src,
          ),
          q = (0, I.Z)(T.ABu.SPOTIFY),
          F = (0, r.e7)(
            [c.Z, h.default],
            () =>
              (null == B ? void 0 : B.type) === T.IIU.LISTENING && null != z
                ? (0, m.Z)(c.Z, h.default, z, B)
                : void 0,
            [B, z],
            o.Z,
          ),
          J = a.useCallback(() => {
            var e;
            if (null == k || null == z) return;
            let t =
                null === (e = B.timestamps) || void 0 === e ? void 0 : e.start,
              n = (0, g.T_)(null != t ? { start: t } : w, Date.now());
            return (0, f.CR)({
              user: z,
              channel: k,
              mediaImageSrc: null == V ? void 0 : V.src,
              artist: U,
              description: S({ artist: U, media: G }, k, z),
              colors: [Y, W],
              badges: (0, f.jE)({ timestamp: n }),
            });
          }, [B, U, k, w, null == V ? void 0 : V.src, Y, W, G, z]);
        if (null == B || null == D) return null;
        let X = U,
          K = [];
        if (D.media.provider === i.p.SPOTIFY) {
          (A = () => {
            (0, u.aG)(B);
          }),
            (M = () => {
              (0, u.Z5)(B, z.id);
            }),
            (L = () => {
              var e;
              (null !== (e = null == q ? void 0 : q()) && void 0 !== e) ||
                (0, u.aG)(B);
            });
          (X = (0, l.jsx)(d.Z, {
            artists: U,
            canOpen: null != B.sync_id,
            linkClassName: E.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
              (0, u.d$)(B, z.id, e);
            },
          })),
            (null == F ? void 0 : F.syncDisabled) === !1 &&
              K.push(
                (0, l.jsx)(
                  P.Ll,
                  {
                    onClick: () => {
                      (0, x.Z)(F, y.kG.USER_ACTIVITY_SYNC), O();
                    },
                    IconComponent: s.UserPlayIcon,
                    children: _.intl.string(_.t.eU3inJ),
                  },
                  "listen-along",
                ),
              );
        }
        let $ = (0, l.jsx)(P.wG, {
          onClickThumbnail: M,
          channel: k,
          entry: w,
          headerIcons:
            D.media.provider === i.p.SPOTIFY
              ? (0, l.jsx)(N.Z, {
                  onClick: L,
                  "aria-label": _.intl.string(_.t.rRffNz),
                  Icon: p.Z,
                })
              : null,
          userDescription: (0, g.kr)(w) ? _.t.Tzx5Dw : _.t.CcVI1d,
          title: G,
          onClickTitle: A,
          subtitle: X,
          badges: null,
          children:
            (null === (t = B.timestamps) || void 0 === t ? void 0 : t.start) !=
              null && (0, l.jsx)(R, { activity: B }),
        });
        return (0, l.jsxs)(P.yR, {
          children: [
            $,
            (0, l.jsx)(P.St, {
              children: (0, l.jsx)(P.WT, {
                onReaction: b,
                onVoiceChannelPreview: H,
                user: z,
                channel: k,
                generateReactionImage: J,
                reactionImageAltText:
                  ((n = U),
                  (C = z),
                  _.intl.formatToPlainString(_.t.h2yWWV, {
                    username: C.username,
                    activity: n,
                  })),
                entry: w,
                buttons: K,
              }),
            }),
          ],
        });
      }
    },
    278399: function (e, t, n) {
      n.d(t, {
        Ho: function () {
          return x;
        },
        y9: function () {
          return h;
        },
      });
      var l = n(200651),
        a = n(192379),
        i = n(317261),
        r = n(823379),
        o = n(379357),
        s = n(442550),
        u = n(561308),
        c = n(297781),
        d = n(443487),
        m = n(830677);
      let x = [c.An],
        h = [i._.WEEK];
      t.ZP = a.memo((e) => {
        let { entry: t, channel: n, selected: a } = e,
          { largeImage: i } = (0, o.rv)({ entry: t }),
          p = (0, u.Nq)(t);
        return null != p && (0, r.Hi)(p, h)
          ? (0, l.jsxs)(d.Zb, {
              selected: a,
              children: [
                (0, l.jsxs)(d.e$, {
                  children: [
                    (0, l.jsx)(d.F9, {
                      entry: t,
                      channelId: n.id,
                      guildId: n.guild_id,
                    }),
                    (0, l.jsx)(d.ll, { children: t.extra.artist.name }),
                    (0, l.jsx)(c.Gk, {
                      location: c.Gt.CARD,
                      children: x.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                    }),
                  ],
                }),
                (0, l.jsx)(s.f, {
                  src: null == i ? void 0 : i.src,
                  size: 48,
                  className: m.thumbnail,
                }),
              ],
            })
          : null;
      });
    },
    886217: function (e, t, n) {
      n(627494), n(757143);
      var l = n(200651),
        a = n(192379),
        i = n(317261),
        r = n(423875),
        o = n(442837),
        s = n(18323),
        u = n(594174),
        c = n(908841),
        d = n(823379),
        m = n(5192),
        x = n(561308),
        h = n(319604),
        p = n(31074),
        C = n(206295),
        v = n(278399),
        g = n(297781),
        f = n(591853),
        I = n(410441),
        j = n(981631),
        Z = n(616922),
        P = n(388032);
      let L = (e, t, n, l) => {
          let a = (function (e) {
              if (e === i._.WEEK) return P.t.SjOZfn;
            })(l),
            r = m.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.artist.name;
          return P.intl
            .formatToMarkdownString(a, { artist: o, userName: r })
            .replaceAll("*", "");
        },
        N = (e, t) =>
          P.intl.formatToPlainString(P.t.Osmpr6, {
            username: t.username,
            artist: e.extra.artist.name,
          });
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            onReaction: i,
            onVoiceChannelPreview: m,
          } = e,
          { parent_title: T, provider: y, image_url: _ } = n.extra.media,
          A = n.extra.artist.name,
          E = (0, o.e7)([u.default], () => u.default.getUser(n.author_id)),
          { primaryColor: S, secondaryColor: R } = (0, C.Z)(_),
          M = (0, x.Nq)(n),
          k = a.useCallback(() => {
            if (null == t || null == E || !(0, d.Hi)(M, v.y9)) return;
            let e = L(n, t, E, M);
            return (0, h.CR)({
              user: E,
              channel: t,
              mediaImageSrc: _,
              artist: A,
              description: e,
              colors: [S, R],
              badges: (0, h.UU)(n),
            });
          }, [_, A, t, n, S, M, R, E]),
          w = (0, p.Z)(j.ABu.SPOTIFY);
        if (null == E || !(0, d.Hi)(M, v.y9)) return null;
        let O = () => {
          let e = Z.Hw.ALBUM,
            t = s.Z.isProtocolRegistered()
              ? Z.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id)
              : Z.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
          window.open(t);
        };
        return (0, l.jsxs)(f.yR, {
          children: [
            (0, l.jsx)(f.wG, {
              onClickTitle: O,
              onClickSubtitle: () => {
                let e = Z.Hw.ARTIST,
                  t = s.Z.isProtocolRegistered()
                    ? Z.C7.PLAYER_OPEN(e, n.extra.artist.external_id)
                    : Z.C7.WEB_OPEN(e, n.extra.artist.external_id);
                window.open(t);
              },
              onClickThumbnail: O,
              channel: t,
              entry: n,
              headerIcons:
                y === r.p.SPOTIFY
                  ? (0, l.jsx)(I.Z, {
                      onClick: w,
                      Icon: c.Z,
                      "aria-label": P.intl.string(P.t["0ZB/XF"]),
                    })
                  : null,
              userDescription: P.t.CcVI1d,
              title: T,
              subtitle: A,
              badges: (0, l.jsx)(g.Gk, {
                location: g.Gt.POPOUT,
                children: v.Ho.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
              }),
            }),
            (0, l.jsx)(f.St, {
              children: (0, l.jsx)(f.WT, {
                onReaction: i,
                onVoiceChannelPreview: m,
                user: E,
                channel: t,
                generateReactionImage: k,
                reactionImageAltText: N(n, E),
                entry: n,
              }),
            }),
          ],
        });
      };
    },
    644548: function (e, t, n) {
      n(627494), n(757143);
      var l = n(200651),
        a = n(192379),
        i = n(317261),
        r = n(70956),
        o = n(5192),
        s = n(379357),
        u = n(561308),
        c = n(919394),
        d = n(206295),
        m = n(227172),
        x = n(555672),
        h = n(297781),
        p = n(591853),
        C = n(410441),
        v = n(797342),
        g = n(388032);
      let f = (e, t, n, l) => {
          let a = (function (e) {
              if (e === i._.WEEK) return g.t["7TXfc3"];
            })(l),
            r = o.ZP.getName(t.guild_id, t.id, n),
            s = e.extra.game_name;
          return g.intl
            .formatToMarkdownString(a, { gameName: s, userName: r })
            .replaceAll("*", "");
        },
        I = (e, t) =>
          g.intl.formatToPlainString(g.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name,
          });
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            disableGameProfileLinks: i,
            onReaction: o,
            onVoiceChannelPreview: j,
          } = e,
          { largeImage: Z } = (0, s.rv)({ entry: n }),
          { user: P, details: L, appName: N } = (0, v.n)(n),
          { primaryColor: T, secondaryColor: y } = (0, d.Z)(
            null == Z ? void 0 : Z.src,
          ),
          _ = (0, u.yA)(n),
          A = (0, u.Nq)(n),
          E = a.useCallback(
            (e) => {
              if (
                null != t &&
                null != P &&
                null != _ &&
                null != A &&
                !!(0, x.qy)(A)
              )
                return (0, c.SO)({
                  entry: n,
                  applicationImageSrc: null == Z ? void 0 : Z.src,
                  avatarSrcs: [
                    P.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                  ],
                  description: f(n, t, P, A),
                  timestamp: g.intl.formatToPlainString(g.t.YL7UEx, {
                    hours: Math.round(_ / r.Z.Seconds.HOUR),
                  }),
                  colors: [T, y],
                  channelId: e,
                });
            },
            [null == Z ? void 0 : Z.src, t, _, n, T, A, y, P],
          );
        if (null == P || null == _ || null == A || !(0, x.qy)(A)) return null;
        let S = null != n.extra.platform ? m.v[n.extra.platform] : null;
        return (0, l.jsxs)(p.yR, {
          children: [
            (0, l.jsx)(p.wG, {
              channel: t,
              headerIcons:
                null == S
                  ? null
                  : (0, l.jsx)(C.Z, {
                      Icon: S,
                      "aria-label": g.intl.string(g.t.YR4cHB),
                    }),
              entry: n,
              userDescription: g.t.rPqqtr,
              title: N,
              subtitle: L,
              badges: (0, l.jsx)(h.Gk, {
                location: h.Gt.POPOUT,
                children: x.Hs.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
              }),
              disableGameProfileLinks: i,
            }),
            (0, l.jsx)(p.St, {
              children: (0, l.jsx)(p.WT, {
                onReaction: o,
                onVoiceChannelPreview: j,
                user: P,
                channel: t,
                generateReactionImage: E,
                reactionImageAltText: I(n, P),
                entry: n,
              }),
            }),
          ],
        });
      };
    },
    268010: function (e, t, n) {
      n(627494), n(757143);
      var l = n(200651),
        a = n(192379),
        i = n(442837),
        r = n(481060),
        o = n(706454),
        s = n(594174),
        u = n(49012),
        c = n(5192),
        d = n(591759),
        m = n(379357),
        x = n(561308),
        h = n(685270),
        p = n(31074),
        C = n(206295),
        v = n(335326),
        g = n(297781),
        f = n(591853),
        I = n(410441),
        j = n(981631),
        Z = n(388032);
      let P = (e, t, n) => {
          let l = Z.t.LHF6Dw,
            a = c.ZP.getName(
              null == t ? void 0 : t.guild_id,
              null == t ? void 0 : t.id,
              n,
            ),
            i = e.extra.media_title;
          return Z.intl
            .formatToMarkdownString(l, {
              mediaTitle: i,
              userName: a,
              episodeDescription: e.extra.media_subtitle,
            })
            .replaceAll("*", "");
        },
        L = (e, t) =>
          Z.intl.formatToPlainString(Z.t.kCbfbG, {
            username: t.username,
            activity: e.extra.media_title,
          });
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            onReaction: c,
            onVoiceChannelPreview: N,
          } = e,
          T = (0, i.e7)([s.default], () => s.default.getUser(n.author_id)),
          { largeImage: y } = (0, m.rv)({ entry: n }),
          { primaryColor: _, secondaryColor: A } = (0, C.Z)(
            null == y ? void 0 : y.src,
          ),
          E = (0, i.e7)([o.default], () => o.default.locale),
          S = (0, p.Z)(j.ABu.CRUNCHYROLL),
          R = (0, x.ap)(n.extra.media_assets_large_text),
          M = a.useCallback(
            (e) => {
              if (null != T && (null == y ? void 0 : y.src) != null)
                return (0, h.B)({
                  entry: n,
                  mediaImageSrc: null == y ? void 0 : y.src,
                  avatarSrc: T.getAvatarURL(
                    null == t ? void 0 : t.guild_id,
                    128,
                  ),
                  description: P(n, t, T),
                  timestamp: (0, x.yh)(n, E),
                  episodeDescription: R,
                  colors: [_, A],
                  channelId: e,
                });
            },
            [t, n, R, E, null == y ? void 0 : y.src, _, A, T],
          ),
          k = () => {
            if (null == n.extra.url) return;
            let e = d.Z.safeParseWithQuery(n.extra.url);
            if (null != e && null != e.protocol && null != e.hostname)
              (0, u.q)({ href: d.Z.format(e), trusted: !1 });
          };
        return null == T
          ? null
          : (0, l.jsxs)(f.yR, {
              children: [
                (0, l.jsx)(f.wG, {
                  channel: t,
                  entry: n,
                  userDescription: (0, x.kr)(n) ? Z.t["LH+Z39"] : Z.t.YuKgmp,
                  title: n.extra.media_title,
                  subtitle: n.extra.media_subtitle,
                  headerIcons: (0, l.jsx)(I.Z, {
                    onClick: S,
                    Icon: r.CrunchyrollNeutralIcon,
                    "aria-label": Z.intl.string(Z.t.jdJYX1),
                  }),
                  badges: (0, l.jsx)(g.Gk, {
                    location: g.Gt.POPOUT,
                    children: v.t.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                  }),
                  onClickTitle: k,
                  onClickThumbnail: k,
                }),
                (0, l.jsx)(f.St, {
                  children: (0, l.jsx)(f.WT, {
                    onReaction: c,
                    onVoiceChannelPreview: N,
                    user: T,
                    channel: t,
                    generateReactionImage: M,
                    reactionImageAltText: L(n, T),
                    entry: n,
                  }),
                }),
              ],
            });
      };
    },
    111386: function (e, t, n) {
      n(47120);
      var l = n(200651),
        a = n(192379),
        i = n(704215),
        r = n(481060),
        o = n(243778),
        s = n(388032),
        u = n(649314),
        c = n(442937);
      let d = () =>
        (0, l.jsxs)("div", {
          className: u.coachtipInner,
          children: [
            (0, l.jsx)("img", {
              src: c,
              alt: s.intl.string(s.t["9wkT19"]),
              className: u.coachtipAsset,
            }),
            (0, l.jsxs)("div", {
              className: u.coachtipTextContainer,
              children: [
                (0, l.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: s.intl.string(s.t.V5y3qa),
                }),
                (0, l.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "text-secondary",
                  children: s.intl.string(s.t.eSDHDg),
                }),
              ],
            }),
          ],
        });
      t.Z = (e) => {
        let { children: t } = e,
          [n] = (0, o.US)([i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
          [s, c] = a.useState(!1);
        return (a.useEffect(() => {
          setTimeout(() => {
            c(!0);
          }, 300);
        }),
        n !== i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
          ? (0, l.jsx)(l.Fragment, { children: t })
          : (0, l.jsx)(r.Tooltip, {
              text: (0, l.jsx)(d, {}),
              tooltipClassName: u.coachtip,
              tooltipContentClassName: u.coachtipContent,
              position: "left",
              allowOverflow: !0,
              forceOpen: s,
              shouldShow: s,
              hideOnClick: !1,
              "aria-label": "test",
              children: (e) => (0, l.jsx)("div", { ...e, children: t }),
            });
      };
    },
    591853: function (e, t, n) {
      n.d(t, {
        Ll: function () {
          return ej;
        },
        St: function () {
          return eh;
        },
        WT: function () {
          return ep;
        },
        jL: function () {
          return eI;
        },
        wG: function () {
          return ef;
        },
        yR: function () {
          return ed;
        },
      }),
        n(47120);
      var l = n(200651),
        a = n(192379),
        i = n(120356),
        r = n.n(i),
        o = n(512722),
        s = n.n(o);
      n(995295);
      var u = n(442837),
        c = n(704215),
        d = n(692547),
        m = n(481060),
        x = n(493683),
        h = n(475179),
        p = n(287734),
        C = n(872810),
        v = n(607070),
        g = n(16609),
        f = n(220779),
        I = n(201133),
        j = n(557135),
        Z = n(194082),
        P = n(605236),
        L = n(543241),
        N = n(318374),
        T = n(258609),
        y = n(810568),
        _ = n(168524),
        A = n(102172),
        E = n(871118),
        S = n(565138),
        R = n(66999),
        M = n(790642),
        k = n(359110),
        w = n(12168),
        O = n(237583),
        b = n(131704),
        H = n(592125),
        V = n(430824),
        B = n(496675),
        D = n(699516),
        U = n(9156),
        G = n(594174),
        z = n(979651),
        Y = n(938475),
        W = n(626135),
        q = n(768581),
        F = n(5192),
        J = n(379357),
        X = n(26033),
        K = n(91907),
        $ = n(358696),
        Q = n(656709),
        ee = n(593294),
        et = n(192918),
        en = n(22211),
        el = n(206295),
        ea = n(111386),
        ei = n(896449),
        er = n(469153),
        eo = n(206583),
        es = n(981631),
        eu = n(388032),
        ec = n(179546);
      function ed(e) {
        let { children: t } = e,
          n = a.useRef(null);
        return (
          (0, m.useFocusLock)(n),
          (0, l.jsx)("div", { className: ec.popout, ref: n, children: t })
        );
      }
      function em(e) {
        let {
            children: t,
            backgroundImgSrc: n,
            className: a,
            style: i = {},
          } = e,
          { primaryColor: o, secondaryColor: s } = (0, el.Z)(n);
        return (
          null != n &&
            (i.background = "linear-gradient(45deg, "
              .concat(o, ", ")
              .concat(s, ")")),
          (0, l.jsx)(m.ThemeProvider, {
            theme: es.BRd.DARK,
            children: (e) =>
              (0, l.jsx)("div", {
                "data-disable-adaptive-theme": !0,
                className: r()(ec.hero, e, a),
                style: i,
                children: t,
              }),
          })
        );
      }
      let ex = a.createContext(null);
      function eh(e) {
        let { children: t } = e,
          n = a.useRef(null);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: ec.interactionsContainerHeader,
              ref: (e) => (n.current = e),
            }),
            (0, l.jsx)("div", {
              className: ec.interactionsContainer,
              children: (0, l.jsx)(ex.Provider, {
                value: n.current,
                children: t,
              }),
            }),
          ],
        });
      }
      function ep(e) {
        let {
            channel: t,
            user: n,
            generateReactionImage: i,
            reactionImageAltText: r,
            onReaction: o,
            entry: p,
            buttons: C = [],
            header: v,
            onVoiceChannelPreview: Z,
          } = e,
          [L, N] = a.useState(!1),
          [T, y] = a.useState(null),
          _ = (0, u.e7)(
            [B.Z],
            () =>
              null != t &&
              es.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) &&
              B.Z.can(es.Plq.SEND_MESSAGES, t),
          ),
          [A, E] = a.useState(!1),
          [w, q] = a.useState(!1),
          { voiceBar: J, joinVoiceButton: X } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
              { streamPreviewUrl: r, channel: o } = (0, en.Z)(n),
              { needSubscriptionToAccess: s } = (0, R.Z)(
                null == t ? void 0 : t.id,
              ),
              c = (0, u.e7)([V.Z], () =>
                null != o ? V.Z.getGuild(o.guild_id) : void 0,
              ),
              x = (0, u.Wu)(
                [Y.ZP],
                () => (null != o ? Y.ZP.getVoiceStatesForChannel(o) : []),
                [o],
              ),
              p = (0, u.e7)([z.Z], () =>
                z.Z.isInChannel(null == o ? void 0 : o.id),
              ),
              C = a.useMemo(() => {
                for (let e of x) {
                  let t = H.Z.getDMFromUserId(e.user.id),
                    n = null != t && U.ZP.isChannelMuted(null, t),
                    l = D.Z.isBlockedOrIgnored(e.user.id);
                  if (n || l) return !0;
                }
                return !1;
              }, [x]);
            if (null == o || null == c)
              return { voiceBar: void 0, joinVoiceButton: void 0 };
            let v = null != r,
              g = () => {
                h.Z.updateChatOpen(o.id, !0),
                  (0, k.Kh)(o.id),
                  null == i || i(o);
              },
              f = () => {
                j.Z.handleVoiceConnect({
                  channel: o,
                  connected: p,
                  needSubscriptionToAccess: s,
                  routeDirectlyToChannel: !0,
                });
              },
              I = (e) => {
                let {
                    children: t,
                    text: n,
                    hasRestrictedOrMutedVCParticipant: a,
                  } = e,
                  i = a
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          a &&
                            (0, l.jsx)(m.WarningIcon, {
                              size: "custom",
                              width: 13,
                              height: 13,
                              className: ec.popoutBlockedWarningIcon,
                            }),
                          eu.intl.string(eu.t.d6DpXF),
                        ],
                      })
                    : n;
                return (0, l.jsx)(
                  m.Tooltip,
                  {
                    "aria-label": a
                      ? eu.intl.string(eu.t.d6DpXF)
                      : null != n && n,
                    text: i,
                    shouldShow: !0,
                    children: t,
                  },
                  "voice-preview",
                );
              },
              Z = (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)("div", {
                    className: ec.voiceChannelPopoutReactorHeader,
                    children: [
                      (0, l.jsx)(I, {
                        text: eu.intl.string(eu.t.WIVYqK),
                        hasRestrictedOrMutedVCParticipant: C,
                        children: (e) =>
                          (0, l.jsxs)(m.Clickable, {
                            ...e,
                            "aria-label": eu.intl.string(eu.t.WIVYqK),
                            onClick: g,
                            className: ec.voiceChannelPopoutReactorChannel,
                            children: [
                              (0, l.jsx)(S.Z, {
                                guild: c,
                                size: S.Z.Sizes.SMOL,
                                className: ec.voiceChannelGuildIcon,
                                active: !0,
                              }),
                              (0, l.jsx)(m.ChevronSmallRightIcon, {
                                size: "xxs",
                                color: d.Z.colors.INTERACTIVE_NORMAL,
                              }),
                              (0, l.jsx)(m.VoiceNormalIcon, {
                                size: "xs",
                                color: d.Z.colors.TEXT_NORMAL,
                              }),
                              (0, l.jsx)(m.Text, {
                                variant: "text-sm/medium",
                                color: "text-normal",
                                className: ec.voiceChannelName,
                                children: o.name,
                              }),
                            ],
                          }),
                      }),
                      (0, l.jsx)(O.Z, {
                        guildId: c.id,
                        users: x,
                        max: 3,
                        renderUser: (e, t) =>
                          (0, l.jsx)(m.Avatar, {
                            src: e.user.getAvatarURL(c.id, 16),
                            size: m.AvatarSizes.SIZE_16,
                            "aria-label": "avatar",
                            className: t,
                          }),
                        renderMoreUsers: (e) =>
                          (0, l.jsx)("div", {
                            className: ec.voiceChannelAdditionalParticipants,
                            children: (0, l.jsx)(m.Text, {
                              variant: "text-xxs/semibold",
                              color: "text-normal",
                              children: e,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: ec.primaryActionPopoutDivider,
                  }),
                ],
              });
            return {
              voiceBar: Z,
              joinVoiceButton: p
                ? null
                : (0, l.jsx)(I, {
                    hasRestrictedOrMutedVCParticipant: C,
                    children: (e) =>
                      (0, l.jsx)(ej, {
                        ...e,
                        color: m.Button.Colors.GREEN,
                        onClick: f,
                        IconComponent: v ? m.ScreenIcon : m.VoiceNormalIcon,
                        children: v
                          ? eu.intl.string(eu.t["I6JG4+"])
                          : eu.intl.string(eu.t.VJlc0d),
                      }),
                  }),
            };
          })({ channel: t, entry: p, onVoiceChannelPreview: Z }),
          { embeddedActivity: K } = (0, ee.Z)(p),
          $ = (function (e) {
            let t = (0, u.e7)([V.Z], () =>
                V.Z.getGuild((0, g.j)(null == e ? void 0 : e.location)),
              ),
              n = (0, u.e7)([H.Z], () =>
                H.Z.getChannel((0, g.p)(null == e ? void 0 : e.location)),
              ),
              a = (0, u.Wu)([G.default], () => {
                var t, n;
                return null !==
                  (n =
                    null == e
                      ? void 0
                      : null === (t = e.participants) || void 0 === t
                        ? void 0
                        : t.map((e) => G.default.getUser(e.userId))) &&
                  void 0 !== n
                  ? n
                  : [];
              });
            return null != e && null != t && null != n && b.sR.has(n.type)
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("div", {
                      className: ec.voiceChannelPopoutReactorHeader,
                      children: [
                        (0, l.jsxs)(m.Clickable, {
                          "aria-label": eu.intl.string(eu.t["W/A4Qk"]),
                          onClick: () => (0, k.Kh)(n.id),
                          className: ec.voiceChannelPopoutReactorChannel,
                          children: [
                            (0, l.jsx)(S.Z, {
                              guild: t,
                              size: S.Z.Sizes.SMOL,
                              className: ec.voiceChannelGuildIcon,
                              active: !0,
                            }),
                            (0, l.jsx)(m.ChevronSmallRightIcon, {
                              size: "xxs",
                              color: d.Z.colors.INTERACTIVE_NORMAL,
                            }),
                            (0, l.jsx)(m.TextIcon, {
                              size: "xs",
                              color: d.Z.colors.TEXT_NORMAL,
                            }),
                            (0, l.jsx)(m.Text, {
                              variant: "text-sm/medium",
                              color: "text-normal",
                              className: ec.voiceChannelName,
                              children: null == n ? void 0 : n.name,
                            }),
                          ],
                        }),
                        (0, l.jsx)(O.Z, {
                          guildId: t.id,
                          users: a,
                          max: 3,
                          renderUser: (e, n) =>
                            (0, l.jsx)(m.Avatar, {
                              src: e.getAvatarURL(t.id, 16),
                              size: m.AvatarSizes.SIZE_16,
                              "aria-label": "avatar",
                              className: n,
                            }),
                          renderMoreUsers: (e) =>
                            (0, l.jsx)("div", {
                              className: ec.voiceChannelAdditionalParticipants,
                              children: (0, l.jsx)(m.Text, {
                                variant: "text-xxs/semibold",
                                color: "text-normal",
                                children: e,
                              }),
                            }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: ec.primaryActionPopoutDivider,
                    }),
                  ],
                })
              : null;
          })(K),
          et = null != X && 0 === C.length ? [X] : C,
          el = et.length > 0,
          ei = et.length >= 2,
          [ed, em] = a.useState(!el),
          ex = F.ZP.getName(
            null == t ? void 0 : t.guild_id,
            null == t ? void 0 : t.id,
            n,
          ),
          eh =
            null != t && L
              ? eu.intl.formatToPlainString(eu.t["8lzR/f"], {
                  channel: "#".concat(t.name),
                })
              : eu.intl.formatToPlainString(eu.t["4c+CAw"], {
                  channel: "@".concat(ex),
                }),
          ep = L ? eu.intl.string(eu.t.Z2CUgo) : eu.intl.string(eu.t.XLGiTE),
          ev = async (e) => {
            let l;
            if (null != e) {
              if (
                (W.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                  surface_type: eo.Kd.GUILD_MEMBER_LIST,
                  channel_id: null == t ? void 0 : t.id,
                  guild_id: null == t ? void 0 : t.guild_id,
                }),
                (0, P.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                E(!0),
                q(!1),
                L)
              )
                s()(
                  null != t,
                  "shareToChannelMode should only be true if a valid channel is passed",
                ),
                  (l = t);
              else {
                var a;
                let e = await x.Z.getOrEnsurePrivateChannel(n.id);
                l = null !== (a = H.Z.getChannel(e)) && void 0 !== a ? a : null;
              }
              return (
                s()(null != l, "Send channel must be defined"),
                ef({
                  reply: ":".concat(e.name, ":"),
                  sendToChannel: l,
                  onComplete: (e, t) => {
                    q(!0),
                      setTimeout(() => {
                        E(!1), o(e, t);
                      }, 600);
                  },
                  interactionType: eo.xP.REACTION_EMOJI_REACT_SENT,
                  requiresChannelReadiness: !1,
                })
              );
            }
          },
          eg = async (e) => {
            let l;
            if (((0, P.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), L))
              s()(
                null != t,
                "shareToChannelMode should only be true if a valid channel is passed",
              ),
                (l = t);
            else {
              let e = await x.Z.openPrivateChannel(n.id, !1, !1),
                t = H.Z.getChannel(e);
              s()(null != t, "DM channel must be defined"), (l = t);
            }
            let a =
              l.type === es.d4z.DM
                ? eo.xP.DM_REACTION_MESSAGE_SENT
                : eo.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return ef({
              reply: e,
              sendToChannel: l,
              interactionType: a,
              onComplete: o,
              requiresChannelReadiness: !0,
            });
          },
          ef = async (e) => {
            let {
              reply: t,
              sendToChannel: n,
              onComplete: l,
              interactionType: a,
              requiresChannelReadiness: o,
            } = e;
            if ((null == T || T.focus(), (0, M.Io)("ContentPopout Reactor")))
              await (0, Q.p)({
                channel: n,
                content: t,
                entry: p,
                whenReady: o,
              });
            else {
              var u;
              let e = await ((u = i),
              async function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                try {
                  return await u(...t);
                } catch (e) {
                  throw e;
                }
              })(n.id);
              s()(null != e, "Reaction image must be defined"),
                await (0, I.B)({ file: e, channel: n, altText: r, reply: t });
            }
            null == l || l(a, n);
          },
          eI = null != v ? v : null != J ? J : null != $ ? $ : void 0;
        return (
          a.useEffect(() => {
            ed && (null == T || T.focus());
          }, [T, L, ed]),
          (0, l.jsxs)("div", {
            style: { pointerEvents: A ? "none" : "all" },
            children: [
              (0, l.jsx)(er.Z, {
                sent: w,
                shown: A,
                className: ec.toastContainer,
              }),
              null != eI
                ? eI
                : (0, l.jsx)(ea.Z, {
                    children: (0, l.jsxs)("div", {
                      className: ec.emojiHotrailShareToChannel,
                      children: [
                        (0, l.jsx)(eC, { channel: t, onClickSuggestion: ev }),
                        (0, l.jsx)(f.dE, { onSelectEmoji: ev }),
                      ],
                    }),
                  }),
              (0, l.jsxs)("div", {
                className: ed
                  ? ec.inputContainerShareToChannel
                  : ec.hiddenButRenderedInputField,
                children: [
                  (0, l.jsx)(f.A7, {
                    placeholder: eh,
                    onEnter: eg,
                    setEditorRef: (e) => y(e),
                    channel: L ? t : void 0,
                    showEmojiButton: null != eI,
                    renderAttachButton: _
                      ? () =>
                          (0, l.jsx)(m.Tooltip, {
                            text: ep,
                            children: (e) =>
                              (0, l.jsx)(m.Clickable, {
                                ...e,
                                className: ec.shareToChannelButton,
                                onClick: () => N((e) => !e),
                                children: L
                                  ? (0, l.jsx)(m.TextIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                    })
                                  : (0, l.jsx)(m.AtIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                    }),
                              }),
                          })
                      : void 0,
                  }),
                  el &&
                    (0, l.jsx)(m.Clickable, {
                      onClick: () => em(!1),
                      className: ec.primaryActionPopoutMessageCloseIcon,
                      children: (0, l.jsx)(m.XSmallIcon, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: d.Z.colors.ICON_PRIMARY,
                      }),
                    }),
                ],
              }),
              !1 === ed &&
                (0, l.jsxs)("div", {
                  className: ec.primaryActionPopoutActionButtons,
                  children: [
                    (0, l.jsxs)(
                      m.Button,
                      {
                        className: ec.secondaryButton,
                        color: m.Button.Colors.PRIMARY,
                        look: m.Button.Looks.FILLED,
                        onClick: () => em(!0),
                        innerClassName: ec.iconButton,
                        size: ei ? m.Button.Sizes.MIN : m.Button.Sizes.LARGE,
                        children: [
                          (0, l.jsx)(m.ChatIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                          }),
                          !ei &&
                            (0, l.jsx)(m.Text, {
                              variant: "text-md/semibold",
                              children: eu.intl.string(eu.t.OAJQlJ),
                            }),
                        ],
                      },
                      "toggleMessageMode",
                    ),
                    et,
                  ],
                }),
            ],
          })
        );
      }
      let eC = (e) => {
        let { channel: t, onClickSuggestion: n } = e,
          [i, r] = a.useState(!1);
        a.useEffect(() => {
          r(!0);
        }, []);
        let o = !!v.Z.keyboardModeEnabled && !i,
          s = (0, L.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
              null == e.id
                ? { emoji: e, url: e.url }
                : {
                    emoji: e,
                    url: (0, q.gT)({
                      id: e.id,
                      animated: e.animated,
                      size: 58,
                    }),
                  },
            );
        return (0, l.jsx)(l.Fragment, {
          children: s.map((e) => {
            let { emoji: t, url: a } = e;
            return null != a
              ? (0, l.jsx)(
                  "div",
                  {
                    children: (0, l.jsx)(m.TooltipContainer, {
                      text: eu.intl.formatToPlainString(eu.t.kilW3t, {
                        emojiName: t.name,
                      }),
                      position: "top",
                      "aria-label": eu.intl.formatToPlainString(eu.t.kilW3t, {
                        emojiName: t.name,
                      }),
                      color: m.Tooltip.Colors.PRIMARY,
                      shouldShow: !o && void 0,
                      children: (0, l.jsx)(w.u, {
                        emoji: t,
                        isDisabled: !i,
                        onClick: () => n(t),
                        className: ec.emoji,
                      }),
                    }),
                  },
                  t.name,
                )
              : null;
          }),
        });
      };
      function ev(e) {
        let {
            channel: t,
            userDescription: n,
            entry: a,
            disableGameProfileLinks: i,
            onUserPopoutClosed: o,
          } = e,
          s = null == t ? void 0 : t.guild_id,
          {
            displayParticipants: c,
            participant1: d,
            participant2: x,
            numOtherParticipants: h,
          } = (0, et.Z)(a, 3),
          p = (0, u.e7)([G.default], () => G.default.getUser(a.author_id)),
          { streamPreviewUrl: C } = (0, en.Z)(a),
          v = [d, x];
        return (0, l.jsxs)("div", {
          className: ec.popoutContentHeader,
          children: [
            (0, l.jsxs)("div", {
              className: ec.popoutUserContainer,
              children: [
                (0, l.jsx)(N.Z, {
                  maxUsers: 3,
                  users: c,
                  size: m.AvatarSizes.SIZE_24,
                  avatarClassName: ec.popoutStackedAvatar,
                  hideOverflowCount: !0,
                  disableUsernameTooltip: !0,
                  onUserPopoutClosed: o,
                }),
                (0, l.jsx)(m.Spacer, { size: 8, horizontal: !0 }),
                (0, l.jsx)(m.Heading, {
                  variant: "heading-sm/normal",
                  className: ec.popoutTextSecondary,
                  children: eu.intl.format(n, {
                    user0: F.ZP.getName(s, null == t ? void 0 : t.id, v[0]),
                    user1: F.ZP.getName(s, null == t ? void 0 : t.id, v[1]),
                    countOthers: h,
                    countOthersHook: (e, t) =>
                      (0, l.jsx)(
                        m.Text,
                        {
                          variant: "text-sm/medium",
                          className: r()(
                            ec.popoutUsername,
                            ec.popoutTextPrimary,
                          ),
                          children: e,
                        },
                        t,
                      ),
                    name0Hook: (e, n) =>
                      (0, l.jsx)(
                        K.Z,
                        {
                          textClassName: r()(
                            ec.popoutUsername,
                            ec.popoutTextPrimary,
                          ),
                          text: e,
                          user: v[0],
                          channel: t,
                          onPopoutClosed: o,
                        },
                        n,
                      ),
                    name1Hook: (e, n) =>
                      (0, l.jsx)(
                        K.Z,
                        {
                          textClassName: r()(
                            ec.popoutUsername,
                            ec.popoutTextPrimary,
                          ),
                          text: e,
                          user: v[1],
                          channel: t,
                          onPopoutClosed: o,
                        },
                        n,
                      ),
                  }),
                }),
              ],
            }),
            null != C && (0, l.jsx)(Z.ZP, { size: Z.ZP.Sizes.SMALL }),
            null != p &&
              (0, l.jsx)(ei.Z, {
                user: p,
                channel: t,
                guildId: s,
                entry: a,
                disableGameProfileLinks: i,
              }),
          ],
        });
      }
      function eg(e) {
        let { children: t, onClick: n } = e;
        return null == n
          ? (0, l.jsx)(l.Fragment, { children: t })
          : (0, l.jsx)(m.Clickable, {
              className: ec.maybeClickable,
              onClick: n,
              children: t,
            });
      }
      function ef(e) {
        var t;
        let {
            title: n,
            subtitle: a,
            badges: i,
            children: o,
            onClickThumbnail: s,
            onClickTitle: u,
            onClickSubtitle: c,
            headerIcons: d,
            disableGameProfileLinks: x = !1,
            showCoverImage: h = !0,
            onUserPopoutClosed: p,
            trackRankingItemInteraction: C,
            ...v
          } = e,
          { entry: g } = v,
          f = (0, X.dX)(g),
          I = (0, _.Z)(
            {
              location: "ContentPopout",
              applicationId:
                f && !x
                  ? null === (t = g.extra) || void 0 === t
                    ? void 0
                    : t.application_id
                  : void 0,
              source: y.m1.ActivityCard,
              trackEntryPointImpression: !0,
              sourceUserId: g.author_id,
            },
            {
              onOpened: () =>
                null == C ? void 0 : C(eo.xP.OPENED_GAME_PROFILE),
            },
          ),
          { largeImage: j, smallImage: Z } = (0, J.rv)({
            entry: g,
            showCoverImage: h,
          }),
          P = f ? I : void 0;
        return (0, l.jsxs)("div", {
          className: ec.popoutContentWrapper,
          children: [
            (0, l.jsx)(ev, {
              disableGameProfileLinks: x,
              ...v,
              onUserPopoutClosed: p,
            }),
            (0, l.jsxs)(em, {
              backgroundImgSrc: null == j ? void 0 : j.src,
              children: [
                (0, l.jsxs)("div", {
                  className: ec.popoutHeroInner,
                  children: [
                    (0, l.jsx)("div", {
                      className: ec.popoutThumbnailContainer,
                      children: (0, l.jsx)($.E, {
                        image: j,
                        smallImage: Z,
                        aspectRatio: h ? "none" : void 0,
                        onClick: null != s ? s : P,
                        size: $.J.SIZE_72,
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: ec.popoutHeroBody,
                      children: [
                        (0, l.jsx)(eg, {
                          onClick: null != u ? u : P,
                          children: (0, l.jsx)(m.Heading, {
                            variant: "heading-md/medium",
                            className: r()(ec.popoutHeroTextPrimary, {
                              [ec.popoutHeroTextPrimaryShort]: null != d,
                            }),
                            lineClamp: 3,
                            children: n,
                          }),
                        }),
                        null != a
                          ? (0, l.jsx)(eg, {
                              onClick: null != c ? c : P,
                              children: (0, l.jsx)(m.Text, {
                                variant: "text-sm/normal",
                                className: ec.popoutHeroTextSecondary,
                                children: a,
                              }),
                            })
                          : null,
                        (0, l.jsx)(m.Spacer, { size: 8 }),
                        i,
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: ec.popoutHeaderIcons,
                      children: d,
                    }),
                  ],
                }),
                o,
              ],
            }),
          ],
        });
      }
      function eI(e) {
        var t;
        let {
            title: n,
            subtitle: i,
            badges: r,
            stream: o,
            onClickThumbnail: s,
            onClickTitle: c,
            onClickSubtitle: d,
            onUserPopoutClosed: x,
            trackRankingItemInteraction: h,
            ...v
          } = e,
          g = (0, u.e7)([H.Z], () =>
            H.Z.getChannel(null == o ? void 0 : o.channelId),
          ),
          [f] = a.useMemo(() => (0, A.p9)(g, z.Z, V.Z, B.Z, T.Z), [g]),
          { entry: I } = v,
          j = (0, X.dX)(I),
          Z = (0, _.Z)(
            {
              location: "ContentPopout",
              applicationId: j
                ? null === (t = I.extra) || void 0 === t
                  ? void 0
                  : t.application_id
                : void 0,
              source: y.m1.ActivityCard,
              trackEntryPointImpression: !0,
              sourceUserId: I.author_id,
            },
            {
              onOpened: () =>
                null == h ? void 0 : h(eo.xP.OPENED_GAME_PROFILE),
            },
          ),
          P = j ? Z : void 0,
          {
            activity: L,
            activityApplication: N,
            fallbackApplication: S,
          } = (0, ee.Z)(I),
          { largeImage: R, smallImage: M } = (0, J.YC)(L, null != N ? N : S);
        return null == o
          ? null
          : (0, l.jsxs)("div", {
              className: ec.popoutContentWrapper,
              children: [
                (0, l.jsx)(ev, { ...v, onUserPopoutClosed: x }),
                (0, l.jsxs)("div", {
                  className: ec.streamingPopoutHero,
                  children: [
                    (0, l.jsx)(eg, {
                      onClick: f
                        ? () => {
                            p.default.selectVoiceChannel(o.channelId),
                              (0, C.iV)(o);
                          }
                        : void 0,
                      children: (0, l.jsxs)("div", {
                        className: ec.streamingPopoutPreviewContainer,
                        children: [
                          (0, l.jsx)(E.Z, {
                            className: ec.streamingPopoutImg,
                            stream: o,
                          }),
                          f &&
                            (0, l.jsx)("div", {
                              className: ec.streamCTA,
                              children: (0, l.jsx)(m.Text, {
                                variant: "text-md/normal",
                                children: eu.intl.string(eu.t["7Xq/nZ"]),
                              }),
                            }),
                        ],
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: ec.streamingPopoutHeader,
                      children: [
                        null != R &&
                          (0, l.jsx)("div", {
                            className: ec.popoutThumbnailContainer,
                            children: (0, l.jsx)($.E, {
                              image: R,
                              smallImage: M,
                              onClick: null != s ? s : P,
                              size: $.J.SIZE_72,
                            }),
                          }),
                        (0, l.jsxs)("div", {
                          className: ec.streamingPopoutHeaderText,
                          children: [
                            (0, l.jsx)(eg, {
                              onClick: null != c ? c : P,
                              children: (0, l.jsx)(m.Heading, {
                                variant: "heading-md/semibold",
                                className: ec.popoutTextPrimary,
                                lineClamp: 3,
                                children: n,
                              }),
                            }),
                            null != i
                              ? (0, l.jsx)(eg, {
                                  onClick: null != d ? d : P,
                                  children: (0, l.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    className: ec.popoutTextSecondary,
                                    children: i,
                                  }),
                                })
                              : null,
                            (0, l.jsx)(m.Spacer, { size: 8 }),
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
      function ej(e) {
        let { IconComponent: t, children: n, className: a, ...i } = e;
        return (0, l.jsxs)(m.Button, {
          ...i,
          className: r()(a, ec.primaryButton),
          innerClassName: null != t ? ec.iconButton : void 0,
          size: m.Button.Sizes.LARGE,
          children: [
            null != t
              ? (0, l.jsx)(t, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: d.Z.colors.WHITE,
                })
              : null,
            (0, l.jsx)(m.Text, {
              variant: "text-md/semibold",
              color: "always-white",
              children: n,
            }),
          ],
        });
      }
    },
    896449: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var l = n(200651);
      n(192379);
      var a = n(481060),
        i = n(239091),
        r = n(299206),
        o = n(810568),
        s = n(168524),
        u = n(37258),
        c = n(26033),
        d = n(388032),
        m = n(607655);
      function x(e) {
        var t;
        let {
            user: n,
            guildId: x,
            channel: h,
            entry: p,
            onSelect: C,
            disableGameProfileLinks: v,
          } = e,
          g = (0, u.Z)({
            userId: n.id,
            guildId: x,
            channelId: null == h ? void 0 : h.id,
          }),
          f = (0, r.Z)({ id: n.id, label: d.intl.string(d.t["/AXYnJ"]) }),
          I = "application_id" in p.extra ? p.extra.application_id : null,
          j = (0, r.Z)({ id: I, label: d.intl.string(d.t["FfCL+/"]) }),
          Z = (0, c.dX)(p),
          P = (0, s.Z)({
            location: "ContentPopoutContextMenu",
            applicationId:
              Z && !0 !== v
                ? null === (t = p.extra) || void 0 === t
                  ? void 0
                  : t.application_id
                : void 0,
            source: o.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: p.author_id,
          });
        return (0, l.jsx)(a.Popout, {
          align: "top",
          position: "right",
          disablePointerEvents: !1,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(a.Menu, {
              navId: "content-inventory-context",
              onClose: () => {
                (0, i.Zy)(), t();
              },
              "aria-label": d.intl.string(d.t.liqwPD),
              onSelect: C,
              children: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)(a.MenuGroup, {
                    children: [
                      g,
                      null != P &&
                        (0, l.jsx)(a.MenuItem, {
                          id: "game-profile",
                          label: d.intl.string(d.t.f7aVGh),
                          action: P,
                        }),
                    ],
                  }),
                  (0, l.jsxs)(a.MenuGroup, { children: [f, j] }),
                ],
              }),
            });
          },
          children: (e) =>
            (0, l.jsx)(a.Tooltip, {
              text: d.intl.string(d.t.UKOtz8),
              children: (t) =>
                (0, l.jsx)(a.Clickable, {
                  ...t,
                  className: m.menuIcon,
                  ...e,
                  children: (0, l.jsx)(a.MoreHorizontalIcon, {
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
    469153: function (e, t, n) {
      var l = n(200651);
      n(192379);
      var a = n(476183),
        i = n(442837),
        r = n(481060),
        o = n(607070),
        s = n(388032),
        u = n(786661),
        c = n(24343);
      let d = () =>
        (0, l.jsxs)("div", {
          className: c.toast,
          children: [
            (0, l.jsx)(r.Spinner, {
              type: r.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
              className: u.loadingSpinner,
            }),
            (0, l.jsx)(r.Text, {
              color: "header-primary",
              variant: "text-md/normal",
              children: s.intl.string(s.t["5z/hlJ"]),
            }),
          ],
        });
      t.Z = (e) => {
        let { shown: t, sent: n, className: u } = e,
          c = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
          m = (0, r.useTransition)(
            t,
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
        return (0, l.jsx)(l.Fragment, {
          children: m(
            (e, t) =>
              t &&
              (0, l.jsx)(a.animated.div, {
                className: u,
                style: e,
                children: n
                  ? (0, l.jsx)(r.Toast, {
                      message: s.intl.string(s.t.fjcCk5),
                      type: r.ToastType.SUCCESS,
                      id: "success_message_toast",
                    })
                  : (0, l.jsx)(r.Toast, {
                      message: "",
                      type: r.ToastType.CUSTOM,
                      id: "custom_loading_message_toast",
                      options: { component: (0, l.jsx)(d, {}) },
                    }),
              }),
          ),
        });
      };
    },
    475676: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return L;
        },
      }),
        n(47120);
      var l = n(200651),
        a = n(192379),
        i = n(442837),
        r = n(481060),
        o = n(835473),
        s = n(297781),
        u = n(443487),
        c = n(314897),
        d = n(594174),
        m = n(626135),
        x = n(5192),
        h = n(873128),
        p = n(246627),
        C = n(709737),
        v = n(69589),
        g = n(531501),
        f = n(981631),
        I = n(701488),
        j = n(388032),
        Z = n(51130);
      function P(e) {
        let { application: t } = e,
          n = t.getIconURL(I.Si.LARGE),
          a =
            null == n
              ? null
              : (0, l.jsx)("img", {
                  className: Z.gameIcon,
                  src: n,
                  "aria-hidden": !0,
                  alt: "",
                });
        return (0, l.jsxs)("div", {
          className: Z.gameTitleContainer,
          children: [
            a,
            (0, l.jsx)(r.Text, {
              variant: "text-sm/medium",
              className: Z.gameTitle,
              children: t.name,
            }),
          ],
        });
      }
      function L(e) {
        var t, n, g, I, Z;
        let L,
          { selected: T, channel: y, entry: _ } = e,
          A = y.guild_id,
          E = (0, h.Z)({
            guildId: A,
            leaderboardId: _.extra.leaderboard_id,
            intervalOffset: 0,
          }),
          { rankChanges: S } = (0, p.Z)({
            guildId: A,
            leaderboardId: _.extra.leaderboard_id,
            intervalStart:
              null !== (I = null == E ? void 0 : E.interval_start) &&
              void 0 !== I
                ? I
                : "",
          }),
          R = (0, i.e7)([c.default], () => c.default.getId()),
          [M, k] = a.useMemo(() => {
            let e = S.find((e) => e.userId === R),
              t = S[0],
              n = null != e ? e : t,
              l =
                null == E
                  ? void 0
                  : E.users.find(
                      (e) => e.user_id === (null == n ? void 0 : n.userId),
                    );
            return [n, l];
          }, [E, S, R]),
          w = (0, i.e7)([d.default], () =>
            d.default.getUser(null == M ? void 0 : M.userId),
          ),
          O = x.ZP.getName(A, void 0, w);
        !(function (e) {
          let { leaderboard: t, guildId: n } = e,
            l = null == t ? void 0 : t.leaderboard_id;
          a.useEffect(() => {
            null != l &&
              m.default.track(f.rMx.LEADERBOARD_MEMBERLIST_CARD_VIEWED, {
                leaderboard_id: l,
                guild_id: n,
              });
          }, [l, n]);
        })({ leaderboard: E, guildId: A });
        let b = (0, o.q)(
          null == E
            ? void 0
            : null === (t = E.settings) || void 0 === t
              ? void 0
              : t.application_id,
        );
        if (null == E || null == b) return null;
        if (0 === E.users.length || null == M || null == w)
          return (0, l.jsx)(N, { application: b, selected: T });
        let { sort_by_statistic_id: H } = E.guild_settings,
          V =
            null !==
              (Z =
                null == k
                  ? void 0
                  : null === (g = k.statistics) || void 0 === g
                    ? void 0
                    : null === (n = g[H]) || void 0 === n
                      ? void 0
                      : n.value) && void 0 !== Z
              ? Z
              : 0,
          { currentRank: B } = M;
        return (
          (L =
            M.userId === R
              ? j.intl.formatToPlainString(j.t["eU+JxM"], { rank: B })
              : j.intl.formatToPlainString(j.t["8BLSQ0"], {
                  rank: B,
                  username: O,
                })),
          (0, l.jsxs)(u.Zb, {
            selected: T,
            children: [
              (0, l.jsxs)(u.e$, {
                children: [
                  (0, l.jsx)(P, { application: b }),
                  (0, l.jsx)(r.Spacer, { size: 2 }),
                  (0, l.jsx)(u.ll, { children: L }),
                  (0, l.jsx)(s.Gk, {
                    location: s.Gt.CARD,
                    children: (0, l.jsx)(C.DC, { value: V, statisticId: H }),
                  }),
                ],
              }),
              (0, l.jsx)(v.Z, { user: w, rank: B }),
            ],
          })
        );
      }
      function N(e) {
        let { selected: t, application: n } = e;
        return (0, l.jsxs)(u.Zb, {
          selected: t,
          children: [
            (0, l.jsxs)(u.e$, {
              children: [
                (0, l.jsx)(P, { application: n }),
                (0, l.jsx)(r.Spacer, { size: 2 }),
                (0, l.jsx)(u.ll, { children: j.intl.string(j.t["t+b0DA"]) }),
                (0, l.jsx)(s.Gk, {
                  location: s.Gt.CARD,
                  children: (0, l.jsx)(C.ZR, {
                    text: j.intl.string(j.t.zX8HUl),
                  }),
                }),
              ],
            }),
            (0, l.jsx)(g.Z, {
              color: "#5B5A56",
              children: (0, l.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png",
                alt: "",
                className: Z.emptyStateImage,
              }),
            }),
          ],
        });
      }
    },
    531501: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var l = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        r = n(705409);
      function o(e) {
        let { children: t, className: n, color: a } = e;
        return (0, l.jsxs)("div", {
          className: i()(r.container, n),
          children: [
            (0, l.jsxs)("svg", {
              className: r.border,
              width: "48",
              height: "48",
              viewBox: "0 0 48 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, l.jsx)("path", {
                  fill: a,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2.56494 3.99827V6.685L0.953743 8.27307C0.681432 8.54147 0.527646 8.90755 0.526583 9.2899L0.445318 38.5096C0.444267 38.8875 0.592525 39.2505 0.857827 39.5197L2.56494 41.2517V43.9983C2.56494 44.7899 3.20666 45.4316 3.99827 45.4316H6.68488L8.27307 47.0429C8.54147 47.3152 8.90755 47.469 9.2899 47.4701L38.5096 47.5514C38.8875 47.5524 39.2505 47.4041 39.5197 47.1388L41.2518 45.4316H43.9983C44.7899 45.4316 45.4316 44.7899 45.4316 43.9983V41.3118L47.0429 39.7236C47.3152 39.4552 47.469 39.0891 47.4701 38.7068L47.5514 9.48712C47.5524 9.10919 47.4041 8.74613 47.1388 8.47697L45.4316 6.74487V3.99827C45.4316 3.20666 44.7899 2.56494 43.9983 2.56494H41.3117L39.7236 0.953746C39.4552 0.681434 39.0891 0.527649 38.7068 0.526586L9.48712 0.445318C9.10918 0.444267 8.74613 0.592525 8.47696 0.857827L6.74499 2.56494H3.99827C3.20666 2.56494 2.56494 3.20666 2.56494 3.99827ZM3.99837 5.41255V5.41421L4.00202 5.41061V5.40895L3.99837 5.41255ZM3.99837 41.7865V41.788L4.00202 41.7917V41.7902L3.99837 41.7865ZM3.99837 43.9983V43.9998H43.9984V3.99983L43.9983 43.9983H3.99837ZM42.5856 3.99983H42.5841L42.5861 4.00189H42.5876L42.5856 3.99983ZM5.43126 4.00189H5.42957L5.43166 3.99983H5.43334L5.43126 4.00189ZM7.5647 2.66494L7.56312 2.6665H40.504L40.5025 2.66494H7.5647ZM40.265 2.56494H7.80693L9.00026 1.38874C9.12943 1.26142 9.30367 1.19027 9.48504 1.19077L38.7047 1.27204C38.8882 1.27255 39.0639 1.34635 39.1927 1.47704L40.265 2.56494ZM3.99827 2.66494C3.26189 2.66494 2.66494 3.26189 2.66494 3.99827V6.72684L1.02394 8.34429C0.770628 8.59397 0.627571 8.9345 0.626582 9.29018L0.545318 38.5098C0.545237 38.5389 0.546107 38.5679 0.547913 38.5968C0.546173 38.5685 0.545336 38.54 0.545415 38.5114L0.62668 9.29174C0.627669 8.93607 0.770725 8.59553 1.02404 8.34585L2.66504 6.72841V3.99983C2.66504 3.26345 3.26199 2.6665 3.99837 2.6665H6.78609L8.54726 0.930609C8.79765 0.683816 9.13537 0.545902 9.48694 0.54688L38.7066 0.628148C39.0623 0.629137 39.4028 0.772193 39.6525 1.02551L41.2699 2.6665H43.9984C44.7057 2.6665 45.2844 3.21725 45.3289 3.91329C45.2851 3.21651 44.7061 2.66494 43.9983 2.66494H41.2698L39.6524 1.02394C39.4027 0.770631 39.0622 0.627574 38.7065 0.626585L9.48684 0.545318C9.13527 0.54434 8.79755 0.682254 8.54716 0.929047L6.78599 2.66494H3.99827ZM45.3317 6.78597V6.78743L47.0677 8.54873C47.2941 8.77839 47.4288 9.08152 47.4489 9.40142C47.4292 9.08095 47.2944 8.7772 47.0676 8.54716L45.3317 6.78597ZM2.66743 44.0804C2.66584 44.0538 2.66504 44.0269 2.66504 43.9998V41.2122L2.66494 43.9983C2.66494 44.0259 2.66578 44.0533 2.66743 44.0804ZM7.49413 45.3332L8.73276 46.5898C8.8803 46.7395 9.08153 46.8241 9.2917 46.8246L38.5113 46.9059C38.7191 46.9065 38.9187 46.825 39.0666 46.6792L40.4322 45.3332H40.4339L39.0667 46.6807C38.9188 46.8265 38.7192 46.908 38.5114 46.9075L9.29179 46.8262C9.08162 46.8256 8.88039 46.7411 8.73286 46.5914L7.49269 45.3332H7.49413ZM8.80398 46.5196L7.73157 45.4316H40.1899L38.9964 46.6079C38.8672 46.7353 38.693 46.8064 38.5116 46.8059L9.29198 46.7246C9.10848 46.7241 8.93279 46.6503 8.80398 46.5196ZM45.3317 40.504L46.5898 39.2639C46.7395 39.1164 46.824 38.9151 46.8246 38.705L46.9059 9.48532C46.9059 9.46799 46.9054 9.45072 46.9043 9.43352C46.9055 9.45123 46.906 9.46903 46.906 9.48689L46.8247 38.7065C46.8241 38.9167 46.7396 39.1179 46.5899 39.2655L45.3317 40.5056V40.504ZM46.5196 39.1927L45.4316 40.2651V7.8068L46.6079 9.00026C46.7353 9.12944 46.8064 9.30367 46.8059 9.48505L46.7246 38.7047C46.7241 38.8882 46.6503 39.0639 46.5196 39.1927ZM1.09232 38.5631C1.10421 38.752 1.18383 38.931 1.31752 39.0666L2.66494 40.4337V7.49438L2.66504 40.4352L1.31762 39.0682C1.18356 38.9322 1.10387 38.7526 1.09232 38.5631ZM1.47704 8.80398L2.56494 7.73169V40.1897L1.38874 38.9964C1.26142 38.8672 1.19027 38.693 1.19077 38.5116L1.27203 9.29198C1.27254 9.10848 1.34635 8.93279 1.47704 8.80398ZM5.18566 4.10189L5.18933 4.09827H4.09827V5.17367L4.10202 5.16998V6.21667L4.09827 6.22037V41.7454L4.10202 41.7492V42.8111L4.09827 42.8073V43.8983H43.8983V4.09827H42.823L42.8266 4.10189H41.7799L41.7763 4.09827H6.25127L6.2476 4.10189H5.18566Z",
                }),
                (0, l.jsx)("path", {
                  fill: a,
                  stroke: a,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2.56494 3.99827V6.685L0.953743 8.27307C0.681432 8.54147 0.527646 8.90755 0.526583 9.2899L0.445318 38.5096C0.444267 38.8875 0.592525 39.2505 0.857827 39.5197L2.56494 41.2517V43.9983C2.56494 44.7899 3.20666 45.4316 3.99827 45.4316H6.68488L8.27307 47.0429C8.54147 47.3152 8.90755 47.469 9.2899 47.4701L38.5096 47.5514C38.8875 47.5524 39.2505 47.4041 39.5197 47.1388L41.2518 45.4316H43.9983C44.7899 45.4316 45.4316 44.7899 45.4316 43.9983V41.3118L47.0429 39.7236C47.3152 39.4552 47.469 39.0891 47.4701 38.7068L47.5514 9.48712C47.5524 9.10919 47.4041 8.74613 47.1388 8.47697L45.4316 6.74487V3.99827C45.4316 3.20666 44.7899 2.56494 43.9983 2.56494H41.3117L39.7236 0.953746C39.4552 0.681434 39.0891 0.527649 38.7068 0.526586L9.48712 0.445318C9.10918 0.444267 8.74613 0.592525 8.47696 0.857827L6.74499 2.56494H3.99827C3.20666 2.56494 2.56494 3.20666 2.56494 3.99827ZM3.99837 5.41255V5.41421L4.00202 5.41061V5.40895L3.99837 5.41255ZM3.99837 41.7865V41.788L4.00202 41.7917V41.7902L3.99837 41.7865ZM3.99837 43.9983V43.9998H43.9984V3.99983L43.9983 43.9983H3.99837ZM42.5856 3.99983H42.5841L42.5861 4.00189H42.5876L42.5856 3.99983ZM5.43126 4.00189H5.42957L5.43166 3.99983H5.43334L5.43126 4.00189ZM7.5647 2.66494L7.56312 2.6665H40.504L40.5025 2.66494H7.5647ZM40.265 2.56494H7.80693L9.00026 1.38874C9.12943 1.26142 9.30367 1.19027 9.48504 1.19077L38.7047 1.27204C38.8882 1.27255 39.0639 1.34635 39.1927 1.47704L40.265 2.56494ZM3.99827 2.66494C3.26189 2.66494 2.66494 3.26189 2.66494 3.99827V6.72684L1.02394 8.34429C0.770628 8.59397 0.627571 8.9345 0.626582 9.29018L0.545318 38.5098C0.545237 38.5389 0.546107 38.5679 0.547913 38.5968C0.546173 38.5685 0.545336 38.54 0.545415 38.5114L0.62668 9.29174C0.627669 8.93607 0.770725 8.59553 1.02404 8.34585L2.66504 6.72841V3.99983C2.66504 3.26345 3.26199 2.6665 3.99837 2.6665H6.78609L8.54726 0.930609C8.79765 0.683816 9.13537 0.545902 9.48694 0.54688L38.7066 0.628148C39.0623 0.629137 39.4028 0.772193 39.6525 1.02551L41.2699 2.6665H43.9984C44.7057 2.6665 45.2844 3.21725 45.3289 3.91329C45.2851 3.21651 44.7061 2.66494 43.9983 2.66494H41.2698L39.6524 1.02394C39.4027 0.770631 39.0622 0.627574 38.7065 0.626585L9.48684 0.545318C9.13527 0.54434 8.79755 0.682254 8.54716 0.929047L6.78599 2.66494H3.99827ZM45.3317 6.78597V6.78743L47.0677 8.54873C47.2941 8.77839 47.4288 9.08152 47.4489 9.40142C47.4292 9.08095 47.2944 8.7772 47.0676 8.54716L45.3317 6.78597ZM2.66743 44.0804C2.66584 44.0538 2.66504 44.0269 2.66504 43.9998V41.2122L2.66494 43.9983C2.66494 44.0259 2.66578 44.0533 2.66743 44.0804ZM7.49413 45.3332L8.73276 46.5898C8.8803 46.7395 9.08153 46.8241 9.2917 46.8246L38.5113 46.9059C38.7191 46.9065 38.9187 46.825 39.0666 46.6792L40.4322 45.3332H40.4339L39.0667 46.6807C38.9188 46.8265 38.7192 46.908 38.5114 46.9075L9.29179 46.8262C9.08162 46.8256 8.88039 46.7411 8.73286 46.5914L7.49269 45.3332H7.49413ZM8.80398 46.5196L7.73157 45.4316H40.1899L38.9964 46.6079C38.8672 46.7353 38.693 46.8064 38.5116 46.8059L9.29198 46.7246C9.10848 46.7241 8.93279 46.6503 8.80398 46.5196ZM45.3317 40.504L46.5898 39.2639C46.7395 39.1164 46.824 38.9151 46.8246 38.705L46.9059 9.48532C46.9059 9.46799 46.9054 9.45072 46.9043 9.43352C46.9055 9.45123 46.906 9.46903 46.906 9.48689L46.8247 38.7065C46.8241 38.9167 46.7396 39.1179 46.5899 39.2655L45.3317 40.5056V40.504ZM46.5196 39.1927L45.4316 40.2651V7.8068L46.6079 9.00026C46.7353 9.12944 46.8064 9.30367 46.8059 9.48505L46.7246 38.7047C46.7241 38.8882 46.6503 39.0639 46.5196 39.1927ZM1.09232 38.5631C1.10421 38.752 1.18383 38.931 1.31752 39.0666L2.66494 40.4337V7.49438L2.66504 40.4352L1.31762 39.0682C1.18356 38.9322 1.10387 38.7526 1.09232 38.5631ZM1.47704 8.80398L2.56494 7.73169V40.1897L1.38874 38.9964C1.26142 38.8672 1.19027 38.693 1.19077 38.5116L1.27203 9.29198C1.27254 9.10848 1.34635 8.93279 1.47704 8.80398ZM5.18566 4.10189L5.18933 4.09827H4.09827V5.17367L4.10202 5.16998V6.21667L4.09827 6.22037V41.7454L4.10202 41.7492V42.8111L4.09827 42.8073V43.8983H43.8983V4.09827H42.823L42.8266 4.10189H41.7799L41.7763 4.09827H6.25127L6.2476 4.10189H5.18566Z",
                  strokeWidth: "0.4",
                }),
              ],
            }),
            t,
          ],
        });
      }
    },
    12168: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
        u: function () {
          return T;
        },
      }),
        n(47120);
      var l = n(200651),
        a = n(192379),
        i = n(120356),
        r = n.n(i),
        o = n(392711),
        s = n(476183),
        u = n(481060),
        c = n(596454),
        d = n(727637),
        m = n(313201),
        x = n(543241),
        h = n(318766),
        p = n(907040),
        C = n(633302),
        v = n(806966),
        g = n(176354),
        f = n(823379),
        I = n(354459),
        j = n(185923),
        Z = n(420212),
        P = n(191315);
      let L = j.Hz.CHAT,
        N = [
          C.ZP.getByName("thumbsup"),
          C.ZP.getByName("eyes"),
          C.ZP.getByName("laughing"),
          C.ZP.getByName("watermelon"),
          C.ZP.getByName("fork_and_knife"),
          C.ZP.getByName("yum"),
        ].filter(f.lm);
      function T(e) {
        let { emoji: t, isDisabled: n = !1, onClick: i, className: o } = e,
          m = a.useRef(null),
          x = (0, d.Z)(m);
        return (0, l.jsx)("span", {
          ref: m,
          children: (0, l.jsx)(u.Button, {
            onClick: i,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            focusProps: { enabled: !n },
            children: (0, l.jsx)(u.Spring, {
              config: h.u,
              from: { value: 0 },
              to: { value: x ? 1 : 0 },
              children: (e) => {
                let { value: a } = e;
                return (0, l.jsx)(s.animated.div, {
                  style: {
                    transform: a
                      .to([0, 1], [1, 1.14])
                      .to((e) => "scale(".concat(e, ")")),
                  },
                  children: (0, l.jsx)(c.Z, {
                    className: r()(P.emoji, o, { [P.emojiItemDisabled]: n }),
                    emojiId: t.id,
                    emojiName: null == t ? void 0 : t.surrogates,
                    animated: t.animated,
                  }),
                });
              },
            }),
          }),
        });
      }
      function y(e) {
        let {
          otherAccessories: t,
          isEmojiPickerExpanded: n,
          onSetExpanded: a,
          onFocus: i,
        } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            t,
            (0, l.jsx)(u.Clickable, {
              className: P.dropDownContainer,
              onClick: () => {
                a(!n), i();
              },
              children: (0, l.jsx)(u.ChevronSmallDownIcon, {
                size: "md",
                color: "currentColor",
                className: r()(P.dropDown, { [P.dropDownOpen]: n }),
              }),
            }),
          ],
        });
      }
      function _(e) {
        let {
            channel: t,
            title: n,
            closePopout: i,
            onFocus: s,
            onSelectEmoji: c,
            onSelectDisabledEmoji: d,
            onExpandedToggle: h,
            emojiSearchProps: C,
            recentlyUsedEmojis: f,
            analyticsOverride: _,
          } = e,
          A = (0, m.Dt)(),
          [E, S] = a.useState(!1),
          R = (0, x.wC)(t.guild_id),
          M = (0, o.uniqBy)([...R, ...N], "name")
            .filter(
              (e) =>
                !g.ZP.isEmojiFilteredOrLocked({
                  emoji: e,
                  channel: t,
                  intention: L,
                }),
            )
            .slice(0, I.e5);
        null != f && f.length > 0 && M.splice(M.length - 1, 1, f[0]);
        let k = (e) => {
            S(e), null == h || h(e);
          },
          w = (e, t) => {
            if (null == e && t) {
              i();
              return;
            }
            null != e && c(e);
            k(!t), t && v.kJ.setSearchPlaceholder(null);
          };
        return (0, l.jsxs)(u.Dialog, {
          "aria-labelledby": A,
          children: [
            (0, l.jsx)(u.HeadingLevel, {
              forceLevel: 2,
              children: (0, l.jsx)(u.HiddenVisually, {
                children: (0, l.jsx)(u.H, { id: A, children: n }),
              }),
            }),
            (0, l.jsxs)("div", {
              className: P.container,
              children: [
                (0, l.jsx)(p.Z, {
                  analyticsOverride: _,
                  channel: t,
                  className: r()(P.animatedPicker, {
                    [P.animatedPickerTall]: E,
                  }),
                  headerClassName: r()(P.emojiPickerHeader, {
                    [P.emojiPickerHeaderExpanded]: E,
                  }),
                  closePopout: i,
                  onSelectEmoji: E ? w : () => {},
                  shouldHidePickerActions: !E,
                  wrapper: "div",
                  pickerIntention: L,
                  searchProps: {
                    ...C,
                    accessory: (0, l.jsx)(y, {
                      otherAccessories: null == C ? void 0 : C.accessory,
                      isEmojiPickerExpanded: E,
                      onSetExpanded: k,
                      onFocus: s,
                    }),
                    onKeyDown: (e) => {
                      null != e &&
                        e.key !== Z.vn.TAB &&
                        (e.key !== Z.vn.ENTER || e.shiftKey ? k(!0) : k(!E));
                    },
                  },
                }),
                (0, l.jsx)("div", {
                  className: P.slotsContainer,
                  children: (0, l.jsx)("div", {
                    className: r()(P.slots, P.slotsWide),
                    children: M.map((e) => {
                      let n = g.ZP.isEmojiDisabled({
                        emoji: e,
                        channel: t,
                        intention: j.Hz.CHAT,
                      });
                      return (0, l.jsx)(
                        "div",
                        {
                          className: P.slot,
                          children: (0, l.jsx)(u.TooltipContainer, {
                            text: e.name,
                            position: "top",
                            "aria-label": e.name,
                            tooltipClassName: P.tooltipContainer,
                            color: u.Tooltip.Colors.BRAND,
                            children: (0, l.jsx)(T, {
                              emoji: e,
                              isDisabled: n,
                              onClick: () => {
                                n ? null == d || d(e) : w(e, !0);
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
//# sourceMappingURL=826d0b41c4fae84dd595.js.map
