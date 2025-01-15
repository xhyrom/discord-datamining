"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79521"],
  {
    207540: function (t, e, n) {
      n.r(e), n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        d = n(481060),
        a = n(933557),
        u = n(156699),
        s = n(734893),
        o = n(693196),
        _ = n(66999),
        E = n(575830),
        c = n(554747),
        I = n(434404),
        T = n(144140),
        g = n(314897),
        p = n(430824),
        m = n(496675),
        U = n(981631),
        C = n(388032),
        D = n(590629);
      e.default = (t) => {
        let { channel: e, onClose: n, onConfirm: G, transitionState: L } = t,
          f = (0, a.ZP)(e, !0),
          N = e.id,
          S = e.isForumPost(),
          y = (0, r.e7)([p.Z], () => p.Z.getGuild(e.getGuildId())),
          O = (0, c.u1)(N),
          { isSubscriptionGated: v } = (0, _.Z)(e.id),
          h = (0, E.Z)(y, e),
          [A, Z] = l.useState(),
          z = (0, r.e7)([g.default], () => e.isOwner(g.default.getId()), [e]),
          M = (0, r.e7)(
            [m.Z],
            () =>
              m.Z.can(
                e.isThread() ? U.Plq.MANAGE_THREADS : U.Plq.MANAGE_CHANNELS,
                e,
              ),
            [e],
          ),
          P = (0, r.e7)(
            [T.Z],
            () => {
              var t;
              return null !== (t = T.Z.getCount(e.id)) && void 0 !== t ? t : 0;
            },
            [e.id],
          ),
          H = S && (M || (z && P < 1)),
          R =
            O.length > 0 &&
            (e.type === U.d4z.GUILD_VOICE ||
              e.type === U.d4z.GUILD_STAGE_VOICE);
        if (
          (l.useEffect(() => {
            (async () => {
              if (!(await (0, u.C)(e.getGuildId(), N))) {
                Z(s.j.DEFAULT);
                return;
              }
              let t = await (0, o.T)(e.getGuildId(), N);
              if (null != t) {
                Z(t);
                return;
              }
            })();
          }, [e, N]),
          null != A)
        ) {
          let t;
          let e = C.intl.string(C.t.iWlB6u);
          return (
            (t =
              A === s.j.TODO
                ? C.t["/rjozM"]
                : A === s.j.RESOURCE
                  ? C.t.Nf5pt7
                  : C.t.ajiBwM),
            (0, i.jsxs)(d.ModalRoot, {
              transitionState: L,
              "aria-label": C.intl.string(C.t["TY/V+P"]),
              children: [
                (0, i.jsx)(d.ModalHeader, {
                  separator: !1,
                  children: (0, i.jsx)(d.Heading, {
                    variant: "heading-lg/semibold",
                    children: C.intl.string(C.t["TY/V+P"]),
                  }),
                }),
                (0, i.jsxs)(d.ModalContent, {
                  className: D.modalContent,
                  children: [
                    (0, i.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: e,
                    }),
                    (0, i.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: C.intl.format(t, {
                        onClick: () => {
                          null != y &&
                            (I.Z.open(y.id, U.pNK.ONBOARDING),
                            null == n || n());
                        },
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)(d.ModalFooter, {
                  children: (0, i.jsx)(d.Button, {
                    onClick: n,
                    children: C.intl.string(C.t.BddRzc),
                  }),
                }),
              ],
            })
          );
        }
        if (null == y) return null;
        if (
          y.hasFeature(U.oNc.COMMUNITY) &&
          (y.rulesChannelId === N || y.publicUpdatesChannelId === N)
        ) {
          let t = y.rulesChannelId === N,
            e = t ? C.intl.string(C.t.yjrZPj) : C.intl.string(C.t["1B1/ND"]);
          return (0, i.jsxs)(d.ModalRoot, {
            transitionState: L,
            "aria-label": C.intl.string(C.t["TY/V+P"]),
            children: [
              (0, i.jsx)(d.ModalHeader, {
                separator: !1,
                children: (0, i.jsx)(d.Heading, {
                  variant: "heading-lg/semibold",
                  children: C.intl.string(C.t["TY/V+P"]),
                }),
              }),
              (0, i.jsxs)(d.ModalContent, {
                children: [
                  (0, i.jsx)(d.Text, {
                    variant: "text-md/normal",
                    className: D.__invalid_modalText,
                    children: e,
                  }),
                  (0, i.jsx)(d.Text, {
                    variant: "text-md/normal",
                    className: D.__invalid_modalText,
                    children: C.intl.format(C.t["cg6U//"], {
                      onClick: () => {
                        I.Z.open(y.id, U.pNK.COMMUNITY), null == n || n();
                      },
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(d.ModalFooter, {
                children: (0, i.jsx)(d.Button, {
                  onClick: n,
                  children: C.intl.string(C.t.BddRzc),
                }),
              }),
            ],
          });
        }
        {
          let { deleteText: t, deleteBody: l } = (() => {
            if (e.type === U.d4z.GUILD_CATEGORY)
              return {
                deleteText: C.intl.string(C.t.ifbXnJ),
                deleteBody: C.intl.format(C.t.a6Gz9P, { channelName: f }),
              };
            if (e.isForumPost())
              return {
                deleteText: H
                  ? C.intl.string(C.t.nEOg1N)
                  : C.intl.string(C.t.xwMqDw),
                deleteBody:
                  H && z && !M
                    ? C.intl.format(C.t["6/pY29"], { postName: f })
                    : H
                      ? C.intl.format(C.t.su3voK, { postName: f })
                      : C.intl.string(C.t.RUHcys),
              };
            if (e.isThread())
              return {
                deleteText: C.intl.string(C.t.H7vTe3),
                deleteBody: C.intl.format(C.t.a6Gz9P, { channelName: f }),
              };
            else if (v && h > 0)
              return {
                deleteText: C.intl.string(C.t["8D8Rsb"]),
                deleteBody: C.intl.format(C.t["+qkiT0"], {
                  channelName: f,
                  numGuildRoleSubscriptionMembers: h,
                }),
              };
            return {
              deleteText: C.intl.string(C.t["8D8Rsb"]),
              deleteBody: C.intl.format(C.t.a6Gz9P, { channelName: f }),
            };
          })();
          return (0, i.jsxs)(d.ModalRoot, {
            transitionState: L,
            "aria-label": t,
            children: [
              (0, i.jsx)(d.ModalHeader, {
                separator: !1,
                children: (0, i.jsx)(d.Heading, {
                  variant: "heading-lg/semibold",
                  children: t,
                }),
              }),
              (0, i.jsxs)(d.ModalContent, {
                className: D.modalContent,
                children: [
                  (0, i.jsx)(d.Text, {
                    variant: "text-md/normal",
                    color: "header-primary",
                    children: l,
                  }),
                  R
                    ? (0, i.jsx)(d.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: D.warningText,
                        children: C.intl.format(C.t.Ze005O, {
                          count: O.length,
                        }),
                      })
                    : null,
                ],
              }),
              (0, i.jsxs)(d.ModalFooter, {
                children: [
                  (0, i.jsx)(d.Button, {
                    onClick: G,
                    color: d.Button.Colors.RED,
                    children: t,
                  }),
                  (0, i.jsx)(d.Button, {
                    onClick: n,
                    look: d.Button.Looks.LINK,
                    color: d.Button.Colors.PRIMARY,
                    children: C.intl.string(C.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          });
        }
      };
    },
    241155: function (t, e, n) {
      n(47120);
      var i,
        l,
        r,
        d,
        a = n(392711),
        u = n.n(a),
        s = n(442837),
        o = n(570140),
        _ = n(924301),
        E = n(601964),
        c = n(486527);
      let I = !1,
        T = {},
        g = {},
        p = {},
        m = (t) => (
          (p[t.guild_scheduled_event.id] = new E.ZP(
            t.guild_scheduled_event.guild,
          )),
          (g[t.guild_scheduled_event.id] = t.guild_scheduled_event),
          {
            channelId: t.directory_channel_id,
            scheduledEventId: t.entity_id,
            type: c.C2.GUILD_SCHEDULED_EVENT,
            authorId: t.author_id,
            createdAt: t.created_at,
          }
        );
      class U extends (i = s.ZP.Store) {
        isFetching() {
          return I;
        }
        getEventDirectoryEntries(t) {
          if (null != t) return T[t];
        }
        getCachedGuildByEventId(t) {
          var e;
          return null !== (e = p[t]) && void 0 !== e ? e : void 0;
        }
        getCachedGuildScheduledEventById(t) {
          var e;
          return null !== (e = g[t]) && void 0 !== e ? e : void 0;
        }
      }
      (d = "EventDirectoryStore"),
        (r = "displayName") in (l = U)
          ? Object.defineProperty(l, r, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = d),
        (e.Z = new U(o.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            I = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (t) {
            let { channelId: e, entries: n } = t;
            I = !1;
            let i = u().sortBy(
                [...n],
                [
                  function (t) {
                    return (0, _.CQ)(t.guild_scheduled_event);
                  },
                ],
              ),
              l = u().map(i, m);
            T[e] = l;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            I = !1;
          },
        }));
    },
    486527: function (t, e, n) {
      n.d(e, {
        AR: function () {
          return o;
        },
        C2: function () {
          return a;
        },
        Pp: function () {
          return g;
        },
        VX: function () {
          return u;
        },
        b7: function () {
          return T;
        },
        sE: function () {
          return s;
        },
      });
      var i,
        l,
        r,
        d,
        a,
        u,
        s,
        o,
        _ = n(149765),
        E = n(700785),
        c = n(981631),
        I = n(388032);
      ((i = a || (a = {}))[(i.GUILD = 0)] = "GUILD"),
        (i[(i.GUILD_SCHEDULED_EVENT = 1)] = "GUILD_SCHEDULED_EVENT"),
        ((l = u || (u = {})).GUILD_TEMPLATES = "guild-templates"),
        (l.CUSTOMIZE_NEW_GUILD = "customize-new-guild"),
        (l.CHOOSE_GUILD = "choose-guild"),
        (l.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild"),
        (l.CONFIRMATION = "confirmation"),
        ((r = s || (s = {})).CREATE = "CREATE"),
        (r.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB"),
        (r.HUB_STUDY = "HUB_STUDY"),
        (r.HUB_CLASS = "HUB_CLASS"),
        (r.HUB_SOCIAL = "HUB_SOCIAL"),
        (r.HUB_MAJOR = "HUB_MAJOR"),
        (r.HUB_DORM = "HUB_DORM"),
        ((d = o || (o = {}))[(d.ALL = -1)] = "ALL"),
        (d[(d.UNCATEGORIZED = 0)] = "UNCATEGORIZED"),
        (d[(d.SCHOOL_CLUB = 1)] = "SCHOOL_CLUB"),
        (d[(d.CLASS = 2)] = "CLASS"),
        (d[(d.STUDY_SOCIAL = 3)] = "STUDY_SOCIAL"),
        (d[(d.MISC = 5)] = "MISC");
      function T(t) {
        return "883060064561299456" === t
          ? [
              { value: 1, label: I.intl.string(I.t["Z+MPNz"]) },
              { value: 2, label: I.intl.string(I.t.dV9uBg) },
              { value: 3, label: I.intl.string(I.t.xoHQcn) },
              { value: 5, label: I.intl.string(I.t.Ao41rq) },
            ]
          : [
              { value: 1, label: I.intl.string(I.t.oNHFUF), idealSize: 100 },
              { value: 2, label: I.intl.string(I.t.V1i8nZ) },
              { value: 3, label: I.intl.string(I.t.Z2ygQk), idealSize: 50 },
              { value: 5, label: I.intl.string(I.t["0Bg9LS"]) },
            ];
      }
      function g() {
        return {
          CREATE: {
            id: "CREATE",
            code: "2TffvPucqHkN",
            label: I.intl.string(I.t["H3+6BA"]),
            channels: [],
            system_channel_id: null,
          },
          HUB_SCHOOL_CLUB: {
            id: "HUB_SCHOOL_CLUB",
            code: "UMUbvRpRZhS6",
            label: I.intl.string(I.t["mmFA5+"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["VCAA/f"]),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t.GHQoER),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.nSsoSE),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: I.intl.string(I.t.yZCzMT),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.mobYpK),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: c.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.string(I.t.hi1Ykp),
                type: c.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.string(I.t.vw8oaW),
                type: c.d4z.GUILD_VOICE,
              },
            ],
            roles: [
              { id: "00", name: "@everyone", permissions: E.TP },
              {
                id: "01",
                name: "officers (example)",
                mentionable: !0,
                hoist: !0,
                permissions: _.$e(
                  E.TP,
                  c.Plq.MANAGE_ROLES,
                  c.Plq.MANAGE_CHANNELS,
                  c.Plq.KICK_MEMBERS,
                  c.Plq.BAN_MEMBERS,
                  c.Plq.MANAGE_NICKNAMES,
                  c.Plq.MANAGE_GUILD_EXPRESSIONS,
                  c.Plq.MANAGE_MESSAGES,
                  c.Plq.SEND_TTS_MESSAGES,
                ),
                color: 3066993,
              },
            ],
            system_channel_id: "12",
          },
          HUB_STUDY: {
            id: "HUB_STUDY",
            code: "2JBhzzca2vfT",
            label: I.intl.string(I.t.fYwSi4),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["HY+vdH"]),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t["3eM+Li"]),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.Qi0D7e),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: c.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 1 }),
                type: c.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 2 }),
                type: c.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_CLASS: {
            id: "HUB_CLASS",
            code: "r86WWBwTGspb",
            label: I.intl.string(I.t.e5gFS0),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["HY+vdH"]),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t["710tNj"]),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.Qi0D7e),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: c.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 1 }),
                type: c.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 2 }),
                type: c.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_SOCIAL: {
            id: "HUB_SOCIAL",
            code: "AvvtXE3mfbCR",
            label: I.intl.string(I.t.oOj7Ii),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t.pIOigI),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.ao2wxs),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: I.intl.string(I.t.AIszv7),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "04",
                parent_id: "00",
                name: I.intl.string(I.t.d4F8gI),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.CLWKNj),
                type: c.d4z.GUILD_VOICE,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.g3qPRk),
                type: c.d4z.GUILD_VOICE,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.yQZpe3),
                type: c.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "02",
          },
          HUB_MAJOR: {
            id: "HUB_MAJOR",
            code: "FhmfDR6Arvsc",
            label: I.intl.string(I.t["9kly4e"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["HY+vdH"]),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t.yZCzMT),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.Qi0D7e),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: c.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 1 }),
                type: c.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 2 }),
                type: c.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_DORM: {
            id: "HUB_DORM",
            code: "fkq8xHfrGE58",
            label: I.intl.string(I.t["ppGw/P"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["HY+vdH"]),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t["b2+FCQ"]),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: c.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: c.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: c.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.string(I.t.g3qPRk),
                type: c.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: I.intl.string(I.t.CLWKNj),
                type: c.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
        };
      }
    },
    693196: function (t, e, n) {
      n.d(e, {
        T: function () {
          return a;
        },
      });
      var i = n(526120),
        l = n(563534),
        r = n(734893),
        d = n(931261);
      async function a(t, e) {
        if (null == t || !(0, d.s)(t)) return;
        let n = l.Z.getSettings(t);
        return (n === l.P && (await (0, i.cP)(t), (n = l.Z.getSettings(t))),
        n === l.P || null == n)
          ? void 0
          : null != n.newMemberActions &&
              null != n.newMemberActions.find((t) => t.channelId === e)
            ? r.j.TODO
            : null != n.resourceChannels &&
                null != n.resourceChannels.find((t) => t.channelId === e)
              ? r.j.RESOURCE
              : void 0;
      }
    },
    637565: function (t, e, n) {
      n.d(e, {
        T: function () {
          return a;
        },
      }),
        n(47120);
      var i = n(149765),
        l = n(973542),
        r = n(790285),
        d = n(981631);
      function a(t, e, n) {
        let a = new Set();
        for (let t of Object.keys(n.permissionOverwrites)) {
          let i = e[t],
            d = n.permissionOverwrites[t];
          (0, l.Z)(i) && (0, r.TG)(n, d) && a.add(i);
        }
        let u = e[t.getEveryoneRoleId()],
          s = null != u && !i.e$(u.permissions, d.Plq.VIEW_CHANNEL),
          o = (0, r.wB)(n, n.permissionOverwrites[t.id]);
        if (s && !o)
          for (let t of Object.values(e))
            (0, l.Z)(t) && (0, r.MT)(t) && a.add(t);
        return [...a];
      }
    },
    14263: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return u;
        },
      });
      var i = n(192379),
        l = n(442837),
        r = n(480608),
        d = n(243730);
      let a = {};
      function u(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, l.e7)([d.Z], () => d.Z.getRoleMemberCount(t));
        return (
          i.useEffect(() => {
            if (null == t) return;
            let n = a[t];
            !(null != n && e > 0 && Date.now() - n < e) &&
              ((a[t] = Date.now()), r.E(t));
          }, [t, e]),
          n
        );
      }
    },
    575830: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(442837),
        r = n(430824),
        d = n(637565),
        a = n(14263);
      function u(t, e) {
        let n = (0, l.e7)([r.Z], () =>
            null != t ? r.Z.getRoles(t.id) : void 0,
          ),
          u = (0, a.Z)(null == t ? void 0 : t.id);
        return i.useMemo(() => {
          let i = null != t && null != n ? (0, d.T)(t, n, e) : [],
            l = 0;
          for (let t of i) {
            let e = t.id;
            if (null != e) {
              let t = null == u ? void 0 : u[e];
              null != t && (l += t);
            }
          }
          return l;
        }, [u, t, e, n]);
      }
    },
    658041: function (t, e, n) {
      n.d(e, {
        M: function () {
          return a;
        },
      });
      var i = n(913527),
        l = n.n(i),
        r = n(709054),
        d = n(765305);
      function a(t, e, n, i) {
        let a = l()(),
          u = new Date(t.scheduled_start_time).getTime(),
          s = { start: u - d.VF, end: u };
        if (a.isBetween(s.start, s.end)) {
          if (null != e) {
            let t = l()(e),
              n = t.isBetween(s.start, s.end),
              r = t.isBetween(l()(u).subtract(d.zV, "days"), u);
            return n || (r && !i) ? void 0 : d.X_.EVENT_STARTING_SOON;
          }
          return d.X_.EVENT_STARTING_SOON;
        }
        let o = r.default.extractTimestamp(t.id),
          _ = Math.min((null != n ? n : o) + d.Fc, u);
        if (a.isBetween(o, _) && null == e && !i) return d.X_.NEW_EVENT;
      }
    },
    835184: function (t, e, n) {
      var i,
        l = n(442837),
        r = n(570140),
        d = n(314897),
        a = n(924301),
        u = n(658041),
        s = n(765305);
      function o(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let _ = {},
        E = {};
      function c(t) {
        let e = { ..._ };
        delete e[t], (_ = e);
        let n = { ...E };
        delete n[t], (E = n);
      }
      class I extends (i = l.ZP.PersistedStore) {
        initialize(t) {
          if (null != t) {
            var e, n;
            (_ =
              null !== (e = t.upcomingEventDismissals) && void 0 !== e
                ? e
                : {}),
              (E =
                null !== (n = t.upcomingEventSeenTimestamps) && void 0 !== n
                  ? n
                  : {});
          }
        }
        getGuildEventNoticeDismissalTime(t) {
          return _[t];
        }
        getAllEventDismissals() {
          return _;
        }
        getUpcomingNoticeSeenTime(t) {
          return E[t];
        }
        getAllUpcomingNoticeSeenTimes() {
          return E;
        }
        getState() {
          return { upcomingEventDismissals: _, upcomingEventSeenTimestamps: E };
        }
      }
      o(I, "displayName", "UpcomingEventNoticesStore"),
        o(I, "persistKey", "UpcomingEventNotices"),
        (e.Z = new I(r.Z, {
          UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (t) {
            let { eventId: e } = t,
              n = { ..._ };
            (n[e] = Date.now()), (_ = n);
          },
          GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
            let { guildScheduledEvent: e } = t;
            (e.status === s.p1.CANCELED || e.status === s.p1.COMPLETED) &&
              c(e.id);
          },
          GUILD_SCHEDULED_EVENT_DELETE: function (t) {
            let { guildScheduledEvent: e } = t;
            c(e.id);
          },
          GUILD_SCHEDULED_EVENT_USER_ADD: function (t) {
            let { userId: e, guildEventId: n } = t;
            if (e !== d.default.getId()) return;
            let i = a.ZP.getGuildScheduledEvent(n);
            if (null == i || i.status !== s.p1.SCHEDULED || null != _[n])
              return;
            let l = E[n];
            if ((0, u.M)(i, void 0, l, !1) === s.X_.NEW_EVENT) {
              let t = { ..._ };
              (t[n] = Date.now()), (_ = t);
            }
          },
          UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (t) {
            let { guildEventId: e } = t,
              n = { ...E };
            (n[e] = Date.now()), (E = n);
          },
        }));
    },
    554747: function (t, e, n) {
      n.d(e, {
        Vm: function () {
          return f;
        },
        ZP: function () {
          return D;
        },
        eF: function () {
          return y;
        },
        gM: function () {
          return L;
        },
        k5: function () {
          return N;
        },
        qY: function () {
          return G;
        },
        sz: function () {
          return O;
        },
        u1: function () {
          return S;
        },
      }),
        n(47120),
        n(724458);
      var i = n(192379),
        l = n(442837),
        r = n(241155),
        d = n(592125),
        a = n(984933),
        u = n(430824),
        s = n(496675),
        o = n(70956),
        _ = n(823379),
        E = n(924301),
        c = n(658041),
        I = n(835184),
        T = n(79874),
        g = n(854698),
        p = n(765305),
        m = n(981631);
      let U = [],
        C = 15 * o.Z.Millis.MINUTE;
      function D(t, e) {
        return (0, l.Wu)(
          [u.Z, r.Z, E.ZP, s.Z, d.Z, a.ZP],
          () => {
            let n = u.Z.getGuild(t);
            if (null == n) return U;
            if (n.hasFeature(m.oNc.HUB)) {
              var i, l;
              let t =
                null === (i = a.ZP.getDefaultChannel(n.id)) || void 0 === i
                  ? void 0
                  : i.id;
              return (
                null !== (l = r.Z.getEventDirectoryEntries(t)) && void 0 !== l
                  ? l
                  : []
              )
                .map((t) => {
                  let e = t.scheduledEventId,
                    n = E.ZP.getGuildScheduledEvent(e);
                  return null != n
                    ? n
                    : r.Z.getCachedGuildScheduledEventById(e);
                })
                .filter(_.lm);
            }
            return E.ZP.getGuildScheduledEventsByIndex(
              null != e ? e : E.bN.GUILD_EVENT_UPCOMING(n.id),
            ).filter((t) => {
              let e = t.channel_id;
              if (null == e) return !0;
              let n = d.Z.getChannel(e);
              return s.Z.can(m.Plq.VIEW_CHANNEL, n);
            });
          },
          [e, t],
        );
      }
      function G(t) {
        return (0, l.e7)(
          [E.ZP, d.Z, s.Z],
          () => {
            let e = d.Z.getChannel(t);
            if (
              !s.Z.can(m.Plq.VIEW_CHANNEL, e) ||
              null == (null == e ? void 0 : e.guild_id)
            )
              return null;
            let n = E.ZP.getGuildScheduledEventsByIndex(
              E.bN.CHANNEL_EVENT_ACTIVE(t),
            );
            return n.length > 0 ? n[0] : null;
          },
          [t],
        );
      }
      function L(t) {
        let e = (0, l.Wu)(
          [E.ZP],
          () => E.ZP.getGuildScheduledEventsForGuild(t),
          [t],
        );
        return i.useMemo(() => {
          let t = new Map();
          return (
            e.forEach((e) => {
              let n = e.channel_id;
              null != n && t.set(n, e);
            }),
            t
          );
        }, [e]);
      }
      function f(t) {
        var e, n;
        let i =
            ((e = t),
            (0, l.Wu)(
              [E.ZP, d.Z, s.Z],
              () =>
                E.ZP.getGuildScheduledEventsByIndex(
                  E.bN.GUILD_EVENT_UPCOMING(e),
                ).filter((t) => {
                  if (
                    t.entity_type === p.WX.NONE ||
                    t.status !== p.p1.SCHEDULED
                  )
                    return !1;
                  if (null == t.channel_id) return !0;
                  let e = d.Z.getChannel(t.channel_id);
                  return s.Z.can(m.Plq.VIEW_CHANNEL, e);
                }),
              [e],
            )),
          r = (0, l.cj)([I.Z], () => I.Z.getAllEventDismissals()),
          a = (0, l.cj)([I.Z], () => I.Z.getAllUpcomingNoticeSeenTimes()),
          o = (0, l.cj)(
            [E.ZP],
            () =>
              null == i
                ? {}
                : i.reduce((t, e) => {
                    let n = (0, g.DK)(e);
                    return {
                      ...t,
                      [e.id]: E.ZP.isInterestedInEventRecurrence(e.id, n),
                    };
                  }, {}),
            [i],
          ),
          _ = (0, l.e7)([u.Z], () => u.Z.getGuild(t)),
          T =
            null != _ &&
            !_.hasFeature(m.oNc.COMMUNITY) &&
            _.hasFeature(m.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != i && null != o && T)
          for (let t = 0; t < i.length; t++) {
            let e = i[t],
              l = r[e.id],
              d = a[e.id],
              u = null !== (n = o[e.id]) && void 0 !== n && n,
              s = (0, c.M)(e, l, d, u);
            if (null != s) return { upcomingEvent: e, noticeType: s };
          }
      }
      function N(t) {
        return (0, l.e7)(
          [E.ZP, d.Z, s.Z],
          () =>
            E.ZP.getGuildScheduledEventsByIndex(
              E.bN.GUILD_EVENT_ACTIVE(t),
            ).find((t) => {
              if (t.entity_type === p.WX.NONE || !(0, E.xt)(t)) return !1;
              if (null == t.channel_id) return !0;
              let e = d.Z.getChannel(t.channel_id);
              return s.Z.can(m.Plq.VIEW_CHANNEL, e);
            }),
          [t],
        );
      }
      function S(t) {
        return (0, l.e7)(
          [E.ZP],
          () =>
            E.ZP.getGuildScheduledEventsByIndex(E.bN.CHANNEL_EVENT_UPCOMING(t)),
          [t],
        );
      }
      function y(t) {
        return (0, l.e7)(
          [d.Z, E.ZP],
          () => {
            let e = E.ZP.getGuildScheduledEventsByIndex(
              E.bN.GUILD_EVENT_ACTIVE(t),
            ).find((t) => null != d.Z.getChannel(t.channel_id));
            return d.Z.getChannel(null == e ? void 0 : e.channel_id);
          },
          [t],
        );
      }
      function O(t) {
        let [e, n] = i.useState(() => Date.now());
        i.useEffect(() => {
          let t = setInterval(() => {
            n(Date.now());
          }, C);
          return () => clearInterval(t);
        }, []);
        let r = (0, l.e7)(
          [E.ZP],
          () =>
            null == t
              ? []
              : E.ZP.getGuildScheduledEventsByIndex(
                  E.bN.CHANNEL_EVENT_UPCOMING(t),
                ),
          [t, e],
        );
        return i.useMemo(
          () =>
            r.filter((t) => {
              let { startTime: e, endTime: n } = (0, T.Kq)(t),
                { withinStartWindow: i, diffMinutes: l } = (0, g.ub)(
                  e.toISOString(),
                  null == n ? void 0 : n.toISOString(),
                );
              return t.status !== p.p1.ACTIVE && i && l < 15;
            }),
          [r],
        );
      }
    },
    590629: function (t, e, n) {
      t.exports = {
        modalContent: "modalContent_d7625c",
        warningText: "warningText_d7625c",
      };
    },
  },
]);
//# sourceMappingURL=6c6d57b0deb05852c1f3.js.map
