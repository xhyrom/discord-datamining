"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79653"],
  {
    139230: function (e, a, i) {
      i.r(a),
        i.d(a, {
          default: function () {
            return A;
          },
        }),
        i(47120),
        i(789020);
      var n = i(735250),
        l = i(470079),
        t = i(266067),
        s = i(692547),
        r = i(481060),
        d = i(100527),
        c = i(906732),
        o = i(895924),
        u = i(70097),
        m = i(665149),
        v = i(703656),
        I = i(630388),
        x = i(566620),
        _ = i(122613),
        h = i(678173),
        b = i(880308),
        C = i(636508),
        p = i(696068),
        g = i(361213),
        j = i(778569),
        E = i(412019),
        T = i(431136),
        N = i(226799),
        y = i(981631),
        D = i(689938),
        S = i(710137);
      function A(e) {
        var a, i;
        let { match: o } = e,
          _ = null !== (a = (0, v.DR)()) && void 0 !== a ? a : [],
          { analyticsLocations: C } = (0, c.ZP)([
            ..._,
            d.Z.ACTIVITY_DETAIL_PAGE,
          ]),
          { applicationId: p } = o.params;
        (0, b.g)(),
          l.useEffect(() => {
            (0, x.w1)({ guildId: null });
          }, []);
        let E = (0, j.Z)({
            applicationId: null != p ? p : "",
            size: 2048,
            names: ["embedded_cover"],
          }),
          T = (0, h.T)(null, null != p && "" !== p ? p : null);
        if (null == p || null == T) return null;
        if (!(0, I.yE)(T.application.flags, y.udG.EMBEDDED))
          return (0, n.jsx)(t.l_, { to: y.Z5c.ACTIVITIES });
        let A =
            null != T.activity.activity_preview_video_asset_id
              ? (0, g.Z)(p, T.activity.activity_preview_video_asset_id)
              : null,
          f = N.o[p],
          k =
            (null == f ? void 0 : f.playersSuggestionMin) != null &&
            (null == f ? void 0 : f.playersSuggestionMax) != null
              ? ""
                  .concat(f.playersSuggestionMin, " - ")
                  .concat(f.playersSuggestionMax)
              : void 0;
        return (0, n.jsx)(c.Gt, {
          value: C,
          children: (0, n.jsxs)("div", {
            className: S.outerContainer,
            children: [
              (0, n.jsxs)(m.ZP, {
                children: [
                  (0, n.jsxs)("div", {
                    className: S.titleContainer,
                    children: [
                      (0, n.jsx)(r.ActivitiesIcon, {
                        size: "md",
                        color: "currentColor",
                        className: S.rocketIcon,
                      }),
                      (0, n.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        children: T.application.name,
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: S.__invalid_headerBarRightSideFiller,
                  }),
                ],
              }),
              (0, n.jsx)(r.Scroller, {
                className: S.scroller,
                children: (0, n.jsxs)("div", {
                  className: S.innerContainer,
                  children: [
                    (0, n.jsxs)("div", {
                      className: S.header,
                      children: [
                        (0, n.jsx)("img", {
                          src: E.url,
                          className: S.headerImage,
                          alt: T.application.name,
                        }),
                        (0, n.jsx)("div", { className: S.headerImageOverlay }),
                        (0, n.jsxs)(r.Clickable, {
                          onClick: () => {
                            (0, v.op)();
                          },
                          className: S.backButtonContainer,
                          children: [
                            (0, n.jsx)(r.ChevronSmallLeftIcon, {
                              size: "md",
                              color: s.Z.unsafe_rawColors.WHITE_100,
                              className: S.backButtonIcon,
                            }),
                            (0, n.jsx)(r.Heading, {
                              color: "always-white",
                              variant: "heading-lg/semibold",
                              children: D.Z.Messages.BACK,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: S.detailsOuterContainer,
                      children: (0, n.jsx)("div", {
                        className: S.detailsInnerContainer,
                        children: (0, n.jsxs)("div", {
                          className: S.detailsInnerInnerContainer,
                          children: [
                            (0, n.jsxs)("div", {
                              className: S.activityDetailsContainer,
                              children: [
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("div", {
                                      className: S.detailsTitle,
                                      children: (0, n.jsx)(r.Heading, {
                                        variant: "heading-xxl/bold",
                                        children: T.application.name,
                                      }),
                                    }),
                                    (0, n.jsxs)("div", {
                                      className: S.detailsDetails,
                                      children: [
                                        null != k
                                          ? (0, n.jsxs)("div", {
                                              className: S.detailItem,
                                              children: [
                                                (0, n.jsx)(r.GroupIcon, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                }),
                                                (0, n.jsx)(r.Text, {
                                                  variant: "text-xs/semibold",
                                                  className: S.detailItemText,
                                                  children:
                                                    D.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format(
                                                      { nPlayers: k },
                                                    ),
                                                }),
                                              ],
                                            })
                                          : null,
                                        (null == f
                                          ? void 0
                                          : f.timeSuggestionMinutes) != null
                                          ? (0, n.jsxs)("div", {
                                              className: S.detailItem,
                                              children: [
                                                (0, n.jsx)(r.HourglassIcon, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                }),
                                                (0, n.jsx)(r.Text, {
                                                  variant: "text-xs/semibold",
                                                  className: S.detailItemText,
                                                  children:
                                                    D.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format(
                                                      {
                                                        nMinutes:
                                                          f.timeSuggestionMinutes,
                                                      },
                                                    ),
                                                }),
                                              ],
                                            })
                                          : null,
                                        (0, n.jsxs)("div", {
                                          className: S.detailItem,
                                          children: [
                                            (0, n.jsx)(r.TagsIcon, {
                                              size: "xs",
                                              color: "currentColor",
                                            }),
                                            (0, n.jsx)(r.Text, {
                                              variant: "text-xs/semibold",
                                              className: S.detailItemText,
                                              children: T.application.tags
                                                .slice(0, 3)
                                                .join(", "),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsx)(r.Heading, {
                                  variant: "heading-lg/medium",
                                  className: S.detailsDescription,
                                  children: T.application.description,
                                }),
                                (0, n.jsx)("div", { className: S.divider }),
                                (0, n.jsxs)("div", {
                                  className: S.imagesContainer,
                                  children: [
                                    (null !==
                                      (i =
                                        null == f
                                          ? void 0
                                          : f.gameplayImageUrls) && void 0 !== i
                                      ? i
                                      : []
                                    ).map((e) =>
                                      (0, n.jsx)(
                                        "img",
                                        {
                                          src: e,
                                          alt: D.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format(
                                            {
                                              activityName: T.application.name,
                                            },
                                          ),
                                          className: S.activityImage,
                                        },
                                        e,
                                      ),
                                    ),
                                    (0, n.jsx)(u.Z, {
                                      loop: !0,
                                      autoPlay: !0,
                                      muted: !0,
                                      className: S.activityImage,
                                      src: A,
                                      poster: E.url,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: S.launcherOuterContainer,
                              children: (0, n.jsx)(M, { activityItem: T }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function M(e) {
        var a, t;
        let { activityItem: s } = e,
          { analyticsLocations: d } = (0, c.ZP)(),
          [u, m] = l.useState(
            null !== (a = (0, C.$)()) && void 0 !== a ? a : void 0,
          ),
          [v, I] = l.useState(
            null !== (t = (0, p.d)({ guildId: u })) && void 0 !== t
              ? t
              : void 0,
          ),
          x = (0, C.W)(),
          h = (0, p.F)(u),
          b = l.useCallback(async () => {
            var e;
            if (null != v && null != u)
              await (0, _.Z)({
                targetApplicationId:
                  null == s
                    ? void 0
                    : null === (e = s.application) || void 0 === e
                      ? void 0
                      : e.id,
                channelId: v,
                analyticsLocations: d,
                commandOrigin: o.bB.ACTIVITY_DETAILS,
              });
          }, [s, d, v, u]),
          g = l.useCallback(() => {
            (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                i.e("60133"),
                i.e("87546"),
              ]).then(i.bind(i, 827940));
              return (a) =>
                (0, n.jsx)(e, { activityItem: s, ...a, analyticsLocations: d });
            });
          }, [s, d]);
        return (0, n.jsxs)("div", {
          className: S.launcherInnerContainer,
          children: [
            (0, n.jsx)(r.Text, {
              variant: "text-md/medium",
              children: D.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE,
            }),
            (0, n.jsx)(r.Select, {
              placeholder: D.Z.Messages.GUILD_SELECT,
              optionClassName: S.__invalid_option,
              options: x,
              renderOptionValue: (e) => {
                let a = e.find((e) => e.value === u);
                return null == a ? null : (0, n.jsx)(T.m, { guildId: a.value });
              },
              renderOptionLabel: (e) => {
                let { value: a } = e;
                return (0, n.jsx)(T.m, { guildId: a });
              },
              isSelected: (e) => e === u,
              select: (e) => {
                var a;
                m(e),
                  I(
                    null !== (a = (0, p.d)({ guildId: e })) && void 0 !== a
                      ? a
                      : void 0,
                  );
              },
              serialize: (e) => e,
            }),
            (0, n.jsx)(r.Select, {
              placeholder:
                D.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
              optionClassName: S.__invalid_option,
              options: h,
              isSelected: (e) => {
                let { channel: a } = e;
                return a.id === v;
              },
              select: (e) => {
                let { channel: a } = e;
                return I(a.id);
              },
              serialize: (e) => {
                let { channel: a } = e;
                return a.id;
              },
              renderOptionValue: () => {
                let e = h.find((e) => e.value.channel.id === v);
                return null == e
                  ? null
                  : (0, n.jsx)(E.O, {
                      channel: e.value.channel,
                      users: e.value.users,
                    });
              },
              renderOptionLabel: (e) => {
                let {
                  value: { channel: a, users: i },
                } = e;
                return (0, n.jsx)(E.O, { channel: a, users: i });
              },
            }),
            (0, n.jsx)(r.Button, {
              fullWidth: !0,
              disabled:
                null == u ||
                null == v ||
                !x.some((e) => e.value === u) ||
                !h.some((e) => e.value.channel.id === v),
              onClick: b,
              children: D.Z.Messages.START,
            }),
            (0, n.jsx)("div", { className: S.divider }),
            (0, n.jsx)(r.Button, {
              fullWidth: !0,
              color: r.Button.Colors.PRIMARY,
              onClick: g,
              children: D.Z.Messages.SHARE,
            }),
          ],
        });
      }
    },
    710137: function (e, a, i) {
      e.exports = {
        outerContainer: "outerContainer_b58db2",
        rocketIcon: "rocketIcon_b58db2",
        scroller: "scroller_b58db2",
        innerContainer: "innerContainer_b58db2",
        header: "header_b58db2",
        headerImage: "headerImage_b58db2",
        headerImageOverlay: "headerImageOverlay_b58db2",
        backButtonContainer: "backButtonContainer_b58db2",
        titleContainer: "titleContainer_b58db2",
        backButtonIcon: "backButtonIcon_b58db2",
        detailsOuterContainer: "detailsOuterContainer_b58db2",
        detailsInnerContainer: "detailsInnerContainer_b58db2",
        detailsInnerInnerContainer: "detailsInnerInnerContainer_b58db2",
        activityDetailsContainer: "activityDetailsContainer_b58db2",
        detailsTitle: "detailsTitle_b58db2",
        detailsDetails: "detailsDetails_b58db2",
        detailItem: "detailItem_b58db2",
        detailItemText: "detailItemText_b58db2",
        detailsDescription: "detailsDescription_b58db2",
        divider: "divider_b58db2",
        imagesContainer: "imagesContainer_b58db2",
        activityImage: "activityImage_b58db2",
        launcherOuterContainer: "launcherOuterContainer_b58db2",
        launcherInnerContainer: "launcherInnerContainer_b58db2",
      };
    },
    267027: function (e, a, i) {
      e.exports = {
        channelInfo: "channelInfo_c573a1",
        speakerIcon: "speakerIcon_c573a1",
        divider: "divider_c573a1",
        channelName: "channelName_c573a1",
        channelItemActivities: "channelItemActivities_c573a1",
        channelActivitiesText:
          "channelActivitiesText_c573a1 channelName_c573a1",
        voiceUserContainer: "voiceUserContainer_c573a1",
      };
    },
    419091: function (e, a, i) {
      e.exports = {
        container: "container_e2cb96",
        acronym: "acronym_e2cb96",
        text: "text_e2cb96",
      };
    },
  },
]);
//# sourceMappingURL=5cf88196711133ed53aa.js.map
