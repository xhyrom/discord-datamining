"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47593"],
  {
    678173: function (e, n, t) {
      t.d(n, {
        T: function () {
          return s;
        },
      });
      var a = t(470079),
        c = t(127255);
      function s(e, n) {
        let t = (0, c.Z)({ guildId: e });
        return a.useMemo(() => {
          var e;
          return null !== (e = t.find((e) => e.application.id === n)) &&
            void 0 !== e
            ? e
            : null;
        }, [t, n]);
      }
    },
    636508: function (e, n, t) {
      t.d(n, {
        $: function () {
          return l;
        },
        W: function () {
          return f;
        },
      });
      var a = t(470079),
        c = t(442837),
        s = t(592125),
        d = t(944486),
        i = t(914010),
        o = t(771845);
      function l() {
        var e;
        let { allowGdmActivityChannelSuggestion: n } =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { allowGdmActivityChannelSuggestion: !1 },
          t = d.Z.getVoiceChannelId(),
          a = s.Z.getChannel(t);
        if (null != a && null != a.guild_id) return a.guild_id;
        if (null == a || !n)
          return null !== (e = i.Z.getLastSelectedGuildId()) && void 0 !== e
            ? e
            : o.ZP.getFlattenedGuildIds()[0];
      }
      function f() {
        let e = (0, c.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds());
        return a.useMemo(() => e.map((e) => ({ label: e, value: e })), [e]);
      }
    },
    696068: function (e, n, t) {
      t.d(n, {
        F: function () {
          return Z;
        },
        d: function () {
          return g;
        },
      }),
        t(653041),
        t(47120);
      var a = t(442837),
        c = t(592125),
        s = t(324067),
        d = t(430824),
        i = t(496675),
        o = t(944486),
        l = t(979651),
        f = t(938475),
        r = t(823379),
        u = t(374065),
        p = t(981631);
      function b(e, n, t, a, c) {
        let s = (0, u.e4)({
          channelId: e.id,
          ChannelStore: n,
          GuildStore: t,
          PermissionStore: a,
          VoiceStateStore: c,
        });
        return (e.type === p.d4z.GUILD_VOICE && s === u.jy.CAN_LAUNCH) || !1;
      }
      function g(e) {
        var n, t, a;
        let { guildId: u, allowGdmActivityChannelSuggestion: p = !1 } = e;
        if (null == u && !p) return null;
        let g = o.Z.getVoiceChannelId(),
          m = c.Z.getChannel(g);
        if (null != m && (null != m.guild_id || p)) return m.id;
        let Z = [];
        for (let e of Object.values(s.Z.getCategories(u)))
          for (let n of e)
            b(n.channel, c.Z, d.Z, i.Z, l.Z) &&
              Z.push({
                channel: n.channel,
                users: f.ZP.getVoiceStatesForChannel(n.channel).filter(r.lm),
              });
        return null !==
          (a =
            null ===
              (t = Z.sort((e, n) =>
                e.users.length > n.users.length ? -1 : 1,
              )[0]) || void 0 === t
              ? void 0
              : null === (n = t.channel) || void 0 === n
                ? void 0
                : n.id) && void 0 !== a
          ? a
          : null;
      }
      function m(e, n) {
        if (e.length !== n.length) return !1;
        for (let t = 0; t < e.length; t++)
          if (e[t].value.channel.id !== n[t].value.channel.id) return !1;
        return !0;
      }
      function Z(e) {
        return (0, a.e7)(
          [s.Z, c.Z, d.Z, i.Z, l.Z, f.ZP],
          () => {
            if (null == e) return [];
            let n = [];
            return (
              Object.values(s.Z.getCategories(e)).forEach((e) => {
                e.forEach((e) => {
                  let { channel: t } = e;
                  b(t, c.Z, d.Z, i.Z, l.Z) && n.push(t);
                });
              }),
              n
                .map((e) => {
                  let n = f.ZP.getVoiceStatesForChannel(e).filter(r.lm);
                  return { value: { channel: e, users: n }, label: e.name };
                })
                .sort((e, n) =>
                  e.value.users.length > n.value.users.length ? -1 : 1,
                )
            );
          },
          [e],
          m,
        );
      }
    },
    226799: function (e, n, t) {
      t.d(n, {
        o: function () {
          return z;
        },
      });
      var a = t(701488),
        c = t(799911),
        s = t(222013),
        d = t(38161),
        i = t(15259),
        o = t(517288),
        l = t(724491),
        f = t(271359),
        r = t(241976),
        u = t(783466),
        p = t(128584),
        b = t(469999),
        g = t(607865),
        m = t(265661),
        Z = t(121517),
        h = t(295597),
        S = t(327510),
        y = t(465087),
        M = t(920496),
        v = t(39417),
        x = t(641322),
        w = t(829463),
        I = t(966310),
        U = t(710227),
        j = t(820836),
        C = t(179603),
        N = t(838116),
        G = t(697333),
        P = t(168191),
        A = t(499900),
        V = t(420648),
        _ = t(303865),
        k = t(993190),
        F = t(555852);
      let z = {
        [a.MO]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 1,
          gameplayImageUrls: [m.Z, Z.Z],
        },
        [a.js]: {
          playersSuggestionMin: 4,
          playersSuggestionMax: 12,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [b.Z, g.Z],
        },
        [a.mI]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [],
        },
        [a.GR]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [V.Z, _.Z],
        },
        [a.PD]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [x.Z, w.Z],
        },
        [a.jT]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 2,
          gameplayImageUrls: [k.Z, F.Z],
        },
        [a.am]: {
          playersSuggestionMin: 3,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [M.Z, v.Z],
        },
        [a.Ec]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [d.Z, i.Z],
        },
        [a.l4]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [o.Z, l.Z],
        },
        [a.fE]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [u.Z, p.Z],
        },
        [a.IF]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 5,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [c.Z, s.Z],
        },
        [a.Zc]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 7,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [j.Z, C.Z],
        },
        [a.Gv]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [I.Z, U.Z],
        },
        [a.Cb]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [P.Z, A.Z],
        },
        [a.qG]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 4,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [f.Z, r.Z],
        },
        [a.f9]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [N.Z, G.Z],
        },
        [a.In]: { gameplayImageUrls: [h.Z, S.Z, y.Z] },
      };
    },
    412019: function (e, n, t) {
      t.d(n, {
        O: function () {
          return r;
        },
      });
      var a = t(735250);
      t(470079);
      var c = t(481060),
        s = t(447003),
        d = t(687352),
        i = t(237583),
        o = t(823379),
        l = t(619915),
        f = t(267027);
      function r(e) {
        let { channel: n, users: t } = e,
          r = (0, l.ZP)(n);
        return (0, a.jsxs)("div", {
          className: f.channelInfo,
          children: [
            (0, s.Z)(n)
              ? (0, a.jsx)(c.VoiceLockIcon, {
                  size: "md",
                  color: "currentColor",
                  className: f.speakerIcon,
                })
              : (0, a.jsx)(c.VoiceNormalIcon, {
                  size: "md",
                  color: "currentColor",
                  className: f.speakerIcon,
                }),
            (0, a.jsx)("div", { className: f.channelName, children: n.name }),
            r.length > 0
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", { className: f.divider }),
                    (0, a.jsx)(d.Z, {
                      embeddedApps: r,
                      className: f.channelItemActivities,
                    }),
                    (0, a.jsx)("div", {
                      className: f.channelActivitiesText,
                      children: r
                        .map((e) => {
                          var n;
                          return null === (n = e.application) || void 0 === n
                            ? void 0
                            : n.name;
                        })
                        .filter(o.lm)
                        .join(", "),
                    }),
                  ],
                })
              : null,
            (0, a.jsx)("div", {
              className: f.voiceUserContainer,
              children: (0, a.jsx)(i.Z, { users: t, max: 4 }),
            }),
          ],
        });
      }
    },
    431136: function (e, n, t) {
      t.d(n, {
        m: function () {
          return f;
        },
      });
      var a = t(735250);
      t(470079);
      var c = t(468194),
        s = t(399606),
        d = t(481060),
        i = t(430824),
        o = t(768581),
        l = t(419091);
      function f(e) {
        let { guildId: n } = e,
          t = (0, s.e7)([i.Z], () => i.Z.getGuild(n));
        if (null == t) return null;
        let f = null;
        if (null != t.icon) {
          let e = o.ZP.getGuildIconURL({ id: t.id, icon: t.icon, size: 40 });
          f = (0, a.jsx)(d.Avatar, {
            src: e,
            "aria-label": t.name,
            size: d.AvatarSizes.SIZE_24,
          });
        } else {
          let e = (0, c.Zg)(t.name).slice(0, 2);
          f = (0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            className: l.acronym,
            "aria-hidden": !0,
            children: e,
          });
        }
        return (0, a.jsxs)("div", {
          className: l.container,
          children: [
            f,
            (0, a.jsx)(d.Text, {
              variant: "text-md/semibold",
              className: l.text,
              children: t.name,
            }),
          ],
        });
      }
    },
    799911: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/4c01db851b60586bd7c5937df26af8446db5bee6ed2dc6db76593f05188014aa.webp";
    },
    222013: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/6b56edb523b4e2f6d75d64a8f4b82631e43022bfd54cfb507aa91a674cb36e34.webp";
    },
    38161: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/306c5124846a9eed82eef52c16863e1c627e29596ea4a5735612fadcb2da5d0a.webp";
    },
    15259: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/3ba9cb23d53c1f3ad84548d1f33c70e561dd52fb3f8e071bf3cb9c0a75c78029.webp";
    },
    517288: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/b4fbbb2d432e99ffeb8f045882da93033ed251f40a173a8105b06b1f1fd9a0ad.webp";
    },
    724491: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/f305db1132c563030066634afdbf39019a06f8921ce103c5f60c02052d716efc.webp";
    },
    271359: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/8e8949930966d5dd5728cd40f90a8a11a42292828f39f6f53efdee4d01d83d8b.webp";
    },
    241976: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/4a5ee7bd8bb0bbc7c1fdf12795467e400710047dc2f30ac1c50330ffb3632693.webp";
    },
    783466: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/9a0d7304c65909b61d3b93765b4a311c626487ede02e493a22c66026fb6d6b81.webp";
    },
    128584: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/fe1e5e86d073fbc336659c8796be1844d26ad8bedebcec6dfaa2827d4ad00702.webp";
    },
    469999: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/2729a543a4c56d58bfd5b83bdf5a504090940422fd49841afa33018b9cbc832e.webp";
    },
    607865: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/f74a7c3d2b16b8cd6f21be258901e6bcfc915dcf028d9b599150169c598a68e5.webp";
    },
    265661: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/4275cf7f1ee7b3172098c1b92daaa9b26648d42728b783dcaac9d9795d6ffcce.webp";
    },
    121517: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/9a0ed67e26305543547bffd61bff50760b820c347e5b9bef77d9f88fae4ec21c.webp";
    },
    295597: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/a38cf69a9864bc232e293dce13e75de2cc90dfe9f40c7de549fa9f4df5283e39.webp";
    },
    327510: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/f2b2bad6e8556256358039526c079a79f8f8ad50fdb2ee0548bf5cfba6cf7cea.webp";
    },
    465087: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/2a68659da386fe69d8e685085603c333b3fbb718a7cf682abdc5eb19d6a340c9.webp";
    },
    920496: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/2837e3bc329e41391154381124b66349658ec1e151fdf9e2e72fafef8ebd9fdf.webp";
    },
    39417: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/875f5fcf0bc87cd876775e07145282906cd9b59d73a813545af7b112621a3b76.webp";
    },
    641322: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/95864736be664b00a99a1a29f2117b63b311126779df57e101917a6ce8cade4d.webp";
    },
    829463: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/2140e4d3b04143215a0071d4b3e794666e1937745ca78fe0a303d21c116060a7.webp";
    },
    966310: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/2a48f3685e6329680003c6e66523ea00840f66dbd82a4a67288dc37c95d7b243.webp";
    },
    710227: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/ed040c7a2570b370b3aa9ee45a0d044e96b8ec8e2805a0d33b359f388bbb0b02.webp";
    },
    820836: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/e93ae1ceaa479c6b9c91870c27d7ddd0347dfa940304cde8cf0c8781c746f953.webp";
    },
    179603: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/251e553b4390d963ec52216806877152b1b30c6b0f08a574fb2cedcf4c36a5d2.webp";
    },
    838116: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/aa752d8917449525288c0d87ca38a0b482ae1f86d0b3a655c67a6dc91ac82015.webp";
    },
    697333: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/4c80691678ff47c78b00cce83d2562d4605b2580587ce4803a07eff3020f6766.webp";
    },
    168191: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/724cb192e4489d463ca267cfa9ef4cff42e105221bf745506f5650cf553c0e4f.webp";
    },
    499900: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/e38830a658e73d66d29b04922cc4407a73e43beea86a023d73f7409cbcf705c8.webp";
    },
    420648: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/c83896ec3bff6d3443e8728ff8574388eccba41ff3d38318a68d3c50a82b386e.webp";
    },
    303865: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/8b24c7853966e52a8250b53a48bbc0f276df6fd1a8bf9d60af0cca532cdc99d0.webp";
    },
    993190: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/a13a9ea3f43f4073ffdc0ebbdd7ab6e41eca8512e9bacf74b4f8811ca4773452.webp";
    },
    555852: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/17ac905beb181c6a03f87541822c95100f74482de49e48a97e79818606d36dbc.webp";
    },
  },
]);
//# sourceMappingURL=03eacb40684bef23ac5d.js.map
